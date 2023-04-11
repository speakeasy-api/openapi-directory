<!-- Start SDK Example Usage -->
```typescript
import {
  CrawlRequest,
  CrawlResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apikey: "YOUR_API_KEY_HERE",
  },
});

const req: CrawlRequest = {
  query: "corrupti",
};

sdk.crawl(req).then((res: CrawlResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->