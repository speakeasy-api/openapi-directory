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