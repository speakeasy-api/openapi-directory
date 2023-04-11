# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/vectortile/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/vectortile/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  VectortileTerraintilesGetRequest,
  VectortileTerraintilesGetResponse,
  VectortileTerraintilesGetClientInfoPlatformEnum,
  VectortileTerraintilesGetTerrainFormatsEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: VectortileTerraintilesGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  altitudePrecisionCentimeters: 844266,
  callback: "unde",
  clientInfoApiClient: "nulla",
  clientInfoApplicationId: "corrupti",
  clientInfoApplicationVersion: "illum",
  clientInfoDeviceModel: "vel",
  clientInfoOperatingSystem: "error",
  clientInfoPlatform: VectortileTerraintilesGetClientInfoPlatformEnum.Android,
  clientInfoUserId: "suscipit",
  enableModeledVolumes: false,
  enablePoliticalFeatures: false,
  enablePrivateRoads: false,
  enableUnclippedBuildings: false,
  fields: "iure",
  key: "magnam",
  languageCode: "debitis",
  maxElevationResolutionCells: 56713,
  minElevationResolutionCells: 963663,
  name: "tempora",
  oauthToken: "suscipit",
  prettyPrint: false,
  quotaUser: "molestiae",
  regionCode: "minus",
  terrainFormats: [
    VectortileTerraintilesGetTerrainFormatsEnum.FirstDerivative,
    VectortileTerraintilesGetTerrainFormatsEnum.FirstDerivative,
    VectortileTerraintilesGetTerrainFormatsEnum.FirstDerivative,
    VectortileTerraintilesGetTerrainFormatsEnum.FirstDerivative,
  ],
  uploadType: "recusandae",
  uploadProtocol: "temporibus",
};

sdk.terraintiles.vectortileTerraintilesGet(req).then((res: VectortileTerraintilesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### terraintiles

* `vectortileTerraintilesGet` - Gets a terrain tile by its tile resource name.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

