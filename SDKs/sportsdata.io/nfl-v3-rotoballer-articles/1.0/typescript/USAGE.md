<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { RotoballerArticlesRequest, RotoballerArticlesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: RotoballerArticlesRequest = {
  pathParams: {
    format: "xml",
  },
};

sdk.rotoballerArticles(req).then((res: RotoballerArticlesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->