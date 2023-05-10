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
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsDataGetRequest();
    $request->alt = AltEnum::ATOM;
    $request->dimensions = 'corrupti';
    $request->endDate = 'provident';
    $request->fields = 'distinctio';
    $request->filters = 'quibusdam';
    $request->ids = 'unde';
    $request->key = 'nulla';
    $request->maxResults = 544883;
    $request->metrics = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->segment = 'deserunt';
    $request->sort = 'suscipit';
    $request->startDate = 'iure';
    $request->startIndex = 297534;
    $request->userIp = 'debitis';

    $requestSecurity = new AnalyticsDataGetSecurity();
    $requestSecurity->option1 = new AnalyticsDataGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->data->analyticsDataGet($request, $requestSecurity);

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


### [data](docs/data/README.md)

* [analyticsDataGet](docs/data/README.md#analyticsdataget) - Returns Analytics report data for a view (profile).

### [management](docs/management/README.md)

* [analyticsManagementAccountsList](docs/management/README.md#analyticsmanagementaccountslist) - Lists all accounts to which the user has access.
* [analyticsManagementGoalsList](docs/management/README.md#analyticsmanagementgoalslist) - Lists goals to which the user has access.
* [analyticsManagementProfilesList](docs/management/README.md#analyticsmanagementprofileslist) - Lists views (profiles) to which the user has access.
* [analyticsManagementSegmentsList](docs/management/README.md#analyticsmanagementsegmentslist) - Lists advanced segments to which the user has access.
* [analyticsManagementWebpropertiesList](docs/management/README.md#analyticsmanagementwebpropertieslist) - Lists web properties to which the user has access.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
