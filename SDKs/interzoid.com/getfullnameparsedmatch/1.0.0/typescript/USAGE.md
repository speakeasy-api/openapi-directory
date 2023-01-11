<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetfullnameparsedmatchRequest, GetfullnameparsedmatchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetfullnameparsedmatchRequest = {
  queryParams: {
    firstname: "sit",
    lastname: "voluptas",
    license: "culpa",
  },
};

sdk.fullNameParsedSimilarityKey.getfullnameparsedmatch(req).then((res: GetfullnameparsedmatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->