<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetareacodeRequest, GetareacodeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetareacodeRequest = {
  queryParams: {
    areacode: "sit",
    license: "voluptas",
  },
};

sdk.areaCodeInformation.getareacode(req).then((res: GetareacodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->