# projects

### Available Operations

* [genomicsProjectsOperationsCancel](#genomicsprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`
* [genomicsProjectsOperationsList](#genomicsprojectsoperationslist) - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`
* [genomicsProjectsWorkersCheckIn](#genomicsprojectsworkerscheckin) - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

## genomicsProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsProjectsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsProjectsOperationsCancelSecurity;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsProjectsOperationsCancelSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsProjectsOperationsCancelSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenomicsProjectsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'error' => 'temporibus',
    ];
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'voluptatibus';
    $request->key = 'vero';
    $request->name = 'Miss Irma Wolff';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'reprehenderit';

    $requestSecurity = new GenomicsProjectsOperationsCancelSecurity();
    $requestSecurity->option1 = new GenomicsProjectsOperationsCancelSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->genomicsProjectsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genomicsProjectsOperationsList

Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsProjectsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsProjectsOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsProjectsOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsProjectsOperationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenomicsProjectsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'dolore';
    $request->filter = 'iusto';
    $request->key = 'dicta';
    $request->name = 'Bill Thompson';
    $request->oauthToken = 'quae';
    $request->pageSize = 216822;
    $request->pageToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestias';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new GenomicsProjectsOperationsListSecurity();
    $requestSecurity->option1 = new GenomicsProjectsOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->genomicsProjectsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genomicsProjectsWorkersCheckIn

The worker uses this method to retrieve the assigned operation and provide periodic status updates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsProjectsWorkersCheckInRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CheckInRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimestampedEvent;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\WorkerStatus;
use \OpenAPI\OpenAPI\Models\Shared\DiskStatus;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsProjectsWorkersCheckInSecurity;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsProjectsWorkersCheckInSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsProjectsWorkersCheckInSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenomicsProjectsWorkersCheckInRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->checkInRequest = new CheckInRequest();
    $request->checkInRequest->deadlineExpired = [
        'rem' => 'voluptates',
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
    ];
    $request->checkInRequest->event = [
        'incidunt' => 'enim',
        'consequatur' => 'est',
        'quibusdam' => 'explicabo',
        'deserunt' => 'distinctio',
    ];
    $request->checkInRequest->events = [
        new TimestampedEvent(),
        new TimestampedEvent(),
        new TimestampedEvent(),
        new TimestampedEvent(),
    ];
    $request->checkInRequest->result = new Status();
    $request->checkInRequest->result->code = 289406;
    $request->checkInRequest->result->details = [
        [
            'aliquid' => 'cupiditate',
        ],
        [
            'perferendis' => 'magni',
            'assumenda' => 'ipsam',
            'alias' => 'fugit',
        ],
    ];
    $request->checkInRequest->result->message = 'dolorum';
    $request->checkInRequest->sosReport = 'excepturi';
    $request->checkInRequest->workerStatus = new WorkerStatus();
    $request->checkInRequest->workerStatus->attachedDisks = [
        'facilis' => new DiskStatus(),
        'tempore' => new DiskStatus(),
    ];
    $request->checkInRequest->workerStatus->bootDisk = new DiskStatus();
    $request->checkInRequest->workerStatus->bootDisk->freeSpaceBytes = 'labore';
    $request->checkInRequest->workerStatus->bootDisk->totalSpaceBytes = 'delectus';
    $request->checkInRequest->workerStatus->freeRamBytes = 'eum';
    $request->checkInRequest->workerStatus->totalRamBytes = 'non';
    $request->checkInRequest->workerStatus->uptimeSeconds = 'eligendi';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'necessitatibus';
    $request->id = '9a3efa77-dfb1-44cd-a6ae-395efb9ba88f';
    $request->key = 'amet';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new GenomicsProjectsWorkersCheckInSecurity();
    $requestSecurity->option1 = new GenomicsProjectsWorkersCheckInSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->genomicsProjectsWorkersCheckIn($request, $requestSecurity);

    if ($response->checkInResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
