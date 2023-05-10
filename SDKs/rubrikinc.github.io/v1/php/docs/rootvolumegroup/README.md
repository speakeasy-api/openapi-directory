# rootVolumeGroup

## Overview

Volume Groups.

### Available Operations

* [createOnDemandVolumeGroupBackup](#createondemandvolumegroupbackup) - Create on-demand snapshot for the Volume Group
* [getVolumeGroup](#getvolumegroup) - Get Volume Group details
* [getVolumeGroupForceFullSpec](#getvolumegroupforcefullspec) - Retrieve the configuration for forcing a full snapshot
* [getVolumeGroupSnapshot](#getvolumegroupsnapshot) - Get Volume Group snapshot details
* [getVolumeGroupSnapshotMount](#getvolumegroupsnapshotmount) - Get summary information for a mount
* [patchVolumeGroup](#patchvolumegroup) - Update Volume Group properties
* [queryVolumeGroup](#queryvolumegroup) - Get list of Volume Groups
* [queryVolumeGroupLatestSnapshot](#queryvolumegrouplatestsnapshot) - Get the latest snapshot of the Volume Group
* [queryVolumeGroupSnapshot](#queryvolumegroupsnapshot) - Get list of snapshots of the Volume Group
* [queryVolumeGroupSnapshotMount](#queryvolumegroupsnapshotmount) - Get summary information for all mounts
* [requestVolumeGroupForceFullSnapshot](#requestvolumegroupforcefullsnapshot) - Request a full snapshot on the next backup job of a Volume Group

## createOnDemandVolumeGroupBackup

Create an on-demand snapshot for the given Volume Group ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateOnDemandVolumeGroupBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\VolumeGroupOnDemandSnapshotConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOnDemandVolumeGroupBackupRequest();
    $request->volumeGroupOnDemandSnapshotConfig = new VolumeGroupOnDemandSnapshotConfig();
    $request->volumeGroupOnDemandSnapshotConfig->slaId = 'a';
    $request->volumeGroupOnDemandSnapshotConfig->volumeIdsIncludedInSnapshot = [
        'explicabo',
        'eos',
        'quo',
        'fugiat',
    ];
    $request->id = '5cba6fbf-ec93-42af-a813-d65bfecec2dd';

    $response = $sdk->rootVolumeGroup->createOnDemandVolumeGroupBackup($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVolumeGroup

Detailed view of a Volume Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumeGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVolumeGroupRequest();
    $request->id = '6916f7fc-7dda-470e-860e-6075894d61c1';

    $response = $sdk->rootVolumeGroup->getVolumeGroup($request);

    if ($response->volumeGroupDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVolumeGroupForceFullSpec

Retrieve the configuration for forcing a full snapshot for a Volume Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumeGroupForceFullSpecRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVolumeGroupForceFullSpecRequest();
    $request->id = '4cd90227-e37c-40d9-b7f1-a5491abe9751';

    $response = $sdk->rootVolumeGroup->getVolumeGroupForceFullSpec($request);

    if ($response->volumeGroupForceFullResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVolumeGroupSnapshot

Retrieve detailed information about a snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumeGroupSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVolumeGroupSnapshotRequest();
    $request->id = 'b106d23e-03e6-4981-9aae-99fcde9e729c';

    $response = $sdk->rootVolumeGroup->getVolumeGroupSnapshot($request);

    if ($response->volumeGroupSnapshotSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVolumeGroupSnapshotMount

Retrieve information on a Volume Group mount. The information returned includes the following items, when available. id (the unique ID of the mount), name (the name of the Volume Group), snapshotDate (the snapshot date), sourceVolumeGroupId (The ID of the Volume Group from which this snapshot was created), sourceHostId (the ID of the source host), sourceHostName (the name of the source host), mountedDate (the date when the mount was created), mountedVolumes (the mounted volumes information), targetHostId (the ID of the mounted volumes host), targetHostName (the name of the mounted volumes host), mountRequestId (the ID of the job instance that initiated the mount), unmountRequestId (the ID of the job instance that intiated the request to remove the mount), isReady (whether the Volume Group mount is ready to use), and restoreScriptSmbPath (the link to the script that can perform bare-metal recovery).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumeGroupSnapshotMountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVolumeGroupSnapshotMountRequest();
    $request->id = '9d4f2d8a-4464-40ca-a0db-73a2f93f467d';

    $response = $sdk->rootVolumeGroup->getVolumeGroupSnapshotMount($request);

    if ($response->volumeGroupMountSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchVolumeGroup

Patch Volume Group with specified properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PatchVolumeGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\VolumeGroupPatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchVolumeGroupRequest();
    $request->volumeGroupPatch = new VolumeGroupPatch();
    $request->volumeGroupPatch->configuredSlaDomainId = 'quisquam';
    $request->volumeGroupPatch->forceFull = false;
    $request->volumeGroupPatch->isPaused = false;
    $request->volumeGroupPatch->volumeIdsIncludedInSnapshots = [
        'possimus',
    ];
    $request->id = '8da56122-026a-4b8f-a774-85c1976af980';

    $response = $sdk->rootVolumeGroup->patchVolumeGroup($request);

    if ($response->volumeGroupDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryVolumeGroup

Get summary of all Volume Groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryVolumeGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryVolumeGroupSLAAssignmentEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryVolumeGroupSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryVolumeGroupSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryVolumeGroupRequest();
    $request->effectiveSlaDomainId = 'nulla';
    $request->isRelic = false;
    $request->limit = 633732;
    $request->name = 'Genevieve Armstrong';
    $request->offset = 944880;
    $request->primaryClusterId = 'maxime';
    $request->slaAssignment = QueryVolumeGroupSLAAssignmentEnum::DERIVED;
    $request->sortBy = QueryVolumeGroupSortByEnum::NAME;
    $request->sortOrder = QueryVolumeGroupSortOrderEnum::DESC;

    $response = $sdk->rootVolumeGroup->queryVolumeGroup($request);

    if ($response->volumeGroupSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryVolumeGroupLatestSnapshot

Retrieve the latest snapshot summary of a Volume Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryVolumeGroupLatestSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryVolumeGroupLatestSnapshotRequest();
    $request->id = 'b274530e-5cc7-4c6d-8cbc-fdcd334b6f62';

    $response = $sdk->rootVolumeGroup->queryVolumeGroupLatestSnapshot($request);

    if ($response->volumeGroupSnapshotSummaries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryVolumeGroupSnapshot

Retrieve snapshot details for a Volume Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryVolumeGroupSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryVolumeGroupSnapshotRequest();
    $request->id = '3bcecab5-0aee-45e0-9a8b-9af6ad05486e';

    $response = $sdk->rootVolumeGroup->queryVolumeGroupSnapshot($request);

    if ($response->volumeGroupSnapshotSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryVolumeGroupSnapshotMount

Retrieves information for each Volume Group mount. The information returned includes the following items, when available. id (the unique ID of the mount), name (the name of the Volume Group), snapshotDate (the snapshot date), sourceVolumeGroupId (the ID of the Volume Group from which this snapshot was created), sourceHostId (the ID of the source host), sourceHostName (the name of the source host), mountedDate (the date when the mount was created), mountedVolumes (information on the mounted volumes), targetHostId (the ID of the mounted volumes host), targetHostName (the name of the mounted volumes host), mountRequestId (the ID of the job instance that initiated the mount), unmountRequestId (the ID of the job instance that initiated the request to remove the mount), isReady (whether the Volume Group mount is ready to use), and restoreScriptSmbPath (the link to the script that can perform bare-metal recovery).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryVolumeGroupSnapshotMountRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryVolumeGroupSnapshotMountSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryVolumeGroupSnapshotMountSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryVolumeGroupSnapshotMountRequest();
    $request->limit = 486793;
    $request->offset = 727896;
    $request->sortBy = QueryVolumeGroupSnapshotMountSortByEnum::SOURCE_HOST_NAME;
    $request->sortOrder = QueryVolumeGroupSnapshotMountSortOrderEnum::ASC;
    $request->sourceHostName = 'ipsum';
    $request->sourceVolumeGroupId = 'quo';

    $response = $sdk->rootVolumeGroup->queryVolumeGroupSnapshotMount($request);

    if ($response->volumeGroupMountSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestVolumeGroupForceFullSnapshot

Request a full snapshot to be taken during the next backup job of a Volume Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\RequestVolumeGroupForceFullSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\VolumeGroupForceFullRequest;
use \OpenAPI\OpenAPI\Models\Shared\ForceFullVolumeInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestVolumeGroupForceFullSnapshotRequest();
    $request->volumeGroupForceFullRequest = new VolumeGroupForceFullRequest();
    $request->volumeGroupForceFullRequest->volumeInfos = [
        new ForceFullVolumeInfo(),
        new ForceFullVolumeInfo(),
        new ForceFullVolumeInfo(),
    ];
    $request->id = 'e2d176dc-1c43-4d40-b61d-171157cbe5ee';

    $response = $sdk->rootVolumeGroup->requestVolumeGroupForceFullSnapshot($request);

    if ($response->volumeGroupForceFullResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
