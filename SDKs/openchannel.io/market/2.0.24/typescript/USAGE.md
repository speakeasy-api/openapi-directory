<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteAppsAppIdRequest,
  DeleteAppsAppIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    password: "YOUR_PASSWORD_HERE",
    username: "YOUR_USERNAME_HERE",
  },
});

const req: DeleteAppsAppIdRequest = {
  appId: "corrupti",
  developerId: "provident",
};

sdk.appsFindAndModifyApps.deleteAppsAppId(req).then((res: DeleteAppsAppIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->