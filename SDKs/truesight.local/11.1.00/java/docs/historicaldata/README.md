# historicalData

## Overview

API operations to get historical data.

### Available Operations

* [getHistory](#gethistory) - Gets historical data for a specific group, application or service.

## getHistory

Gets the historical data for a specific group, application or service, for a given period.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHistoryRequest;
import org.openapis.openapi.models.operations.GetHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHistoryRequest req = new GetHistoryRequest() {{
                applicationId = "ipsum";
                from = 568434L;
                groupId = "aspernatur";
                serviceId = "perferendis";
                to = 324141L;
            }};            

            GetHistoryResponse res = sdk.historicalData.getHistory(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
