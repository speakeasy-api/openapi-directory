# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/composer/v1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest(
    dollar_xgafv="2",
    check_upgrade_request=shared.CheckUpgradeRequest(
        image_version="provident",
    ),
    access_token="distinctio",
    alt="proto",
    callback="unde",
    environment="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.projects.composer_projects_locations_environments_check_upgrade(req, operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity(
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

* `composer_projects_locations_environments_check_upgrade` - Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.
* `composer_projects_locations_environments_create` - Create a new environment.
* `composer_projects_locations_environments_list` - List environments.
* `composer_projects_locations_environments_load_snapshot` - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* `composer_projects_locations_environments_patch` - Update an environment.
* `composer_projects_locations_environments_restart_web_server` - Restart Airflow web server.
* `composer_projects_locations_environments_save_snapshot` - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* `composer_projects_locations_image_versions_list` - List ImageVersions for provided location.
* `composer_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `composer_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `composer_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
