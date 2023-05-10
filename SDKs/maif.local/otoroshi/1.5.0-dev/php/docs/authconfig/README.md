# authConfig

## Overview

Everything about Otoroshi global auth. module config

### Available Operations

* [createGlobalAuthModule](#createglobalauthmodule) - Create one global auth. module config
* [deleteGlobalAuthModule](#deleteglobalauthmodule) - Delete one global auth. module config
* [findAllGlobalAuthModules](#findallglobalauthmodules) - Get all global auth. module configs
* [findGlobalAuthModuleById](#findglobalauthmodulebyid) - Get one global auth. module configs
* [patchGlobalAuthModule](#patchglobalauthmodule) - Update one global auth. module config
* [updateGlobalAuthModule](#updateglobalauthmodule) - Update one global auth. module config

## createGlobalAuthModule

Create one global auth. module config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateGlobalAuthModuleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InMemoryAuthModuleConfig();
    $request->desc = 'a string value';
    $request->id = 'a string value';
    $request->name = 'a string value';
    $request->sessionMaxAge = 'a string value';
    $request->type = 'a string value';
    $request->users = [
        new InMemoryUser(),
    ];

    $requestSecurity = new CreateGlobalAuthModuleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->authConfig->createGlobalAuthModule($request, $requestSecurity);

    if ($response->createGlobalAuthModule200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGlobalAuthModule

Delete one global auth. module config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGlobalAuthModuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGlobalAuthModuleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGlobalAuthModuleRequest();
    $request->id = '05929396-fea7-4596-ab10-faaa2352c595';

    $requestSecurity = new DeleteGlobalAuthModuleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->authConfig->deleteGlobalAuthModule($request, $requestSecurity);

    if ($response->deleted !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findAllGlobalAuthModules

Get all global auth. module configs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindAllGlobalAuthModulesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new FindAllGlobalAuthModulesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->authConfig->findAllGlobalAuthModules($requestSecurity);

    if ($response->findAllGlobalAuthModules200ApplicationJSONOneoves !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findGlobalAuthModuleById

Get one global auth. module configs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindGlobalAuthModuleByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindGlobalAuthModuleByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindGlobalAuthModuleByIdRequest();
    $request->id = '5907aff1-a3a2-4fa9-8677-39251aa52c3f';

    $requestSecurity = new FindGlobalAuthModuleByIdSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->authConfig->findGlobalAuthModuleById($request, $requestSecurity);

    if ($response->findGlobalAuthModuleById200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchGlobalAuthModule

Update one global auth. module config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchGlobalAuthModuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\Patch;
use \OpenAPI\OpenAPI\Models\Shared\PatchOpEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchGlobalAuthModuleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchGlobalAuthModuleRequest();
    $request->requestBody = [
        new Patch(),
        new Patch(),
    ];
    $request->id = 'ad019da1-ffe7-48f0-97b0-074f15471b5e';

    $requestSecurity = new PatchGlobalAuthModuleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->authConfig->patchGlobalAuthModule($request, $requestSecurity);

    if ($response->patchGlobalAuthModule200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGlobalAuthModule

Update one global auth. module config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGlobalAuthModuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGlobalAuthModuleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGlobalAuthModuleRequest();
    $request->requestBody = new InMemoryAuthModuleConfig();
    $request->requestBody->desc = 'a string value';
    $request->requestBody->id = 'a string value';
    $request->requestBody->name = 'a string value';
    $request->requestBody->sessionMaxAge = 'a string value';
    $request->requestBody->type = 'a string value';
    $request->requestBody->users = [
        new InMemoryUser(),
        new InMemoryUser(),
        new InMemoryUser(),
        new InMemoryUser(),
    ];
    $request->id = '13b99d48-8e1e-491e-850a-d2abd4426980';

    $requestSecurity = new UpdateGlobalAuthModuleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->authConfig->updateGlobalAuthModule($request, $requestSecurity);

    if ($response->updateGlobalAuthModule200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
