# actionDetailsCallInstructions

## Overview

Actions - Call Instructions

### Available Operations

* [getV2ActionDetailsCallInstructionsJson](#getv2actiondetailscallinstructionsjson) - List call instructions
* [getV2ActionDetailsCallInstructionsIdJson](#getv2actiondetailscallinstructionsidjson) - Fetch a call instructions

## getV2ActionDetailsCallInstructionsJson

Fetches multiple call instruction records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2ActionDetailsCallInstructionsJsonRequest;
import org.openapis.openapi.models.operations.GetV2ActionDetailsCallInstructionsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2ActionDetailsCallInstructionsJsonRequest req = new GetV2ActionDetailsCallInstructionsJsonRequest() {{
                ids = new Long[]{{
                    add(339404L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 521037L;
                perPage = 489549L;
                sortBy = "eaque";
                sortDirection = "quis";
            }};            

            GetV2ActionDetailsCallInstructionsJsonResponse res = sdk.actionDetailsCallInstructions.getV2ActionDetailsCallInstructionsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2ActionDetailsCallInstructionsIdJson

Fetches a call instruction, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2ActionDetailsCallInstructionsIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2ActionDetailsCallInstructionsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2ActionDetailsCallInstructionsIdJsonRequest req = new GetV2ActionDetailsCallInstructionsIdJsonRequest("nesciunt");            

            GetV2ActionDetailsCallInstructionsIdJsonResponse res = sdk.actionDetailsCallInstructions.getV2ActionDetailsCallInstructionsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
