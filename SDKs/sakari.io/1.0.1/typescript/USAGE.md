<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AuthTokenRequest, AuthTokenResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AuthTokenRequest = {
  request: {
    clientId: "sit",
    clientSecret: "voluptas",
    grantType: "culpa",
  },
};

sdk.authentication.authToken(req).then((res: AuthTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->