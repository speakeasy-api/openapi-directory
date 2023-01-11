<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ChangePasswordRequest, ChangePasswordResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ChangePasswordRequest = {
  pathParams: {
    shopperId: "sit",
  },
  request: "voluptas",
};

sdk.v1.changePassword(req).then((res: ChangePasswordResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->