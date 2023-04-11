<!-- Start SDK Example Usage -->
```typescript
import {
  TpuProjectsLocationsAcceleratorTypesListRequest,
  TpuProjectsLocationsAcceleratorTypesListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: TpuProjectsLocationsAcceleratorTypesListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  filter: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  orderBy: "vel",
  pageSize: 623564,
  pageToken: "deserunt",
  parent: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.projects.tpuProjectsLocationsAcceleratorTypesList(req).then((res: TpuProjectsLocationsAcceleratorTypesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->