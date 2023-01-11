<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetcitymatchRequest, GetcitymatchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetcitymatchRequest = {
  queryParams: {
    city: "sit",
    license: "voluptas",
  },
};

sdk.cityNameSimilarityKey.getcitymatch(req).then((res: GetcitymatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->