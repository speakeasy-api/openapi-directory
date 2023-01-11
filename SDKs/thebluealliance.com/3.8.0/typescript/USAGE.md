<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetStatusRequest, GetStatusResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetStatusRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  headers: {
    ifModifiedSince: "sit",
  },
};

sdk.tba.getStatus(req).then((res: GetStatusResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->