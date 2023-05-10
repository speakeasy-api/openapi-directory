# pools

### Available Operations

* [replicapoolPoolsDelete](#replicapoolpoolsdelete) - Deletes a replica pool.
* [replicapoolPoolsGet](#replicapoolpoolsget) - Gets information about a single replica pool.
* [replicapoolPoolsInsert](#replicapoolpoolsinsert) - Inserts a new replica pool.
* [replicapoolPoolsList](#replicapoolpoolslist) - List all replica pools.
* [replicapoolPoolsResize](#replicapoolpoolsresize) - Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
* [replicapoolPoolsUpdatetemplate](#replicapoolpoolsupdatetemplate) - Update the template used by the pool.

## replicapoolPoolsDelete

Deletes a replica pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\PoolsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsDeleteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplicapoolPoolsDeleteRequest();
    $request->poolsDeleteRequest = new PoolsDeleteRequest();
    $request->poolsDeleteRequest->abandonInstances = [
        'magnam',
        'debitis',
    ];
    $request->alt = AltEnum::JSON;
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->oauthToken = 'tempora';
    $request->poolName = 'suscipit';
    $request->prettyPrint = false;
    $request->projectName = 'molestiae';
    $request->quotaUser = 'minus';
    $request->userIp = 'placeat';
    $request->zone = 'voluptatum';

    $requestSecurity = new ReplicapoolPoolsDeleteSecurity();
    $requestSecurity->option1 = new ReplicapoolPoolsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pools->replicapoolPoolsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## replicapoolPoolsGet

Gets information about a single replica pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsGetSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplicapoolPoolsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'iusto';
    $request->key = 'excepturi';
    $request->oauthToken = 'nisi';
    $request->poolName = 'recusandae';
    $request->prettyPrint = false;
    $request->projectName = 'temporibus';
    $request->quotaUser = 'ab';
    $request->userIp = 'quis';
    $request->zone = 'veritatis';

    $requestSecurity = new ReplicapoolPoolsGetSecurity();
    $requestSecurity->option1 = new ReplicapoolPoolsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pools->replicapoolPoolsGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## replicapoolPoolsInsert

Inserts a new replica pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Pool;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\Label;
use \OpenAPI\OpenAPI\Models\Shared\Template;
use \OpenAPI\OpenAPI\Models\Shared\Action;
use \OpenAPI\OpenAPI\Models\Shared\EnvVariable;
use \OpenAPI\OpenAPI\Models\Shared\VmParams;
use \OpenAPI\OpenAPI\Models\Shared\ExistingDisk;
use \OpenAPI\OpenAPI\Models\Shared\DiskAttachment;
use \OpenAPI\OpenAPI\Models\Shared\NewDisk;
use \OpenAPI\OpenAPI\Models\Shared\NewDiskInitializeParams;
use \OpenAPI\OpenAPI\Models\Shared\Metadata;
use \OpenAPI\OpenAPI\Models\Shared\MetadataItem;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterface;
use \OpenAPI\OpenAPI\Models\Shared\AccessConfig;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsInsertSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplicapoolPoolsInsertRequest();
    $request->pool = new Pool();
    $request->pool->autoRestart = false;
    $request->pool->baseInstanceName = 'deserunt';
    $request->pool->currentNumReplicas = 20218;
    $request->pool->description = 'ipsam';
    $request->pool->healthChecks = [
        new HealthCheck(),
        new HealthCheck(),
        new HealthCheck(),
        new HealthCheck(),
    ];
    $request->pool->initialNumReplicas = 957156;
    $request->pool->labels = [
        new Label(),
        new Label(),
        new Label(),
        new Label(),
    ];
    $request->pool->name = 'Teri Strosin';
    $request->pool->numReplicas = 799159;
    $request->pool->resourceViews = [
        'esse',
        'totam',
        'porro',
        'dolorum',
    ];
    $request->pool->selfLink = 'dicta';
    $request->pool->targetPool = 'nam';
    $request->pool->targetPools = [
        'occaecati',
        'fugit',
        'deleniti',
    ];
    $request->pool->template = new Template();
    $request->pool->template->action = new Action();
    $request->pool->template->action->commands = [
        'optio',
        'totam',
        'beatae',
        'commodi',
    ];
    $request->pool->template->action->envVariables = [
        new EnvVariable(),
        new EnvVariable(),
    ];
    $request->pool->template->action->timeoutMilliSeconds = 264555;
    $request->pool->template->healthChecks = [
        new HealthCheck(),
    ];
    $request->pool->template->version = 'impedit';
    $request->pool->template->vmParams = new VmParams();
    $request->pool->template->vmParams->baseInstanceName = 'cum';
    $request->pool->template->vmParams->canIpForward = false;
    $request->pool->template->vmParams->description = 'esse';
    $request->pool->template->vmParams->disksToAttach = [
        new ExistingDisk(),
    ];
    $request->pool->template->vmParams->disksToCreate = [
        new NewDisk(),
        new NewDisk(),
        new NewDisk(),
    ];
    $request->pool->template->vmParams->machineType = 'aspernatur';
    $request->pool->template->vmParams->metadata = new Metadata();
    $request->pool->template->vmParams->metadata->fingerPrint = 'perferendis';
    $request->pool->template->vmParams->metadata->items = [
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->pool->template->vmParams->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->pool->template->vmParams->onHostMaintenance = 'sed';
    $request->pool->template->vmParams->serviceAccounts = [
        new ServiceAccount(),
        new ServiceAccount(),
        new ServiceAccount(),
    ];
    $request->pool->template->vmParams->tags = new Tag();
    $request->pool->template->vmParams->tags->fingerPrint = 'dolor';
    $request->pool->template->vmParams->tags->items = [
        'laboriosam',
        'hic',
        'saepe',
    ];
    $request->pool->type = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->fields = 'in';
    $request->key = 'corporis';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->projectName = 'iure';
    $request->quotaUser = 'saepe';
    $request->userIp = 'quidem';
    $request->zone = 'architecto';

    $requestSecurity = new ReplicapoolPoolsInsertSecurity();
    $requestSecurity->option1 = new ReplicapoolPoolsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pools->replicapoolPoolsInsert($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## replicapoolPoolsList

List all replica pools.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsListSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplicapoolPoolsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'ipsa';
    $request->key = 'reiciendis';
    $request->maxResults = 666767;
    $request->oauthToken = 'mollitia';
    $request->pageToken = 'laborum';
    $request->prettyPrint = false;
    $request->projectName = 'dolores';
    $request->quotaUser = 'dolorem';
    $request->userIp = 'corporis';
    $request->zone = 'explicabo';

    $requestSecurity = new ReplicapoolPoolsListSecurity();
    $requestSecurity->option1 = new ReplicapoolPoolsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pools->replicapoolPoolsList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## replicapoolPoolsResize

Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsResizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsResizeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsResizeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsResizeSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsResizeSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplicapoolPoolsResizeRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'nobis';
    $request->key = 'enim';
    $request->numReplicas = 607831;
    $request->oauthToken = 'nemo';
    $request->poolName = 'minima';
    $request->prettyPrint = false;
    $request->projectName = 'excepturi';
    $request->quotaUser = 'accusantium';
    $request->userIp = 'iure';
    $request->zone = 'culpa';

    $requestSecurity = new ReplicapoolPoolsResizeSecurity();
    $requestSecurity->option1 = new ReplicapoolPoolsResizeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pools->replicapoolPoolsResize($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## replicapoolPoolsUpdatetemplate

Update the template used by the pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsUpdatetemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Template;
use \OpenAPI\OpenAPI\Models\Shared\Action;
use \OpenAPI\OpenAPI\Models\Shared\EnvVariable;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\VmParams;
use \OpenAPI\OpenAPI\Models\Shared\ExistingDisk;
use \OpenAPI\OpenAPI\Models\Shared\DiskAttachment;
use \OpenAPI\OpenAPI\Models\Shared\NewDisk;
use \OpenAPI\OpenAPI\Models\Shared\NewDiskInitializeParams;
use \OpenAPI\OpenAPI\Models\Shared\Metadata;
use \OpenAPI\OpenAPI\Models\Shared\MetadataItem;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterface;
use \OpenAPI\OpenAPI\Models\Shared\AccessConfig;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsUpdatetemplateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsUpdatetemplateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsUpdatetemplateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsUpdatetemplateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplicapoolPoolsUpdatetemplateRequest();
    $request->template = new Template();
    $request->template->action = new Action();
    $request->template->action->commands = [
        'sapiente',
        'architecto',
        'mollitia',
        'dolorem',
    ];
    $request->template->action->envVariables = [
        new EnvVariable(),
        new EnvVariable(),
        new EnvVariable(),
    ];
    $request->template->action->timeoutMilliSeconds = 161309;
    $request->template->healthChecks = [
        new HealthCheck(),
        new HealthCheck(),
        new HealthCheck(),
        new HealthCheck(),
    ];
    $request->template->version = 'mollitia';
    $request->template->vmParams = new VmParams();
    $request->template->vmParams->baseInstanceName = 'occaecati';
    $request->template->vmParams->canIpForward = false;
    $request->template->vmParams->description = 'numquam';
    $request->template->vmParams->disksToAttach = [
        new ExistingDisk(),
        new ExistingDisk(),
    ];
    $request->template->vmParams->disksToCreate = [
        new NewDisk(),
        new NewDisk(),
    ];
    $request->template->vmParams->machineType = 'molestiae';
    $request->template->vmParams->metadata = new Metadata();
    $request->template->vmParams->metadata->fingerPrint = 'velit';
    $request->template->vmParams->metadata->items = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->template->vmParams->networkInterfaces = [
        new NetworkInterface(),
    ];
    $request->template->vmParams->onHostMaintenance = 'quis';
    $request->template->vmParams->serviceAccounts = [
        new ServiceAccount(),
    ];
    $request->template->vmParams->tags = new Tag();
    $request->template->vmParams->tags->fingerPrint = 'laborum';
    $request->template->vmParams->tags->items = [
        'enim',
        'odit',
        'quo',
    ];
    $request->alt = AltEnum::JSON;
    $request->fields = 'sequi';
    $request->key = 'tenetur';
    $request->oauthToken = 'ipsam';
    $request->poolName = 'id';
    $request->prettyPrint = false;
    $request->projectName = 'possimus';
    $request->quotaUser = 'aut';
    $request->userIp = 'quasi';
    $request->zone = 'error';

    $requestSecurity = new ReplicapoolPoolsUpdatetemplateSecurity();
    $requestSecurity->option1 = new ReplicapoolPoolsUpdatetemplateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pools->replicapoolPoolsUpdatetemplate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
