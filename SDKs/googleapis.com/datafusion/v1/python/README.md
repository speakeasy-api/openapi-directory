# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DatafusionProjectsLocationsInstancesCreateRequest(
    security=operations.DatafusionProjectsLocationsInstancesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DatafusionProjectsLocationsInstancesCreatePathParams(
        parent="qui",
    ),
    query_params=operations.DatafusionProjectsLocationsInstancesCreateQueryParams(
        dollar_xgafv="2",
        access_token="minima",
        alt="media",
        callback="cum",
        fields="unde",
        instance_id="iure",
        key="voluptatem",
        oauth_token="quae",
        pretty_print=False,
        quota_user="consectetur",
        upload_type="delectus",
        upload_protocol="doloribus",
    ),
    request=shared.InstanceInput(
        accelerators=[
            shared.Accelerator(
                accelerator_type="ACCELERATOR_TYPE_UNSPECIFIED",
                state="DISABLED",
            ),
            shared.Accelerator(
                accelerator_type="ACCELERATOR_TYPE_UNSPECIFIED",
                state="STATE_UNSPECIFIED",
            ),
            shared.Accelerator(
                accelerator_type="CDC",
                state="DISABLED",
            ),
        ],
        available_version=[
            shared.Version(
                available_features=[
                    "porro",
                ],
                default_version=True,
                type="TYPE_GENERAL_AVAILABILITY",
                version_number="aut",
            ),
            shared.Version(
                available_features=[
                    "distinctio",
                    "sint",
                ],
                default_version=True,
                type="TYPE_GENERAL_AVAILABILITY",
                version_number="atque",
            ),
            shared.Version(
                available_features=[
                    "rerum",
                    "voluptatibus",
                ],
                default_version=True,
                type="TYPE_UNSPECIFIED",
                version_number="eum",
            ),
        ],
        crypto_key_config=shared.CryptoKeyConfig(
            key_reference="sit",
        ),
        dataproc_service_account="aut",
        description="nisi",
        display_name="velit",
        enable_rbac=False,
        enable_stackdriver_logging=False,
        enable_stackdriver_monitoring=True,
        event_publish_config=shared.EventPublishConfig(
            enabled=False,
            topic="repellat",
        ),
        labels={
            "consequatur": "eveniet",
            "sint": "iusto",
        },
        network_config=shared.NetworkConfig(
            ip_allocation="deleniti",
            network="aperiam",
        ),
        options={
            "eius": "debitis",
            "sit": "impedit",
        },
        private_instance=False,
        type="TYPE_UNSPECIFIED",
        version="magni",
        zone="quibusdam",
    ),
)
    
res = s.projects.datafusion_projects_locations_instances_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `datafusion_projects_locations_instances_create` - Creates a new Data Fusion instance in the specified project and location.
* `datafusion_projects_locations_instances_dns_peerings_create` - Creates DNS peering on the given resource.
* `datafusion_projects_locations_instances_dns_peerings_list` - Lists DNS peerings for a given resource.
* `datafusion_projects_locations_instances_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `datafusion_projects_locations_instances_list` - Lists Data Fusion instances in the specified project and location.
* `datafusion_projects_locations_instances_patch` - Updates a single Data Fusion instance.
* `datafusion_projects_locations_instances_restart` - Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
* `datafusion_projects_locations_instances_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `datafusion_projects_locations_instances_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `datafusion_projects_locations_list` - Lists information about the supported locations for this service.
* `datafusion_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datafusion_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `datafusion_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `datafusion_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `datafusion_projects_locations_versions_list` - Lists possible versions for Data Fusion instances in the specified project and location.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
