<!-- Start SDK Example Usage -->
```typescript
import {
  CloudassetAssetsListRequest,
  CloudassetAssetsListResponse,
  CloudassetAssetsListContentTypeEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudassetAssetsListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  assetTypes: [
    "unde",
    "nulla",
    "corrupti",
    "illum",
  ],
  callback: "vel",
  contentType: CloudassetAssetsListContentTypeEnum.OrgPolicy,
  fields: "deserunt",
  key: "suscipit",
  oauthToken: "iure",
  pageSize: 297534,
  pageToken: "debitis",
  parent: "ipsa",
  prettyPrint: false,
  quotaUser: "delectus",
  readTime: "tempora",
  uploadType: "suscipit",
  uploadProtocol: "molestiae",
};

sdk.assets.cloudassetAssetsList(req).then((res: CloudassetAssetsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->