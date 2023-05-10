# replicas

### Available Operations

* [replicapoolReplicasDelete](#replicapoolreplicasdelete) - Deletes a replica from the pool.
* [replicapoolReplicasGet](#replicapoolreplicasget) - Gets information about a specific replica.
* [replicapoolReplicasList](#replicapoolreplicaslist) - Lists all replicas in a pool.
* [replicapoolReplicasRestart](#replicapoolreplicasrestart) - Restarts a replica in a pool.

## replicapoolReplicasDelete

Deletes a replica from the pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReplicasDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasDeleteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplicapoolReplicasDeleteRequest();
    $request->replicasDeleteRequest = new ReplicasDeleteRequest();
    $request->replicasDeleteRequest->abandonInstance = false;
    $request->alt = AltEnum::JSON;
    $request->fields = 'temporibus';
    $request->key = 'laborum';
    $request->oauthToken = 'quasi';
    $request->poolName = 'reiciendis';
    $request->prettyPrint = false;
    $request->projectName = 'voluptatibus';
    $request->quotaUser = 'vero';
    $request->replicaName = 'nihil';
    $request->userIp = 'praesentium';
    $request->zone = 'voluptatibus';

    $requestSecurity = new ReplicapoolReplicasDeleteSecurity();
    $requestSecurity->option1 = new ReplicapoolReplicasDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->replicas->replicapoolReplicasDelete($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## replicapoolReplicasGet

Gets information about a specific replica.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasGetSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplicapoolReplicasGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'ipsa';
    $request->key = 'omnis';
    $request->oauthToken = 'voluptate';
    $request->poolName = 'cum';
    $request->prettyPrint = false;
    $request->projectName = 'perferendis';
    $request->quotaUser = 'doloremque';
    $request->replicaName = 'reprehenderit';
    $request->userIp = 'ut';
    $request->zone = 'maiores';

    $requestSecurity = new ReplicapoolReplicasGetSecurity();
    $requestSecurity->option1 = new ReplicapoolReplicasGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->replicas->replicapoolReplicasGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## replicapoolReplicasList

Lists all replicas in a pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasListSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplicapoolReplicasListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'dicta';
    $request->key = 'corporis';
    $request->maxResults = 296140;
    $request->oauthToken = 'iusto';
    $request->pageToken = 'dicta';
    $request->poolName = 'harum';
    $request->prettyPrint = false;
    $request->projectName = 'enim';
    $request->quotaUser = 'accusamus';
    $request->userIp = 'commodi';
    $request->zone = 'repudiandae';

    $requestSecurity = new ReplicapoolReplicasListSecurity();
    $requestSecurity->option1 = new ReplicapoolReplicasListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->replicas->replicapoolReplicasList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## replicapoolReplicasRestart

Restarts a replica in a pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasRestartRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasRestartSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasRestartSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasRestartSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolReplicasRestartSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplicapoolReplicasRestartRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'quae';
    $request->key = 'ipsum';
    $request->oauthToken = 'quidem';
    $request->poolName = 'molestias';
    $request->prettyPrint = false;
    $request->projectName = 'excepturi';
    $request->quotaUser = 'pariatur';
    $request->replicaName = 'modi';
    $request->userIp = 'praesentium';
    $request->zone = 'rem';

    $requestSecurity = new ReplicapoolReplicasRestartSecurity();
    $requestSecurity->option1 = new ReplicapoolReplicasRestartSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->replicas->replicapoolReplicasRestart($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
