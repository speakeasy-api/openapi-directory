# targetingTypes

### Available Operations

* [displayvideoTargetingTypesTargetingOptionsGet](#displayvideotargetingtypestargetingoptionsget) - Gets a single targeting option.
* [displayvideoTargetingTypesTargetingOptionsList](#displayvideotargetingtypestargetingoptionslist) - Lists targeting options of a given type.
* [displayvideoTargetingTypesTargetingOptionsSearch](#displayvideotargetingtypestargetingoptionssearch) - Searches for targeting options of a given type based on the given search terms.

## displayvideoTargetingTypesTargetingOptionsGet

Gets a single targeting option.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoTargetingTypesTargetingOptionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoTargetingTypesTargetingOptionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoTargetingTypesTargetingOptionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cum';
    $request->advertiserId = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'eveniet';
    $request->key = 'repudiandae';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->targetingOptionId = 'quas';
    $request->targetingType = DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum::TARGETING_TYPE_SUB_EXCHANGE;
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'eligendi';

    $requestSecurity = new DisplayvideoTargetingTypesTargetingOptionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetingTypes->displayvideoTargetingTypesTargetingOptionsGet($request, $requestSecurity);

    if ($response->targetingOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoTargetingTypesTargetingOptionsList

Lists targeting options of a given type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoTargetingTypesTargetingOptionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoTargetingTypesTargetingOptionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoTargetingTypesTargetingOptionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ex';
    $request->advertiserId = 'beatae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'itaque';
    $request->filter = 'vero';
    $request->key = 'quidem';
    $request->oauthToken = 'illo';
    $request->orderBy = 'quo';
    $request->pageSize = 490966;
    $request->pageToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->targetingType = DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum::TARGETING_TYPE_CONTENT_DURATION;
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new DisplayvideoTargetingTypesTargetingOptionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetingTypes->displayvideoTargetingTypesTargetingOptionsList($request, $requestSecurity);

    if ($response->listTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoTargetingTypesTargetingOptionsSearch

Searches for targeting options of a given type based on the given search terms.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoTargetingTypesTargetingOptionsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BusinessChainSearchTerms;
use \OpenAPI\OpenAPI\Models\Shared\GeoRegionSearchTerms;
use \OpenAPI\OpenAPI\Models\Shared\PoiSearchTerms;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoTargetingTypesTargetingOptionsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoTargetingTypesTargetingOptionsSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->searchTargetingOptionsRequest = new SearchTargetingOptionsRequest();
    $request->searchTargetingOptionsRequest->advertiserId = 'earum';
    $request->searchTargetingOptionsRequest->businessChainSearchTerms = new BusinessChainSearchTerms();
    $request->searchTargetingOptionsRequest->businessChainSearchTerms->businessChainQuery = 'quod';
    $request->searchTargetingOptionsRequest->businessChainSearchTerms->regionQuery = 'nihil';
    $request->searchTargetingOptionsRequest->geoRegionSearchTerms = new GeoRegionSearchTerms();
    $request->searchTargetingOptionsRequest->geoRegionSearchTerms->geoRegionQuery = 'quaerat';
    $request->searchTargetingOptionsRequest->pageSize = 215959;
    $request->searchTargetingOptionsRequest->pageToken = 'ducimus';
    $request->searchTargetingOptionsRequest->poiSearchTerms = new PoiSearchTerms();
    $request->searchTargetingOptionsRequest->poiSearchTerms->poiQuery = 'laudantium';
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odit';
    $request->fields = 'ad';
    $request->key = 'sequi';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->targetingType = DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum::TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION;
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new DisplayvideoTargetingTypesTargetingOptionsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetingTypes->displayvideoTargetingTypesTargetingOptionsSearch($request, $requestSecurity);

    if ($response->searchTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
