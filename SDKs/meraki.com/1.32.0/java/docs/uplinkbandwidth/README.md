# uplinkBandwidth

### Available Operations

* [getNetworkApplianceTrafficShapingUplinkBandwidth](#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [updateNetworkApplianceTrafficShapingUplinkBandwidth](#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.

## getNetworkApplianceTrafficShapingUplinkBandwidth

Returns the uplink bandwidth limits for your MX network. This may not reflect the affected device's hardware capabilities.  For more information on your device's hardware capabilities, please consult our MX Family Datasheet - [https://meraki.cisco.com/product-collateral/mx-family-datasheet/?file]

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingUplinkBandwidthRequest req = new GetNetworkApplianceTrafficShapingUplinkBandwidthRequest("ab");            

            GetNetworkApplianceTrafficShapingUplinkBandwidthResponse res = sdk.uplinkBandwidth.getNetworkApplianceTrafficShapingUplinkBandwidth(req);

            if (res.getNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceTrafficShapingUplinkBandwidth

Updates the uplink bandwidth settings for your MX network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest req = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest("incidunt") {{
                requestBody = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody() {{
                    bandwidthLimits = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits() {{
                        cellular = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular() {{
                            limitDown = 935781L;
                            limitUp = 21844L;
                        }};;
                        wan1 = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1() {{
                            limitDown = 814027L;
                            limitUp = 287000L;
                        }};;
                        wan2 = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2() {{
                            limitDown = 851338L;
                            limitUp = 100729L;
                        }};;
                    }};;
                }};;
            }};            

            UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse res = sdk.uplinkBandwidth.updateNetworkApplianceTrafficShapingUplinkBandwidth(req);

            if (res.updateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
