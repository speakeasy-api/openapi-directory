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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'sed';
    $request->id = '53b66845-1c6c-46e2-85e1-6deab3fec957';
    $request->key = 'blanditiis';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->profileId = 'voluptas';
    $request->quotaUser = 'numquam';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'quos';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->landingPage = new LandingPage();
    $request->landingPage->advertiserId = 'aspernatur';
    $request->landingPage->archived = false;
    $request->landingPage->deepLinks = [
        new DeepLink(),
        new DeepLink(),
    ];
    $request->landingPage->id = 'nesciunt';
    $request->landingPage->kind = 'fuga';
    $request->landingPage->name = 'Randall Boyle';
    $request->landingPage->url = 'dicta';
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consectetur';
    $request->fields = 'aperiam';
    $request->key = 'cupiditate';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->profileId = 'soluta';
    $request->quotaUser = 'alias';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'eos';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iste';
    $request->advertiserIds = [
        'inventore',
    ];
    $request->alt = AltEnum::PROTO;
    $request->archived = false;
    $request->callback = 'accusamus';
    $request->campaignIds = [
        'distinctio',
        'omnis',
        'delectus',
        'minima',
    ];
    $request->fields = 'praesentium';
    $request->ids = [
        'magnam',
        'temporibus',
        'quos',
        'commodi',
    ];
    $request->key = 'itaque';
    $request->maxResults = 415608;
    $request->oauthToken = 'totam';
    $request->pageToken = 'earum';
    $request->prettyPrint = false;
    $request->profileId = 'modi';
    $request->quotaUser = 'nam';
    $request->searchString = 'vero';
    $request->sortField = DfareportingAdvertiserLandingPagesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingAdvertiserLandingPagesListSortOrderEnum::ASCENDING;
    $request->subaccountId = 'vel';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'quasi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->landingPage = new LandingPage();
    $request->landingPage->advertiserId = 'maiores';
    $request->landingPage->archived = false;
    $request->landingPage->deepLinks = [
        new DeepLink(),
        new DeepLink(),
    ];
    $request->landingPage->id = 'sint';
    $request->landingPage->kind = 'nulla';
    $request->landingPage->name = 'Claude Hickle';
    $request->landingPage->url = 'quis';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'impedit';
    $request->fields = 'hic';
    $request->id = 'ef66ef1c-aa33-483c-abeb-477373c8d72f';
    $request->key = 'vel';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->profileId = 'quibusdam';
    $request->quotaUser = 'inventore';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'libero';

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
    $request->landingPage->advertiserId = 'voluptatibus';
    $request->landingPage->archived = false;
    $request->landingPage->deepLinks = [
        new DeepLink(),
    ];
    $request->landingPage->id = 'porro';
    $request->landingPage->kind = 'aliquam';
    $request->landingPage->name = 'Martha Bashirian';
    $request->landingPage->url = 'beatae';
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eum';
    $request->fields = 'velit';
    $request->key = 'ut';
    $request->oauthToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->profileId = 'earum';
    $request->quotaUser = 'dicta';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'voluptatibus';

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
