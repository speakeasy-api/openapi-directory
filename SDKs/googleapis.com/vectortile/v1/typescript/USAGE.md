<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { VectortileTerraintilesGetRequest, VectortileTerraintilesGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: VectortileTerraintilesGetRequest = {
  pathParams: {
    name: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    altitudePrecisionCentimeters: 3390393562759376202,
    callback: "dolor",
    clientInfoApiClient: "expedita",
    clientInfoApplicationId: "voluptas",
    clientInfoApplicationVersion: "fugit",
    clientInfoDeviceModel: "et",
    clientInfoOperatingSystem: "nihil",
    clientInfoPlatform: "WINDOWS",
    clientInfoUserId: "dicta",
    enableModeledVolumes: true,
    enablePoliticalFeatures: true,
    enablePrivateRoads: false,
    enableUnclippedBuildings: false,
    fields: "dolorem",
    key: "et",
    languageCode: "voluptate",
    maxElevationResolutionCells: 3287288577352441706,
    minElevationResolutionCells: 3930927879439176946,
    oauthToken: "totam",
    prettyPrint: true,
    quotaUser: "illum",
    regionCode: "debitis",
    terrainFormats: [
      "TERRAIN_FORMAT_UNKNOWN",
      "FIRST_DERIVATIVE",
    ],
    uploadType: "id",
    uploadProtocol: "aspernatur",
  },
};

sdk.terraintiles.vectortileTerraintilesGet(req).then((res: VectortileTerraintilesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->