<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetaddressmatchRequest, GetaddressmatchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetaddressmatchRequest = {
  queryParams: {
    address: "sit",
    license: "voluptas",
  },
};

sdk.streetAddressSimilarityKey.getaddressmatch(req).then((res: GetaddressmatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->