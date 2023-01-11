<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateBundleRequest, CreateBundleResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateBundleRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    email: "sit",
    endUserType: "individual",
    friendlyName: "culpa",
    isoCountry: "expedita",
    numberType: "consequuntur",
    regulationSid: "dolor",
    statusCallback: "expedita",
  },
};

sdk.createBundle(req).then((res: CreateBundleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->