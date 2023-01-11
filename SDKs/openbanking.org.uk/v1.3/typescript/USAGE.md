<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAtmsRequest, GetAtmsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetAtmsRequest = {
  headers: {
    ifModifiedSince: "sit",
    ifNoneMatch: "voluptas",
  },
};

sdk.atm.getAtms(req).then((res: GetAtmsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->