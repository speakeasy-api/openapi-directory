# accountStages

## Overview

Account Stage Management

### Available Operations

* [getV2AccountStagesJson](#getv2accountstagesjson) - List account stages
* [getV2AccountStagesIdJson](#getv2accountstagesidjson) - Fetch an account stage

## getV2AccountStagesJson

Fetches multiple account stage records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2AccountStagesJsonRequest;
import org.openapis.openapi.models.operations.GetV2AccountStagesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2AccountStagesJsonRequest req = new GetV2AccountStagesJsonRequest() {{
                ids = new Long[]{{
                    add(437587L),
                    add(297534L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 891773L;
                perPage = 56713L;
                sortBy = "delectus";
                sortDirection = "tempora";
                updatedAt = new String[]{{
                    add("molestiae"),
                    add("minus"),
                }};
            }};            

            GetV2AccountStagesJsonResponse res = sdk.accountStages.getV2AccountStagesJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2AccountStagesIdJson

Fetches an account stage, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2AccountStagesIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2AccountStagesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2AccountStagesIdJsonRequest req = new GetV2AccountStagesIdJsonRequest("placeat");            

            GetV2AccountStagesIdJsonResponse res = sdk.accountStages.getV2AccountStagesIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
