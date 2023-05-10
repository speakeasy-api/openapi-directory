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
        'impedit',
        'officiis',
        'esse',
        'necessitatibus',
    ];
    $request->accessToken = 'sed';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nesciunt';
    $request->disk = 'expedita';
    $request->fields = 'eum';
    $request->key = 'vel';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'exercitationem';
    $request->requestId = 'ab';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'autem';
    $request->userIp = 'nobis';
    $request->zone = 'laboriosam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'exercitationem';
    $request->fields = 'necessitatibus';
    $request->filter = 'quasi';
    $request->includeAllScopes = false;
    $request->key = 'nisi';
    $request->maxResults = 871103;
    $request->oauthToken = 'vero';
    $request->orderBy = 'est';
    $request->pageToken = 'harum';
    $request->prettyPrint = false;
    $request->project = 'sequi';
    $request->quotaUser = 'doloribus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'optio';
    $request->userIp = 'occaecati';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->bulkInsertDiskResource = new BulkInsertDiskResource();
    $request->bulkInsertDiskResource->sourceConsistencyGroupPolicy = 'voluptate';
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptas';
    $request->fields = 'numquam';
    $request->key = 'nemo';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->project = 'eius';
    $request->quotaUser = 'aspernatur';
    $request->requestId = 'ducimus';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'laudantium';
    $request->zone = 'incidunt';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->snapshot = new Snapshot();
    $request->snapshot->architecture = SnapshotArchitectureEnum::ARM64;
    $request->snapshot->autoCreated = false;
    $request->snapshot->chainName = 'fugiat';
    $request->snapshot->creationSizeBytes = 'dicta';
    $request->snapshot->creationTimestamp = 'nisi';
    $request->snapshot->description = 'consequuntur';
    $request->snapshot->diskSizeGb = 'consectetur';
    $request->snapshot->downloadBytes = 'aperiam';
    $request->snapshot->guestFlush = false;
    $request->snapshot->id = 'cupiditate';
    $request->snapshot->kind = 'reiciendis';
    $request->snapshot->labelFingerprint = 'soluta';
    $request->snapshot->labels = [
        'omnis' => 'eos',
    ];
    $request->snapshot->licenseCodes = [
        'iste',
        'magni',
        'inventore',
    ];
    $request->snapshot->licenses = [
        'accusamus',
        'voluptatibus',
        'distinctio',
    ];
    $request->snapshot->locationHint = 'omnis';
    $request->snapshot->name = 'Darrell Lang';
    $request->snapshot->satisfiesPzs = false;
    $request->snapshot->selfLink = 'temporibus';
    $request->snapshot->snapshotEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->snapshotEncryptionKey->kmsKeyName = 'quos';
    $request->snapshot->snapshotEncryptionKey->kmsKeyServiceAccount = 'commodi';
    $request->snapshot->snapshotEncryptionKey->rawKey = 'itaque';
    $request->snapshot->snapshotEncryptionKey->rsaEncryptedKey = 'commodi';
    $request->snapshot->snapshotEncryptionKey->sha256 = 'totam';
    $request->snapshot->snapshotType = SnapshotSnapshotTypeEnum::STANDARD;
    $request->snapshot->sourceDisk = 'modi';
    $request->snapshot->sourceDiskEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyName = 'nam';
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyServiceAccount = 'vero';
    $request->snapshot->sourceDiskEncryptionKey->rawKey = 'voluptatem';
    $request->snapshot->sourceDiskEncryptionKey->rsaEncryptedKey = 'ipsam';
    $request->snapshot->sourceDiskEncryptionKey->sha256 = 'vel';
    $request->snapshot->sourceDiskId = 'alias';
    $request->snapshot->sourceSnapshotSchedulePolicy = 'quasi';
    $request->snapshot->sourceSnapshotSchedulePolicyId = 'non';
    $request->snapshot->status = SnapshotStatusEnum::UPLOADING;
    $request->snapshot->storageBytes = 'enim';
    $request->snapshot->storageBytesStatus = SnapshotStorageBytesStatusEnum::UP_TO_DATE;
    $request->snapshot->storageLocations = [
        'deserunt',
        'esse',
        'nemo',
        'reprehenderit',
    ];
    $request->snapshot->userLicenses = [
        'quis',
        'sint',
        'accusamus',
    ];
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'necessitatibus';
    $request->disk = 'asperiores';
    $request->fields = 'ex';
    $request->guestFlush = false;
    $request->key = 'voluptas';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'quae';
    $request->requestId = 'minus';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'laborum';
    $request->userIp = 'consectetur';
    $request->zone = 'velit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magni';
    $request->disk = 'soluta';
    $request->fields = 'repudiandae';
    $request->key = 'nam';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->project = 'iusto';
    $request->quotaUser = 'voluptate';
    $request->requestId = 'sequi';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'neque';
    $request->userIp = 'quo';
    $request->zone = 'deleniti';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatibus';
    $request->disk = 'vel';
    $request->fields = 'magnam';
    $request->key = 'quibusdam';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'facere';
    $request->quotaUser = 'libero';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'quia';
    $request->zone = 'porro';

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
    $request->accessToken = 'velit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusantium';
    $request->fields = 'vel';
    $request->key = 'ea';
    $request->oauthToken = 'beatae';
    $request->optionsRequestedPolicyVersion = 877751;
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'eum';
    $request->resource = 'velit';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'perspiciatis';
    $request->userIp = 'earum';
    $request->zone = 'dicta';

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
    $request->disk->architecture = DiskArchitectureEnum::X8664;
    $request->disk->asyncPrimaryDisk = new DiskAsyncReplication();
    $request->disk->asyncPrimaryDisk->consistencyGroupPolicy = 'iste';
    $request->disk->asyncPrimaryDisk->consistencyGroupPolicyId = 'itaque';
    $request->disk->asyncPrimaryDisk->disk = 'alias';
    $request->disk->asyncPrimaryDisk->diskId = 'nisi';
    $request->disk->asyncSecondaryDisks = [
        'velit' => new DiskAsyncReplicationList(),
        'laborum' => new DiskAsyncReplicationList(),
        'non' => new DiskAsyncReplicationList(),
        'dolor' => new DiskAsyncReplicationList(),
    ];
    $request->disk->creationTimestamp = 'iusto';
    $request->disk->description = 'sit';
    $request->disk->diskEncryptionKey = new CustomerEncryptionKey();
    $request->disk->diskEncryptionKey->kmsKeyName = 'doloremque';
    $request->disk->diskEncryptionKey->kmsKeyServiceAccount = 'consequatur';
    $request->disk->diskEncryptionKey->rawKey = 'officia';
    $request->disk->diskEncryptionKey->rsaEncryptedKey = 'recusandae';
    $request->disk->diskEncryptionKey->sha256 = 'ea';
    $request->disk->eraseWindowsVssSignature = false;
    $request->disk->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->disk->id = 'voluptas';
    $request->disk->interface = DiskInterfaceEnum::UNSPECIFIED;
    $request->disk->kind = 'placeat';
    $request->disk->labelFingerprint = 'perspiciatis';
    $request->disk->labels = [
        'deleniti' => 'a',
        'voluptate' => 'ullam',
        'unde' => 'necessitatibus',
    ];
    $request->disk->lastAttachTimestamp = 'animi';
    $request->disk->lastDetachTimestamp = 'impedit';
    $request->disk->licenseCodes = [
        'corporis',
        'est',
    ];
    $request->disk->licenses = [
        'esse',
        'labore',
        'veritatis',
    ];
    $request->disk->locationHint = 'vero';
    $request->disk->locked = false;
    $request->disk->multiWriter = false;
    $request->disk->name = 'Evelyn Bode';
    $request->disk->options = 'qui';
    $request->disk->params = new DiskParams();
    $request->disk->params->resourceManagerTags = [
        'ex' => 'nemo',
        'soluta' => 'libero',
        'rem' => 'dolorum',
    ];
    $request->disk->physicalBlockSizeBytes = 'odio';
    $request->disk->provisionedIops = 'fugit';
    $request->disk->provisionedThroughput = 'alias';
    $request->disk->region = 'magni';
    $request->disk->replicaZones = [
        'quae',
        'quae',
    ];
    $request->disk->resourcePolicies = [
        'neque',
        'exercitationem',
    ];
    $request->disk->resourceStatus = new DiskResourceStatus();
    $request->disk->resourceStatus->asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus();
    $request->disk->resourceStatus->asyncPrimaryDisk->state = DiskResourceStatusAsyncReplicationStatusStateEnum::STOPPING;
    $request->disk->resourceStatus->asyncSecondaryDisks = [
        'ipsum' => new DiskResourceStatusAsyncReplicationStatus(),
    ];
    $request->disk->satisfiesPzs = false;
    $request->disk->selfLink = 'unde';
    $request->disk->sizeGb = 'nulla';
    $request->disk->sourceConsistencyGroupPolicy = 'distinctio';
    $request->disk->sourceConsistencyGroupPolicyId = 'maxime';
    $request->disk->sourceDisk = 'quia';
    $request->disk->sourceDiskId = 'quia';
    $request->disk->sourceImage = 'nostrum';
    $request->disk->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->disk->sourceImageEncryptionKey->kmsKeyName = 'omnis';
    $request->disk->sourceImageEncryptionKey->kmsKeyServiceAccount = 'libero';
    $request->disk->sourceImageEncryptionKey->rawKey = 'dicta';
    $request->disk->sourceImageEncryptionKey->rsaEncryptedKey = 'id';
    $request->disk->sourceImageEncryptionKey->sha256 = 'libero';
    $request->disk->sourceImageId = 'fugiat';
    $request->disk->sourceSnapshot = 'officia';
    $request->disk->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->disk->sourceSnapshotEncryptionKey->kmsKeyName = 'quos';
    $request->disk->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'placeat';
    $request->disk->sourceSnapshotEncryptionKey->rawKey = 'sit';
    $request->disk->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'iusto';
    $request->disk->sourceSnapshotEncryptionKey->sha256 = 'ipsa';
    $request->disk->sourceSnapshotId = 'voluptates';
    $request->disk->sourceStorageObject = 'inventore';
    $request->disk->status = DiskStatusEnum::CREATING;
    $request->disk->storageType = DiskStorageTypeEnum::SSD;
    $request->disk->type = 'dolore';
    $request->disk->userLicenses = [
        'distinctio',
        'voluptatem',
        'autem',
        'esse',
    ];
    $request->disk->users = [
        'assumenda',
    ];
    $request->disk->zone = 'beatae';
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corrupti';
    $request->fields = 'molestiae';
    $request->key = 'provident';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->project = 'necessitatibus';
    $request->quotaUser = 'tempore';
    $request->requestId = 'sint';
    $request->sourceImage = 'ea';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'ipsam';
    $request->userIp = 'rerum';
    $request->zone = 'laudantium';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'at';
    $request->filter = 'alias';
    $request->key = 'quia';
    $request->maxResults = 694158;
    $request->oauthToken = 'fuga';
    $request->orderBy = 'repudiandae';
    $request->pageToken = 'accusantium';
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'officiis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'odio';
    $request->zone = 'praesentium';

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
        'corporis',
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'adipisci';
    $request->disk = 'recusandae';
    $request->fields = 'similique';
    $request->key = 'ut';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'quis';
    $request->quotaUser = 'beatae';
    $request->requestId = 'unde';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'delectus';
    $request->userIp = 'cupiditate';
    $request->zone = 'fugit';

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
    $request->disksResizeRequest->sizeGb = 'numquam';
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->disk = 'dignissimos';
    $request->fields = 'optio';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'expedita';
    $request->requestId = 'voluptatum';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'minima';
    $request->userIp = 'placeat';
    $request->zone = 'enim';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->zoneSetPolicyRequest = new ZoneSetPolicyRequest();
    $request->zoneSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->etag = 'minus';
    $request->zoneSetPolicyRequest->policy = new Policy();
    $request->zoneSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->zoneSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->policy->etag = 'corporis';
    $request->zoneSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->zoneSetPolicyRequest->policy->version = 914971;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aperiam';
    $request->fields = 'libero';
    $request->key = 'ratione';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'totam';
    $request->quotaUser = 'occaecati';
    $request->resource = 'voluptas';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'velit';
    $request->userIp = 'minus';
    $request->zone = 'fuga';

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
    $request->zoneSetLabelsRequest->labelFingerprint = 'est';
    $request->zoneSetLabelsRequest->labels = [
        'delectus' => 'tempore',
        'vero' => 'odit',
        'repellat' => 'pariatur',
        'nemo' => 'reprehenderit',
    ];
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'in';
    $request->key = 'ducimus';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'dolores';
    $request->quotaUser = 'error';
    $request->requestId = 'veritatis';
    $request->resource = 'ducimus';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'pariatur';
    $request->userIp = 'itaque';
    $request->zone = 'similique';

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
    $request->disksStartAsyncReplicationRequest->asyncSecondaryDisk = 'ex';
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officiis';
    $request->disk = 'placeat';
    $request->fields = 'quidem';
    $request->key = 'exercitationem';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->project = 'dolorem';
    $request->quotaUser = 'modi';
    $request->requestId = 'ipsa';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'vero';
    $request->userIp = 'sequi';
    $request->zone = 'repudiandae';

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksStopAsyncReplicationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksStopAsyncReplicationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksStopAsyncReplicationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksStopAsyncReplicationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veniam';
    $request->disk = 'animi';
    $request->fields = 'dolores';
    $request->key = 'nam';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'consequuntur';
    $request->quotaUser = 'necessitatibus';
    $request->requestId = 'nobis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'ducimus';
    $request->userIp = 'maiores';
    $request->zone = 'veritatis';

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
    $request->disksStopGroupAsyncReplicationResource->resourcePolicy = 'laboriosam';
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'occaecati';
    $request->key = 'nemo';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'nostrum';
    $request->quotaUser = 'doloribus';
    $request->requestId = 'eligendi';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'hic';
    $request->zone = 'animi';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'molestias',
        'odio',
        'eaque',
    ];
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quos';
    $request->fields = 'iste';
    $request->key = 'assumenda';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'libero';
    $request->quotaUser = 'velit';
    $request->resource = 'doloremque';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'cum';
    $request->zone = 'ipsum';

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
    $request->disk1->asyncPrimaryDisk->consistencyGroupPolicy = 'deserunt';
    $request->disk1->asyncPrimaryDisk->consistencyGroupPolicyId = 'doloremque';
    $request->disk1->asyncPrimaryDisk->disk = 'quis';
    $request->disk1->asyncPrimaryDisk->diskId = 'veniam';
    $request->disk1->asyncSecondaryDisks = [
        'architecto' => new DiskAsyncReplicationList(),
        'cupiditate' => new DiskAsyncReplicationList(),
        'molestiae' => new DiskAsyncReplicationList(),
    ];
    $request->disk1->creationTimestamp = 'eligendi';
    $request->disk1->description = 'possimus';
    $request->disk1->diskEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->diskEncryptionKey->kmsKeyName = 'non';
    $request->disk1->diskEncryptionKey->kmsKeyServiceAccount = 'magnam';
    $request->disk1->diskEncryptionKey->rawKey = 'itaque';
    $request->disk1->diskEncryptionKey->rsaEncryptedKey = 'sed';
    $request->disk1->diskEncryptionKey->sha256 = 'asperiores';
    $request->disk1->eraseWindowsVssSignature = false;
    $request->disk1->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->disk1->id = 'consequuntur';
    $request->disk1->interface = DiskInterfaceEnum::UNSPECIFIED;
    $request->disk1->kind = 'laudantium';
    $request->disk1->labelFingerprint = 'odit';
    $request->disk1->labels = [
        'amet' => 'exercitationem',
        'ab' => 'velit',
        'facilis' => 'tempore',
        'nisi' => 'voluptatibus',
    ];
    $request->disk1->lastAttachTimestamp = 'quaerat';
    $request->disk1->lastDetachTimestamp = 'blanditiis';
    $request->disk1->licenseCodes = [
        'nisi',
        'quis',
        'nisi',
    ];
    $request->disk1->licenses = [
        'minus',
        'facere',
        'facilis',
    ];
    $request->disk1->locationHint = 'ipsum';
    $request->disk1->locked = false;
    $request->disk1->multiWriter = false;
    $request->disk1->name = 'Shari Wiza';
    $request->disk1->options = 'labore';
    $request->disk1->params = new DiskParams();
    $request->disk1->params->resourceManagerTags = [
        'eos' => 'reprehenderit',
        'nostrum' => 'neque',
        'iusto' => 'est',
    ];
    $request->disk1->physicalBlockSizeBytes = 'rem';
    $request->disk1->provisionedIops = 'eligendi';
    $request->disk1->provisionedThroughput = 'fugiat';
    $request->disk1->region = 'unde';
    $request->disk1->replicaZones = [
        'ducimus',
        'dolor',
        'dicta',
        'error',
    ];
    $request->disk1->resourcePolicies = [
        'vitae',
        'dignissimos',
        'esse',
        'fugiat',
    ];
    $request->disk1->resourceStatus = new DiskResourceStatus();
    $request->disk1->resourceStatus->asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus();
    $request->disk1->resourceStatus->asyncPrimaryDisk->state = DiskResourceStatusAsyncReplicationStatusStateEnum::CREATED;
    $request->disk1->resourceStatus->asyncSecondaryDisks = [
        'enim' => new DiskResourceStatusAsyncReplicationStatus(),
    ];
    $request->disk1->satisfiesPzs = false;
    $request->disk1->selfLink = 'delectus';
    $request->disk1->sizeGb = 'iusto';
    $request->disk1->sourceConsistencyGroupPolicy = 'dignissimos';
    $request->disk1->sourceConsistencyGroupPolicyId = 'libero';
    $request->disk1->sourceDisk = 'illo';
    $request->disk1->sourceDiskId = 'ab';
    $request->disk1->sourceImage = 'incidunt';
    $request->disk1->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->sourceImageEncryptionKey->kmsKeyName = 'accusamus';
    $request->disk1->sourceImageEncryptionKey->kmsKeyServiceAccount = 'saepe';
    $request->disk1->sourceImageEncryptionKey->rawKey = 'tempore';
    $request->disk1->sourceImageEncryptionKey->rsaEncryptedKey = 'veniam';
    $request->disk1->sourceImageEncryptionKey->sha256 = 'eos';
    $request->disk1->sourceImageId = 'reiciendis';
    $request->disk1->sourceSnapshot = 'earum';
    $request->disk1->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->sourceSnapshotEncryptionKey->kmsKeyName = 'reprehenderit';
    $request->disk1->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'praesentium';
    $request->disk1->sourceSnapshotEncryptionKey->rawKey = 'nemo';
    $request->disk1->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'repellat';
    $request->disk1->sourceSnapshotEncryptionKey->sha256 = 'quisquam';
    $request->disk1->sourceSnapshotId = 'sequi';
    $request->disk1->sourceStorageObject = 'nihil';
    $request->disk1->status = DiskStatusEnum::FAILED;
    $request->disk1->storageType = DiskStorageTypeEnum::HDD;
    $request->disk1->type = 'labore';
    $request->disk1->userLicenses = [
        'aliquam',
        'quisquam',
        'provident',
        'laudantium',
    ];
    $request->disk1->users = [
        'consequatur',
        'maxime',
        'aspernatur',
        'nam',
    ];
    $request->disk1->zone = 'expedita';
    $request->accessToken = 'quas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repudiandae';
    $request->diskPathParameter = 'rerum';
    $request->fields = 'dignissimos';
    $request->key = 'corporis';
    $request->oauthToken = 'vero';
    $request->paths = [
        'repellendus',
        'iure',
        'dolorem',
    ];
    $request->prettyPrint = false;
    $request->project = 'commodi';
    $request->quotaUser = 'impedit';
    $request->requestId = 'commodi';
    $request->updateMask = 'aut';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'ad';
    $request->userIp = 'quae';
    $request->zone = 'amet';

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
