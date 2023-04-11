# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/workflows/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/workflows/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  WorkflowsProjectsLocationsListRequest,
  WorkflowsProjectsLocationsListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: WorkflowsProjectsLocationsListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  filter: "nulla",
  key: "corrupti",
  name: "illum",
  oauthToken: "vel",
  pageSize: 623564,
  pageToken: "deserunt",
  prettyPrint: false,
  quotaUser: "suscipit",
  uploadType: "iure",
  uploadProtocol: "magnam",
};

sdk.projects.workflowsProjectsLocationsList(req).then((res: WorkflowsProjectsLocationsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `workflowsProjectsLocationsList` - Lists information about the supported locations for this service.
* `workflowsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `workflowsProjectsLocationsWorkflowsCreate` - Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation returns a ALREADY_EXISTS error.
* `workflowsProjectsLocationsWorkflowsDelete` - Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow.
* `workflowsProjectsLocationsWorkflowsGet` - Gets details of a single workflow.
* `workflowsProjectsLocationsWorkflowsList` - Lists workflows in a given project and location. The default order is not specified.
* `workflowsProjectsLocationsWorkflowsPatch` - Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow might be created as a result of a successful update operation. In that case, the new revision is used in new workflow executions.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

