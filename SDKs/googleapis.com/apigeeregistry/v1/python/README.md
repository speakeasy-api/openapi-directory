# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/apigeeregistry/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ApigeeregistryProjectsLocationsApisCreateRequest(
    dollar_xgafv="2",
    api_input=shared.APIInput(
        annotations={
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        availability="vel",
        description="error",
        display_name="deserunt",
        labels={
            "iure": "magnam",
            "debitis": "ipsa",
        },
        name="delectus",
        recommended_deployment="tempora",
        recommended_version="suscipit",
    ),
    access_token="molestiae",
    alt="proto",
    api_id="placeat",
    callback="voluptatum",
    fields_="iusto",
    key="excepturi",
    oauth_token="nisi",
    parent="recusandae",
    pretty_print=False,
    quota_user="temporibus",
    upload_type="ab",
    upload_protocol="quis",
)
    
res = s.projects.apigeeregistry_projects_locations_apis_create(req, operations.ApigeeregistryProjectsLocationsApisCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.api is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `apigeeregistry_projects_locations_apis_create` - Creates a specified API.
* `apigeeregistry_projects_locations_apis_deployments_create` - Creates a specified deployment.
* `apigeeregistry_projects_locations_apis_deployments_list` - Returns matching deployments.
* `apigeeregistry_projects_locations_apis_list` - Returns matching APIs.
* `apigeeregistry_projects_locations_apis_versions_create` - Creates a specified version.
* `apigeeregistry_projects_locations_apis_versions_list` - Returns matching versions.
* `apigeeregistry_projects_locations_apis_versions_specs_create` - Creates a specified spec.
* `apigeeregistry_projects_locations_apis_versions_specs_delete_revision` - Deletes a revision of a spec.
* `apigeeregistry_projects_locations_apis_versions_specs_list` - Returns matching specs.
* `apigeeregistry_projects_locations_apis_versions_specs_list_revisions` - Lists all revisions of a spec. Revisions are returned in descending order of revision creation time.
* `apigeeregistry_projects_locations_apis_versions_specs_patch` - Used to modify a specified spec.
* `apigeeregistry_projects_locations_apis_versions_specs_rollback` - Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.
* `apigeeregistry_projects_locations_apis_versions_specs_tag_revision` - Adds a tag to a specified revision of a spec.
* `apigeeregistry_projects_locations_artifacts_create` - Creates a specified artifact.
* `apigeeregistry_projects_locations_artifacts_get_contents` - Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
* `apigeeregistry_projects_locations_artifacts_list` - Returns matching artifacts.
* `apigeeregistry_projects_locations_artifacts_replace_artifact` - Used to replace a specified artifact.
* `apigeeregistry_projects_locations_instances_create` - Provisions instance resources for the Registry.
* `apigeeregistry_projects_locations_list` - Lists information about the supported locations for this service.
* `apigeeregistry_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `apigeeregistry_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `apigeeregistry_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `apigeeregistry_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `apigeeregistry_projects_locations_runtime_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `apigeeregistry_projects_locations_runtime_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `apigeeregistry_projects_locations_runtime_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
