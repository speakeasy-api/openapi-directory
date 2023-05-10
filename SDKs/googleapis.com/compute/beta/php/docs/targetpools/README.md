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
* [computeTargetPoolsTestIamPermissions](#computetargetpoolstestiampermissions) - Returns permissions that a caller has on the specified resource.

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
        new HealthCheckReference(),
    ];
    $request->accessToken = 'quas';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quia';
    $request->fields = 'molestiae';
    $request->key = 'repudiandae';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'repellat';
    $request->quotaUser = 'esse';
    $request->region = 'quibusdam';
    $request->requestId = 'non';
    $request->targetPool = 'quasi';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'incidunt';

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
        new InstanceReference(),
        new InstanceReference(),
    ];
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'assumenda';
    $request->fields = 'praesentium';
    $request->key = 'eos';
    $request->oauthToken = 'ratione';
    $request->prettyPrint = false;
    $request->project = 'error';
    $request->quotaUser = 'a';
    $request->region = 'consequuntur';
    $request->requestId = 'optio';
    $request->targetPool = 'vitae';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'nihil';
    $request->userIp = 'excepturi';

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
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->fields = 'fuga';
    $request->filter = 'dolore';
    $request->includeAllScopes = false;
    $request->key = 'nisi';
    $request->maxResults = 434485;
    $request->oauthToken = 'modi';
    $request->orderBy = 'suscipit';
    $request->pageToken = 'itaque';
    $request->prettyPrint = false;
    $request->project = 'minus';
    $request->quotaUser = 'ea';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'laudantium';
    $request->userIp = 'voluptates';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'rem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quam';
    $request->fields = 'eligendi';
    $request->key = 'fugiat';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->project = 'sit';
    $request->quotaUser = 'culpa';
    $request->region = 'recusandae';
    $request->requestId = 'necessitatibus';
    $request->targetPool = 'totam';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'reprehenderit';
    $request->userIp = 'explicabo';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ab';
    $request->alt = AltEnum::JSON;
    $request->callback = 'hic';
    $request->fields = 'aliquam';
    $request->key = 'consequuntur';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->project = 'similique';
    $request->quotaUser = 'eaque';
    $request->region = 'consectetur';
    $request->targetPool = 'consectetur';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'odio';

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
    $request->instanceReference->instance = 'distinctio';
    $request->accessToken = 'neque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magni';
    $request->fields = 'repellat';
    $request->key = 'fugiat';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->project = 'facilis';
    $request->quotaUser = 'iure';
    $request->region = 'amet';
    $request->targetPool = 'voluptas';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'accusantium';
    $request->userIp = 'dignissimos';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetPool = new TargetPool();
    $request->targetPool->backupPool = 'aperiam';
    $request->targetPool->creationTimestamp = 'corrupti';
    $request->targetPool->description = 'corrupti';
    $request->targetPool->failoverRatio = 8769.44;
    $request->targetPool->healthChecks = [
        'enim',
        'officia',
    ];
    $request->targetPool->id = 'rerum';
    $request->targetPool->instances = [
        'hic',
        'tenetur',
    ];
    $request->targetPool->kind = 'eos';
    $request->targetPool->name = 'Jonathan Cummings';
    $request->targetPool->region = 'eaque';
    $request->targetPool->selfLink = 'reprehenderit';
    $request->targetPool->sessionAffinity = TargetPoolSessionAffinityEnum::CLIENT_IP_PORT_PROTO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquam';
    $request->fields = 'incidunt';
    $request->key = 'quisquam';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->project = 'non';
    $request->quotaUser = 'porro';
    $request->region = 'perferendis';
    $request->requestId = 'libero';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'beatae';
    $request->userIp = 'ratione';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'vel';
    $request->filter = 'atque';
    $request->key = 'dolor';
    $request->maxResults = 362240;
    $request->oauthToken = 'quidem';
    $request->orderBy = 'iste';
    $request->pageToken = 'amet';
    $request->prettyPrint = false;
    $request->project = 'quisquam';
    $request->quotaUser = 'eveniet';
    $request->region = 'possimus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'quas';
    $request->userIp = 'odio';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetPoolsRemoveHealthCheckRequest = new TargetPoolsRemoveHealthCheckRequest();
    $request->targetPoolsRemoveHealthCheckRequest->healthChecks = [
        new HealthCheckReference(),
        new HealthCheckReference(),
        new HealthCheckReference(),
    ];
    $request->accessToken = 'eius';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'hic';
    $request->key = 'dolore';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'harum';
    $request->quotaUser = 'delectus';
    $request->region = 'tempora';
    $request->requestId = 'laboriosam';
    $request->targetPool = 'dicta';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'ducimus';
    $request->userIp = 'placeat';

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
        new InstanceReference(),
    ];
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'provident';
    $request->key = 'accusamus';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'laboriosam';
    $request->quotaUser = 'odit';
    $request->region = 'quibusdam';
    $request->requestId = 'debitis';
    $request->targetPool = 'adipisci';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'blanditiis';

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
    $request->targetReference->target = 'enim';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'animi';
    $request->failoverRatio = 1696.32;
    $request->fields = 'earum';
    $request->key = 'corrupti';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->project = 'quibusdam';
    $request->quotaUser = 'voluptatum';
    $request->region = 'ducimus';
    $request->requestId = 'nobis';
    $request->targetPool = 'corporis';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'recusandae';
    $request->userIp = 'dolores';

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

## computeTargetPoolsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetPoolsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'iusto',
        'molestiae',
        'optio',
        'sit',
    ];
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'dicta';
    $request->key = 'vitae';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'atque';
    $request->quotaUser = 'corrupti';
    $request->region = 'dolorem';
    $request->resource = 'ratione';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'pariatur';

    $requestSecurity = new ComputeTargetPoolsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeTargetPoolsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetPools->computeTargetPoolsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
