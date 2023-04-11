<!-- Start SDK Example Usage -->
```typescript
import {
  FirebaseappdistributionMediaUploadRequest,
  FirebaseappdistributionMediaUploadResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GdataMediaReferenceTypeEnum,
  GdataCompositeMediaReferenceTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FirebaseappdistributionMediaUploadRequest = {
  dollarXgafv: XgafvEnum.Two,
  requestBody: "provident".encode(),
  accessToken: "distinctio",
  alt: AltEnum.Proto,
  app: "unde",
  callback: "nulla",
  fields: "corrupti",
  key: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.media.firebaseappdistributionMediaUpload(req).then((res: FirebaseappdistributionMediaUploadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->