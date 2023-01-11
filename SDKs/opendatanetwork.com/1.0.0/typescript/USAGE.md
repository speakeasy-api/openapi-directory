<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateAMapRequest, CreateAMapResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateAMapRequest = {
  queryParams: {
    appToken: "sit",
    constraint: "voluptas",
    entityId: "culpa",
    variable: "expedita",
  },
  headers: {
    xAppToken: "consequuntur",
  },
};

sdk.createAMap(req).then((res: CreateAMapResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->