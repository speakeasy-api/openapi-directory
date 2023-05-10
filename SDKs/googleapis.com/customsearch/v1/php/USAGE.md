<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->c2coff = 'quibusdam';
    $request->callback = 'unde';
    $request->cr = 'nulla';
    $request->cx = 'corrupti';
    $request->dateRestrict = 'illum';
    $request->exactTerms = 'vel';
    $request->excludeTerms = 'error';
    $request->fields = 'deserunt';
    $request->fileType = 'suscipit';
    $request->filter = 'iure';
    $request->gl = 'magnam';
    $request->googlehost = 'debitis';
    $request->highRange = 'ipsa';
    $request->hl = 'delectus';
    $request->hq = 'tempora';
    $request->imgColorType = SearchCseListImgColorTypeEnum::MONO;
    $request->imgDominantColor = SearchCseListImgDominantColorEnum::ORANGE;
    $request->imgSize = SearchCseListImgSizeEnum::XLARGE;
    $request->imgType = SearchCseListImgTypeEnum::PHOTO;
    $request->key = 'voluptatum';
    $request->linkSite = 'iusto';
    $request->lowRange = 'excepturi';
    $request->lr = 'nisi';
    $request->num = 925597;
    $request->oauthToken = 'temporibus';
    $request->orTerms = 'ab';
    $request->prettyPrint = false;
    $request->q = 'quis';
    $request->quotaUser = 'veritatis';
    $request->relatedSite = 'deserunt';
    $request->rights = 'perferendis';
    $request->safe = SearchCseListSafeEnum::ACTIVE;
    $request->searchType = SearchCseListSearchTypeEnum::IMAGE;
    $request->siteSearch = 'sapiente';
    $request->siteSearchFilter = SearchCseListSiteSearchFilterEnum::I;
    $request->sort = 'odit';
    $request->start = 870013;
    $request->uploadType = 'at';
    $request->uploadProtocol = 'maiores';

    $response = $sdk->cse->searchCseList($request);

    if ($response->search !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->