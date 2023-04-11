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