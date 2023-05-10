# comptage

### Available Operations

* [comptage](#comptage) - Compter le nombre de caractère 

## comptage

Compte le nombre de SMS necessaire à un envoi

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ComptageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComptageRequestComptageEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComptageRequestGmtZoneEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComptageRequestNumAzurEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComptageRequestSmslongEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComptageRequest();
    $request->comptage = ComptageRequestComptageEnum::ONE;
    $request->dateEnvoi = 'deserunt';
    $request->emetteur = 'suscipit';
    $request->gmtZone = ComptageRequestGmtZoneEnum::EUROPE_LONDON;
    $request->keyid = 'magnam';
    $request->nostop = 'debitis';
    $request->num = 'ipsa';
    $request->numAzur = ComptageRequestNumAzurEnum::ONE;
    $request->sms = 'delectus';
    $request->smslong = ComptageRequestSmslongEnum::NINE_HUNDRED_AND_NINETY_NINE;
    $request->tracker = 'tempora';
    $request->ucs2 = 'suscipit';

    $response = $sdk->comptage->comptage($request);

    if ($response->comptageReponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
