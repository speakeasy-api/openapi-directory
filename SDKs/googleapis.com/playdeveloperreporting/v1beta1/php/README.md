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
use \OpenAPI\OpenAPI\Models\Operations\PlaydeveloperreportingAnomaliesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlaydeveloperreportingAnomaliesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaydeveloperreportingAnomaliesListRequest();
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

    $requestSecurity = new PlaydeveloperreportingAnomaliesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->anomalies->playdeveloperreportingAnomaliesList($request, $requestSecurity);

    if ($response->googlePlayDeveloperReportingV1beta1ListAnomaliesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [anomalies](docs/anomalies/README.md)

* [playdeveloperreportingAnomaliesList](docs/anomalies/README.md#playdeveloperreportinganomalieslist) - Lists anomalies in any of the datasets.

### [vitals](docs/vitals/README.md)

* [playdeveloperreportingVitalsErrorsIssuesSearch](docs/vitals/README.md#playdeveloperreportingvitalserrorsissuessearch) - Searches all error issues in which reports have been grouped.
* [playdeveloperreportingVitalsErrorsReportsSearch](docs/vitals/README.md#playdeveloperreportingvitalserrorsreportssearch) - Searches all error reports received for an app.
* [playdeveloperreportingVitalsStuckbackgroundwakelockrateGet](docs/vitals/README.md#playdeveloperreportingvitalsstuckbackgroundwakelockrateget) - Describes the properties of the metric set.
* [playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery](docs/vitals/README.md#playdeveloperreportingvitalsstuckbackgroundwakelockratequery) - Queries the metrics in the metric set.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
