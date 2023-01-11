<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetV1EmailDisposableRequest, GetV1EmailDisposableResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetV1EmailDisposableRequest = {
  queryParams: {
    email: "sit",
    format: "json",
    key: "culpa",
  },
};

sdk.getV1EmailDisposable(req).then((res: GetV1EmailDisposableResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->