<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { RetrievePrefixPricingRequest, RetrievePrefixPricingResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: RetrievePrefixPricingRequest = {
  pathParams: {
    type: "sit",
  },
  queryParams: {
    apiKey: "voluptas",
    apiSecret: "culpa",
    prefix: "expedita",
  },
};

sdk.pricing.retrievePrefixPricing(req).then((res: RetrievePrefixPricingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->