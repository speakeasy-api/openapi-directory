<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetV1EmailFreeRequest, GetV1EmailFreeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetV1EmailFreeRequest = {
  queryParams: {
    email: "sit",
    format: "json",
    key: "culpa",
  },
};

sdk.getV1EmailFree(req).then((res: GetV1EmailFreeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->