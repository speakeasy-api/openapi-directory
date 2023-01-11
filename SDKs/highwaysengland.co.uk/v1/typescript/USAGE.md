<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AreasGetRequest, AreasGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AreasGetRequest = {
  pathParams: {
    version: "sit",
  },
};

sdk.areas.areasGet(req).then((res: AreasGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->