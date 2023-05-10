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
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->filter = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->pageSize = 423655;
    $request->pageToken = 'error';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'magnam';

    $response = $sdk->locations->mybusinessbusinesscallsLocationsBusinesscallsinsightsList($request);

    if ($response->listBusinessCallsInsightsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [locations](docs/locations/README.md)

* [mybusinessbusinesscallsLocationsBusinesscallsinsightsList](docs/locations/README.md#mybusinessbusinesscallslocationsbusinesscallsinsightslist) - Returns insights for Business calls for a location.
* [mybusinessbusinesscallsLocationsGetBusinesscallssettings](docs/locations/README.md#mybusinessbusinesscallslocationsgetbusinesscallssettings) - Returns the Business calls settings resource for the given location.
* [mybusinessbusinesscallsLocationsUpdateBusinesscallssettings](docs/locations/README.md#mybusinessbusinesscallslocationsupdatebusinesscallssettings) - Updates the Business call settings for the specified location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
