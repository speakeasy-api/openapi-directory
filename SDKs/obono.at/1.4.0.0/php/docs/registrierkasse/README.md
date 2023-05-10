# registrierkasse

## Overview

resources concerning a "Registrierkasse"

### Available Operations

* [getDEP](#getdep) - Generates a DEP file.
* [getRegistrierkasse](#getregistrierkasse) - Returns information about a particular `Registrierkasse`.

## getDEP

Generates a DEP file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDEPRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDEPRequest();
    $request->registrierkasseUuid = 'explicabo';

    $response = $sdk->registrierkasse->getDEP($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegistrierkasse

Returns information about a particular `Registrierkasse`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRegistrierkasseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRegistrierkasseRequest();
    $request->registrierkasseUuid = 'nobis';

    $response = $sdk->registrierkasse->getRegistrierkasse($request);

    if ($response->registrierkasse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
