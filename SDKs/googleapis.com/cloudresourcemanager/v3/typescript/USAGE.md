<!-- Start SDK Example Usage -->
```typescript
import {
  CloudresourcemanagerEffectiveTagsListRequest,
  CloudresourcemanagerEffectiveTagsListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudresourcemanagerEffectiveTagsListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  pageSize: 847252,
  pageToken: "vel",
  parent: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.effectiveTags.cloudresourcemanagerEffectiveTagsList(req).then((res: CloudresourcemanagerEffectiveTagsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->