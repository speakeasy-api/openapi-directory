# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/workstations/v1beta/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.WorkstationsProjectsLocationsOperationsCancelRequest(
    dollar_xgafv="2",
    request_body={
        "distinctio": "quibusdam",
        "unde": "nulla",
        "corrupti": "illum",
    },
    access_token="vel",
    alt="media",
    callback="deserunt",
    fields_="suscipit",
    key="iure",
    name="magnam",
    oauth_token="debitis",
    pretty_print=False,
    quota_user="ipsa",
    upload_type="delectus",
    upload_protocol="tempora",
)
    
res = s.projects.workstations_projects_locations_operations_cancel(req, operations.WorkstationsProjectsLocationsOperationsCancelSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_protobuf_empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `workstations_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `workstations_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `workstations_projects_locations_workstation_clusters_create` - Creates a new workstation cluster.
* `workstations_projects_locations_workstation_clusters_list` - Returns all workstation clusters in the specified location.
* `workstations_projects_locations_workstation_clusters_workstation_configs_create` - Creates a new workstation configuration.
* `workstations_projects_locations_workstation_clusters_workstation_configs_list` - Returns all workstation configurations in the specified cluster.
* `workstations_projects_locations_workstation_clusters_workstation_configs_list_usable` - Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.
* `workstations_projects_locations_workstation_clusters_workstation_configs_workstations_create` - Creates a new workstation.
* `workstations_projects_locations_workstation_clusters_workstation_configs_workstations_delete` - Deletes the specified workstation.
* `workstations_projects_locations_workstation_clusters_workstation_configs_workstations_generate_access_token` - Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.
* `workstations_projects_locations_workstation_clusters_workstation_configs_workstations_get` - Returns the requested workstation.
* `workstations_projects_locations_workstation_clusters_workstation_configs_workstations_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `workstations_projects_locations_workstation_clusters_workstation_configs_workstations_list` - Returns all Workstations using the specified config.
* `workstations_projects_locations_workstation_clusters_workstation_configs_workstations_list_usable` - Returns all Workstations using the specified config on which the caller has the "workstations.workstations.use" permission.
* `workstations_projects_locations_workstation_clusters_workstation_configs_workstations_patch` - Updates an existing workstation.
* `workstations_projects_locations_workstation_clusters_workstation_configs_workstations_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `workstations_projects_locations_workstation_clusters_workstation_configs_workstations_start` - Starts running a workstation so that users can connect to it.
* `workstations_projects_locations_workstation_clusters_workstation_configs_workstations_stop` - Stops running a workstation, reducing costs.
* `workstations_projects_locations_workstation_clusters_workstation_configs_workstations_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
