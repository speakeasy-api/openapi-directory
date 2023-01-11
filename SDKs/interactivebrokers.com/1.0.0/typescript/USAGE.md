<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAccountsRequest, GetAccountsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    cookieAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetAccountsRequest = {
  queryParams: {
    account: "sit",
  },
};

sdk.accountAndPortfolio.getAccounts(req).then((res: GetAccountsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->