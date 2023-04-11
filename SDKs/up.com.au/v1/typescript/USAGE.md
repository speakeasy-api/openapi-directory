<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccountsRequest,
  GetAccountsResponse
} from "openapi/dist/sdk/models/operations";
import {
  OwnershipTypeEnumEnum,
  AccountTypeEnumEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetAccountsRequest = {
  filterAccountType: AccountTypeEnumEnum.Transactional,
  filterOwnershipType: OwnershipTypeEnumEnum.Joint,
  pageSize: 715190,
};

sdk.accounts.getAccounts(req).then((res: GetAccountsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->