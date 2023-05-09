# byInterval

### Available Operations

* [getOrganizationApiRequestsOverviewResponseCodesByInterval](#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period

## getOrganizationApiRequestsOverviewResponseCodesByInterval

Tracks organizations' API requests by response code across a given time period

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalResponse;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest req = new GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest("facilis") {{
                adminIds = new String[]{{
                    add("vero"),
                    add("impedit"),
                    add("omnis"),
                    add("et"),
                }};
                interval = 939131L;
                operationIds = new String[]{{
                    add("est"),
                    add("distinctio"),
                    add("fugiat"),
                }};
                sourceIps = new String[]{{
                    add("totam"),
                    add("praesentium"),
                    add("officiis"),
                    add("esse"),
                }};
                t0 = "vitae";
                t1 = "delectus";
                timespan = 3864.01;
                userAgent = "minus";
                version = GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum.ZERO;
            }};            

            GetOrganizationApiRequestsOverviewResponseCodesByIntervalResponse res = sdk.byInterval.getOrganizationApiRequestsOverviewResponseCodesByInterval(req);

            if (res.getOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
