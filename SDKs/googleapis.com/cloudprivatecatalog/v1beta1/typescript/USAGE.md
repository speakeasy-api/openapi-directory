<!-- Start SDK Example Usage -->
```typescript
import {
  CloudprivatecatalogOrganizationsCatalogsSearchRequest,
  CloudprivatecatalogOrganizationsCatalogsSearchResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudprivatecatalogOrganizationsCatalogsSearchRequest = {
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
  resource: "suscipit",
  uploadType: "iure",
  uploadProtocol: "magnam",
};

sdk.organizations.cloudprivatecatalogOrganizationsCatalogsSearch(req).then((res: CloudprivatecatalogOrganizationsCatalogsSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->