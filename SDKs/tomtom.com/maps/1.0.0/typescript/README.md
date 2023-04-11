# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/tomtom.com/maps/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/tomtom.com/maps/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetMapVersionNumberCopyrightsFormatRequest,
  GetMapVersionNumberCopyrightsFormatResponse,
  GetMapVersionNumberCopyrightsFormatFormatEnum,
  GetMapVersionNumberCopyrightsFormatVersionNumberEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetMapVersionNumberCopyrightsFormatRequest = {
  callback: "corrupti",
  format: GetMapVersionNumberCopyrightsFormatFormatEnum.Jsonp,
  versionNumber: GetMapVersionNumberCopyrightsFormatVersionNumberEnum.One,
};

sdk.copyrights.getMapVersionNumberCopyrightsFormat(req).then((res: GetMapVersionNumberCopyrightsFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### copyrights

* `getMapVersionNumberCopyrightsFormat` - Copyrights whole world
* `getMapVersionNumberCopyrightsCaptionFormat` - Captions
* `getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat` - Copyrights bounding box
* `getMapVersionNumberCopyrightsZoomXYFormat` - Copyrights tile

### raster

* `getMapVersionNumberStaticimage` - Static Image
* `getMapVersionNumberTileLayerStyleZoomXYFormat` - Tile

### vector

* `getMapVersionNumberTileLayerStyleZoomXYPbf` - Tile

### wmsWmts

* `getCapabilities` - GetCapabilities
* `getMap` - GetMap
* `getMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXml` - WMTS
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

