<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateTokenRequest, CreateTokenResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateTokenRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    clientSecret: "sit",
    clientSid: "voluptas",
    code: "culpa",
    codeVerifier: "expedita",
    deviceCode: "consequuntur",
    deviceId: "dolor",
    grantType: "expedita",
    refreshToken: "voluptas",
  },
};

sdk.createToken(req).then((res: CreateTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->