<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FetchUserRequest, FetchUserResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FetchUserRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    sid: "sit",
  },
};

sdk.fetchUser(req).then((res: FetchUserResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->