<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetfullnamematchRequest, GetfullnamematchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetfullnamematchRequest = {
  queryParams: {
    fullname: "sit",
    license: "voluptas",
  },
};

sdk.fullNameMatchSimilarityKey.getfullnamematch(req).then((res: GetfullnamematchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->