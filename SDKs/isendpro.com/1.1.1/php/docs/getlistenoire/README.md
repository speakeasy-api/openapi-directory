# getListeNoire

### Available Operations

* [getListeNoire](#getlistenoire) - Retourne le liste noire

## getListeNoire

Retourne un fichier csv zippé contenant la liste noire

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetListeNoireRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetListeNoireGetListeNoireEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetListeNoireRequest();
    $request->getListeNoire = GetListeNoireGetListeNoireEnum::ONE;
    $request->keyid = 'deserunt';

    $response = $sdk->getListeNoire->getListeNoire($request);

    if ($response->getListeNoire200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
