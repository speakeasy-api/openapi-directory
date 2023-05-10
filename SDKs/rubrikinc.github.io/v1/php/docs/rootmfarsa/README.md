# rootMfaRsa

### Available Operations

* [createRsaMfaServer](#creatersamfaserver) - Register a new RSA server
* [deleteRsaMfaServer](#deletersamfaserver) - Delete RSA server
* [getRsaMfaServer](#getrsamfaserver) - Get RSA server configuration
* [queryRsaMfaServers](#queryrsamfaservers) - Get RSA server configuration
* [updateRsaMfaServer](#updatersamfaserver) - Update RSA server configuration

## createRsaMfaServer

Register a new RSA server using specified configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\RsaMfaServerConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RsaMfaServerConfig();
    $request->assurancePolicyName = 'ipsum';
    $request->baseUrl = 'debitis';
    $request->certificateId = 'quis';
    $request->clientId = 'eaque';
    $request->ldapUsernameAttribute = 'incidunt';
    $request->name = 'Lucia Jacobi';
    $request->restApiAccessId = 'debitis';
    $request->restApiKey = 'reprehenderit';
    $request->timeout = 181041;

    $response = $sdk->rootMfaRsa->createRsaMfaServer($request);

    if ($response->rsaMfaServerDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRsaMfaServer

Delete RSA server configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRsaMfaServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRsaMfaServerRequest();
    $request->id = 'dc4077d0-cc3f-4408-afc1-5ceb4d6e1eae';

    $response = $sdk->rootMfaRsa->deleteRsaMfaServer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRsaMfaServer

Get RSA server configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetRsaMfaServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRsaMfaServerRequest();
    $request->id = '0f75aedf-2aca-4b58-b991-c926ddb58946';

    $response = $sdk->rootMfaRsa->getRsaMfaServer($request);

    if ($response->rsaMfaServerDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryRsaMfaServers

Get RSA server configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->rootMfaRsa->queryRsaMfaServers();

    if ($response->rsaMfaServerDetailListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRsaMfaServer

Update an existing RSA server using specified configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRsaMfaServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRsaMfaServerRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRsaMfaServerRequest();
    $request->requestBody = new UpdateRsaMfaServerRequestBody();
    $request->requestBody->assurancePolicyName = 'quasi';
    $request->requestBody->baseUrl = 'vero';
    $request->requestBody->certificateId = 'odio';
    $request->requestBody->clientId = 'numquam';
    $request->requestBody->ldapUsernameAttribute = 'fugit';
    $request->requestBody->name = 'Kara Rohan';
    $request->requestBody->restApiAccessId = 'possimus';
    $request->requestBody->restApiKey = 'provident';
    $request->requestBody->timeout = 330459;
    $request->id = '02f0ea93-0b69-4f7a-82f7-2f8850090491';

    $response = $sdk->rootMfaRsa->updateRsaMfaServer($request);

    if ($response->rsaMfaServerDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
