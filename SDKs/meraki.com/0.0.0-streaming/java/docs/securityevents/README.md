# securityEvents

### Available Operations

* [getNetworkSecurityEvents](#getnetworksecurityevents) - List the security events (intrusion detection only) for a network
* [getOrganizationSecurityEvents](#getorganizationsecurityevents) - List the security events (intrusion detection only) for an organization

## getNetworkSecurityEvents

List the security events (intrusion detection only) for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSecurityEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkSecurityEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSecurityEventsRequest req = new GetNetworkSecurityEventsRequest("hic") {{
                endingBefore = "cum";
                perPage = 135548L;
                startingAfter = "libero";
                t0 = "nam";
                t1 = "incidunt";
                timespan = 9253.95;
            }};            

            GetNetworkSecurityEventsResponse res = sdk.securityEvents.getNetworkSecurityEvents(req);

            if (res.getNetworkSecurityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSecurityEvents

List the security events (intrusion detection only) for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSecurityEventsRequest;
import org.openapis.openapi.models.operations.GetOrganizationSecurityEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSecurityEventsRequest req = new GetOrganizationSecurityEventsRequest("id") {{
                endingBefore = "saepe";
                perPage = 423054L;
                startingAfter = "quo";
                t0 = "nesciunt";
                t1 = "illum";
                timespan = 3674.75;
            }};            

            GetOrganizationSecurityEventsResponse res = sdk.securityEvents.getOrganizationSecurityEvents(req);

            if (res.getOrganizationSecurityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
