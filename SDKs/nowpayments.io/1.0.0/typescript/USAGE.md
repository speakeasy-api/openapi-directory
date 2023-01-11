<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ThreeGetEstimatedPriceRequest, ThreeGetEstimatedPriceResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ThreeGetEstimatedPriceRequest = {
  queryParams: {
    amount: "sit",
    currencyFrom: "voluptas",
    currencyTo: "culpa",
  },
};

sdk.threeGetEstimatedPrice(req).then((res: ThreeGetEstimatedPriceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->