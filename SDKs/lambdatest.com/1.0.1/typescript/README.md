# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/lambdatest.com/1.0.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/lambdatest.com/1.0.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DevicesRequest,
  DevicesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DevicesRequest = {
  os: "corrupti",
};

sdk.getDevices.devices(req).then((res: DevicesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### getDevices

* `devices` - Fetch all available device combinations.

### getLocations

* `locations` - Fetch Locations

### getOSBrowsers

* `osBrowsers` - Fetch all available os-browser combinations.

### getProfiles

* `profiles` - Fetch login profiles

### getResolutions

* `resolutions` - Fetch all available resolution on different OS

### getScreenshots

* `screenshots` - Fetch specified screenshot details

### getZippedScreenshots

* `zippedScreenshots` - Fetch Zipped Screenshots

### startScreenshotTest

* `startScreenshotTest` - Start Screenshot Test

### stopScreenshotTest

* `stopScreenshotsTest` - Stop specified screenshot test
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

