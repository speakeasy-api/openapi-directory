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
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SiteVerificationWebResourceDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'corrupti';
    $request->id = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->userIp = 'sapiente';

    $requestSecurity = new SiteVerificationWebResourceDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webResource->siteVerificationWebResourceDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [webResource](docs/webresource/README.md)

* [siteVerificationWebResourceDelete](docs/webresource/README.md#siteverificationwebresourcedelete) - Relinquish ownership of a website or domain.
* [siteVerificationWebResourceGet](docs/webresource/README.md#siteverificationwebresourceget) - Get the most current data for a website or domain.
* [siteVerificationWebResourceGetToken](docs/webresource/README.md#siteverificationwebresourcegettoken) - Get a verification token for placing on a website or domain.
* [siteVerificationWebResourceInsert](docs/webresource/README.md#siteverificationwebresourceinsert) - Attempt verification of a website or domain.
* [siteVerificationWebResourceList](docs/webresource/README.md#siteverificationwebresourcelist) - Get the list of your verified websites and domains.
* [siteVerificationWebResourcePatch](docs/webresource/README.md#siteverificationwebresourcepatch) - Modify the list of owners for your website or domain. This method supports patch semantics.
* [siteVerificationWebResourceUpdate](docs/webresource/README.md#siteverificationwebresourceupdate) - Modify the list of owners for your website or domain.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
