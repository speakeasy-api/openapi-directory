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
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->fields = 'ipsum';
    $request->key = 'perspiciatis';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'totam';
    $request->quotaUser = 'mollitia';
    $request->requestId = 'veritatis';
    $request->snapshot = 'eius';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'perferendis';
    $request->userIp = 'aliquid';

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
    $request->accessToken = 'quos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sunt';
    $request->fields = 'dolor';
    $request->key = 'quisquam';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->project = 'laudantium';
    $request->quotaUser = 'laboriosam';
    $request->snapshot = 'repellendus';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'neque';
    $request->userIp = 'omnis';

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
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'illo';
    $request->key = 'esse';
    $request->oauthToken = 'enim';
    $request->optionsRequestedPolicyVersion = 972189;
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'similique';
    $request->resource = 'iste';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'autem';
    $request->userIp = 'similique';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->snapshot = new Snapshot();
    $request->snapshot->architecture = SnapshotArchitectureEnum::ARCHITECTURE_UNSPECIFIED;
    $request->snapshot->autoCreated = false;
    $request->snapshot->chainName = 'corporis';
    $request->snapshot->creationSizeBytes = 'error';
    $request->snapshot->creationTimestamp = 'soluta';
    $request->snapshot->description = 'nihil';
    $request->snapshot->diskSizeGb = 'fugit';
    $request->snapshot->downloadBytes = 'debitis';
    $request->snapshot->id = 'quidem';
    $request->snapshot->kind = 'vel';
    $request->snapshot->labelFingerprint = 'dignissimos';
    $request->snapshot->labels = [
        'vel' => 'accusantium',
        'consectetur' => 'sit',
    ];
    $request->snapshot->licenseCodes = [
        'accusamus',
        'sunt',
        'molestias',
        'neque',
    ];
    $request->snapshot->licenses = [
        'voluptas',
        'eligendi',
    ];
    $request->snapshot->locationHint = 'explicabo';
    $request->snapshot->name = 'Merle Strosin';
    $request->snapshot->satisfiesPzs = false;
    $request->snapshot->selfLink = 'iure';
    $request->snapshot->snapshotEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->snapshotEncryptionKey->kmsKeyName = 'aliquid';
    $request->snapshot->snapshotEncryptionKey->kmsKeyServiceAccount = 'dignissimos';
    $request->snapshot->snapshotEncryptionKey->rawKey = 'perspiciatis';
    $request->snapshot->snapshotEncryptionKey->rsaEncryptedKey = 'quae';
    $request->snapshot->snapshotEncryptionKey->sha256 = 'recusandae';
    $request->snapshot->snapshotType = SnapshotSnapshotTypeEnum::STANDARD;
    $request->snapshot->sourceDisk = 'doloremque';
    $request->snapshot->sourceDiskEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyName = 'porro';
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyServiceAccount = 'inventore';
    $request->snapshot->sourceDiskEncryptionKey->rawKey = 'nisi';
    $request->snapshot->sourceDiskEncryptionKey->rsaEncryptedKey = 'laborum';
    $request->snapshot->sourceDiskEncryptionKey->sha256 = 'molestiae';
    $request->snapshot->sourceDiskId = 'harum';
    $request->snapshot->sourceSnapshotSchedulePolicy = 'id';
    $request->snapshot->sourceSnapshotSchedulePolicyId = 'dolore';
    $request->snapshot->status = SnapshotStatusEnum::FAILED;
    $request->snapshot->storageBytes = 'rem';
    $request->snapshot->storageBytesStatus = SnapshotStorageBytesStatusEnum::UPDATING;
    $request->snapshot->storageLocations = [
        'magnam',
    ];
    $request->accessToken = 'ut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'unde';
    $request->fields = 'repellat';
    $request->key = 'voluptas';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'dignissimos';
    $request->quotaUser = 'ipsa';
    $request->requestId = 'itaque';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'ipsa';
    $request->userIp = 'aliquam';

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
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illo';
    $request->fields = 'id';
    $request->filter = 'dolores';
    $request->key = 'soluta';
    $request->maxResults = 634157;
    $request->oauthToken = 'fugit';
    $request->orderBy = 'nemo';
    $request->pageToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->project = 'voluptates';
    $request->quotaUser = 'commodi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'odio';
    $request->userIp = 'ad';

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
    $request->globalSetPolicyRequest->etag = 'voluptatum';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'perferendis';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 463088;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolor';
    $request->fields = 'dolore';
    $request->key = 'vel';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->project = 'perferendis';
    $request->quotaUser = 'iste';
    $request->resource = 'esse';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'nemo';

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
    $request->globalSetLabelsRequest->labelFingerprint = 'sapiente';
    $request->globalSetLabelsRequest->labels = [
        'eum' => 'consequatur',
        'culpa' => 'impedit',
        'culpa' => 'quisquam',
        'deserunt' => 'nisi',
    ];
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->fields = 'repudiandae';
    $request->key = 'perspiciatis';
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->project = 'laboriosam';
    $request->quotaUser = 'voluptate';
    $request->resource = 'ad';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'deserunt';

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
        'porro',
        'eveniet',
        'autem',
        'quae',
    ];
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sunt';
    $request->fields = 'optio';
    $request->key = 'odio';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'consectetur';
    $request->resource = 'excepturi';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'ipsam';

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
