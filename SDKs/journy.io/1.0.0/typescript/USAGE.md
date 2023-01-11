<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddUserToAccountRequest, AddUserToAccountResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AddUserToAccountRequest = {
  pathParams: {
    accountId: "sit",
  },
  request: {
    userId: "voluptas",
  },
};

sdk.accounts.addUserToAccount(req).then((res: AddUserToAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->