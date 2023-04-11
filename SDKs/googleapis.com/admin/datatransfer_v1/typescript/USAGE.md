<!-- Start SDK Example Usage -->
```typescript
import {
  DatatransferApplicationsGetRequest,
  DatatransferApplicationsGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DatatransferApplicationsGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  applicationId: "quibusdam",
  callback: "unde",
  fields: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.applications.datatransferApplicationsGet(req).then((res: DatatransferApplicationsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->