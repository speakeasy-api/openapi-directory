<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { MybusinessnotificationsAccountsGetNotificationSettingRequest, MybusinessnotificationsAccountsGetNotificationSettingResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: MybusinessnotificationsAccountsGetNotificationSettingRequest = {
  pathParams: {
    name: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
};

sdk.accounts.mybusinessnotificationsAccountsGetNotificationSetting(req).then((res: MybusinessnotificationsAccountsGetNotificationSettingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->