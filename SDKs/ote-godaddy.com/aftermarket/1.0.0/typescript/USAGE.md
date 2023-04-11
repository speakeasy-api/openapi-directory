<!-- Start SDK Example Usage -->
```typescript
import {
  .,
  AddExpiryListingsJsonResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: . = [
  {
    domain: "provident",
    expiresAt: "distinctio",
    losingRegistrarId: 844266,
    pageViewsMonthly: 602763,
    revenueMonthly: 857946,
  },
  {
    domain: "corrupti",
    expiresAt: "illum",
    losingRegistrarId: 423655,
    pageViewsMonthly: 623564,
    revenueMonthly: 645894,
  },
  {
    domain: "suscipit",
    expiresAt: "iure",
    losingRegistrarId: 297534,
    pageViewsMonthly: 891773,
    revenueMonthly: 56713,
  },
];

sdk.v1.addExpiryListingsJson(req).then((res: AddExpiryListingsJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->