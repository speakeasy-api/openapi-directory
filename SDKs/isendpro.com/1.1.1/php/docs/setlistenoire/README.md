# setListeNoire

### Available Operations

* [setListeNoire](#setlistenoire) - Ajoute un numero en liste noire

## setListeNoire

Ajoute un numero en liste noire. Une fois ajouté, les requêtes d'envoi de SMS marketing vers ce numéro seront refusées.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SetListeNoireRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetListeNoireSetlisteNoireEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetListeNoireRequest();
    $request->keyid = 'reiciendis';
    $request->num = 'voluptatibus';
    $request->setlisteNoire = SetListeNoireSetlisteNoireEnum::ONE;

    $response = $sdk->setListeNoire->setListeNoire($request);

    if ($response->listenoireReponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
