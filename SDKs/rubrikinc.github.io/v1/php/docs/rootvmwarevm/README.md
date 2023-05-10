# rootVmwareVm

## Overview

VMware virtual machines.

### Available Operations

* [batchMountSnapshot](#batchmountsnapshot) - Live mount a snapshot each from a set of virtual machines
* [browseVmwareSnapshot](#browsevmwaresnapshot) - List files in VM snapshot
* [bulkCreateOnDemandBackup](#bulkcreateondemandbackup) - Take an on-demand snapshot of multiple virtual machines
* [createDownloadFileJob](#createdownloadfilejob) - Download file from VM snapshot
* [createDownloadSnapshotFromCloud](#createdownloadsnapshotfromcloud) - Download snapshot from archive
* [createExportV1](#createexportv1) - Export VM snapshot
* [createExportWithDownloadFromCloudV1](#createexportwithdownloadfromcloudv1) - Download a snapshot from an archival location, then export a virtual machine using the downloaded snapshot
* [createInstantRecovery](#createinstantrecovery) - Instantly recover a VM
* [createMountV1](#createmountv1) - Live mount a VM from a snapshot
* [createOnDemandBackup](#createondemandbackup) - Create an on-demand snapshot for a VM
* [createRestoreFileJob](#createrestorefilejob) - Restore file from VM snapshot
* [createUnmount](#createunmount) - Delete a Live Mount VM
* [deleteVmwareSnapshot](#deletevmwaresnapshot) - Delete VM snapshot
* [deleteVmwareSnapshots](#deletevmwaresnapshots) - Delete all snapshots of VM
* [getAsyncRequestStatus](#getasyncrequeststatus) - Get asynchronous request details for VM
* [getMountV1](#getmountv1) - Get information for a Live Mount
* [getSnapshot](#getsnapshot) - Get VM snapshot details
* [getVirtualDisk](#getvirtualdisk) - Details about the specific Virtual Disk
* [getVm](#getvm) - Get VM details
* [getVmForceFullSpec](#getvmforcefullspec) - Retrieve the configuration for forcing a full snapshot of a VMware virtual machine
* [getVmwareCdpLiveInfo](#getvmwarecdpliveinfo) - Returns the live CDP info for a set of CDP-enabled virtual machines
* [getVmwareCdpStateInfo](#getvmwarecdpstateinfo) - Returns CDP state info for a set of virtual machines
* [getVmwareMissedRecoverableRanges](#getvmwaremissedrecoverableranges) - Get missed time ranges for point in time recovery
* [getVmwareRecoverableRanges](#getvmwarerecoverableranges) - Get available time ranges for point in time recovery
* [getVmwareVmMissedRecoverableRangesInBatch](#getvmwarevmmissedrecoverablerangesinbatch) - Returns the recoverable ranges that were missed for a set of CDP-enabled virtual machines
* [getVmwareVmRecoverableRangesInBatch](#getvmwarevmrecoverablerangesinbatch) - Returns the recoverable ranges for a set of CDP-enabled virtual machines
* [missedSnapshots](#missedsnapshots) - Get details about missed snapshots for a VM
* [queryMountV1](#querymountv1) - Get Live Mount information
* [querySnapshot](#querysnapshot) - Get list of snapshots of VM
* [querySnapshotsForVms](#querysnapshotsforvms) - Get snapshot information for a list of virtual machines
* [queryVm](#queryvm) - Get list of VMs
* [relocateMount](#relocatemount) - Relocate a virtual machine to another datastore
* [requestVmForceFullSnapshot](#requestvmforcefullsnapshot) - Request a full snapshot for the next backup job of a VMware virtual machine
* [runGuestOsScript](#runguestosscript) - Run guest OS script
* [searchVm](#searchvm) - Search for a file from a VM
* [updateMount](#updatemount) - Power a Live Mount on and off
* [updateVirtualDisk](#updatevirtualdisk) - Update a specific Virtual Disk
* [updateVm](#updatevm) - Update VM
* [vmMakePrimary](#vmmakeprimary) - Make this cluster the primary for agents on a set of VMs
* [vmRegisterAgent](#vmregisteragent) - Register Rubrik Backup Service

## batchMountSnapshot

Live mount a snapshot each from a set of virtual machines

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\BatchMountSnapshotJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\MountSnapshotJobConfigForBatchV1;
use \OpenAPI\OpenAPI\Models\Shared\MountSnapshotJobConfigV1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchMountSnapshotJobConfig();
    $request->snapshots = [
        new MountSnapshotJobConfigForBatchV1(),
        new MountSnapshotJobConfigForBatchV1(),
        new MountSnapshotJobConfigForBatchV1(),
    ];

    $response = $sdk->rootVmwareVm->batchMountSnapshot($request);

    if ($response->batchAsyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## browseVmwareSnapshot

For a virtual machine snapshot, list the directories and files that are beneath a specified file system path.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\BrowseVmwareSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BrowseVmwareSnapshotRequest();
    $request->id = 'fd2a6c44-846a-4e9d-8925-3c8962f4896b';
    $request->limit = 950599;
    $request->offset = 320504;
    $request->path = 'et';

    $response = $sdk->rootVmwareVm->browseVmwareSnapshot($request);

    if ($response->browseResponseListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bulkCreateOnDemandBackup

Bulk operation of taking on-demand snapshot for given virtual machines.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\BulkOnDemandSnapshotJobConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkOnDemandSnapshotJobConfig();
    $request->slaId = 'eveniet';
    $request->vms = [
        'ea',
        'exercitationem',
    ];

    $response = $sdk->rootVmwareVm->bulkCreateOnDemandBackup($request);

    if ($response->batchAsyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDownloadFileJob

Create a request to download a file from a virtual machine snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateDownloadFileJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DownloadFileJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\LegalHoldDownloadConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDownloadFileJobRequest();
    $request->downloadFileJobConfig = new DownloadFileJobConfig();
    $request->downloadFileJobConfig->legalHoldDownloadConfig = new LegalHoldDownloadConfig();
    $request->downloadFileJobConfig->legalHoldDownloadConfig->isLegalHoldDownload = false;
    $request->downloadFileJobConfig->path = 'sed';
    $request->id = 'd3c343d6-1778-4af4-9124-7725e621909e';

    $response = $sdk->rootVmwareVm->createDownloadFileJob($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDownloadSnapshotFromCloud

Provides a method for retrieving a snapshot, that is not available locally, from an archival location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateDownloadSnapshotFromCloudRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDownloadSnapshotFromCloudRequest();
    $request->id = '91044a5d-e59a-4c77-8667-0cf1cf593260';

    $response = $sdk->rootVmwareVm->createDownloadSnapshotFromCloud($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createExportV1

Export a virtual machine from a snapshot, using a specified hypervisor host as the datastore.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportV1Request;
use \OpenAPI\OpenAPI\Models\Shared\ExportSnapshotJobConfigV1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExportV1Request();
    $request->exportSnapshotJobConfigV1 = new ExportSnapshotJobConfigV1();
    $request->exportSnapshotJobConfigV1->datastoreId = 'enim';
    $request->exportSnapshotJobConfigV1->disableNetwork = false;
    $request->exportSnapshotJobConfigV1->hostId = 'explicabo';
    $request->exportSnapshotJobConfigV1->keepMacAddresses = false;
    $request->exportSnapshotJobConfigV1->powerOn = false;
    $request->exportSnapshotJobConfigV1->removeNetworkDevices = false;
    $request->exportSnapshotJobConfigV1->shouldRecoverTags = false;
    $request->exportSnapshotJobConfigV1->unregisterVm = false;
    $request->exportSnapshotJobConfigV1->vmName = 'ipsam';
    $request->id = '1e66bb42-6897-4d99-a2d3-35670e93ee6c';

    $response = $sdk->rootVmwareVm->createExportV1($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createExportWithDownloadFromCloudV1

Download a snapshot from an archival location and then export a virtual machine using the downloaded snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportWithDownloadFromCloudV1Request;
use \OpenAPI\OpenAPI\Models\Shared\ExportSnapshotJobConfigV1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExportWithDownloadFromCloudV1Request();
    $request->exportSnapshotJobConfigV1 = new ExportSnapshotJobConfigV1();
    $request->exportSnapshotJobConfigV1->datastoreId = 'reiciendis';
    $request->exportSnapshotJobConfigV1->disableNetwork = false;
    $request->exportSnapshotJobConfigV1->hostId = 'ad';
    $request->exportSnapshotJobConfigV1->keepMacAddresses = false;
    $request->exportSnapshotJobConfigV1->powerOn = false;
    $request->exportSnapshotJobConfigV1->removeNetworkDevices = false;
    $request->exportSnapshotJobConfigV1->shouldRecoverTags = false;
    $request->exportSnapshotJobConfigV1->unregisterVm = false;
    $request->exportSnapshotJobConfigV1->vmName = 'perspiciatis';
    $request->id = 'f358aaea-cae3-423a-b1bf-7ba1cc97716c';

    $response = $sdk->rootVmwareVm->createExportWithDownloadFromCloudV1($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInstantRecovery

Instantly recovery a virtual machine from a snapshot. The Instant Recovery request starts the virtual machine with networking enabled and renames and powers off the source virtual machine, if it still exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateInstantRecoveryRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstantRecoveryJobConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInstantRecoveryRequest();
    $request->instantRecoveryJobConfig = new InstantRecoveryJobConfig();
    $request->instantRecoveryJobConfig->disableNetwork = false;
    $request->instantRecoveryJobConfig->hostId = 'deleniti';
    $request->instantRecoveryJobConfig->keepMacAddresses = false;
    $request->instantRecoveryJobConfig->powerOn = false;
    $request->instantRecoveryJobConfig->preserveMoid = false;
    $request->instantRecoveryJobConfig->removeNetworkDevices = false;
    $request->instantRecoveryJobConfig->shouldRecoverTags = false;
    $request->instantRecoveryJobConfig->vlan = 35254;
    $request->instantRecoveryJobConfig->vmName = 'sed';
    $request->id = 'cc9e0c7d-9d32-43f1-aa63-ed9cf1c856bc';

    $response = $sdk->rootVmwareVm->createInstantRecovery($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMountV1

Create a request to Live Mount a virtual machine from a snapshot using a specified configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateMountV1Request;
use \OpenAPI\OpenAPI\Models\Shared\MountSnapshotJobConfigV1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMountV1Request();
    $request->mountSnapshotJobConfigV1 = new MountSnapshotJobConfigV1();
    $request->mountSnapshotJobConfigV1->createDatastoreOnly = false;
    $request->mountSnapshotJobConfigV1->dataStoreName = 'libero';
    $request->mountSnapshotJobConfigV1->disableNetwork = false;
    $request->mountSnapshotJobConfigV1->hostId = 'id';
    $request->mountSnapshotJobConfigV1->keepMacAddresses = false;
    $request->mountSnapshotJobConfigV1->powerOn = false;
    $request->mountSnapshotJobConfigV1->removeNetworkDevices = false;
    $request->mountSnapshotJobConfigV1->shouldRecoverTags = false;
    $request->mountSnapshotJobConfigV1->vlan = 312991;
    $request->mountSnapshotJobConfigV1->vmName = 'inventore';
    $request->id = 'ef2454a4-7fac-4f11-acdd-5444a7562873';

    $response = $sdk->rootVmwareVm->createMountV1($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOnDemandBackup

Use the ID of a virtual machine to create an on-demand snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateOnDemandBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\BaseOnDemandSnapshotConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOnDemandBackupRequest();
    $request->baseOnDemandSnapshotConfig = new BaseOnDemandSnapshotConfig();
    $request->baseOnDemandSnapshotConfig->slaId = 'placeat';
    $request->id = '7dd9efaf-43dc-4623-a20f-3138f30df3db';

    $response = $sdk->rootVmwareVm->createOnDemandBackup($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRestoreFileJob

Create a request to restore a file or folder to the source virtual machine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateRestoreFileJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreFileJobConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRestoreFileJobRequest();
    $request->restoreFileJobConfig = new RestoreFileJobConfig();
    $request->restoreFileJobConfig->domainName = 'sit';
    $request->restoreFileJobConfig->ignoreErrors = false;
    $request->restoreFileJobConfig->password = 'magni';
    $request->restoreFileJobConfig->path = 'aspernatur';
    $request->restoreFileJobConfig->restorePath = 'earum';
    $request->restoreFileJobConfig->shouldRestoreXAttrs = false;
    $request->restoreFileJobConfig->shouldSaveCredentials = false;
    $request->restoreFileJobConfig->shouldUseAgent = false;
    $request->restoreFileJobConfig->username = 'Lois.Ondricka';
    $request->id = '5fb8f652-ebb9-4d38-b838-790243b293da';

    $response = $sdk->rootVmwareVm->createRestoreFileJob($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUnmount

Create a request to delete a Live Mount virtual machine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnmountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUnmountRequest();
    $request->force = false;
    $request->id = 'b30e917f-50fd-4a04-88b1-bb55a292b0bc';

    $response = $sdk->rootVmwareVm->createUnmount($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVmwareSnapshot

Designate a snapshot as expired and available for garbage collection. The snapshot must be an on-demand snapshot or a snapshot from a virtual machine that is not assigned to an SLA Domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVmwareSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVmwareSnapshotLocationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVmwareSnapshotRequest();
    $request->id = '3bb74466-4eb1-4d03-b88b-0d1bb17afee7';
    $request->location = DeleteVmwareSnapshotLocationEnum::ALL;

    $response = $sdk->rootVmwareVm->deleteVmwareSnapshot($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVmwareSnapshots

Delete all of the snapshots from a virtual machine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVmwareSnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVmwareSnapshotsRequest();
    $request->id = 'b6feb945-7c7e-4daf-b9d1-6fbf76fd162b';

    $response = $sdk->rootVmwareVm->deleteVmwareSnapshots($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAsyncRequestStatus

Get the details of an asynchronous request that involves a VMware virtual machine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetAsyncRequestStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAsyncRequestStatusRequest();
    $request->id = '303e3023-b93e-4343-96cf-55b4313553cc';

    $response = $sdk->rootVmwareVm->getAsyncRequestStatus($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMountV1

Retrieve detailed information for a specified Live Mount.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMountV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMountV1Request();
    $request->id = 'f1c204c4-adcc-4990-8c51-95b8648cefa7';

    $response = $sdk->rootVmwareVm->getMountV1($request);

    if ($response->vmwareVmMountDetailV1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSnapshot

Retrieve detailed information about a virtual machine snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSnapshotRequest();
    $request->id = '8f1e2d3b-901e-4095-abbb-4cbb19f713d9';

    $response = $sdk->rootVmwareVm->getSnapshot($request);

    if ($response->vmSnapshotDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVirtualDisk

Detailed about the specific Virtual Disk.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVirtualDiskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVirtualDiskRequest();
    $request->id = '5a4169c1-3872-471e-98ea-9e45118c2cc5';

    $response = $sdk->rootVmwareVm->getVirtualDisk($request);

    if ($response->virtualDiskDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVm

Retrieve details for a virtual machine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVmRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVmRequest();
    $request->id = '7fbd60b1-a78e-4d29-a9d4-eea85658c2d4';

    $response = $sdk->rootVmwareVm->getVm($request);

    if ($response->virtualMachineDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVmForceFullSpec

Retrieve the configuration that has been set for forcing a full snapshot for a VMware virtual machine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVmForceFullSpecRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVmForceFullSpecRequest();
    $request->id = 'f4c88be4-f278-4fd9-a67e-46c51d2ffaa5';

    $response = $sdk->rootVmwareVm->getVmForceFullSpec($request);

    if ($response->vmForceFullResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVmwareCdpLiveInfo

Returns the live CDP info for a set of CDP-enabled virtual machines

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
    $request = [
        'temporibus',
        'minus',
        'voluptates',
    ]

    $response = $sdk->rootVmwareVm->getVmwareCdpLiveInfo($request);

    if ($response->batchVmwareCdpLiveInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVmwareCdpStateInfo

Returns CDP state info for a set of virtual machines

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
    $request = [
        'sed',
        'ratione',
        'quaerat',
        'minus',
    ]

    $response = $sdk->rootVmwareVm->getVmwareCdpStateInfo($request);

    if ($response->batchVmwareCdpStateInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVmwareMissedRecoverableRanges

Gets a list of time ranges to which a CDP-enabled virtual machine cannot perform a point-in-time recovery. The time ranges are indicated by start and end timestamps listed as date-time strings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVmwareMissedRecoverableRangesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVmwareMissedRecoverableRangesRequest();
    $request->afterTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-26T05:19:12.170Z');
    $request->beforeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-09T02:24:05.915Z');
    $request->id = '9bdf2190-abd9-4bbc-8272-5ec2659ce028';

    $response = $sdk->rootVmwareVm->getVmwareMissedRecoverableRanges($request);

    if ($response->vmwareRecoverableRangeListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVmwareRecoverableRanges

Gets time ranges available for point-in-time recovery. The time ranges are indicated by start and end date-time strings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVmwareRecoverableRangesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVmwareRecoverableRangesRequest();
    $request->afterTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-15T17:53:13.960Z');
    $request->beforeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-30T12:21:26.531Z');
    $request->id = 'c69ef68e-45c8-4add-bac7-54500430c663';

    $response = $sdk->rootVmwareVm->getVmwareRecoverableRanges($request);

    if ($response->vmwareRecoverableRangeListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVmwareVmMissedRecoverableRangesInBatch

Returns the recoverable ranges that were missed for a set of CDP-enabled virtual machines

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\BatchVmwareVmMissedRecoverableRangesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchVmwareVmMissedRecoverableRangesRequest();
    $request->afterTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-19T04:02:48.607Z');
    $request->beforeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-12T15:14:09.191Z');
    $request->vmIds = [
        'inventore',
        'sapiente',
        'temporibus',
    ];

    $response = $sdk->rootVmwareVm->getVmwareVmMissedRecoverableRangesInBatch($request);

    if ($response->batchVmwareVmMissedRecoverableRanges !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVmwareVmRecoverableRangesInBatch

Returns the recoverable ranges for a set of CDP-enabled virtual machines

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\BatchVmwareVmRecoverableRangesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchVmwareVmRecoverableRangesRequest();
    $request->afterTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-27T06:20:10.096Z');
    $request->beforeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-01T21:36:13.825Z');
    $request->vmIds = [
        'itaque',
    ];

    $response = $sdk->rootVmwareVm->getVmwareVmRecoverableRangesInBatch($request);

    if ($response->batchVmwareVmRecoverableRanges !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## missedSnapshots

Retrieve details about the missed snapshots for a virtual machine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\MissedSnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MissedSnapshotsRequest();
    $request->id = '91e8f7bc-69d4-460a-b7ec-eb26d10f1ef2';

    $response = $sdk->rootVmwareVm->missedSnapshots($request);

    if ($response->missedSnapshotListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryMountV1

Retrieve summary information about Live Mount activity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryMountV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryMountV1Request();
    $request->limit = 386967;
    $request->offset = 203301;
    $request->vmId = 'ab';

    $response = $sdk->rootVmwareVm->queryMountV1($request);

    if ($response->vmwareVmMountSummaryV1ListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## querySnapshot

Retrieve summary information for the snapshots of a virtual machine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QuerySnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuerySnapshotRequest();
    $request->id = 'c7c0f0f8-73f9-4d5c-a5fd-3e0b4a4a4253';

    $response = $sdk->rootVmwareVm->querySnapshot($request);

    if ($response->vmSnapshotSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## querySnapshotsForVms

Retrieve snapshot summaries for a list of virtual machines.

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
    $request = [
        'amet',
        'ipsa',
        'consequuntur',
        'ullam',
    ]

    $response = $sdk->rootVmwareVm->querySnapshotsForVms($request);

    if ($response->batchVmSnapshotSummaries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryVm

Get summary of all the VMs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryVmRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryVmSLAAssignmentEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryVmSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryVmSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryVmRequest();
    $request->effectiveSlaDomainId = 'molestiae';
    $request->guestOsName = 'architecto';
    $request->isRelic = false;
    $request->limit = 66919;
    $request->moid = 'maiores';
    $request->name = 'Theresa Schoen';
    $request->offset = 480043;
    $request->primaryClusterId = 'pariatur';
    $request->slaAssignment = QueryVmSLAAssignmentEnum::UNASSIGNED;
    $request->sortBy = QueryVmSortByEnum::NAME;
    $request->sortOrder = QueryVmSortOrderEnum::ASC;

    $response = $sdk->rootVmwareVm->queryVm($request);

    if ($response->virtualMachineSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## relocateMount

Run storage VMotion to relocate a specified Live Mount into another data store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\RelocateMountRequest;
use \OpenAPI\OpenAPI\Models\Shared\RelocateMountConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RelocateMountRequest();
    $request->relocateMountConfig = new RelocateMountConfig();
    $request->relocateMountConfig->datastoreId = 'voluptatum';
    $request->id = 'be09e41a-7a21-45ca-92a4-ba9d59988192';

    $response = $sdk->rootVmwareVm->relocateMount($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestVmForceFullSnapshot

Request a full snapshot to be taken for the next backup job of a VMware virtual machine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\RequestVmForceFullSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\VmForceFullRequest;
use \OpenAPI\OpenAPI\Models\Shared\VmwareVdiskForceFullInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestVmForceFullSnapshotRequest();
    $request->vmForceFullRequest = new VmForceFullRequest();
    $request->vmForceFullRequest->virtualDiskInfos = [
        new VmwareVdiskForceFullInfo(),
        new VmwareVdiskForceFullInfo(),
        new VmwareVdiskForceFullInfo(),
        new VmwareVdiskForceFullInfo(),
    ];
    $request->id = 'fd0c77c5-3e7e-47d4-ae6e-8b90bac384e2';

    $response = $sdk->rootVmwareVm->requestVmForceFullSnapshot($request);

    if ($response->vmForceFullResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runGuestOsScript

Run the specified preBackup, postSnap, or postBackup script in the guest OS of a virtual machine. The script must exist and meet requirements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\RunGuestOsScriptRequest;
use \OpenAPI\OpenAPI\Models\Shared\VmGuestScriptRunConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmGuestScriptRunConfigPhaseEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunGuestOsScriptRequest();
    $request->vmGuestScriptRunConfig = new VmGuestScriptRunConfig();
    $request->vmGuestScriptRunConfig->phase = VmGuestScriptRunConfigPhaseEnum::PRE_BACKUP;
    $request->id = '96703fec-31c5-4082-8d18-9a36a6b2d27e';

    $response = $sdk->rootVmwareVm->runGuestOsScript($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchVm

Search for a file in the snapshots of a a virtual machine. Specify the file by full path prefix or filename prefix.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\SearchVmRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchVmRequest();
    $request->cursor = 'rerum';
    $request->id = '707aa60c-8fe4-46e6-977d-b9db3b70ffbb';
    $request->limit = 394007;
    $request->path = 'occaecati';

    $response = $sdk->rootVmwareVm->searchVm($request);

    if ($response->searchResponseListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMount

Power a specified Live Mount virtual machine on or off. Pass **_true_** to power the virtual machine on and pass **_false_** to power the virtual machine off.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMountRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMountConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMountRequest();
    $request->updateMountConfig = new UpdateMountConfig();
    $request->updateMountConfig->powerStatus = false;
    $request->updateMountConfig->shouldForce = false;
    $request->id = '70ee770e-3609-47ef-bc20-6e61b0d30871';

    $response = $sdk->rootVmwareVm->updateMount($request);

    if ($response->vmwareVmMountDetailV1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVirtualDisk

Update a specific Virtual Disk.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVirtualDiskRequest;
use \OpenAPI\OpenAPI\Models\Shared\VirtualDiskUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVirtualDiskRequest();
    $request->virtualDiskUpdate = new VirtualDiskUpdate();
    $request->virtualDiskUpdate->excludeFromSnapshots = false;
    $request->id = '4c20a3d9-8637-4ca8-9c3f-e65574dbaf94';

    $response = $sdk->rootVmwareVm->updateVirtualDisk($request);

    if ($response->virtualDiskDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVm

Update a virtual machine with specified properties. Use the guestCredential field to update the guest credential for a specified virtual machine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVmRequest;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineUpdateWithSecret;
use \OpenAPI\OpenAPI\Models\Shared\CloudInstantiationSpec;
use \OpenAPI\OpenAPI\Models\Shared\BaseGuestCredential;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineScriptDetail;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineScriptDetailFailureHandlingEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineUpdateWithSecretSnapshotConsistencyMandateEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmwareAdaptiveThrottlingSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVmRequest();
    $request->virtualMachineUpdateWithSecret = new VirtualMachineUpdateWithSecret();
    $request->virtualMachineUpdateWithSecret->cloudInstantiationSpec = new CloudInstantiationSpec();
    $request->virtualMachineUpdateWithSecret->cloudInstantiationSpec->imageRetentionInSeconds = 638818;
    $request->virtualMachineUpdateWithSecret->configuredSlaDomainId = 'quam';
    $request->virtualMachineUpdateWithSecret->guestCredential = new BaseGuestCredential();
    $request->virtualMachineUpdateWithSecret->guestCredential->password = 'placeat';
    $request->virtualMachineUpdateWithSecret->guestCredential->username = 'Kirk.Leffler24';
    $request->virtualMachineUpdateWithSecret->isArrayIntegrationEnabled = false;
    $request->virtualMachineUpdateWithSecret->isVmPaused = false;
    $request->virtualMachineUpdateWithSecret->maxNestedVsphereSnapshots = 665513;
    $request->virtualMachineUpdateWithSecret->postBackupScript = new VirtualMachineScriptDetail();
    $request->virtualMachineUpdateWithSecret->postBackupScript->failureHandling = VirtualMachineScriptDetailFailureHandlingEnum::CONTINUE;
    $request->virtualMachineUpdateWithSecret->postBackupScript->scriptPath = 'magni';
    $request->virtualMachineUpdateWithSecret->postBackupScript->timeoutMs = 524026;
    $request->virtualMachineUpdateWithSecret->postSnapScript = new VirtualMachineScriptDetail();
    $request->virtualMachineUpdateWithSecret->postSnapScript->failureHandling = VirtualMachineScriptDetailFailureHandlingEnum::CONTINUE;
    $request->virtualMachineUpdateWithSecret->postSnapScript->scriptPath = 'libero';
    $request->virtualMachineUpdateWithSecret->postSnapScript->timeoutMs = 156542;
    $request->virtualMachineUpdateWithSecret->preBackupScript = new VirtualMachineScriptDetail();
    $request->virtualMachineUpdateWithSecret->preBackupScript->failureHandling = VirtualMachineScriptDetailFailureHandlingEnum::CONTINUE;
    $request->virtualMachineUpdateWithSecret->preBackupScript->scriptPath = 'sapiente';
    $request->virtualMachineUpdateWithSecret->preBackupScript->timeoutMs = 164609;
    $request->virtualMachineUpdateWithSecret->shouldRefreshCacheAfterUpdate = false;
    $request->virtualMachineUpdateWithSecret->snapshotConsistencyMandate = VirtualMachineUpdateWithSecretSnapshotConsistencyMandateEnum::VSS_CONSISTENT;
    $request->virtualMachineUpdateWithSecret->throttlingSettings = new VmwareAdaptiveThrottlingSettings();
    $request->virtualMachineUpdateWithSecret->throttlingSettings->cpuUtilizationThreshold = 974745;
    $request->virtualMachineUpdateWithSecret->throttlingSettings->datastoreIoLatencyThreshold = 263386;
    $request->virtualMachineUpdateWithSecret->throttlingSettings->ioLatencyThreshold = 976121;
    $request->id = '3ded356d-7e14-4b21-8d98-196d55af69a1';

    $response = $sdk->rootVmwareVm->updateVm($request);

    if ($response->virtualMachineDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmMakePrimary

Migrate the primary cluster with which the agent is able to communicate. For disaster recovery when migrating everything over from another cluster, the /host/make_primary endpoint can be used with the oldPrimaryClusterUuid parameter.

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
    $request = [
        'labore',
        'facilis',
        'ducimus',
        'natus',
    ]

    $response = $sdk->rootVmwareVm->vmMakePrimary($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmRegisterAgent

Register the Rubrik Backup Service that is running on a specified host with the specified Rubrik cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\VmRegisterAgentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmRegisterAgentRequest();
    $request->id = 'ae33681c-23c3-49a7-80e1-7cb12c5ba825';

    $response = $sdk->rootVmwareVm->vmRegisterAgent($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
