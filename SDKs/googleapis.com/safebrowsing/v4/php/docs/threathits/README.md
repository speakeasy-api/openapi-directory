# threatHits

### Available Operations

* [safebrowsingThreatHitsCreate](#safebrowsingthreathitscreate) - Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.

## safebrowsingThreatHitsCreate

Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SafebrowsingThreatHitsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4ThreatHit;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4ClientInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4ThreatEntry;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4ThreatHitThreatSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4ThreatHitUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SafebrowsingThreatHitsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleSecuritySafebrowsingV4ThreatHit = new GoogleSecuritySafebrowsingV4ThreatHit();
    $request->googleSecuritySafebrowsingV4ThreatHit->clientInfo = new GoogleSecuritySafebrowsingV4ClientInfo();
    $request->googleSecuritySafebrowsingV4ThreatHit->clientInfo->clientId = 'ad';
    $request->googleSecuritySafebrowsingV4ThreatHit->clientInfo->clientVersion = 'natus';
    $request->googleSecuritySafebrowsingV4ThreatHit->entry = new GoogleSecuritySafebrowsingV4ThreatEntry();
    $request->googleSecuritySafebrowsingV4ThreatHit->entry->digest = 'sed';
    $request->googleSecuritySafebrowsingV4ThreatHit->entry->hash = 'iste';
    $request->googleSecuritySafebrowsingV4ThreatHit->entry->url = 'dolor';
    $request->googleSecuritySafebrowsingV4ThreatHit->platformType = GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum::IOS;
    $request->googleSecuritySafebrowsingV4ThreatHit->resources = [
        new GoogleSecuritySafebrowsingV4ThreatHitThreatSource(),
        new GoogleSecuritySafebrowsingV4ThreatHitThreatSource(),
    ];
    $request->googleSecuritySafebrowsingV4ThreatHit->threatType = GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum::HIGH_CONFIDENCE_ALLOWLIST;
    $request->googleSecuritySafebrowsingV4ThreatHit->userInfo = new GoogleSecuritySafebrowsingV4ThreatHitUserInfo();
    $request->googleSecuritySafebrowsingV4ThreatHit->userInfo->regionCode = 'saepe';
    $request->googleSecuritySafebrowsingV4ThreatHit->userInfo->userId = 'fuga';
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'iure';
    $request->key = 'saepe';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'reiciendis';

    $response = $sdk->threatHits->safebrowsingThreatHitsCreate($request);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
