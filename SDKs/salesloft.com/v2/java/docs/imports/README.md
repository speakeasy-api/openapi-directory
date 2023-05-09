# imports

## Overview

Import Management

### Available Operations

* [deleteV2ImportsIdJson](#deletev2importsidjson) - Delete an import
* [getV2ImportsJson](#getv2importsjson) - List imports
* [getV2ImportsIdJson](#getv2importsidjson) - Fetch an import
* [postV2ImportsJson](#postv2importsjson) - Create an import
* [putV2ImportsIdJson](#putv2importsidjson) - Update an import

## deleteV2ImportsIdJson

Deletes an import, by ID only. The associated people can be deleted as part of the deletion process.

Admin users can access imports for the entire team, but non-admin users can only access their own imports.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteV2ImportsIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteV2ImportsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteV2ImportsIdJsonRequest req = new DeleteV2ImportsIdJsonRequest("possimus") {{
                undo = "quia";
            }};            

            DeleteV2ImportsIdJsonResponse res = sdk.imports.deleteV2ImportsIdJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2ImportsJson

Fetches multiple imports.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2ImportsJsonRequest;
import org.openapis.openapi.models.operations.GetV2ImportsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2ImportsJsonRequest req = new GetV2ImportsJsonRequest() {{
                ids = new Long[]{{
                    add(992430L),
                    add(815524L),
                    add(85001L),
                    add(159414L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 94458L;
                perPage = 628899L;
                sortBy = "culpa";
                sortDirection = "aliquid";
                userIds = new Long[]{{
                    add(62713L),
                    add(936747L),
                    add(424032L),
                    add(447378L),
                }};
            }};            

            GetV2ImportsJsonResponse res = sdk.imports.getV2ImportsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2ImportsIdJson

Fetches an import, by ID only.

Admin users can access imports for the entire team, but non-admin users can only access their own imports.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2ImportsIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2ImportsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2ImportsIdJsonRequest req = new GetV2ImportsIdJsonRequest("eius");            

            GetV2ImportsIdJsonResponse res = sdk.imports.getV2ImportsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2ImportsJson

Creates an import.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2ImportsJsonRequestBody;
import org.openapis.openapi.models.operations.PostV2ImportsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2ImportsJsonRequestBody req = new PostV2ImportsJsonRequestBody() {{
                name = "Mrs. Gilberto Roberts";
                userId = 119771L;
            }};            

            PostV2ImportsJsonResponse res = sdk.imports.postV2ImportsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV2ImportsIdJson

Updates an import, by ID only.

Admin users can access imports for the entire team, but non-admin users can only access their own imports.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2ImportsIdJsonRequest;
import org.openapis.openapi.models.operations.PutV2ImportsIdJsonRequestBody;
import org.openapis.openapi.models.operations.PutV2ImportsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2ImportsIdJsonRequest req = new PutV2ImportsIdJsonRequest("ullam") {{
                requestBody = new PutV2ImportsIdJsonRequestBody() {{
                    name = "Ms. Dana Huel";
                    userId = 845358L;
                }};;
            }};            

            PutV2ImportsIdJsonResponse res = sdk.imports.putV2ImportsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
