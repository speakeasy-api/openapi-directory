<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BuyANumberRequest, BuyANumberResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
    apiSecret: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BuyANumberRequest = {
  request: {
    country: "sit",
    msisdn: "voluptas",
    targetApiKey: "culpa",
  },
};

sdk.buyANumber(req).then((res: BuyANumberResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->