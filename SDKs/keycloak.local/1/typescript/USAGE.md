<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteRealmAttackDetectionBruteForceUsersRequest,
  DeleteRealmAttackDetectionBruteForceUsersResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    accessToken: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: DeleteRealmAttackDetectionBruteForceUsersRequest = {
  realm: "corrupti",
};

sdk.attackDetection.deleteRealmAttackDetectionBruteForceUsers(req).then((res: DeleteRealmAttackDetectionBruteForceUsersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->