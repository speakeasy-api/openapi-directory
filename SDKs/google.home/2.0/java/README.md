# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AccessibilityRequest;
import org.openapis.openapi.models.operations.AccessibilityResponse;
import org.openapis.openapi.models.shared.AccessibilityRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    castLocalAuthorizationToken = new SchemeCastLocalAuthorizationToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AccessibilityRequest req = new AccessibilityRequest() {{
                request = new AccessibilityRequest() {{
                    endpointEnabled = false;
                    hotwordEnabled = false;
                }};
            }};            

            AccessibilityResponse res = sdk.assistant.accessibility(req);

            if (res.getcurrentvalues.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### assistant

* `accessibility` - Accessibility
* `alarmVolume` - Alarm Volume
* `deleteAlarmsandTimers` - Delete Alarms and Timers
* `doNotDisturb` - Do Not Disturb
* `getAlarmsandTimers` - Get Alarms and Timers
* `setEqualizerValues` - Set Equalizer Values

### bluetooth

* `changeDiscoverability` - Change Discoverability
* `forgetpaireddevice` - Forget paired device
* `getPairedDevices` - Get Paired Devices
* `getScanResults` - Get Scan Results
* `pairwithSpeaker` - Pair with Speaker
* `scanfordevices` - Scan for devices
* `status` - Status

### deviceInfo

* `appDeviceID` - App Device ID
* `checkReadyStatus` - Check Ready Status
* `eurekaInfo` - Eureka Info
* `locales` - Locales
* `offer` - Offer
* `testInternetDownloadSpeed` - Test Internet Download Speed
* `timezones` - Timezones

### deviceSettings

* `nightModesettings` - Night Mode settings
* `rebootandFactoryReset` - Reboot and Factory Reset
* `setEurekaInfo` - Set Eureka Info

### staticFiles

* `chromecastIcon` - Chromecast Icon
* `legalNotice` - Legal Notice

### wifi

* `connecttoWiFiNetwork` - Connect to Wi-Fi Network
* `forgetWiFiNetwork` - Forget Wi-Fi Network
* `getSavedNetworks` - Get Saved Networks
* `getWiFiScanResults` - Get Wi-Fi Scan Results
* `scanforNetworks` - Scan for Networks
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
