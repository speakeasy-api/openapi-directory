<!-- Start SDK Example Usage -->
```typescript
import {
  MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest,
  MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  filter: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  pageSize: 423655,
  pageToken: "error",
  parent: "deserunt",
  prettyPrint: false,
  quotaUser: "suscipit",
  uploadType: "iure",
  uploadProtocol: "magnam",
};

sdk.locations.mybusinessbusinesscallsLocationsBusinesscallsinsightsList(req).then((res: MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->