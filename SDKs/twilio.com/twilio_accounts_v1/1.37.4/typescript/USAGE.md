<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateCredentialAwsRequest, CreateCredentialAwsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateCredentialAwsRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    accountSid: "sit",
    credentials: "voluptas",
    friendlyName: "culpa",
  },
};

sdk.createCredentialAws(req).then((res: CreateCredentialAwsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->