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
use \OpenAPI\OpenAPI\Models\Operations\CreateAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAliasModel;
use \OpenAPI\OpenAPI\Models\Shared\DestinationModel;
use \OpenAPI\OpenAPI\Models\Shared\MetaTagModel;
use \OpenAPI\OpenAPI\Models\Shared\SnippetModel;
use \OpenAPI\OpenAPI\Models\Operations\CreateAliasSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAliasRequest();
    $request->createAliasModel = new CreateAliasModel();
    $request->createAliasModel->destinations = [
        new DestinationModel(),
        new DestinationModel(),
        new DestinationModel(),
    ];
    $request->createAliasModel->metatags = [
        new MetaTagModel(),
        new MetaTagModel(),
        new MetaTagModel(),
    ];
    $request->createAliasModel->snippets = [
        new SnippetModel(),
        new SnippetModel(),
        new SnippetModel(),
    ];
    $request->aliasName = 'quibusdam';
    $request->domainName = 'unde';

    $requestSecurity = new CreateAliasSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->alias->createAlias($request, $requestSecurity);

    if ($response->createAliasResponseModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [alias](docs/alias/README.md)

* [createAlias](docs/alias/README.md#createalias) - Create alias
* [deleteAlias](docs/alias/README.md#deletealias) - Delete alias
* [getAlias](docs/alias/README.md#getalias) - Get alias
* [getAliases](docs/alias/README.md#getaliases) - Get aliases by domain
* [updateAlias](docs/alias/README.md#updatealias) - Update alias

### [click](docs/click/README.md)

* [getClicks](docs/click/README.md#getclicks) - Get clicks

### [statistics](docs/statistics/README.md)

* [getStatistics](docs/statistics/README.md#getstatistics) - Get clicks statistics
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
