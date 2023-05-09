# tags

## Overview

Tags

### Available Operations

* [getV2TagsJson](#getv2tagsjson) - List team tags

## getV2TagsJson

Fetches a list of the tags used for a team. The records can be filtered, paged, and sorted according to
the respective parameters.

Tags can be applied to mulitple resource types.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2TagsJsonRequest;
import org.openapis.openapi.models.operations.GetV2TagsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2TagsJsonRequest req = new GetV2TagsJsonRequest() {{
                ids = new Long[]{{
                    add(637583L),
                    add(672041L),
                    add(813054L),
                    add(266697L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 976226L;
                perPage = 564064L;
                search = "officiis";
                sortBy = "sapiente";
                sortDirection = "cumque";
            }};            

            GetV2TagsJsonResponse res = sdk.tags.getV2TagsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
