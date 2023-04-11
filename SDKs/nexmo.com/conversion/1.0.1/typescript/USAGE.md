<!-- Start SDK Example Usage -->
```typescript
import {
  SmsConversionRequest,
  SmsConversionResponse
} from "openapi/dist/sdk/models/operations";
import {
  DeliveredEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    option1: {
      apiKey: "YOUR_API_KEY_HERE",
      apiSecret: "YOUR_API_KEY_HERE",
    },
  },
});

const req: SmsConversionRequest = {
  delivered: DeliveredEnum.Zero,
  messageId: "provident",
  timestamp: "distinctio",
};

sdk.smsConversion.smsConversion(req).then((res: SmsConversionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->