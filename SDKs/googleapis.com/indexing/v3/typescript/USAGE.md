<!-- Start SDK Example Usage -->
```typescript
import {
  IndexingUrlNotificationsGetMetadataRequest,
  IndexingUrlNotificationsGetMetadataResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: IndexingUrlNotificationsGetMetadataRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  prettyPrint: false,
  quotaUser: "illum",
  uploadType: "vel",
  uploadProtocol: "error",
  url: "deserunt",
};

sdk.urlNotifications.indexingUrlNotificationsGetMetadata(req).then((res: IndexingUrlNotificationsGetMetadataResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->