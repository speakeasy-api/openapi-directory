# activityHistories

## Overview

Activity Histories

### Available Operations

* [getV2ActivityHistories](#getv2activityhistories) - List Past Activities

## getV2ActivityHistories

Fetches all of the customer's past activities for your application. Returns all the Activities that are found on the Salesloft Activity Feed. <a href="/activity-history.html" target="_blank" rel="noopener noreferrer">Visit here for more details</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2ActivityHistoriesRequest;
import org.openapis.openapi.models.operations.GetV2ActivityHistoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2ActivityHistoriesRequest req = new GetV2ActivityHistoriesRequest() {{
                resource = "nobis";
                includePagingCounts = false;
                occurredAt = new java.util.HashMap<String, Object>() {{
                    put("delectus", "quaerat");
                    put("quos", "aliquid");
                    put("dolorem", "dolorem");
                }};
                page = 222443L;
                perPage = 186193L;
                pinned = false;
                resourceId = new String[]{{
                    add("hic"),
                }};
                resourceType = "excepturi";
                sortBy = "cum";
                sortDirection = "voluptate";
                type = "dignissimos";
                updatedAt = new java.util.HashMap<String, Object>() {{
                    put("amet", "dolorum");
                    put("numquam", "veritatis");
                    put("ipsa", "ipsa");
                    put("iure", "odio");
                }};
                userGuid = "quaerat";
            }};            

            GetV2ActivityHistoriesResponse res = sdk.activityHistories.getV2ActivityHistories(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
