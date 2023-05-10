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