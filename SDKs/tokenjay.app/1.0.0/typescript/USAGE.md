<!-- Start SDK Example Usage -->
```typescript
import {
  CalcSigmaRsvExchangeRequest,
  CalcSigmaRsvExchangeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CalcSigmaRsvExchangeRequest = {
  amount: 548814,
};

sdk.ageUsd.calcSigmaRsvExchange(req).then((res: CalcSigmaRsvExchangeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->