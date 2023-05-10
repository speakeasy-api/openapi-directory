# authorization

## Overview

Resources that manage authorization tokens.

### Available Operations

* [generateTokenV2](#generatetokenv2) - Generate an OAuth Token
* [revokeRefreshTokenV2](#revokerefreshtokenv2) - Delete a Refresh Token

## generateTokenV2

Returns an OAuth access token or a refresh token. You must pass a valid access token in the header of each API call.

authentication guid
<https://metamind.readme.io/docs/generate-an-oauth-access-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GenerateTokenV2RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GenerateTokenV2RequestBodyGrantTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateTokenV2RequestBody();
    $request->assertion = 'SOME_ASSERTION_STRING';
    $request->grantType = GenerateTokenV2RequestBodyGrantTypeEnum::URN_IETF_PARAMS_OAUTH_GRANT_TYPE_JWT_BEARER;
    $request->refreshToken = 'SomeRefreshToken';
    $request->scope = 'offline';
    $request->validFor = 120;

    $response = $sdk->authorization->generateTokenV2($request);

    if ($response->generateAccessTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## revokeRefreshTokenV2

Delete a Refresh Token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RevokeRefreshTokenV2Request;
use \OpenAPI\OpenAPI\Models\Operations\RevokeRefreshTokenV2Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RevokeRefreshTokenV2Request();
    $request->token = 'corrupti';

    $requestSecurity = new RevokeRefreshTokenV2Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->authorization->revokeRefreshTokenV2($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
