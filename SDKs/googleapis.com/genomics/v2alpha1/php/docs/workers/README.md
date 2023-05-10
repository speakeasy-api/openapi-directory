# workers

### Available Operations

* [genomicsWorkersCheckIn](#genomicsworkerscheckin) - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

## genomicsWorkersCheckIn

The worker uses this method to retrieve the assigned operation and provide periodic status updates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsWorkersCheckInRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CheckInRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimestampedEvent;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\WorkerStatus;
use \OpenAPI\OpenAPI\Models\Shared\DiskStatus;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsWorkersCheckInSecurity;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsWorkersCheckInSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsWorkersCheckInSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenomicsWorkersCheckInRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->checkInRequest = new CheckInRequest();
    $request->checkInRequest->deadlineExpired = [
        'perferendis' => 'nihil',
        'magnam' => 'distinctio',
    ];
    $request->checkInRequest->event = [
        'labore' => 'labore',
        'suscipit' => 'natus',
        'nobis' => 'eum',
    ];
    $request->checkInRequest->events = [
        new TimestampedEvent(),
        new TimestampedEvent(),
        new TimestampedEvent(),
        new TimestampedEvent(),
    ];
    $request->checkInRequest->result = new Status();
    $request->checkInRequest->result->code = 135474;
    $request->checkInRequest->result->details = [
        [
            'et' => 'excepturi',
            'ullam' => 'provident',
        ],
    ];
    $request->checkInRequest->result->message = 'quos';
    $request->checkInRequest->sosReport = 'sint';
    $request->checkInRequest->workerStatus = new WorkerStatus();
    $request->checkInRequest->workerStatus->attachedDisks = [
        'mollitia' => new DiskStatus(),
    ];
    $request->checkInRequest->workerStatus->bootDisk = new DiskStatus();
    $request->checkInRequest->workerStatus->bootDisk->freeSpaceBytes = 'reiciendis';
    $request->checkInRequest->workerStatus->bootDisk->totalSpaceBytes = 'mollitia';
    $request->checkInRequest->workerStatus->freeRamBytes = 'ad';
    $request->checkInRequest->workerStatus->totalRamBytes = 'eum';
    $request->checkInRequest->workerStatus->uptimeSeconds = 'dolor';
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nemo';
    $request->fields = 'quasi';
    $request->id = '6fe4c8b7-11e5-4b7f-92ed-028921cddc69';
    $request->key = 'odit';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new GenomicsWorkersCheckInSecurity();
    $requestSecurity->option1 = new GenomicsWorkersCheckInSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->workers->genomicsWorkersCheckIn($request, $requestSecurity);

    if ($response->checkInResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
