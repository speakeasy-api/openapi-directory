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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DfsSlatesByDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DfsSlatesByDateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfsSlatesByDateRequest();
    $request->date = 'corrupti';
    $request->format = DfsSlatesByDateFormatEnum::XML;

    $response = $sdk->dfsSlatesByDate($request);

    if ($response->dfsSlates !== null) {
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

* [dfsSlatesByDate](docs/sdk/README.md#dfsslatesbydate) - Dfs Slates By Date
* [injuredPlayersByCompetition](docs/sdk/README.md#injuredplayersbycompetition) - Injured Players By Competition
* [projectedPlayerGameStatsByCompetitionWDfsSalaries](docs/sdk/README.md#projectedplayergamestatsbycompetitionwdfssalaries) - Projected Player Game Stats by Competition (w/ DFS Salaries)
* [projectedPlayerGameStatsByDateWDfsSalaries](docs/sdk/README.md#projectedplayergamestatsbydatewdfssalaries) - Projected Player Game Stats by Date (w/ DFS Salaries)
* [projectedPlayerGameStatsByPlayerWDfsSalaries](docs/sdk/README.md#projectedplayergamestatsbyplayerwdfssalaries) - Projected Player Game Stats by Player (w/ DFS Salaries)
* [upcomingDfsSlatesByCompetition](docs/sdk/README.md#upcomingdfsslatesbycompetition) - Upcoming Dfs Slates By Competition
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
