<!-- Start SDK Example Usage -->
```typescript
import {
  RuntimeconfigProjectsConfigsCreateRequest,
  RuntimeconfigProjectsConfigsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RuntimeconfigProjectsConfigsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  runtimeConfig: {
    description: "provident",
    name: "distinctio",
  },
  accessToken: "quibusdam",
  alt: AltEnum.Media,
  callback: "nulla",
  fields: "corrupti",
  key: "illum",
  oauthToken: "vel",
  parent: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  requestId: "suscipit",
  uploadType: "iure",
  uploadProtocol: "magnam",
};

sdk.projects.runtimeconfigProjectsConfigsCreate(req).then((res: RuntimeconfigProjectsConfigsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->