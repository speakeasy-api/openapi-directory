<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CurrentSeasonRequest, CurrentSeasonResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CurrentSeasonRequest = {
  pathParams: {
    format: "XML",
  },
};

sdk.currentSeason(req).then((res: CurrentSeasonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->