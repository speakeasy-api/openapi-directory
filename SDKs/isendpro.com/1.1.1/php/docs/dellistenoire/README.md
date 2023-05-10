# delListeNoire

### Available Operations

* [delListeNoire](#dellistenoire) - Ajoute un numero en liste noire

## delListeNoire

Supprime un numero en liste noire

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DelListeNoireRequest;
use \OpenAPI\OpenAPI\Models\Operations\DelListeNoireDelListeNoireEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DelListeNoireRequest();
    $request->delListeNoire = DelListeNoireDelListeNoireEnum::ONE;
    $request->keyid = 'placeat';
    $request->num = 'voluptatum';

    $response = $sdk->delListeNoire->delListeNoire($request);

    if ($response->listenoireReponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
