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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'quod';
    $request->id = '20cb67fc-4b42-45e9-9e62-34c9f7b79dfe';
    $request->key = 'expedita';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->profileId = 'esse';
    $request->quotaUser = 'harum';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'quod';

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
    $request->directorySite->id = 'totam';
    $request->directorySite->idDimensionValue = new DimensionValue();
    $request->directorySite->idDimensionValue->dimensionName = 'vero';
    $request->directorySite->idDimensionValue->etag = 'dolore';
    $request->directorySite->idDimensionValue->id = 'baf91e50-6ef8-490a-94b4-75f16f56d385';
    $request->directorySite->idDimensionValue->kind = 'fuga';
    $request->directorySite->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->directorySite->idDimensionValue->value = 'maxime';
    $request->directorySite->inpageTagFormats = [
        DirectorySiteInpageTagFormatsEnum::INTERNAL_REDIRECT_INPAGE,
        DirectorySiteInpageTagFormatsEnum::JAVASCRIPT_INPAGE,
    ];
    $request->directorySite->interstitialTagFormats = [
        DirectorySiteInterstitialTagFormatsEnum::IFRAME_JAVASCRIPT_INTERSTITIAL,
        DirectorySiteInterstitialTagFormatsEnum::IFRAME_JAVASCRIPT_INTERSTITIAL,
    ];
    $request->directorySite->kind = 'rerum';
    $request->directorySite->name = 'Terrence Treutel';
    $request->directorySite->settings = new DirectorySiteSettings();
    $request->directorySite->settings->activeViewOptOut = false;
    $request->directorySite->settings->dfpSettings = new DfpSettings();
    $request->directorySite->settings->dfpSettings->dfpNetworkCode = 'optio';
    $request->directorySite->settings->dfpSettings->dfpNetworkName = 'eveniet';
    $request->directorySite->settings->dfpSettings->programmaticPlacementAccepted = false;
    $request->directorySite->settings->dfpSettings->pubPaidPlacementAccepted = false;
    $request->directorySite->settings->dfpSettings->publisherPortalOnly = false;
    $request->directorySite->settings->instreamVideoPlacementAccepted = false;
    $request->directorySite->settings->interstitialPlacementAccepted = false;
    $request->directorySite->url = 'fugiat';
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'natus';
    $request->fields = 'sapiente';
    $request->key = 'repellendus';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->profileId = 'molestias';
    $request->quotaUser = 'dolore';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'accusantium';

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
    $request->accessToken = 'nisi';
    $request->active = false;
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempore';
    $request->dfpNetworkCode = 'expedita';
    $request->fields = 'hic';
    $request->ids = [
        'vitae',
        'iusto',
        'atque',
    ];
    $request->key = 'velit';
    $request->maxResults = 474774;
    $request->oauthToken = 'nam';
    $request->pageToken = 'aperiam';
    $request->prettyPrint = false;
    $request->profileId = 'vitae';
    $request->quotaUser = 'mollitia';
    $request->searchString = 'asperiores';
    $request->sortField = DfareportingDirectorySitesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingDirectorySitesListSortOrderEnum::DESCENDING;
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'deleniti';

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
