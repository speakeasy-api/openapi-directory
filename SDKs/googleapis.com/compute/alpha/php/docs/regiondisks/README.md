# regionDisks

### Available Operations

* [computeRegionDisksAddResourcePolicies](#computeregiondisksaddresourcepolicies) - Adds existing resource policies to a regional disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
* [computeRegionDisksBulkInsert](#computeregiondisksbulkinsert) - Bulk create a set of disks.
* [computeRegionDisksCreateSnapshot](#computeregiondiskscreatesnapshot) - Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.
* [computeRegionDisksDelete](#computeregiondisksdelete) - Deletes the specified regional persistent disk. Deleting a regional disk removes all the replicas of its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
* [computeRegionDisksGet](#computeregiondisksget) - Returns a specified regional persistent disk.
* [computeRegionDisksGetIamPolicy](#computeregiondisksgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeRegionDisksInsert](#computeregiondisksinsert) - Creates a persistent regional disk in the specified project using the data included in the request.
* [computeRegionDisksList](#computeregiondiskslist) - Retrieves the list of persistent disks contained within the specified region.
* [computeRegionDisksRemoveResourcePolicies](#computeregiondisksremoveresourcepolicies) - Removes resource policies from a regional disk.
* [computeRegionDisksResize](#computeregiondisksresize) - Resizes the specified regional persistent disk.
* [computeRegionDisksSetIamPolicy](#computeregiondiskssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeRegionDisksSetLabels](#computeregiondiskssetlabels) - Sets the labels on the target regional disk.
* [computeRegionDisksStartAsyncReplication](#computeregiondisksstartasyncreplication) - Starts asynchronous replication. Must be invoked on the primary disk.
* [computeRegionDisksStopAsyncReplication](#computeregiondisksstopasyncreplication) - Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.
* [computeRegionDisksStopGroupAsyncReplication](#computeregiondisksstopgroupasyncreplication) - Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope.
* [computeRegionDisksTestIamPermissions](#computeregiondiskstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionDisksUpdate](#computeregiondisksupdate) - Update the specified disk with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.

## computeRegionDisksAddResourcePolicies

Adds existing resource policies to a regional disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksAddResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionDisksAddResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksAddResourcePoliciesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksAddResourcePoliciesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksAddResourcePoliciesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksAddResourcePoliciesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionDisksAddResourcePoliciesRequest = new RegionDisksAddResourcePoliciesRequest();
    $request->regionDisksAddResourcePoliciesRequest->resourcePolicies = [
        'voluptatem',
        'labore',
    ];
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'error';
    $request->disk = 'quod';
    $request->fields = 'asperiores';
    $request->key = 'ea';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'sed';
    $request->region = 'quasi';
    $request->requestId = 'nemo';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'quos';
    $request->userIp = 'commodi';

    $requestSecurity = new ComputeRegionDisksAddResourcePoliciesSecurity();
    $requestSecurity->option1 = new ComputeRegionDisksAddResourcePoliciesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksAddResourcePolicies($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDisksBulkInsert

Bulk create a set of disks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksBulkInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkInsertDiskResource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksBulkInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksBulkInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksBulkInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksBulkInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bulkInsertDiskResource = new BulkInsertDiskResource();
    $request->bulkInsertDiskResource->sourceConsistencyGroupPolicy = 'nam';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'laborum';
    $request->key = 'alias';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'autem';
    $request->region = 'architecto';
    $request->requestId = 'tempora';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'ab';
    $request->userIp = 'ad';

    $requestSecurity = new ComputeRegionDisksBulkInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionDisksBulkInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksBulkInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDisksCreateSnapshot

Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksCreateSnapshotRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksCreateSnapshotSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksCreateSnapshotSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksCreateSnapshotSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksCreateSnapshotRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->snapshot = new Snapshot();
    $request->snapshot->architecture = SnapshotArchitectureEnum::ARCHITECTURE_UNSPECIFIED;
    $request->snapshot->autoCreated = false;
    $request->snapshot->chainName = 'nostrum';
    $request->snapshot->creationSizeBytes = 'ex';
    $request->snapshot->creationTimestamp = 'totam';
    $request->snapshot->description = 'magni';
    $request->snapshot->diskSizeGb = 'sint';
    $request->snapshot->downloadBytes = 'occaecati';
    $request->snapshot->guestFlush = false;
    $request->snapshot->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->snapshot->id = 'voluptas';
    $request->snapshot->kind = 'architecto';
    $request->snapshot->labelFingerprint = 'officia';
    $request->snapshot->labels = [
        'quo' => 'in',
        'veritatis' => 'totam',
        'suscipit' => 'asperiores',
        'voluptatibus' => 'dolores',
    ];
    $request->snapshot->licenseCodes = [
        'tempore',
    ];
    $request->snapshot->licenses = [
        'fuga',
        'nihil',
    ];
    $request->snapshot->locationHint = 'dolor';
    $request->snapshot->maxRetentionDays = 823722;
    $request->snapshot->name = 'Marcus Bashirian';
    $request->snapshot->satisfiesPzs = false;
    $request->snapshot->selfLink = 'alias';
    $request->snapshot->selfLinkWithId = 'at';
    $request->snapshot->snapshotEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->snapshotEncryptionKey->kmsKeyName = 'dignissimos';
    $request->snapshot->snapshotEncryptionKey->kmsKeyServiceAccount = 'aliquid';
    $request->snapshot->snapshotEncryptionKey->rawKey = 'ad';
    $request->snapshot->snapshotEncryptionKey->rsaEncryptedKey = 'reprehenderit';
    $request->snapshot->snapshotEncryptionKey->sha256 = 'placeat';
    $request->snapshot->snapshotType = SnapshotSnapshotTypeEnum::ARCHIVE;
    $request->snapshot->sourceDisk = 'ex';
    $request->snapshot->sourceDiskEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyName = 'eius';
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyServiceAccount = 'ab';
    $request->snapshot->sourceDiskEncryptionKey->rawKey = 'distinctio';
    $request->snapshot->sourceDiskEncryptionKey->rsaEncryptedKey = 'facilis';
    $request->snapshot->sourceDiskEncryptionKey->sha256 = 'maiores';
    $request->snapshot->sourceDiskForRecoveryCheckpoint = 'aut';
    $request->snapshot->sourceDiskId = 'nostrum';
    $request->snapshot->sourceInstantSnapshot = 'veniam';
    $request->snapshot->sourceInstantSnapshotId = 'fugit';
    $request->snapshot->sourceSnapshotSchedulePolicy = 'ducimus';
    $request->snapshot->sourceSnapshotSchedulePolicyId = 'et';
    $request->snapshot->status = SnapshotStatusEnum::READY;
    $request->snapshot->storageBytes = 'eos';
    $request->snapshot->storageBytesStatus = SnapshotStorageBytesStatusEnum::UPDATING;
    $request->snapshot->storageLocations = [
        'architecto',
    ];
    $request->snapshot->userLicenses = [
        'assumenda',
        'suscipit',
        'consequatur',
        'aliquid',
    ];
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'beatae';
    $request->disk = 'soluta';
    $request->fields = 'sunt';
    $request->guestFlush = false;
    $request->key = 'rem';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->project = 'ducimus';
    $request->quotaUser = 'fugit';
    $request->region = 'quidem';
    $request->requestId = 'minus';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'placeat';
    $request->userIp = 'ratione';

    $requestSecurity = new ComputeRegionDisksCreateSnapshotSecurity();
    $requestSecurity->option1 = new ComputeRegionDisksCreateSnapshotSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksCreateSnapshot($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDisksDelete

Deletes the specified regional persistent disk. Deleting a regional disk removes all the replicas of its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ex';
    $request->disk = 'sint';
    $request->fields = 'dignissimos';
    $request->key = 'rerum';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'quas';
    $request->quotaUser = 'deleniti';
    $request->region = 'voluptatem';
    $request->requestId = 'reiciendis';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'rerum';
    $request->userIp = 'expedita';

    $requestSecurity = new ComputeRegionDisksDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionDisksDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDisksGet

Returns a specified regional persistent disk.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'neque';
    $request->disk = 'maxime';
    $request->fields = 'ab';
    $request->key = 'nostrum';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->project = 'eum';
    $request->quotaUser = 'molestiae';
    $request->region = 'alias';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'at';
    $request->userIp = 'quasi';

    $requestSecurity = new ComputeRegionDisksGetSecurity();
    $requestSecurity->option1 = new ComputeRegionDisksGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksGet($request, $requestSecurity);

    if ($response->disk !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDisksGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'blanditiis';
    $request->fields = 'sequi';
    $request->key = 'sunt';
    $request->oauthToken = 'vel';
    $request->optionsRequestedPolicyVersion = 351607;
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'debitis';
    $request->region = 'necessitatibus';
    $request->resource = 'harum';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'ex';

    $requestSecurity = new ComputeRegionDisksGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeRegionDisksGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDisksInsert

Creates a persistent regional disk in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksInsertRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->disk = new Disk();
    $request->disk->architecture = DiskArchitectureEnum::ARCHITECTURE_UNSPECIFIED;
    $request->disk->asyncPrimaryDisk = new DiskAsyncReplication();
    $request->disk->asyncPrimaryDisk->consistencyGroupPolicy = 'quaerat';
    $request->disk->asyncPrimaryDisk->consistencyGroupPolicyId = 'dicta';
    $request->disk->asyncPrimaryDisk->disk = 'quisquam';
    $request->disk->asyncPrimaryDisk->diskId = 'adipisci';
    $request->disk->asyncSecondaryDisks = [
        'alias' => new DiskAsyncReplicationList(),
    ];
    $request->disk->creationTimestamp = 'occaecati';
    $request->disk->description = 'perspiciatis';
    $request->disk->diskEncryptionKey = new CustomerEncryptionKey();
    $request->disk->diskEncryptionKey->kmsKeyName = 'deleniti';
    $request->disk->diskEncryptionKey->kmsKeyServiceAccount = 'dolor';
    $request->disk->diskEncryptionKey->rawKey = 'eum';
    $request->disk->diskEncryptionKey->rsaEncryptedKey = 'eum';
    $request->disk->diskEncryptionKey->sha256 = 'dolorem';
    $request->disk->enableConfidentialCompute = false;
    $request->disk->eraseWindowsVssSignature = false;
    $request->disk->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->disk->id = 'vel';
    $request->disk->interface = DiskInterfaceEnum::SCSI;
    $request->disk->kind = 'quibusdam';
    $request->disk->labelFingerprint = 'cumque';
    $request->disk->labels = [
        'expedita' => 'reprehenderit',
        'nulla' => 'reiciendis',
        'aliquid' => 'porro',
    ];
    $request->disk->lastAttachTimestamp = 'soluta';
    $request->disk->lastDetachTimestamp = 'aperiam';
    $request->disk->licenseCodes = [
        'nobis',
        'totam',
        'distinctio',
    ];
    $request->disk->licenses = [
        'aperiam',
        'praesentium',
    ];
    $request->disk->locationHint = 'recusandae';
    $request->disk->locked = false;
    $request->disk->multiWriter = false;
    $request->disk->name = 'Claudia Buckridge';
    $request->disk->options = 'in';
    $request->disk->params = new DiskParams();
    $request->disk->params->resourceManagerTags = [
        'repellendus' => 'saepe',
        'non' => 'a',
    ];
    $request->disk->physicalBlockSizeBytes = 'voluptates';
    $request->disk->provisionedIops = 'vero';
    $request->disk->provisionedThroughput = 'quae';
    $request->disk->region = 'doloremque';
    $request->disk->replicaZones = [
        'possimus',
    ];
    $request->disk->resourcePolicies = [
        'esse',
        'praesentium',
        'aperiam',
    ];
    $request->disk->resourceStatus = new DiskResourceStatus();
    $request->disk->resourceStatus->asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus();
    $request->disk->resourceStatus->asyncPrimaryDisk->state = DiskResourceStatusAsyncReplicationStatusStateEnum::STOPPED;
    $request->disk->resourceStatus->asyncSecondaryDisks = [
        'doloremque' => new DiskResourceStatusAsyncReplicationStatus(),
    ];
    $request->disk->satisfiesPzs = false;
    $request->disk->selfLink = 'minus';
    $request->disk->selfLinkWithId = 'eius';
    $request->disk->sizeGb = 'odio';
    $request->disk->sourceConsistencyGroupPolicy = 'rerum';
    $request->disk->sourceConsistencyGroupPolicyId = 'provident';
    $request->disk->sourceDisk = 'nostrum';
    $request->disk->sourceDiskId = 'perferendis';
    $request->disk->sourceImage = 'aliquam';
    $request->disk->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->disk->sourceImageEncryptionKey->kmsKeyName = 'accusantium';
    $request->disk->sourceImageEncryptionKey->kmsKeyServiceAccount = 'possimus';
    $request->disk->sourceImageEncryptionKey->rawKey = 'vel';
    $request->disk->sourceImageEncryptionKey->rsaEncryptedKey = 'minus';
    $request->disk->sourceImageEncryptionKey->sha256 = 'blanditiis';
    $request->disk->sourceImageId = 'soluta';
    $request->disk->sourceInstantSnapshot = 'quia';
    $request->disk->sourceInstantSnapshotId = 'similique';
    $request->disk->sourceSnapshot = 'ipsam';
    $request->disk->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->disk->sourceSnapshotEncryptionKey->kmsKeyName = 'a';
    $request->disk->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'alias';
    $request->disk->sourceSnapshotEncryptionKey->rawKey = 'perferendis';
    $request->disk->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'aspernatur';
    $request->disk->sourceSnapshotEncryptionKey->sha256 = 'sed';
    $request->disk->sourceSnapshotId = 'sit';
    $request->disk->sourceStorageObject = 'esse';
    $request->disk->status = DiskStatusEnum::RESTORING;
    $request->disk->storagePool = 'ut';
    $request->disk->storageType = DiskStorageTypeEnum::HDD;
    $request->disk->type = 'dolore';
    $request->disk->userLicenses = [
        'maiores',
        'cupiditate',
        'aperiam',
    ];
    $request->disk->users = [
        'sit',
    ];
    $request->disk->zone = 'iste';
    $request->accessToken = 'earum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequuntur';
    $request->fields = 'occaecati';
    $request->key = 'doloremque';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->quotaUser = 'quos';
    $request->region = 'accusamus';
    $request->requestId = 'quidem';
    $request->sourceImage = 'aliquam';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'itaque';
    $request->userIp = 'iste';

    $requestSecurity = new ComputeRegionDisksInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionDisksInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDisksList

Retrieves the list of persistent disks contained within the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'iure';
    $request->filter = 'ab';
    $request->key = 'recusandae';
    $request->maxResults = 611506;
    $request->oauthToken = 'sunt';
    $request->orderBy = 'corporis';
    $request->pageToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'alias';
    $request->quotaUser = 'ratione';
    $request->region = 'sed';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'rerum';
    $request->userIp = 'eos';

    $requestSecurity = new ComputeRegionDisksListSecurity();
    $requestSecurity->option1 = new ComputeRegionDisksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksList($request, $requestSecurity);

    if ($response->diskList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDisksRemoveResourcePolicies

Removes resource policies from a regional disk.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksRemoveResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionDisksRemoveResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksRemoveResourcePoliciesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksRemoveResourcePoliciesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksRemoveResourcePoliciesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksRemoveResourcePoliciesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionDisksRemoveResourcePoliciesRequest = new RegionDisksRemoveResourcePoliciesRequest();
    $request->regionDisksRemoveResourcePoliciesRequest->resourcePolicies = [
        'cupiditate',
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->disk = 'tempora';
    $request->fields = 'voluptate';
    $request->key = 'odio';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'earum';
    $request->quotaUser = 'nemo';
    $request->region = 'laboriosam';
    $request->requestId = 'aliquid';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'voluptates';
    $request->userIp = 'nemo';

    $requestSecurity = new ComputeRegionDisksRemoveResourcePoliciesSecurity();
    $requestSecurity->option1 = new ComputeRegionDisksRemoveResourcePoliciesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksRemoveResourcePolicies($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDisksResize

Resizes the specified regional persistent disk.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksResizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionDisksResizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksResizeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksResizeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksResizeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksResizeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionDisksResizeRequest = new RegionDisksResizeRequest();
    $request->regionDisksResizeRequest->sizeGb = 'in';
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->disk = 'nisi';
    $request->fields = 'magni';
    $request->key = 'iure';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'perspiciatis';
    $request->region = 'possimus';
    $request->requestId = 'atque';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'necessitatibus';
    $request->userIp = 'tempore';

    $requestSecurity = new ComputeRegionDisksResizeSecurity();
    $requestSecurity->option1 = new ComputeRegionDisksResizeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksResize($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDisksSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionSetPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionSetPolicyRequest = new RegionSetPolicyRequest();
    $request->regionSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->etag = 'numquam';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'at';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 141737;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officiis';
    $request->fields = 'sit';
    $request->key = 'expedita';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'deleniti';
    $request->quotaUser = 'repellat';
    $request->region = 'harum';
    $request->resource = 'atque';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'aliquid';

    $requestSecurity = new ComputeRegionDisksSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeRegionDisksSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDisksSetLabels

Sets the labels on the target regional disk.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionSetLabelsRequest = new RegionSetLabelsRequest();
    $request->regionSetLabelsRequest->labelFingerprint = 'similique';
    $request->regionSetLabelsRequest->labels = [
        'cum' => 'vel',
        'earum' => 'corrupti',
    ];
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'praesentium';
    $request->key = 'dicta';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'blanditiis';
    $request->region = 'nesciunt';
    $request->requestId = 'nam';
    $request->resource = 'inventore';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'animi';
    $request->userIp = 'autem';

    $requestSecurity = new ComputeRegionDisksSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeRegionDisksSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDisksStartAsyncReplication

Starts asynchronous replication. Must be invoked on the primary disk.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksStartAsyncReplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionDisksStartAsyncReplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksStartAsyncReplicationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksStartAsyncReplicationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksStartAsyncReplicationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksStartAsyncReplicationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionDisksStartAsyncReplicationRequest = new RegionDisksStartAsyncReplicationRequest();
    $request->regionDisksStartAsyncReplicationRequest->asyncSecondaryDisk = 'omnis';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'impedit';
    $request->disk = 'quis';
    $request->fields = 'nisi';
    $request->key = 'vitae';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'odit';
    $request->quotaUser = 'omnis';
    $request->region = 'placeat';
    $request->requestId = 'cumque';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'occaecati';
    $request->userIp = 'nemo';

    $requestSecurity = new ComputeRegionDisksStartAsyncReplicationSecurity();
    $requestSecurity->option1 = new ComputeRegionDisksStartAsyncReplicationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksStartAsyncReplication($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDisksStopAsyncReplication

Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksStopAsyncReplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionDisksStopAsyncReplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksStopAsyncReplicationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksStopAsyncReplicationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksStopAsyncReplicationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksStopAsyncReplicationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionDisksStopAsyncReplicationRequest = new RegionDisksStopAsyncReplicationRequest();
    $request->regionDisksStopAsyncReplicationRequest->asyncSecondaryDisk = 'eaque';
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'adipisci';
    $request->disk = 'occaecati';
    $request->fields = 'exercitationem';
    $request->key = 'excepturi';
    $request->oauthToken = 'illo';
    $request->prettyPrint = false;
    $request->project = 'quas';
    $request->quotaUser = 'facere';
    $request->region = 'fuga';
    $request->requestId = 'ab';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'magnam';
    $request->userIp = 'atque';

    $requestSecurity = new ComputeRegionDisksStopAsyncReplicationSecurity();
    $requestSecurity->option1 = new ComputeRegionDisksStopAsyncReplicationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksStopAsyncReplication($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDisksStopGroupAsyncReplication

Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksStopGroupAsyncReplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DisksStopGroupAsyncReplicationResource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksStopGroupAsyncReplicationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksStopGroupAsyncReplicationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksStopGroupAsyncReplicationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksStopGroupAsyncReplicationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->disksStopGroupAsyncReplicationResource = new DisksStopGroupAsyncReplicationResource();
    $request->disksStopGroupAsyncReplicationResource->resourcePolicy = 'nihil';
    $request->accessToken = 'quas';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsum';
    $request->fields = 'quisquam';
    $request->key = 'asperiores';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'inventore';
    $request->region = 'ab';
    $request->requestId = 'dolore';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'officia';

    $requestSecurity = new ComputeRegionDisksStopGroupAsyncReplicationSecurity();
    $requestSecurity->option1 = new ComputeRegionDisksStopGroupAsyncReplicationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksStopGroupAsyncReplication($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDisksTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'eaque',
    ];
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magni';
    $request->fields = 'nihil';
    $request->key = 'laborum';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->project = 'voluptatum';
    $request->quotaUser = 'animi';
    $request->region = 'reiciendis';
    $request->resource = 'qui';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'et';
    $request->userIp = 'voluptatum';

    $requestSecurity = new ComputeRegionDisksTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionDisksTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDisksUpdate

Update the specified disk with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksUpdateRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->disk1 = new Disk();
    $request->disk1->architecture = DiskArchitectureEnum::ARCHITECTURE_UNSPECIFIED;
    $request->disk1->asyncPrimaryDisk = new DiskAsyncReplication();
    $request->disk1->asyncPrimaryDisk->consistencyGroupPolicy = 'amet';
    $request->disk1->asyncPrimaryDisk->consistencyGroupPolicyId = 'iste';
    $request->disk1->asyncPrimaryDisk->disk = 'libero';
    $request->disk1->asyncPrimaryDisk->diskId = 'nesciunt';
    $request->disk1->asyncSecondaryDisks = [
        'recusandae' => new DiskAsyncReplicationList(),
        'deleniti' => new DiskAsyncReplicationList(),
        'iure' => new DiskAsyncReplicationList(),
        'quis' => new DiskAsyncReplicationList(),
    ];
    $request->disk1->creationTimestamp = 'eum';
    $request->disk1->description = 'eligendi';
    $request->disk1->diskEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->diskEncryptionKey->kmsKeyName = 'quisquam';
    $request->disk1->diskEncryptionKey->kmsKeyServiceAccount = 'optio';
    $request->disk1->diskEncryptionKey->rawKey = 'eveniet';
    $request->disk1->diskEncryptionKey->rsaEncryptedKey = 'incidunt';
    $request->disk1->diskEncryptionKey->sha256 = 'dignissimos';
    $request->disk1->enableConfidentialCompute = false;
    $request->disk1->eraseWindowsVssSignature = false;
    $request->disk1->guestOsFeatures = [
        new GuestOsFeature(),
    ];
    $request->disk1->id = 'impedit';
    $request->disk1->interface = DiskInterfaceEnum::UNSPECIFIED;
    $request->disk1->kind = 'fugit';
    $request->disk1->labelFingerprint = 'veritatis';
    $request->disk1->labels = [
        'reprehenderit' => 'quidem',
        'eum' => 'recusandae',
    ];
    $request->disk1->lastAttachTimestamp = 'suscipit';
    $request->disk1->lastDetachTimestamp = 'dicta';
    $request->disk1->licenseCodes = [
        'aspernatur',
        'placeat',
    ];
    $request->disk1->licenses = [
        'ipsa',
        'et',
        'quibusdam',
        'doloremque',
    ];
    $request->disk1->locationHint = 'vero';
    $request->disk1->locked = false;
    $request->disk1->multiWriter = false;
    $request->disk1->name = 'Guillermo Fahey';
    $request->disk1->options = 'facilis';
    $request->disk1->params = new DiskParams();
    $request->disk1->params->resourceManagerTags = [
        'laborum' => 'exercitationem',
        'quidem' => 'repellat',
        'molestias' => 'amet',
    ];
    $request->disk1->physicalBlockSizeBytes = 'veniam';
    $request->disk1->provisionedIops = 'pariatur';
    $request->disk1->provisionedThroughput = 'voluptatibus';
    $request->disk1->region = 'vero';
    $request->disk1->replicaZones = [
        'iure',
        'incidunt',
        'repellat',
    ];
    $request->disk1->resourcePolicies = [
        'ut',
        'tempore',
        'et',
    ];
    $request->disk1->resourceStatus = new DiskResourceStatus();
    $request->disk1->resourceStatus->asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus();
    $request->disk1->resourceStatus->asyncPrimaryDisk->state = DiskResourceStatusAsyncReplicationStatusStateEnum::STOPPING;
    $request->disk1->resourceStatus->asyncSecondaryDisks = [
        'placeat' => new DiskResourceStatusAsyncReplicationStatus(),
        'consequatur' => new DiskResourceStatusAsyncReplicationStatus(),
        'natus' => new DiskResourceStatusAsyncReplicationStatus(),
    ];
    $request->disk1->satisfiesPzs = false;
    $request->disk1->selfLink = 'molestiae';
    $request->disk1->selfLinkWithId = 'accusamus';
    $request->disk1->sizeGb = 'temporibus';
    $request->disk1->sourceConsistencyGroupPolicy = 'animi';
    $request->disk1->sourceConsistencyGroupPolicyId = 'autem';
    $request->disk1->sourceDisk = 'fugit';
    $request->disk1->sourceDiskId = 'neque';
    $request->disk1->sourceImage = 'magnam';
    $request->disk1->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->sourceImageEncryptionKey->kmsKeyName = 'numquam';
    $request->disk1->sourceImageEncryptionKey->kmsKeyServiceAccount = 'fugit';
    $request->disk1->sourceImageEncryptionKey->rawKey = 'voluptates';
    $request->disk1->sourceImageEncryptionKey->rsaEncryptedKey = 'beatae';
    $request->disk1->sourceImageEncryptionKey->sha256 = 'id';
    $request->disk1->sourceImageId = 'unde';
    $request->disk1->sourceInstantSnapshot = 'consequuntur';
    $request->disk1->sourceInstantSnapshotId = 'ratione';
    $request->disk1->sourceSnapshot = 'quam';
    $request->disk1->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->sourceSnapshotEncryptionKey->kmsKeyName = 'recusandae';
    $request->disk1->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'iste';
    $request->disk1->sourceSnapshotEncryptionKey->rawKey = 'cupiditate';
    $request->disk1->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'blanditiis';
    $request->disk1->sourceSnapshotEncryptionKey->sha256 = 'numquam';
    $request->disk1->sourceSnapshotId = 'porro';
    $request->disk1->sourceStorageObject = 'quas';
    $request->disk1->status = DiskStatusEnum::CREATING;
    $request->disk1->storagePool = 'facilis';
    $request->disk1->storageType = DiskStorageTypeEnum::HDD;
    $request->disk1->type = 'nihil';
    $request->disk1->userLicenses = [
        'saepe',
        'atque',
        'excepturi',
    ];
    $request->disk1->users = [
        'molestias',
    ];
    $request->disk1->zone = 'dolores';
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veritatis';
    $request->diskPathParameter = 'deleniti';
    $request->fields = 'cumque';
    $request->key = 'officia';
    $request->oauthToken = 'rem';
    $request->paths = [
        'vel',
        'cupiditate',
        'porro',
        'enim',
    ];
    $request->prettyPrint = false;
    $request->project = 'ex';
    $request->quotaUser = 'rem';
    $request->region = 'cupiditate';
    $request->requestId = 'explicabo';
    $request->updateMask = 'vitae';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'doloribus';
    $request->userIp = 'animi';

    $requestSecurity = new ComputeRegionDisksUpdateSecurity();
    $requestSecurity->option1 = new ComputeRegionDisksUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDisks->computeRegionDisksUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
