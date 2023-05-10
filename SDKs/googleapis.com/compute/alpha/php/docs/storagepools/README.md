# storagePools

### Available Operations

* [computeStoragePoolsAggregatedList](#computestoragepoolsaggregatedlist) - Retrieves an aggregated list of storage pools.
* [computeStoragePoolsDelete](#computestoragepoolsdelete) - Deletes the specified storage pool. Deleting a storagePool removes its data permanently and is irreversible. However, deleting a storagePool does not delete any snapshots previously made from the storagePool. You must separately delete snapshots.
* [computeStoragePoolsGet](#computestoragepoolsget) - Returns a specified storage pool. Gets a list of available storage pools by making a list() request.
* [computeStoragePoolsGetIamPolicy](#computestoragepoolsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeStoragePoolsInsert](#computestoragepoolsinsert) - Creates a storage pool in the specified project using the data in the request.
* [computeStoragePoolsList](#computestoragepoolslist) - Retrieves a list of storage pools contained within the specified zone.
* [computeStoragePoolsSetIamPolicy](#computestoragepoolssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeStoragePoolsSetLabels](#computestoragepoolssetlabels) - Sets the labels on a storage pools. To learn more about labels, read the Labeling Resources documentation.
* [computeStoragePoolsTestIamPermissions](#computestoragepoolstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeStoragePoolsUpdate](#computestoragepoolsupdate) - Updates the specified storagePool with the data included in the request. The update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: size_tb and provisioned_iops.

## computeStoragePoolsAggregatedList

Retrieves an aggregated list of storage pools.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeStoragePoolsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellendus';
    $request->fields = 'provident';
    $request->filter = 'delectus';
    $request->includeAllScopes = false;
    $request->key = 'repudiandae';
    $request->maxResults = 898503;
    $request->oauthToken = 'dolor';
    $request->orderBy = 'iusto';
    $request->pageToken = 'voluptate';
    $request->prettyPrint = false;
    $request->project = 'nemo';
    $request->quotaUser = 'delectus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'a';
    $request->userIp = 'delectus';

    $requestSecurity = new ComputeStoragePoolsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeStoragePoolsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storagePools->computeStoragePoolsAggregatedList($request, $requestSecurity);

    if ($response->storagePoolAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeStoragePoolsDelete

Deletes the specified storage pool. Deleting a storagePool removes its data permanently and is irreversible. However, deleting a storagePool does not delete any snapshots previously made from the storagePool. You must separately delete snapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeStoragePoolsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'est';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'hic';
    $request->key = 'dolorum';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'tempora';
    $request->quotaUser = 'velit';
    $request->requestId = 'ullam';
    $request->storagePool = 'totam';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'sint';
    $request->userIp = 'numquam';
    $request->zone = 'quos';

    $requestSecurity = new ComputeStoragePoolsDeleteSecurity();
    $requestSecurity->option1 = new ComputeStoragePoolsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storagePools->computeStoragePoolsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeStoragePoolsGet

Returns a specified storage pool. Gets a list of available storage pools by making a list() request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeStoragePoolsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ex';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'ex';
    $request->key = 'pariatur';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->project = 'vitae';
    $request->quotaUser = 'sapiente';
    $request->storagePool = 'odit';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'sed';
    $request->userIp = 'doloremque';
    $request->zone = 'doloremque';

    $requestSecurity = new ComputeStoragePoolsGetSecurity();
    $requestSecurity->option1 = new ComputeStoragePoolsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storagePools->computeStoragePoolsGet($request, $requestSecurity);

    if ($response->storagePool !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeStoragePoolsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeStoragePoolsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'incidunt';
    $request->key = 'sunt';
    $request->oauthToken = 'excepturi';
    $request->optionsRequestedPolicyVersion = 461569;
    $request->prettyPrint = false;
    $request->project = 'adipisci';
    $request->quotaUser = 'nisi';
    $request->resource = 'aliquid';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'itaque';
    $request->userIp = 'pariatur';
    $request->zone = 'quae';

    $requestSecurity = new ComputeStoragePoolsGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeStoragePoolsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storagePools->computeStoragePoolsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeStoragePoolsInsert

Creates a storage pool in the specified project using the data in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StoragePool;
use \OpenAPI\OpenAPI\Models\Shared\StoragePoolResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\StoragePoolStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\StoragePoolTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeStoragePoolsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->storagePool = new StoragePool();
    $request->storagePool->creationTimestamp = 'iure';
    $request->storagePool->description = 'cum';
    $request->storagePool->id = 'officia';
    $request->storagePool->kind = 'magni';
    $request->storagePool->labelFingerprint = 'cupiditate';
    $request->storagePool->labels = [
        'id' => 'ratione',
        'aperiam' => 'repellendus',
    ];
    $request->storagePool->name = 'Claudia Bartoletti';
    $request->storagePool->provisionedIops = 'consequatur';
    $request->storagePool->resourceStatus = new StoragePoolResourceStatus();
    $request->storagePool->resourceStatus->aggregateDiskProvisionedIops = 'autem';
    $request->storagePool->resourceStatus->aggregateDiskSizeGb = 'incidunt';
    $request->storagePool->resourceStatus->lastResizeTimestamp = 'cupiditate';
    $request->storagePool->resourceStatus->maxAggregateDiskSizeGb = 'voluptatibus';
    $request->storagePool->resourceStatus->numberOfDisks = 'nihil';
    $request->storagePool->resourceStatus->usedBytes = 'voluptatem';
    $request->storagePool->resourceStatus->usedReducedBytes = 'delectus';
    $request->storagePool->selfLink = 'eveniet';
    $request->storagePool->selfLinkWithId = 'aspernatur';
    $request->storagePool->sizeGb = 'ipsa';
    $request->storagePool->state = StoragePoolStateEnum::FAILED;
    $request->storagePool->type = StoragePoolTypeEnum::UNSPECIFIED;
    $request->storagePool->zone = 'iure';
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'veritatis';
    $request->key = 'dolor';
    $request->oauthToken = 'corrupti';
    $request->prettyPrint = false;
    $request->project = 'quis';
    $request->quotaUser = 'eligendi';
    $request->requestId = 'quaerat';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'consectetur';
    $request->zone = 'at';

    $requestSecurity = new ComputeStoragePoolsInsertSecurity();
    $requestSecurity->option1 = new ComputeStoragePoolsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storagePools->computeStoragePoolsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeStoragePoolsList

Retrieves a list of storage pools contained within the specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeStoragePoolsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facere';
    $request->fields = 'debitis';
    $request->filter = 'aut';
    $request->key = 'temporibus';
    $request->maxResults = 787698;
    $request->oauthToken = 'eaque';
    $request->orderBy = 'rem';
    $request->pageToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'repellendus';
    $request->quotaUser = 'suscipit';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'quasi';
    $request->userIp = 'voluptas';
    $request->zone = 'reprehenderit';

    $requestSecurity = new ComputeStoragePoolsListSecurity();
    $requestSecurity->option1 = new ComputeStoragePoolsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storagePools->computeStoragePoolsList($request, $requestSecurity);

    if ($response->storagePoolList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeStoragePoolsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsSetIamPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeStoragePoolsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->zoneSetPolicyRequest = new ZoneSetPolicyRequest();
    $request->zoneSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->etag = 'illum';
    $request->zoneSetPolicyRequest->policy = new Policy();
    $request->zoneSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->zoneSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->policy->etag = 'quibusdam';
    $request->zoneSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->zoneSetPolicyRequest->policy->version = 488943;
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'asperiores';
    $request->fields = 'nam';
    $request->key = 'saepe';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->project = 'laboriosam';
    $request->quotaUser = 'cupiditate';
    $request->resource = 'a';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'cumque';
    $request->userIp = 'ducimus';
    $request->zone = 'rem';

    $requestSecurity = new ComputeStoragePoolsSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeStoragePoolsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storagePools->computeStoragePoolsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeStoragePoolsSetLabels

Sets the labels on a storage pools. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ZoneSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeStoragePoolsSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->zoneSetLabelsRequest = new ZoneSetLabelsRequest();
    $request->zoneSetLabelsRequest->labelFingerprint = 'asperiores';
    $request->zoneSetLabelsRequest->labels = [
        'quidem' => 'voluptas',
    ];
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vitae';
    $request->fields = 'fuga';
    $request->key = 'eius';
    $request->oauthToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->project = 'tempore';
    $request->quotaUser = 'expedita';
    $request->requestId = 'quos';
    $request->resource = 'quas';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'id';
    $request->userIp = 'optio';
    $request->zone = 'dicta';

    $requestSecurity = new ComputeStoragePoolsSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeStoragePoolsSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storagePools->computeStoragePoolsSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeStoragePoolsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeStoragePoolsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'facere',
        'quisquam',
    ];
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eos';
    $request->fields = 'a';
    $request->key = 'laboriosam';
    $request->oauthToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->project = 'accusantium';
    $request->quotaUser = 'hic';
    $request->resource = 'aut';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'repellat';
    $request->userIp = 'dolorem';
    $request->zone = 'odio';

    $requestSecurity = new ComputeStoragePoolsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeStoragePoolsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storagePools->computeStoragePoolsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeStoragePoolsUpdate

Updates the specified storagePool with the data included in the request. The update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: size_tb and provisioned_iops.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StoragePool;
use \OpenAPI\OpenAPI\Models\Shared\StoragePoolResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\StoragePoolStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\StoragePoolTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeStoragePoolsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeStoragePoolsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->storagePool1 = new StoragePool();
    $request->storagePool1->creationTimestamp = 'ipsam';
    $request->storagePool1->description = 'occaecati';
    $request->storagePool1->id = 'sequi';
    $request->storagePool1->kind = 'assumenda';
    $request->storagePool1->labelFingerprint = 'maxime';
    $request->storagePool1->labels = [
        'facilis' => 'corrupti',
    ];
    $request->storagePool1->name = 'June Russel DDS';
    $request->storagePool1->provisionedIops = 'tenetur';
    $request->storagePool1->resourceStatus = new StoragePoolResourceStatus();
    $request->storagePool1->resourceStatus->aggregateDiskProvisionedIops = 'doloremque';
    $request->storagePool1->resourceStatus->aggregateDiskSizeGb = 'veniam';
    $request->storagePool1->resourceStatus->lastResizeTimestamp = 'dolorem';
    $request->storagePool1->resourceStatus->maxAggregateDiskSizeGb = 'voluptate';
    $request->storagePool1->resourceStatus->numberOfDisks = 'perspiciatis';
    $request->storagePool1->resourceStatus->usedBytes = 'alias';
    $request->storagePool1->resourceStatus->usedReducedBytes = 'quibusdam';
    $request->storagePool1->selfLink = 'assumenda';
    $request->storagePool1->selfLinkWithId = 'error';
    $request->storagePool1->sizeGb = 'quaerat';
    $request->storagePool1->state = StoragePoolStateEnum::READY;
    $request->storagePool1->type = StoragePoolTypeEnum::UNSPECIFIED;
    $request->storagePool1->zone = 'nihil';
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quia';
    $request->fields = 'quis';
    $request->key = 'pariatur';
    $request->oauthToken = 'illo';
    $request->prettyPrint = false;
    $request->project = 'blanditiis';
    $request->quotaUser = 'eligendi';
    $request->requestId = 'recusandae';
    $request->storagePoolPathParameter = 'enim';
    $request->updateMask = 'possimus';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'reprehenderit';
    $request->userIp = 'modi';
    $request->zone = 'et';

    $requestSecurity = new ComputeStoragePoolsUpdateSecurity();
    $requestSecurity->option1 = new ComputeStoragePoolsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storagePools->computeStoragePoolsUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
