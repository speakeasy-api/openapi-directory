# regionInstantSnapshots

### Available Operations

* [computeRegionInstantSnapshotsDelete](#computeregioninstantsnapshotsdelete) - Deletes the specified InstantSnapshot resource. Keep in mind that deleting a single instantSnapshot might not necessarily delete all the data on that instantSnapshot. If any data on the instantSnapshot that is marked for deletion is needed for subsequent instantSnapshots, the data will be moved to the next corresponding instantSnapshot. For more information, see Deleting instantSnapshots.
* [computeRegionInstantSnapshotsExport](#computeregioninstantsnapshotsexport) - Export the changed blocks between two instant snapshots to a customer's bucket in the user specified format.
* [computeRegionInstantSnapshotsGet](#computeregioninstantsnapshotsget) - Returns the specified InstantSnapshot resource in the specified region.
* [computeRegionInstantSnapshotsGetIamPolicy](#computeregioninstantsnapshotsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeRegionInstantSnapshotsInsert](#computeregioninstantsnapshotsinsert) - Creates an instant snapshot in the specified region.
* [computeRegionInstantSnapshotsList](#computeregioninstantsnapshotslist) - Retrieves the list of InstantSnapshot resources contained within the specified region.
* [computeRegionInstantSnapshotsSetIamPolicy](#computeregioninstantsnapshotssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeRegionInstantSnapshotsSetLabels](#computeregioninstantsnapshotssetlabels) - Sets the labels on a instantSnapshot in the given region. To learn more about labels, read the Labeling Resources documentation.
* [computeRegionInstantSnapshotsTestIamPermissions](#computeregioninstantsnapshotstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionInstantSnapshotsDelete

Deletes the specified InstantSnapshot resource. Keep in mind that deleting a single instantSnapshot might not necessarily delete all the data on that instantSnapshot. If any data on the instantSnapshot that is marked for deletion is needed for subsequent instantSnapshots, the data will be moved to the next corresponding instantSnapshot. For more information, see Deleting instantSnapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstantSnapshotsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quo';
    $request->fields = 'optio';
    $request->instantSnapshot = 'accusamus';
    $request->key = 'ipsa';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'similique';
    $request->region = 'expedita';
    $request->requestId = 'quibusdam';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'et';
    $request->userIp = 'cupiditate';

    $requestSecurity = new ComputeRegionInstantSnapshotsDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionInstantSnapshotsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstantSnapshots->computeRegionInstantSnapshotsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstantSnapshotsExport

Export the changed blocks between two instant snapshots to a customer's bucket in the user specified format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstantSnapshotsExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstantSnapshotExportParams;
use \OpenAPI\OpenAPI\Models\Shared\CustomerEncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\InstantSnapshotExportParamsOutputTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsExportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsExportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsExportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstantSnapshotsExportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInstantSnapshotsExportRequest = new RegionInstantSnapshotsExportRequest();
    $request->regionInstantSnapshotsExportRequest->exportParams = new InstantSnapshotExportParams();
    $request->regionInstantSnapshotsExportRequest->exportParams->baseInstantSnapshot = 'rem';
    $request->regionInstantSnapshotsExportRequest->exportParams->bucketName = 'facere';
    $request->regionInstantSnapshotsExportRequest->exportParams->encryptionKey = new CustomerEncryptionKey();
    $request->regionInstantSnapshotsExportRequest->exportParams->encryptionKey->kmsKeyName = 'magni';
    $request->regionInstantSnapshotsExportRequest->exportParams->encryptionKey->kmsKeyServiceAccount = 'reprehenderit';
    $request->regionInstantSnapshotsExportRequest->exportParams->encryptionKey->rawKey = 'omnis';
    $request->regionInstantSnapshotsExportRequest->exportParams->encryptionKey->rsaEncryptedKey = 'maxime';
    $request->regionInstantSnapshotsExportRequest->exportParams->encryptionKey->sha256 = 'vitae';
    $request->regionInstantSnapshotsExportRequest->exportParams->objectName = 'alias';
    $request->regionInstantSnapshotsExportRequest->exportParams->outputType = InstantSnapshotExportParamsOutputTypeEnum::METADATA_ONLY;
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsam';
    $request->fields = 'ab';
    $request->instantSnapshot = 'aliquid';
    $request->key = 'doloribus';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->project = 'in';
    $request->quotaUser = 'praesentium';
    $request->region = 'rerum';
    $request->requestId = 'repudiandae';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'vel';
    $request->userIp = 'fugit';

    $requestSecurity = new ComputeRegionInstantSnapshotsExportSecurity();
    $requestSecurity->option1 = new ComputeRegionInstantSnapshotsExportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstantSnapshots->computeRegionInstantSnapshotsExport($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstantSnapshotsGet

Returns the specified InstantSnapshot resource in the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstantSnapshotsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'ea';
    $request->instantSnapshot = 'odit';
    $request->key = 'quos';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'ullam';
    $request->region = 'ipsa';
    $request->uploadType = 'ratione';
    $request->uploadProtocol = 'natus';
    $request->userIp = 'vel';

    $requestSecurity = new ComputeRegionInstantSnapshotsGetSecurity();
    $requestSecurity->option1 = new ComputeRegionInstantSnapshotsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstantSnapshots->computeRegionInstantSnapshotsGet($request, $requestSecurity);

    if ($response->instantSnapshot !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstantSnapshotsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstantSnapshotsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'esse';
    $request->fields = 'debitis';
    $request->key = 'esse';
    $request->oauthToken = 'aspernatur';
    $request->optionsRequestedPolicyVersion = 721030;
    $request->prettyPrint = false;
    $request->project = 'neque';
    $request->quotaUser = 'laborum';
    $request->region = 'autem';
    $request->resource = 'minima';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'qui';
    $request->userIp = 'labore';

    $requestSecurity = new ComputeRegionInstantSnapshotsGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeRegionInstantSnapshotsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstantSnapshots->computeRegionInstantSnapshotsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstantSnapshotsInsert

Creates an instant snapshot in the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstantSnapshot;
use \OpenAPI\OpenAPI\Models\Shared\InstantSnapshotArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstantSnapshotResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\InstantSnapshotStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstantSnapshotsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instantSnapshot = new InstantSnapshot();
    $request->instantSnapshot->architecture = InstantSnapshotArchitectureEnum::ARCHITECTURE_UNSPECIFIED;
    $request->instantSnapshot->creationTimestamp = 'minima';
    $request->instantSnapshot->description = 'molestiae';
    $request->instantSnapshot->diskSizeGb = 'voluptatibus';
    $request->instantSnapshot->guestFlush = false;
    $request->instantSnapshot->id = 'sint';
    $request->instantSnapshot->kind = 'libero';
    $request->instantSnapshot->labelFingerprint = 'nobis';
    $request->instantSnapshot->labels = [
        'recusandae' => 'repellat',
        'iure' => 'aspernatur',
    ];
    $request->instantSnapshot->name = 'Leon Beier';
    $request->instantSnapshot->region = 'sunt';
    $request->instantSnapshot->resourceStatus = new InstantSnapshotResourceStatus();
    $request->instantSnapshot->resourceStatus->storageSizeBytes = 'at';
    $request->instantSnapshot->satisfiesPzs = false;
    $request->instantSnapshot->selfLink = 'unde';
    $request->instantSnapshot->selfLinkWithId = 'provident';
    $request->instantSnapshot->sourceDisk = 'nam';
    $request->instantSnapshot->sourceDiskId = 'voluptas';
    $request->instantSnapshot->status = InstantSnapshotStatusEnum::DELETING;
    $request->instantSnapshot->zone = 'et';
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vero';
    $request->fields = 'repudiandae';
    $request->key = 'sapiente';
    $request->oauthToken = 'illo';
    $request->prettyPrint = false;
    $request->project = 'commodi';
    $request->quotaUser = 'voluptatum';
    $request->region = 'nam';
    $request->requestId = 'vel';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'optio';
    $request->userIp = 'facilis';

    $requestSecurity = new ComputeRegionInstantSnapshotsInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionInstantSnapshotsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstantSnapshots->computeRegionInstantSnapshotsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstantSnapshotsList

Retrieves the list of InstantSnapshot resources contained within the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstantSnapshotsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolores';
    $request->fields = 'distinctio';
    $request->filter = 'modi';
    $request->key = 'dolorum';
    $request->maxResults = 594801;
    $request->oauthToken = 'totam';
    $request->orderBy = 'ipsam';
    $request->pageToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'repudiandae';
    $request->quotaUser = 'fugiat';
    $request->region = 'magni';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'dolore';
    $request->userIp = 'est';

    $requestSecurity = new ComputeRegionInstantSnapshotsListSecurity();
    $requestSecurity->option1 = new ComputeRegionInstantSnapshotsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstantSnapshots->computeRegionInstantSnapshotsList($request, $requestSecurity);

    if ($response->instantSnapshotList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstantSnapshotsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsSetIamPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstantSnapshotsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionSetPolicyRequest = new RegionSetPolicyRequest();
    $request->regionSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->etag = 'excepturi';
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
    $request->regionSetPolicyRequest->policy->etag = 'fuga';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 351263;
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eius';
    $request->fields = 'voluptatem';
    $request->key = 'accusamus';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'esse';
    $request->region = 'dolores';
    $request->resource = 'laboriosam';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'consequatur';

    $requestSecurity = new ComputeRegionInstantSnapshotsSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeRegionInstantSnapshotsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstantSnapshots->computeRegionInstantSnapshotsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstantSnapshotsSetLabels

Sets the labels on a instantSnapshot in the given region. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstantSnapshotsSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionSetLabelsRequest = new RegionSetLabelsRequest();
    $request->regionSetLabelsRequest->labelFingerprint = 'porro';
    $request->regionSetLabelsRequest->labels = [
        'asperiores' => 'aut',
    ];
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquam';
    $request->fields = 'architecto';
    $request->key = 'excepturi';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'enim';
    $request->quotaUser = 'architecto';
    $request->region = 'atque';
    $request->requestId = 'cumque';
    $request->resource = 'saepe';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'incidunt';
    $request->userIp = 'dicta';

    $requestSecurity = new ComputeRegionInstantSnapshotsSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeRegionInstantSnapshotsSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstantSnapshots->computeRegionInstantSnapshotsSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstantSnapshotsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstantSnapshotsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstantSnapshotsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'excepturi',
        'natus',
        'hic',
    ];
    $request->accessToken = 'ut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'delectus';
    $request->key = 'eum';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'beatae';
    $request->quotaUser = 'quod';
    $request->region = 'sapiente';
    $request->resource = 'quasi';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'adipisci';
    $request->userIp = 'a';

    $requestSecurity = new ComputeRegionInstantSnapshotsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionInstantSnapshotsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstantSnapshots->computeRegionInstantSnapshotsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
