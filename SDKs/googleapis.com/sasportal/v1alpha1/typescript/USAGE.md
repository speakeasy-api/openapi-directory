<!-- Start SDK Example Usage -->
```typescript
import {
  SasportalCustomersListRequest,
  SasportalCustomersListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SasportalCustomersListRequest = {
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
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.customers.sasportalCustomersList(req).then((res: SasportalCustomersListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->