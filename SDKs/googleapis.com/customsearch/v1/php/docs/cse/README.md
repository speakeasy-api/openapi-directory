# cse

### Available Operations

* [searchCseList](#searchcselist) - Returns metadata about the search performed, metadata about the engine used for the search, and the search results.
* [searchCseSiterestrictList](#searchcsesiterestrictlist) - Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.

## searchCseList

Returns metadata about the search performed, metadata about the engine used for the search, and the search results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchCseListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCseListImgColorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCseListImgDominantColorEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCseListImgSizeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCseListImgTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCseListSafeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCseListSearchTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCseListSiteSearchFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCseListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->c2coff = 'esse';
    $request->callback = 'totam';
    $request->cr = 'porro';
    $request->cx = 'dolorum';
    $request->dateRestrict = 'dicta';
    $request->exactTerms = 'nam';
    $request->excludeTerms = 'officia';
    $request->fields = 'occaecati';
    $request->fileType = 'fugit';
    $request->filter = 'deleniti';
    $request->gl = 'hic';
    $request->googlehost = 'optio';
    $request->highRange = 'totam';
    $request->hl = 'beatae';
    $request->hq = 'commodi';
    $request->imgColorType = SearchCseListImgColorTypeEnum::GRAY;
    $request->imgDominantColor = SearchCseListImgDominantColorEnum::BROWN;
    $request->imgSize = SearchCseListImgSizeEnum::HUGE;
    $request->imgType = SearchCseListImgTypeEnum::PHOTO;
    $request->key = 'cum';
    $request->linkSite = 'esse';
    $request->lowRange = 'ipsum';
    $request->lr = 'excepturi';
    $request->num = 135218;
    $request->oauthToken = 'perferendis';
    $request->orTerms = 'ad';
    $request->prettyPrint = false;
    $request->q = 'natus';
    $request->quotaUser = 'sed';
    $request->relatedSite = 'iste';
    $request->rights = 'dolor';
    $request->safe = SearchCseListSafeEnum::MEDIUM;
    $request->searchType = SearchCseListSearchTypeEnum::SEARCH_TYPE_UNDEFINED;
    $request->siteSearch = 'hic';
    $request->siteSearchFilter = SearchCseListSiteSearchFilterEnum::I;
    $request->sort = 'fuga';
    $request->start = 449950;
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'iste';

    $response = $sdk->cse->searchCseList($request);

    if ($response->search !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchCseSiterestrictList

Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchCseSiterestrictListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCseSiterestrictListImgColorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCseSiterestrictListImgDominantColorEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCseSiterestrictListImgSizeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCseSiterestrictListImgTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCseSiterestrictListSafeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCseSiterestrictListSearchTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCseSiterestrictListSiteSearchFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCseSiterestrictListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->c2coff = 'architecto';
    $request->callback = 'ipsa';
    $request->cr = 'reiciendis';
    $request->cx = 'est';
    $request->dateRestrict = 'mollitia';
    $request->exactTerms = 'laborum';
    $request->excludeTerms = 'dolores';
    $request->fields = 'dolorem';
    $request->fileType = 'corporis';
    $request->filter = 'explicabo';
    $request->gl = 'nobis';
    $request->googlehost = 'enim';
    $request->highRange = 'omnis';
    $request->hl = 'nemo';
    $request->hq = 'minima';
    $request->imgColorType = SearchCseSiterestrictListImgColorTypeEnum::GRAY;
    $request->imgDominantColor = SearchCseSiterestrictListImgDominantColorEnum::IMG_DOMINANT_COLOR_UNDEFINED;
    $request->imgSize = SearchCseSiterestrictListImgSizeEnum::LARGE;
    $request->imgType = SearchCseSiterestrictListImgTypeEnum::STOCK;
    $request->key = 'doloribus';
    $request->linkSite = 'sapiente';
    $request->lowRange = 'architecto';
    $request->lr = 'mollitia';
    $request->num = 208876;
    $request->oauthToken = 'culpa';
    $request->orTerms = 'consequuntur';
    $request->prettyPrint = false;
    $request->q = 'repellat';
    $request->quotaUser = 'mollitia';
    $request->relatedSite = 'occaecati';
    $request->rights = 'numquam';
    $request->safe = SearchCseSiterestrictListSafeEnum::HIGH;
    $request->searchType = SearchCseSiterestrictListSearchTypeEnum::SEARCH_TYPE_UNDEFINED;
    $request->siteSearch = 'molestiae';
    $request->siteSearchFilter = SearchCseSiterestrictListSiteSearchFilterEnum::SITE_SEARCH_FILTER_UNDEFINED;
    $request->sort = 'error';
    $request->start = 158969;
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'vitae';

    $response = $sdk->cse->searchCseSiterestrictList($request);

    if ($response->search !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
