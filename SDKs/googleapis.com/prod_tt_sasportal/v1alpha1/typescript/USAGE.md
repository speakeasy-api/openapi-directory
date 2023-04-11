<!-- Start SDK Example Usage -->
```typescript
import {
  ProdTtSasportalCustomersListRequest,
  ProdTtSasportalCustomersListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ProdTtSasportalCustomersListRequest = {
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

sdk.customers.prodTtSasportalCustomersList(req).then((res: ProdTtSasportalCustomersListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->