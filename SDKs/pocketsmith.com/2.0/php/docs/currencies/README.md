# currencies

### Available Operations

* [getCurrencies](#getcurrencies) - List currencies
* [getCurrenciesId](#getcurrenciesid) - Get currency

## getCurrencies

Lists currencies supported by PocketSmith.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->currencies->getCurrencies();

    if ($response->currencies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCurrenciesId

Gets a particular currency by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCurrenciesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCurrenciesIdRequest();
    $request->id = '7cc78ca1-ba92-48fc-8167-42cb73920592';

    $response = $sdk->currencies->getCurrenciesId($request);

    if ($response->currency !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
