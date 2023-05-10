# keysApi

### Available Operations

* [keysApiCurrent](#keysapicurrent)
* [keysApiCustom](#keysapicustom)
* [keysApiExpiry](#keysapiexpiry)
* [keysApiFind](#keysapifind)

## keysApiCurrent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeysApiCurrentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeysApiCurrentRequest();
    $request->serial = 'provident';

    $response = $sdk->keysApi->keysApiCurrent($request);

    if ($response->keysApiCurrent200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## keysApiCustom

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeysApiCustomRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeysApiCustomRequest();
    $request->serial = 'distinctio';

    $response = $sdk->keysApi->keysApiCustom($request);

    if ($response->keysApiCustom200ApplicationOctetStreamBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## keysApiExpiry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeysApiExpiryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeysApiExpiryRequest();
    $request->serial = 'quibusdam';

    $response = $sdk->keysApi->keysApiExpiry($request);

    if ($response->keysApiExpiry200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## keysApiFind

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeysApiFindRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeysApiFindRequest();
    $request->serial = 'unde';

    $response = $sdk->keysApi->keysApiFind($request);

    if ($response->keysApiFind200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
