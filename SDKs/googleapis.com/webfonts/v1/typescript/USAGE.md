<!-- Start SDK Example Usage -->
```typescript
import {
  WebfontsWebfontsListRequest,
  WebfontsWebfontsListResponse,
  WebfontsWebfontsListSortEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: WebfontsWebfontsListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  prettyPrint: false,
  quotaUser: "illum",
  sort: WebfontsWebfontsListSortEnum.Date,
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.webfonts.webfontsWebfontsList(req).then((res: WebfontsWebfontsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->