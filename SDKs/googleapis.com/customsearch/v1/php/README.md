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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [cse](docs/cse/README.md)

* [searchCseList](docs/cse/README.md#searchcselist) - Returns metadata about the search performed, metadata about the engine used for the search, and the search results.
* [searchCseSiterestrictList](docs/cse/README.md#searchcsesiterestrictlist) - Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
