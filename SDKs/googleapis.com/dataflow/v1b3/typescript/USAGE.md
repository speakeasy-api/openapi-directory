<!-- Start SDK Example Usage -->
```typescript
import {
  DataflowProjectsDeleteSnapshotsRequest,
  DataflowProjectsDeleteSnapshotsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DataflowProjectsDeleteSnapshotsRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  location: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  projectId: "vel",
  quotaUser: "error",
  snapshotId: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.projects.dataflowProjectsDeleteSnapshots(req).then((res: DataflowProjectsDeleteSnapshotsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->