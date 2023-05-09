# mxWarmSpareSettings

### Available Operations

* [getNetworkWarmSpareSettings](#getnetworkwarmsparesettings) - Return MX warm spare settings
* [swapNetworkWarmSpare](#swapnetworkwarmspare) - Swap MX primary and warm spare appliances
* [updateNetworkWarmSpareSettings](#updatenetworkwarmsparesettings) - Update MX warm spare settings

## getNetworkWarmSpareSettings

Return MX warm spare settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWarmSpareSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkWarmSpareSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWarmSpareSettingsRequest req = new GetNetworkWarmSpareSettingsRequest("voluptas");            

            GetNetworkWarmSpareSettingsResponse res = sdk.mxWarmSpareSettings.getNetworkWarmSpareSettings(req);

            if (res.getNetworkWarmSpareSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## swapNetworkWarmSpare

Swap MX primary and warm spare appliances

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SwapNetworkWarmSpareRequest;
import org.openapis.openapi.models.operations.SwapNetworkWarmSpareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SwapNetworkWarmSpareRequest req = new SwapNetworkWarmSpareRequest("nemo");            

            SwapNetworkWarmSpareResponse res = sdk.mxWarmSpareSettings.swapNetworkWarmSpare(req);

            if (res.swapNetworkWarmSpare200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWarmSpareSettings

Update MX warm spare settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWarmSpareSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWarmSpareSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWarmSpareSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWarmSpareSettingsRequest req = new UpdateNetworkWarmSpareSettingsRequest(                new UpdateNetworkWarmSpareSettingsRequestBody(false) {{
                                spareSerial = "eius";
                                uplinkMode = "aspernatur";
                                virtualIp1 = "ducimus";
                                virtualIp2 = "nesciunt";
                            }};, "fuga");            

            UpdateNetworkWarmSpareSettingsResponse res = sdk.mxWarmSpareSettings.updateNetworkWarmSpareSettings(req);

            if (res.updateNetworkWarmSpareSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
