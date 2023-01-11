<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateCredentialListRequest, CreateCredentialListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateCredentialListRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    trunkSid: "sit",
  },
  request: {
    credentialListSid: "voluptas",
  },
};

sdk.createCredentialList(req).then((res: CreateCredentialListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->