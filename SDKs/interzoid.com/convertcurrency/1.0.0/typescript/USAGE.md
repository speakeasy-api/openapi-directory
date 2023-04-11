<!-- Start SDK Example Usage -->
```typescript
import {
  ConvertcurrencyRequest,
  ConvertcurrencyResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ConvertcurrencyRequest = {
  amount: "corrupti",
  from: "provident",
  license: "distinctio",
  to: "quibusdam",
};

sdk.liveCurrencyRateConversion.convertcurrency(req).then((res: ConvertcurrencyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->