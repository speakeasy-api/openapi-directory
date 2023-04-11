<!-- Start SDK Example Usage -->
```typescript
import {
  CloudassetAnalyzeIamPolicyRequest,
  CloudassetAnalyzeIamPolicyResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudassetAnalyzeIamPolicyRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  analysisQueryAccessSelectorPermissions: [
    "unde",
    "nulla",
    "corrupti",
    "illum",
  ],
  analysisQueryAccessSelectorRoles: [
    "error",
    "deserunt",
  ],
  analysisQueryIdentitySelectorIdentity: "suscipit",
  analysisQueryResourceSelectorFullResourceName: "iure",
  callback: "magnam",
  fields: "debitis",
  key: "ipsa",
  oauthToken: "delectus",
  optionsAnalyzeServiceAccountImpersonation: false,
  optionsExecutionTimeout: "tempora",
  optionsExpandGroups: false,
  optionsExpandResources: false,
  optionsExpandRoles: false,
  optionsOutputGroupEdges: false,
  optionsOutputResourceEdges: false,
  parent: "suscipit",
  prettyPrint: false,
  quotaUser: "molestiae",
  uploadType: "minus",
  uploadProtocol: "placeat",
};

sdk.v1p4beta1.cloudassetAnalyzeIamPolicy(req).then((res: CloudassetAnalyzeIamPolicyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->