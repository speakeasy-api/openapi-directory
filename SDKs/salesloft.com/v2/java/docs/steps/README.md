# steps

## Overview

Steps

### Available Operations

* [getV2StepsJson](#getv2stepsjson) - List steps
* [getV2StepsIdJson](#getv2stepsidjson) - Fetch a step

## getV2StepsJson

Fetches multiple step records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2StepsJsonRequest;
import org.openapis.openapi.models.operations.GetV2StepsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2StepsJsonRequest req = new GetV2StepsJsonRequest() {{
                cadenceId = 928219L;
                hasDueActions = false;
                ids = new Long[]{{
                    add(592081L),
                    add(337477L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 431785L;
                perPage = 970494L;
                sortBy = "provident";
                sortDirection = "aspernatur";
                type = "ullam";
            }};            

            GetV2StepsJsonResponse res = sdk.steps.getV2StepsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2StepsIdJson

Fetches a step, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2StepsIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2StepsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2StepsIdJsonRequest req = new GetV2StepsIdJsonRequest("quasi");            

            GetV2StepsIdJsonResponse res = sdk.steps.getV2StepsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
