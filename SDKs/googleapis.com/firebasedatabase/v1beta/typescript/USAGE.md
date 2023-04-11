<!-- Start SDK Example Usage -->
```typescript
import {
  FirebasedatabaseProjectsLocationsInstancesCreateRequest,
  FirebasedatabaseProjectsLocationsInstancesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  DatabaseInstanceTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FirebasedatabaseProjectsLocationsInstancesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  databaseInstanceInput: {
    name: "provident",
    type: DatabaseInstanceTypeEnum.UserDatabase,
  },
  accessToken: "quibusdam",
  alt: AltEnum.Media,
  callback: "nulla",
  databaseId: "corrupti",
  fields: "illum",
  key: "vel",
  oauthToken: "error",
  parent: "deserunt",
  prettyPrint: false,
  quotaUser: "suscipit",
  uploadType: "iure",
  uploadProtocol: "magnam",
  validateOnly: false,
};

sdk.projects.firebasedatabaseProjectsLocationsInstancesCreate(req).then((res: FirebasedatabaseProjectsLocationsInstancesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->