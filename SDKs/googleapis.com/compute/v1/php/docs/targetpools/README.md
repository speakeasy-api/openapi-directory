# targetPools

### Available Operations

* [computeTargetPoolsAddHealthCheck](#computetargetpoolsaddhealthcheck) - Adds health check URLs to a target pool.
* [computeTargetPoolsAddInstance](#computetargetpoolsaddinstance) - Adds an instance to a target pool.
* [computeTargetPoolsAggregatedList](#computetargetpoolsaggregatedlist) - Retrieves an aggregated list of target pools.
* [computeTargetPoolsDelete](#computetargetpoolsdelete) - Deletes the specified target pool.
* [computeTargetPoolsGet](#computetargetpoolsget) - Returns the specified target pool.
* [computeTargetPoolsGetHealth](#computetargetpoolsgethealth) - Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.
* [computeTargetPoolsInsert](#computetargetpoolsinsert) - Creates a target pool in the specified project and region using the data included in the request.
* [computeTargetPoolsList](#computetargetpoolslist) - Retrieves a list of target pools available to the specified project and region.
* [computeTargetPoolsRemoveHealthCheck](#computetargetpoolsremovehealthcheck) - Removes health check URL from a target pool.
* [computeTargetPoolsRemoveInstance](#computetargetpoolsremoveinstance) - Removes instance URL from a target pool.
* [computeTargetPoolsSetBackup](#computetargetpoolssetbackup) - Changes a backup target pool's configurations.

## computeTargetPoolsAddHealthCheck

Adds health check URLs to a target pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsAddHealthCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetPoolsAddHealthCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsAddHealthCheckSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsAddHealthCheckSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsAddHealthCheckSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetPoolsAddHealthCheckRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetPoolsAddHealthCheckRequest = new TargetPoolsAddHealthCheckRequest();
    $request->targetPoolsAddHealthCheckRequest->healthChecks = [
        new HealthCheckReference(),
        new HealthCheckReference(),
        new HealthCheckReference(),
    ];
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iusto';
    $request->fields = 'vel';
    $request->key = 'nihil';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'id';
    $request->region = 'dolores';
    $request->requestId = 'ducimus';
    $request->targetPool = 'occaecati';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'atque';
    $request->userIp = 'sequi';

    $requestSecurity = new ComputeTargetPoolsAddHealthCheckSecurity();
    $requestSecurity->option1 = new ComputeTargetPoolsAddHealthCheckSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetPools->computeTargetPoolsAddHealthCheck($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetPoolsAddInstance

Adds an instance to a target pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsAddInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetPoolsAddInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstanceReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsAddInstanceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsAddInstanceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsAddInstanceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetPoolsAddInstanceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetPoolsAddInstanceRequest = new TargetPoolsAddInstanceRequest();
    $request->targetPoolsAddInstanceRequest->instances = [
        new InstanceReference(),
        new InstanceReference(),
    ];
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'facere';
    $request->key = 'est';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->project = 'iusto';
    $request->quotaUser = 'excepturi';
    $request->region = 'doloremque';
    $request->requestId = 'natus';
    $request->targetPool = 'ea';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'deserunt';
    $request->userIp = 'officiis';

    $requestSecurity = new ComputeTargetPoolsAddInstanceSecurity();
    $requestSecurity->option1 = new ComputeTargetPoolsAddInstanceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetPools->computeTargetPoolsAddInstance($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetPoolsAggregatedList

Retrieves an aggregated list of target pools.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetPoolsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->fields = 'atque';
    $request->filter = 'consequatur';
    $request->includeAllScopes = false;
    $request->key = 'reprehenderit';
    $request->maxResults = 240781;
    $request->oauthToken = 'voluptatem';
    $request->orderBy = 'illum';
    $request->pageToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'voluptatibus';
    $request->quotaUser = 'quos';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'rem';
    $request->userIp = 'unde';

    $requestSecurity = new ComputeTargetPoolsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeTargetPoolsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetPools->computeTargetPoolsAggregatedList($request, $requestSecurity);

    if ($response->targetPoolAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetPoolsDelete

Deletes the specified target pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetPoolsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'nisi';
    $request->key = 'alias';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->project = 'ipsam';
    $request->quotaUser = 'commodi';
    $request->region = 'minima';
    $request->requestId = 'suscipit';
    $request->targetPool = 'voluptatibus';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'debitis';

    $requestSecurity = new ComputeTargetPoolsDeleteSecurity();
    $requestSecurity->option1 = new ComputeTargetPoolsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetPools->computeTargetPoolsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetPoolsGet

Returns the specified target pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetPoolsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'earum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iusto';
    $request->fields = 'quae';
    $request->key = 'veniam';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'explicabo';
    $request->region = 'assumenda';
    $request->targetPool = 'accusantium';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'ipsum';

    $requestSecurity = new ComputeTargetPoolsGetSecurity();
    $requestSecurity->option1 = new ComputeTargetPoolsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetPools->computeTargetPoolsGet($request, $requestSecurity);

    if ($response->targetPool !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetPoolsGetHealth

Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsGetHealthRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsGetHealthSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsGetHealthSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsGetHealthSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsGetHealthSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetPoolsGetHealthRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceReference = new InstanceReference();
    $request->instanceReference->instance = 'in';
    $request->accessToken = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vel';
    $request->fields = 'earum';
    $request->key = 'explicabo';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->project = 'in';
    $request->quotaUser = 'hic';
    $request->region = 'nemo';
    $request->targetPool = 'totam';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'a';
    $request->userIp = 'officia';

    $requestSecurity = new ComputeTargetPoolsGetHealthSecurity();
    $requestSecurity->option1 = new ComputeTargetPoolsGetHealthSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetPools->computeTargetPoolsGetHealth($request, $requestSecurity);

    if ($response->targetPoolInstanceHealth !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetPoolsInsert

Creates a target pool in the specified project and region using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetPool;
use \OpenAPI\OpenAPI\Models\Shared\TargetPoolSessionAffinityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetPoolsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetPool = new TargetPool();
    $request->targetPool->backupPool = 'mollitia';
    $request->targetPool->creationTimestamp = 'dolorum';
    $request->targetPool->description = 'deserunt';
    $request->targetPool->failoverRatio = 4837.99;
    $request->targetPool->healthChecks = [
        'laudantium',
        'consequatur',
        'et',
        'voluptatem',
    ];
    $request->targetPool->id = 'blanditiis';
    $request->targetPool->instances = [
        'eaque',
        'quam',
        'laboriosam',
    ];
    $request->targetPool->kind = 'asperiores';
    $request->targetPool->name = 'Dan West';
    $request->targetPool->region = 'temporibus';
    $request->targetPool->selfLink = 'quia';
    $request->targetPool->sessionAffinity = TargetPoolSessionAffinityEnum::GENERATED_COOKIE;
    $request->accessToken = 'laudantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'numquam';
    $request->fields = 'ipsa';
    $request->key = 'quos';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->project = 'explicabo';
    $request->quotaUser = 'aliquid';
    $request->region = 'perspiciatis';
    $request->requestId = 'tempore';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'similique';
    $request->userIp = 'esse';

    $requestSecurity = new ComputeTargetPoolsInsertSecurity();
    $requestSecurity->option1 = new ComputeTargetPoolsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetPools->computeTargetPoolsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetPoolsList

Retrieves a list of target pools available to the specified project and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetPoolsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'possimus';
    $request->fields = 'temporibus';
    $request->filter = 'quos';
    $request->key = 'consequuntur';
    $request->maxResults = 938689;
    $request->oauthToken = 'excepturi';
    $request->orderBy = 'numquam';
    $request->pageToken = 'hic';
    $request->prettyPrint = false;
    $request->project = 'repellat';
    $request->quotaUser = 'delectus';
    $request->region = 'quidem';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'et';
    $request->userIp = 'officiis';

    $requestSecurity = new ComputeTargetPoolsListSecurity();
    $requestSecurity->option1 = new ComputeTargetPoolsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetPools->computeTargetPoolsList($request, $requestSecurity);

    if ($response->targetPoolList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetPoolsRemoveHealthCheck

Removes health check URL from a target pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsRemoveHealthCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetPoolsRemoveHealthCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsRemoveHealthCheckSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsRemoveHealthCheckSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsRemoveHealthCheckSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetPoolsRemoveHealthCheckRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetPoolsRemoveHealthCheckRequest = new TargetPoolsRemoveHealthCheckRequest();
    $request->targetPoolsRemoveHealthCheckRequest->healthChecks = [
        new HealthCheckReference(),
        new HealthCheckReference(),
        new HealthCheckReference(),
        new HealthCheckReference(),
    ];
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nulla';
    $request->fields = 'nulla';
    $request->key = 'quisquam';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->quotaUser = 'doloremque';
    $request->region = 'sequi';
    $request->requestId = 'deleniti';
    $request->targetPool = 'quidem';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'inventore';

    $requestSecurity = new ComputeTargetPoolsRemoveHealthCheckSecurity();
    $requestSecurity->option1 = new ComputeTargetPoolsRemoveHealthCheckSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetPools->computeTargetPoolsRemoveHealthCheck($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetPoolsRemoveInstance

Removes instance URL from a target pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsRemoveInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetPoolsRemoveInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstanceReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsRemoveInstanceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsRemoveInstanceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsRemoveInstanceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetPoolsRemoveInstanceRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetPoolsRemoveInstanceRequest = new TargetPoolsRemoveInstanceRequest();
    $request->targetPoolsRemoveInstanceRequest->instances = [
        new InstanceReference(),
        new InstanceReference(),
    ];
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vitae';
    $request->fields = 'accusamus';
    $request->key = 'tempore';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'doloribus';
    $request->quotaUser = 'possimus';
    $request->region = 'non';
    $request->requestId = 'alias';
    $request->targetPool = 'tempore';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'earum';
    $request->userIp = 'eaque';

    $requestSecurity = new ComputeTargetPoolsRemoveInstanceSecurity();
    $requestSecurity->option1 = new ComputeTargetPoolsRemoveInstanceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetPools->computeTargetPoolsRemoveInstance($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetPoolsSetBackup

Changes a backup target pool's configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsSetBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsSetBackupSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsSetBackupSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsSetBackupSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetPoolsSetBackupRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetReference = new TargetReference();
    $request->targetReference->target = 'eius';
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minus';
    $request->failoverRatio = 9593.55;
    $request->fields = 'odit';
    $request->key = 'eaque';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'exercitationem';
    $request->quotaUser = 'aliquam';
    $request->region = 'id';
    $request->requestId = 'omnis';
    $request->targetPool = 'ad';
    $request->uploadType = 'unde';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'quaerat';

    $requestSecurity = new ComputeTargetPoolsSetBackupSecurity();
    $requestSecurity->option1 = new ComputeTargetPoolsSetBackupSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetPools->computeTargetPoolsSetBackup($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
