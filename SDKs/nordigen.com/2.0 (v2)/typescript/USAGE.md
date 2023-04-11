<!-- Start SDK Example Usage -->
```typescript
import {
  AccountsBalancesRetrieveRequest,
  AccountsBalancesRetrieveResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    jwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: AccountsBalancesRetrieveRequest = {
  id: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
};

sdk.accounts.accountsBalancesRetrieve(req).then((res: AccountsBalancesRetrieveResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->