<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AccountsBalanceGetRequest, AccountsBalanceGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    clientId: {
      apiKey: "YOUR_API_KEY_HERE",
    },
    plaidVersion: {
      apiKey: "YOUR_API_KEY_HERE",
    },
    secret: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AccountsBalanceGetRequest = {
  request: {
    accessToken: "sit",
    clientId: "voluptas",
    options: {
      accountIds: [
        "expedita",
        "consequuntur",
      ],
      minLastUpdatedDatetime: "2003-04-20T23:11:44Z",
    },
    secret: "expedita",
  },
};

sdk.plaid.accountsBalanceGet(req).then((res: AccountsBalanceGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->