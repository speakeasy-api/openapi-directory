<!-- Start SDK Example Usage -->
```typescript
import {
  TestingApplicationDetailServiceGetApkDetailsRequest,
  TestingApplicationDetailServiceGetApkDetailsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: TestingApplicationDetailServiceGetApkDetailsRequest = {
  dollarXgafv: XgafvEnum.Two,
  fileReference: {
    gcsPath: "provident",
  },
  accessToken: "distinctio",
  alt: AltEnum.Proto,
  callback: "unde",
  fields: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.applicationDetailService.testingApplicationDetailServiceGetApkDetails(req).then((res: TestingApplicationDetailServiceGetApkDetailsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->