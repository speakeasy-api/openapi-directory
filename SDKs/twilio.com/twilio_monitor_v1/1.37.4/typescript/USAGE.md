<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FetchAlertRequest, FetchAlertResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FetchAlertRequest = {
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

sdk.fetchAlert(req).then((res: FetchAlertResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->