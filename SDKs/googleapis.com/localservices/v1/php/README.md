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
use \OpenAPI\OpenAPI\Models\Operations\LocalservicesAccountReportsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LocalservicesAccountReportsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LocalservicesAccountReportsSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->endDateDay = 602763;
    $request->endDateMonth = 857946;
    $request->endDateYear = 544883;
    $request->fields = 'illum';
    $request->key = 'vel';
    $request->oauthToken = 'error';
    $request->pageSize = 645894;
    $request->pageToken = 'suscipit';
    $request->prettyPrint = false;
    $request->query = 'iure';
    $request->quotaUser = 'magnam';
    $request->startDateDay = 891773;
    $request->startDateMonth = 56713;
    $request->startDateYear = 963663;
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new LocalservicesAccountReportsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountReports->localservicesAccountReportsSearch($request, $requestSecurity);

    if ($response->googleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accountReports](docs/accountreports/README.md)

* [localservicesAccountReportsSearch](docs/accountreports/README.md#localservicesaccountreportssearch) - Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

### [detailedLeadReports](docs/detailedleadreports/README.md)

* [localservicesDetailedLeadReportsSearch](docs/detailedleadreports/README.md#localservicesdetailedleadreportssearch) - Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
