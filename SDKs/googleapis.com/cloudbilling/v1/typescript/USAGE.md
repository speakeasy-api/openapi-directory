<!-- Start SDK Example Usage -->
```typescript
import {
  CloudbillingBillingAccountsCreateRequest,
  CloudbillingBillingAccountsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudbillingBillingAccountsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  billingAccountInput: {
    displayName: "provident",
    masterBillingAccount: "distinctio",
  },
  accessToken: "quibusdam",
  alt: AltEnum.Media,
  callback: "nulla",
  fields: "corrupti",
  key: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.billingAccounts.cloudbillingBillingAccountsCreate(req).then((res: CloudbillingBillingAccountsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->