# responseCodes

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
                .setSecurity(new Security("error") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest req = new GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest("necessitatibus") {{
                adminIds = new String[]{{
                    add("rem"),
                }};
                interval = 631086L;
                operationIds = new String[]{{
                    add("quaerat"),
                    add("cum"),
                    add("error"),
                }};
                sourceIps = new String[]{{
                    add("autem"),
                }};
                t0 = "possimus";
                t1 = "corporis";
                timespan = 532.37;
                userAgent = "magni";
                version = GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum.ZERO;
            }};            

            GetOrganizationApiRequestsOverviewResponseCodesByIntervalResponse res = sdk.responseCodes.getOrganizationApiRequestsOverviewResponseCodesByInterval(req);

            if (res.getOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
