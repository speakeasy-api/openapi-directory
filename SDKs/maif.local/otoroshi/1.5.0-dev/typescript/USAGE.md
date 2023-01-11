<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AllApiKeysRequest, AllApiKeysResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AllApiKeysRequest = {
  security: {
    otoroshiAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
};

sdk.apikeys.allApiKeys(req).then((res: AllApiKeysResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->