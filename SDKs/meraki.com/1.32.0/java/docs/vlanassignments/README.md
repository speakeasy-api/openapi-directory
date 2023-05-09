# vlanAssignments

### Available Operations

* [getDeviceAppliancePrefixesDelegatedVlanAssignments](#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

## getDeviceAppliancePrefixesDelegatedVlanAssignments

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest;
import org.openapis.openapi.models.operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest req = new GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest("aliquid");            

            GetDeviceAppliancePrefixesDelegatedVlanAssignmentsResponse res = sdk.vlanAssignments.getDeviceAppliancePrefixesDelegatedVlanAssignments(req);

            if (res.getDeviceAppliancePrefixesDelegatedVlanAssignments200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
