<!-- Start SDK Example Usage -->
```typescript
import {
  ToolresultsProjectsGetSettingsRequest,
  ToolresultsProjectsGetSettingsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ToolresultsProjectsGetSettingsRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  prettyPrint: false,
  projectId: "illum",
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.projects.toolresultsProjectsGetSettings(req).then((res: ToolresultsProjectsGetSettingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->