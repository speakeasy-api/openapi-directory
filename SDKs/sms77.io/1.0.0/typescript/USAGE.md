<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AnalyticsRequest, AnalyticsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AnalyticsRequest = {
  queryParams: {
    end: "sit",
    groupBy: "subaccount",
    label: "culpa",
    start: "expedita",
    subaccounts: "consequuntur",
  },
};

sdk.analytics.analytics(req).then((res: AnalyticsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->