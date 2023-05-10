# instantSnapshots

### Available Operations

* [computeInstantSnapshotsAggregatedList](#computeinstantsnapshotsaggregatedlist) - Retrieves an aggregated list of instantSnapshots.
* [computeInstantSnapshotsDelete](#computeinstantsnapshotsdelete) - Deletes the specified InstantSnapshot resource. Keep in mind that deleting a single instantSnapshot might not necessarily delete all the data on that instantSnapshot. If any data on the instantSnapshot that is marked for deletion is needed for subsequent instantSnapshots, the data will be moved to the next corresponding instantSnapshot. For more information, see Deleting instantSnapshots.
* [computeInstantSnapshotsExport](#computeinstantsnapshotsexport) - Export the changed blocks between two instant snapshots to a customer's bucket in the user specified format.
* [computeInstantSnapshotsGet](#computeinstantsnapshotsget) - Returns the specified InstantSnapshot resource in the specified zone.
* [computeInstantSnapshotsGetIamPolicy](#computeinstantsnapshotsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeInstantSnapshotsInsert](#computeinstantsnapshotsinsert) - Creates an instant snapshot in the specified zone.
* [computeInstantSnapshotsList](#computeinstantsnapshotslist) - Retrieves the list of InstantSnapshot resources contained within the specified zone.
* [computeInstantSnapshotsSetIamPolicy](#computeinstantsnapshotssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeInstantSnapshotsSetLabels](#computeinstantsnapshotssetlabels) - Sets the labels on a instantSnapshot in the given zone. To learn more about labels, read the Labeling Resources documentation.
* [computeInstantSnapshotsTestIamPermissions](#computeinstantsnapshotstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeInstantSnapshotsAggregatedList

Retrieves an aggregated list of instantSnapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstantSnapshotsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'animi';
    $request->fields = 'ducimus';
    $request->filter = 'perferendis';
    $request->includeAllScopes = false;
    $request->key = 'impedit';
    $request->maxResults = 968773;
    $request->oauthToken = 'quibusdam';
    $request->orderBy = 'veniam';
    $request->pageToken = 'pariatur';
    $request->prettyPrint = false;
    $request->project = 'commodi';
    $request->quotaUser = 'iste';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'distinctio';

    $requestSecurity = new ComputeInstantSnapshotsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeInstantSnapshotsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instantSnapshots->computeInstantSnapshotsAggregatedList($request, $requestSecurity);

    if ($response->instantSnapshotAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstantSnapshotsDelete

Deletes the specified InstantSnapshot resource. Keep in mind that deleting a single instantSnapshot might not necessarily delete all the data on that instantSnapshot. If any data on the instantSnapshot that is marked for deletion is needed for subsequent instantSnapshots, the data will be moved to the next corresponding instantSnapshot. For more information, see Deleting instantSnapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstantSnapshotsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptas';
    $request->fields = 'magnam';
    $request->instantSnapshot = 'ad';
    $request->key = 'quae';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->project = 'iure';
    $request->quotaUser = 'voluptate';
    $request->requestId = 'illum';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'perspiciatis';
    $request->userIp = 'accusamus';
    $request->zone = 'laborum';

    $requestSecurity = new ComputeInstantSnapshotsDeleteSecurity();
    $requestSecurity->option1 = new ComputeInstantSnapshotsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instantSnapshots->computeInstantSnapshotsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstantSnapshotsExport

Export the changed blocks between two instant snapshots to a customer's bucket in the user specified format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstantSnapshotsExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstantSnapshotExportParams;
use \OpenAPI\OpenAPI\Models\Shared\CustomerEncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\InstantSnapshotExportParamsOutputTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsExportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsExportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsExportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstantSnapshotsExportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instantSnapshotsExportRequest = new InstantSnapshotsExportRequest();
    $request->instantSnapshotsExportRequest->exportParams = new InstantSnapshotExportParams();
    $request->instantSnapshotsExportRequest->exportParams->baseInstantSnapshot = 'ratione';
    $request->instantSnapshotsExportRequest->exportParams->bucketName = 'facere';
    $request->instantSnapshotsExportRequest->exportParams->encryptionKey = new CustomerEncryptionKey();
    $request->instantSnapshotsExportRequest->exportParams->encryptionKey->kmsKeyName = 'eius';
    $request->instantSnapshotsExportRequest->exportParams->encryptionKey->kmsKeyServiceAccount = 'perspiciatis';
    $request->instantSnapshotsExportRequest->exportParams->encryptionKey->rawKey = 'consequuntur';
    $request->instantSnapshotsExportRequest->exportParams->encryptionKey->rsaEncryptedKey = 'earum';
    $request->instantSnapshotsExportRequest->exportParams->encryptionKey->sha256 = 'quibusdam';
    $request->instantSnapshotsExportRequest->exportParams->objectName = 'inventore';
    $request->instantSnapshotsExportRequest->exportParams->outputType = InstantSnapshotExportParamsOutputTypeEnum::INVALID;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fuga';
    $request->fields = 'odit';
    $request->instantSnapshot = 'minus';
    $request->key = 'sunt';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->project = 'exercitationem';
    $request->quotaUser = 'magnam';
    $request->requestId = 'veniam';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'minima';
    $request->userIp = 'officiis';
    $request->zone = 'unde';

    $requestSecurity = new ComputeInstantSnapshotsExportSecurity();
    $requestSecurity->option1 = new ComputeInstantSnapshotsExportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instantSnapshots->computeInstantSnapshotsExport($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstantSnapshotsGet

Returns the specified InstantSnapshot resource in the specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstantSnapshotsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cumque';
    $request->fields = 'cumque';
    $request->instantSnapshot = 'et';
    $request->key = 'praesentium';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->project = 'eveniet';
    $request->quotaUser = 'est';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'unde';
    $request->userIp = 'consequatur';
    $request->zone = 'dicta';

    $requestSecurity = new ComputeInstantSnapshotsGetSecurity();
    $requestSecurity->option1 = new ComputeInstantSnapshotsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instantSnapshots->computeInstantSnapshotsGet($request, $requestSecurity);

    if ($response->instantSnapshot !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstantSnapshotsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstantSnapshotsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->fields = 'sequi';
    $request->key = 'culpa';
    $request->oauthToken = 'facere';
    $request->optionsRequestedPolicyVersion = 129870;
    $request->prettyPrint = false;
    $request->project = 'nulla';
    $request->quotaUser = 'laborum';
    $request->resource = 'animi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'totam';
    $request->userIp = 'incidunt';
    $request->zone = 'similique';

    $requestSecurity = new ComputeInstantSnapshotsGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeInstantSnapshotsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instantSnapshots->computeInstantSnapshotsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstantSnapshotsInsert

Creates an instant snapshot in the specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstantSnapshot;
use \OpenAPI\OpenAPI\Models\Shared\InstantSnapshotArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstantSnapshotResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\InstantSnapshotStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstantSnapshotsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instantSnapshot = new InstantSnapshot();
    $request->instantSnapshot->architecture = InstantSnapshotArchitectureEnum::ARM64;
    $request->instantSnapshot->creationTimestamp = 'ratione';
    $request->instantSnapshot->description = 'illum';
    $request->instantSnapshot->diskSizeGb = 'sed';
    $request->instantSnapshot->guestFlush = false;
    $request->instantSnapshot->id = 'amet';
    $request->instantSnapshot->kind = 'aut';
    $request->instantSnapshot->labelFingerprint = 'voluptates';
    $request->instantSnapshot->labels = [
        'tenetur' => 'dignissimos',
        'dolor' => 'totam',
        'beatae' => 'vitae',
        'laborum' => 'beatae',
    ];
    $request->instantSnapshot->name = 'Sally Franey';
    $request->instantSnapshot->region = 'rerum';
    $request->instantSnapshot->resourceStatus = new InstantSnapshotResourceStatus();
    $request->instantSnapshot->resourceStatus->storageSizeBytes = 'nulla';
    $request->instantSnapshot->satisfiesPzs = false;
    $request->instantSnapshot->selfLink = 'ducimus';
    $request->instantSnapshot->selfLinkWithId = 'eveniet';
    $request->instantSnapshot->sourceDisk = 'repellendus';
    $request->instantSnapshot->sourceDiskId = 'enim';
    $request->instantSnapshot->status = InstantSnapshotStatusEnum::DELETING;
    $request->instantSnapshot->zone = 'veniam';
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vel';
    $request->fields = 'aspernatur';
    $request->key = 'veritatis';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'deleniti';
    $request->requestId = 'doloribus';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'iusto';
    $request->zone = 'adipisci';

    $requestSecurity = new ComputeInstantSnapshotsInsertSecurity();
    $requestSecurity->option1 = new ComputeInstantSnapshotsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instantSnapshots->computeInstantSnapshotsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstantSnapshotsList

Retrieves the list of InstantSnapshot resources contained within the specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstantSnapshotsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eum';
    $request->fields = 'modi';
    $request->filter = 'cumque';
    $request->key = 'fugit';
    $request->maxResults = 33457;
    $request->oauthToken = 'fuga';
    $request->orderBy = 'doloremque';
    $request->pageToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'veritatis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'omnis';
    $request->userIp = 'commodi';
    $request->zone = 'dicta';

    $requestSecurity = new ComputeInstantSnapshotsListSecurity();
    $requestSecurity->option1 = new ComputeInstantSnapshotsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instantSnapshots->computeInstantSnapshotsList($request, $requestSecurity);

    if ($response->instantSnapshotList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstantSnapshotsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsSetIamPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstantSnapshotsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->zoneSetPolicyRequest = new ZoneSetPolicyRequest();
    $request->zoneSetPolicyRequest->bindings = [
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->etag = 'ut';
    $request->zoneSetPolicyRequest->policy = new Policy();
    $request->zoneSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->zoneSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->policy->etag = 'nulla';
    $request->zoneSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->zoneSetPolicyRequest->policy->version = 726563;
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'velit';
    $request->key = 'sed';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->project = 'atque';
    $request->quotaUser = 'perspiciatis';
    $request->resource = 'odit';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'earum';
    $request->userIp = 'iusto';
    $request->zone = 'atque';

    $requestSecurity = new ComputeInstantSnapshotsSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeInstantSnapshotsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instantSnapshots->computeInstantSnapshotsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstantSnapshotsSetLabels

Sets the labels on a instantSnapshot in the given zone. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ZoneSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstantSnapshotsSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->zoneSetLabelsRequest = new ZoneSetLabelsRequest();
    $request->zoneSetLabelsRequest->labelFingerprint = 'dolores';
    $request->zoneSetLabelsRequest->labels = [
        'nam' => 'exercitationem',
        'architecto' => 'consequuntur',
        'impedit' => 'deleniti',
        'esse' => 'voluptatum',
    ];
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusantium';
    $request->fields = 'nobis';
    $request->key = 'asperiores';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->project = 'tempora';
    $request->quotaUser = 'voluptatum';
    $request->requestId = 'a';
    $request->resource = 'corrupti';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'hic';
    $request->userIp = 'blanditiis';
    $request->zone = 'maiores';

    $requestSecurity = new ComputeInstantSnapshotsSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeInstantSnapshotsSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instantSnapshots->computeInstantSnapshotsSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstantSnapshotsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstantSnapshotsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstantSnapshotsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'a',
        'alias',
        'tempore',
    ];
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officiis';
    $request->fields = 'dicta';
    $request->key = 'maiores';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->project = 'perferendis';
    $request->quotaUser = 'eum';
    $request->resource = 'nulla';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'pariatur';
    $request->userIp = 'quas';
    $request->zone = 'sequi';

    $requestSecurity = new ComputeInstantSnapshotsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeInstantSnapshotsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instantSnapshots->computeInstantSnapshotsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
