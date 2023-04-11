# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/geomark/4.1.2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/geomark/4.1.2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest,
  GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse,
  GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum,
  GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionSridEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest = {
  fileFormatExtension: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum.Shpz,
  geomarkId: "provident",
  srid: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionSridEnum.TwentySixThousandNineHundredAndNine,
};

sdk.boundingBox.getGeomarksGeomarkIdBoundingBoxFileFormatExtension(req).then((res: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### boundingBox

* `getGeomarksGeomarkIdBoundingBoxFileFormatExtension` - Gets the bounding box of the geomark

### create

* `postGeomarksCopy` - Create a new geomark by copying the geometries from one or more existing geomarks from the current server.
* `postGeomarksNew` - Create a new geomark

### feature

* `getGeomarksGeomarkIdFeatureFileFormatExtension` - Get the feature and attribution of the geomark

### info

* `getGeomarksGeomarkIdFileFormatExtension` - Get information about a particular geomark

### parts

* `getGeomarksGeomarkIdPartsFileFormatExtension` - Get the individual geometries within a multi-part geometry

### point

* `getGeomarksGeomarkIdPointFileFormatExtension` - Gets a single spatial point representative of the geomark.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

