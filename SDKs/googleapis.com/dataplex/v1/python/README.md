# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/dataplex/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DataplexProjectsLocationsDataAttributeBindingsCreateRequest(
    dollar_xgafv="2",
    google_cloud_dataplex_v1_data_attribute_binding_input=shared.GoogleCloudDataplexV1DataAttributeBindingInput(
        attributes=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
        description="nulla",
        display_name="corrupti",
        etag="illum",
        labels={
            "error": "deserunt",
            "suscipit": "iure",
        },
        paths=[
            shared.GoogleCloudDataplexV1DataAttributeBindingPath(
                attributes=[
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                ],
                name="molestiae",
            ),
            shared.GoogleCloudDataplexV1DataAttributeBindingPath(
                attributes=[
                    "placeat",
                    "voluptatum",
                    "iusto",
                    "excepturi",
                ],
                name="nisi",
            ),
        ],
        resource="recusandae",
    ),
    access_token="temporibus",
    alt="json",
    callback="quis",
    data_attribute_binding_id="veritatis",
    fields_="deserunt",
    key="perferendis",
    oauth_token="ipsam",
    parent="repellendus",
    pretty_print=False,
    quota_user="sapiente",
    upload_type="quo",
    upload_protocol="odit",
    validate_only=False,
)
    
res = s.projects.dataplex_projects_locations_data_attribute_bindings_create(req, operations.DataplexProjectsLocationsDataAttributeBindingsCreateSecurity(
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

* `dataplex_projects_locations_data_attribute_bindings_create` - Create a DataAttributeBinding resource.
* `dataplex_projects_locations_data_attribute_bindings_list` - Lists DataAttributeBinding resources in a project and location.
* `dataplex_projects_locations_data_scans_create` - Creates a DataScan resource.
* `dataplex_projects_locations_data_scans_list` - Lists DataScans.
* `dataplex_projects_locations_data_taxonomies_attributes_create` - Create a DataAttribute resource.
* `dataplex_projects_locations_data_taxonomies_attributes_list` - Lists Data Attribute resources in a DataTaxonomy.
* `dataplex_projects_locations_data_taxonomies_create` - Create a DataTaxonomy resource.
* `dataplex_projects_locations_data_taxonomies_list` - Lists DataTaxonomy resources in a project and location.
* `dataplex_projects_locations_lakes_content_create` - Create a content.
* `dataplex_projects_locations_lakes_content_list` - List content.
* `dataplex_projects_locations_lakes_contentitems_create` - Create a content.
* `dataplex_projects_locations_lakes_contentitems_list` - List content.
* `dataplex_projects_locations_lakes_create` - Creates a lake resource.
* `dataplex_projects_locations_lakes_environments_create` - Create an environment resource.
* `dataplex_projects_locations_lakes_environments_list` - Lists environments under the given lake.
* `dataplex_projects_locations_lakes_environments_sessions_list` - Lists session resources in an environment.
* `dataplex_projects_locations_lakes_list` - Lists lake resources in a project and location.
* `dataplex_projects_locations_lakes_tasks_create` - Creates a task resource within a lake.
* `dataplex_projects_locations_lakes_tasks_jobs_list` - Lists Jobs under the given task.
* `dataplex_projects_locations_lakes_tasks_list` - Lists tasks under the given lake.
* `dataplex_projects_locations_lakes_tasks_run` - Run an on demand execution of a Task.
* `dataplex_projects_locations_lakes_zones_assets_actions_list` - Lists action resources in an asset.
* `dataplex_projects_locations_lakes_zones_assets_create` - Creates an asset resource.
* `dataplex_projects_locations_lakes_zones_assets_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `dataplex_projects_locations_lakes_zones_assets_list` - Lists asset resources in a zone.
* `dataplex_projects_locations_lakes_zones_assets_patch` - Updates an asset resource.
* `dataplex_projects_locations_lakes_zones_assets_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* `dataplex_projects_locations_lakes_zones_assets_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `dataplex_projects_locations_lakes_zones_create` - Creates a zone resource within a lake.
* `dataplex_projects_locations_lakes_zones_entities_create` - Create a metadata entity.
* `dataplex_projects_locations_lakes_zones_entities_list` - List metadata entities in a zone.
* `dataplex_projects_locations_lakes_zones_entities_partitions_create` - Create a metadata partition.
* `dataplex_projects_locations_lakes_zones_entities_partitions_list` - List metadata partitions of an entity.
* `dataplex_projects_locations_lakes_zones_entities_update` - Update a metadata entity. Only supports full resource update.
* `dataplex_projects_locations_lakes_zones_list` - Lists zone resources in a lake.
* `dataplex_projects_locations_list` - Lists information about the supported locations for this service.
* `dataplex_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `dataplex_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
* `dataplex_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `dataplex_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
