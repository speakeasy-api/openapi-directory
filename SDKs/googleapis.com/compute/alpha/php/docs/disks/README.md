# disks

### Available Operations

* [computeDisksAddResourcePolicies](#computedisksaddresourcepolicies) - Adds existing resource policies to a disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
* [computeDisksAggregatedList](#computedisksaggregatedlist) - Retrieves an aggregated list of persistent disks.
* [computeDisksBulkInsert](#computedisksbulkinsert) - Bulk create a set of disks.
* [computeDisksCreateSnapshot](#computediskscreatesnapshot) - Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.
* [computeDisksDelete](#computedisksdelete) - Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
* [computeDisksGet](#computedisksget) - Returns the specified persistent disk.
* [computeDisksGetIamPolicy](#computedisksgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeDisksInsert](#computedisksinsert) - Creates a persistent disk in the specified project using the data in the request. You can create a disk from a source (sourceImage, sourceSnapshot, or sourceDisk) or create an empty 500 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb property.
* [computeDisksList](#computediskslist) - Retrieves a list of persistent disks contained within the specified zone.
* [computeDisksRemoveResourcePolicies](#computedisksremoveresourcepolicies) - Removes resource policies from a disk.
* [computeDisksResize](#computedisksresize) - Resizes the specified persistent disk. You can only increase the size of the disk.
* [computeDisksSetIamPolicy](#computediskssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeDisksSetLabels](#computediskssetlabels) - Sets the labels on a disk. To learn more about labels, read the Labeling Resources documentation.
* [computeDisksStartAsyncReplication](#computedisksstartasyncreplication) - Starts asynchronous replication. Must be invoked on the primary disk.
* [computeDisksStopAsyncReplication](#computedisksstopasyncreplication) - Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.
* [computeDisksStopGroupAsyncReplication](#computedisksstopgroupasyncreplication) - Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope.
* [computeDisksTestIamPermissions](#computediskstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeDisksUpdate](#computedisksupdate) - Updates the specified disk with the data included in the request. The update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.

## computeDisksAddResourcePolicies

Adds existing resource policies to a disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksAddResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DisksAddResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksAddResourcePoliciesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksAddResourcePoliciesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksAddResourcePoliciesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksAddResourcePoliciesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->disksAddResourcePoliciesRequest = new DisksAddResourcePoliciesRequest();
    $request->disksAddResourcePoliciesRequest->resourcePolicies = [
        'quos',
        'placeat',
        'sit',
    ];
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptates';
    $request->disk = 'inventore';
    $request->fields = 'aperiam';
    $request->key = 'totam';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->project = 'eligendi';
    $request->quotaUser = 'distinctio';
    $request->requestId = 'voluptatem';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'esse';
    $request->userIp = 'dolores';
    $request->zone = 'assumenda';

    $requestSecurity = new ComputeDisksAddResourcePoliciesSecurity();
    $requestSecurity->option1 = new ComputeDisksAddResourcePoliciesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksAddResourcePolicies($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksAggregatedList

Retrieves an aggregated list of persistent disks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corrupti';
    $request->fields = 'molestiae';
    $request->filter = 'provident';
    $request->includeAllScopes = false;
    $request->key = 'accusamus';
    $request->maxResults = 896480;
    $request->oauthToken = 'tempore';
    $request->orderBy = 'sint';
    $request->pageToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'ipsam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'laudantium';
    $request->userIp = 'corporis';

    $requestSecurity = new ComputeDisksAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeDisksAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksAggregatedList($request, $requestSecurity);

    if ($response->diskAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksBulkInsert

Bulk create a set of disks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksBulkInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkInsertDiskResource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksBulkInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksBulkInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksBulkInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksBulkInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bulkInsertDiskResource = new BulkInsertDiskResource();
    $request->bulkInsertDiskResource->sourceConsistencyGroupPolicy = 'voluptatibus';
    $request->accessToken = 'cum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'alias';
    $request->fields = 'quia';
    $request->key = 'quidem';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->project = 'repudiandae';
    $request->quotaUser = 'accusantium';
    $request->requestId = 'expedita';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'eos';
    $request->userIp = 'quibusdam';
    $request->zone = 'odio';

    $requestSecurity = new ComputeDisksBulkInsertSecurity();
    $requestSecurity->option1 = new ComputeDisksBulkInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksBulkInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksCreateSnapshot

Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksCreateSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Snapshot;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\GuestOsFeature;
use \OpenAPI\OpenAPI\Models\Shared\GuestOsFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerEncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotSnapshotTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotStorageBytesStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksCreateSnapshotSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksCreateSnapshotSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksCreateSnapshotSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksCreateSnapshotRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->snapshot = new Snapshot();
    $request->snapshot->architecture = SnapshotArchitectureEnum::ARCHITECTURE_UNSPECIFIED;
    $request->snapshot->autoCreated = false;
    $request->snapshot->chainName = 'explicabo';
    $request->snapshot->creationSizeBytes = 'corporis';
    $request->snapshot->creationTimestamp = 'error';
    $request->snapshot->description = 'earum';
    $request->snapshot->diskSizeGb = 'adipisci';
    $request->snapshot->downloadBytes = 'recusandae';
    $request->snapshot->guestFlush = false;
    $request->snapshot->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->snapshot->id = 'ut';
    $request->snapshot->kind = 'quidem';
    $request->snapshot->labelFingerprint = 'quis';
    $request->snapshot->labels = [
        'unde' => 'molestiae',
    ];
    $request->snapshot->licenseCodes = [
        'cupiditate',
        'fugit',
        'numquam',
        'numquam',
    ];
    $request->snapshot->licenses = [
        'at',
    ];
    $request->snapshot->locationHint = 'officia';
    $request->snapshot->maxRetentionDays = 491892;
    $request->snapshot->name = 'Santiago Herzog';
    $request->snapshot->satisfiesPzs = false;
    $request->snapshot->selfLink = 'voluptatum';
    $request->snapshot->selfLinkWithId = 'cupiditate';
    $request->snapshot->snapshotEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->snapshotEncryptionKey->kmsKeyName = 'minima';
    $request->snapshot->snapshotEncryptionKey->kmsKeyServiceAccount = 'placeat';
    $request->snapshot->snapshotEncryptionKey->rawKey = 'enim';
    $request->snapshot->snapshotEncryptionKey->rsaEncryptedKey = 'neque';
    $request->snapshot->snapshotEncryptionKey->sha256 = 'in';
    $request->snapshot->snapshotType = SnapshotSnapshotTypeEnum::STANDARD;
    $request->snapshot->sourceDisk = 'eum';
    $request->snapshot->sourceDiskEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyName = 'modi';
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyServiceAccount = 'corporis';
    $request->snapshot->sourceDiskEncryptionKey->rawKey = 'magnam';
    $request->snapshot->sourceDiskEncryptionKey->rsaEncryptedKey = 'voluptates';
    $request->snapshot->sourceDiskEncryptionKey->sha256 = 'maiores';
    $request->snapshot->sourceDiskForRecoveryCheckpoint = 'tempore';
    $request->snapshot->sourceDiskId = 'aperiam';
    $request->snapshot->sourceInstantSnapshot = 'libero';
    $request->snapshot->sourceInstantSnapshotId = 'ratione';
    $request->snapshot->sourceSnapshotSchedulePolicy = 'labore';
    $request->snapshot->sourceSnapshotSchedulePolicyId = 'totam';
    $request->snapshot->status = SnapshotStatusEnum::FAILED;
    $request->snapshot->storageBytes = 'voluptas';
    $request->snapshot->storageBytesStatus = SnapshotStorageBytesStatusEnum::UP_TO_DATE;
    $request->snapshot->storageLocations = [
        'minus',
    ];
    $request->snapshot->userLicenses = [
        'nostrum',
        'est',
        'impedit',
    ];
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->disk = 'odit';
    $request->fields = 'repellat';
    $request->guestFlush = false;
    $request->key = 'pariatur';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->project = 'reprehenderit';
    $request->quotaUser = 'aperiam';
    $request->requestId = 'odio';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'in';
    $request->userIp = 'ducimus';
    $request->zone = 'excepturi';

    $requestSecurity = new ComputeDisksCreateSnapshotSecurity();
    $requestSecurity->option1 = new ComputeDisksCreateSnapshotSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksCreateSnapshot($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksDelete

Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ducimus';
    $request->disk = 'voluptate';
    $request->fields = 'pariatur';
    $request->key = 'itaque';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->project = 'optio';
    $request->quotaUser = 'ex';
    $request->requestId = 'quaerat';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'placeat';
    $request->zone = 'quidem';

    $requestSecurity = new ComputeDisksDeleteSecurity();
    $requestSecurity->option1 = new ComputeDisksDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksGet

Returns the specified persistent disk.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'modi';
    $request->disk = 'ipsa';
    $request->fields = 'sint';
    $request->key = 'vero';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->project = 'repudiandae';
    $request->quotaUser = 'cum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'earum';
    $request->userIp = 'veniam';
    $request->zone = 'animi';

    $requestSecurity = new ComputeDisksGetSecurity();
    $requestSecurity->option1 = new ComputeDisksGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksGet($request, $requestSecurity);

    if ($response->disk !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->fields = 'necessitatibus';
    $request->key = 'nobis';
    $request->oauthToken = 'ipsa';
    $request->optionsRequestedPolicyVersion = 497357;
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'veritatis';
    $request->resource = 'quasi';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'pariatur';
    $request->userIp = 'libero';
    $request->zone = 'excepturi';

    $requestSecurity = new ComputeDisksGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeDisksGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksInsert

Creates a persistent disk in the specified project using the data in the request. You can create a disk from a source (sourceImage, sourceSnapshot, or sourceDisk) or create an empty 500 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Disk;
use \OpenAPI\OpenAPI\Models\Shared\DiskArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskAsyncReplication;
use \OpenAPI\OpenAPI\Models\Shared\DiskAsyncReplicationList;
use \OpenAPI\OpenAPI\Models\Shared\CustomerEncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\GuestOsFeature;
use \OpenAPI\OpenAPI\Models\Shared\GuestOsFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskParams;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatusAsyncReplicationStatus;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatusAsyncReplicationStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskStorageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->disk = new Disk();
    $request->disk->architecture = DiskArchitectureEnum::ARM64;
    $request->disk->asyncPrimaryDisk = new DiskAsyncReplication();
    $request->disk->asyncPrimaryDisk->consistencyGroupPolicy = 'aliquam';
    $request->disk->asyncPrimaryDisk->consistencyGroupPolicyId = 'nostrum';
    $request->disk->asyncPrimaryDisk->disk = 'doloribus';
    $request->disk->asyncPrimaryDisk->diskId = 'eligendi';
    $request->disk->asyncSecondaryDisks = [
        'enim' => new DiskAsyncReplicationList(),
        'hic' => new DiskAsyncReplicationList(),
        'animi' => new DiskAsyncReplicationList(),
    ];
    $request->disk->creationTimestamp = 'quas';
    $request->disk->description = 'totam';
    $request->disk->diskEncryptionKey = new CustomerEncryptionKey();
    $request->disk->diskEncryptionKey->kmsKeyName = 'molestias';
    $request->disk->diskEncryptionKey->kmsKeyServiceAccount = 'odio';
    $request->disk->diskEncryptionKey->rawKey = 'eaque';
    $request->disk->diskEncryptionKey->rsaEncryptedKey = 'saepe';
    $request->disk->diskEncryptionKey->sha256 = 'architecto';
    $request->disk->enableConfidentialCompute = false;
    $request->disk->eraseWindowsVssSignature = false;
    $request->disk->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->disk->id = 'iste';
    $request->disk->interface = DiskInterfaceEnum::UNSPECIFIED;
    $request->disk->kind = 'tempore';
    $request->disk->labelFingerprint = 'libero';
    $request->disk->labels = [
        'doloremque' => 'delectus',
    ];
    $request->disk->lastAttachTimestamp = 'impedit';
    $request->disk->lastDetachTimestamp = 'cum';
    $request->disk->licenseCodes = [
        'adipisci',
    ];
    $request->disk->licenses = [
        'deserunt',
        'doloremque',
        'quis',
        'veniam',
    ];
    $request->disk->locationHint = 'libero';
    $request->disk->locked = false;
    $request->disk->multiWriter = false;
    $request->disk->name = 'Mae Krajcik';
    $request->disk->options = 'non';
    $request->disk->params = new DiskParams();
    $request->disk->params->resourceManagerTags = [
        'itaque' => 'sed',
        'asperiores' => 'veniam',
    ];
    $request->disk->physicalBlockSizeBytes = 'consequuntur';
    $request->disk->provisionedIops = 'facere';
    $request->disk->provisionedThroughput = 'laudantium';
    $request->disk->region = 'odit';
    $request->disk->replicaZones = [
        'amet',
        'exercitationem',
        'ab',
        'velit',
    ];
    $request->disk->resourcePolicies = [
        'tempore',
        'nisi',
        'voluptatibus',
    ];
    $request->disk->resourceStatus = new DiskResourceStatus();
    $request->disk->resourceStatus->asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus();
    $request->disk->resourceStatus->asyncPrimaryDisk->state = DiskResourceStatusAsyncReplicationStatusStateEnum::CREATED;
    $request->disk->resourceStatus->asyncSecondaryDisks = [
        'distinctio' => new DiskResourceStatusAsyncReplicationStatus(),
        'nisi' => new DiskResourceStatusAsyncReplicationStatus(),
        'quis' => new DiskResourceStatusAsyncReplicationStatus(),
    ];
    $request->disk->satisfiesPzs = false;
    $request->disk->selfLink = 'nisi';
    $request->disk->selfLinkWithId = 'libero';
    $request->disk->sizeGb = 'minus';
    $request->disk->sourceConsistencyGroupPolicy = 'facere';
    $request->disk->sourceConsistencyGroupPolicyId = 'facilis';
    $request->disk->sourceDisk = 'ipsum';
    $request->disk->sourceDiskId = 'ad';
    $request->disk->sourceImage = 'voluptatibus';
    $request->disk->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->disk->sourceImageEncryptionKey->kmsKeyName = 'voluptatibus';
    $request->disk->sourceImageEncryptionKey->kmsKeyServiceAccount = 'consequuntur';
    $request->disk->sourceImageEncryptionKey->rawKey = 'debitis';
    $request->disk->sourceImageEncryptionKey->rsaEncryptedKey = 'labore';
    $request->disk->sourceImageEncryptionKey->sha256 = 'rerum';
    $request->disk->sourceImageId = 'eos';
    $request->disk->sourceInstantSnapshot = 'reprehenderit';
    $request->disk->sourceInstantSnapshotId = 'nostrum';
    $request->disk->sourceSnapshot = 'neque';
    $request->disk->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->disk->sourceSnapshotEncryptionKey->kmsKeyName = 'iusto';
    $request->disk->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'est';
    $request->disk->sourceSnapshotEncryptionKey->rawKey = 'rem';
    $request->disk->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'eligendi';
    $request->disk->sourceSnapshotEncryptionKey->sha256 = 'fugiat';
    $request->disk->sourceSnapshotId = 'unde';
    $request->disk->sourceStorageObject = 'officiis';
    $request->disk->status = DiskStatusEnum::FAILED;
    $request->disk->storagePool = 'dolor';
    $request->disk->storageType = DiskStorageTypeEnum::HDD;
    $request->disk->type = 'error';
    $request->disk->userLicenses = [
        'vitae',
        'dignissimos',
        'esse',
        'fugiat',
    ];
    $request->disk->users = [
        'aspernatur',
        'enim',
    ];
    $request->disk->zone = 'delectus';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'libero';
    $request->fields = 'illo';
    $request->key = 'ab';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'saepe';
    $request->requestId = 'tempore';
    $request->sourceImage = 'veniam';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'reiciendis';
    $request->userIp = 'earum';
    $request->zone = 'reprehenderit';

    $requestSecurity = new ComputeDisksInsertSecurity();
    $requestSecurity->option1 = new ComputeDisksInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksList

Retrieves a list of persistent disks contained within the specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quisquam';
    $request->fields = 'sequi';
    $request->filter = 'nihil';
    $request->key = 'deleniti';
    $request->maxResults = 75566;
    $request->oauthToken = 'labore';
    $request->orderBy = 'assumenda';
    $request->pageToken = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'quisquam';
    $request->quotaUser = 'provident';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'repudiandae';
    $request->userIp = 'consequatur';
    $request->zone = 'maxime';

    $requestSecurity = new ComputeDisksListSecurity();
    $requestSecurity->option1 = new ComputeDisksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksList($request, $requestSecurity);

    if ($response->diskList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksRemoveResourcePolicies

Removes resource policies from a disk.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksRemoveResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DisksRemoveResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksRemoveResourcePoliciesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksRemoveResourcePoliciesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksRemoveResourcePoliciesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksRemoveResourcePoliciesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->disksRemoveResourcePoliciesRequest = new DisksRemoveResourcePoliciesRequest();
    $request->disksRemoveResourcePoliciesRequest->resourcePolicies = [
        'expedita',
        'quas',
        'provident',
    ];
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->disk = 'corporis';
    $request->fields = 'vero';
    $request->key = 'similique';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->project = 'iure';
    $request->quotaUser = 'dolorem';
    $request->requestId = 'commodi';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'commodi';
    $request->userIp = 'aut';
    $request->zone = 'voluptatem';

    $requestSecurity = new ComputeDisksRemoveResourcePoliciesSecurity();
    $requestSecurity->option1 = new ComputeDisksRemoveResourcePoliciesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksRemoveResourcePolicies($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksResize

Resizes the specified persistent disk. You can only increase the size of the disk.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksResizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DisksResizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksResizeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksResizeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksResizeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksResizeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->disksResizeRequest = new DisksResizeRequest();
    $request->disksResizeRequest->sizeGb = 'quae';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'praesentium';
    $request->disk = 'quidem';
    $request->fields = 'cum';
    $request->key = 'amet';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'laudantium';
    $request->requestId = 'doloremque';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'iusto';
    $request->userIp = 'amet';
    $request->zone = 'provident';

    $requestSecurity = new ComputeDisksResizeSecurity();
    $requestSecurity->option1 = new ComputeDisksResizeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksResize($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ZoneSetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\ConditionIamEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionSysEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfig;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCloudAuditOptions;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationLoggingOptions;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationLoggingOptionsPermissionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCloudAuditOptionsLogNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCounterOptions;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCounterOptionsCustomField;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigDataAccessOptions;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigDataAccessOptionsLogModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->zoneSetPolicyRequest = new ZoneSetPolicyRequest();
    $request->zoneSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->etag = 'provident';
    $request->zoneSetPolicyRequest->policy = new Policy();
    $request->zoneSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->zoneSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->policy->etag = 'nemo';
    $request->zoneSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->zoneSetPolicyRequest->policy->version = 930840;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'sint';
    $request->key = 'accusamus';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->project = 'totam';
    $request->quotaUser = 'dicta';
    $request->resource = 'voluptatem';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'dolor';
    $request->userIp = 'sunt';
    $request->zone = 'a';

    $requestSecurity = new ComputeDisksSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeDisksSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksSetLabels

Sets the labels on a disk. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ZoneSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->zoneSetLabelsRequest = new ZoneSetLabelsRequest();
    $request->zoneSetLabelsRequest->labelFingerprint = 'occaecati';
    $request->zoneSetLabelsRequest->labels = [
        'beatae' => 'at',
        'labore' => 'minus',
        'esse' => 'voluptatem',
    ];
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'aperiam';
    $request->key = 'dignissimos';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->project = 'velit';
    $request->quotaUser = 'porro';
    $request->requestId = 'provident';
    $request->resource = 'consectetur';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'dignissimos';
    $request->userIp = 'consectetur';
    $request->zone = 'soluta';

    $requestSecurity = new ComputeDisksSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeDisksSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksStartAsyncReplication

Starts asynchronous replication. Must be invoked on the primary disk.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksStartAsyncReplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DisksStartAsyncReplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksStartAsyncReplicationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksStartAsyncReplicationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksStartAsyncReplicationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksStartAsyncReplicationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->disksStartAsyncReplicationRequest = new DisksStartAsyncReplicationRequest();
    $request->disksStartAsyncReplicationRequest->asyncSecondaryDisk = 'temporibus';
    $request->accessToken = 'officia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tenetur';
    $request->disk = 'aspernatur';
    $request->fields = 'quo';
    $request->key = 'itaque';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->project = 'laborum';
    $request->quotaUser = 'dignissimos';
    $request->requestId = 'vero';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'consectetur';
    $request->userIp = 'repellat';
    $request->zone = 'explicabo';

    $requestSecurity = new ComputeDisksStartAsyncReplicationSecurity();
    $requestSecurity->option1 = new ComputeDisksStartAsyncReplicationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksStartAsyncReplication($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksStopAsyncReplication

Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksStopAsyncReplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DisksStopAsyncReplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksStopAsyncReplicationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksStopAsyncReplicationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksStopAsyncReplicationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksStopAsyncReplicationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->disksStopAsyncReplicationRequest = new DisksStopAsyncReplicationRequest();
    $request->disksStopAsyncReplicationRequest->asyncSecondaryDisk = 'exercitationem';
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->disk = 'illo';
    $request->fields = 'hic';
    $request->key = 'deserunt';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'non';
    $request->quotaUser = 'distinctio';
    $request->requestId = 'in';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'labore';
    $request->userIp = 'numquam';
    $request->zone = 'repudiandae';

    $requestSecurity = new ComputeDisksStopAsyncReplicationSecurity();
    $requestSecurity->option1 = new ComputeDisksStopAsyncReplicationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksStopAsyncReplication($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksStopGroupAsyncReplication

Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksStopGroupAsyncReplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DisksStopGroupAsyncReplicationResource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksStopGroupAsyncReplicationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksStopGroupAsyncReplicationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksStopGroupAsyncReplicationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksStopGroupAsyncReplicationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->disksStopGroupAsyncReplicationResource = new DisksStopGroupAsyncReplicationResource();
    $request->disksStopGroupAsyncReplicationResource->resourcePolicy = 'in';
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'rem';
    $request->fields = 'aperiam';
    $request->key = 'odit';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'enim';
    $request->quotaUser = 'voluptate';
    $request->requestId = 'similique';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'libero';
    $request->userIp = 'magnam';
    $request->zone = 'sit';

    $requestSecurity = new ComputeDisksStopGroupAsyncReplicationSecurity();
    $requestSecurity->option1 = new ComputeDisksStopGroupAsyncReplicationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksStopGroupAsyncReplication($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'nesciunt',
        'mollitia',
    ];
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nostrum';
    $request->fields = 'molestiae';
    $request->key = 'veniam';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->project = 'ab';
    $request->quotaUser = 'modi';
    $request->resource = 'aut';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'eveniet';
    $request->userIp = 'odio';
    $request->zone = 'commodi';

    $requestSecurity = new ComputeDisksTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeDisksTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDisksUpdate

Updates the specified disk with the data included in the request. The update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Disk;
use \OpenAPI\OpenAPI\Models\Shared\DiskArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskAsyncReplication;
use \OpenAPI\OpenAPI\Models\Shared\DiskAsyncReplicationList;
use \OpenAPI\OpenAPI\Models\Shared\CustomerEncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\GuestOsFeature;
use \OpenAPI\OpenAPI\Models\Shared\GuestOsFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskParams;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatusAsyncReplicationStatus;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatusAsyncReplicationStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskStorageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->disk1 = new Disk();
    $request->disk1->architecture = DiskArchitectureEnum::X8664;
    $request->disk1->asyncPrimaryDisk = new DiskAsyncReplication();
    $request->disk1->asyncPrimaryDisk->consistencyGroupPolicy = 'possimus';
    $request->disk1->asyncPrimaryDisk->consistencyGroupPolicyId = 'voluptate';
    $request->disk1->asyncPrimaryDisk->disk = 'consectetur';
    $request->disk1->asyncPrimaryDisk->diskId = 'nesciunt';
    $request->disk1->asyncSecondaryDisks = [
        'itaque' => new DiskAsyncReplicationList(),
        'minus' => new DiskAsyncReplicationList(),
    ];
    $request->disk1->creationTimestamp = 'sunt';
    $request->disk1->description = 'distinctio';
    $request->disk1->diskEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->diskEncryptionKey->kmsKeyName = 'iusto';
    $request->disk1->diskEncryptionKey->kmsKeyServiceAccount = 'quas';
    $request->disk1->diskEncryptionKey->rawKey = 'et';
    $request->disk1->diskEncryptionKey->rsaEncryptedKey = 'facilis';
    $request->disk1->diskEncryptionKey->sha256 = 'amet';
    $request->disk1->enableConfidentialCompute = false;
    $request->disk1->eraseWindowsVssSignature = false;
    $request->disk1->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->disk1->id = 'fuga';
    $request->disk1->interface = DiskInterfaceEnum::NVME;
    $request->disk1->kind = 'rem';
    $request->disk1->labelFingerprint = 'aut';
    $request->disk1->labels = [
        'laudantium' => 'repellendus',
        'veritatis' => 'quae',
        'eaque' => 'saepe',
    ];
    $request->disk1->lastAttachTimestamp = 'delectus';
    $request->disk1->lastDetachTimestamp = 'mollitia';
    $request->disk1->licenseCodes = [
        'officia',
        'sed',
        'voluptatem',
        'alias',
    ];
    $request->disk1->licenses = [
        'hic',
        'voluptatem',
        'incidunt',
        'qui',
    ];
    $request->disk1->locationHint = 'qui';
    $request->disk1->locked = false;
    $request->disk1->multiWriter = false;
    $request->disk1->name = 'Mrs. Kerry Cassin';
    $request->disk1->options = 'optio';
    $request->disk1->params = new DiskParams();
    $request->disk1->params->resourceManagerTags = [
        'molestias' => 'officia',
        'libero' => 'totam',
        'sequi' => 'aliquid',
        'ea' => 'impedit',
    ];
    $request->disk1->physicalBlockSizeBytes = 'ducimus';
    $request->disk1->provisionedIops = 'odit';
    $request->disk1->provisionedThroughput = 'velit';
    $request->disk1->region = 'reiciendis';
    $request->disk1->replicaZones = [
        'nulla',
        'laborum',
        'natus',
        'accusamus',
    ];
    $request->disk1->resourcePolicies = [
        'nisi',
    ];
    $request->disk1->resourceStatus = new DiskResourceStatus();
    $request->disk1->resourceStatus->asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus();
    $request->disk1->resourceStatus->asyncPrimaryDisk->state = DiskResourceStatusAsyncReplicationStatusStateEnum::STOPPED;
    $request->disk1->resourceStatus->asyncSecondaryDisks = [
        'voluptates' => new DiskResourceStatusAsyncReplicationStatus(),
        'non' => new DiskResourceStatusAsyncReplicationStatus(),
        'rem' => new DiskResourceStatusAsyncReplicationStatus(),
        'quia' => new DiskResourceStatusAsyncReplicationStatus(),
    ];
    $request->disk1->satisfiesPzs = false;
    $request->disk1->selfLink = 'ullam';
    $request->disk1->selfLinkWithId = 'quisquam';
    $request->disk1->sizeGb = 'dicta';
    $request->disk1->sourceConsistencyGroupPolicy = 'voluptatibus';
    $request->disk1->sourceConsistencyGroupPolicyId = 'eligendi';
    $request->disk1->sourceDisk = 'quae';
    $request->disk1->sourceDiskId = 'officiis';
    $request->disk1->sourceImage = 'architecto';
    $request->disk1->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->sourceImageEncryptionKey->kmsKeyName = 'architecto';
    $request->disk1->sourceImageEncryptionKey->kmsKeyServiceAccount = 'enim';
    $request->disk1->sourceImageEncryptionKey->rawKey = 'optio';
    $request->disk1->sourceImageEncryptionKey->rsaEncryptedKey = 'rem';
    $request->disk1->sourceImageEncryptionKey->sha256 = 'perferendis';
    $request->disk1->sourceImageId = 'facilis';
    $request->disk1->sourceInstantSnapshot = 'reiciendis';
    $request->disk1->sourceInstantSnapshotId = 'a';
    $request->disk1->sourceSnapshot = 'iste';
    $request->disk1->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->sourceSnapshotEncryptionKey->kmsKeyName = 'dicta';
    $request->disk1->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'quos';
    $request->disk1->sourceSnapshotEncryptionKey->rawKey = 'ullam';
    $request->disk1->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'dolore';
    $request->disk1->sourceSnapshotEncryptionKey->sha256 = 'modi';
    $request->disk1->sourceSnapshotId = 'itaque';
    $request->disk1->sourceStorageObject = 'maxime';
    $request->disk1->status = DiskStatusEnum::DELETING;
    $request->disk1->storagePool = 'consequuntur';
    $request->disk1->storageType = DiskStorageTypeEnum::SSD;
    $request->disk1->type = 'vero';
    $request->disk1->userLicenses = [
        'impedit',
        'porro',
        'accusamus',
        'totam',
    ];
    $request->disk1->users = [
        'ab',
        'sint',
        'nihil',
        'esse',
    ];
    $request->disk1->zone = 'iure';
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->diskPathParameter = 'vel';
    $request->fields = 'neque';
    $request->key = 'corporis';
    $request->oauthToken = 'voluptas';
    $request->paths = [
        'officia',
    ];
    $request->prettyPrint = false;
    $request->project = 'reprehenderit';
    $request->quotaUser = 'distinctio';
    $request->requestId = 'eius';
    $request->updateMask = 'ipsa';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'accusantium';
    $request->zone = 'veniam';

    $requestSecurity = new ComputeDisksUpdateSecurity();
    $requestSecurity->option1 = new ComputeDisksUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->disks->computeDisksUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
