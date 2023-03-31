# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/osconfig/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.OsconfigProjectsLocationsInstancesInventoriesListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    filter="nulla",
    key="corrupti",
    oauth_token="illum",
    page_size=423655,
    page_token="error",
    parent="deserunt",
    pretty_print=False,
    quota_user="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
    view="FULL",
)
    
res = s.projects.osconfig_projects_locations_instances_inventories_list(req, operations.OsconfigProjectsLocationsInstancesInventoriesListSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.list_inventories_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `osconfig_projects_locations_instances_inventories_list` - List inventory data for all VM instances in the specified zone.
* `osconfig_projects_locations_instances_os_policy_assignments_reports_list` - List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
* `osconfig_projects_locations_instances_vulnerability_reports_list` - List vulnerability reports for all VM instances in the specified zone.
* `osconfig_projects_locations_os_policy_assignments_create` - Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
* `osconfig_projects_locations_os_policy_assignments_list` - List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
* `osconfig_projects_locations_os_policy_assignments_list_revisions` - List the OS policy assignment revisions for a given OS policy assignment.
* `osconfig_projects_patch_deployments_create` - Create an OS Config patch deployment.
* `osconfig_projects_patch_deployments_delete` - Delete an OS Config patch deployment.
* `osconfig_projects_patch_deployments_list` - Get a page of OS Config patch deployments.
* `osconfig_projects_patch_deployments_patch` - Update an OS Config patch deployment.
* `osconfig_projects_patch_deployments_pause` - Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
* `osconfig_projects_patch_deployments_resume` - Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
* `osconfig_projects_patch_jobs_cancel` - Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
* `osconfig_projects_patch_jobs_execute` - Patch VM instances by creating and running a patch job.
* `osconfig_projects_patch_jobs_get` - Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
* `osconfig_projects_patch_jobs_instance_details_list` - Get a list of instance details for a given patch job.
* `osconfig_projects_patch_jobs_list` - Get a list of patch jobs.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
