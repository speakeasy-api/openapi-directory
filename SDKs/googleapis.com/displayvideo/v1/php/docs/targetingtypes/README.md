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
    $request->accessToken = 'magni';
    $request->advertiserId = 'nihil';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'animi';
    $request->fields = 'commodi';
    $request->key = 'alias';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->targetingOptionId = 'dolore';
    $request->targetingType = DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum::TARGETING_TYPE_EXCHANGE;
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'iste';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eligendi';
    $request->advertiserId = 'placeat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'unde';
    $request->filter = 'illo';
    $request->key = 'nihil';
    $request->oauthToken = 'inventore';
    $request->orderBy = 'libero';
    $request->pageSize = 371287;
    $request->pageToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->targetingType = DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum::TARGETING_TYPE_DAY_AND_TIME;
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'facere';

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
    $request->searchTargetingOptionsRequest->advertiserId = 'beatae';
    $request->searchTargetingOptionsRequest->businessChainSearchTerms = new BusinessChainSearchTerms();
    $request->searchTargetingOptionsRequest->businessChainSearchTerms->businessChainQuery = 'cumque';
    $request->searchTargetingOptionsRequest->businessChainSearchTerms->regionQuery = 'delectus';
    $request->searchTargetingOptionsRequest->geoRegionSearchTerms = new GeoRegionSearchTerms();
    $request->searchTargetingOptionsRequest->geoRegionSearchTerms->geoRegionQuery = 'labore';
    $request->searchTargetingOptionsRequest->pageSize = 712640;
    $request->searchTargetingOptionsRequest->pageToken = 'corrupti';
    $request->searchTargetingOptionsRequest->poiSearchTerms = new PoiSearchTerms();
    $request->searchTargetingOptionsRequest->poiSearchTerms->poiQuery = 'rem';
    $request->accessToken = 'atque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'pariatur';
    $request->key = 'sapiente';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->targetingType = DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum::TARGETING_TYPE_EXCHANGE;
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'porro';

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
