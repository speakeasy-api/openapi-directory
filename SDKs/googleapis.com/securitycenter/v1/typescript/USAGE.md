<!-- Start SDK Example Usage -->
```typescript
import {
  SecuritycenterOrganizationsAssetsRunDiscoveryRequest,
  SecuritycenterOrganizationsAssetsRunDiscoveryResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SecuritycenterOrganizationsAssetsRunDiscoveryRequest = {
  dollarXgafv: XgafvEnum.Two,
  requestBody: {
    "distinctio": "quibusdam",
    "unde": "nulla",
    "corrupti": "illum",
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  callback: "deserunt",
  fields: "suscipit",
  key: "iure",
  oauthToken: "magnam",
  parent: "debitis",
  prettyPrint: false,
  quotaUser: "ipsa",
  uploadType: "delectus",
  uploadProtocol: "tempora",
};

sdk.organizations.securitycenterOrganizationsAssetsRunDiscovery(req).then((res: SecuritycenterOrganizationsAssetsRunDiscoveryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->