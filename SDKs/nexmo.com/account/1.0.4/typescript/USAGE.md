<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAccountBalanceRequest, GetAccountBalanceResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetAccountBalanceRequest = {
  queryParams: {
    apiKey: "sit",
    apiSecret: "voluptas",
  },
};

sdk.balance.getAccountBalance(req).then((res: GetAccountBalanceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->