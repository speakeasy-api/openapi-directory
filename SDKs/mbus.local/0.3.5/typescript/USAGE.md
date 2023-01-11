<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetRequest, GetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetRequest = {
  pathParams: {
    address: "sit",
    baudrate: 2259404117704393152,
    device: "culpa",
  },
};

sdk.get(req).then((res: GetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->