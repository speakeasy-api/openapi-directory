<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PlayByPlayRequest, PlayByPlayResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: PlayByPlayRequest = {
  pathParams: {
    format: "XML",
    gameid: "voluptas",
  },
};

sdk.playByPlay(req).then((res: PlayByPlayResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->