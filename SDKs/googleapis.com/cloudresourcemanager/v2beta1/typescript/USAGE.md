<!-- Start SDK Example Usage -->
```typescript
import {
  CloudresourcemanagerFoldersCreateRequest,
  CloudresourcemanagerFoldersCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudresourcemanagerFoldersCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  folderInput: {
    displayName: "provident",
    parent: "distinctio",
  },
  accessToken: "quibusdam",
  alt: AltEnum.Media,
  callback: "nulla",
  fields: "corrupti",
  key: "illum",
  oauthToken: "vel",
  parent: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.folders.cloudresourcemanagerFoldersCreate(req).then((res: CloudresourcemanagerFoldersCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->