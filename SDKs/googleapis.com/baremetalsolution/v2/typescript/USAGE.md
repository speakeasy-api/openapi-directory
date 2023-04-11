<!-- Start SDK Example Usage -->
```typescript
import {
  BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest,
  BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  location: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.projects.baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch(req).then((res: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->