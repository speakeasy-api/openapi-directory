<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateAccessTokenRequest, CreateAccessTokenResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateAccessTokenRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    serviceSid: "sit",
  },
  request: {
    factorFriendlyName: "voluptas",
    factorType: "push",
    identity: "expedita",
    ttl: 3390393562759376202,
  },
};

sdk.createAccessToken(req).then((res: CreateAccessTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->