# default

### Available Operations

* [getPublicHistory](#getpublichistory) - Wetter 2021 für Berlin, Reichstag

## getPublicHistory

Abfrage der Wettervorhersage für einen Ort, der entweder durch Angabe eines Suchbegriffs mit dem Parameter `q` oder durch Geo-Koordinaten in den Parametern `lat` und `lon` spezifiziert wird.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicHistoryRequest();
    $request->from = 'quibusdam';
    $request->q = 'unde';
    $request->to = 'nulla';

    $response = $sdk->default->getPublicHistory($request);

    if ($response->getPublicHistory200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
