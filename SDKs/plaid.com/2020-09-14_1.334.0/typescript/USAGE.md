<!-- Start SDK Example Usage -->
```typescript
import {
  shared.AccountsBalanceGetRequest,
  AccountsBalanceGetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    clientId: "YOUR_API_KEY_HERE",
    plaidVersion: "YOUR_API_KEY_HERE",
    secret: "YOUR_API_KEY_HERE",
  },
});

const req: shared.AccountsBalanceGetRequest = {
  accessToken: "corrupti",
  clientId: "provident",
  options: {
    accountIds: [
      "quibusdam",
      "unde",
      "nulla",
    ],
    minLastUpdatedDatetime: "2021-04-22T12:08:58.275Z",
  },
  secret: "vel",
};

sdk.plaid.accountsBalanceGet(req).then((res: AccountsBalanceGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->