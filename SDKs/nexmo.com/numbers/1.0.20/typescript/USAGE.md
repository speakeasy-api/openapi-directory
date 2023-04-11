<!-- Start SDK Example Usage -->
```typescript
import {
  shared.NumberDetails,
  BuyANumberResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
    apiSecret: "YOUR_API_KEY_HERE",
  },
});

const req: shared.NumberDetails = {
  country: "GB",
  msisdn: "447700900000",
  targetApiKey: "1a2345b7",
};

sdk.buyANumber(req).then((res: BuyANumberResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->