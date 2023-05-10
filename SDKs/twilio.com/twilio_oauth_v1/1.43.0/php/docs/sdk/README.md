# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createDeviceCode](#createdevicecode) - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
* [createToken](#createtoken) - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
* [fetchCerts](#fetchcerts) - Fetches public JWKs
* [fetchOpenidDiscovery](#fetchopeniddiscovery) - Fetch configuration details about the OpenID Connect Authorization Server
* [fetchUserInfo](#fetchuserinfo) - Retrieves the consented UserInfo and other claims about the logged-in subject (end-user).

## createDeviceCode

Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceCodeCreateDeviceCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceCodeCreateDeviceCodeRequest();
    $request->audiences = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->clientSid = 'debitis';
    $request->scopes = [
        'delectus',
    ];

    $requestSecurity = new CreateDeviceCodeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createDeviceCode($request, $requestSecurity);

    if ($response->oauthV1DeviceCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createToken

Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenCreateTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTokenCreateTokenRequest();
    $request->clientSecret = 'tempora';
    $request->clientSid = 'suscipit';
    $request->code = 'molestiae';
    $request->codeVerifier = 'minus';
    $request->deviceCode = 'placeat';
    $request->deviceId = 'voluptatum';
    $request->grantType = 'iusto';
    $request->refreshToken = 'excepturi';

    $requestSecurity = new CreateTokenSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createToken($request, $requestSecurity);

    if ($response->oauthV1Token !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCerts

Fetches public JWKs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCertsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new FetchCertsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCerts($requestSecurity);

    if ($response->oauthV1Certs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchOpenidDiscovery

Fetch configuration details about the OpenID Connect Authorization Server

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchOpenidDiscoverySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new FetchOpenidDiscoverySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchOpenidDiscovery($requestSecurity);

    if ($response->oauthV1OpenidDiscovery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUserInfo

Retrieves the consented UserInfo and other claims about the logged-in subject (end-user).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUserInfoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new FetchUserInfoSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUserInfo($requestSecurity);

    if ($response->oauthV1UserInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
