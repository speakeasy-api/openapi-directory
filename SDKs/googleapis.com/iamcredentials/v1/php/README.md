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
use \OpenAPI\OpenAPI\Models\Operations\IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenerateAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->generateAccessTokenRequest = new GenerateAccessTokenRequest();
    $request->generateAccessTokenRequest->delegates = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->generateAccessTokenRequest->lifetime = 'nulla';
    $request->generateAccessTokenRequest->scope = [
        'illum',
        'vel',
        'error',
    ];
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'magnam';
    $request->key = 'debitis';
    $request->name = 'Lucia Goldner';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iamcredentialsProjectsServiceAccountsGenerateAccessToken($request, $requestSecurity);

    if ($response->generateAccessTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [iamcredentialsProjectsServiceAccountsGenerateAccessToken](docs/projects/README.md#iamcredentialsprojectsserviceaccountsgenerateaccesstoken) - Generates an OAuth 2.0 access token for a service account.
* [iamcredentialsProjectsServiceAccountsGenerateIdToken](docs/projects/README.md#iamcredentialsprojectsserviceaccountsgenerateidtoken) - Generates an OpenID Connect ID token for a service account.
* [iamcredentialsProjectsServiceAccountsSignBlob](docs/projects/README.md#iamcredentialsprojectsserviceaccountssignblob) - Signs a blob using a service account's system-managed private key.
* [iamcredentialsProjectsServiceAccountsSignJwt](docs/projects/README.md#iamcredentialsprojectsserviceaccountssignjwt) - Signs a JWT using a service account's system-managed private key.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
