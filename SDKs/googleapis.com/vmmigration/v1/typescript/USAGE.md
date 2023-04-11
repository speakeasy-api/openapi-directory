<!-- Start SDK Example Usage -->
```typescript
import {
  VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest,
  VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest = {
  dollarXgafv: XgafvEnum.Two,
  addGroupMigrationRequest: {
    migratingVm: "provident",
  },
  accessToken: "distinctio",
  alt: AltEnum.Proto,
  callback: "unde",
  fields: "nulla",
  group: "corrupti",
  key: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.projects.vmmigrationProjectsLocationsGroupsAddGroupMigration(req).then((res: VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->