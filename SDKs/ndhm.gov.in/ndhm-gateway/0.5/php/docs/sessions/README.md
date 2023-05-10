# sessions

### Available Operations

* [getV05WellKnownOpenidConfiguration](#getv05wellknownopenidconfiguration) - Get openid configuration
* [getV05Certs](#getv05certs) - Get certs for JWT verification
* [postV05SessionsJson](#postv05sessionsjson) - Get access token
* [postV05SessionsRaw](#postv05sessionsraw) - Get access token

## getV05WellKnownOpenidConfiguration

Get openid configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sessions->getV05WellKnownOpenidConfiguration();

    if ($response->openIdConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV05Certs

Get certs for JWT verification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sessions->getV05Certs();

    if ($response->certs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SessionsJson

Get access token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\SessionRequestGrantTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SessionRequest();
    $request->clientId = 'asperiores';
    $request->clientSecret = 'temporibus';
    $request->grantType = SessionRequestGrantTypeEnum::REFRESH_TOKEN;
    $request->refreshToken = 'atque';

    $response = $sdk->sessions->postV05SessionsJson($request);

    if ($response->sessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SessionsRaw

Get access token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'quibusdam'

    $response = $sdk->sessions->postV05SessionsRaw($request);

    if ($response->sessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
