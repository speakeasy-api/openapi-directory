# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/datafusion/v1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DatafusionProjectsLocationsInstancesCreateRequest(
    dollar_xgafv="2",
    instance_input=shared.InstanceInput(
        crypto_key_config=shared.CryptoKeyConfig(
            key_reference="provident",
        ),
        dataproc_service_account="distinctio",
        description="quibusdam",
        display_name="unde",
        enable_rbac=False,
        enable_stackdriver_logging=False,
        enable_stackdriver_monitoring=False,
        enable_zone_separation=False,
        event_publish_config=shared.EventPublishConfig(
            enabled=False,
            topic="nulla",
        ),
        labels={
            "illum": "vel",
            "error": "deserunt",
            "suscipit": "iure",
        },
        network_config=shared.NetworkConfig(
            ip_allocation="magnam",
            network="debitis",
        ),
        options={
            "delectus": "tempora",
        },
        private_instance=False,
        type="BASIC",
        version="molestiae",
        zone="minus",
    ),
    access_token="placeat",
    alt="media",
    callback="iusto",
    fields_="excepturi",
    instance_id="nisi",
    key="recusandae",
    oauth_token="temporibus",
    parent="ab",
    pretty_print=False,
    quota_user="quis",
    upload_type="veritatis",
    upload_protocol="deserunt",
)
    
res = s.projects.datafusion_projects_locations_instances_create(req, operations.DatafusionProjectsLocationsInstancesCreateSecurity(
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

* `datafusion_projects_locations_instances_create` - Creates a new Data Fusion instance in the specified project and location.
* `datafusion_projects_locations_instances_dns_peerings_create` - Creates DNS peering on the given resource.
* `datafusion_projects_locations_instances_dns_peerings_list` - Lists DNS peerings for a given resource.
* `datafusion_projects_locations_instances_list` - Lists Data Fusion instances in the specified project and location.
* `datafusion_projects_locations_instances_namespaces_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `datafusion_projects_locations_instances_namespaces_list` - List namespaces in a given instance
* `datafusion_projects_locations_instances_namespaces_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `datafusion_projects_locations_instances_namespaces_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `datafusion_projects_locations_instances_patch` - Updates a single Data Fusion instance.
* `datafusion_projects_locations_instances_restart` - Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
* `datafusion_projects_locations_instances_upgrade` - Upgrade a single Data Fusion instance. At the end of an operation instance is fully upgraded.
* `datafusion_projects_locations_list` - Lists information about the supported locations for this service.
* `datafusion_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datafusion_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `datafusion_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `datafusion_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `datafusion_projects_locations_remove_iam_policy` - Remove IAM policy that is currently set on the given resource.
* `datafusion_projects_locations_versions_list` - Lists possible versions for Data Fusion instances in the specified project and location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
