<!-- Start SDK Example Usage -->
```typescript
import {
  DisplayvideoAdvertisersAssetsUploadRequest,
  DisplayvideoAdvertisersAssetsUploadResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DisplayvideoAdvertisersAssetsUploadRequest = {
  dollarXgafv: XgafvEnum.Two,
  requestBody: "provident".encode(),
  accessToken: "distinctio",
  advertiserId: "quibusdam",
  alt: AltEnum.Media,
  callback: "nulla",
  fields: "corrupti",
  key: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.advertisers.displayvideoAdvertisersAssetsUpload(req).then((res: DisplayvideoAdvertisersAssetsUploadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->