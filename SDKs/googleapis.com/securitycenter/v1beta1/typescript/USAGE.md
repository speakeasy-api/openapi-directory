<!-- Start SDK Example Usage -->
```typescript
import {
  SecuritycenterOrganizationsAssetsGroupRequest,
  SecuritycenterOrganizationsAssetsGroupResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SecuritycenterOrganizationsAssetsGroupRequest = {
  dollarXgafv: XgafvEnum.Two,
  groupAssetsRequest: {
    compareDuration: "provident",
    filter: "distinctio",
    groupBy: "quibusdam",
    pageSize: 602763,
    pageToken: "nulla",
    readTime: "corrupti",
  },
  accessToken: "illum",
  alt: AltEnum.Media,
  callback: "error",
  fields: "deserunt",
  key: "suscipit",
  oauthToken: "iure",
  parent: "magnam",
  prettyPrint: false,
  quotaUser: "debitis",
  uploadType: "ipsa",
  uploadProtocol: "delectus",
};

sdk.organizations.securitycenterOrganizationsAssetsGroup(req).then((res: SecuritycenterOrganizationsAssetsGroupResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->