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
use \OpenAPI\OpenAPI\Models\Operations\PlayablelocationsLogImpressionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMapsPlayablelocationsV3LogImpressionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMapsUnityClientInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMapsUnityClientInfoPlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMapsPlayablelocationsV3Impression;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayablelocationsLogImpressionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest = new GoogleMapsPlayablelocationsV3LogImpressionsRequest();
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo = new GoogleMapsUnityClientInfo();
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo->apiClient = 'provident';
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo->applicationId = 'distinctio';
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo->applicationVersion = 'quibusdam';
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo->deviceModel = 'unde';
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo->languageCode = 'nulla';
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo->operatingSystem = 'corrupti';
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo->operatingSystemBuild = 'illum';
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo->platform = GoogleMapsUnityClientInfoPlatformEnum::WINDOWS;
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->impressions = [
        new GoogleMapsPlayablelocationsV3Impression(),
        new GoogleMapsPlayablelocationsV3Impression(),
        new GoogleMapsPlayablelocationsV3Impression(),
    ];
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->requestId = 'deserunt';
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'debitis';
    $request->key = 'ipsa';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'molestiae';

    $response = $sdk->v3->playablelocationsLogImpressions($request);

    if ($response->googleMapsPlayablelocationsV3LogImpressionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [v3](docs/v3/README.md)

* [playablelocationsLogImpressions](docs/v3/README.md#playablelocationslogimpressions) - Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.
* [playablelocationsLogPlayerReports](docs/v3/README.md#playablelocationslogplayerreports) - Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.
* [playablelocationsSamplePlayableLocations](docs/v3/README.md#playablelocationssampleplayablelocations) - Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
