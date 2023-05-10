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
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchConversionGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchConversionGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclicksearchConversionGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->adGroupId = 'distinctio';
    $request->adId = 'quibusdam';
    $request->advertiserId = 'unde';
    $request->agencyId = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illum';
    $request->campaignId = 'vel';
    $request->criterionId = 'error';
    $request->customerId = 'deserunt';
    $request->endDate = 384382;
    $request->engineAccountId = 'iure';
    $request->fields = 'magnam';
    $request->key = 'debitis';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->rowCount = 272656;
    $request->startDate = 383441;
    $request->startRow = 477665;
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new DoubleclicksearchConversionGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversion->doubleclicksearchConversionGet($request, $requestSecurity);

    if ($response->conversionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [conversion](docs/conversion/README.md)

* [doubleclicksearchConversionGet](docs/conversion/README.md#doubleclicksearchconversionget) - Retrieves a list of conversions from a DoubleClick Search engine account.
* [doubleclicksearchConversionGetByCustomerId](docs/conversion/README.md#doubleclicksearchconversiongetbycustomerid) - Retrieves a list of conversions from a DoubleClick Search engine account.
* [doubleclicksearchConversionInsert](docs/conversion/README.md#doubleclicksearchconversioninsert) - Inserts a batch of new conversions into DoubleClick Search.
* [doubleclicksearchConversionUpdate](docs/conversion/README.md#doubleclicksearchconversionupdate) - Updates a batch of conversions in DoubleClick Search.
* [doubleclicksearchConversionUpdateAvailability](docs/conversion/README.md#doubleclicksearchconversionupdateavailability) - Updates the availabilities of a batch of floodlight activities in DoubleClick Search.

### [reports](docs/reports/README.md)

* [doubleclicksearchReportsGenerate](docs/reports/README.md#doubleclicksearchreportsgenerate) - Generates and returns a report immediately.
* [doubleclicksearchReportsGet](docs/reports/README.md#doubleclicksearchreportsget) - Polls for the status of a report request.
* [doubleclicksearchReportsGetFile](docs/reports/README.md#doubleclicksearchreportsgetfile) - Downloads a report file encoded in UTF-8.
* [doubleclicksearchReportsGetIdMappingFile](docs/reports/README.md#doubleclicksearchreportsgetidmappingfile) - Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.
* [doubleclicksearchReportsRequest](docs/reports/README.md#doubleclicksearchreportsrequest) - Inserts a report request into the reporting system.

### [savedColumns](docs/savedcolumns/README.md)

* [doubleclicksearchSavedColumnsList](docs/savedcolumns/README.md#doubleclicksearchsavedcolumnslist) - Retrieve the list of saved columns for a specified advertiser.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
