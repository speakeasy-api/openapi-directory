<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetRequest, GetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetRequest = {
  queryParams: {
    format: "json",
    ip: "voluptas",
    key: "culpa",
    package: "expedita",
  },
};

sdk.get(req).then((res: GetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->