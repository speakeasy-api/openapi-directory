<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAffectedGenomicModelsUsingGetRequest, GetAffectedGenomicModelsUsingGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetAffectedGenomicModelsUsingGetRequest = {
  pathParams: {
    taxonId: "sit",
  },
};

sdk.agr.getAffectedGenomicModelsUsingGet(req).then((res: GetAffectedGenomicModelsUsingGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->