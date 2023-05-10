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
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sit';
    $request->fields = 'quos';
    $request->key = 'voluptas';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'illo';
    $request->quotaUser = 'sit';
    $request->requestId = 'culpa';
    $request->snapshot = 'blanditiis';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'ex';
    $request->userIp = 'dolorum';

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
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'ex';
    $request->key = 'nisi';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->project = 'facilis';
    $request->quotaUser = 'laborum';
    $request->snapshot = 'omnis';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'qui';
    $request->userIp = 'ipsam';

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
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corporis';
    $request->fields = 'at';
    $request->key = 'eligendi';
    $request->oauthToken = 'consequatur';
    $request->optionsRequestedPolicyVersion = 758285;
    $request->prettyPrint = false;
    $request->project = 'vero';
    $request->quotaUser = 'eligendi';
    $request->resource = 'facilis';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'in';
    $request->userIp = 'atque';

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
    $request->snapshot->architecture = SnapshotArchitectureEnum::X8664;
    $request->snapshot->autoCreated = false;
    $request->snapshot->chainName = 'fugit';
    $request->snapshot->creationSizeBytes = 'modi';
    $request->snapshot->creationTimestamp = 'rem';
    $request->snapshot->description = 'voluptates';
    $request->snapshot->diskSizeGb = 'cumque';
    $request->snapshot->downloadBytes = 'ex';
    $request->snapshot->guestFlush = false;
    $request->snapshot->id = 'voluptates';
    $request->snapshot->kind = 'voluptatum';
    $request->snapshot->labelFingerprint = 'distinctio';
    $request->snapshot->labels = [
        'aliquam' => 'accusantium',
    ];
    $request->snapshot->licenseCodes = [
        'et',
        'quo',
        'alias',
    ];
    $request->snapshot->licenses = [
        'impedit',
        'perspiciatis',
    ];
    $request->snapshot->locationHint = 'optio';
    $request->snapshot->name = 'Tonya Gleichner';
    $request->snapshot->satisfiesPzs = false;
    $request->snapshot->selfLink = 'sed';
    $request->snapshot->snapshotEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->snapshotEncryptionKey->kmsKeyName = 'distinctio';
    $request->snapshot->snapshotEncryptionKey->kmsKeyServiceAccount = 'quibusdam';
    $request->snapshot->snapshotEncryptionKey->rawKey = 'fugiat';
    $request->snapshot->snapshotEncryptionKey->rsaEncryptedKey = 'error';
    $request->snapshot->snapshotEncryptionKey->sha256 = 'necessitatibus';
    $request->snapshot->snapshotType = SnapshotSnapshotTypeEnum::ARCHIVE;
    $request->snapshot->sourceDisk = 'deleniti';
    $request->snapshot->sourceDiskEncryptionKey = new CustomerEncryptionKey();
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyName = 'fugiat';
    $request->snapshot->sourceDiskEncryptionKey->kmsKeyServiceAccount = 'temporibus';
    $request->snapshot->sourceDiskEncryptionKey->rawKey = 'expedita';
    $request->snapshot->sourceDiskEncryptionKey->rsaEncryptedKey = 'et';
    $request->snapshot->sourceDiskEncryptionKey->sha256 = 'autem';
    $request->snapshot->sourceDiskId = 'voluptas';
    $request->snapshot->sourceSnapshotSchedulePolicy = 'nemo';
    $request->snapshot->sourceSnapshotSchedulePolicyId = 'optio';
    $request->snapshot->status = SnapshotStatusEnum::DELETING;
    $request->snapshot->storageBytes = 'illo';
    $request->snapshot->storageBytesStatus = SnapshotStorageBytesStatusEnum::UPDATING;
    $request->snapshot->storageLocations = [
        'voluptate',
        'delectus',
        'ipsam',
        'ullam',
    ];
    $request->snapshot->userLicenses = [
        'at',
    ];
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'sunt';
    $request->key = 'quod';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->project = 'iusto';
    $request->quotaUser = 'aliquid';
    $request->requestId = 'qui';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'consequuntur';
    $request->userIp = 'nulla';

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
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'blanditiis';
    $request->filter = 'necessitatibus';
    $request->key = 'in';
    $request->maxResults = 119673;
    $request->oauthToken = 'soluta';
    $request->orderBy = 'delectus';
    $request->pageToken = 'quos';
    $request->prettyPrint = false;
    $request->project = 'quo';
    $request->quotaUser = 'dicta';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'ab';
    $request->userIp = 'quos';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'voluptatibus';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'a';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 450949;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illo';
    $request->fields = 'aut';
    $request->key = 'ratione';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'error';
    $request->quotaUser = 'voluptatum';
    $request->resource = 'aut';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'recusandae';
    $request->userIp = 'laborum';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetLabelsRequest = new GlobalSetLabelsRequest();
    $request->globalSetLabelsRequest->labelFingerprint = 'commodi';
    $request->globalSetLabelsRequest->labels = [
        'suscipit' => 'ratione',
    ];
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusamus';
    $request->fields = 'hic';
    $request->key = 'beatae';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->project = 'cum';
    $request->quotaUser = 'deleniti';
    $request->resource = 'sunt';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ullam';
    $request->userIp = 'deleniti';

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
        'laborum',
        'quidem',
    ];
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'impedit';
    $request->fields = 'totam';
    $request->key = 'alias';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'id';
    $request->resource = 'reprehenderit';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'doloribus';
    $request->userIp = 'quibusdam';

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
