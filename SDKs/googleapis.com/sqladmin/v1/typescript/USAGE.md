<!-- Start SDK Example Usage -->
```typescript
import {
  SqlBackupRunsDeleteRequest,
  SqlBackupRunsDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SqlBackupRunsDeleteRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  id: "nulla",
  instance: "corrupti",
  key: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  project: "error",
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.backupRuns.sqlBackupRunsDelete(req).then((res: SqlBackupRunsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->