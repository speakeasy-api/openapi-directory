<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ListPaymentChannelRulesV1Response } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    oAuth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));

sdk.countries.listPaymentChannelRulesV1().then((res: ListPaymentChannelRulesV1Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->