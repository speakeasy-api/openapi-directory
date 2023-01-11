<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddOrUpdateAdditionalRatesRequest, AddOrUpdateAdditionalRatesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AddOrUpdateAdditionalRatesRequest = {
  security: {
    paylocityAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    companyId: "sit",
    employeeId: "voluptas",
  },
  request: {
    changeReason: "culpa",
    costCenter1: "expedita",
    costCenter2: "consequuntur",
    costCenter3: "dolor",
    effectiveDate: "expedita",
    endCheckDate: "voluptas",
    job: "fugit",
    rate: 28.100000,
    rateCode: "rerum",
    rateNotes: "dicta",
    ratePer: "debitis",
    shift: "voluptatum",
  },
};

sdk.additionalRates.addOrUpdateAdditionalRates(req).then((res: AddOrUpdateAdditionalRatesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->