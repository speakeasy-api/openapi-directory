# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/ideahub/v1beta/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/ideahub/v1beta/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest,
  IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleSearchIdeahubV1betaIdeaActivityTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleSearchIdeahubV1betaIdeaActivity: {
    ideas: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
    name: "nulla",
    topics: [
      "illum",
      "vel",
      "error",
    ],
    type: GoogleSearchIdeahubV1betaIdeaActivityTypeEnum.PostDeleted,
    uri: "http://innocent-effect.org",
  },
  accessToken: "ipsa",
  alt: AltEnum.Proto,
  callback: "tempora",
  fields: "suscipit",
  key: "molestiae",
  oauthToken: "minus",
  parent: "placeat",
  prettyPrint: false,
  quotaUser: "voluptatum",
  uploadType: "iusto",
  uploadProtocol: "excepturi",
};

sdk.platforms.ideahubPlatformsPropertiesIdeaActivitiesCreate(req).then((res: IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### platforms

* `ideahubPlatformsPropertiesIdeaActivitiesCreate` - Creates an idea activity entry.
* `ideahubPlatformsPropertiesIdeasList` - List ideas for a given Creator and filter and sort options.
* `ideahubPlatformsPropertiesLocalesList` - Returns which locales ideas are available in for a given Creator.
* `ideahubPlatformsPropertiesTopicStatesPatch` - Update a topic state resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

