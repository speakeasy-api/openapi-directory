<!-- Start SDK Example Usage -->
```typescript
import {
  FirebasehostingProjectsSitesCreateRequest,
  FirebasehostingProjectsSitesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FirebasehostingProjectsSitesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  siteInput: {
    appId: "provident",
    labels: {
      "quibusdam": "unde",
      "nulla": "corrupti",
      "illum": "vel",
    },
  },
  accessToken: "error",
  alt: AltEnum.Media,
  callback: "suscipit",
  fields: "iure",
  key: "magnam",
  oauthToken: "debitis",
  parent: "ipsa",
  prettyPrint: false,
  quotaUser: "delectus",
  siteId: "tempora",
  uploadType: "suscipit",
  uploadProtocol: "molestiae",
};

sdk.projects.firebasehostingProjectsSitesCreate(req).then((res: FirebasehostingProjectsSitesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->