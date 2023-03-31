# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/file/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FileProjectsLocationsBackupsCreateRequest(
    dollar_xgafv="2",
    backup_input=shared.BackupInput(
        description="provident",
        kms_key="distinctio",
        labels={
            "unde": "nulla",
            "corrupti": "illum",
            "vel": "error",
            "deserunt": "suscipit",
        },
        source_file_share="iure",
        source_instance="magnam",
    ),
    access_token="debitis",
    alt="json",
    backup_id="delectus",
    callback="tempora",
    fields_="suscipit",
    key="molestiae",
    oauth_token="minus",
    parent="placeat",
    pretty_print=False,
    quota_user="voluptatum",
    upload_type="iusto",
    upload_protocol="excepturi",
)
    
res = s.projects.file_projects_locations_backups_create(req, operations.FileProjectsLocationsBackupsCreateSecurity(
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

* `file_projects_locations_backups_create` - Creates a backup.
* `file_projects_locations_backups_list` - Lists all backups in a project for either a specified location or for all locations.
* `file_projects_locations_instances_create` - Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* `file_projects_locations_instances_list` - Lists all instances in a project for either a specified location or for all locations.
* `file_projects_locations_instances_restore` - Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* `file_projects_locations_instances_snapshots_create` - Creates a snapshot.
* `file_projects_locations_instances_snapshots_list` - Lists all snapshots in a project for either a specified location or for all locations.
* `file_projects_locations_instances_snapshots_patch` - Updates the settings of a specific snapshot.
* `file_projects_locations_list` - Lists information about the supported locations for this service.
* `file_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `file_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `file_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `file_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
