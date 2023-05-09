# dataAPI

## Overview

Exposes endpoints for reading and writing documents in OPA. For an explanation of the different types of documents, see [the OPA document model](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)

### Available Operations

* [deleteDocument](#deletedocument) - Delete a document
* [getDocument](#getdocument) - Get a document
* [getDocumentWithPath](#getdocumentwithpath) - Get a document (with input)
* [getDocumentWithWebHook](#getdocumentwithwebhook) - Get a document (with webhook)
* [patchDocument](#patchdocument) - Update a document
* [putDocument](#putdocument) - Create or overwrite a document

## deleteDocument

This API endpoint deletes an existing document from the server

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDocumentRequest;
import org.openapis.openapi.models.operations.DeleteDocumentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDocumentRequest req = new DeleteDocumentRequest("debitis");            

            DeleteDocumentResponse res = sdk.dataAPI.deleteDocument(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocument

This API endpoint returns the document specified by `path`.

The server will return a *bad request* (400) response if either:
- The query requires an input document and you do not provide it
- You provide the input document but the query has already defined it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentRequest;
import org.openapis.openapi.models.operations.GetDocumentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDocumentRequest req = new GetDocumentRequest("ipsa") {{
                explain = "delectus";
                input = new java.util.HashMap<String, Object>() {{
                    put("suscipit", "molestiae");
                    put("minus", "placeat");
                }};
                instrument = false;
                metrics = false;
                pretty = false;
                provenance = false;
            }};            

            GetDocumentResponse res = sdk.dataAPI.getDocument(req);

            if (res.getDocument200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocumentWithPath

The server will return a *bad request* (400) response if either:
- The query requires an input document and you do not provide it
- You provided an input document but the query has already defined it.

If `path` indexes into an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, a *not found* response (404) will be returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentWithPathRequest;
import org.openapis.openapi.models.operations.GetDocumentWithPathResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDocumentWithPathRequest req = new GetDocumentWithPathRequest("voluptatum".getBytes(), "iusto") {{
                explain = "excepturi";
                instrument = false;
                metrics = false;
                pretty = false;
                provenance = false;
            }};            

            GetDocumentWithPathResponse res = sdk.dataAPI.getDocumentWithPath(req);

            if (res.getDocumentWithPath200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocumentWithWebHook

The example given here assumes you have created a policy (with `PUT /v1/policies/{path}`), such as:

  ```yaml
  package opa.examples
  import input.example.flag
  allow_request { flag == true }
  ```

The server will return a *not found* (404) response if the requested document is missing or undefined.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentWithWebHookRequest;
import org.openapis.openapi.models.operations.GetDocumentWithWebHookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDocumentWithWebHookRequest req = new GetDocumentWithWebHookRequest("nisi".getBytes(), "recusandae") {{
                pretty = false;
            }};            

            GetDocumentWithWebHookResponse res = sdk.dataAPI.getDocumentWithWebHook(req);

            if (res.getDocumentWithWebHook200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchDocument

This API endpoint updates an existing document on the server by describing the changes required (using [JSON patch operations](http://jsonpatch.com/))

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchDocumentRequest;
import org.openapis.openapi.models.operations.PatchDocumentResponse;
import org.openapis.openapi.models.shared.PatchesSchema;
import org.openapis.openapi.models.shared.PatchesSchemaOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchDocumentRequest req = new PatchDocumentRequest(                new org.openapis.openapi.models.shared.PatchesSchema[]{{
                                add(new PatchesSchema(PatchesSchemaOpEnum.ADD, "-") {{
                                    op = PatchesSchemaOpEnum.ADD;
                                    path = "-";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("quis", "veritatis");
                                    }};
                                }}),
                                add(new PatchesSchema(PatchesSchemaOpEnum.ADD, "-") {{
                                    op = PatchesSchemaOpEnum.ADD;
                                    path = "-";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("perferendis", "ipsam");
                                        put("repellendus", "sapiente");
                                        put("quo", "odit");
                                    }};
                                }}),
                                add(new PatchesSchema(PatchesSchemaOpEnum.ADD, "-") {{
                                    op = PatchesSchemaOpEnum.ADD;
                                    path = "-";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("at", "maiores");
                                        put("molestiae", "quod");
                                        put("quod", "esse");
                                        put("totam", "porro");
                                    }};
                                }}),
                                add(new PatchesSchema(PatchesSchemaOpEnum.ADD, "-") {{
                                    op = PatchesSchemaOpEnum.ADD;
                                    path = "-";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("dicta", "nam");
                                        put("officia", "occaecati");
                                        put("fugit", "deleniti");
                                    }};
                                }}),
                            }}, "hic");            

            PatchDocumentResponse res = sdk.dataAPI.patchDocument(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDocument

If the path does not refer to an existing document (for example *us-west/servers*), the server will attempt to create all the necessary containing documents.

This behavior is similar to the Unix command [mkdir -p](https://en.wikipedia.org/wiki/Mkdir#Options).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDocumentRequest;
import org.openapis.openapi.models.operations.PutDocumentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutDocumentRequest req = new PutDocumentRequest("optio", "totam") {{
                ifNoneMatch = "beatae";
            }};            

            PutDocumentResponse res = sdk.dataAPI.putDocument(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
