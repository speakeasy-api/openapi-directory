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
        'inventore',
        'quisquam',
    ];
    $request->accessToken = 'neque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nulla';
    $request->disk = 'beatae';
    $request->fields = 'necessitatibus';
    $request->key = 'harum';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'odio';
    $request->region = 'tenetur';
    $request->requestId = 'quam';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'sapiente';
    $request->userIp = 'magnam';

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
    $request->bulkInsertDiskResource->sourceConsistencyGroupPolicy = 'aspernatur';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'cumque';
    $request->key = 'eaque';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'totam';
    $request->region = 'commodi';
    $request->requestId = 'maxime';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'mollitia';
    $request->userIp = 'repudiandae';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->snapshot = new Snapshot();
    $request->snapshot->architecture = SnapshotArchitectureEnum::X8664;
    $request->snapshot->autoCreated = false;
    $request->snapshot->chainName = 'reprehenderit';
    $request->snapshot->creationSizeBytes = 'soluta';
    $request->snapshot->creationTimestamp = 'voluptas';
    $request->snapshot->description = 'odio';
    $request->snapshot->diskSizeGb = 'reiciendis';
    $request->snapshot->downloadBytes = 'officiis';
    $request->snapshot->guestFlush = false;
    $request->snapshot->id = 'voluptates';
    $request->snapshot->kind = 'tenetur';
    $request->snapshot->labelFingerprint = 'veniam';
    $request->snapshot->labels = [
        'quae' => 'eius',
        'quia' => 'pariatur',
        'perspiciatis' => 'exercitationem',
        'nam' => 'sunt',
    ];
    $request->snapshot->licenseCodes = [
        'soluta',
        'eveniet',
        'placeat',
        'earum',
    ];
    $request->snapshot->licenses = [
        'voluptatibus',
        'iusto',
        'quo',
        'non',
    ];
    $request->snapshot->locationHint = 'tempore';
    $request->snapshot->name = 'Dolores Jerde';
    $request->snapshot->satisfiesPzs = false;
    $request->snapshot->selfLink = 'odit';
    $request->snapshot->snapshotEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->snapshotEncryptionKey->kmsKeyName = 'ducimus';
    $request->snapshot->snapshotEncryptionKey->kmsKeyServiceAccount = 'corrupti';
    $request->snapshot->snapshotEncryptionKey->rawKey = 'consequuntur';
    $request->snapshot->snapshotEncryptionKey->rsaEncryptedKey = 'voluptate';
    $request->snapshot->snapshotEncryptionKey->sha256 = 'ipsam';
    $request->snapshot->snapshotType = SnapshotSnapshotTypeEnum::STANDARD;
    $request->snapshot->sourceDisk = 'repudiandae';
    $request->snapshot->sourceDiskEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyName = 'officia';
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyServiceAccount = 'esse';
    $request->snapshot->sourceDiskEncryptionKey->rawKey = 'laboriosam';
    $request->snapshot->sourceDiskEncryptionKey->rsaEncryptedKey = 'laudantium';
    $request->snapshot->sourceDiskEncryptionKey->sha256 = 'quasi';
    $request->snapshot->sourceDiskId = 'nihil';
    $request->snapshot->sourceSnapshotSchedulePolicy = 'labore';
    $request->snapshot->sourceSnapshotSchedulePolicyId = 'laboriosam';
    $request->snapshot->status = SnapshotStatusEnum::FAILED;
    $request->snapshot->storageBytes = 'quae';
    $request->snapshot->storageBytesStatus = SnapshotStorageBytesStatusEnum::UPDATING;
    $request->snapshot->storageLocations = [
        'tenetur',
    ];
    $request->snapshot->userLicenses = [
        'perspiciatis',
        'cupiditate',
    ];
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perspiciatis';
    $request->disk = 'nemo';
    $request->fields = 'ex';
    $request->key = 'maxime';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'voluptatem';
    $request->region = 'tenetur';
    $request->requestId = 'mollitia';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'quidem';
    $request->userIp = 'soluta';

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
    $request->accessToken = 'quae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->disk = 'consequatur';
    $request->fields = 'voluptates';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'id';
    $request->region = 'accusamus';
    $request->requestId = 'aliquid';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'eaque';
    $request->userIp = 'nisi';

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
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->disk = 'autem';
    $request->fields = 'nostrum';
    $request->key = 'esse';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'voluptatem';
    $request->quotaUser = 'ab';
    $request->region = 'culpa';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'voluptate';
    $request->userIp = 'placeat';

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
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nulla';
    $request->fields = 'sequi';
    $request->key = 'iste';
    $request->oauthToken = 'magni';
    $request->optionsRequestedPolicyVersion = 78442;
    $request->prettyPrint = false;
    $request->project = 'eligendi';
    $request->quotaUser = 'dolores';
    $request->region = 'exercitationem';
    $request->resource = 'reprehenderit';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'ratione';
    $request->userIp = 'consequatur';

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
    $request->disk->architecture = DiskArchitectureEnum::ARM64;
    $request->disk->asyncPrimaryDisk = new DiskAsyncReplication();
    $request->disk->asyncPrimaryDisk->consistencyGroupPolicy = 'maiores';
    $request->disk->asyncPrimaryDisk->consistencyGroupPolicyId = 'sit';
    $request->disk->asyncPrimaryDisk->disk = 'natus';
    $request->disk->asyncPrimaryDisk->diskId = 'dolorem';
    $request->disk->asyncSecondaryDisks = [
        'sequi' => new DiskAsyncReplicationList(),
        'officiis' => new DiskAsyncReplicationList(),
        'reiciendis' => new DiskAsyncReplicationList(),
    ];
    $request->disk->creationTimestamp = 'dolorum';
    $request->disk->description = 'aliquam';
    $request->disk->diskEncryptionKey = new CustomerEncryptionKey();
    $request->disk->diskEncryptionKey->kmsKeyName = 'laboriosam';
    $request->disk->diskEncryptionKey->kmsKeyServiceAccount = 'temporibus';
    $request->disk->diskEncryptionKey->rawKey = 'adipisci';
    $request->disk->diskEncryptionKey->rsaEncryptedKey = 'autem';
    $request->disk->diskEncryptionKey->sha256 = 'ea';
    $request->disk->eraseWindowsVssSignature = false;
    $request->disk->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->disk->id = 'delectus';
    $request->disk->interface = DiskInterfaceEnum::SCSI;
    $request->disk->kind = 'inventore';
    $request->disk->labelFingerprint = 'consequatur';
    $request->disk->labels = [
        'vitae' => 'id',
    ];
    $request->disk->lastAttachTimestamp = 'voluptatem';
    $request->disk->lastDetachTimestamp = 'unde';
    $request->disk->licenseCodes = [
        'cum',
    ];
    $request->disk->licenses = [
        'necessitatibus',
    ];
    $request->disk->locationHint = 'porro';
    $request->disk->locked = false;
    $request->disk->multiWriter = false;
    $request->disk->name = 'Garry Heller';
    $request->disk->options = 'nisi';
    $request->disk->params = new DiskParams();
    $request->disk->params->resourceManagerTags = [
        'nulla' => 'necessitatibus',
    ];
    $request->disk->physicalBlockSizeBytes = 'illo';
    $request->disk->provisionedIops = 'fuga';
    $request->disk->provisionedThroughput = 'molestias';
    $request->disk->region = 'at';
    $request->disk->replicaZones = [
        'aliquam',
    ];
    $request->disk->resourcePolicies = [
        'debitis',
        'reprehenderit',
        'sed',
        'voluptates',
    ];
    $request->disk->resourceStatus = new DiskResourceStatus();
    $request->disk->resourceStatus->asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus();
    $request->disk->resourceStatus->asyncPrimaryDisk->state = DiskResourceStatusAsyncReplicationStatusStateEnum::STARTING;
    $request->disk->resourceStatus->asyncSecondaryDisks = [
        'illo' => new DiskResourceStatusAsyncReplicationStatus(),
    ];
    $request->disk->satisfiesPzs = false;
    $request->disk->selfLink = 'asperiores';
    $request->disk->sizeGb = 'iste';
    $request->disk->sourceConsistencyGroupPolicy = 'ipsa';
    $request->disk->sourceConsistencyGroupPolicyId = 'velit';
    $request->disk->sourceDisk = 'ipsa';
    $request->disk->sourceDiskId = 'consectetur';
    $request->disk->sourceImage = 'possimus';
    $request->disk->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->disk->sourceImageEncryptionKey->kmsKeyName = 'asperiores';
    $request->disk->sourceImageEncryptionKey->kmsKeyServiceAccount = 'quo';
    $request->disk->sourceImageEncryptionKey->rawKey = 'adipisci';
    $request->disk->sourceImageEncryptionKey->rsaEncryptedKey = 'non';
    $request->disk->sourceImageEncryptionKey->sha256 = 'laudantium';
    $request->disk->sourceImageId = 'velit';
    $request->disk->sourceSnapshot = 'natus';
    $request->disk->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->disk->sourceSnapshotEncryptionKey->kmsKeyName = 'molestiae';
    $request->disk->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'reiciendis';
    $request->disk->sourceSnapshotEncryptionKey->rawKey = 'hic';
    $request->disk->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'hic';
    $request->disk->sourceSnapshotEncryptionKey->sha256 = 'error';
    $request->disk->sourceSnapshotId = 'ea';
    $request->disk->sourceStorageObject = 'repellendus';
    $request->disk->status = DiskStatusEnum::CREATING;
    $request->disk->storageType = DiskStorageTypeEnum::SSD;
    $request->disk->type = 'sequi';
    $request->disk->userLicenses = [
        'consequatur',
    ];
    $request->disk->users = [
        'alias',
        'doloribus',
        'quo',
    ];
    $request->disk->zone = 'quasi';
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'mollitia';
    $request->fields = 'cumque';
    $request->key = 'molestias';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'dicta';
    $request->region = 'sint';
    $request->requestId = 'ex';
    $request->sourceImage = 'vitae';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'accusamus';
    $request->userIp = 'perspiciatis';

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
    $request->accessToken = 'vero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->fields = 'eligendi';
    $request->filter = 'atque';
    $request->key = 'nisi';
    $request->maxResults = 609194;
    $request->oauthToken = 'nulla';
    $request->orderBy = 'facere';
    $request->pageToken = 'ducimus';
    $request->prettyPrint = false;
    $request->project = 'quibusdam';
    $request->quotaUser = 'omnis';
    $request->region = 'molestiae';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'illo';
    $request->uploadProtocol = 'unde';
    $request->userIp = 'repellendus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionDisksRemoveResourcePoliciesRequest = new RegionDisksRemoveResourcePoliciesRequest();
    $request->regionDisksRemoveResourcePoliciesRequest->resourcePolicies = [
        'harum',
        'odit',
    ];
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->disk = 'corporis';
    $request->fields = 'praesentium';
    $request->key = 'delectus';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->project = 'temporibus';
    $request->quotaUser = 'consequuntur';
    $request->region = 'iste';
    $request->requestId = 'suscipit';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'delectus';

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
    $request->regionDisksResizeRequest->sizeGb = 'sapiente';
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->disk = 'sed';
    $request->fields = 'fuga';
    $request->key = 'deleniti';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->project = 'voluptas';
    $request->quotaUser = 'eaque';
    $request->region = 'tempore';
    $request->requestId = 'accusamus';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'eos';
    $request->userIp = 'perferendis';

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
    $request->regionSetPolicyRequest->etag = 'molestias';
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
    ];
    $request->regionSetPolicyRequest->policy->etag = 'officia';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 819185;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ut';
    $request->fields = 'eligendi';
    $request->key = 'nesciunt';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'aspernatur';
    $request->region = 'veniam';
    $request->resource = 'quasi';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'harum';
    $request->userIp = 'earum';

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
    $request->regionSetLabelsRequest->labelFingerprint = 'officiis';
    $request->regionSetLabelsRequest->labels = [
        'vero' => 'atque',
    ];
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quisquam';
    $request->fields = 'minus';
    $request->key = 'corporis';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'nulla';
    $request->quotaUser = 'quod';
    $request->region = 'saepe';
    $request->requestId = 'animi';
    $request->resource = 'deleniti';
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'molestiae';
    $request->userIp = 'laborum';

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
    $request->regionDisksStartAsyncReplicationRequest->asyncSecondaryDisk = 'blanditiis';
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::JSON;
    $request->callback = 'et';
    $request->disk = 'commodi';
    $request->fields = 'laboriosam';
    $request->key = 'ratione';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'at';
    $request->quotaUser = 'fuga';
    $request->region = 'vel';
    $request->requestId = 'quibusdam';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'voluptate';
    $request->userIp = 'cumque';

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksStopAsyncReplicationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksStopAsyncReplicationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDisksStopAsyncReplicationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDisksStopAsyncReplicationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->disk = 'doloremque';
    $request->fields = 'nisi';
    $request->key = 'eum';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'esse';
    $request->region = 'quibusdam';
    $request->requestId = 'tempora';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'molestiae';

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
    $request->disksStopGroupAsyncReplicationResource->resourcePolicy = 'laboriosam';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'molestias';
    $request->key = 'culpa';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'perspiciatis';
    $request->region = 'officiis';
    $request->requestId = 'consectetur';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'totam';
    $request->userIp = 'incidunt';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'beatae',
    ];
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'corporis';
    $request->key = 'itaque';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'alias';
    $request->region = 'eligendi';
    $request->resource = 'accusantium';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'non';
    $request->userIp = 'soluta';

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
    $request->disk1->architecture = DiskArchitectureEnum::X8664;
    $request->disk1->asyncPrimaryDisk = new DiskAsyncReplication();
    $request->disk1->asyncPrimaryDisk->consistencyGroupPolicy = 'rerum';
    $request->disk1->asyncPrimaryDisk->consistencyGroupPolicyId = 'molestiae';
    $request->disk1->asyncPrimaryDisk->disk = 'ipsam';
    $request->disk1->asyncPrimaryDisk->diskId = 'quos';
    $request->disk1->asyncSecondaryDisks = [
        'nobis' => new DiskAsyncReplicationList(),
        'cupiditate' => new DiskAsyncReplicationList(),
        'tempora' => new DiskAsyncReplicationList(),
        'exercitationem' => new DiskAsyncReplicationList(),
    ];
    $request->disk1->creationTimestamp = 'voluptas';
    $request->disk1->description = 'quia';
    $request->disk1->diskEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->diskEncryptionKey->kmsKeyName = 'delectus';
    $request->disk1->diskEncryptionKey->kmsKeyServiceAccount = 'alias';
    $request->disk1->diskEncryptionKey->rawKey = 'consequatur';
    $request->disk1->diskEncryptionKey->rsaEncryptedKey = 'suscipit';
    $request->disk1->diskEncryptionKey->sha256 = 'occaecati';
    $request->disk1->eraseWindowsVssSignature = false;
    $request->disk1->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->disk1->id = 'rem';
    $request->disk1->interface = DiskInterfaceEnum::SCSI;
    $request->disk1->kind = 'a';
    $request->disk1->labelFingerprint = 'maxime';
    $request->disk1->labels = [
        'quasi' => 'est',
        'vitae' => 'nihil',
        'consectetur' => 'illum',
        'laudantium' => 'non',
    ];
    $request->disk1->lastAttachTimestamp = 'libero';
    $request->disk1->lastDetachTimestamp = 'cum';
    $request->disk1->licenseCodes = [
        'odit',
        'modi',
        'tenetur',
        'explicabo',
    ];
    $request->disk1->licenses = [
        'praesentium',
        'sequi',
        'magnam',
    ];
    $request->disk1->locationHint = 'mollitia';
    $request->disk1->locked = false;
    $request->disk1->multiWriter = false;
    $request->disk1->name = 'Roderick Batz';
    $request->disk1->options = 'corporis';
    $request->disk1->params = new DiskParams();
    $request->disk1->params->resourceManagerTags = [
        'expedita' => 'laboriosam',
        'magni' => 'molestias',
        'corporis' => 'facere',
        'labore' => 'est',
    ];
    $request->disk1->physicalBlockSizeBytes = 'odit';
    $request->disk1->provisionedIops = 'unde';
    $request->disk1->provisionedThroughput = 'est';
    $request->disk1->region = 'fuga';
    $request->disk1->replicaZones = [
        'quae',
        'debitis',
        'quasi',
    ];
    $request->disk1->resourcePolicies = [
        'omnis',
        'veritatis',
    ];
    $request->disk1->resourceStatus = new DiskResourceStatus();
    $request->disk1->resourceStatus->asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus();
    $request->disk1->resourceStatus->asyncPrimaryDisk->state = DiskResourceStatusAsyncReplicationStatusStateEnum::STARTING;
    $request->disk1->resourceStatus->asyncSecondaryDisks = [
        'repellat' => new DiskResourceStatusAsyncReplicationStatus(),
        'voluptate' => new DiskResourceStatusAsyncReplicationStatus(),
    ];
    $request->disk1->satisfiesPzs = false;
    $request->disk1->selfLink = 'possimus';
    $request->disk1->sizeGb = 'aspernatur';
    $request->disk1->sourceConsistencyGroupPolicy = 'recusandae';
    $request->disk1->sourceConsistencyGroupPolicyId = 'repudiandae';
    $request->disk1->sourceDisk = 'eos';
    $request->disk1->sourceDiskId = 'perferendis';
    $request->disk1->sourceImage = 'error';
    $request->disk1->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->sourceImageEncryptionKey->kmsKeyName = 'ullam';
    $request->disk1->sourceImageEncryptionKey->kmsKeyServiceAccount = 'voluptatem';
    $request->disk1->sourceImageEncryptionKey->rawKey = 'corporis';
    $request->disk1->sourceImageEncryptionKey->rsaEncryptedKey = 'tempore';
    $request->disk1->sourceImageEncryptionKey->sha256 = 'maiores';
    $request->disk1->sourceImageId = 'doloremque';
    $request->disk1->sourceSnapshot = 'consectetur';
    $request->disk1->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->sourceSnapshotEncryptionKey->kmsKeyName = 'laborum';
    $request->disk1->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'occaecati';
    $request->disk1->sourceSnapshotEncryptionKey->rawKey = 'dolorem';
    $request->disk1->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'repudiandae';
    $request->disk1->sourceSnapshotEncryptionKey->sha256 = 'provident';
    $request->disk1->sourceSnapshotId = 'incidunt';
    $request->disk1->sourceStorageObject = 'incidunt';
    $request->disk1->status = DiskStatusEnum::FAILED;
    $request->disk1->storageType = DiskStorageTypeEnum::HDD;
    $request->disk1->type = 'cumque';
    $request->disk1->userLicenses = [
        'ratione',
        'in',
        'voluptatibus',
    ];
    $request->disk1->users = [
        'ab',
        'ipsa',
        'ducimus',
    ];
    $request->disk1->zone = 'voluptatum';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sequi';
    $request->diskPathParameter = 'fugit';
    $request->fields = 'deserunt';
    $request->key = 'porro';
    $request->oauthToken = 'amet';
    $request->paths = [
        'nesciunt',
    ];
    $request->prettyPrint = false;
    $request->project = 'et';
    $request->quotaUser = 'quam';
    $request->region = 'odit';
    $request->requestId = 'saepe';
    $request->updateMask = 'odit';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'nihil';

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
