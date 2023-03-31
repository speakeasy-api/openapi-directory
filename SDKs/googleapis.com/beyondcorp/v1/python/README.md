# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/beyondcorp/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BeyondcorpProjectsLocationsAppConnectionsCreateRequest(
    dollar_xgafv="2",
    google_cloud_beyondcorp_appconnections_v1_app_connection_input=shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput(
        application_endpoint=shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint(
            host="provident",
            port=715190,
        ),
        connectors=[
            "unde",
            "nulla",
            "corrupti",
            "illum",
        ],
        display_name="vel",
        gateway=shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput(
            app_gateway="error",
            type="GCP_REGIONAL_MIG",
        ),
        labels={
            "iure": "magnam",
            "debitis": "ipsa",
        },
        name="delectus",
        type="TYPE_UNSPECIFIED",
    ),
    access_token="suscipit",
    alt="media",
    app_connection_id="minus",
    callback="placeat",
    fields_="voluptatum",
    key="iusto",
    oauth_token="excepturi",
    parent="nisi",
    pretty_print=False,
    quota_user="recusandae",
    request_id="temporibus",
    upload_type="ab",
    upload_protocol="quis",
    validate_only=False,
)
    
res = s.projects.beyondcorp_projects_locations_app_connections_create(req, operations.BeyondcorpProjectsLocationsAppConnectionsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `beyondcorp_projects_locations_app_connections_create` - Creates a new AppConnection in a given project and location.
* `beyondcorp_projects_locations_app_connections_list` - Lists AppConnections in a given project and location.
* `beyondcorp_projects_locations_app_connections_resolve` - Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
* `beyondcorp_projects_locations_app_connectors_create` - Creates a new AppConnector in a given project and location.
* `beyondcorp_projects_locations_app_connectors_list` - Lists AppConnectors in a given project and location.
* `beyondcorp_projects_locations_app_connectors_report_status` - Report status for a given connector.
* `beyondcorp_projects_locations_app_connectors_resolve_instance_config` - Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
* `beyondcorp_projects_locations_app_gateways_create` - Creates a new AppGateway in a given project and location.
* `beyondcorp_projects_locations_app_gateways_list` - Lists AppGateways in a given project and location.
* `beyondcorp_projects_locations_client_connector_services_create` - Creates a new ClientConnectorService in a given project and location.
* `beyondcorp_projects_locations_client_connector_services_list` - Lists ClientConnectorServices in a given project and location.
* `beyondcorp_projects_locations_client_connector_services_patch` - Updates the parameters of a single ClientConnectorService.
* `beyondcorp_projects_locations_client_gateways_create` - Creates a new ClientGateway in a given project and location.
* `beyondcorp_projects_locations_client_gateways_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `beyondcorp_projects_locations_client_gateways_list` - Lists ClientGateways in a given project and location.
* `beyondcorp_projects_locations_client_gateways_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `beyondcorp_projects_locations_client_gateways_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `beyondcorp_projects_locations_list` - Lists information about the supported locations for this service.
* `beyondcorp_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `beyondcorp_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `beyondcorp_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `beyondcorp_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
