# rootVcdVapp

## Overview

vCloud Director vApps.

### Available Operations

* [createOnDemandSnapshotV1](#createondemandsnapshotv1) - Create an on-demand snapshot for a vApp
* [createVappExportV1](#createvappexportv1) - Export vApp snapshot
* [createVappInstantRecoveryV1](#createvappinstantrecoveryv1) - Instant Recovery of vApp virtual machines
* [createVappTemplateSnapshotExport](#createvapptemplatesnapshotexport) - Export of a vApp template snapshot
* [createVcdVappDownloadSnapshotFromCloudV1](#createvcdvappdownloadsnapshotfromcloudv1) - Download snapshot from archive
* [deleteVappSnapshotV1](#deletevappsnapshotv1) - Delete a vApp snapshot
* [deleteVappSnapshotsV1](#deletevappsnapshotsv1) - Delete all snapshots of vApp
* [getVappAsyncRequestStatusV1](#getvappasyncrequeststatusv1) - Get vApp job status
* [getVappSnapshotExportOptionsV1](#getvappsnapshotexportoptionsv1) - Get exportable network configurations
* [getVappSnapshotInstantRecoveryOptionsV1](#getvappsnapshotinstantrecoveryoptionsv1) - Get Instant Recovery information
* [getVappSnapshotV1](#getvappsnapshotv1) - Get vApp snapshot details
* [getVappTemplateSnapshotExportOptions](#getvapptemplatesnapshotexportoptions) - Get Export information for a vApp template snapshot
* [getVcdVappV1](#getvcdvappv1) - Get details of a specific vApp
* [queryVappSnapshotV1](#queryvappsnapshotv1) - Get list of snapshots of vApp
* [queryVcdVappsV1](#queryvcdvappsv1) - Get summary for vApps
* [searchVappV1](#searchvappv1) - Search for a file in a vApp
* [updateVcdVappV1](#updatevcdvappv1) - Update vApp
* [vcdMissedSnapshotsV1](#vcdmissedsnapshotsv1) - Get details about missed snapshots for a vApp

## createOnDemandSnapshotV1

Start an asynchronous job to create an on-demand snapshot for a specified vApp object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateOnDemandSnapshotV1Request;
use \OpenAPI\OpenAPI\Models\Shared\BaseOnDemandSnapshotConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOnDemandSnapshotV1Request();
    $request->baseOnDemandSnapshotConfig = new BaseOnDemandSnapshotConfig();
    $request->baseOnDemandSnapshotConfig->slaId = 'impedit';
    $request->id = '72795b78-5148-4d6d-949e-5635b33bc0f9';

    $response = $sdk->rootVcdVapp->createOnDemandSnapshotV1($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVappExportV1

Export the specified vApp snapshot into a new vApp or an existing vApp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateVappExportV1Request;
use \OpenAPI\OpenAPI\Models\Shared\VappExportSnapshotJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\VappExportModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateVappNetworkParams;
use \OpenAPI\OpenAPI\Models\Shared\CreateNewVappParams;
use \OpenAPI\OpenAPI\Models\Shared\VappVmRestoreSpec;
use \OpenAPI\OpenAPI\Models\Shared\VappVmNetworkConnection;
use \OpenAPI\OpenAPI\Models\Shared\VappVmIpAddressingModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVappExportV1Request();
    $request->vappExportSnapshotJobConfig = new VappExportSnapshotJobConfig();
    $request->vappExportSnapshotJobConfig->exportMode = VappExportModeEnum::EXPORT_TO_NEW_VAPP;
    $request->vappExportSnapshotJobConfig->networksToRestore = [
        new CreateVappNetworkParams(),
    ];
    $request->vappExportSnapshotJobConfig->newVappParams = new CreateNewVappParams();
    $request->vappExportSnapshotJobConfig->newVappParams->name = 'Micheal Cummings';
    $request->vappExportSnapshotJobConfig->newVappParams->orgVdcId = 'provident';
    $request->vappExportSnapshotJobConfig->shouldPowerOnVappAfterExport = false;
    $request->vappExportSnapshotJobConfig->targetVappId = 'delectus';
    $request->vappExportSnapshotJobConfig->vmsToExport = [
        new VappVmRestoreSpec(),
        new VappVmRestoreSpec(),
    ];
    $request->snapshotId = 'totam';

    $response = $sdk->rootVcdVapp->createVappExportV1($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVappInstantRecoveryV1

Use Instant Recovery to recover specified vApp virtual machines.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateVappInstantRecoveryV1Request;
use \OpenAPI\OpenAPI\Models\Shared\VappInstantRecoveryJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\VappVmRestoreSpec;
use \OpenAPI\OpenAPI\Models\Shared\VappVmNetworkConnection;
use \OpenAPI\OpenAPI\Models\Shared\VappVmIpAddressingModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVappInstantRecoveryV1Request();
    $request->vappInstantRecoveryJobConfig = new VappInstantRecoveryJobConfig();
    $request->vappInstantRecoveryJobConfig->shouldPowerOnVmsAfterRecovery = false;
    $request->vappInstantRecoveryJobConfig->vmsToRestore = [
        new VappVmRestoreSpec(),
        new VappVmRestoreSpec(),
    ];
    $request->snapshotId = 'numquam';

    $response = $sdk->rootVcdVapp->createVappInstantRecoveryV1($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVappTemplateSnapshotExport

Export a vApp template snapashot to a catalog. Use the options endpoint to confirm that exporting to the catalog defaults or the original organization vDC storage profile is possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateVappTemplateSnapshotExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\VappTemplateExportJobConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVappTemplateSnapshotExportRequest();
    $request->vappTemplateExportJobConfig = new VappTemplateExportJobConfig();
    $request->vappTemplateExportJobConfig->catalogId = 'sunt';
    $request->vappTemplateExportJobConfig->name = 'Lynn Von';
    $request->vappTemplateExportJobConfig->orgVdcId = 'expedita';
    $request->vappTemplateExportJobConfig->storagePolicyId = 'ducimus';
    $request->snapshotId = 'excepturi';

    $response = $sdk->rootVcdVapp->createVappTemplateSnapshotExport($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVcdVappDownloadSnapshotFromCloudV1

Provides a method for retrieving a snapshot that is not available locally, from an archival location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateVcdVappDownloadSnapshotFromCloudV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVcdVappDownloadSnapshotFromCloudV1Request();
    $request->id = '6065c0ef-a6f9-43b9-8a1b-8c95be1254b7';

    $response = $sdk->rootVcdVapp->createVcdVappDownloadSnapshotFromCloudV1($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVappSnapshotV1

Designate a vApp snapshot as expired and available for garbage collection. The snapshot must be an on-demand snapshot or a snapshot from a vApp that is not assigned to an SLA Domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVappSnapshotV1Request;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVappSnapshotV1LocationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVappSnapshotV1Request();
    $request->id = '39f4fe77-210d-41f6-958c-99c722d2bc0f';
    $request->location = DeleteVappSnapshotV1LocationEnum::LOCAL;

    $response = $sdk->rootVcdVapp->deleteVappSnapshotV1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVappSnapshotsV1

Delete all snapshots for a specified vApp object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVappSnapshotsV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVappSnapshotsV1Request();
    $request->id = '4087d9ca-ae04-42dd-bcaa-c9b4caa1cfe9';

    $response = $sdk->rootVcdVapp->deleteVappSnapshotsV1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVappAsyncRequestStatusV1

Retrieve the details of a specified asynchronous job for a vApp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVappAsyncRequestStatusV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVappAsyncRequestStatusV1Request();
    $request->id = 'e15df903-907f-4378-b198-3d42e54a8546';

    $response = $sdk->rootVcdVapp->getVappAsyncRequestStatusV1($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVappSnapshotExportOptionsV1

Retrieve summary information for the vApp networks that are available for network connections from the virtual machines in the exported vApp snapshot. The summary also specifies the default vApp network for each virtual machine network connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVappSnapshotExportOptionsV1Request;
use \OpenAPI\OpenAPI\Models\Operations\GetVappSnapshotExportOptionsV1ExportModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVappSnapshotExportOptionsV1Request();
    $request->exportMode = GetVappSnapshotExportOptionsV1ExportModeEnum::EXPORT_TO_NEW_VAPP;
    $request->snapshotId = 'quis';
    $request->targetOrgVdcId = 'provident';
    $request->targetVappId = 'iusto';

    $response = $sdk->rootVcdVapp->getVappSnapshotExportOptionsV1($request);

    if ($response->vappExportOptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVappSnapshotInstantRecoveryOptionsV1

Retrieve the available vApp network connections and the default vApp network connection for the virtual machines in a vApp snapshot. Use this information to configure an Instant Recovery of specified virtual machines in the vApp snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVappSnapshotInstantRecoveryOptionsV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVappSnapshotInstantRecoveryOptionsV1Request();
    $request->snapshotId = 'optio';

    $response = $sdk->rootVcdVapp->getVappSnapshotInstantRecoveryOptionsV1($request);

    if ($response->vappInstantRecoveryOptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVappSnapshotV1

Retrieve detailed information about a specified snapshot for a vApp object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVappSnapshotV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVappSnapshotV1Request();
    $request->id = '50233c14-71d5-41aa-a6dd-f5abd6487c5f';

    $response = $sdk->rootVcdVapp->getVappSnapshotV1($request);

    if ($response->vcdVappSnapshotDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVappTemplateSnapshotExportOptions

Retrieve the available choices vApp template storage profile and organization vDC choices in case of exporting to either original organization vDC defaults of the target catalog. In case advanced option of manually deciding org vdc is preferred, this also provides available storage profile choices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVappTemplateSnapshotExportOptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVappTemplateSnapshotExportOptionsRequest();
    $request->catalogId = 'impedit';
    $request->name = 'Gayle Lehner';
    $request->orgVdcId = 'est';
    $request->snapshotId = 'voluptatem';

    $response = $sdk->rootVcdVapp->getVappTemplateSnapshotExportOptions($request);

    if ($response->vappTemplateExportOptionsUnion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVcdVappV1

Retrieve detailed information for a specified vApp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVcdVappV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVcdVappV1Request();
    $request->id = '0bef69e1-0015-4763-8bda-7afded84a35a';

    $response = $sdk->rootVcdVapp->getVcdVappV1($request);

    if ($response->vcdVappDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryVappSnapshotV1

Retrieve summary information for each of the snapshot objects of a specified vApp object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryVappSnapshotV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryVappSnapshotV1Request();
    $request->id = '41238e1a-735a-4c26-ae33-bef971a8f46b';

    $response = $sdk->rootVcdVapp->queryVappSnapshotV1($request);

    if ($response->vcdVappSnapshotSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryVcdVappsV1

Retrieve summary information for all vCD vApp objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryVcdVappsV1Request;
use \OpenAPI\OpenAPI\Models\Operations\QueryVcdVappsV1SLAAssignmentEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryVcdVappsV1SortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryVcdVappsV1SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryVcdVappsV1Request();
    $request->effectiveSlaDomainId = 'placeat';
    $request->includeBackupTaskInfo = false;
    $request->isRelic = false;
    $request->limit = 651310;
    $request->name = 'Amy Anderson';
    $request->offset = 887137;
    $request->primaryClusterId = 'omnis';
    $request->slaAssignment = QueryVcdVappsV1SLAAssignmentEnum::DIRECT;
    $request->sortBy = QueryVcdVappsV1SortByEnum::EFFECTIVE_SLA_DOMAIN_NAME;
    $request->sortOrder = QueryVcdVappsV1SortOrderEnum::DESC;

    $response = $sdk->rootVcdVapp->queryVcdVappsV1($request);

    if ($response->vcdVappSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchVappV1

Aggregated search for a file through snapshots of all virtual machines that are presently part of the vApp. Specify the file using a full path prefix or a filename prefix.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\SearchVappV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchVappV1Request();
    $request->id = '711d08cf-88ec-49f7-b99a-550a656ed333';
    $request->path = 'soluta';

    $response = $sdk->rootVcdVapp->searchVappV1($request);

    if ($response->appSearchResponseListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVcdVappV1

Make changes to the parameters of a specified vApp object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVcdVappV1Request;
use \OpenAPI\OpenAPI\Models\Shared\VcdVappPatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVcdVappV1Request();
    $request->vcdVappPatch = new VcdVappPatch();
    $request->vcdVappPatch->configuredSlaDomainId = 'cum';
    $request->vcdVappPatch->isBestEffortSynchronizationEnabled = false;
    $request->vcdVappPatch->isPaused = false;
    $request->vcdVappPatch->vcdVmMoidsToExcludeFromSnapshot = [
        'quo',
    ];
    $request->id = 'e8aa6543-2a98-46eb-be14-ca5640891500';

    $response = $sdk->rootVcdVapp->updateVcdVappV1($request);

    if ($response->vcdVappDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vcdMissedSnapshotsV1

Retrieve the timestamp for each missed snapshot for a specified vApp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\VcdMissedSnapshotsV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VcdMissedSnapshotsV1Request();
    $request->id = '97019a48-f88e-4ce7-bf90-4e01105d3890';

    $response = $sdk->rootVcdVapp->vcdMissedSnapshotsV1($request);

    if ($response->missedSnapshotListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
