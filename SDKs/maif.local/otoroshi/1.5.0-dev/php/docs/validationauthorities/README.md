# validationAuthorities

## Overview

Everything about Otoroshi validation authorities

### Available Operations

* [createClientValidator](#createclientvalidator) - Create one validation authorities
* [deleteClientValidator](#deleteclientvalidator) - Delete one validation authorities by id
* [findAllClientValidators](#findallclientvalidators) - Get all validation authoritiess
* [findClientValidatorById](#findclientvalidatorbyid) - Get one validation authorities by id
* [patchClientValidator](#patchclientvalidator) - Update one validation authorities by id
* [updateClientValidator](#updateclientvalidator) - Update one validation authorities by id

## createClientValidator

Create one validation authorities

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ValidationAuthority;
use \OpenAPI\OpenAPI\Models\Operations\CreateClientValidatorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidationAuthority();
    $request->alwaysValid = true;
    $request->badTtl = 123;
    $request->description = 'a string value';
    $request->goodTtl = 123;
    $request->headers = [
        'porro' => 'quod',
        'labore' => 'ab',
    ];
    $request->host = 'a string value';
    $request->id = 'a string value';
    $request->method = 'a string value';
    $request->name = 'a string value';
    $request->noCache = true;
    $request->path = 'a string value';
    $request->timeout = 123;
    $request->url = 'a string value';

    $requestSecurity = new CreateClientValidatorSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->validationAuthorities->createClientValidator($request, $requestSecurity);

    if ($response->validationAuthority !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteClientValidator

Delete one validation authorities by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClientValidatorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClientValidatorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteClientValidatorRequest();
    $request->id = '3aa63aae-8d67-4864-9bb6-75fd5e60b375';

    $requestSecurity = new DeleteClientValidatorSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->validationAuthorities->deleteClientValidator($request, $requestSecurity);

    if ($response->deleted !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findAllClientValidators

Get all validation authoritiess

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindAllClientValidatorsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new FindAllClientValidatorsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->validationAuthorities->findAllClientValidators($requestSecurity);

    if ($response->validationAuthorities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findClientValidatorById

Get one validation authorities by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindClientValidatorByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindClientValidatorByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindClientValidatorByIdRequest();
    $request->id = 'ed4f6fbe-e41f-4333-97fe-35b60eb1ea42';

    $requestSecurity = new FindClientValidatorByIdSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->validationAuthorities->findClientValidatorById($request, $requestSecurity);

    if ($response->validationAuthority !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchClientValidator

Update one validation authorities by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchClientValidatorRequest;
use \OpenAPI\OpenAPI\Models\Shared\Patch;
use \OpenAPI\OpenAPI\Models\Shared\PatchOpEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchClientValidatorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchClientValidatorRequest();
    $request->requestBody = [
        new Patch(),
        new Patch(),
    ];
    $request->id = '555ba3c2-8744-4ed5-bb88-f3a8d8f5c0b2';

    $requestSecurity = new PatchClientValidatorSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->validationAuthorities->patchClientValidator($request, $requestSecurity);

    if ($response->validationAuthority !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClientValidator

Update one validation authorities by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClientValidatorRequest;
use \OpenAPI\OpenAPI\Models\Shared\ValidationAuthority;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClientValidatorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClientValidatorRequest();
    $request->validationAuthority = new ValidationAuthority();
    $request->validationAuthority->alwaysValid = true;
    $request->validationAuthority->badTtl = 123;
    $request->validationAuthority->description = 'a string value';
    $request->validationAuthority->goodTtl = 123;
    $request->validationAuthority->headers = [
        'explicabo' => 'asperiores',
        'facilis' => 'voluptate',
        'expedita' => 'ab',
        'iste' => 'dolore',
    ];
    $request->validationAuthority->host = 'a string value';
    $request->validationAuthority->id = 'a string value';
    $request->validationAuthority->method = 'a string value';
    $request->validationAuthority->name = 'a string value';
    $request->validationAuthority->noCache = true;
    $request->validationAuthority->path = 'a string value';
    $request->validationAuthority->timeout = 123;
    $request->validationAuthority->url = 'a string value';
    $request->id = 'a276b269-16fe-41f0-8f42-94e3698f447f';

    $requestSecurity = new UpdateClientValidatorSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->validationAuthorities->updateClientValidator($request, $requestSecurity);

    if ($response->validationAuthority !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
