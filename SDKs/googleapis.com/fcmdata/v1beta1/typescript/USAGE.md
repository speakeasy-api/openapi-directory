<!-- Start SDK Example Usage -->
```typescript
import {
  FcmdataProjectsAndroidAppsDeliveryDataListRequest,
  FcmdataProjectsAndroidAppsDeliveryDataListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FcmdataProjectsAndroidAppsDeliveryDataListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  pageSize: 847252,
  pageToken: "vel",
  parent: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.projects.fcmdataProjectsAndroidAppsDeliveryDataList(req).then((res: FcmdataProjectsAndroidAppsDeliveryDataListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->