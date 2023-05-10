# hlr

### Available Operations

* [getHlr](#gethlr) - Vérifier la validité d'un numéro

## getHlr

Réalise un lookup HLR sur les numéros 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\HLRrequest;
use \OpenAPI\OpenAPI\Models\Shared\HLRrequestGetHLREnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HLRrequest();
    $request->getHLR = HLRrequestGetHLREnum::ONE;
    $request->keyid = 'perferendis';
    $request->num = [
        'repellendus',
        'sapiente',
    ];

    $response = $sdk->hlr->getHlr($request);

    if ($response->hlrReponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
