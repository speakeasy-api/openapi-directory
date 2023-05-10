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
use \OpenAPI\OpenAPI\Models\Operations\CreateActivityRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateActivityCreateActivityRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateActivitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateActivityRequest();
    $request->requestBody = new CreateActivityCreateActivityRequest();
    $request->requestBody->available = false;
    $request->requestBody->friendlyName = 'corrupti';
    $request->workspaceSid = 'provident';

    $requestSecurity = new CreateActivitySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createActivity($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceActivity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createActivity](docs/sdk/README.md#createactivity)
* [createTask](docs/sdk/README.md#createtask)
* [createTaskChannel](docs/sdk/README.md#createtaskchannel)
* [createTaskQueue](docs/sdk/README.md#createtaskqueue)
* [createWorker](docs/sdk/README.md#createworker)
* [createWorkflow](docs/sdk/README.md#createworkflow)
* [createWorkspace](docs/sdk/README.md#createworkspace)
* [deleteActivity](docs/sdk/README.md#deleteactivity)
* [deleteTask](docs/sdk/README.md#deletetask)
* [deleteTaskChannel](docs/sdk/README.md#deletetaskchannel)
* [deleteTaskQueue](docs/sdk/README.md#deletetaskqueue)
* [deleteWorker](docs/sdk/README.md#deleteworker)
* [deleteWorkflow](docs/sdk/README.md#deleteworkflow)
* [deleteWorkspace](docs/sdk/README.md#deleteworkspace)
* [fetchActivity](docs/sdk/README.md#fetchactivity)
* [fetchEvent](docs/sdk/README.md#fetchevent)
* [fetchTask](docs/sdk/README.md#fetchtask)
* [fetchTaskChannel](docs/sdk/README.md#fetchtaskchannel)
* [fetchTaskQueue](docs/sdk/README.md#fetchtaskqueue)
* [fetchTaskQueueCumulativeStatistics](docs/sdk/README.md#fetchtaskqueuecumulativestatistics)
* [fetchTaskQueueRealTimeStatistics](docs/sdk/README.md#fetchtaskqueuerealtimestatistics)
* [fetchTaskQueueStatistics](docs/sdk/README.md#fetchtaskqueuestatistics)
* [fetchTaskReservation](docs/sdk/README.md#fetchtaskreservation)
* [fetchWorker](docs/sdk/README.md#fetchworker)
* [fetchWorkerChannel](docs/sdk/README.md#fetchworkerchannel)
* [fetchWorkerInstanceStatistics](docs/sdk/README.md#fetchworkerinstancestatistics)
* [fetchWorkerReservation](docs/sdk/README.md#fetchworkerreservation)
* [fetchWorkerStatistics](docs/sdk/README.md#fetchworkerstatistics)
* [fetchWorkersCumulativeStatistics](docs/sdk/README.md#fetchworkerscumulativestatistics)
* [fetchWorkersRealTimeStatistics](docs/sdk/README.md#fetchworkersrealtimestatistics)
* [fetchWorkflow](docs/sdk/README.md#fetchworkflow)
* [fetchWorkflowCumulativeStatistics](docs/sdk/README.md#fetchworkflowcumulativestatistics)
* [fetchWorkflowRealTimeStatistics](docs/sdk/README.md#fetchworkflowrealtimestatistics)
* [fetchWorkflowStatistics](docs/sdk/README.md#fetchworkflowstatistics)
* [fetchWorkspace](docs/sdk/README.md#fetchworkspace)
* [fetchWorkspaceCumulativeStatistics](docs/sdk/README.md#fetchworkspacecumulativestatistics)
* [fetchWorkspaceRealTimeStatistics](docs/sdk/README.md#fetchworkspacerealtimestatistics)
* [fetchWorkspaceStatistics](docs/sdk/README.md#fetchworkspacestatistics)
* [listActivity](docs/sdk/README.md#listactivity)
* [listEvent](docs/sdk/README.md#listevent)
* [listTask](docs/sdk/README.md#listtask)
* [listTaskChannel](docs/sdk/README.md#listtaskchannel)
* [listTaskQueue](docs/sdk/README.md#listtaskqueue)
* [listTaskQueuesStatistics](docs/sdk/README.md#listtaskqueuesstatistics)
* [listTaskReservation](docs/sdk/README.md#listtaskreservation)
* [listWorker](docs/sdk/README.md#listworker)
* [listWorkerChannel](docs/sdk/README.md#listworkerchannel)
* [listWorkerReservation](docs/sdk/README.md#listworkerreservation)
* [listWorkflow](docs/sdk/README.md#listworkflow)
* [listWorkspace](docs/sdk/README.md#listworkspace)
* [updateActivity](docs/sdk/README.md#updateactivity)
* [updateTask](docs/sdk/README.md#updatetask)
* [updateTaskChannel](docs/sdk/README.md#updatetaskchannel)
* [updateTaskQueue](docs/sdk/README.md#updatetaskqueue)
* [updateTaskReservation](docs/sdk/README.md#updatetaskreservation)
* [updateWorker](docs/sdk/README.md#updateworker)
* [updateWorkerChannel](docs/sdk/README.md#updateworkerchannel)
* [updateWorkerReservation](docs/sdk/README.md#updateworkerreservation)
* [updateWorkflow](docs/sdk/README.md#updateworkflow)
* [updateWorkspace](docs/sdk/README.md#updateworkspace)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
