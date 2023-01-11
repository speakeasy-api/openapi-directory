<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { VerifyCheckRequest, VerifyCheckResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: VerifyCheckRequest = {
  pathParams: {
    format: "json",
  },
  request: {
    apiKey: "voluptas",
    apiSecret: "culpa",
    code: "expedita",
    ipAddress: "consequuntur",
    requestId: "dolor",
  },
};

sdk.verifyCheck(req).then((res: VerifyCheckResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->