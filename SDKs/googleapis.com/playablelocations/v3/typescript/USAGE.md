<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PlayablelocationsLogImpressionsRequest, PlayablelocationsLogImpressionsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PlayablelocationsLogImpressionsRequest = {
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    key: "dolor",
    oauthToken: "expedita",
    prettyPrint: true,
    quotaUser: "fugit",
    uploadType: "et",
    uploadProtocol: "nihil",
  },
  request: {
    clientInfo: {
      apiClient: "rerum",
      applicationId: "dicta",
      applicationVersion: "debitis",
      deviceModel: "voluptatum",
      languageCode: "et",
      operatingSystem: "ut",
      operatingSystemBuild: "dolorem",
      platform: "MAC_OS",
    },
    impressions: [
      {
        gameObjectType: 3287288577352441706,
        impressionType: "IMPRESSION_TYPE_UNSPECIFIED",
        locationName: "totam",
      },
    ],
    requestId: "dolores",
  },
};

sdk.v3.playablelocationsLogImpressions(req).then((res: PlayablelocationsLogImpressionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->