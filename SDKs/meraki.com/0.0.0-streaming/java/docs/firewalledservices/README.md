# firewalledServices

### Available Operations

* [getNetworkFirewalledService](#getnetworkfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [getNetworkFirewalledServices](#getnetworkfirewalledservices) - List the appliance services and their accessibility rules

## getNetworkFirewalledService

Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFirewalledServiceRequest;
import org.openapis.openapi.models.operations.GetNetworkFirewalledServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirewalledServiceRequest req = new GetNetworkFirewalledServiceRequest("consequatur", "tempora");            

            GetNetworkFirewalledServiceResponse res = sdk.firewalledServices.getNetworkFirewalledService(req);

            if (res.getNetworkFirewalledService200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkFirewalledServices

List the appliance services and their accessibility rules

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFirewalledServicesRequest;
import org.openapis.openapi.models.operations.GetNetworkFirewalledServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirewalledServicesRequest req = new GetNetworkFirewalledServicesRequest("ipsam");            

            GetNetworkFirewalledServicesResponse res = sdk.firewalledServices.getNetworkFirewalledServices(req);

            if (res.getNetworkFirewalledServices200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
