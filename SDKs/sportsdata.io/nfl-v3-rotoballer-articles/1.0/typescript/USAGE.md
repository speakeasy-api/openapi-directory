<!-- Start SDK Example Usage -->
```typescript
import {
  RotoballerArticlesRequest,
  RotoballerArticlesResponse,
  RotoballerArticlesFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: RotoballerArticlesRequest = {
  format: RotoballerArticlesFormatEnum.Json,
};

sdk.rotoballerArticles(req).then((res: RotoballerArticlesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->