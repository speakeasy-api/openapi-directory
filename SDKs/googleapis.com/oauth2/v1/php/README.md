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
use \OpenAPI\OpenAPI\Models\Operations\Oauth2TokeninfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Oauth2TokeninfoRequest();
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::JSON;
    $request->fields = 'provident';
    $request->idToken = 'distinctio';
    $request->key = 'quibusdam';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->quotaUser = 'nulla';
    $request->userIp = 'corrupti';

    $response = $sdk->oauth2Tokeninfo($request);

    if ($response->tokeninfo !== null) {
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

* [oauth2Tokeninfo](docs/sdk/README.md#oauth2tokeninfo) - Get token info

### [userinfo](docs/userinfo/README.md)

* [oauth2UserinfoGet](docs/userinfo/README.md#oauth2userinfoget) - Get user info
* [oauth2UserinfoV2MeGet](docs/userinfo/README.md#oauth2userinfov2meget) - Get user info
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
