<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteAppRequest, DeleteAppResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteAppRequest = {
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

sdk.deleteApp(req).then((res: DeleteAppResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->