<!-- Start SDK Example Usage -->
```typescript
import {
  PlayablelocationsLogImpressionsRequest,
  PlayablelocationsLogImpressionsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum,
  GoogleMapsUnityClientInfoPlatformEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PlayablelocationsLogImpressionsRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleMapsPlayablelocationsV3LogImpressionsRequest: {
    clientInfo: {
      apiClient: "provident",
      applicationId: "distinctio",
      applicationVersion: "quibusdam",
      deviceModel: "unde",
      languageCode: "nulla",
      operatingSystem: "corrupti",
      operatingSystemBuild: "illum",
      platform: GoogleMapsUnityClientInfoPlatformEnum.Windows,
    },
    impressions: [
      {
        gameObjectType: 645894,
        impressionType: GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum.Presented,
        locationName: "iure",
      },
      {
        gameObjectType: 297534,
        impressionType: GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum.Interacted,
        locationName: "ipsa",
      },
      {
        gameObjectType: 963663,
        impressionType: GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum.ImpressionTypeUnspecified,
        locationName: "suscipit",
      },
    ],
    requestId: "molestiae",
  },
  accessToken: "minus",
  alt: AltEnum.Proto,
  callback: "voluptatum",
  fields: "iusto",
  key: "excepturi",
  oauthToken: "nisi",
  prettyPrint: false,
  quotaUser: "recusandae",
  uploadType: "temporibus",
  uploadProtocol: "ab",
};

sdk.v3.playablelocationsLogImpressions(req).then((res: PlayablelocationsLogImpressionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->