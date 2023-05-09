# splashSettings

### Available Operations

* [getNetworkSsidSplashSettings](#getnetworkssidsplashsettings) - Display the splash page settings for the given SSID
* [updateNetworkSsidSplashSettings](#updatenetworkssidsplashsettings) - Modify the splash page settings for the given SSID

## getNetworkSsidSplashSettings

Display the splash page settings for the given SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSsidSplashSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkSsidSplashSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSsidSplashSettingsRequest req = new GetNetworkSsidSplashSettingsRequest("distinctio", "pariatur");            

            GetNetworkSsidSplashSettingsResponse res = sdk.splashSettings.getNetworkSsidSplashSettings(req);

            if (res.getNetworkSsidSplashSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSsidSplashSettings

Modify the splash page settings for the given SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSsidSplashSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSsidSplashSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSsidSplashSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSsidSplashSettingsRequest req = new UpdateNetworkSsidSplashSettingsRequest("facere", "laborum") {{
                requestBody = new UpdateNetworkSsidSplashSettingsRequestBody() {{
                    splashUrl = "eveniet";
                    useSplashUrl = false;
                }};;
            }};            

            UpdateNetworkSsidSplashSettingsResponse res = sdk.splashSettings.updateNetworkSsidSplashSettings(req);

            if (res.updateNetworkSsidSplashSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
