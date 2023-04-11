<!-- Start SDK Example Usage -->
```typescript
import {
  DeploymentmanagerDeploymentsCancelPreviewRequest,
  DeploymentmanagerDeploymentsCancelPreviewResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeploymentmanagerDeploymentsCancelPreviewRequest = {
  dollarXgafv: XgafvEnum.Two,
  deploymentsCancelPreviewRequest: {
    fingerprint: "provident",
  },
  accessToken: "distinctio",
  alt: AltEnum.Proto,
  callback: "unde",
  deployment: "nulla",
  fields: "corrupti",
  key: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  project: "error",
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.deployments.deploymentmanagerDeploymentsCancelPreview(req).then((res: DeploymentmanagerDeploymentsCancelPreviewResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->