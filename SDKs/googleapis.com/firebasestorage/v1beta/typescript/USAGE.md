<!-- Start SDK Example Usage -->
```typescript
import {
  FirebasestorageProjectsBucketsAddFirebaseRequest,
  FirebasestorageProjectsBucketsAddFirebaseResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FirebasestorageProjectsBucketsAddFirebaseRequest = {
  dollarXgafv: XgafvEnum.Two,
  requestBody: {
    "distinctio": "quibusdam",
    "unde": "nulla",
    "corrupti": "illum",
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  bucket: "deserunt",
  callback: "suscipit",
  fields: "iure",
  key: "magnam",
  oauthToken: "debitis",
  prettyPrint: false,
  quotaUser: "ipsa",
  uploadType: "delectus",
  uploadProtocol: "tempora",
};

sdk.projects.firebasestorageProjectsBucketsAddFirebase(req).then((res: FirebasestorageProjectsBucketsAddFirebaseResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->