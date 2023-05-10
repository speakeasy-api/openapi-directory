# disks

### Available Operations

* [computeDisksAddResourcePolicies](#computedisksaddresourcepolicies) - Adds existing resource policies to a disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
* [computeDisksAggregatedList](#computedisksaggregatedlist) - Retrieves an aggregated list of persistent disks.
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->disksAddResourcePoliciesRequest = new DisksAddResourcePoliciesRequest();
    $request->disksAddResourcePoliciesRequest->resourcePolicies = [
        'at',
        'impedit',
        'eos',
    ];
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->disk = 'minima';
    $request->fields = 'beatae';
    $request->key = 'cupiditate';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->project = 'earum';
    $request->quotaUser = 'soluta';
    $request->requestId = 'hic';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'eaque';
    $request->userIp = 'earum';
    $request->zone = 'perspiciatis';

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
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->fields = 'suscipit';
    $request->filter = 'dolorem';
    $request->includeAllScopes = false;
    $request->key = 'fugit';
    $request->maxResults = 764995;
    $request->oauthToken = 'fuga';
    $request->orderBy = 'ratione';
    $request->pageToken = 'animi';
    $request->prettyPrint = false;
    $request->project = 'necessitatibus';
    $request->quotaUser = 'nulla';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'quasi';
    $request->userIp = 'et';

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
    $request->snapshot->chainName = 'occaecati';
    $request->snapshot->creationSizeBytes = 'suscipit';
    $request->snapshot->creationTimestamp = 'adipisci';
    $request->snapshot->description = 'quasi';
    $request->snapshot->diskSizeGb = 'magni';
    $request->snapshot->downloadBytes = 'doloribus';
    $request->snapshot->id = 'nulla';
    $request->snapshot->kind = 'necessitatibus';
    $request->snapshot->labelFingerprint = 'ipsa';
    $request->snapshot->labels = [
        'nihil' => 'molestiae',
        'dicta' => 'iusto',
    ];
    $request->snapshot->licenseCodes = [
        'praesentium',
        'maiores',
    ];
    $request->snapshot->licenses = [
        'vel',
        'architecto',
        'fugiat',
        'doloremque',
    ];
    $request->snapshot->locationHint = 'dicta';
    $request->snapshot->name = 'Anita Koch';
    $request->snapshot->satisfiesPzs = false;
    $request->snapshot->selfLink = 'aliquid';
    $request->snapshot->snapshotEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->snapshotEncryptionKey->kmsKeyName = 'ipsa';
    $request->snapshot->snapshotEncryptionKey->kmsKeyServiceAccount = 'laborum';
    $request->snapshot->snapshotEncryptionKey->rawKey = 'sunt';
    $request->snapshot->snapshotEncryptionKey->rsaEncryptedKey = 'nostrum';
    $request->snapshot->snapshotEncryptionKey->sha256 = 'fugiat';
    $request->snapshot->snapshotType = SnapshotSnapshotTypeEnum::STANDARD;
    $request->snapshot->sourceDisk = 'aliquid';
    $request->snapshot->sourceDiskEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyName = 'officia';
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyServiceAccount = 'suscipit';
    $request->snapshot->sourceDiskEncryptionKey->rawKey = 'aliquid';
    $request->snapshot->sourceDiskEncryptionKey->rsaEncryptedKey = 'perferendis';
    $request->snapshot->sourceDiskEncryptionKey->sha256 = 'eum';
    $request->snapshot->sourceDiskId = 'voluptas';
    $request->snapshot->sourceSnapshotSchedulePolicy = 'iste';
    $request->snapshot->sourceSnapshotSchedulePolicyId = 'id';
    $request->snapshot->status = SnapshotStatusEnum::CREATING;
    $request->snapshot->storageBytes = 'error';
    $request->snapshot->storageBytesStatus = SnapshotStorageBytesStatusEnum::UP_TO_DATE;
    $request->snapshot->storageLocations = [
        'mollitia',
        'laborum',
        'libero',
        'ad',
    ];
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vitae';
    $request->disk = 'repellendus';
    $request->fields = 'ex';
    $request->guestFlush = false;
    $request->key = 'quo';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->project = 'ut';
    $request->quotaUser = 'ad';
    $request->requestId = 'expedita';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'molestias';
    $request->userIp = 'cum';
    $request->zone = 'aliquid';

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
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->disk = 'rerum';
    $request->fields = 'est';
    $request->key = 'culpa';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'sapiente';
    $request->quotaUser = 'officiis';
    $request->requestId = 'architecto';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'pariatur';
    $request->userIp = 'debitis';
    $request->zone = 'voluptatem';

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
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ex';
    $request->disk = 'sapiente';
    $request->fields = 'rem';
    $request->key = 'minus';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'ratione';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'perferendis';
    $request->userIp = 'illum';
    $request->zone = 'totam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'culpa';
    $request->key = 'dolor';
    $request->oauthToken = 'aliquam';
    $request->optionsRequestedPolicyVersion = 80532;
    $request->prettyPrint = false;
    $request->project = 'deleniti';
    $request->quotaUser = 'veritatis';
    $request->resource = 'tempora';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'architecto';
    $request->zone = 'sit';

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
use \OpenAPI\OpenAPI\Models\Shared\DiskParams;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatusAsyncReplicationStatus;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatusAsyncReplicationStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDisksInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDisksInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->disk = new Disk();
    $request->disk->architecture = DiskArchitectureEnum::ARCHITECTURE_UNSPECIFIED;
    $request->disk->asyncPrimaryDisk = new DiskAsyncReplication();
    $request->disk->asyncPrimaryDisk->consistencyGroupPolicy = 'ab';
    $request->disk->asyncPrimaryDisk->consistencyGroupPolicyId = 'laudantium';
    $request->disk->asyncPrimaryDisk->disk = 'quae';
    $request->disk->asyncPrimaryDisk->diskId = 'dolor';
    $request->disk->asyncSecondaryDisks = [
        'ipsam' => new DiskAsyncReplicationList(),
        'consequuntur' => new DiskAsyncReplicationList(),
        'ipsa' => new DiskAsyncReplicationList(),
        'quas' => new DiskAsyncReplicationList(),
    ];
    $request->disk->creationTimestamp = 'eveniet';
    $request->disk->description = 'impedit';
    $request->disk->diskEncryptionKey = new CustomerEncryptionKey();
    $request->disk->diskEncryptionKey->kmsKeyName = 'officiis';
    $request->disk->diskEncryptionKey->kmsKeyServiceAccount = 'esse';
    $request->disk->diskEncryptionKey->rawKey = 'necessitatibus';
    $request->disk->diskEncryptionKey->rsaEncryptedKey = 'sed';
    $request->disk->diskEncryptionKey->sha256 = 'veniam';
    $request->disk->guestOsFeatures = [
        new GuestOsFeature(),
    ];
    $request->disk->id = 'expedita';
    $request->disk->kind = 'eum';
    $request->disk->labelFingerprint = 'vel';
    $request->disk->labels = [
        'magnam' => 'exercitationem',
        'ab' => 'porro',
        'autem' => 'nobis',
    ];
    $request->disk->lastAttachTimestamp = 'laboriosam';
    $request->disk->lastDetachTimestamp = 'recusandae';
    $request->disk->licenseCodes = [
        'voluptatem',
    ];
    $request->disk->licenses = [
        'necessitatibus',
        'quasi',
    ];
    $request->disk->locationHint = 'nisi';
    $request->disk->name = 'Caleb Orn';
    $request->disk->options = 'doloribus';
    $request->disk->params = new DiskParams();
    $request->disk->params->resourceManagerTags = [
        'optio' => 'occaecati',
        'nemo' => 'voluptate',
        'blanditiis' => 'officia',
        'voluptas' => 'numquam',
    ];
    $request->disk->physicalBlockSizeBytes = 'nemo';
    $request->disk->provisionedIops = 'quos';
    $request->disk->provisionedThroughput = 'eius';
    $request->disk->region = 'aspernatur';
    $request->disk->replicaZones = [
        'nesciunt',
        'fuga',
    ];
    $request->disk->resourcePolicies = [
        'incidunt',
        'quasi',
        'rem',
    ];
    $request->disk->resourceStatus = new DiskResourceStatus();
    $request->disk->resourceStatus->asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus();
    $request->disk->resourceStatus->asyncPrimaryDisk->state = DiskResourceStatusAsyncReplicationStatusStateEnum::STOPPING;
    $request->disk->resourceStatus->asyncSecondaryDisks = [
        'nisi' => new DiskResourceStatusAsyncReplicationStatus(),
    ];
    $request->disk->satisfiesPzs = false;
    $request->disk->selfLink = 'consequuntur';
    $request->disk->sizeGb = 'consectetur';
    $request->disk->sourceConsistencyGroupPolicy = 'aperiam';
    $request->disk->sourceConsistencyGroupPolicyId = 'cupiditate';
    $request->disk->sourceDisk = 'reiciendis';
    $request->disk->sourceDiskId = 'soluta';
    $request->disk->sourceImage = 'alias';
    $request->disk->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->disk->sourceImageEncryptionKey->kmsKeyName = 'omnis';
    $request->disk->sourceImageEncryptionKey->kmsKeyServiceAccount = 'eos';
    $request->disk->sourceImageEncryptionKey->rawKey = 'occaecati';
    $request->disk->sourceImageEncryptionKey->rsaEncryptedKey = 'iste';
    $request->disk->sourceImageEncryptionKey->sha256 = 'magni';
    $request->disk->sourceImageId = 'inventore';
    $request->disk->sourceSnapshot = 'fuga';
    $request->disk->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->disk->sourceSnapshotEncryptionKey->kmsKeyName = 'accusamus';
    $request->disk->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'voluptatibus';
    $request->disk->sourceSnapshotEncryptionKey->rawKey = 'distinctio';
    $request->disk->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'omnis';
    $request->disk->sourceSnapshotEncryptionKey->sha256 = 'delectus';
    $request->disk->sourceSnapshotId = 'minima';
    $request->disk->sourceStorageObject = 'praesentium';
    $request->disk->status = DiskStatusEnum::RESTORING;
    $request->disk->type = 'magnam';
    $request->disk->users = [
        'quos',
        'commodi',
        'itaque',
        'commodi',
    ];
    $request->disk->zone = 'totam';
    $request->accessToken = 'earum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nam';
    $request->fields = 'vero';
    $request->key = 'voluptatem';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'alias';
    $request->requestId = 'quasi';
    $request->sourceImage = 'non';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'sint';
    $request->zone = 'nulla';

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
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reprehenderit';
    $request->fields = 'est';
    $request->filter = 'quis';
    $request->key = 'sint';
    $request->maxResults = 880679;
    $request->oauthToken = 'impedit';
    $request->orderBy = 'hic';
    $request->pageToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'ex';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'delectus';
    $request->zone = 'quae';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->disksRemoveResourcePoliciesRequest = new DisksRemoveResourcePoliciesRequest();
    $request->disksRemoveResourcePoliciesRequest->resourcePolicies = [
        'laborum',
        'consectetur',
        'velit',
    ];
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->disk = 'magni';
    $request->fields = 'soluta';
    $request->key = 'repudiandae';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->project = 'dolore';
    $request->quotaUser = 'iusto';
    $request->requestId = 'voluptate';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'dignissimos';
    $request->userIp = 'neque';
    $request->zone = 'quo';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->disksResizeRequest = new DisksResizeRequest();
    $request->disksResizeRequest->sizeGb = 'quibusdam';
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
    $request->requestId = 'architecto';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'quia';
    $request->userIp = 'porro';
    $request->zone = 'aliquam';

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
    ];
    $request->zoneSetPolicyRequest->etag = 'accusantium';
    $request->zoneSetPolicyRequest->policy = new Policy();
    $request->zoneSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->zoneSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->policy->etag = 'beatae';
    $request->zoneSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->zoneSetPolicyRequest->policy->version = 568218;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ut';
    $request->fields = 'perspiciatis';
    $request->key = 'earum';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'impedit';
    $request->quotaUser = 'voluptatibus';
    $request->resource = 'iste';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'nisi';
    $request->zone = 'itaque';

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
    $request->zoneSetLabelsRequest->labelFingerprint = 'laborum';
    $request->zoneSetLabelsRequest->labels = [
        'dolor' => 'iusto',
        'sit' => 'doloremque',
    ];
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'ea';
    $request->key = 'quidem';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->project = 'facilis';
    $request->quotaUser = 'placeat';
    $request->requestId = 'perspiciatis';
    $request->resource = 'expedita';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'a';
    $request->userIp = 'voluptate';
    $request->zone = 'ullam';

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
        'animi',
        'impedit',
        'ipsam',
        'corporis',
    ];
    $request->accessToken = 'est';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'esse';
    $request->fields = 'labore';
    $request->key = 'veritatis';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->project = 'consectetur';
    $request->quotaUser = 'vitae';
    $request->resource = 'inventore';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'ad';
    $request->userIp = 'qui';
    $request->zone = 'iste';

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
use \OpenAPI\OpenAPI\Models\Shared\DiskParams;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatusAsyncReplicationStatus;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatusAsyncReplicationStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskStatusEnum;
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
    $request->disk1->architecture = DiskArchitectureEnum::ARM64;
    $request->disk1->asyncPrimaryDisk = new DiskAsyncReplication();
    $request->disk1->asyncPrimaryDisk->consistencyGroupPolicy = 'soluta';
    $request->disk1->asyncPrimaryDisk->consistencyGroupPolicyId = 'libero';
    $request->disk1->asyncPrimaryDisk->disk = 'rem';
    $request->disk1->asyncPrimaryDisk->diskId = 'dolorum';
    $request->disk1->asyncSecondaryDisks = [
        'fugit' => new DiskAsyncReplicationList(),
        'alias' => new DiskAsyncReplicationList(),
    ];
    $request->disk1->creationTimestamp = 'magni';
    $request->disk1->description = 'vel';
    $request->disk1->diskEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->diskEncryptionKey->kmsKeyName = 'quae';
    $request->disk1->diskEncryptionKey->kmsKeyServiceAccount = 'quae';
    $request->disk1->diskEncryptionKey->rawKey = 'modi';
    $request->disk1->diskEncryptionKey->rsaEncryptedKey = 'neque';
    $request->disk1->diskEncryptionKey->sha256 = 'exercitationem';
    $request->disk1->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->disk1->id = 'et';
    $request->disk1->kind = 'ipsum';
    $request->disk1->labelFingerprint = 'unde';
    $request->disk1->labels = [
        'distinctio' => 'maxime',
        'quia' => 'quia',
        'nostrum' => 'omnis',
        'libero' => 'dicta',
    ];
    $request->disk1->lastAttachTimestamp = 'id';
    $request->disk1->lastDetachTimestamp = 'libero';
    $request->disk1->licenseCodes = [
        'officia',
        'quos',
        'placeat',
        'sit',
    ];
    $request->disk1->licenses = [
        'ipsa',
        'voluptates',
    ];
    $request->disk1->locationHint = 'inventore';
    $request->disk1->name = 'Lena Greenholt';
    $request->disk1->options = 'voluptatem';
    $request->disk1->params = new DiskParams();
    $request->disk1->params->resourceManagerTags = [
        'esse' => 'dolores',
        'assumenda' => 'beatae',
    ];
    $request->disk1->physicalBlockSizeBytes = 'est';
    $request->disk1->provisionedIops = 'facere';
    $request->disk1->provisionedThroughput = 'corrupti';
    $request->disk1->region = 'molestiae';
    $request->disk1->replicaZones = [
        'accusamus',
        'necessitatibus',
        'tempore',
    ];
    $request->disk1->resourcePolicies = [
        'ea',
        'autem',
        'ipsam',
    ];
    $request->disk1->resourceStatus = new DiskResourceStatus();
    $request->disk1->resourceStatus->asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus();
    $request->disk1->resourceStatus->asyncPrimaryDisk->state = DiskResourceStatusAsyncReplicationStatusStateEnum::STOPPED;
    $request->disk1->resourceStatus->asyncSecondaryDisks = [
        'corporis' => new DiskResourceStatusAsyncReplicationStatus(),
        'officiis' => new DiskResourceStatusAsyncReplicationStatus(),
        'voluptatibus' => new DiskResourceStatusAsyncReplicationStatus(),
    ];
    $request->disk1->satisfiesPzs = false;
    $request->disk1->selfLink = 'cum';
    $request->disk1->sizeGb = 'at';
    $request->disk1->sourceConsistencyGroupPolicy = 'alias';
    $request->disk1->sourceConsistencyGroupPolicyId = 'quia';
    $request->disk1->sourceDisk = 'quidem';
    $request->disk1->sourceDiskId = 'fuga';
    $request->disk1->sourceImage = 'repudiandae';
    $request->disk1->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->sourceImageEncryptionKey->kmsKeyName = 'accusantium';
    $request->disk1->sourceImageEncryptionKey->kmsKeyServiceAccount = 'expedita';
    $request->disk1->sourceImageEncryptionKey->rawKey = 'officiis';
    $request->disk1->sourceImageEncryptionKey->rsaEncryptedKey = 'eos';
    $request->disk1->sourceImageEncryptionKey->sha256 = 'quibusdam';
    $request->disk1->sourceImageId = 'odio';
    $request->disk1->sourceSnapshot = 'praesentium';
    $request->disk1->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->sourceSnapshotEncryptionKey->kmsKeyName = 'odit';
    $request->disk1->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'explicabo';
    $request->disk1->sourceSnapshotEncryptionKey->rawKey = 'corporis';
    $request->disk1->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'error';
    $request->disk1->sourceSnapshotEncryptionKey->sha256 = 'earum';
    $request->disk1->sourceSnapshotId = 'adipisci';
    $request->disk1->sourceStorageObject = 'recusandae';
    $request->disk1->status = DiskStatusEnum::READY;
    $request->disk1->type = 'ut';
    $request->disk1->users = [
        'quis',
        'beatae',
        'unde',
    ];
    $request->disk1->zone = 'molestiae';
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->diskPathParameter = 'numquam';
    $request->fields = 'numquam';
    $request->key = 'nesciunt';
    $request->oauthToken = 'at';
    $request->paths = [
        'dignissimos',
        'optio',
        'necessitatibus',
    ];
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'qui';
    $request->requestId = 'expedita';
    $request->updateMask = 'voluptatum';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'minima';
    $request->userIp = 'placeat';
    $request->zone = 'enim';

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
