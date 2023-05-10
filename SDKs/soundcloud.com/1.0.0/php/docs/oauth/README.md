# oauth

## Overview

Authentication and Authorization Endpoints.

### Available Operations

* [getConnect](#getconnect) - The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.
* [postOauth2Token](#postoauth2token) - This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.

## getConnect

<h3>Security Advice</h3>
* Using the [implicit OAuth authorization flow](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-2.1.2) (`response_type=token`)  is **not recommended**. It can suffer from access token leakage and access token replay attacks. Use `response_type=code` instead.
* Use the `state` parameter for [CSRF protection](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-4.7). Pass a sufficient  random nonce here and verify this nonce again after retrieving the token.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectRequest();
    $request->clientId = 'molestiae';
    $request->redirectUri = 'quod';
    $request->responseType = ResponseTypeEnum::CODE_AND_TOKEN;
    $request->scope = 'esse';
    $request->state = 'totam';

    $requestSecurity = new GetConnectSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->oauth->getConnect($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOauth2Token

This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostOauth2TokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Password();
    $request->clientId = 'dolorum';
    $request->clientSecret = 'dicta';
    $request->grantType = PasswordGrantTypeEnum::PASSWORD;
    $request->password = 'nam';
    $request->redirectUri = 'officia';
    $request->userName = 'Kristina_Conroy';

    $requestSecurity = new PostOauth2TokenSecurity();
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->oauth->postOauth2Token($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
