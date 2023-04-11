<!-- Start SDK Example Usage -->
```typescript
import {
  FirebaserulesProjectsReleasesCreateRequest,
  FirebaserulesProjectsReleasesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FirebaserulesProjectsReleasesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  releaseInput: {
    name: "provident",
    rulesetName: "distinctio",
  },
  accessToken: "quibusdam",
  alt: AltEnum.Media,
  callback: "nulla",
  fields: "corrupti",
  key: "illum",
  name: "vel",
  oauthToken: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.projects.firebaserulesProjectsReleasesCreate(req).then((res: FirebaserulesProjectsReleasesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->