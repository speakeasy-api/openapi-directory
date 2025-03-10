# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/deploymentmanager/alpha/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeploymentmanagerCompositeTypesDeleteRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    composite_type="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    pretty_print=False,
    project="vel",
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.composite_types.deploymentmanager_composite_types_delete(req, operations.DeploymentmanagerCompositeTypesDeleteSecurity(
    option1=operations.DeploymentmanagerCompositeTypesDeleteSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### composite_types

* `deploymentmanager_composite_types_delete` - Deletes a composite type.
* `deploymentmanager_composite_types_get` - Gets information about a specific composite type.
* `deploymentmanager_composite_types_insert` - Creates a composite type.
* `deploymentmanager_composite_types_list` - Lists all composite types for Deployment Manager.
* `deploymentmanager_composite_types_patch` - Patches a composite type.
* `deploymentmanager_composite_types_update` - Updates a composite type.

### deployments

* `deploymentmanager_deployments_cancel_preview` - Cancels and removes the preview currently associated with the deployment.
* `deploymentmanager_deployments_delete` - Deletes a deployment and all of the resources in the deployment.
* `deploymentmanager_deployments_get` - Gets information about a specific deployment.
* `deploymentmanager_deployments_get_iam_policy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `deploymentmanager_deployments_insert` - Creates a deployment and all of the resources described by the deployment manifest.
* `deploymentmanager_deployments_list` - Lists all deployments for a given project.
* `deploymentmanager_deployments_patch` - Patches a deployment and all of the resources described by the deployment manifest.
* `deploymentmanager_deployments_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `deploymentmanager_deployments_stop` - Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
* `deploymentmanager_deployments_test_iam_permissions` - Returns permissions that a caller has on the specified resource.
* `deploymentmanager_deployments_update` - Updates a deployment and all of the resources described by the deployment manifest.

### manifests

* `deploymentmanager_manifests_get` - Gets information about a specific manifest.
* `deploymentmanager_manifests_list` - Lists all manifests for a given deployment.

### operations

* `deploymentmanager_operations_get` - Gets information about a specific operation.
* `deploymentmanager_operations_list` - Lists all operations for a project.

### resources

* `deploymentmanager_resources_get` - Gets information about a single resource.
* `deploymentmanager_resources_list` - Lists all resources in a given deployment.

### type_providers

* `deploymentmanager_type_providers_delete` - Deletes a type provider.
* `deploymentmanager_type_providers_get` - Gets information about a specific type provider.
* `deploymentmanager_type_providers_get_type` - Gets a type info for a type provided by a TypeProvider.
* `deploymentmanager_type_providers_insert` - Creates a type provider.
* `deploymentmanager_type_providers_list` - Lists all resource type providers for Deployment Manager.
* `deploymentmanager_type_providers_list_types` - Lists all the type info for a TypeProvider.
* `deploymentmanager_type_providers_patch` - Patches a type provider.
* `deploymentmanager_type_providers_update` - Updates a type provider.

### types

* `deploymentmanager_types_get` - Gets information about a specific type.
* `deploymentmanager_types_list` - Lists all resource types for Deployment Manager.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
