<!-- Start SDK Example Usage -->
```typescript
import {
  AddOrUpdateAdditionalRatesRequest,
  AddOrUpdateAdditionalRatesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AddOrUpdateAdditionalRatesRequest = {
  additionalRate: {
    changeReason: "corrupti",
    costCenter1: "provident",
    costCenter2: "distinctio",
    costCenter3: "quibusdam",
    effectiveDate: "unde",
    endCheckDate: "nulla",
    job: "corrupti",
    rate: 8472.52,
    rateCode: "vel",
    rateNotes: "error",
    ratePer: "deserunt",
    shift: "suscipit",
  },
  companyId: "iure",
  employeeId: "magnam",
};

sdk.additionalRates.addOrUpdateAdditionalRates(req).then((res: AddOrUpdateAdditionalRatesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->