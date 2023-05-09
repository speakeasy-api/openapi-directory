# trafficShapingUplinkSettings

### Available Operations

* [getNetworkUplinkSettings](#getnetworkuplinksettings) - Returns the uplink settings for your MX network.
* [updateNetworkUplinkSettings](#updatenetworkuplinksettings) - Updates the uplink settings for your MX network.

## getNetworkUplinkSettings

Returns the uplink settings for your MX network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkUplinkSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkUplinkSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkUplinkSettingsRequest req = new GetNetworkUplinkSettingsRequest("repudiandae");            

            GetNetworkUplinkSettingsResponse res = sdk.trafficShapingUplinkSettings.getNetworkUplinkSettings(req);

            if (res.getNetworkUplinkSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkUplinkSettings

Updates the uplink settings for your MX network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkUplinkSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkUplinkSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkUplinkSettingsRequestBodyBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsCellular;
import org.openapis.openapi.models.operations.UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsWan1;
import org.openapis.openapi.models.operations.UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsWan2;
import org.openapis.openapi.models.operations.UpdateNetworkUplinkSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkUplinkSettingsRequest req = new UpdateNetworkUplinkSettingsRequest("adipisci") {{
                requestBody = new UpdateNetworkUplinkSettingsRequestBody() {{
                    bandwidthLimits = new UpdateNetworkUplinkSettingsRequestBodyBandwidthLimits() {{
                        cellular = new UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsCellular() {{
                            limitDown = 867115L;
                            limitUp = 688463L;
                        }};;
                        wan1 = new UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsWan1() {{
                            limitDown = 294266L;
                            limitUp = 976762L;
                        }};;
                        wan2 = new UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsWan2() {{
                            limitDown = 435353L;
                            limitUp = 127087L;
                        }};;
                    }};;
                }};;
            }};            

            UpdateNetworkUplinkSettingsResponse res = sdk.trafficShapingUplinkSettings.updateNetworkUplinkSettings(req);

            if (res.updateNetworkUplinkSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
