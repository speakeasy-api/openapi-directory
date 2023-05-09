# firewalledServices

### Available Operations

* [getNetworkApplianceFirewallFirewalledService](#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [getNetworkApplianceFirewallFirewalledServices](#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [updateNetworkApplianceFirewallFirewalledService](#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

## getNetworkApplianceFirewallFirewalledService

Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallFirewalledServiceRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallFirewalledServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallFirewalledServiceRequest req = new GetNetworkApplianceFirewallFirewalledServiceRequest("ex", "optio");            

            GetNetworkApplianceFirewallFirewalledServiceResponse res = sdk.firewalledServices.getNetworkApplianceFirewallFirewalledService(req);

            if (res.getNetworkApplianceFirewallFirewalledService200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallFirewalledServices

List the appliance services and their accessibility rules

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallFirewalledServicesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallFirewalledServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallFirewalledServicesRequest req = new GetNetworkApplianceFirewallFirewalledServicesRequest("cupiditate");            

            GetNetworkApplianceFirewallFirewalledServicesResponse res = sdk.firewalledServices.getNetworkApplianceFirewallFirewalledServices(req);

            if (res.getNetworkApplianceFirewallFirewalledServices200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallFirewalledService

Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallFirewalledServiceRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallFirewalledServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallFirewalledServiceRequest req = new UpdateNetworkApplianceFirewallFirewalledServiceRequest(                new UpdateNetworkApplianceFirewallFirewalledServiceRequestBody(UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum.RESTRICTED) {{
                                allowedIps = new String[]{{
                                    add("molestias"),
                                }};
                            }};, "officiis", "exercitationem");            

            UpdateNetworkApplianceFirewallFirewalledServiceResponse res = sdk.firewalledServices.updateNetworkApplianceFirewallFirewalledService(req);

            if (res.updateNetworkApplianceFirewallFirewalledService200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
