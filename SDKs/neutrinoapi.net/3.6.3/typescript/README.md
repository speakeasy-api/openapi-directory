# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/neutrinoapi.net/3.6.3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/neutrinoapi.net/3.6.3/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  BadWordFilterRequestBody,
  BadWordFilterResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
    userId: "YOUR_API_KEY_HERE",
  },
});

const req: BadWordFilterRequestBody = {
  catalog: "corrupti",
  censorCharacter: "provident",
  content: "distinctio",
};

sdk.dataTools.badWordFilter(req).then((res: BadWordFilterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### dataTools

* `badWordFilter` - Bad Word Filter
* `emailValidate` - Email Validate
* `phoneValidate` - Phone Validate
* `uaLookup` - UA Lookup

### eCommerce

* `binListDownload` - BIN List Download
* `binLookup` - BIN Lookup
* `convert` - Convert

### geolocation

* `geocodeAddress` - Geocode Address
* `geocodeReverse` - Geocode Reverse
* `ipInfo` - IP Info

### imaging

* `htmlRender` - HTML Render
* `imageResize` - Image Resize
* `imageWatermark` - Image Watermark
* `qrCode` - QR Code

### securityAndNetworking

* `emailVerify` - Email Verify
* `hostReputation` - Host Reputation
* `ipBlocklist` - IP Blocklist
* `ipBlocklistDownload` - IP Blocklist Download
* `ipProbe` - IP Probe

### telephony

* `hlrLookup` - HLR Lookup
* `phonePlayback` - Phone Playback
* `phoneVerify` - Phone Verify
* `smsVerify` - SMS Verify
* `verifySecurityCode` - Verify Security Code

### www

* `browserBot` - Browser Bot
* `htmlClean` - HTML Clean
* `urlInfo` - URL Info
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

