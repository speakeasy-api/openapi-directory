# creatives

### Available Operations

* [adexchangebuyerCreativesAddDeal](#adexchangebuyercreativesadddeal) - Add a deal id association for the creative.
* [adexchangebuyerCreativesGet](#adexchangebuyercreativesget) - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* [adexchangebuyerCreativesInsert](#adexchangebuyercreativesinsert) - Submit a new creative.
* [adexchangebuyerCreativesList](#adexchangebuyercreativeslist) - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
* [adexchangebuyerCreativesListDeals](#adexchangebuyercreativeslistdeals) - Lists the external deal ids associated with the creative.
* [adexchangebuyerCreativesRemoveDeal](#adexchangebuyercreativesremovedeal) - Remove a deal id associated with the creative.

## adexchangebuyerCreativesAddDeal

Add a deal id association for the creative.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesAddDealRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesAddDealSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerCreativesAddDealRequest();
    $request->accountId = 19987;
    $request->alt = AltEnum::JSON;
    $request->buyerCreativeId = 'doloremque';
    $request->dealId = 'reprehenderit';
    $request->fields = 'ut';
    $request->key = 'maiores';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->userIp = 'dolore';

    $requestSecurity = new AdexchangebuyerCreativesAddDealSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creatives->adexchangebuyerCreativesAddDeal($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->accountId = 480894;
    $request->alt = AltEnum::JSON;
    $request->buyerCreativeId = 'dicta';
    $request->fields = 'harum';
    $request->key = 'enim';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->userIp = 'repudiandae';

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
use \OpenAPI\OpenAPI\Models\Shared\CreativeCorrectionsContexts;
use \OpenAPI\OpenAPI\Models\Shared\CreativeFilteringReasons;
use \OpenAPI\OpenAPI\Models\Shared\CreativeFilteringReasonsReasons;
use \OpenAPI\OpenAPI\Models\Shared\CreativeNativeAd;
use \OpenAPI\OpenAPI\Models\Shared\CreativeNativeAdAppIcon;
use \OpenAPI\OpenAPI\Models\Shared\CreativeNativeAdImage;
use \OpenAPI\OpenAPI\Models\Shared\CreativeNativeAdLogo;
use \OpenAPI\OpenAPI\Models\Shared\CreativeServingRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\CreativeServingRestrictionsContexts;
use \OpenAPI\OpenAPI\Models\Shared\CreativeServingRestrictionsDisapprovalReasons;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerCreativesInsertRequest();
    $request->creative = new Creative();
    $request->creative->htmlSnippet = 'quae';
    $request->creative->accountId = 216822;
    $request->creative->adChoicesDestinationUrl = 'quidem';
    $request->creative->adTechnologyProviders = new CreativeAdTechnologyProviders();
    $request->creative->adTechnologyProviders->detectedProviderIds = [
        'excepturi',
        'pariatur',
        'modi',
    ];
    $request->creative->adTechnologyProviders->hasUnidentifiedProvider = false;
    $request->creative->advertiserId = [
        'rem',
        'voluptates',
        'quasi',
    ];
    $request->creative->advertiserName = 'repudiandae';
    $request->creative->agencyId = 'sint';
    $request->creative->apiUploadTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-26T19:21:55.034Z');
    $request->creative->attribute = [
        318569,
        9356,
    ];
    $request->creative->buyerCreativeId = 'est';
    $request->creative->clickThroughUrl = [
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];
    $request->creative->corrections = [
        new CreativeCorrections(),
        new CreativeCorrections(),
    ];
    $request->creative->creativeStatusIdentityType = 'modi';
    $request->creative->dealsStatus = 'qui';
    $request->creative->detectedDomains = [
        'cupiditate',
        'quos',
    ];
    $request->creative->filteringReasons = new CreativeFilteringReasons();
    $request->creative->filteringReasons->date = 'perferendis';
    $request->creative->filteringReasons->reasons = [
        new CreativeFilteringReasonsReasons(),
    ];
    $request->creative->height = 828940;
    $request->creative->impressionTrackingUrl = [
        'alias',
        'fugit',
    ];
    $request->creative->kind = 'dolorum';
    $request->creative->languages = [
        'tempora',
        'facilis',
        'tempore',
    ];
    $request->creative->nativeAd = new CreativeNativeAd();
    $request->creative->nativeAd->advertiser = 'labore';
    $request->creative->nativeAd->appIcon = new CreativeNativeAdAppIcon();
    $request->creative->nativeAd->appIcon->height = 962189;
    $request->creative->nativeAd->appIcon->url = 'eum';
    $request->creative->nativeAd->appIcon->width = 248753;
    $request->creative->nativeAd->body = 'eligendi';
    $request->creative->nativeAd->callToAction = 'sint';
    $request->creative->nativeAd->clickLinkUrl = 'aliquid';
    $request->creative->nativeAd->clickTrackingUrl = 'provident';
    $request->creative->nativeAd->headline = 'necessitatibus';
    $request->creative->nativeAd->image = new CreativeNativeAdImage();
    $request->creative->nativeAd->image->height = 572252;
    $request->creative->nativeAd->image->url = 'officia';
    $request->creative->nativeAd->image->width = 223081;
    $request->creative->nativeAd->impressionTrackingUrl = [
        'a',
        'dolorum',
        'in',
        'in',
    ];
    $request->creative->nativeAd->logo = new CreativeNativeAdLogo();
    $request->creative->nativeAd->logo->height = 846409;
    $request->creative->nativeAd->logo->url = 'maiores';
    $request->creative->nativeAd->logo->width = 699479;
    $request->creative->nativeAd->price = 'dicta';
    $request->creative->nativeAd->starRating = 2974.37;
    $request->creative->nativeAd->videoURL = 'cumque';
    $request->creative->openAuctionStatus = 'facere';
    $request->creative->productCategories = [
        396506,
        675439,
    ];
    $request->creative->restrictedCategories = [
        249796,
        581273,
        313218,
        881736,
    ];
    $request->creative->sensitiveCategories = [
        692532,
        588465,
        725255,
        659669,
    ];
    $request->creative->servingRestrictions = [
        new CreativeServingRestrictions(),
        new CreativeServingRestrictions(),
        new CreativeServingRestrictions(),
    ];
    $request->creative->vendorType = [
        956084,
        230533,
        643990,
    ];
    $request->creative->version = 394869;
    $request->creative->videoURL = 'vel';
    $request->creative->videoVastXML = 'natus';
    $request->creative->width = 606393;
    $request->alt = AltEnum::JSON;
    $request->fields = 'molestiae';
    $request->key = 'perferendis';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->userIp = 'distinctio';

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
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesListDealsStatusFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerCreativesListRequest();
    $request->accountId = [
        287991,
        290077,
        383462,
    ];
    $request->alt = AltEnum::JSON;
    $request->buyerCreativeId = [
        'nobis',
        'eum',
        'vero',
    ];
    $request->dealsStatusFilter = AdexchangebuyerCreativesListDealsStatusFilterEnum::APPROVED;
    $request->fields = 'architecto';
    $request->key = 'magnam';
    $request->maxResults = 92373;
    $request->oauthToken = 'excepturi';
    $request->openAuctionStatusFilter = AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum::CONDITIONALLY_APPROVED;
    $request->pageToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->userIp = 'sint';

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

## adexchangebuyerCreativesListDeals

Lists the external deal ids associated with the creative.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesListDealsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesListDealsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerCreativesListDealsRequest();
    $request->accountId = 33625;
    $request->alt = AltEnum::JSON;
    $request->buyerCreativeId = 'mollitia';
    $request->fields = 'reiciendis';
    $request->key = 'mollitia';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->userIp = 'dolor';

    $requestSecurity = new AdexchangebuyerCreativesListDealsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creatives->adexchangebuyerCreativesListDeals($request, $requestSecurity);

    if ($response->creativeDealIds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerCreativesRemoveDeal

Remove a deal id associated with the creative.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesRemoveDealRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesRemoveDealSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerCreativesRemoveDealRequest();
    $request->accountId = 896547;
    $request->alt = AltEnum::JSON;
    $request->buyerCreativeId = 'odit';
    $request->dealId = 'nemo';
    $request->fields = 'quasi';
    $request->key = 'iure';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->userIp = 'eius';

    $requestSecurity = new AdexchangebuyerCreativesRemoveDealSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creatives->adexchangebuyerCreativesRemoveDeal($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
