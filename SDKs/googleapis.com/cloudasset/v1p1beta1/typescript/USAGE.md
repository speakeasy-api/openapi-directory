<!-- Start SDK Example Usage -->
```typescript
import {
  CloudassetIamPoliciesSearchAllRequest,
  CloudassetIamPoliciesSearchAllResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudassetIamPoliciesSearchAllRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  pageSize: 847252,
  pageToken: "vel",
  prettyPrint: false,
  query: "error",
  quotaUser: "deserunt",
  scope: "suscipit",
  uploadType: "iure",
  uploadProtocol: "magnam",
};

sdk.iamPolicies.cloudassetIamPoliciesSearchAll(req).then((res: CloudassetIamPoliciesSearchAllResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->