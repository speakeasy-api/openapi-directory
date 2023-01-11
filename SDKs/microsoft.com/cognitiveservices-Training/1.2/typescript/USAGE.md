<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAccountInfoRequest, GetAccountInfoResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetAccountInfoRequest = {
  headers: {
    trainingKey: "sit",
  },
};

sdk.accountApi.getAccountInfo(req).then((res: GetAccountInfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->