<!-- Start SDK Example Usage -->
```typescript
import {
  YoutubeAnalyticsGroupItemsDeleteRequest,
  YoutubeAnalyticsGroupItemsDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: YoutubeAnalyticsGroupItemsDeleteRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  id: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  onBehalfOfContentOwner: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.groupItems.youtubeAnalyticsGroupItemsDelete(req).then((res: YoutubeAnalyticsGroupItemsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->