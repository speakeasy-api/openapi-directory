# customFields

## Overview

Custom Field Management

### Available Operations

* [deleteV2CustomFieldsIdJson](#deletev2customfieldsidjson) - Delete a custom field
* [getV2CustomFieldsJson](#getv2customfieldsjson) - List custom fields
* [getV2CustomFieldsIdJson](#getv2customfieldsidjson) - Fetch a custom field
* [postV2CustomFieldsJson](#postv2customfieldsjson) - Create a custom field
* [putV2CustomFieldsIdJson](#putv2customfieldsidjson) - Update a custom field

## deleteV2CustomFieldsIdJson

Deletes a custom field.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteV2CustomFieldsIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteV2CustomFieldsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteV2CustomFieldsIdJsonRequest req = new DeleteV2CustomFieldsIdJsonRequest("ut");            

            DeleteV2CustomFieldsIdJsonResponse res = sdk.customFields.deleteV2CustomFieldsIdJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2CustomFieldsJson

Fetches multiple custom field records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CustomFieldsJsonRequest;
import org.openapis.openapi.models.operations.GetV2CustomFieldsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CustomFieldsJsonRequest req = new GetV2CustomFieldsJsonRequest() {{
                fieldType = "eum";
                ids = new Long[]{{
                    add(826871L),
                    add(181151L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 509342L;
                perPage = 788546L;
                sortBy = "veritatis";
                sortDirection = "ipsa";
            }};            

            GetV2CustomFieldsJsonResponse res = sdk.customFields.getV2CustomFieldsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2CustomFieldsIdJson

Fetches a custom field, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CustomFieldsIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2CustomFieldsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CustomFieldsIdJsonRequest req = new GetV2CustomFieldsIdJsonRequest("id");            

            GetV2CustomFieldsIdJsonResponse res = sdk.customFields.getV2CustomFieldsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2CustomFieldsJson

Creates a custom field.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2CustomFieldsJsonRequestBody;
import org.openapis.openapi.models.operations.PostV2CustomFieldsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2CustomFieldsJsonRequestBody req = new PostV2CustomFieldsJsonRequestBody("quidem") {{
                fieldType = "neque";
            }};            

            PostV2CustomFieldsJsonResponse res = sdk.customFields.postV2CustomFieldsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV2CustomFieldsIdJson

Update a custom field.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2CustomFieldsIdJsonRequest;
import org.openapis.openapi.models.operations.PutV2CustomFieldsIdJsonRequestBody;
import org.openapis.openapi.models.operations.PutV2CustomFieldsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2CustomFieldsIdJsonRequest req = new PutV2CustomFieldsIdJsonRequest("quo") {{
                requestBody = new PutV2CustomFieldsIdJsonRequestBody() {{
                    fieldType = "illum";
                    name = "Wilbur Gerlach";
                }};;
            }};            

            PutV2CustomFieldsIdJsonResponse res = sdk.customFields.putV2CustomFieldsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
