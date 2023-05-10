# v3

### Available Operations

* [playablelocationsLogImpressions](#playablelocationslogimpressions) - Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.
* [playablelocationsLogPlayerReports](#playablelocationslogplayerreports) - Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.
* [playablelocationsSamplePlayableLocations](#playablelocationssampleplayablelocations) - Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.

## playablelocationsLogImpressions

Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.

### Example Usage

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
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo->apiClient = 'placeat';
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo->applicationId = 'voluptatum';
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo->applicationVersion = 'iusto';
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo->deviceModel = 'excepturi';
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo->languageCode = 'nisi';
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo->operatingSystem = 'recusandae';
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo->operatingSystemBuild = 'temporibus';
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->clientInfo->platform = GoogleMapsUnityClientInfoPlatformEnum::PLATFORM_UNSPECIFIED;
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->impressions = [
        new GoogleMapsPlayablelocationsV3Impression(),
        new GoogleMapsPlayablelocationsV3Impression(),
    ];
    $request->googleMapsPlayablelocationsV3LogImpressionsRequest->requestId = 'veritatis';
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'repellendus';
    $request->key = 'sapiente';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'at';

    $response = $sdk->v3->playablelocationsLogImpressions($request);

    if ($response->googleMapsPlayablelocationsV3LogImpressionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playablelocationsLogPlayerReports

Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlayablelocationsLogPlayerReportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMapsPlayablelocationsV3LogPlayerReportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMapsUnityClientInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMapsUnityClientInfoPlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMapsPlayablelocationsV3PlayerReport;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayablelocationsLogPlayerReportsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleMapsPlayablelocationsV3LogPlayerReportsRequest = new GoogleMapsPlayablelocationsV3LogPlayerReportsRequest();
    $request->googleMapsPlayablelocationsV3LogPlayerReportsRequest->clientInfo = new GoogleMapsUnityClientInfo();
    $request->googleMapsPlayablelocationsV3LogPlayerReportsRequest->clientInfo->apiClient = 'molestiae';
    $request->googleMapsPlayablelocationsV3LogPlayerReportsRequest->clientInfo->applicationId = 'quod';
    $request->googleMapsPlayablelocationsV3LogPlayerReportsRequest->clientInfo->applicationVersion = 'quod';
    $request->googleMapsPlayablelocationsV3LogPlayerReportsRequest->clientInfo->deviceModel = 'esse';
    $request->googleMapsPlayablelocationsV3LogPlayerReportsRequest->clientInfo->languageCode = 'totam';
    $request->googleMapsPlayablelocationsV3LogPlayerReportsRequest->clientInfo->operatingSystem = 'porro';
    $request->googleMapsPlayablelocationsV3LogPlayerReportsRequest->clientInfo->operatingSystemBuild = 'dolorum';
    $request->googleMapsPlayablelocationsV3LogPlayerReportsRequest->clientInfo->platform = GoogleMapsUnityClientInfoPlatformEnum::PLATFORM_UNSPECIFIED;
    $request->googleMapsPlayablelocationsV3LogPlayerReportsRequest->playerReports = [
        new GoogleMapsPlayablelocationsV3PlayerReport(),
        new GoogleMapsPlayablelocationsV3PlayerReport(),
        new GoogleMapsPlayablelocationsV3PlayerReport(),
    ];
    $request->googleMapsPlayablelocationsV3LogPlayerReportsRequest->requestId = 'officia';
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'hic';
    $request->key = 'optio';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'molestiae';

    $response = $sdk->v3->playablelocationsLogPlayerReports($request);

    if ($response->googleMapsPlayablelocationsV3LogPlayerReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playablelocationsSamplePlayableLocations

Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlayablelocationsSamplePlayableLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMapsPlayablelocationsV3SampleAreaFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMapsPlayablelocationsV3SampleCriterion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMapsPlayablelocationsV3SampleFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMapsPlayablelocationsV3SampleSpacingOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayablelocationsSamplePlayableLocationsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleMapsPlayablelocationsV3SamplePlayableLocationsRequest = new GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest();
    $request->googleMapsPlayablelocationsV3SamplePlayableLocationsRequest->areaFilter = new GoogleMapsPlayablelocationsV3SampleAreaFilter();
    $request->googleMapsPlayablelocationsV3SamplePlayableLocationsRequest->areaFilter->s2CellId = 'qui';
    $request->googleMapsPlayablelocationsV3SamplePlayableLocationsRequest->criteria = [
        new GoogleMapsPlayablelocationsV3SampleCriterion(),
        new GoogleMapsPlayablelocationsV3SampleCriterion(),
        new GoogleMapsPlayablelocationsV3SampleCriterion(),
        new GoogleMapsPlayablelocationsV3SampleCriterion(),
    ];
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'excepturi';
    $request->key = 'aspernatur';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'sed';

    $response = $sdk->v3->playablelocationsSamplePlayableLocations($request);

    if ($response->googleMapsPlayablelocationsV3SamplePlayableLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
