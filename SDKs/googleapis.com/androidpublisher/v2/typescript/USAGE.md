<!-- Start SDK Example Usage -->
```typescript
import {
  AndroidpublisherEditsApklistingsDeleteRequest,
  AndroidpublisherEditsApklistingsDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AndroidpublisherEditsApklistingsDeleteRequest = {
  alt: AltEnum.Json,
  apkVersionCode: 548814,
  editId: "provident",
  fields: "distinctio",
  key: "quibusdam",
  language: "unde",
  oauthToken: "nulla",
  packageName: "corrupti",
  prettyPrint: false,
  quotaUser: "illum",
  userIp: "vel",
};

sdk.edits.androidpublisherEditsApklistingsDelete(req).then((res: AndroidpublisherEditsApklistingsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->