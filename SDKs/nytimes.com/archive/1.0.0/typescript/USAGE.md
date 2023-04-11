<!-- Start SDK Example Usage -->
```typescript
import {
  GetYearMonthJsonRequest,
  GetYearMonthJsonResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apikey: "YOUR_API_KEY_HERE",
  },
});

const req: GetYearMonthJsonRequest = {
  month: 548814,
  year: 592845,
};

sdk.archive.getYearMonthJson(req).then((res: GetYearMonthJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->