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
* [computeTargetPoolsSetSecurityPolicy](#computetargetpoolssetsecuritypolicy) - Sets the Google Cloud Armor security policy for the specified target pool. For more information, see Google Cloud Armor Overview
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
    ];
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cumque';
    $request->fields = 'velit';
    $request->key = 'ex';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->project = 'illo';
    $request->quotaUser = 'earum';
    $request->region = 'dicta';
    $request->requestId = 'deserunt';
    $request->targetPool = 'asperiores';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'autem';

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
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'accusantium';
    $request->key = 'recusandae';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->project = 'vero';
    $request->quotaUser = 'placeat';
    $request->region = 'qui';
    $request->requestId = 'necessitatibus';
    $request->targetPool = 'minus';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'ipsa';
    $request->userIp = 'in';

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
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'tempore';
    $request->filter = 'voluptas';
    $request->includeAllScopes = false;
    $request->key = 'quos';
    $request->maxResults = 556193;
    $request->oauthToken = 'perspiciatis';
    $request->orderBy = 'dolorum';
    $request->pageToken = 'accusantium';
    $request->prettyPrint = false;
    $request->project = 'rerum';
    $request->quotaUser = 'voluptatem';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'placeat';
    $request->userIp = 'dignissimos';

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
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'minus';
    $request->fields = 'facilis';
    $request->key = 'aperiam';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->project = 'repellat';
    $request->quotaUser = 'beatae';
    $request->region = 'quia';
    $request->requestId = 'ab';
    $request->targetPool = 'vel';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'ab';
    $request->userIp = 'recusandae';

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
    $request->accessToken = 'amet';
    $request->alt = AltEnum::JSON;
    $request->callback = 'autem';
    $request->fields = 'fugiat';
    $request->key = 'officia';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->project = 'ducimus';
    $request->quotaUser = 'aperiam';
    $request->region = 'sit';
    $request->targetPool = 'itaque';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'repudiandae';

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
    $request->instanceReference->instance = 'unde';
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'temporibus';
    $request->key = 'sequi';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->project = 'minima';
    $request->quotaUser = 'qui';
    $request->region = 'illum';
    $request->targetPool = 'autem';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'possimus';
    $request->userIp = 'optio';

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
    $request->targetPool->backupPool = 'dignissimos';
    $request->targetPool->creationTimestamp = 'quibusdam';
    $request->targetPool->description = 'quos';
    $request->targetPool->failoverRatio = 1294.43;
    $request->targetPool->healthChecks = [
        'iure',
        'esse',
        'expedita',
        'beatae',
    ];
    $request->targetPool->id = 'libero';
    $request->targetPool->instances = [
        'illo',
        'debitis',
        'expedita',
    ];
    $request->targetPool->kind = 'sunt';
    $request->targetPool->name = 'John Heller';
    $request->targetPool->region = 'velit';
    $request->targetPool->securityPolicy = 'voluptatem';
    $request->targetPool->selfLink = 'consequatur';
    $request->targetPool->selfLinkWithId = 'nisi';
    $request->targetPool->sessionAffinity = TargetPoolSessionAffinityEnum::CLIENT_IP_PORT_PROTO;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'est';
    $request->key = 'facilis';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->project = 'fugit';
    $request->quotaUser = 'sed';
    $request->region = 'iusto';
    $request->requestId = 'explicabo';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'asperiores';
    $request->userIp = 'non';

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
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'itaque';
    $request->fields = 'sint';
    $request->filter = 'vitae';
    $request->key = 'sapiente';
    $request->maxResults = 115700;
    $request->oauthToken = 'dignissimos';
    $request->orderBy = 'deserunt';
    $request->pageToken = 'doloremque';
    $request->prettyPrint = false;
    $request->project = 'totam';
    $request->quotaUser = 'dolor';
    $request->region = 'saepe';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'quod';
    $request->userIp = 'harum';

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
    ];
    $request->accessToken = 'ab';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'voluptatibus';
    $request->key = 'in';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->project = 'aliquam';
    $request->quotaUser = 'distinctio';
    $request->region = 'hic';
    $request->requestId = 'non';
    $request->targetPool = 'est';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'quidem';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetPoolsRemoveInstanceRequest = new TargetPoolsRemoveInstanceRequest();
    $request->targetPoolsRemoveInstanceRequest->instances = [
        new InstanceReference(),
        new InstanceReference(),
    ];
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'non';
    $request->fields = 'doloremque';
    $request->key = 'ad';
    $request->oauthToken = 'vitae';
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'magnam';
    $request->region = 'dolores';
    $request->requestId = 'amet';
    $request->targetPool = 'dolorum';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'dicta';
    $request->userIp = 'consectetur';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetReference = new TargetReference();
    $request->targetReference->target = 'sunt';
    $request->accessToken = 'similique';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->failoverRatio = 505.78;
    $request->fields = 'ratione';
    $request->key = 'distinctio';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->project = 'molestiae';
    $request->quotaUser = 'consectetur';
    $request->region = 'nulla';
    $request->requestId = 'quod';
    $request->targetPool = 'delectus';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'saepe';
    $request->userIp = 'earum';

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

## computeTargetPoolsSetSecurityPolicy

Sets the Google Cloud Armor security policy for the specified target pool. For more information, see Google Cloud Armor Overview

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsSetSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsSetSecurityPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsSetSecurityPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetPoolsSetSecurityPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetPoolsSetSecurityPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicyReference = new SecurityPolicyReference();
    $request->securityPolicyReference->securityPolicy = 'porro';
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'praesentium';
    $request->key = 'aliquam';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->project = 'quam';
    $request->quotaUser = 'modi';
    $request->region = 'officiis';
    $request->requestId = 'quod';
    $request->targetPool = 'odio';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'voluptatum';
    $request->userIp = 'explicabo';

    $requestSecurity = new ComputeTargetPoolsSetSecurityPolicySecurity();
    $requestSecurity->option1 = new ComputeTargetPoolsSetSecurityPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetPools->computeTargetPoolsSetSecurityPolicy($request, $requestSecurity);

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'at',
    ];
    $request->accessToken = 'id';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->project = 'impedit';
    $request->quotaUser = 'nobis';
    $request->region = 'vitae';
    $request->resource = 'ducimus';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'possimus';
    $request->userIp = 'reiciendis';

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
