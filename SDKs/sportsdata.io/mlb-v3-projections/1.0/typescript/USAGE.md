<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DfsSlatesByDateRequest, DfsSlatesByDateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DfsSlatesByDateRequest = {
  pathParams: {
    date: "sit",
    format: "XML",
  },
};

sdk.dfsSlatesByDate(req).then((res: DfsSlatesByDateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->