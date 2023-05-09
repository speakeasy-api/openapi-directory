# successes

## Overview

Success Management

### Available Operations

* [getV2SuccessesJson](#getv2successesjson) - List successes

## getV2SuccessesJson

Fetches multiple success records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2SuccessesJsonRequest;
import org.openapis.openapi.models.operations.GetV2SuccessesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2SuccessesJsonRequest req = new GetV2SuccessesJsonRequest() {{
                ids = new Long[]{{
                    add(343392L),
                    add(652309L),
                    add(591027L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 821719L;
                perPage = 659177L;
                personId = new Long[]{{
                    add(397257L),
                    add(37565L),
                }};
                sortBy = "repellat";
                sortDirection = "doloribus";
                updatedAt = new String[]{{
                    add("in"),
                    add("nam"),
                }};
            }};            

            GetV2SuccessesJsonResponse res = sdk.successes.getV2SuccessesJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
