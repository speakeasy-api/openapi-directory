# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesInventoriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesInventoriesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesInventoriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsInstancesInventoriesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->filter = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->pageSize = 423655;
    $request->pageToken = 'error';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'magnam';
    $request->view = OsconfigProjectsLocationsInstancesInventoriesListViewEnum::FULL;

    $requestSecurity = new OsconfigProjectsLocationsInstancesInventoriesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsInstancesInventoriesList($request, $requestSecurity);

    if ($response->listInventoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [osconfigProjectsLocationsInstancesInventoriesList](docs/projects/README.md#osconfigprojectslocationsinstancesinventorieslist) - List inventory data for all VM instances in the specified zone.
* [osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList](docs/projects/README.md#osconfigprojectslocationsinstancesospolicyassignmentsreportslist) - List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
* [osconfigProjectsLocationsInstancesVulnerabilityReportsList](docs/projects/README.md#osconfigprojectslocationsinstancesvulnerabilityreportslist) - List vulnerability reports for all VM instances in the specified zone.
* [osconfigProjectsLocationsOsPolicyAssignmentsCreate](docs/projects/README.md#osconfigprojectslocationsospolicyassignmentscreate) - Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
* [osconfigProjectsLocationsOsPolicyAssignmentsList](docs/projects/README.md#osconfigprojectslocationsospolicyassignmentslist) - List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
* [osconfigProjectsLocationsOsPolicyAssignmentsListRevisions](docs/projects/README.md#osconfigprojectslocationsospolicyassignmentslistrevisions) - List the OS policy assignment revisions for a given OS policy assignment.
* [osconfigProjectsPatchDeploymentsCreate](docs/projects/README.md#osconfigprojectspatchdeploymentscreate) - Create an OS Config patch deployment.
* [osconfigProjectsPatchDeploymentsDelete](docs/projects/README.md#osconfigprojectspatchdeploymentsdelete) - Delete an OS Config patch deployment.
* [osconfigProjectsPatchDeploymentsList](docs/projects/README.md#osconfigprojectspatchdeploymentslist) - Get a page of OS Config patch deployments.
* [osconfigProjectsPatchDeploymentsPatch](docs/projects/README.md#osconfigprojectspatchdeploymentspatch) - Update an OS Config patch deployment.
* [osconfigProjectsPatchDeploymentsPause](docs/projects/README.md#osconfigprojectspatchdeploymentspause) - Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
* [osconfigProjectsPatchDeploymentsResume](docs/projects/README.md#osconfigprojectspatchdeploymentsresume) - Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
* [osconfigProjectsPatchJobsCancel](docs/projects/README.md#osconfigprojectspatchjobscancel) - Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
* [osconfigProjectsPatchJobsExecute](docs/projects/README.md#osconfigprojectspatchjobsexecute) - Patch VM instances by creating and running a patch job.
* [osconfigProjectsPatchJobsGet](docs/projects/README.md#osconfigprojectspatchjobsget) - Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
* [osconfigProjectsPatchJobsInstanceDetailsList](docs/projects/README.md#osconfigprojectspatchjobsinstancedetailslist) - Get a list of instance details for a given patch job.
* [osconfigProjectsPatchJobsList](docs/projects/README.md#osconfigprojectspatchjobslist) - Get a list of patch jobs.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
