<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetcitystandardRequest, GetcitystandardResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetcitystandardRequest = {
  queryParams: {
    city: "sit",
    license: "voluptas",
  },
};

sdk.cityDataStandardization.getcitystandard(req).then((res: GetcitystandardResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->