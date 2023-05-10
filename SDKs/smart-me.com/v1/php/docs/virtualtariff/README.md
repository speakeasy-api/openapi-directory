# virtualTariff

### Available Operations

* [virtualTariffGet](#virtualtariffget) - Gets all Virtual Tariffs of a user
* [getApiVirtualTariffId](#getapivirtualtariffid) - Gets all virtual tariffs of a folder

## virtualTariffGet

Gets all Virtual Tariffs of a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->virtualTariff->virtualTariffGet();

    if ($response->virtualTariffsOfFolders !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiVirtualTariffId

Gets all virtual tariffs of a folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiVirtualTariffIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiVirtualTariffIdRequest();
    $request->id = '0929921a-efb9-4f58-84d8-6e68e4be0560';

    $response = $sdk->virtualTariff->getApiVirtualTariffId($request);

    if ($response->virtualTariffsOfFolder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
