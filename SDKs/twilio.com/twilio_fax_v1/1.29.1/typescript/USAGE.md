<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteFaxRequest, DeleteFaxResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteFaxRequest = {
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

sdk.deleteFax(req).then((res: DeleteFaxResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->