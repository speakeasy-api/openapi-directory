<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateCustomerProfileRequest, CreateCustomerProfileResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateCustomerProfileRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    email: "sit",
    friendlyName: "voluptas",
    policySid: "culpa",
    statusCallback: "expedita",
  },
};

sdk.createCustomerProfile(req).then((res: CreateCustomerProfileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->