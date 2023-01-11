<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetemailinfoRequest, GetemailinfoResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetemailinfoRequest = {
  queryParams: {
    email: "sit",
    license: "voluptas",
  },
};

sdk.emailAddressInformation.getemailinfo(req).then((res: GetemailinfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->