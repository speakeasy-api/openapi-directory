# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->clientSid = 'unde';
    $request->scopes = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];

    $requestSecurity = new CreateDeviceCodeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createDeviceCode($request, $requestSecurity);

    if ($response->oauthV1DeviceCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createDeviceCode](docs/sdk/README.md#createdevicecode) - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
* [createToken](docs/sdk/README.md#createtoken) - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
* [fetchCerts](docs/sdk/README.md#fetchcerts) - Fetches public JWKs
* [fetchOpenidDiscovery](docs/sdk/README.md#fetchopeniddiscovery) - Fetch configuration details about the OpenID Connect Authorization Server
* [fetchUserInfo](docs/sdk/README.md#fetchuserinfo) - Retrieves the consented UserInfo and other claims about the logged-in subject (end-user).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
