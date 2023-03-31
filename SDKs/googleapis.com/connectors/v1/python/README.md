# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/connectors/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest(
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
    
res = s.projects.connectors_projects_locations_connections_connection_schema_metadata_refresh(req, operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `connectors_projects_locations_connections_connection_schema_metadata_refresh` - Refresh runtime schema of a connection.
* `connectors_projects_locations_connections_create` - Creates a new Connection in a given project and location.
* `connectors_projects_locations_connections_list` - Lists Connections in a given project and location.
* `connectors_projects_locations_connections_patch` - Updates the parameters of a single Connection.
* `connectors_projects_locations_connections_runtime_action_schemas_list` - List schema of a runtime actions filtered by action name.
* `connectors_projects_locations_connections_runtime_entity_schemas_list` - List schema of a runtime entities filtered by entity name.
* `connectors_projects_locations_list` - Lists information about the supported locations for this service.
* `connectors_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `connectors_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `connectors_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `connectors_projects_locations_providers_connectors_list` - Lists Connectors in a given project and location.
* `connectors_projects_locations_providers_connectors_versions_get` - Gets details of a single connector version.
* `connectors_projects_locations_providers_connectors_versions_list` - Lists Connector Versions in a given project and location.
* `connectors_projects_locations_providers_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `connectors_projects_locations_providers_list` - Lists Providers in a given project and location.
* `connectors_projects_locations_providers_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `connectors_projects_locations_providers_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
