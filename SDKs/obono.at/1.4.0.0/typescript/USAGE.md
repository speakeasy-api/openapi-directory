<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAuthRequest, GetAuthResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    jwt: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetAuthRequest = {
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
};

sdk.auth.getAuth(req).then((res: GetAuthResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->