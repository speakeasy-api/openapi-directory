# oauth

### Available Operations

* [getOauthAuthorize](#getoauthauthorize) - Displays an authorization form to the user. If approved, it will create and return an authorization code, then redirect to the desired redirect_uri, or show the authorization code if urn:ietf:wg:oauth:2.0:oob was requested. The authorization code can be used while requesting a token to obtain access to user-level methods.
* [postOauthRevoke](#postoauthrevoke) - Revoke an access token to make it no longer valid for use.
* [postOauthToken](#postoauthtoken) - Returns an access token, to be used during API calls that are not public.

## getOauthAuthorize

Displays an authorization form to the user. If approved, it will create and return an authorization code, then redirect to the desired redirect_uri, or show the authorization code if urn:ietf:wg:oauth:2.0:oob was requested. The authorization code can be used while requesting a token to obtain access to user-level methods.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOauthAuthorizeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOauthAuthorizeRequest();
    $request->clientId = 'alias';
    $request->forceLogin = false;
    $request->redirectUri = 'culpa';
    $request->responseType = 'ipsa';
    $request->scope = 'nobis';

    $response = $sdk->oauth->getOauthAuthorize($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOauthRevoke

Revoke an access token to make it no longer valid for use.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'necessitatibus'

    $response = $sdk->oauth->postOauthRevoke($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOauthToken

Returns an access token, to be used during API calls that are not public.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'quia'

    $response = $sdk->oauth->postOauthToken($request);

    if ($response->postOauthToken200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
