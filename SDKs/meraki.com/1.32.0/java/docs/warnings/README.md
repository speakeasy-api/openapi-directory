# warnings

### Available Operations

* [getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings

## getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice

Return the devices that have a Dynamic ARP Inspection warning and their warnings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest req = new GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest("dolor") {{
                endingBefore = "debitis";
                perPage = 676122L;
                startingAfter = "deserunt";
            }};            

            GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceResponse res = sdk.warnings.getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice(req);

            if (res.getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
