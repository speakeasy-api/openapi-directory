<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetcountrystandardRequest, GetcountrystandardResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetcountrystandardRequest = {
  queryParams: {
    country: "sit",
    license: "voluptas",
  },
};

sdk.countryNameStandardization.getcountrystandard(req).then((res: GetcountrystandardResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->