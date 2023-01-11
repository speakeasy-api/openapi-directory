<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAddressRequest, GetAddressResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetAddressRequest = {
  pathParams: {
    address: "sit",
  },
};

sdk.insight.getAddress(req).then((res: GetAddressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->