# tags

## Overview

Health ID Tag APIs

### Available Operations

* [addTagUsingPOST](#addtagusingpost) - Add tag against HealthId.
* [deleteTagUsingDELETE](#deletetagusingdelete) - Delete tag against HealthId.
* [getTagsUsingGET](#gettagsusingget) - Get list of Tags against HealthID.

## addTagUsingPOST

Add tag against HealthId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTagUsingPOSTRequest;
import org.openapis.openapi.models.operations.AddTagUsingPOSTResponse;
import org.openapis.openapi.models.operations.AddTagUsingPOSTSecurity;
import org.openapis.openapi.models.shared.TagRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddTagUsingPOSTRequest req = new AddTagUsingPOSTRequest(                new TagRequest() {{
                                healthId = "quo";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("eius", "eos");
                                    put("voluptas", "ab");
                                    put("cupiditate", "consequatur");
                                }};
                            }};) {{
                acceptLanguage = "tempora";
            }};            

            AddTagUsingPOSTResponse res = sdk.tags.addTagUsingPOST(req, new AddTagUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTagUsingDELETE

Delete tag against HealthId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DELETETagUsingDELETERequest;
import org.openapis.openapi.models.operations.DELETETagUsingDELETEResponse;
import org.openapis.openapi.models.operations.DELETETagUsingDELETESecurity;
import org.openapis.openapi.models.shared.TagRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DELETETagUsingDELETERequest req = new DELETETagUsingDELETERequest("debitis".getBytes()) {{
                acceptLanguage = "ipsam";
            }};            

            DELETETagUsingDELETEResponse res = sdk.tags.deleteTagUsingDELETE(req, new DELETETagUsingDELETESecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsUsingGET

Get list of Tags against HealthID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETTagsUsingGETRequest;
import org.openapis.openapi.models.operations.GETTagsUsingGETResponse;
import org.openapis.openapi.models.operations.GETTagsUsingGETSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETTagsUsingGETRequest req = new GETTagsUsingGETRequest("aspernatur") {{
                acceptLanguage = "sequi";
            }};            

            GETTagsUsingGETResponse res = sdk.tags.getTagsUsingGET(req, new GETTagsUsingGETSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
