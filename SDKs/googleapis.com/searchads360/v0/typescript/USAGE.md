<!-- Start SDK Example Usage -->
```typescript
import {
  Searchads360CustomersCustomColumnsListRequest,
  Searchads360CustomersCustomColumnsListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: Searchads360CustomersCustomColumnsListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  customerId: "unde",
  fields: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.customers.searchads360CustomersCustomColumnsList(req).then((res: Searchads360CustomersCustomColumnsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->