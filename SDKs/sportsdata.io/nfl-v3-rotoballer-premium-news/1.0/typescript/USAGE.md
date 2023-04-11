<!-- Start SDK Example Usage -->
```typescript
import {
  PremiumNewsRequest,
  PremiumNewsResponse,
  PremiumNewsFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: PremiumNewsRequest = {
  format: PremiumNewsFormatEnum.Json,
};

sdk.premiumNews(req).then((res: PremiumNewsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->