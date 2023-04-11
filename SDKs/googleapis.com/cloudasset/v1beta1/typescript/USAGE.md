<!-- Start SDK Example Usage -->
```typescript
import {
  CloudassetProjectsBatchGetAssetsHistoryRequest,
  CloudassetProjectsBatchGetAssetsHistoryResponse,
  CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudassetProjectsBatchGetAssetsHistoryRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  assetNames: [
    "unde",
    "nulla",
    "corrupti",
    "illum",
  ],
  callback: "vel",
  contentType: CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum.Resource,
  fields: "deserunt",
  key: "suscipit",
  oauthToken: "iure",
  parent: "magnam",
  prettyPrint: false,
  quotaUser: "debitis",
  readTimeWindowEndTime: "ipsa",
  readTimeWindowStartTime: "delectus",
  uploadType: "tempora",
  uploadProtocol: "suscipit",
};

sdk.projects.cloudassetProjectsBatchGetAssetsHistory(req).then((res: CloudassetProjectsBatchGetAssetsHistoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->