# accessToken

### Available Operations

* [accessTokenPutForm](#accesstokenputform) - Creates a Access Token to write on a Card (e.g. NFC)
* [accessTokenPutJson](#accesstokenputjson) - Creates a Access Token to write on a Card (e.g. NFC)
* [accessTokenPutRaw](#accesstokenputraw) - Creates a Access Token to write on a Card (e.g. NFC)

## accessTokenPutForm

Creates a Access Token to write on a Card (e.g. NFC)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AccessTokenToPut;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessTokenToPut();
    $request->cardId = 715190;
    $request->userId = 844266;

    $response = $sdk->accessToken->accessTokenPutForm($request);

    if ($response->accessTokenPutForm200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessTokenPutJson

Creates a Access Token to write on a Card (e.g. NFC)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AccessTokenToPut;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessTokenToPut();
    $request->cardId = 602763;
    $request->userId = 857946;

    $response = $sdk->accessToken->accessTokenPutJson($request);

    if ($response->accessTokenPutJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessTokenPutRaw

Creates a Access Token to write on a Card (e.g. NFC)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'corrupti'

    $response = $sdk->accessToken->accessTokenPutRaw($request);

    if ($response->accessTokenPutRaw200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
