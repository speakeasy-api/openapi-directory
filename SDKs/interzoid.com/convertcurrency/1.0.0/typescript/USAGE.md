<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ConvertcurrencyRequest, ConvertcurrencyResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ConvertcurrencyRequest = {
  queryParams: {
    amount: "sit",
    from: "voluptas",
    license: "culpa",
    to: "expedita",
  },
};

sdk.liveCurrencyRateConversion.convertcurrency(req).then((res: ConvertcurrencyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->