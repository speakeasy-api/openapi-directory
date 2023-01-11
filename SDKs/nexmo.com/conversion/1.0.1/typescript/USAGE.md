<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { SmsConversionRequest, SmsConversionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    option1: {
      apiKey: {
        apiKey: "YOUR_API_KEY_HERE",
      },
      apiSecret: {
        apiKey: "YOUR_API_KEY_HERE",
      },
    },
  }
));
    
const req: SmsConversionRequest = {
  queryParams: {
    delivered: "sit",
    messageId: "voluptas",
    timestamp: "culpa",
  },
};

sdk.smsConversion.smsConversion(req).then((res: SmsConversionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->