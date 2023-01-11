<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetUtilityV1HealthHeartbeatResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));

sdk.health.getUtilityV1HealthHeartbeat().then((res: GetUtilityV1HealthHeartbeatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->