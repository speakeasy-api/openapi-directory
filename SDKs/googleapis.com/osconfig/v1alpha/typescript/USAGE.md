<!-- Start SDK Example Usage -->
```typescript
import {
  OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest,
  OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  filter: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  pageSize: 423655,
  pageToken: "error",
  parent: "deserunt",
  prettyPrint: false,
  quotaUser: "suscipit",
  uploadType: "iure",
  uploadProtocol: "magnam",
};

sdk.projects.osconfigProjectsLocationsInstanceOSPoliciesCompliancesList(req).then((res: OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->