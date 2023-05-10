# directorySites

### Available Operations

* [dfareportingDirectorySitesGet](#dfareportingdirectorysitesget) - Gets one directory site by ID.
* [dfareportingDirectorySitesInsert](#dfareportingdirectorysitesinsert) - Inserts a new directory site.
* [dfareportingDirectorySitesList](#dfareportingdirectorysiteslist) - Retrieves a list of directory sites, possibly filtered. This method supports paging.

## dfareportingDirectorySitesGet

Gets one directory site by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDirectorySitesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDirectorySitesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingDirectorySitesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'dolore';
    $request->id = '0d6a1831-c87a-4df5-96fd-f1ad837ae80c';
    $request->key = 'vitae';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->profileId = 'architecto';
    $request->quotaUser = 'sint';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new DfareportingDirectorySitesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->directorySites->dfareportingDirectorySitesGet($request, $requestSecurity);

    if ($response->directorySite !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingDirectorySitesInsert

Inserts a new directory site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDirectorySitesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DirectorySite;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DirectorySiteInpageTagFormatsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DirectorySiteInterstitialTagFormatsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DirectorySiteSettings;
use \OpenAPI\OpenAPI\Models\Shared\DfpSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDirectorySitesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingDirectorySitesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->directorySite = new DirectorySite();
    $request->directorySite->id = 'tempore';
    $request->directorySite->idDimensionValue = new DimensionValue();
    $request->directorySite->idDimensionValue->dimensionName = 'officia';
    $request->directorySite->idDimensionValue->etag = 'iste';
    $request->directorySite->idDimensionValue->id = '98678fa3-f696-4991-af38-8ce03614448c';
    $request->directorySite->idDimensionValue->kind = 'voluptate';
    $request->directorySite->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->directorySite->idDimensionValue->value = 'reprehenderit';
    $request->directorySite->inpageTagFormats = [
        DirectorySiteInpageTagFormatsEnum::INTERNAL_REDIRECT_INPAGE,
        DirectorySiteInpageTagFormatsEnum::STANDARD,
    ];
    $request->directorySite->interstitialTagFormats = [
        DirectorySiteInterstitialTagFormatsEnum::JAVASCRIPT_INTERSTITIAL,
        DirectorySiteInterstitialTagFormatsEnum::IFRAME_JAVASCRIPT_INTERSTITIAL,
        DirectorySiteInterstitialTagFormatsEnum::JAVASCRIPT_INTERSTITIAL,
        DirectorySiteInterstitialTagFormatsEnum::INTERNAL_REDIRECT_INTERSTITIAL,
    ];
    $request->directorySite->kind = 'ipsum';
    $request->directorySite->name = 'Michelle Cremin';
    $request->directorySite->settings = new DirectorySiteSettings();
    $request->directorySite->settings->activeViewOptOut = false;
    $request->directorySite->settings->dfpSettings = new DfpSettings();
    $request->directorySite->settings->dfpSettings->dfpNetworkCode = 'a';
    $request->directorySite->settings->dfpSettings->dfpNetworkName = 'itaque';
    $request->directorySite->settings->dfpSettings->programmaticPlacementAccepted = false;
    $request->directorySite->settings->dfpSettings->pubPaidPlacementAccepted = false;
    $request->directorySite->settings->dfpSettings->publisherPortalOnly = false;
    $request->directorySite->settings->instreamVideoPlacementAccepted = false;
    $request->directorySite->settings->interstitialPlacementAccepted = false;
    $request->directorySite->url = 'eveniet';
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'adipisci';
    $request->fields = 'aliquam';
    $request->key = 'illo';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->profileId = 'sed';
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new DfareportingDirectorySitesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->directorySites->dfareportingDirectorySitesInsert($request, $requestSecurity);

    if ($response->directorySite !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingDirectorySitesList

Retrieves a list of directory sites, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDirectorySitesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDirectorySitesListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDirectorySitesListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDirectorySitesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingDirectorySitesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->acceptsInStreamVideoPlacements = false;
    $request->acceptsInterstitialPlacements = false;
    $request->acceptsPublisherPaidPlacements = false;
    $request->accessToken = 'explicabo';
    $request->active = false;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->dfpNetworkCode = 'delectus';
    $request->fields = 'incidunt';
    $request->ids = [
        'sunt',
        'ullam',
        'quam',
        'illum',
    ];
    $request->key = 'voluptates';
    $request->maxResults = 641006;
    $request->oauthToken = 'est';
    $request->pageToken = 'in';
    $request->prettyPrint = false;
    $request->profileId = 'illo';
    $request->quotaUser = 'voluptate';
    $request->searchString = 'consequatur';
    $request->sortField = DfareportingDirectorySitesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingDirectorySitesListSortOrderEnum::ASCENDING;
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new DfareportingDirectorySitesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->directorySites->dfareportingDirectorySitesList($request, $requestSecurity);

    if ($response->directorySitesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
