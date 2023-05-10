# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->alt = AltEnum::JSON;
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->poolName = 'illum';
    $request->prettyPrint = false;
    $request->projectName = 'vel';
    $request->quotaUser = 'error';
    $request->userIp = 'deserunt';
    $request->zone = 'suscipit';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [pools](docs/pools/README.md)

* [replicapoolPoolsDelete](docs/pools/README.md#replicapoolpoolsdelete) - Deletes a replica pool.
* [replicapoolPoolsGet](docs/pools/README.md#replicapoolpoolsget) - Gets information about a single replica pool.
* [replicapoolPoolsInsert](docs/pools/README.md#replicapoolpoolsinsert) - Inserts a new replica pool.
* [replicapoolPoolsList](docs/pools/README.md#replicapoolpoolslist) - List all replica pools.
* [replicapoolPoolsResize](docs/pools/README.md#replicapoolpoolsresize) - Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
* [replicapoolPoolsUpdatetemplate](docs/pools/README.md#replicapoolpoolsupdatetemplate) - Update the template used by the pool.

### [replicas](docs/replicas/README.md)

* [replicapoolReplicasDelete](docs/replicas/README.md#replicapoolreplicasdelete) - Deletes a replica from the pool.
* [replicapoolReplicasGet](docs/replicas/README.md#replicapoolreplicasget) - Gets information about a specific replica.
* [replicapoolReplicasList](docs/replicas/README.md#replicapoolreplicaslist) - Lists all replicas in a pool.
* [replicapoolReplicasRestart](docs/replicas/README.md#replicapoolreplicasrestart) - Restarts a replica in a pool.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
