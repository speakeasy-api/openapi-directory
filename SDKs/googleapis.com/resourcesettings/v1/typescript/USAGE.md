<!-- Start SDK Example Usage -->
```typescript
import {
  ResourcesettingsProjectsSettingsGetRequest,
  ResourcesettingsProjectsSettingsGetResponse,
  ResourcesettingsProjectsSettingsGetViewEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ResourcesettingsProjectsSettingsGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  name: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
  view: ResourcesettingsProjectsSettingsGetViewEnum.SettingViewBasic,
};

sdk.projects.resourcesettingsProjectsSettingsGet(req).then((res: ResourcesettingsProjectsSettingsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->