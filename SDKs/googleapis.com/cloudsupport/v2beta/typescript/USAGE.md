<!-- Start SDK Example Usage -->
```typescript
import {
  CloudsupportCaseClassificationsSearchRequest,
  CloudsupportCaseClassificationsSearchResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudsupportCaseClassificationsSearchRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  pageSize: 847252,
  pageToken: "vel",
  prettyPrint: false,
  query: "error",
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.caseClassifications.cloudsupportCaseClassificationsSearch(req).then((res: CloudsupportCaseClassificationsSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->