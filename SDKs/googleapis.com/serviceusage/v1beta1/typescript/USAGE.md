<!-- Start SDK Example Usage -->
```typescript
import {
  ServiceusageOperationsListRequest,
  ServiceusageOperationsListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ServiceusageOperationsListRequest = {
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

sdk.operations.serviceusageOperationsList(req).then((res: ServiceusageOperationsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->