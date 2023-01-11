<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AreGamesInProgressRequest, AreGamesInProgressResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AreGamesInProgressRequest = {
  pathParams: {
    format: "XML",
  },
};

sdk.areGamesInProgress(req).then((res: AreGamesInProgressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->