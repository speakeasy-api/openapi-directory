<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateEsimProfileRequest, CreateEsimProfileResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateEsimProfileRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    callbackMethod: "HEAD",
    callbackUrl: "voluptas",
    eid: "culpa",
  },
};

sdk.createEsimProfile(req).then((res: CreateEsimProfileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->