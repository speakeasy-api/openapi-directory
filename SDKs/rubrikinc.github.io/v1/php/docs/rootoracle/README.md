# rootOracle

## Overview

Oracle.

### Available Operations

* [bulkUpdateOracleDb](#bulkupdateoracledb) - Update Oracle Databases
* [bulkUpdateOracleHost](#bulkupdateoraclehost) - Update Oracle Hosts
* [bulkUpdateOracleRac](#bulkupdateoraclerac) - Update Oracle RACs
* [createOracleValidateBackupJob](#createoraclevalidatebackupjob) - Validate Oracle database backups
* [deleteDownloadedSnapshots](#deletedownloadedsnapshots) - Delete downloaded Oracle database snapshots and log snapshots
* [getAcoParameterList](#getacoparameterlist) - List of supported Advanced Cloning Options
* [getExampleAcoDownloadLink](#getexampleacodownloadlink) - Link to download the Advanced Recovery Options example file
* [getOracleDbV1](#getoracledbv1) - Get Oracle database information
* [oracleRestoreEstimate](#oraclerestoreestimate) - Get a size estimate for a restore or export
* [queryOracleDbV1](#queryoracledbv1) - Get summary information for Oracle databases
* [updateOracleDataGuardGroup](#updateoracledataguardgroup) - Update an Oracle Data Guard group
* [updateOracleDbV1](#updateoracledbv1) - Update an Oracle database
* [validateOracleAcoFile](#validateoracleacofile) - Validate Oracle ACO file

## bulkUpdateOracleDb

Update the properties of the objects that represent the specified Oracle Databases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\OracleBulkUpdate;
use \OpenAPI\OpenAPI\Models\Shared\OracleNodeOrder;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OracleBulkUpdate();
    $request->configuredSlaDomainIdDeprecated = 'officiis';
    $request->hostLogRetentionHours = 304571;
    $request->hostMount = 'quas';
    $request->ids = [
        'autem',
    ];
    $request->logBackupFrequencyInMinutes = 209920;
    $request->logRetentionHours = 131249;
    $request->nodeOrder = [
        new OracleNodeOrder(),
        new OracleNodeOrder(),
        new OracleNodeOrder(),
    ];
    $request->numChannels = 613744;

    $response = $sdk->rootOracle->bulkUpdateOracleDb($request);

    if ($response->bulkOracleDbDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bulkUpdateOracleHost

Update properties to Oracle Host objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\OracleBulkUpdate;
use \OpenAPI\OpenAPI\Models\Shared\OracleNodeOrder;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OracleBulkUpdate();
    $request->configuredSlaDomainIdDeprecated = 'occaecati';
    $request->hostLogRetentionHours = 317621;
    $request->hostMount = 'tempora';
    $request->ids = [
        'iure',
        'voluptatibus',
        'id',
    ];
    $request->logBackupFrequencyInMinutes = 186342;
    $request->logRetentionHours = 127086;
    $request->nodeOrder = [
        new OracleNodeOrder(),
    ];
    $request->numChannels = 432280;

    $response = $sdk->rootOracle->bulkUpdateOracleHost($request);

    if ($response->bulkOracleHostDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bulkUpdateOracleRac

Update the properties of the objects that represent the specified Oracle RAC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\OracleBulkUpdate;
use \OpenAPI\OpenAPI\Models\Shared\OracleNodeOrder;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OracleBulkUpdate();
    $request->configuredSlaDomainIdDeprecated = 'nesciunt';
    $request->hostLogRetentionHours = 416624;
    $request->hostMount = 'molestias';
    $request->ids = [
        'explicabo',
        'totam',
        'ipsam',
    ];
    $request->logBackupFrequencyInMinutes = 367727;
    $request->logRetentionHours = 194778;
    $request->nodeOrder = [
        new OracleNodeOrder(),
        new OracleNodeOrder(),
        new OracleNodeOrder(),
        new OracleNodeOrder(),
    ];
    $request->numChannels = 728416;

    $response = $sdk->rootOracle->bulkUpdateOracleRac($request);

    if ($response->bulkOracleRacDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOracleValidateBackupJob

Queue a job to validate Oracle backups for a database snapshot or a specified timestamp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateOracleValidateBackupJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\OracleValidateConfig;
use \OpenAPI\OpenAPI\Models\Shared\OracleRecoveryPoint;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOracleValidateBackupJobRequest();
    $request->oracleValidateConfig = new OracleValidateConfig();
    $request->oracleValidateConfig->numChannels = 67229;
    $request->oracleValidateConfig->recoveryPoint = new OracleRecoveryPoint();
    $request->oracleValidateConfig->recoveryPoint->snapshotId = 'alias';
    $request->oracleValidateConfig->recoveryPoint->timestampMs = 35538;
    $request->oracleValidateConfig->sgaMaxSizeInMb = 40150;
    $request->oracleValidateConfig->targetMountPath = 'autem';
    $request->oracleValidateConfig->targetOracleHome = 'tempore';
    $request->oracleValidateConfig->targetOracleHostOrRacId = 'necessitatibus';
    $request->id = 'f4921ec2-053b-4749-b66a-c8ee0f2bf195';

    $response = $sdk->rootOracle->createOracleValidateBackupJob($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDownloadedSnapshots

Requests an asynchronous job to expire downloaded database snapshots taken during a specified time period as well as log snapshots that contain any logs with timestamps within that time period.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDownloadedSnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDownloadedSnapshotsRequest();
    $request->afterTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-16T03:55:04.738Z');
    $request->beforeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-19T19:50:52.791Z');
    $request->id = '0d03f3de-ba29-47be-be90-bc40df868fd5';

    $response = $sdk->rootOracle->deleteDownloadedSnapshots($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAcoParameterList

Get the list of supported Advanced Cloning Options (ACO) parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->rootOracle->getAcoParameterList();

    if ($response->oracleAcoParameterList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExampleAcoDownloadLink

Link to download the Advanced Recovery Options example file which can be used to customize Oracle recoveries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->rootOracle->getExampleAcoDownloadLink();

    if ($response->oracleFileDownloadLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOracleDbV1

Retrieves detailed information for a specified Oracle database object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetOracleDbV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOracleDbV1Request();
    $request->id = '2405cb33-1d49-42f4-b127-fb0e0bf1f821';

    $response = $sdk->rootOracle->getOracleDbV1($request);

    if ($response->oracleDbDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## oracleRestoreEstimate

The estimated size of the data to download from an archival location in order to perform a specified restore or export operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\OracleRestoreEstimateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OracleRestoreEstimateRequest();
    $request->id = '7978d0ac-ca77-4aeb-bb70-21a52046b64e';
    $request->recoveryTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-13T00:54:03.818Z');
    $request->snapshotId = 'voluptatibus';

    $response = $sdk->rootOracle->oracleRestoreEstimate($request);

    if ($response->oracleRestoreEstimateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryOracleDbV1

Retrieves an array containing summary information about the Oracle database objects in the Rubrik cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryOracleDbV1Request;
use \OpenAPI\OpenAPI\Models\Operations\QueryOracleDbV1SLAAssignmentEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryOracleDbV1SortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryOracleDbV1SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryOracleDbV1Request();
    $request->effectiveSlaDomainId = 'facilis';
    $request->includeBackupTaskInfo = false;
    $request->isDataGuardGroup = false;
    $request->isLiveMount = false;
    $request->isRelic = false;
    $request->limit = 43118;
    $request->name = 'Tyler Kihn V';
    $request->offset = 285336;
    $request->primaryClusterId = 'hic';
    $request->slaAssignment = QueryOracleDbV1SLAAssignmentEnum::UNASSIGNED;
    $request->sortBy = QueryOracleDbV1SortByEnum::NAME;
    $request->sortOrder = QueryOracleDbV1SortOrderEnum::DESC;

    $response = $sdk->rootOracle->queryOracleDbV1($request);

    if ($response->oracleDbSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOracleDataGuardGroup

Update properties of an Oracle Data Guard group object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOracleDataGuardGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\OracleDataGuardGroupUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOracleDataGuardGroupRequest();
    $request->oracleDataGuardGroupUpdate = new OracleDataGuardGroupUpdate();
    $request->oracleDataGuardGroupUpdate->hostLogRetentionHours = 827429;
    $request->oracleDataGuardGroupUpdate->hostMount = 'exercitationem';
    $request->oracleDataGuardGroupUpdate->logBackupFrequencyInMinutes = 347919;
    $request->oracleDataGuardGroupUpdate->logRetentionHours = 293991;
    $request->oracleDataGuardGroupUpdate->numChannels = 26721;
    $request->oracleDataGuardGroupUpdate->preferredDGMemberUniqueNames = [
        'a',
        'exercitationem',
        'neque',
        'mollitia',
    ];
    $request->oracleDataGuardGroupUpdate->shouldBackupFromPrimaryOnly = false;
    $request->id = '34a1b8fe-9973-41ad-805d-85ae2dfb70fb';

    $response = $sdk->rootOracle->updateOracleDataGuardGroup($request);

    if ($response->oracleDbDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOracleDbV1

Updates the properties of a specified Oracle database object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOracleDbV1Request;
use \OpenAPI\OpenAPI\Models\Shared\OracleUpdate;
use \OpenAPI\OpenAPI\Models\Shared\OracleNodeOrder;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOracleDbV1Request();
    $request->oracleUpdate = new OracleUpdate();
    $request->oracleUpdate->configuredSlaDomainIdDeprecated = 'ratione';
    $request->oracleUpdate->hostLogRetentionHours = 561825;
    $request->oracleUpdate->hostMount = 'odio';
    $request->oracleUpdate->logBackupFrequencyInMinutes = 252183;
    $request->oracleUpdate->logRetentionHours = 165853;
    $request->oracleUpdate->nodeOrder = [
        new OracleNodeOrder(),
        new OracleNodeOrder(),
        new OracleNodeOrder(),
    ];
    $request->oracleUpdate->numChannels = 10180;
    $request->id = 'd336561e-ca16-4ef8-9451-bd76eeeb518c';

    $response = $sdk->rootOracle->updateOracleDbV1($request);

    if ($response->oracleDbDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validateOracleAcoFile

Validate the provided Oracle ACO (Advanced Cloning Options) file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\ValidateOracleAcoFileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidateOracleAcoFileRequest();
    $request->requestBody = 'modi';
    $request->isLiveMount = false;

    $response = $sdk->rootOracle->validateOracleAcoFile($request);

    if ($response->oracleAcoValidationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
