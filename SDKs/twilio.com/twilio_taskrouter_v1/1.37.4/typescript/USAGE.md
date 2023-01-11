<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateActivityRequest, CreateActivityResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateActivityRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    workspaceSid: "sit",
  },
  request: {
    available: false,
    friendlyName: "culpa",
  },
};

sdk.createActivity(req).then((res: CreateActivityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->