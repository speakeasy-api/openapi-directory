<!-- Start SDK Example Usage -->
```typescript
import {
  DisplayvideoMediaDownloadRequest,
  DisplayvideoMediaDownloadResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DisplayvideoMediaDownloadRequest = {
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

sdk.media.displayvideoMediaDownload(req).then((res: DisplayvideoMediaDownloadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->