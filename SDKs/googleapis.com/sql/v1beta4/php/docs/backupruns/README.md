# backupRuns

### Available Operations

* [sqlBackupRunsDelete](#sqlbackuprunsdelete) - Deletes the backup taken by a backup run.
* [sqlBackupRunsGet](#sqlbackuprunsget) - Retrieves a resource containing information about a backup run.
* [sqlBackupRunsInsert](#sqlbackuprunsinsert) - Creates a new backup run on demand.
* [sqlBackupRunsList](#sqlbackuprunslist) - Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

## sqlBackupRunsDelete

Deletes the backup taken by a backup run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlBackupRunsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->fields = 'dolorum';
    $request->id = '1ba928fc-8167-442c-b739-205929396fea';
    $request->instance = 'in';
    $request->key = 'corporis';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->project = 'iure';
    $request->quotaUser = 'saepe';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new SqlBackupRunsDeleteSecurity();
    $requestSecurity->option1 = new SqlBackupRunsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backupRuns->sqlBackupRunsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlBackupRunsGet

Retrieves a resource containing information about a backup run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlBackupRunsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'laborum';
    $request->id = '2352c595-5907-4aff-9a3a-2fa946773925';
    $request->instance = 'vitae';
    $request->key = 'laborum';
    $request->oauthToken = 'animi';
    $request->prettyPrint = false;
    $request->project = 'enim';
    $request->quotaUser = 'odit';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'sequi';

    $requestSecurity = new SqlBackupRunsGetSecurity();
    $requestSecurity->option1 = new SqlBackupRunsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backupRuns->sqlBackupRunsGet($request, $requestSecurity);

    if ($response->backupRun !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlBackupRunsInsert

Creates a new backup run on demand.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackupRun;
use \OpenAPI\OpenAPI\Models\Shared\BackupRunBackupKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskEncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DiskEncryptionStatus;
use \OpenAPI\OpenAPI\Models\Shared\OperationError;
use \OpenAPI\OpenAPI\Models\Shared\BackupRunStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackupRunTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlBackupRunsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->backupRun = new BackupRun();
    $request->backupRun->backupKind = BackupRunBackupKindEnum::SNAPSHOT;
    $request->backupRun->description = 'id';
    $request->backupRun->diskEncryptionConfiguration = new DiskEncryptionConfiguration();
    $request->backupRun->diskEncryptionConfiguration->kind = 'possimus';
    $request->backupRun->diskEncryptionConfiguration->kmsKeyName = 'aut';
    $request->backupRun->diskEncryptionStatus = new DiskEncryptionStatus();
    $request->backupRun->diskEncryptionStatus->kind = 'quasi';
    $request->backupRun->diskEncryptionStatus->kmsKeyVersionName = 'error';
    $request->backupRun->endTime = 'temporibus';
    $request->backupRun->enqueuedTime = 'laborum';
    $request->backupRun->error = new OperationError();
    $request->backupRun->error->code = 'quasi';
    $request->backupRun->error->kind = 'reiciendis';
    $request->backupRun->error->message = 'voluptatibus';
    $request->backupRun->id = 'vero';
    $request->backupRun->instance = 'nihil';
    $request->backupRun->kind = 'praesentium';
    $request->backupRun->location = 'voluptatibus';
    $request->backupRun->selfLink = 'ipsa';
    $request->backupRun->startTime = 'omnis';
    $request->backupRun->status = BackupRunStatusEnum::FAILED;
    $request->backupRun->timeZone = 'cum';
    $request->backupRun->type = BackupRunTypeEnum::SQL_BACKUP_RUN_TYPE_UNSPECIFIED;
    $request->backupRun->windowStartTime = 'doloremque';
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'dicta';
    $request->instance = 'corporis';
    $request->key = 'dolore';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'harum';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new SqlBackupRunsInsertSecurity();
    $requestSecurity->option1 = new SqlBackupRunsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backupRuns->sqlBackupRunsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlBackupRunsList

Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlBackupRunsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'quidem';
    $request->instance = 'molestias';
    $request->key = 'excepturi';
    $request->maxResults = 865103;
    $request->oauthToken = 'modi';
    $request->pageToken = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'rem';
    $request->quotaUser = 'voluptates';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new SqlBackupRunsListSecurity();
    $requestSecurity->option1 = new SqlBackupRunsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backupRuns->sqlBackupRunsList($request, $requestSecurity);

    if ($response->backupRunsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
