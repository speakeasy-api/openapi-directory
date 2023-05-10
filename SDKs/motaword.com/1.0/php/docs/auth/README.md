# auth

### Available Operations

* [getAccessToken](#getaccesstoken) - Retrieve an access token

## getAccessToken

MotaWord API is using OAuth2 procedures when authenticating or authorizing your API call.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccessTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TokenRequest();
    $request->grantType = 'repellendus';
    $request->password = 'sapiente';
    $request->refreshToken = 'quo';
    $request->scope = 'odit';
    $request->userId = 870013;
    $request->username = 'Sarah_Wolff';

    $requestSecurity = new GetAccessTokenSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->auth->getAccessToken($request, $requestSecurity);

    if ($response->token !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
