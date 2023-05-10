# mobileAuthorization

### Available Operations

* [createMobileAuthorizationCode](#createmobileauthorizationcode) - CreateMobileAuthorizationCode

## createMobileAuthorizationCode

Generates code to authorize a mobile application to connect to a Square card reader

Authorization codes are one-time-use and expire __60 minutes__ after being issued.

__Important:__ The `Authorization` header you provide to this endpoint must have the following format:

```
Authorization: Bearer ACCESS_TOKEN
```

Replace `ACCESS_TOKEN` with a
[valid production authorization credential](https://developer.squareup.com/docs/build-basics/access-tokens).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateMobileAuthorizationCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMobileAuthorizationCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMobileAuthorizationCodeRequest();
    $request->locationId = 'magni';

    $requestSecurity = new CreateMobileAuthorizationCodeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mobileAuthorization->createMobileAuthorizationCode($request, $requestSecurity);

    if ($response->createMobileAuthorizationCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
