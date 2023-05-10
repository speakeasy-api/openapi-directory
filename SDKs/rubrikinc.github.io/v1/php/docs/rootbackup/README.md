# rootBackup

## Overview

Backup.

### Available Operations

* [createBackupRemediationAsyncTask](#createbackupremediationasynctask) - Reschedule unsuccessful backup tasks
* [getBackupRemediationAsyncTaskStatus](#getbackupremediationasynctaskstatus) - Get status of reschedule attempt
* [getBackupVerificationAsyncRequestStatus](#getbackupverificationasyncrequeststatus) - Get asynchronous request details for Backup Verification
* [verifySnapshot](#verifysnapshot) - Trigger a job for snapshot verification

## createBackupRemediationAsyncTask

Create an asynchronous task for rescheduling unsuccessful backup tasks.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\RemediationRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemediationRequestRunConfig;
use \OpenAPI\OpenAPI\Models\Shared\RemediationRequestSpec;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemediationRequest();
    $request->config = new RemediationRequestRunConfig();
    $request->config->runNow = false;
    $request->spec = [
        new RemediationRequestSpec(),
        new RemediationRequestSpec(),
        new RemediationRequestSpec(),
    ];

    $response = $sdk->rootBackup->createBackupRemediationAsyncTask($request);

    if ($response->remediationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBackupRemediationAsyncTaskStatus

Retrieve the details of a specified asynchronous task to use for rescheduling unsuccessful tasks.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetBackupRemediationAsyncTaskStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBackupRemediationAsyncTaskStatusRequest();
    $request->id = 'd019da1f-fe78-4f09-bb00-74f15471b5e6';

    $response = $sdk->rootBackup->getBackupRemediationAsyncTaskStatus($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBackupVerificationAsyncRequestStatus

Get the details of an asynchronous request for a backup verification job.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetBackupVerificationAsyncRequestStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBackupVerificationAsyncRequestStatusRequest();
    $request->id = 'e13b99d4-88e1-4e91-a450-ad2abd442698';

    $response = $sdk->rootBackup->getBackupVerificationAsyncRequestStatus($request);

    if ($response->verificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## verifySnapshot

This REST API triggers the job "BACKUP_INTEGRITY_VERIFICATION", which verifies whether or not the specified snapshot is restorable.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\VerificationParameters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerificationParameters();
    $request->locationIdOpt = 'perferendis';
    $request->objectId = 'magni';
    $request->shouldVerifyAfterOpt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-22T01:26:35.048Z');
    $request->snapshotIdsOpt = [
        'fugit',
    ];

    $response = $sdk->rootBackup->verifySnapshot($request);

    if ($response->verificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
