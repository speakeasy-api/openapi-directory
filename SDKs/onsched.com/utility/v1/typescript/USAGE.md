<!-- Start SDK Example Usage -->
```typescript
import {
  GetUtilityV1HealthHeartbeatResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.health.getUtilityV1HealthHeartbeat().then((res: GetUtilityV1HealthHeartbeatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->