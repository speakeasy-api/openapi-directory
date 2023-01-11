<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetcompanymatchRequest, GetcompanymatchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetcompanymatchRequest = {
  queryParams: {
    company: "sit",
    license: "voluptas",
  },
};

sdk.companyNameSimilarityKey.getcompanymatch(req).then((res: GetcompanymatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->