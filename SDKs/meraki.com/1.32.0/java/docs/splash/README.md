# splash

### Available Operations

* [getNetworkWirelessSsidSplashSettings](#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [updateNetworkWirelessSsidSplashSettings](#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID

## getNetworkWirelessSsidSplashSettings

Display the splash page settings for the given SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidSplashSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidSplashSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidSplashSettingsRequest req = new GetNetworkWirelessSsidSplashSettingsRequest("quasi", "incidunt");            

            GetNetworkWirelessSsidSplashSettingsResponse res = sdk.splash.getNetworkWirelessSsidSplashSettings(req);

            if (res.getNetworkWirelessSsidSplashSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidSplashSettings

Modify the splash page settings for the given SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidSplashSettingsRequest req = new UpdateNetworkWirelessSsidSplashSettingsRequest("inventore", "debitis") {{
                requestBody = new UpdateNetworkWirelessSsidSplashSettingsRequestBody() {{
                    allowSimultaneousLogins = false;
                    billing = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling() {{
                        freeAccess = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess() {{
                            durationInMinutes = 632237L;
                            enabled = false;
                        }};;
                        prepaidAccessFastLoginEnabled = false;
                        replyToEmailAddress = "deserunt";
                    }};;
                    blockAllTrafficBeforeSignOn = false;
                    controllerDisconnectionBehavior = UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum.RESTRICTED;
                    guestSponsorship = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship() {{
                        durationInMinutes = 485414L;
                        guestCanRequestTimeframe = false;
                    }};;
                    redirectUrl = "explicabo";
                    sentryEnrollment = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment() {{
                        enforcedSystems = new String[]{{
                            add("ab"),
                            add("id"),
                        }};
                        strength = UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum.STRICT;
                        systemsManagerNetwork = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork("mollitia");;
                    }};;
                    splashImage = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage() {{
                        extension = "ex";
                        image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage() {{
                            contents = "eius";
                            format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum.GIF;
                        }};;
                        md5 = "aut";
                    }};;
                    splashLogo = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo() {{
                        extension = "delectus";
                        image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage() {{
                            contents = "autem";
                            format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum.PNG;
                        }};;
                        md5 = "molestiae";
                    }};;
                    splashPrepaidFront = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront() {{
                        extension = "tempora";
                        image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage() {{
                            contents = "magnam";
                            format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum.GIF;
                        }};;
                        md5 = "vitae";
                    }};;
                    splashTimeout = 125553L;
                    splashUrl = "doloremque";
                    useRedirectUrl = false;
                    useSplashUrl = false;
                    welcomeMessage = "ea";
                }};;
            }};            

            UpdateNetworkWirelessSsidSplashSettingsResponse res = sdk.splash.updateNetworkWirelessSsidSplashSettings(req);

            if (res.updateNetworkWirelessSsidSplashSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
