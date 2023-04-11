<!-- Start SDK Example Usage -->
```typescript
import {
  VaultMattersAddPermissionsRequest,
  VaultMattersAddPermissionsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  MatterPermissionRoleEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: VaultMattersAddPermissionsRequest = {
  dollarXgafv: XgafvEnum.Two,
  addMatterPermissionsRequest: {
    ccMe: false,
    matterPermission: {
      accountId: "provident",
      role: MatterPermissionRoleEnum.Owner,
    },
    sendEmails: false,
  },
  accessToken: "quibusdam",
  alt: AltEnum.Media,
  callback: "nulla",
  fields: "corrupti",
  key: "illum",
  matterId: "vel",
  oauthToken: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.matters.vaultMattersAddPermissions(req).then((res: VaultMattersAddPermissionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->