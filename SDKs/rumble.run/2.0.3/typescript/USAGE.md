<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateAccountCredentialRequest, CreateAccountCredentialResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateAccountCredentialRequest = {
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  request: {
    acl: {
      "voluptas": "culpa",
    },
    cidrs: "expedita",
    global: true,
    name: "dolor",
    secret: {
      "voluptas": "fugit",
      "et": "nihil",
    },
    type: "aws_access_secret",
  },
};

sdk.account.createAccountCredential(req).then((res: CreateAccountCredentialResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->