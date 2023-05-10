# config

## Overview

Operations related to configuration

### Available Operations

* [createSecret](#createsecret) - Create a new Secret
* [deleteSecret](#deletesecret) - Delete Secret
* [getFeaturesConfiguration](#getfeaturesconfiguration) - Get features configuration
* [getKeycloakConfig](#getkeycloakconfig) - Get authentification configuration
* [getSecret](#getsecret) - Get Secret
* [getSecrets](#getsecrets) - Get Secrets
* [getSecretsCounter](#getsecretscounter) - Get the Secrets counter
* [updateSecret](#updatesecret) - Update Secret

## createSecret

Create a new Secret

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Secret;
use \OpenAPI\OpenAPI\Models\Operations\CreateSecretSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Secret();
    $request->caCertPem = 'suscipit';
    $request->description = 'iure';
    $request->id = '4e0f467c-c879-46ed-951a-05dfc2ddf7cc';
    $request->name = 'Deanna Sauer MD';
    $request->password = 'officia';
    $request->token = 'occaecati';
    $request->tokenHeader = 'fugit';
    $request->username = 'Kale_Welch10';

    $requestSecurity = new CreateSecretSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->config->createSecret($request, $requestSecurity);

    if ($response->secret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSecret

Delete a Secret

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecretSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSecretRequest();
    $request->id = '6742cb73-9205-4929-b96f-ea7596eb10fa';

    $requestSecurity = new DeleteSecretSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->config->deleteSecret($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFeaturesConfiguration

Get features configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->config->getFeaturesConfiguration();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKeycloakConfig

Get authentification configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->config->getKeycloakConfig();

    if ($response->keycloakConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSecret

Retrieve a Secret

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSecretSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSecretRequest();
    $request->id = 'aa2352c5-9559-407a-bf1a-3a2fa9467739';

    $requestSecurity = new GetSecretSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->config->getSecret($request, $requestSecurity);

    if ($response->secret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSecrets

Get Secrets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSecretsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSecretsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSecretsRequest();
    $request->page = 158969;
    $request->size = 338007;

    $requestSecurity = new GetSecretsSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->config->getSecrets($request, $requestSecurity);

    if ($response->secrets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSecretsCounter

Get the Secrets counter

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSecretsCounterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetSecretsCounterSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->config->getSecretsCounter($requestSecurity);

    if ($response->counter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSecret

Update a Secret

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSecretSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSecretRequest();
    $request->id = '1aa52c3f-5ad0-419d-a1ff-e78f097b0074';

    $requestSecurity = new UpdateSecretSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->config->updateSecret($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
