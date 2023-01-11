<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { TaxRatesByCountryCodeRequest, TaxRatesByCountryCodeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: TaxRatesByCountryCodeRequest = {
  queryParams: {
    countryCode: "sit",
    date: "voluptas",
    domain: "culpa",
    filter: "expedita",
    productCodes: "consequuntur",
    province: "dolor",
    zip: "expedita",
  },
};

sdk.v1Tax.taxRatesByCountryCode(req).then((res: TaxRatesByCountryCodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->