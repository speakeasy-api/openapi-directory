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
import org.openapis.openapi.models.operations.AccessibilityResponse;
import org.openapis.openapi.models.shared.AccessibilityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AccessibilityRequest req = new AccessibilityRequest(false, false);            

            AccessibilityResponse res = sdk.assistant.accessibility(req);

            if (res.getcurrentvalues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [assistant](docs/assistant/README.md)

* [accessibility](docs/assistant/README.md#accessibility) - Accessibility
* [alarmVolume](docs/assistant/README.md#alarmvolume) - Alarm Volume
* [deleteAlarmsandTimers](docs/assistant/README.md#deletealarmsandtimers) - Delete Alarms and Timers
* [doNotDisturb](docs/assistant/README.md#donotdisturb) - Do Not Disturb
* [getAlarmsandTimers](docs/assistant/README.md#getalarmsandtimers) - Get Alarms and Timers
* [setEqualizerValues](docs/assistant/README.md#setequalizervalues) - Set Equalizer Values

### [bluetooth](docs/bluetooth/README.md)

* [changeDiscoverability](docs/bluetooth/README.md#changediscoverability) - Change Discoverability
* [forgetpaireddevice](docs/bluetooth/README.md#forgetpaireddevice) - Forget paired device
* [getPairedDevices](docs/bluetooth/README.md#getpaireddevices) - Get Paired Devices
* [getScanResults](docs/bluetooth/README.md#getscanresults) - Get Scan Results
* [pairwithSpeaker](docs/bluetooth/README.md#pairwithspeaker) - Pair with Speaker
* [scanfordevices](docs/bluetooth/README.md#scanfordevices) - Scan for devices
* [status](docs/bluetooth/README.md#status) - Status

### [deviceInfo](docs/deviceinfo/README.md)

* [appDeviceID](docs/deviceinfo/README.md#appdeviceid) - App Device ID
* [checkReadyStatus](docs/deviceinfo/README.md#checkreadystatus) - Check Ready Status
* [eurekaInfo](docs/deviceinfo/README.md#eurekainfo) - Eureka Info
* [locales](docs/deviceinfo/README.md#locales) - Locales
* [offer](docs/deviceinfo/README.md#offer) - Offer
* [testInternetDownloadSpeed](docs/deviceinfo/README.md#testinternetdownloadspeed) - Test Internet Download Speed
* [timezones](docs/deviceinfo/README.md#timezones) - Timezones

### [deviceSettings](docs/devicesettings/README.md)

* [nightModesettings](docs/devicesettings/README.md#nightmodesettings) - Night Mode settings
* [rebootandFactoryReset](docs/devicesettings/README.md#rebootandfactoryreset) - Reboot and Factory Reset
* [setEurekaInfo](docs/devicesettings/README.md#seteurekainfo) - Set Eureka Info

### [staticFiles](docs/staticfiles/README.md)

* [chromecastIcon](docs/staticfiles/README.md#chromecasticon) - Chromecast Icon
* [legalNotice](docs/staticfiles/README.md#legalnotice) - Legal Notice

### [wifi](docs/wifi/README.md)

* [connecttoWiFiNetwork](docs/wifi/README.md#connecttowifinetwork) - Connect to Wi-Fi Network
* [forgetWiFiNetwork](docs/wifi/README.md#forgetwifinetwork) - Forget Wi-Fi Network
* [getSavedNetworks](docs/wifi/README.md#getsavednetworks) - Get Saved Networks
* [getWiFiScanResults](docs/wifi/README.md#getwifiscanresults) - Get Wi-Fi Scan Results
* [scanforNetworks](docs/wifi/README.md#scanfornetworks) - Scan for Networks
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
