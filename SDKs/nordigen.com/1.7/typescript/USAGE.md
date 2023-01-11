<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { RetrieveAccountBalancesRequest, RetrieveAccountBalancesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    tokenAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: RetrieveAccountBalancesRequest = {
  pathParams: {
    id: "sit",
  },
};

sdk.accounts.retrieveAccountBalances(req).then((res: RetrieveAccountBalancesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->