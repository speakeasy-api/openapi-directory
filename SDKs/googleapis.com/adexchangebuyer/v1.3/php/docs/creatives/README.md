# creatives

### Available Operations

* [adexchangebuyerCreativesGet](#adexchangebuyercreativesget) - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* [adexchangebuyerCreativesInsert](#adexchangebuyercreativesinsert) - Submit a new creative.
* [adexchangebuyerCreativesList](#adexchangebuyercreativeslist) - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.

## adexchangebuyerCreativesGet

Gets the status for a single creative. A creative will be available 30-40 minutes after submission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerCreativesGetRequest();
    $request->accountId = 19987;
    $request->alt = AltEnum::JSON;
    $request->buyerCreativeId = 'doloremque';
    $request->fields = 'reprehenderit';
    $request->key = 'ut';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->userIp = 'corporis';

    $requestSecurity = new AdexchangebuyerCreativesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creatives->adexchangebuyerCreativesGet($request, $requestSecurity);

    if ($response->creative !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerCreativesInsert

Submit a new creative.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Creative;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAdTechnologyProviders;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCorrections;
use \OpenAPI\OpenAPI\Models\Shared\CreativeDisapprovalReasons;
use \OpenAPI\OpenAPI\Models\Shared\CreativeFilteringReasons;
use \OpenAPI\OpenAPI\Models\Shared\CreativeFilteringReasonsReasons;
use \OpenAPI\OpenAPI\Models\Shared\CreativeNativeAd;
use \OpenAPI\OpenAPI\Models\Shared\CreativeNativeAdAppIcon;
use \OpenAPI\OpenAPI\Models\Shared\CreativeNativeAdImage;
use \OpenAPI\OpenAPI\Models\Shared\CreativeNativeAdLogo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerCreativesInsertRequest();
    $request->creative = new Creative();
    $request->creative->htmlSnippet = 'dolore';
    $request->creative->accountId = 480894;
    $request->creative->adTechnologyProviders = new CreativeAdTechnologyProviders();
    $request->creative->adTechnologyProviders->detectedProviderIds = [
        'harum',
    ];
    $request->creative->adTechnologyProviders->hasUnidentifiedProvider = false;
    $request->creative->advertiserId = [
        'accusamus',
        'commodi',
    ];
    $request->creative->advertiserName = 'repudiandae';
    $request->creative->agencyId = 'quae';
    $request->creative->apiUploadTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-23T05:56:38.936Z');
    $request->creative->attribute = [
        566602,
        865103,
        265389,
    ];
    $request->creative->buyerCreativeId = 'praesentium';
    $request->creative->clickThroughUrl = [
        'voluptates',
        'quasi',
        'repudiandae',
    ];
    $request->creative->corrections = [
        new CreativeCorrections(),
        new CreativeCorrections(),
        new CreativeCorrections(),
    ];
    $request->creative->disapprovalReasons = [
        new CreativeDisapprovalReasons(),
    ];
    $request->creative->filteringReasons = new CreativeFilteringReasons();
    $request->creative->filteringReasons->date = 'itaque';
    $request->creative->filteringReasons->reasons = [
        new CreativeFilteringReasonsReasons(),
        new CreativeFilteringReasonsReasons(),
    ];
    $request->creative->height = 318569;
    $request->creative->impressionTrackingUrl = [
        'est',
    ];
    $request->creative->kind = 'quibusdam';
    $request->creative->nativeAd = new CreativeNativeAd();
    $request->creative->nativeAd->advertiser = 'explicabo';
    $request->creative->nativeAd->appIcon = new CreativeNativeAdAppIcon();
    $request->creative->nativeAd->appIcon->height = 647174;
    $request->creative->nativeAd->appIcon->url = 'distinctio';
    $request->creative->nativeAd->appIcon->width = 841386;
    $request->creative->nativeAd->body = 'labore';
    $request->creative->nativeAd->callToAction = 'modi';
    $request->creative->nativeAd->clickTrackingUrl = 'qui';
    $request->creative->nativeAd->headline = 'aliquid';
    $request->creative->nativeAd->image = new CreativeNativeAdImage();
    $request->creative->nativeAd->image->height = 586513;
    $request->creative->nativeAd->image->url = 'quos';
    $request->creative->nativeAd->image->width = 20107;
    $request->creative->nativeAd->impressionTrackingUrl = [
        'assumenda',
    ];
    $request->creative->nativeAd->logo = new CreativeNativeAdLogo();
    $request->creative->nativeAd->logo->height = 369808;
    $request->creative->nativeAd->logo->url = 'alias';
    $request->creative->nativeAd->logo->width = 146441;
    $request->creative->nativeAd->price = 'dolorum';
    $request->creative->nativeAd->starRating = 5696.18;
    $request->creative->productCategories = [
        703737,
        735194,
    ];
    $request->creative->restrictedCategories = [
        962189,
        433288,
    ];
    $request->creative->sensitiveCategories = [
        756107,
    ];
    $request->creative->status = 'sint';
    $request->creative->vendorType = [
        592042,
        896039,
    ];
    $request->creative->version = 572252;
    $request->creative->videoURL = 'officia';
    $request->creative->width = 223081;
    $request->alt = AltEnum::JSON;
    $request->fields = 'debitis';
    $request->key = 'a';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->userIp = 'in';

    $requestSecurity = new AdexchangebuyerCreativesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creatives->adexchangebuyerCreativesInsert($request, $requestSecurity);

    if ($response->creative !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerCreativesList

Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesListStatusFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerCreativesListRequest();
    $request->accountId = [
        978571,
        699479,
        116202,
        297437,
    ];
    $request->alt = AltEnum::JSON;
    $request->buyerCreativeId = [
        'facere',
        'ea',
        'aliquid',
        'laborum',
    ];
    $request->fields = 'accusamus';
    $request->key = 'non';
    $request->maxResults = 581273;
    $request->oauthToken = 'enim';
    $request->pageToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->statusFilter = AdexchangebuyerCreativesListStatusFilterEnum::NOT_CHECKED;
    $request->userIp = 'provident';

    $requestSecurity = new AdexchangebuyerCreativesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creatives->adexchangebuyerCreativesList($request, $requestSecurity);

    if ($response->creativesList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
