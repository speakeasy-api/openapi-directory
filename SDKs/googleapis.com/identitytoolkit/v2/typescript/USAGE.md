<!-- Start SDK Example Usage -->
```typescript
import {
  IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest,
  IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest: {
    displayName: "provident",
    idToken: "distinctio",
    phoneVerificationInfo: {
      androidVerificationProof: "quibusdam",
      code: "unde",
      phoneNumber: "nulla",
      sessionInfo: "corrupti",
    },
    tenantId: "illum",
    totpVerificationInfo: {
      sessionInfo: "vel",
      verificationCode: "error",
    },
  },
  accessToken: "deserunt",
  alt: AltEnum.Media,
  callback: "iure",
  fields: "magnam",
  key: "debitis",
  oauthToken: "ipsa",
  prettyPrint: false,
  quotaUser: "delectus",
  uploadType: "tempora",
  uploadProtocol: "suscipit",
};

sdk.accounts.identitytoolkitAccountsMfaEnrollmentFinalize(req).then((res: IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->