<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetCountriesRequest, GetCountriesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetCountriesRequest = {
  queryParams: {
    marketId: "sit",
    order: "ascending",
    regionName: "culpa",
    regionTypeId: 501233450539197794,
    sort: "label",
  },
};

sdk.v1.getCountries(req).then((res: GetCountriesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->