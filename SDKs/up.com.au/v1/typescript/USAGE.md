<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAccountsRequest, GetAccountsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: GetAccountsRequest = {
  queryParams: {
    pageSize: 8717895732742165505,
  },
};

sdk.accounts.getAccounts(req).then((res: GetAccountsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->