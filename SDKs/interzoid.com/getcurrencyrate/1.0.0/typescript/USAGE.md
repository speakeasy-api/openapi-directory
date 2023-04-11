<!-- Start SDK Example Usage -->
```typescript
import {
  GetcurrencyrateRequest,
  GetcurrencyrateResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetcurrencyrateRequest = {
  license: "corrupti",
  symbol: "provident",
};

sdk.currencyRates.getcurrencyrate(req).then((res: GetcurrencyrateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->