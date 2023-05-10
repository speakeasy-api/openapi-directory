# apps

### Available Operations

* [getApiV1AppsVerifyCredentials](#getapiv1appsverifycredentials) - Confirm that the app's OAuth2 credentials work.
* [postApiV1Apps](#postapiv1apps) - Create a new application to obtain OAuth2 credentials.

## getApiV1AppsVerifyCredentials

Confirm that the app's OAuth2 credentials work.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AppsVerifyCredentialsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetApiV1AppsVerifyCredentialsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->apps->getApiV1AppsVerifyCredentials($requestSecurity);

    if ($response->application !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1Apps

Create a new application to obtain OAuth2 credentials.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'architecto'

    $response = $sdk->apps->postApiV1Apps($request);

    if ($response->postApiV1Apps200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
