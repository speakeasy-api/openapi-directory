<!-- Start SDK Example Usage -->
```typescript
import {
  Area120tablesTablesListRequest,
  Area120tablesTablesListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: Area120tablesTablesListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  orderBy: "illum",
  pageSize: 423655,
  pageToken: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.tables.area120tablesTablesList(req).then((res: Area120tablesTablesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->