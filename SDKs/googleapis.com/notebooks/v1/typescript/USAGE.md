<!-- Start SDK Example Usage -->
```typescript
import {
  NotebooksProjectsLocationsEnvironmentsCreateRequest,
  NotebooksProjectsLocationsEnvironmentsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: NotebooksProjectsLocationsEnvironmentsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  environmentInput: {
    containerImage: {
      repository: "provident",
      tag: "distinctio",
    },
    description: "quibusdam",
    displayName: "unde",
    postStartupScript: "nulla",
    vmImage: {
      imageFamily: "corrupti",
      imageName: "illum",
      project: "vel",
    },
  },
  accessToken: "error",
  alt: AltEnum.Media,
  callback: "suscipit",
  environmentId: "iure",
  fields: "magnam",
  key: "debitis",
  oauthToken: "ipsa",
  parent: "delectus",
  prettyPrint: false,
  quotaUser: "tempora",
  uploadType: "suscipit",
  uploadProtocol: "molestiae",
};

sdk.projects.notebooksProjectsLocationsEnvironmentsCreate(req).then((res: NotebooksProjectsLocationsEnvironmentsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->