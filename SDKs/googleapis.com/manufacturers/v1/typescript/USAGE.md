<!-- Start SDK Example Usage -->
```typescript
import {
  ManufacturersAccountsLanguagesProductCertificationsDeleteRequest,
  ManufacturersAccountsLanguagesProductCertificationsDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ManufacturersAccountsLanguagesProductCertificationsDeleteRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  name: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.accounts.manufacturersAccountsLanguagesProductCertificationsDelete(req).then((res: ManufacturersAccountsLanguagesProductCertificationsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->