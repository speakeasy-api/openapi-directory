<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteAppsAppIdRequest, DeleteAppsAppIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  }
));
    
const req: DeleteAppsAppIdRequest = {
  pathParams: {
    appId: "sit",
  },
  queryParams: {
    developerId: "voluptas",
  },
};

sdk.appsFindAndModifyApps.deleteAppsAppId(req).then((res: DeleteAppsAppIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->