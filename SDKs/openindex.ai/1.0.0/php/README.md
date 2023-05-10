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
use \OpenAPI\OpenAPI\Models\Shared\QueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Shared\DocumentMetadataFilter;
use \OpenAPI\OpenAPI\Models\Shared\SourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryQueryPostSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryRequest();
    $request->namespace = 'corrupti';
    $request->queries = [
        new Query(),
        new Query(),
        new Query(),
    ];

    $requestSecurity = new QueryQueryPostSecurity();
    $requestSecurity->httpBearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->queryQueryPost($request, $requestSecurity);

    if ($response->queryResponse !== null) {
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

* [queryQueryPost](docs/sdk/README.md#queryquerypost) - Query
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
