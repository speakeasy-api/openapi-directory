# advertiserLandingPages

### Available Operations

* [dfareportingAdvertiserLandingPagesGet](#dfareportingadvertiserlandingpagesget) - Gets one landing page by ID.
* [dfareportingAdvertiserLandingPagesInsert](#dfareportingadvertiserlandingpagesinsert) - Inserts a new landing page.
* [dfareportingAdvertiserLandingPagesList](#dfareportingadvertiserlandingpageslist) - Retrieves a list of landing pages.
* [dfareportingAdvertiserLandingPagesPatch](#dfareportingadvertiserlandingpagespatch) - Updates an existing advertiser landing page. This method supports patch semantics.
* [dfareportingAdvertiserLandingPagesUpdate](#dfareportingadvertiserlandingpagesupdate) - Updates an existing landing page.

## dfareportingAdvertiserLandingPagesGet

Gets one landing page by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserLandingPagesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserLandingPagesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertiserLandingPagesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'consequuntur';
    $request->id = '05e16dea-b3fe-4c95-b8a6-4584273a8418';
    $request->key = 'fugiat';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->profileId = 'nisi';
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'aperiam';

    $requestSecurity = new DfareportingAdvertiserLandingPagesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertiserLandingPages->dfareportingAdvertiserLandingPagesGet($request, $requestSecurity);

    if ($response->landingPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdvertiserLandingPagesInsert

Inserts a new landing page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserLandingPagesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LandingPage;
use \OpenAPI\OpenAPI\Models\Shared\DeepLink;
use \OpenAPI\OpenAPI\Models\Shared\MobileApp;
use \OpenAPI\OpenAPI\Models\Shared\MobileAppDirectoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserLandingPagesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertiserLandingPagesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->landingPage = new LandingPage();
    $request->landingPage->advertiserId = 'reiciendis';
    $request->landingPage->archived = false;
    $request->landingPage->deepLinks = [
        new DeepLink(),
        new DeepLink(),
        new DeepLink(),
    ];
    $request->landingPage->id = 'alias';
    $request->landingPage->kind = 'omnis';
    $request->landingPage->name = 'Kristina Moore MD';
    $request->landingPage->url = 'accusamus';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->fields = 'delectus';
    $request->key = 'minima';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->profileId = 'maxime';
    $request->quotaUser = 'magnam';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new DfareportingAdvertiserLandingPagesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertiserLandingPages->dfareportingAdvertiserLandingPagesInsert($request, $requestSecurity);

    if ($response->landingPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdvertiserLandingPagesList

Retrieves a list of landing pages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserLandingPagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserLandingPagesListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserLandingPagesListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserLandingPagesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertiserLandingPagesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'itaque';
    $request->advertiserIds = [
        'totam',
        'earum',
    ];
    $request->alt = AltEnum::JSON;
    $request->archived = false;
    $request->callback = 'nam';
    $request->campaignIds = [
        'voluptatem',
        'ipsam',
        'vel',
        'alias',
    ];
    $request->fields = 'quasi';
    $request->ids = [
        'maiores',
    ];
    $request->key = 'enim';
    $request->maxResults = 575213;
    $request->oauthToken = 'nulla';
    $request->pageToken = 'deserunt';
    $request->prettyPrint = false;
    $request->profileId = 'esse';
    $request->quotaUser = 'nemo';
    $request->searchString = 'reprehenderit';
    $request->sortField = DfareportingAdvertiserLandingPagesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingAdvertiserLandingPagesListSortOrderEnum::ASCENDING;
    $request->subaccountId = 'sint';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new DfareportingAdvertiserLandingPagesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertiserLandingPages->dfareportingAdvertiserLandingPagesList($request, $requestSecurity);

    if ($response->advertiserLandingPagesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdvertiserLandingPagesPatch

Updates an existing advertiser landing page. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserLandingPagesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LandingPage;
use \OpenAPI\OpenAPI\Models\Shared\DeepLink;
use \OpenAPI\OpenAPI\Models\Shared\MobileApp;
use \OpenAPI\OpenAPI\Models\Shared\MobileAppDirectoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserLandingPagesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertiserLandingPagesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->landingPage = new LandingPage();
    $request->landingPage->advertiserId = 'necessitatibus';
    $request->landingPage->archived = false;
    $request->landingPage->deepLinks = [
        new DeepLink(),
        new DeepLink(),
        new DeepLink(),
        new DeepLink(),
    ];
    $request->landingPage->id = 'ex';
    $request->landingPage->kind = 'voluptas';
    $request->landingPage->name = 'Van Bergnaum';
    $request->landingPage->url = 'laborum';
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'atque';
    $request->fields = 'ipsum';
    $request->id = 'c2beb477-373c-48d7-af64-d1db1f2c4310';
    $request->key = 'vel';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->profileId = 'beatae';
    $request->quotaUser = 'vero';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new DfareportingAdvertiserLandingPagesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertiserLandingPages->dfareportingAdvertiserLandingPagesPatch($request, $requestSecurity);

    if ($response->landingPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdvertiserLandingPagesUpdate

Updates an existing landing page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserLandingPagesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LandingPage;
use \OpenAPI\OpenAPI\Models\Shared\DeepLink;
use \OpenAPI\OpenAPI\Models\Shared\MobileApp;
use \OpenAPI\OpenAPI\Models\Shared\MobileAppDirectoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserLandingPagesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertiserLandingPagesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->landingPage = new LandingPage();
    $request->landingPage->advertiserId = 'ut';
    $request->landingPage->archived = false;
    $request->landingPage->deepLinks = [
        new DeepLink(),
        new DeepLink(),
        new DeepLink(),
    ];
    $request->landingPage->id = 'earum';
    $request->landingPage->kind = 'dicta';
    $request->landingPage->name = 'Courtney Monahan III';
    $request->landingPage->url = 'itaque';
    $request->accessToken = 'velit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'non';
    $request->fields = 'dolor';
    $request->key = 'iusto';
    $request->oauthToken = 'sit';
    $request->prettyPrint = false;
    $request->profileId = 'doloremque';
    $request->quotaUser = 'consequatur';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new DfareportingAdvertiserLandingPagesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertiserLandingPages->dfareportingAdvertiserLandingPagesUpdate($request, $requestSecurity);

    if ($response->landingPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
