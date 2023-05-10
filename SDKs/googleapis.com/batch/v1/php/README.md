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
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobInput;
use \OpenAPI\OpenAPI\Models\Shared\AllocationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstancePolicyOrTemplate;
use \OpenAPI\OpenAPI\Models\Shared\InstancePolicy;
use \OpenAPI\OpenAPI\Models\Shared\Accelerator;
use \OpenAPI\OpenAPI\Models\Shared\Disk;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDisk;
use \OpenAPI\OpenAPI\Models\Shared\InstancePolicyProvisioningModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPolicy;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterface;
use \OpenAPI\OpenAPI\Models\Shared\PlacementPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\LogsPolicy;
use \OpenAPI\OpenAPI\Models\Shared\LogsPolicyDestinationEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobNotification;
use \OpenAPI\OpenAPI\Models\Shared\Message;
use \OpenAPI\OpenAPI\Models\Shared\MessageNewJobStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessageNewTaskStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobStatus;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusEvent;
use \OpenAPI\OpenAPI\Models\Shared\TaskExecution;
use \OpenAPI\OpenAPI\Models\Shared\StatusEventTaskStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskGroupStatus;
use \OpenAPI\OpenAPI\Models\Shared\InstanceStatus;
use \OpenAPI\OpenAPI\Models\Shared\InstanceStatusProvisioningModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\Environment;
use \OpenAPI\OpenAPI\Models\Shared\KMSEnvMap;
use \OpenAPI\OpenAPI\Models\Shared\TaskSpec;
use \OpenAPI\OpenAPI\Models\Shared\ComputeResource;
use \OpenAPI\OpenAPI\Models\Shared\LifecyclePolicy;
use \OpenAPI\OpenAPI\Models\Shared\LifecyclePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionCondition;
use \OpenAPI\OpenAPI\Models\Shared\Runnable;
use \OpenAPI\OpenAPI\Models\Shared\Barrier;
use \OpenAPI\OpenAPI\Models\Shared\Container;
use \OpenAPI\OpenAPI\Models\Shared\Script;
use \OpenAPI\OpenAPI\Models\Shared\Volume;
use \OpenAPI\OpenAPI\Models\Shared\Gcs;
use \OpenAPI\OpenAPI\Models\Shared\Nfs;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsJobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchProjectsLocationsJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->jobInput = new JobInput();
    $request->jobInput->allocationPolicy = new AllocationPolicy();
    $request->jobInput->allocationPolicy->instances = [
        new InstancePolicyOrTemplate(),
        new InstancePolicyOrTemplate(),
        new InstancePolicyOrTemplate(),
    ];
    $request->jobInput->allocationPolicy->labels = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->jobInput->allocationPolicy->location = new LocationPolicy();
    $request->jobInput->allocationPolicy->location->allowedLocations = [
        'deserunt',
        'suscipit',
        'iure',
    ];
    $request->jobInput->allocationPolicy->network = new NetworkPolicy();
    $request->jobInput->allocationPolicy->network->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->jobInput->allocationPolicy->placement = new PlacementPolicy();
    $request->jobInput->allocationPolicy->placement->collocation = 'debitis';
    $request->jobInput->allocationPolicy->placement->maxDistance = 'ipsa';
    $request->jobInput->allocationPolicy->serviceAccount = new ServiceAccount();
    $request->jobInput->allocationPolicy->serviceAccount->email = 'Donny_Hoppe@hotmail.com';
    $request->jobInput->allocationPolicy->serviceAccount->scopes = [
        'voluptatum',
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->jobInput->labels = [
        'temporibus' => 'ab',
        'quis' => 'veritatis',
        'deserunt' => 'perferendis',
        'ipsam' => 'repellendus',
    ];
    $request->jobInput->logsPolicy = new LogsPolicy();
    $request->jobInput->logsPolicy->destination = LogsPolicyDestinationEnum::PATH;
    $request->jobInput->logsPolicy->logsPath = 'quo';
    $request->jobInput->notifications = [
        new JobNotification(),
    ];
    $request->jobInput->priority = 'at';
    $request->jobInput->status = new JobStatus();
    $request->jobInput->status->runDuration = 'at';
    $request->jobInput->status->state = JobStatusStateEnum::DELETION_IN_PROGRESS;
    $request->jobInput->status->statusEvents = [
        new StatusEvent(),
        new StatusEvent(),
    ];
    $request->jobInput->status->taskGroups = [
        'quod' => new TaskGroupStatus(),
        'esse' => new TaskGroupStatus(),
        'totam' => new TaskGroupStatus(),
        'porro' => new TaskGroupStatus(),
    ];
    $request->jobInput->taskGroups = [
        new TaskGroupInput(),
        new TaskGroupInput(),
        new TaskGroupInput(),
    ];
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'occaecati';
    $request->jobId = 'fugit';
    $request->key = 'deleniti';
    $request->oauthToken = 'hic';
    $request->parent = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->requestId = 'beatae';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new BatchProjectsLocationsJobsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->batchProjectsLocationsJobsCreate($request, $requestSecurity);

    if ($response->job !== null) {
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

* [batchProjectsLocationsJobsCreate](docs/projects/README.md#batchprojectslocationsjobscreate) - Create a Job.
* [batchProjectsLocationsJobsList](docs/projects/README.md#batchprojectslocationsjobslist) - List all Jobs for a project within a region.
* [batchProjectsLocationsJobsTaskGroupsTasksList](docs/projects/README.md#batchprojectslocationsjobstaskgroupstaskslist) - List Tasks associated with a job.
* [batchProjectsLocationsList](docs/projects/README.md#batchprojectslocationslist) - Lists information about the supported locations for this service.
* [batchProjectsLocationsOperationsCancel](docs/projects/README.md#batchprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [batchProjectsLocationsOperationsDelete](docs/projects/README.md#batchprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [batchProjectsLocationsOperationsGet](docs/projects/README.md#batchprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [batchProjectsLocationsOperationsList](docs/projects/README.md#batchprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [batchProjectsLocationsStateReport](docs/projects/README.md#batchprojectslocationsstatereport) - Report agent's state, e.g. agent status and tasks information
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
