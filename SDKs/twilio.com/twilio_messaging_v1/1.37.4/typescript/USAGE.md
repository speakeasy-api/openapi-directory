<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateAlphaSenderRequest, CreateAlphaSenderResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateAlphaSenderRequest = {
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
    alphaSender: "voluptas",
  },
};

sdk.createAlphaSender(req).then((res: CreateAlphaSenderResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->