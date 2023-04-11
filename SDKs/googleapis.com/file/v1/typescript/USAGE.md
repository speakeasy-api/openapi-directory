<!-- Start SDK Example Usage -->
```typescript
import {
  FileProjectsLocationsBackupsCreateRequest,
  FileProjectsLocationsBackupsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FileProjectsLocationsBackupsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  backupInput: {
    description: "provident",
    kmsKey: "distinctio",
    labels: {
      "unde": "nulla",
      "corrupti": "illum",
      "vel": "error",
      "deserunt": "suscipit",
    },
    sourceFileShare: "iure",
    sourceInstance: "magnam",
  },
  accessToken: "debitis",
  alt: AltEnum.Json,
  backupId: "delectus",
  callback: "tempora",
  fields: "suscipit",
  key: "molestiae",
  oauthToken: "minus",
  parent: "placeat",
  prettyPrint: false,
  quotaUser: "voluptatum",
  uploadType: "iusto",
  uploadProtocol: "excepturi",
};

sdk.projects.fileProjectsLocationsBackupsCreate(req).then((res: FileProjectsLocationsBackupsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->