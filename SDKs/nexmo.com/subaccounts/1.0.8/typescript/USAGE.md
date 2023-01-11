<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateSubAccountRequest, CreateSubAccountResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateSubAccountRequest = {
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    apiKey: "sit",
  },
  request: {
    name: "voluptas",
    secret: "culpa",
    usePrimaryAccountBalance: false,
  },
};

sdk.subaccountManagement.createSubAccount(req).then((res: CreateSubAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->