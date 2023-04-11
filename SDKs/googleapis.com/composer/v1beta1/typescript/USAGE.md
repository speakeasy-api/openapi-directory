<!-- Start SDK Example Usage -->
```typescript
import {
  ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest,
  ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest = {
  dollarXgafv: XgafvEnum.Two,
  checkUpgradeRequest: {
    imageVersion: "provident",
  },
  accessToken: "distinctio",
  alt: AltEnum.Proto,
  callback: "unde",
  environment: "nulla",
  fields: "corrupti",
  key: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.projects.composerProjectsLocationsEnvironmentsCheckUpgrade(req).then((res: ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->