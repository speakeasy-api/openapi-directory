<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetzipcodeinfoRequest, GetzipcodeinfoResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetzipcodeinfoRequest = {
  queryParams: {
    license: "sit",
    zip: "voluptas",
  },
};

sdk.detailedZipCodeInformation.getzipcodeinfo(req).then((res: GetzipcodeinfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->