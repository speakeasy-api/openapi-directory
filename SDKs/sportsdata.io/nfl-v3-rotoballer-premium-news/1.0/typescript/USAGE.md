<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PremiumNewsRequest, PremiumNewsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: PremiumNewsRequest = {
  pathParams: {
    format: "xml",
  },
};

sdk.premiumNews(req).then((res: PremiumNewsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->