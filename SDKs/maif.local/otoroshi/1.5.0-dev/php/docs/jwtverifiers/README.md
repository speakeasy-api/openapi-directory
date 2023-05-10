# jwtVerifiers

## Overview

Everything about Otoroshi global JWT token verifiers

### Available Operations

* [createGlobalJwtVerifier](#createglobaljwtverifier) - Create one global JWT verifiers
* [deleteGlobalJwtVerifier](#deleteglobaljwtverifier) - Delete one global JWT verifiers
* [findAllGlobalJwtVerifiers](#findallglobaljwtverifiers) - Get all global JWT verifiers
* [findGlobalJwtVerifiersById](#findglobaljwtverifiersbyid) - Get one global JWT verifiers
* [patchGlobalJwtVerifier](#patchglobaljwtverifier) - Update one global JWT verifiers
* [updateGlobalJwtVerifier](#updateglobaljwtverifier) - Update one global JWT verifiers

## createGlobalJwtVerifier

Create one global JWT verifiers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GlobalJwtVerifier;
use \OpenAPI\OpenAPI\Models\Operations\CreateGlobalJwtVerifierSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GlobalJwtVerifier();
    $request->algoSettings = new RSAlgoSettings();
    $request->algoSettings->privateKey = 'a string value';
    $request->algoSettings->publicKey = 'a string value';
    $request->algoSettings->size = 123123;
    $request->algoSettings->type = 'a string value';
    $request->desc = 'a string value';
    $request->enabled = true;
    $request->id = 'a string value';
    $request->name = 'a string value';
    $request->source = new InQueryParam();
    $request->source->name = 'a string value';
    $request->source->type = 'a string value';
    $request->strategy = new Transform();
    $request->strategy->algoSettings = new ESAlgoSettings();
    $request->strategy->algoSettings->privateKey = 'a string value';
    $request->strategy->algoSettings->publicKey = 'a string value';
    $request->strategy->algoSettings->size = 123123;
    $request->strategy->algoSettings->type = 'a string value';
    $request->strategy->transformSettings = new TransformSettings();
    $request->strategy->transformSettings->location = new InCookie();
    $request->strategy->transformSettings->location->name = 'a string value';
    $request->strategy->transformSettings->location->type = 'a string value';
    $request->strategy->transformSettings->mappingSettings = new MappingSettings();
    $request->strategy->transformSettings->mappingSettings->map = [
        'eum' => 'autem',
    ];
    $request->strategy->transformSettings->mappingSettings->remove = [
        'a string value',
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->strategy->transformSettings->mappingSettings->values = [
        'assumenda' => 'nulla',
        'voluptas' => 'libero',
        'quasi' => 'tempora',
    ];
    $request->strategy->type = 'a string value';
    $request->strategy->verificationSettings = new VerificationSettings();
    $request->strategy->verificationSettings->fields = [
        'explicabo' => 'provident',
        'ipsa' => 'molestiae',
    ];
    $request->strategy->verificationSettings->mappingSettings = new MappingSettings();
    $request->strategy->verificationSettings->mappingSettings->map = [
        'odio' => 'eius',
        'esse' => 'esse',
    ];
    $request->strategy->verificationSettings->mappingSettings->remove = [
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->strategy->verificationSettings->mappingSettings->values = [
        'reprehenderit' => 'quidem',
        'fugiat' => 'ut',
        'eum' => 'suscipit',
    ];
    $request->strict = true;

    $requestSecurity = new CreateGlobalJwtVerifierSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->jwtVerifiers->createGlobalJwtVerifier($request, $requestSecurity);

    if ($response->globalJwtVerifier !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGlobalJwtVerifier

Delete one global JWT verifiers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGlobalJwtVerifierRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGlobalJwtVerifierSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGlobalJwtVerifierRequest();
    $request->verifierId = 'assumenda';

    $requestSecurity = new DeleteGlobalJwtVerifierSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->jwtVerifiers->deleteGlobalJwtVerifier($request, $requestSecurity);

    if ($response->deleted !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findAllGlobalJwtVerifiers

Get all global JWT verifiers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindAllGlobalJwtVerifiersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new FindAllGlobalJwtVerifiersSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->jwtVerifiers->findAllGlobalJwtVerifiers($requestSecurity);

    if ($response->globalJwtVerifiers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findGlobalJwtVerifiersById

Get one global JWT verifiers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindGlobalJwtVerifiersByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindGlobalJwtVerifiersByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindGlobalJwtVerifiersByIdRequest();
    $request->verifierId = 'eos';

    $requestSecurity = new FindGlobalJwtVerifiersByIdSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->jwtVerifiers->findGlobalJwtVerifiersById($request, $requestSecurity);

    if ($response->globalJwtVerifier !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchGlobalJwtVerifier

Update one global JWT verifiers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchGlobalJwtVerifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\Patch;
use \OpenAPI\OpenAPI\Models\Shared\PatchOpEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchGlobalJwtVerifierSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchGlobalJwtVerifierRequest();
    $request->requestBody = [
        new Patch(),
        new Patch(),
        new Patch(),
    ];
    $request->verifierId = 'quisquam';

    $requestSecurity = new PatchGlobalJwtVerifierSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->jwtVerifiers->patchGlobalJwtVerifier($request, $requestSecurity);

    if ($response->globalJwtVerifier !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGlobalJwtVerifier

Update one global JWT verifiers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGlobalJwtVerifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\GlobalJwtVerifier;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGlobalJwtVerifierSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGlobalJwtVerifierRequest();
    $request->globalJwtVerifier = new GlobalJwtVerifier();
    $request->globalJwtVerifier->algoSettings = new HSAlgoSettings();
    $request->globalJwtVerifier->algoSettings->secret = 'a string value';
    $request->globalJwtVerifier->algoSettings->size = 123123;
    $request->globalJwtVerifier->algoSettings->type = 'a string value';
    $request->globalJwtVerifier->desc = 'a string value';
    $request->globalJwtVerifier->enabled = true;
    $request->globalJwtVerifier->id = 'a string value';
    $request->globalJwtVerifier->name = 'a string value';
    $request->globalJwtVerifier->source = new InQueryParam();
    $request->globalJwtVerifier->source->name = 'a string value';
    $request->globalJwtVerifier->source->type = 'a string value';
    $request->globalJwtVerifier->strategy = new Sign();
    $request->globalJwtVerifier->strategy->algoSettings = new ESAlgoSettings();
    $request->globalJwtVerifier->strategy->algoSettings->privateKey = 'a string value';
    $request->globalJwtVerifier->strategy->algoSettings->publicKey = 'a string value';
    $request->globalJwtVerifier->strategy->algoSettings->size = 123123;
    $request->globalJwtVerifier->strategy->algoSettings->type = 'a string value';
    $request->globalJwtVerifier->strategy->type = 'a string value';
    $request->globalJwtVerifier->strategy->verificationSettings = new VerificationSettings();
    $request->globalJwtVerifier->strategy->verificationSettings->fields = [
        'quo' => 'illum',
    ];
    $request->globalJwtVerifier->strategy->verificationSettings->mappingSettings = new MappingSettings();
    $request->globalJwtVerifier->strategy->verificationSettings->mappingSettings->map = [
        'fuga' => 'eius',
        'eos' => 'voluptas',
        'ab' => 'cupiditate',
        'consequatur' => 'tempora',
    ];
    $request->globalJwtVerifier->strategy->verificationSettings->mappingSettings->remove = [
        'a string value',
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->globalJwtVerifier->strategy->verificationSettings->mappingSettings->values = [
        'aspernatur' => 'sequi',
        'quo' => 'esse',
    ];
    $request->globalJwtVerifier->strict = true;
    $request->verifierId = 'recusandae';

    $requestSecurity = new UpdateGlobalJwtVerifierSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->jwtVerifiers->updateGlobalJwtVerifier($request, $requestSecurity);

    if ($response->globalJwtVerifier !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
