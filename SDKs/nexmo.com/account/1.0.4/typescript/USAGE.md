<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccountBalanceRequest,
  GetAccountBalanceResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAccountBalanceRequest = {
  apiKey: "abcd1234",
  apiSecret: "ABCDEFGH01234abc",
};

sdk.balance.getAccountBalance(req).then((res: GetAccountBalanceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->