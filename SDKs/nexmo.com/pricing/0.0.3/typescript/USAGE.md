<!-- Start SDK Example Usage -->
```typescript
import {
  RetrievePrefixPricingRequest,
  RetrievePrefixPricingResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RetrievePrefixPricingRequest = {
  apiKey: "corrupti",
  apiSecret: "provident",
  prefix: "distinctio",
  type: "quibusdam",
};

sdk.pricing.retrievePrefixPricing(req).then((res: RetrievePrefixPricingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->