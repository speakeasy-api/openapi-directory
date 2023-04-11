<!-- Start SDK Example Usage -->
```typescript
import {
  WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest,
  WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest = {
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
  name: "magnam",
  oauthToken: "debitis",
  prettyPrint: false,
  quotaUser: "ipsa",
  uploadType: "delectus",
  uploadProtocol: "tempora",
};

sdk.projects.workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel(req).then((res: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->