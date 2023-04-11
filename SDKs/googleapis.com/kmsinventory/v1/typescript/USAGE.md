<!-- Start SDK Example Usage -->
```typescript
import {
  KmsinventoryOrganizationsProtectedResourcesSearchRequest,
  KmsinventoryOrganizationsProtectedResourcesSearchResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: KmsinventoryOrganizationsProtectedResourcesSearchRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  cryptoKey: "unde",
  fields: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  pageSize: 423655,
  pageToken: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  scope: "suscipit",
  uploadType: "iure",
  uploadProtocol: "magnam",
};

sdk.organizations.kmsinventoryOrganizationsProtectedResourcesSearch(req).then((res: KmsinventoryOrganizationsProtectedResourcesSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->