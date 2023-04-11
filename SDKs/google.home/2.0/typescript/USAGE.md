<!-- Start SDK Example Usage -->
```typescript
import {
  shared.AccessibilityRequest,
  AccessibilityResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    castLocalAuthorizationToken: "YOUR_API_KEY_HERE",
  },
});

const req: shared.AccessibilityRequest = {
  endpointEnabled: false,
  hotwordEnabled: false,
};

sdk.assistant.accessibility(req).then((res: AccessibilityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->