<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAllAccountsRequest, GetAllAccountsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetAllAccountsRequest = {
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  queryParams: {
    pageNumber: 8717895732742165505,
    pageSize: 2259404117704393152,
    provider: "viber_service_msg",
  },
};

sdk.account.getAllAccounts(req).then((res: GetAllAccountsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->