<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetcountrymatchRequest, GetcountrymatchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetcountrymatchRequest = {
  queryParams: {
    country: "sit",
    license: "voluptas",
  },
};

sdk.countryMatchSimilarityKey.getcountrymatch(req).then((res: GetcountrymatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->