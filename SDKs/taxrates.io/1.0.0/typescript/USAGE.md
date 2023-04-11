<!-- Start SDK Example Usage -->
```typescript
import {
  TaxRatesByCountryCodeRequest,
  TaxRatesByCountryCodeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: TaxRatesByCountryCodeRequest = {
  countryCode: "US",
  date: "2020-09-02",
  domain: "api.taxrates.io",
  filter: "corrupti",
  productCodes: "C010",
  province: "provident",
  zip: "71642",
};

sdk.v1Tax.taxRatesByCountryCode(req).then((res: TaxRatesByCountryCodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->