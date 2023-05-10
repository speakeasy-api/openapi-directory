# regionDisks

### Available Operations

* [computeRegionDisksAddResourcePolicies](#computeregiondisksaddresourcepolicies) - Adds existing resource policies to a regional disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
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
        'quidem',
    ];
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->disk = 'debitis';
    $request->fields = 'consectetur';
    $request->key = 'aperiam';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'quidem';
    $request->region = 'excepturi';
    $request->requestId = 'ipsum';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'consectetur';
    $request->userIp = 'tempora';

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
    $request->snapshot->architecture = SnapshotArchitectureEnum::ARCHITECTURE_UNSPECIFIED;
    $request->snapshot->autoCreated = false;
    $request->snapshot->chainName = 'aliquid';
    $request->snapshot->creationSizeBytes = 'placeat';
    $request->snapshot->creationTimestamp = 'sapiente';
    $request->snapshot->description = 'corporis';
    $request->snapshot->diskSizeGb = 'nemo';
    $request->snapshot->downloadBytes = 'soluta';
    $request->snapshot->id = 'magnam';
    $request->snapshot->kind = 'sequi';
    $request->snapshot->labelFingerprint = 'ab';
    $request->snapshot->labels = [
        'ullam' => 'ullam',
    ];
    $request->snapshot->licenseCodes = [
        'porro',
    ];
    $request->snapshot->licenses = [
        'earum',
        'vitae',
        'quisquam',
        'fugit',
    ];
    $request->snapshot->locationHint = 'consequatur';
    $request->snapshot->name = 'Nichole Green';
    $request->snapshot->satisfiesPzs = false;
    $request->snapshot->selfLink = 'quod';
    $request->snapshot->snapshotEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->snapshotEncryptionKey->kmsKeyName = 'minus';
    $request->snapshot->snapshotEncryptionKey->kmsKeyServiceAccount = 'sint';
    $request->snapshot->snapshotEncryptionKey->rawKey = 'occaecati';
    $request->snapshot->snapshotEncryptionKey->rsaEncryptedKey = 'voluptatem';
    $request->snapshot->snapshotEncryptionKey->sha256 = 'labore';
    $request->snapshot->snapshotType = SnapshotSnapshotTypeEnum::STANDARD;
    $request->snapshot->sourceDisk = 'ad';
    $request->snapshot->sourceDiskEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyName = 'illo';
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyServiceAccount = 'provident';
    $request->snapshot->sourceDiskEncryptionKey->rawKey = 'exercitationem';
    $request->snapshot->sourceDiskEncryptionKey->rsaEncryptedKey = 'cum';
    $request->snapshot->sourceDiskEncryptionKey->sha256 = 'atque';
    $request->snapshot->sourceDiskId = 'suscipit';
    $request->snapshot->sourceSnapshotSchedulePolicy = 'labore';
    $request->snapshot->sourceSnapshotSchedulePolicyId = 'praesentium';
    $request->snapshot->status = SnapshotStatusEnum::READY;
    $request->snapshot->storageBytes = 'officiis';
    $request->snapshot->storageBytesStatus = SnapshotStorageBytesStatusEnum::UP_TO_DATE;
    $request->snapshot->storageLocations = [
        'quam',
        'deleniti',
        'a',
    ];
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eos';
    $request->disk = 'facere';
    $request->fields = 'nesciunt';
    $request->key = 'libero';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->project = 'perferendis';
    $request->quotaUser = 'beatae';
    $request->region = 'saepe';
    $request->requestId = 'voluptatem';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'corporis';
    $request->userIp = 'explicabo';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->disk = 'minus';
    $request->fields = 'harum';
    $request->key = 'quidem';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'iste';
    $request->quotaUser = 'voluptatibus';
    $request->region = 'odio';
    $request->requestId = 'ab';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'pariatur';
    $request->userIp = 'excepturi';

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
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->disk = 'nisi';
    $request->fields = 'molestias';
    $request->key = 'impedit';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'corrupti';
    $request->region = 'in';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'odio';
    $request->userIp = 'dicta';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eveniet';
    $request->fields = 'officia';
    $request->key = 'perspiciatis';
    $request->oauthToken = 'debitis';
    $request->optionsRequestedPolicyVersion = 250158;
    $request->prettyPrint = false;
    $request->project = 'veniam';
    $request->quotaUser = 'illo';
    $request->region = 'illo';
    $request->resource = 'deleniti';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'optio';

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
use \OpenAPI\OpenAPI\Models\Shared\DiskParams;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatusAsyncReplicationStatus;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatusAsyncReplicationStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskStatusEnum;
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
    $request->disk->asyncPrimaryDisk->consistencyGroupPolicy = 'ducimus';
    $request->disk->asyncPrimaryDisk->consistencyGroupPolicyId = 'tenetur';
    $request->disk->asyncPrimaryDisk->disk = 'libero';
    $request->disk->asyncPrimaryDisk->diskId = 'repellendus';
    $request->disk->asyncSecondaryDisks = [
        'alias' => new DiskAsyncReplicationList(),
        'rerum' => new DiskAsyncReplicationList(),
    ];
    $request->disk->creationTimestamp = 'beatae';
    $request->disk->description = 'fuga';
    $request->disk->diskEncryptionKey = new CustomerEncryptionKey();
    $request->disk->diskEncryptionKey->kmsKeyName = 'quam';
    $request->disk->diskEncryptionKey->kmsKeyServiceAccount = 'molestias';
    $request->disk->diskEncryptionKey->rawKey = 'eveniet';
    $request->disk->diskEncryptionKey->rsaEncryptedKey = 'quibusdam';
    $request->disk->diskEncryptionKey->sha256 = 'eos';
    $request->disk->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->disk->id = 'est';
    $request->disk->kind = 'occaecati';
    $request->disk->labelFingerprint = 'pariatur';
    $request->disk->labels = [
        'itaque' => 'itaque',
        'animi' => 'totam',
    ];
    $request->disk->lastAttachTimestamp = 'ullam';
    $request->disk->lastDetachTimestamp = 'nisi';
    $request->disk->licenseCodes = [
        'atque',
        'optio',
    ];
    $request->disk->licenses = [
        'at',
    ];
    $request->disk->locationHint = 'modi';
    $request->disk->name = 'Tom Rowe';
    $request->disk->options = 'quidem';
    $request->disk->params = new DiskParams();
    $request->disk->params->resourceManagerTags = [
        'labore' => 'hic',
        'aspernatur' => 'nihil',
        'quas' => 'tenetur',
        'fugiat' => 'unde',
    ];
    $request->disk->physicalBlockSizeBytes = 'autem';
    $request->disk->provisionedIops = 'ea';
    $request->disk->provisionedThroughput = 'molestiae';
    $request->disk->region = 'accusamus';
    $request->disk->replicaZones = [
        'autem',
        'placeat',
    ];
    $request->disk->resourcePolicies = [
        'dicta',
        'possimus',
    ];
    $request->disk->resourceStatus = new DiskResourceStatus();
    $request->disk->resourceStatus->asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus();
    $request->disk->resourceStatus->asyncPrimaryDisk->state = DiskResourceStatusAsyncReplicationStatusStateEnum::CREATED;
    $request->disk->resourceStatus->asyncSecondaryDisks = [
        'repellat' => new DiskResourceStatusAsyncReplicationStatus(),
        'id' => new DiskResourceStatusAsyncReplicationStatus(),
        'fuga' => new DiskResourceStatusAsyncReplicationStatus(),
        'ad' => new DiskResourceStatusAsyncReplicationStatus(),
    ];
    $request->disk->satisfiesPzs = false;
    $request->disk->selfLink = 'corrupti';
    $request->disk->sizeGb = 'temporibus';
    $request->disk->sourceConsistencyGroupPolicy = 'minus';
    $request->disk->sourceConsistencyGroupPolicyId = 'voluptates';
    $request->disk->sourceDisk = 'repellat';
    $request->disk->sourceDiskId = 'sed';
    $request->disk->sourceImage = 'ratione';
    $request->disk->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->disk->sourceImageEncryptionKey->kmsKeyName = 'quaerat';
    $request->disk->sourceImageEncryptionKey->kmsKeyServiceAccount = 'minus';
    $request->disk->sourceImageEncryptionKey->rawKey = 'natus';
    $request->disk->sourceImageEncryptionKey->rsaEncryptedKey = 'nostrum';
    $request->disk->sourceImageEncryptionKey->sha256 = 'veniam';
    $request->disk->sourceImageId = 'tempore';
    $request->disk->sourceSnapshot = 'natus';
    $request->disk->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->disk->sourceSnapshotEncryptionKey->kmsKeyName = 'facilis';
    $request->disk->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'assumenda';
    $request->disk->sourceSnapshotEncryptionKey->rawKey = 'repellat';
    $request->disk->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'odit';
    $request->disk->sourceSnapshotEncryptionKey->sha256 = 'vitae';
    $request->disk->sourceSnapshotId = 'error';
    $request->disk->sourceStorageObject = 'alias';
    $request->disk->status = DiskStatusEnum::READY;
    $request->disk->type = 'nobis';
    $request->disk->users = [
        'excepturi',
        'expedita',
        'harum',
        'quisquam',
    ];
    $request->disk->zone = 'eligendi';
    $request->accessToken = 'magni';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'ullam';
    $request->key = 'saepe';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'magni';
    $request->quotaUser = 'suscipit';
    $request->region = 'ipsam';
    $request->requestId = 'error';
    $request->sourceImage = 'quisquam';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'ipsa';
    $request->userIp = 'quia';

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
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'alias';
    $request->filter = 'quod';
    $request->key = 'nisi';
    $request->maxResults = 566826;
    $request->oauthToken = 'eveniet';
    $request->orderBy = 'tenetur';
    $request->pageToken = 'vel';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'voluptates';
    $request->region = 'modi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'cumque';
    $request->userIp = 'blanditiis';

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
        'possimus',
        'maiores',
        'est',
        'optio',
    ];
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'incidunt';
    $request->disk = 'enim';
    $request->fields = 'ipsa';
    $request->key = 'ipsa';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'aperiam';
    $request->region = 'optio';
    $request->requestId = 'eum';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'quia';

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
    $request->regionDisksResizeRequest->sizeGb = 'magnam';
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'inventore';
    $request->disk = 'sapiente';
    $request->fields = 'temporibus';
    $request->key = 'sapiente';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->project = 'vitae';
    $request->quotaUser = 'nobis';
    $request->region = 'adipisci';
    $request->requestId = 'itaque';
    $request->uploadType = 'unde';
    $request->uploadProtocol = 'beatae';
    $request->userIp = 'eveniet';

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
    $request->regionSetPolicyRequest->etag = 'voluptate';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
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
    $request->regionSetPolicyRequest->policy->etag = 'ea';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 872798;
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'est';
    $request->key = 'iusto';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'quo';
    $request->region = 'saepe';
    $request->resource = 'tempore';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'nisi';
    $request->userIp = 'nulla';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionSetLabelsRequest = new RegionSetLabelsRequest();
    $request->regionSetLabelsRequest->labelFingerprint = 'accusantium';
    $request->regionSetLabelsRequest->labels = [
        'et' => 'repudiandae',
        'delectus' => 'qui',
        'laboriosam' => 'neque',
        'ab' => 'quisquam',
    ];
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aperiam';
    $request->fields = 'delectus';
    $request->key = 'aut';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->project = 'molestias';
    $request->quotaUser = 'ducimus';
    $request->region = 'dolorem';
    $request->requestId = 'sapiente';
    $request->resource = 'error';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'veniam';
    $request->userIp = 'eligendi';

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
        'doloribus',
        'illum',
    ];
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'tempore';
    $request->key = 'incidunt';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'non';
    $request->quotaUser = 'officia';
    $request->region = 'magnam';
    $request->resource = 'quia';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'dolor';
    $request->userIp = 'maxime';

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
use \OpenAPI\OpenAPI\Models\Shared\DiskParams;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatusAsyncReplicationStatus;
use \OpenAPI\OpenAPI\Models\Shared\DiskResourceStatusAsyncReplicationStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskStatusEnum;
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
    $request->disk1->asyncPrimaryDisk->consistencyGroupPolicy = 'consequuntur';
    $request->disk1->asyncPrimaryDisk->consistencyGroupPolicyId = 'ullam';
    $request->disk1->asyncPrimaryDisk->disk = 'molestiae';
    $request->disk1->asyncPrimaryDisk->diskId = 'architecto';
    $request->disk1->asyncSecondaryDisks = [
        'maiores' => new DiskAsyncReplicationList(),
    ];
    $request->disk1->creationTimestamp = 'labore';
    $request->disk1->description = 'fugit';
    $request->disk1->diskEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->diskEncryptionKey->kmsKeyName = 'maxime';
    $request->disk1->diskEncryptionKey->kmsKeyServiceAccount = 'iusto';
    $request->disk1->diskEncryptionKey->rawKey = 'recusandae';
    $request->disk1->diskEncryptionKey->rsaEncryptedKey = 'iusto';
    $request->disk1->diskEncryptionKey->sha256 = 'pariatur';
    $request->disk1->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->disk1->id = 'enim';
    $request->disk1->kind = 'tempora';
    $request->disk1->labelFingerprint = 'voluptatum';
    $request->disk1->labels = [
        'itaque' => 'sit',
        'excepturi' => 'recusandae',
        'numquam' => 'architecto',
    ];
    $request->disk1->lastAttachTimestamp = 'fuga';
    $request->disk1->lastDetachTimestamp = 'iusto';
    $request->disk1->licenseCodes = [
        'dolores',
        'inventore',
        'ipsam',
    ];
    $request->disk1->licenses = [
        'officia',
        'et',
        'odit',
        'similique',
    ];
    $request->disk1->locationHint = 'labore';
    $request->disk1->name = 'Omar Medhurst';
    $request->disk1->options = 'provident';
    $request->disk1->params = new DiskParams();
    $request->disk1->params->resourceManagerTags = [
        'rem' => 'quos',
        'beatae' => 'perspiciatis',
        'fugit' => 'placeat',
    ];
    $request->disk1->physicalBlockSizeBytes = 'sapiente';
    $request->disk1->provisionedIops = 'assumenda';
    $request->disk1->provisionedThroughput = 'alias';
    $request->disk1->region = 'eligendi';
    $request->disk1->replicaZones = [
        'iusto',
        'eligendi',
    ];
    $request->disk1->resourcePolicies = [
        'dolorem',
        'vero',
    ];
    $request->disk1->resourceStatus = new DiskResourceStatus();
    $request->disk1->resourceStatus->asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus();
    $request->disk1->resourceStatus->asyncPrimaryDisk->state = DiskResourceStatusAsyncReplicationStatusStateEnum::STARTING;
    $request->disk1->resourceStatus->asyncSecondaryDisks = [
        'dignissimos' => new DiskResourceStatusAsyncReplicationStatus(),
        'facere' => new DiskResourceStatusAsyncReplicationStatus(),
        'eius' => new DiskResourceStatusAsyncReplicationStatus(),
        'accusamus' => new DiskResourceStatusAsyncReplicationStatus(),
    ];
    $request->disk1->satisfiesPzs = false;
    $request->disk1->selfLink = 'vero';
    $request->disk1->sizeGb = 'nisi';
    $request->disk1->sourceConsistencyGroupPolicy = 'recusandae';
    $request->disk1->sourceConsistencyGroupPolicyId = 'deleniti';
    $request->disk1->sourceDisk = 'nobis';
    $request->disk1->sourceDiskId = 'excepturi';
    $request->disk1->sourceImage = 'consequatur';
    $request->disk1->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->sourceImageEncryptionKey->kmsKeyName = 'distinctio';
    $request->disk1->sourceImageEncryptionKey->kmsKeyServiceAccount = 'similique';
    $request->disk1->sourceImageEncryptionKey->rawKey = 'porro';
    $request->disk1->sourceImageEncryptionKey->rsaEncryptedKey = 'consectetur';
    $request->disk1->sourceImageEncryptionKey->sha256 = 'molestias';
    $request->disk1->sourceImageId = 'modi';
    $request->disk1->sourceSnapshot = 'saepe';
    $request->disk1->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->disk1->sourceSnapshotEncryptionKey->kmsKeyName = 'qui';
    $request->disk1->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'dolor';
    $request->disk1->sourceSnapshotEncryptionKey->rawKey = 'sint';
    $request->disk1->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'ea';
    $request->disk1->sourceSnapshotEncryptionKey->sha256 = 'in';
    $request->disk1->sourceSnapshotId = 'ipsa';
    $request->disk1->sourceStorageObject = 'sequi';
    $request->disk1->status = DiskStatusEnum::RESTORING;
    $request->disk1->type = 'itaque';
    $request->disk1->users = [
        'adipisci',
        'sunt',
        'quo',
        'veniam',
    ];
    $request->disk1->zone = 'sit';
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolore';
    $request->diskPathParameter = 'possimus';
    $request->fields = 'dicta';
    $request->key = 'deleniti';
    $request->oauthToken = 'perspiciatis';
    $request->paths = [
        'dolor',
        'eum',
        'culpa',
    ];
    $request->prettyPrint = false;
    $request->project = 'iure';
    $request->quotaUser = 'harum';
    $request->region = 'sunt';
    $request->requestId = 'facere';
    $request->updateMask = 'dolores';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'repudiandae';
    $request->userIp = 'rerum';

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
