<!-- Start SDK Example Usage -->
```typescript
import {
  GetAllAccountsRequest,
  GetAllAccountsResponse,
  GetAllAccountsProviderEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAllAccountsRequest = {
  pageNumber: 1,
  pageSize: 1,
  provider: GetAllAccountsProviderEnum.ViberServiceMsg,
};

sdk.account.getAllAccounts(req).then((res: GetAllAccountsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->