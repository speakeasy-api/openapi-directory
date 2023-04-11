<!-- Start SDK Example Usage -->
```typescript
import {
  GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest,
  GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest = {
  dollarXgafv: XgafvEnum.Two,
  requestBody: {
    "distinctio": "quibusdam",
    "unde": "nulla",
    "corrupti": "illum",
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  callback: "deserunt",
  fields: "suscipit",
  key: "iure",
  oauthToken: "magnam",
  prettyPrint: false,
  project: "debitis",
  quotaUser: "ipsa",
  uploadType: "delectus",
  uploadProtocol: "tempora",
};

sdk.projects.gkehubProjectsLocationsGlobalMembershipsInitializeHub(req).then((res: GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->