<!-- Start SDK Example Usage -->
```typescript
import {
  ListPaymentChannelRulesV1Response
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    oAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.countries.listPaymentChannelRulesV1().then((res: ListPaymentChannelRulesV1Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->