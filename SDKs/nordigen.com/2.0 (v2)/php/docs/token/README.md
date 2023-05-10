# token

### Available Operations

* [jwtObtain](#jwtobtain) - Obtain JWT pair
* [jwtRefresh](#jwtrefresh) - Refresh access token

## jwtObtain

Obtain JWT pair

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\JWTObtainPairRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JWTObtainPairRequest();
    $request->secretId = 'provident';
    $request->secretKey = 'aspernatur';

    $response = $sdk->token->jwtObtain($request);

    if ($response->spectacularJWTObtain !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jwtRefresh

Refresh access token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\JWTRefreshRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JWTRefreshRequest();
    $request->refresh = 'ullam';

    $response = $sdk->token->jwtRefresh($request);

    if ($response->spectacularJWTRefresh !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
