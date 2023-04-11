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