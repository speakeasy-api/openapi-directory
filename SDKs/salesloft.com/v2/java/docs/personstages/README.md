# personStages

## Overview

Person Stage Management

### Available Operations

* [deleteV2PersonStagesIdJson](#deletev2personstagesidjson) - Delete an person stage
* [getV2PersonStagesJson](#getv2personstagesjson) - List person stages
* [getV2PersonStagesIdJson](#getv2personstagesidjson) - Fetch a person stage
* [postV2PersonStagesJson](#postv2personstagesjson) - Create a person stage
* [putV2PersonStagesIdJson](#putv2personstagesidjson) - Update a person stage

## deleteV2PersonStagesIdJson

Deletes a person stage. This operation is not reversible without contacting support.
This operation can be called multiple times successfully.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteV2PersonStagesIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteV2PersonStagesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteV2PersonStagesIdJsonRequest req = new DeleteV2PersonStagesIdJsonRequest("totam");            

            DeleteV2PersonStagesIdJsonResponse res = sdk.personStages.deleteV2PersonStagesIdJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2PersonStagesJson

Fetches multiple person stage records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2PersonStagesJsonRequest;
import org.openapis.openapi.models.operations.GetV2PersonStagesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2PersonStagesJsonRequest req = new GetV2PersonStagesJsonRequest() {{
                ids = new Long[]{{
                    add(693957L),
                    add(806670L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 90885L;
                perPage = 461007L;
                sortBy = "amet";
                sortDirection = "assumenda";
            }};            

            GetV2PersonStagesJsonResponse res = sdk.personStages.getV2PersonStagesJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2PersonStagesIdJson

Fetches a person stage, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2PersonStagesIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2PersonStagesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2PersonStagesIdJsonRequest req = new GetV2PersonStagesIdJsonRequest("ea");            

            GetV2PersonStagesIdJsonResponse res = sdk.personStages.getV2PersonStagesIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2PersonStagesJson

Creates a person stage.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2PersonStagesJsonRequestBody;
import org.openapis.openapi.models.operations.PostV2PersonStagesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2PersonStagesJsonRequestBody req = new PostV2PersonStagesJsonRequestBody("atque");            

            PostV2PersonStagesJsonResponse res = sdk.personStages.postV2PersonStagesJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV2PersonStagesIdJson

Updates a person stage.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2PersonStagesIdJsonRequest;
import org.openapis.openapi.models.operations.PutV2PersonStagesIdJsonRequestBody;
import org.openapis.openapi.models.operations.PutV2PersonStagesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2PersonStagesIdJsonRequest req = new PutV2PersonStagesIdJsonRequest(                new PutV2PersonStagesIdJsonRequestBody("error");, "officiis");            

            PutV2PersonStagesIdJsonResponse res = sdk.personStages.putV2PersonStagesIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
