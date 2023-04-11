# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/playablelocations/v3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/playablelocations/v3/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### v3

* `playablelocationsLogImpressions` - Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.
* `playablelocationsLogPlayerReports` - Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.
* `playablelocationsSamplePlayableLocations` - Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

