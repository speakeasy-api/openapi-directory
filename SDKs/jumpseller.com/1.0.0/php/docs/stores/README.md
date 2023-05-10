# stores

### Available Operations

* [getStoreInfoJson](#getstoreinfojson) - Retrieve Store Information.
* [getStoreLanguagesJson](#getstorelanguagesjson) - Retrieve Store Languages.

## getStoreInfoJson

Retrieve Store Information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoreInfoJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoreInfoJsonRequest();
    $request->authtoken = 'dolore';
    $request->login = 'aliquam';

    $response = $sdk->stores->getStoreInfoJson($request);

    if ($response->store !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStoreLanguagesJson

Retrieve Store Languages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoreLanguagesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoreLanguagesJsonRequest();
    $request->authtoken = 'officiis';
    $request->login = 'temporibus';

    $response = $sdk->stores->getStoreLanguagesJson($request);

    if ($response->languages !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
