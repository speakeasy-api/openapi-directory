<!-- Start SDK Example Usage -->
```typescript
import {
  MybusinessnotificationsAccountsGetNotificationSettingRequest,
  MybusinessnotificationsAccountsGetNotificationSettingResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MybusinessnotificationsAccountsGetNotificationSettingRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  name: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.accounts.mybusinessnotificationsAccountsGetNotificationSetting(req).then((res: MybusinessnotificationsAccountsGetNotificationSettingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->