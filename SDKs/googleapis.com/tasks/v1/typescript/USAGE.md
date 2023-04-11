<!-- Start SDK Example Usage -->
```typescript
import {
  TasksTasklistsDeleteRequest,
  TasksTasklistsDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: TasksTasklistsDeleteRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  prettyPrint: false,
  quotaUser: "illum",
  tasklist: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.tasklists.tasksTasklistsDelete(req).then((res: TasksTasklistsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->