<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetV1ValidationSingleRequest, GetV1ValidationSingleResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetV1ValidationSingleRequest = {
  queryParams: {
    email: "sit",
    format: "json",
    key: "culpa",
  },
};

sdk.getV1ValidationSingle(req).then((res: GetV1ValidationSingleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->