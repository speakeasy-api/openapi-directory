<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FetchAccountSettingsRequest, FetchAccountSettingsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FetchAccountSettingsRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  queryParams: {
    subaccountSid: "sit",
  },
};

sdk.fetchAccountSettings(req).then((res: FetchAccountSettingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->