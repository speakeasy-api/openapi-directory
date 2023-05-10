# monatsbelege

### Available Operations

* [getMonatsbelege](#getmonatsbelege) - Returns a list of `Monatsbelege`.

## getMonatsbelege

Returns a list of `Monatsbelege`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMonatsbelegeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMonatsbelegeRequest();
    $request->month = 170909;
    $request->registrierkasseUuid = 'dolorem';
    $request->year = 358152;

    $response = $sdk->monatsbelege->getMonatsbelege($request);

    if ($response->monatsbelegs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
