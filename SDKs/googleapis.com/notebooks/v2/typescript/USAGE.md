<!-- Start SDK Example Usage -->
```typescript
import {
  NotebooksProjectsLocationsInstancesGetIamPolicyRequest,
  NotebooksProjectsLocationsInstancesGetIamPolicyResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: NotebooksProjectsLocationsInstancesGetIamPolicyRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  optionsRequestedPolicyVersion: 847252,
  prettyPrint: false,
  quotaUser: "vel",
  resource: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.projects.notebooksProjectsLocationsInstancesGetIamPolicy(req).then((res: NotebooksProjectsLocationsInstancesGetIamPolicyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->