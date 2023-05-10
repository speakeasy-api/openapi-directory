# authentication

## Overview

Sakari uses OAuth2 for authentication. After you have created an account at [https://hub.sakari.io](https://hub.sakari.io), you can retrieve your client id and secret from the 'Account Details' screen (click on the 'cog' icon in the top right corner and scroll down to API Credentials)

Using your client id and secret, you can exchange these for a JWT ([JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token))

The JWT should then be used when accessing any of the core API's. It should be passed in the `Authorization` header.

For example:

``Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImt....``


### Available Operations

* [authToken](#authtoken) - Get token for accessing APIs

## authToken

Get token for accessing APIs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TokenRequest();
    $request->clientId = '00000000-0000-0000-0000-00000000000';
    $request->clientSecret = '00000000-0000-0000-0000-00000000000';
    $request->grantType = 'client_credentials';

    $response = $sdk->authentication->authToken($request);

    if ($response->tokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
