<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AccessibilityRequest, AccessibilityResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    castLocalAuthorizationToken: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AccessibilityRequest = {
  request: {
    endpointEnabled: false,
    hotwordEnabled: false,
  },
};

sdk.assistant.accessibility(req).then((res: AccessibilityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->