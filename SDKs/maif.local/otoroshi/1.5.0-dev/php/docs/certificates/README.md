# certificates

## Overview

Everything about Otoroshi SSL/TLS certificates

### Available Operations

* [allCerts](#allcerts) - Get all certificates
* [createCert](#createcert) - Create one certificate
* [deleteCert](#deletecert) - Delete one certificate by id
* [oneCert](#onecert) - Get one certificate by id
* [patchCert](#patchcert) - Update one certificate by id
* [putCert](#putcert) - Update one certificate by id

## allCerts

Get all certificates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AllCertsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new AllCertsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->certificates->allCerts($requestSecurity);

    if ($response->certificates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCert

Create one certificate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Certificate;
use \OpenAPI\OpenAPI\Models\Operations\CreateCertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Certificate();
    $request->autoRenew = 'a string value';
    $request->ca = 'a string value';
    $request->caRef = 'a string value';
    $request->chain = 'a string value';
    $request->domain = 'a string value';
    $request->from = 'a string value';
    $request->id = 'a string value';
    $request->privateKey = 'a string value';
    $request->selfSigned = 'a string value';
    $request->subject = 'a string value';
    $request->to = 'a string value';
    $request->valid = 'a string value';

    $requestSecurity = new CreateCertSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->certificates->createCert($request, $requestSecurity);

    if ($response->certificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCert

Delete one certificate by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCertRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCertRequest();
    $request->id = '2d502a94-bb4f-463c-969e-9a3efa77dfb1';

    $requestSecurity = new DeleteCertSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->certificates->deleteCert($request, $requestSecurity);

    if ($response->deleted !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## oneCert

Get one certificate by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OneCertRequest;
use \OpenAPI\OpenAPI\Models\Operations\OneCertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OneCertRequest();
    $request->id = '4cd66ae3-95ef-4b9b-a88f-3a66997074ba';

    $requestSecurity = new OneCertSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->certificates->oneCert($request, $requestSecurity);

    if ($response->certificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchCert

Update one certificate by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchCertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Patch;
use \OpenAPI\OpenAPI\Models\Shared\PatchOpEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchCertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchCertRequest();
    $request->requestBody = [
        new Patch(),
        new Patch(),
    ];
    $request->id = '469b6e21-4195-4989-8afa-563e2516fe4c';

    $requestSecurity = new PatchCertSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->certificates->patchCert($request, $requestSecurity);

    if ($response->certificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCert

Update one certificate by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutCertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Certificate;
use \OpenAPI\OpenAPI\Models\Operations\PutCertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCertRequest();
    $request->certificate = new Certificate();
    $request->certificate->autoRenew = 'a string value';
    $request->certificate->ca = 'a string value';
    $request->certificate->caRef = 'a string value';
    $request->certificate->chain = 'a string value';
    $request->certificate->domain = 'a string value';
    $request->certificate->from = 'a string value';
    $request->certificate->id = 'a string value';
    $request->certificate->privateKey = 'a string value';
    $request->certificate->selfSigned = 'a string value';
    $request->certificate->subject = 'a string value';
    $request->certificate->to = 'a string value';
    $request->certificate->valid = 'a string value';
    $request->id = '8b711e5b-7fd2-4ed0-a892-1cddc692601f';

    $requestSecurity = new PutCertSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->certificates->putCert($request, $requestSecurity);

    if ($response->certificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
