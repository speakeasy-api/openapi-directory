<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetcurrencyrateRequest, GetcurrencyrateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetcurrencyrateRequest = {
  queryParams: {
    license: "sit",
    symbol: "voluptas",
  },
};

sdk.currencyRates.getcurrencyrate(req).then((res: GetcurrencyrateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->