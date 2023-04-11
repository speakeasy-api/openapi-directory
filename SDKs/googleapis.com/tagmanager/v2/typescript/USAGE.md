<!-- Start SDK Example Usage -->
```typescript
import {
  TagmanagerAccountsContainersCombineRequest,
  TagmanagerAccountsContainersCombineResponse,
  TagmanagerAccountsContainersCombineSettingSourceEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: TagmanagerAccountsContainersCombineRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  allowUserPermissionFeatureUpdate: false,
  alt: AltEnum.Proto,
  callback: "quibusdam",
  containerId: "unde",
  fields: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  path: "vel",
  prettyPrint: false,
  quotaUser: "error",
  settingSource: TagmanagerAccountsContainersCombineSettingSourceEnum.Current,
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.accounts.tagmanagerAccountsContainersCombine(req).then((res: TagmanagerAccountsContainersCombineResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->