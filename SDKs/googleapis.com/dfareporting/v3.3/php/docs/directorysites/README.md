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
    $request->accessToken = 'libero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'eos';
    $request->id = 'c8dbda6a-61ef-4a21-9825-8fd0a9eba47f';
    $request->key = 'quam';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->profileId = 'dolorem';
    $request->quotaUser = 'voluptates';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'perferendis';

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
    $request->directorySite->active = false;
    $request->directorySite->id = 'excepturi';
    $request->directorySite->idDimensionValue = new DimensionValue();
    $request->directorySite->idDimensionValue->dimensionName = 'aliquid';
    $request->directorySite->idDimensionValue->etag = 'dolore';
    $request->directorySite->idDimensionValue->id = '0d6a1831-c87a-4df5-96fd-f1ad837ae80c';
    $request->directorySite->idDimensionValue->kind = 'vitae';
    $request->directorySite->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->directorySite->idDimensionValue->value = 'architecto';
    $request->directorySite->inpageTagFormats = [
        DirectorySiteInpageTagFormatsEnum::JAVASCRIPT_INPAGE,
        DirectorySiteInpageTagFormatsEnum::INTERNAL_REDIRECT_INPAGE,
        DirectorySiteInpageTagFormatsEnum::IFRAME_JAVASCRIPT_INPAGE,
    ];
    $request->directorySite->interstitialTagFormats = [
        DirectorySiteInterstitialTagFormatsEnum::INTERNAL_REDIRECT_INTERSTITIAL,
        DirectorySiteInterstitialTagFormatsEnum::INTERNAL_REDIRECT_INTERSTITIAL,
        DirectorySiteInterstitialTagFormatsEnum::INTERNAL_REDIRECT_INTERSTITIAL,
    ];
    $request->directorySite->kind = 'quas';
    $request->directorySite->name = 'Dora Lemke';
    $request->directorySite->settings = new DirectorySiteSettings();
    $request->directorySite->settings->activeViewOptOut = false;
    $request->directorySite->settings->dfpSettings = new DfpSettings();
    $request->directorySite->settings->dfpSettings->dfpNetworkCode = 'dolor';
    $request->directorySite->settings->dfpSettings->dfpNetworkName = 'hic';
    $request->directorySite->settings->dfpSettings->programmaticPlacementAccepted = false;
    $request->directorySite->settings->dfpSettings->pubPaidPlacementAccepted = false;
    $request->directorySite->settings->dfpSettings->publisherPortalOnly = false;
    $request->directorySite->settings->instreamVideoPlacementAccepted = false;
    $request->directorySite->settings->interstitialPlacementAccepted = false;
    $request->directorySite->url = 'iure';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'cupiditate';
    $request->key = 'ab';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->profileId = 'a';
    $request->quotaUser = 'dolor';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'molestias';

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
    $request->accessToken = 'repudiandae';
    $request->active = false;
    $request->alt = AltEnum::JSON;
    $request->callback = 'consectetur';
    $request->dfpNetworkCode = 'autem';
    $request->fields = 'vitae';
    $request->ids = [
        'incidunt',
        'modi',
    ];
    $request->key = 'quos';
    $request->maxResults = 791454;
    $request->oauthToken = 'voluptate';
    $request->pageToken = 'error';
    $request->prettyPrint = false;
    $request->profileId = 'reprehenderit';
    $request->quotaUser = 'reprehenderit';
    $request->searchString = 'animi';
    $request->sortField = DfareportingDirectorySitesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingDirectorySitesListSortOrderEnum::DESCENDING;
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'qui';

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
