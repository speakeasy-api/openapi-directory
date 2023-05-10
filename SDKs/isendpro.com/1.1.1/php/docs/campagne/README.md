# campagne

### Available Operations

* [getCampagne](#getcampagne) - Retourne les SMS envoyés sur une période donnée

## getCampagne

Retourne les SMS envoyés sur une période donnée en fonction d'une date de début et d'une date de fin. 

Les dates sont au format YYYY-MM-DD hh:mm. 

Le fichier rapport de campagne est sous la forme d'un fichier zip + contenant un fichier csv contenant le détail des envois.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCampagneRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCampagneRapportCampagneEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCampagneRequest();
    $request->dateDeb = 'illum';
    $request->dateFin = 'vel';
    $request->keyid = 'error';
    $request->rapportCampagne = GetCampagneRapportCampagneEnum::ONE;

    $response = $sdk->campagne->getCampagne($request);

    if ($response->getCampagne200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
