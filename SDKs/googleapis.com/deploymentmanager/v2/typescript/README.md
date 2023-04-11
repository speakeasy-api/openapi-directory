# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/deploymentmanager/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/deploymentmanager/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### deployments

* `deploymentmanagerDeploymentsCancelPreview` - Cancels and removes the preview currently associated with the deployment.
* `deploymentmanagerDeploymentsDelete` - Deletes a deployment and all of the resources in the deployment.
* `deploymentmanagerDeploymentsGet` - Gets information about a specific deployment.
* `deploymentmanagerDeploymentsGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `deploymentmanagerDeploymentsInsert` - Creates a deployment and all of the resources described by the deployment manifest.
* `deploymentmanagerDeploymentsList` - Lists all deployments for a given project.
* `deploymentmanagerDeploymentsPatch` - Patches a deployment and all of the resources described by the deployment manifest.
* `deploymentmanagerDeploymentsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `deploymentmanagerDeploymentsStop` - Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
* `deploymentmanagerDeploymentsTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `deploymentmanagerDeploymentsUpdate` - Updates a deployment and all of the resources described by the deployment manifest.

### manifests

* `deploymentmanagerManifestsGet` - Gets information about a specific manifest.
* `deploymentmanagerManifestsList` - Lists all manifests for a given deployment.

### operations

* `deploymentmanagerOperationsGet` - Gets information about a specific operation.
* `deploymentmanagerOperationsList` - Lists all operations for a project.

### resources

* `deploymentmanagerResourcesGet` - Gets information about a single resource.
* `deploymentmanagerResourcesList` - Lists all resources in a given deployment.

### types

* `deploymentmanagerTypesList` - Lists all resource types for Deployment Manager.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

