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
use \OpenAPI\OpenAPI\Models\Operations\RetrieveNEOFeedTodayRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveNEOFeedTodayRequest();
    $request->detailed = false;

    $response = $sdk->feed->retrieveNEOFeedToday($request);

    if ($response->nearEarthObjectList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [feed](docs/feed/README.md)

* [retrieveNEOFeedToday](docs/feed/README.md#retrieveneofeedtoday) - Find Near Earth Objects for today
* [retrieveNearEarthObjectFeed](docs/feed/README.md#retrievenearearthobjectfeed) - Find Near Earth Objects by date

### [neo](docs/neo/README.md)

* [browseNearEarthObjects](docs/neo/README.md#browsenearearthobjects) - Browse the Near Earth Objects service
* [retrieveNearEarthObjectById](docs/neo/README.md#retrievenearearthobjectbyid) - Find Near Earth Objects by id

### [neosentry](docs/neosentry/README.md)

* [retrieveSentryRiskData](docs/neosentry/README.md#retrievesentryriskdata) - Retrieve Sentry (Impact Risk ) Near Earth Objects
* [retrieveSentryRiskDataById](docs/neosentry/README.md#retrievesentryriskdatabyid) - Retrieve Sentry (Impact Risk ) Near Earth Objectby ID 

### [stats](docs/stats/README.md)

* [retrieveCurrentNeoStatistics](docs/stats/README.md#retrievecurrentneostatistics) - Get the Near Earth Object data set totals
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
