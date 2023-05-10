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
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsEnvironmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentInput;
use \OpenAPI\OpenAPI\Models\Shared\ContainerImage;
use \OpenAPI\OpenAPI\Models\Shared\VmImage;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsEnvironmentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsEnvironmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->environmentInput = new EnvironmentInput();
    $request->environmentInput->containerImage = new ContainerImage();
    $request->environmentInput->containerImage->repository = 'provident';
    $request->environmentInput->containerImage->tag = 'distinctio';
    $request->environmentInput->description = 'quibusdam';
    $request->environmentInput->displayName = 'unde';
    $request->environmentInput->postStartupScript = 'nulla';
    $request->environmentInput->vmImage = new VmImage();
    $request->environmentInput->vmImage->imageFamily = 'corrupti';
    $request->environmentInput->vmImage->imageName = 'illum';
    $request->environmentInput->vmImage->project = 'vel';
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'suscipit';
    $request->environmentId = 'iure';
    $request->fields = 'magnam';
    $request->key = 'debitis';
    $request->oauthToken = 'ipsa';
    $request->parent = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new NotebooksProjectsLocationsEnvironmentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsEnvironmentsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
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

* [notebooksProjectsLocationsEnvironmentsCreate](docs/projects/README.md#notebooksprojectslocationsenvironmentscreate) - Creates a new Environment.
* [notebooksProjectsLocationsEnvironmentsList](docs/projects/README.md#notebooksprojectslocationsenvironmentslist) - Lists environments in a project.
* [notebooksProjectsLocationsExecutionsCreate](docs/projects/README.md#notebooksprojectslocationsexecutionscreate) - Creates a new Execution in a given project and location.
* [notebooksProjectsLocationsExecutionsList](docs/projects/README.md#notebooksprojectslocationsexecutionslist) - Lists executions in a given project and location
* [notebooksProjectsLocationsInstancesCreate](docs/projects/README.md#notebooksprojectslocationsinstancescreate) - Creates a new Instance in a given project and location.
* [notebooksProjectsLocationsInstancesGetInstanceHealth](docs/projects/README.md#notebooksprojectslocationsinstancesgetinstancehealth) - Check if a notebook instance is healthy.
* [notebooksProjectsLocationsInstancesIsUpgradeable](docs/projects/README.md#notebooksprojectslocationsinstancesisupgradeable) - Check if a notebook instance is upgradable.
* [notebooksProjectsLocationsInstancesList](docs/projects/README.md#notebooksprojectslocationsinstanceslist) - Lists instances in a given project and location.
* [notebooksProjectsLocationsInstancesRegister](docs/projects/README.md#notebooksprojectslocationsinstancesregister) - Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.
* [notebooksProjectsLocationsInstancesReport](docs/projects/README.md#notebooksprojectslocationsinstancesreport) - Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.
* [notebooksProjectsLocationsInstancesRollback](docs/projects/README.md#notebooksprojectslocationsinstancesrollback) - Rollbacks a notebook instance to the previous version.
* [notebooksProjectsLocationsInstancesSetAccelerator](docs/projects/README.md#notebooksprojectslocationsinstancessetaccelerator) - Updates the guest accelerators of a single Instance.
* [notebooksProjectsLocationsInstancesSetLabels](docs/projects/README.md#notebooksprojectslocationsinstancessetlabels) - Replaces all the labels of an Instance.
* [notebooksProjectsLocationsInstancesSetMachineType](docs/projects/README.md#notebooksprojectslocationsinstancessetmachinetype) - Updates the machine type of a single Instance.
* [notebooksProjectsLocationsInstancesUpdateConfig](docs/projects/README.md#notebooksprojectslocationsinstancesupdateconfig) - Update Notebook Instance configurations.
* [notebooksProjectsLocationsInstancesUpdateMetadataItems](docs/projects/README.md#notebooksprojectslocationsinstancesupdatemetadataitems) - Add/update metadata items for an instance.
* [notebooksProjectsLocationsInstancesUpdateShieldedInstanceConfig](docs/projects/README.md#notebooksprojectslocationsinstancesupdateshieldedinstanceconfig) - Updates the Shielded instance configuration of a single Instance.
* [notebooksProjectsLocationsInstancesUpgradeInternal](docs/projects/README.md#notebooksprojectslocationsinstancesupgradeinternal) - Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.
* [notebooksProjectsLocationsList](docs/projects/README.md#notebooksprojectslocationslist) - Lists information about the supported locations for this service.
* [notebooksProjectsLocationsOperationsCancel](docs/projects/README.md#notebooksprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [notebooksProjectsLocationsOperationsList](docs/projects/README.md#notebooksprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [notebooksProjectsLocationsRuntimesCreate](docs/projects/README.md#notebooksprojectslocationsruntimescreate) - Creates a new Runtime in a given project and location.
* [notebooksProjectsLocationsRuntimesDiagnose](docs/projects/README.md#notebooksprojectslocationsruntimesdiagnose) - Creates a Diagnostic File and runs Diagnostic Tool given a Runtime.
* [notebooksProjectsLocationsRuntimesGetIamPolicy](docs/projects/README.md#notebooksprojectslocationsruntimesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [notebooksProjectsLocationsRuntimesList](docs/projects/README.md#notebooksprojectslocationsruntimeslist) - Lists Runtimes in a given project and location.
* [notebooksProjectsLocationsRuntimesPatch](docs/projects/README.md#notebooksprojectslocationsruntimespatch) - Update Notebook Runtime configuration.
* [notebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternal](docs/projects/README.md#notebooksprojectslocationsruntimesrefreshruntimetokeninternal) - Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance.
* [notebooksProjectsLocationsRuntimesReportEvent](docs/projects/README.md#notebooksprojectslocationsruntimesreportevent) - Report and process a runtime event.
* [notebooksProjectsLocationsRuntimesReset](docs/projects/README.md#notebooksprojectslocationsruntimesreset) - Resets a Managed Notebook Runtime.
* [notebooksProjectsLocationsRuntimesSetIamPolicy](docs/projects/README.md#notebooksprojectslocationsruntimessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [notebooksProjectsLocationsRuntimesStart](docs/projects/README.md#notebooksprojectslocationsruntimesstart) - Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
* [notebooksProjectsLocationsRuntimesStop](docs/projects/README.md#notebooksprojectslocationsruntimesstop) - Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
* [notebooksProjectsLocationsRuntimesSwitch](docs/projects/README.md#notebooksprojectslocationsruntimesswitch) - Switch a Managed Notebook Runtime.
* [notebooksProjectsLocationsRuntimesTestIamPermissions](docs/projects/README.md#notebooksprojectslocationsruntimestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [notebooksProjectsLocationsRuntimesUpgrade](docs/projects/README.md#notebooksprojectslocationsruntimesupgrade) - Upgrades a Managed Notebook Runtime to the latest version.
* [notebooksProjectsLocationsSchedulesCreate](docs/projects/README.md#notebooksprojectslocationsschedulescreate) - Creates a new Scheduled Notebook in a given project and location.
* [notebooksProjectsLocationsSchedulesDelete](docs/projects/README.md#notebooksprojectslocationsschedulesdelete) - Deletes schedule and all underlying jobs
* [notebooksProjectsLocationsSchedulesGet](docs/projects/README.md#notebooksprojectslocationsschedulesget) - Gets details of schedule
* [notebooksProjectsLocationsSchedulesList](docs/projects/README.md#notebooksprojectslocationsscheduleslist) - Lists schedules in a given project and location.
* [notebooksProjectsLocationsSchedulesTrigger](docs/projects/README.md#notebooksprojectslocationsschedulestrigger) - Triggers execution of an existing schedule.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
