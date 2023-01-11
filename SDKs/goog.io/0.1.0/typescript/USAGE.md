<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CrawlRequest, CrawlResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CrawlRequest = {
  pathParams: {
    query: "sit",
  },
};

sdk.crawl(req).then((res: CrawlResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->