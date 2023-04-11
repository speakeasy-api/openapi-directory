<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccountsRequest,
  GetAccountsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    cookieAuth: "YOUR_API_KEY_HERE",
  },
});

const req: GetAccountsRequest = {
  account: "corrupti",
};

sdk.accountAndPortfolio.getAccounts(req).then((res: GetAccountsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->