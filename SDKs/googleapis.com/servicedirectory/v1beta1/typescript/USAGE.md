<!-- Start SDK Example Usage -->
```typescript
import {
  ServicedirectoryProjectsLocationsListRequest,
  ServicedirectoryProjectsLocationsListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ServicedirectoryProjectsLocationsListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  filter: "nulla",
  key: "corrupti",
  name: "illum",
  oauthToken: "vel",
  pageSize: 623564,
  pageToken: "deserunt",
  prettyPrint: false,
  quotaUser: "suscipit",
  uploadType: "iure",
  uploadProtocol: "magnam",
};

sdk.projects.servicedirectoryProjectsLocationsList(req).then((res: ServicedirectoryProjectsLocationsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->