# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/google.home/2.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/google.home/2.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.AccessibilityRequest,
  AccessibilityResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    castLocalAuthorizationToken: "YOUR_API_KEY_HERE",
  },
});

const req: shared.AccessibilityRequest = {
  endpointEnabled: false,
  hotwordEnabled: false,
};

sdk.assistant.accessibility(req).then((res: AccessibilityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

