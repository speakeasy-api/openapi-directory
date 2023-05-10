# snapshots

### Available Operations

* [computeSnapshotsDelete](#computesnapshotsdelete) - Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.
* [computeSnapshotsGet](#computesnapshotsget) - Returns the specified Snapshot resource.
* [computeSnapshotsGetIamPolicy](#computesnapshotsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeSnapshotsInsert](#computesnapshotsinsert) - Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.
* [computeSnapshotsList](#computesnapshotslist) - Retrieves the list of Snapshot resources contained within the specified project.
* [computeSnapshotsSetIamPolicy](#computesnapshotssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeSnapshotsSetLabels](#computesnapshotssetlabels) - Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.
* [computeSnapshotsTestIamPermissions](#computesnapshotstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeSnapshotsDelete

Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSnapshotsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'dolorum';
    $request->key = 'tempora';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->project = 'quas';
    $request->quotaUser = 'beatae';
    $request->requestId = 'odio';
    $request->snapshot = 'nostrum';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'vel';
    $request->userIp = 'nemo';

    $requestSecurity = new ComputeSnapshotsDeleteSecurity();
    $requestSecurity->option1 = new ComputeSnapshotsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->snapshots->computeSnapshotsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSnapshotsGet

Returns the specified Snapshot resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSnapshotsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ex';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'labore';
    $request->key = 'ducimus';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'adipisci';
    $request->snapshot = 'hic';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'explicabo';
    $request->userIp = 'modi';

    $requestSecurity = new ComputeSnapshotsGetSecurity();
    $requestSecurity->option1 = new ComputeSnapshotsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->snapshots->computeSnapshotsGet($request, $requestSecurity);

    if ($response->snapshot !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSnapshotsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSnapshotsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->fields = 'quasi';
    $request->key = 'cum';
    $request->oauthToken = 'nam';
    $request->optionsRequestedPolicyVersion = 570351;
    $request->prettyPrint = false;
    $request->project = 'pariatur';
    $request->quotaUser = 'pariatur';
    $request->resource = 'veniam';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'excepturi';
    $request->userIp = 'dolorum';

    $requestSecurity = new ComputeSnapshotsGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeSnapshotsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->snapshots->computeSnapshotsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSnapshotsInsert

Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsInsertRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSnapshotsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->snapshot = new Snapshot();
    $request->snapshot->architecture = SnapshotArchitectureEnum::ARCHITECTURE_UNSPECIFIED;
    $request->snapshot->autoCreated = false;
    $request->snapshot->chainName = 'quis';
    $request->snapshot->creationSizeBytes = 'molestias';
    $request->snapshot->creationTimestamp = 'non';
    $request->snapshot->description = 'laborum';
    $request->snapshot->diskSizeGb = 'fuga';
    $request->snapshot->downloadBytes = 'corrupti';
    $request->snapshot->guestFlush = false;
    $request->snapshot->guestOsFeatures = [
        new GuestOsFeature(),
    ];
    $request->snapshot->id = 'repudiandae';
    $request->snapshot->kind = 'iusto';
    $request->snapshot->labelFingerprint = 'quae';
    $request->snapshot->labels = [
        'ex' => 'itaque',
        'cupiditate' => 'repudiandae',
        'atque' => 'consequatur',
    ];
    $request->snapshot->licenseCodes = [
        'occaecati',
        'ea',
        'aliquid',
    ];
    $request->snapshot->licenses = [
        'deleniti',
        'provident',
    ];
    $request->snapshot->locationHint = 'mollitia';
    $request->snapshot->maxRetentionDays = 494886;
    $request->snapshot->name = 'Johnnie Ruecker';
    $request->snapshot->satisfiesPzs = false;
    $request->snapshot->selfLink = 'voluptatem';
    $request->snapshot->selfLinkWithId = 'officiis';
    $request->snapshot->snapshotEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->snapshotEncryptionKey->kmsKeyName = 'vero';
    $request->snapshot->snapshotEncryptionKey->kmsKeyServiceAccount = 'eligendi';
    $request->snapshot->snapshotEncryptionKey->rawKey = 'pariatur';
    $request->snapshot->snapshotEncryptionKey->rsaEncryptedKey = 'rem';
    $request->snapshot->snapshotEncryptionKey->sha256 = 'quia';
    $request->snapshot->snapshotType = SnapshotSnapshotTypeEnum::ARCHIVE;
    $request->snapshot->sourceDisk = 'doloremque';
    $request->snapshot->sourceDiskEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyName = 'soluta';
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyServiceAccount = 'ex';
    $request->snapshot->sourceDiskEncryptionKey->rawKey = 'impedit';
    $request->snapshot->sourceDiskEncryptionKey->rsaEncryptedKey = 'rem';
    $request->snapshot->sourceDiskEncryptionKey->sha256 = 'aut';
    $request->snapshot->sourceDiskForRecoveryCheckpoint = 'sequi';
    $request->snapshot->sourceDiskId = 'accusantium';
    $request->snapshot->sourceInstantSnapshot = 'reprehenderit';
    $request->snapshot->sourceInstantSnapshotId = 'molestiae';
    $request->snapshot->sourceSnapshotSchedulePolicy = 'eos';
    $request->snapshot->sourceSnapshotSchedulePolicyId = 'pariatur';
    $request->snapshot->status = SnapshotStatusEnum::FAILED;
    $request->snapshot->storageBytes = 'ipsum';
    $request->snapshot->storageBytesStatus = SnapshotStorageBytesStatusEnum::UPDATING;
    $request->snapshot->storageLocations = [
        'et',
    ];
    $request->snapshot->userLicenses = [
        'numquam',
        'debitis',
        'tempore',
        'modi',
    ];
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->fields = 'eligendi';
    $request->key = 'odio';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->project = 'explicabo';
    $request->quotaUser = 'consequuntur';
    $request->requestId = 'maxime';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'ipsa';

    $requestSecurity = new ComputeSnapshotsInsertSecurity();
    $requestSecurity->option1 = new ComputeSnapshotsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->snapshots->computeSnapshotsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSnapshotsList

Retrieves the list of Snapshot resources contained within the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSnapshotsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'est';
    $request->fields = 'velit';
    $request->filter = 'voluptates';
    $request->key = 'iure';
    $request->maxResults = 227875;
    $request->oauthToken = 'inventore';
    $request->orderBy = 'dolores';
    $request->pageToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'laudantium';
    $request->quotaUser = 'ratione';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'a';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'incidunt';

    $requestSecurity = new ComputeSnapshotsListSecurity();
    $requestSecurity->option1 = new ComputeSnapshotsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->snapshots->computeSnapshotsList($request, $requestSecurity);

    if ($response->snapshotList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSnapshotsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSetPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSnapshotsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'sequi';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'numquam';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 684106;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'debitis';
    $request->fields = 'aut';
    $request->key = 'quidem';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'voluptatum';
    $request->resource = 'a';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'porro';

    $requestSecurity = new ComputeSnapshotsSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeSnapshotsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->snapshots->computeSnapshotsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSnapshotsSetLabels

Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSnapshotsSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalSetLabelsRequest = new GlobalSetLabelsRequest();
    $request->globalSetLabelsRequest->labelFingerprint = 'ullam';
    $request->globalSetLabelsRequest->labels = [
        'corrupti' => 'tempore',
        'vel' => 'assumenda',
        'in' => 'nesciunt',
    ];
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quia';
    $request->fields = 'animi';
    $request->key = 'maxime';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'qui';
    $request->resource = 'laudantium';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'quae';

    $requestSecurity = new ComputeSnapshotsSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeSnapshotsSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->snapshots->computeSnapshotsSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSnapshotsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSnapshotsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSnapshotsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'repellendus',
    ];
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatem';
    $request->fields = 'nemo';
    $request->key = 'maxime';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->project = 'vitae';
    $request->quotaUser = 'nulla';
    $request->resource = 'adipisci';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'provident';
    $request->userIp = 'fugit';

    $requestSecurity = new ComputeSnapshotsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeSnapshotsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->snapshots->computeSnapshotsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
