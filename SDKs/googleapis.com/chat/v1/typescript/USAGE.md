<!-- Start SDK Example Usage -->
```typescript
import {
  ChatMediaDownloadRequest,
  ChatMediaDownloadResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ChatMediaDownloadRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  prettyPrint: false,
  quotaUser: "illum",
  resourceName: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.media.chatMediaDownload(req).then((res: ChatMediaDownloadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->