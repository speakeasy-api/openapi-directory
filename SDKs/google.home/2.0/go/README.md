# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/google.home/2.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CastLocalAuthorizationToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Assistant.Accessibility(ctx, shared.AccessibilityRequest{
        EndpointEnabled: false,
        HotwordEnabled: false,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcurrentvalues != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Assistant](docs/assistant/README.md)

* [Accessibility](docs/assistant/README.md#accessibility) - Accessibility
* [AlarmVolume](docs/assistant/README.md#alarmvolume) - Alarm Volume
* [DeleteAlarmsandTimers](docs/assistant/README.md#deletealarmsandtimers) - Delete Alarms and Timers
* [DoNotDisturb](docs/assistant/README.md#donotdisturb) - Do Not Disturb
* [GetAlarmsandTimers](docs/assistant/README.md#getalarmsandtimers) - Get Alarms and Timers
* [SetEqualizerValues](docs/assistant/README.md#setequalizervalues) - Set Equalizer Values

### [Bluetooth](docs/bluetooth/README.md)

* [ChangeDiscoverability](docs/bluetooth/README.md#changediscoverability) - Change Discoverability
* [Forgetpaireddevice](docs/bluetooth/README.md#forgetpaireddevice) - Forget paired device
* [GetPairedDevices](docs/bluetooth/README.md#getpaireddevices) - Get Paired Devices
* [GetScanResults](docs/bluetooth/README.md#getscanresults) - Get Scan Results
* [PairwithSpeaker](docs/bluetooth/README.md#pairwithspeaker) - Pair with Speaker
* [Scanfordevices](docs/bluetooth/README.md#scanfordevices) - Scan for devices
* [Status](docs/bluetooth/README.md#status) - Status

### [DeviceInfo](docs/deviceinfo/README.md)

* [AppDeviceID](docs/deviceinfo/README.md#appdeviceid) - App Device ID
* [CheckReadyStatus](docs/deviceinfo/README.md#checkreadystatus) - Check Ready Status
* [EurekaInfo](docs/deviceinfo/README.md#eurekainfo) - Eureka Info
* [Locales](docs/deviceinfo/README.md#locales) - Locales
* [Offer](docs/deviceinfo/README.md#offer) - Offer
* [TestInternetDownloadSpeed](docs/deviceinfo/README.md#testinternetdownloadspeed) - Test Internet Download Speed
* [Timezones](docs/deviceinfo/README.md#timezones) - Timezones

### [DeviceSettings](docs/devicesettings/README.md)

* [NightModesettings](docs/devicesettings/README.md#nightmodesettings) - Night Mode settings
* [RebootandFactoryReset](docs/devicesettings/README.md#rebootandfactoryreset) - Reboot and Factory Reset
* [SetEurekaInfo](docs/devicesettings/README.md#seteurekainfo) - Set Eureka Info

### [StaticFiles](docs/staticfiles/README.md)

* [ChromecastIcon](docs/staticfiles/README.md#chromecasticon) - Chromecast Icon
* [LegalNotice](docs/staticfiles/README.md#legalnotice) - Legal Notice

### [Wifi](docs/wifi/README.md)

* [ConnecttoWiFiNetwork](docs/wifi/README.md#connecttowifinetwork) - Connect to Wi-Fi Network
* [ForgetWiFiNetwork](docs/wifi/README.md#forgetwifinetwork) - Forget Wi-Fi Network
* [GetSavedNetworks](docs/wifi/README.md#getsavednetworks) - Get Saved Networks
* [GetWiFiScanResults](docs/wifi/README.md#getwifiscanresults) - Get Wi-Fi Scan Results
* [ScanforNetworks](docs/wifi/README.md#scanfornetworks) - Scan for Networks
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
