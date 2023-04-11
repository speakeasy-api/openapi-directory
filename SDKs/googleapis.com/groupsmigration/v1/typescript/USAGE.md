<!-- Start SDK Example Usage -->
```typescript
import {
  GroupsmigrationArchiveInsertRequest,
  GroupsmigrationArchiveInsertResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GroupsmigrationArchiveInsertRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  groupId: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.archive.groupsmigrationArchiveInsert(req).then((res: GroupsmigrationArchiveInsertResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->