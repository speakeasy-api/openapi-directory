# pages

### Available Operations

* [factchecktoolsPagesCreate](#factchecktoolspagescreate) - Create `ClaimReview` markup on a page.
* [factchecktoolsPagesDelete](#factchecktoolspagesdelete) - Delete all `ClaimReview` markup on a page.
* [factchecktoolsPagesGet](#factchecktoolspagesget) - Get all `ClaimReview` markup on a page.
* [factchecktoolsPagesList](#factchecktoolspageslist) - List the `ClaimReview` markup pages for a specific URL or for an organization.
* [factchecktoolsPagesUpdate](#factchecktoolspagesupdate) - Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.

## factchecktoolsPagesCreate

Create `ClaimReview` markup on a page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FactchecktoolsPagesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FactchecktoolsPagesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FactchecktoolsPagesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage();
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage->claimReviewAuthor = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor();
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage->claimReviewAuthor->imageUrl = 'sapiente';
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage->claimReviewAuthor->name = 'Fred Strosin';
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage->claimReviewMarkups = [
        new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup(),
        new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup(),
    ];
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage->name = 'Forrest Koepp';
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage->pageUrl = 'dolorum';
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage->publishDate = 'dicta';
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage->versionId = 'nam';
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'deleniti';
    $request->key = 'hic';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new FactchecktoolsPagesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pages->factchecktoolsPagesCreate($request, $requestSecurity);

    if ($response->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## factchecktoolsPagesDelete

Delete all `ClaimReview` markup on a page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FactchecktoolsPagesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FactchecktoolsPagesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FactchecktoolsPagesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'cum';
    $request->key = 'esse';
    $request->name = 'Mrs. Miriam Collier';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new FactchecktoolsPagesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pages->factchecktoolsPagesDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## factchecktoolsPagesGet

Get all `ClaimReview` markup on a page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FactchecktoolsPagesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FactchecktoolsPagesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FactchecktoolsPagesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->fields = 'in';
    $request->key = 'corporis';
    $request->name = 'Brad Turcotte Jr.';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new FactchecktoolsPagesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pages->factchecktoolsPagesGet($request, $requestSecurity);

    if ($response->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## factchecktoolsPagesList

List the `ClaimReview` markup pages for a specific URL or for an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FactchecktoolsPagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FactchecktoolsPagesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FactchecktoolsPagesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'nobis';
    $request->key = 'enim';
    $request->oauthToken = 'omnis';
    $request->offset = 363711;
    $request->organization = 'minima';
    $request->pageSize = 570197;
    $request->pageToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'doloribus';
    $request->url = 'sapiente';

    $requestSecurity = new FactchecktoolsPagesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pages->factchecktoolsPagesList($request, $requestSecurity);

    if ($response->googleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## factchecktoolsPagesUpdate

Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FactchecktoolsPagesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FactchecktoolsPagesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FactchecktoolsPagesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage();
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage->claimReviewAuthor = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor();
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage->claimReviewAuthor->imageUrl = 'mollitia';
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage->claimReviewAuthor->name = 'Cecilia Crooks';
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage->claimReviewMarkups = [
        new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup(),
        new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup(),
        new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup(),
    ];
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage->name = 'Lucy Konopelski';
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage->pageUrl = 'error';
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage->publishDate = 'quia';
    $request->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage->versionId = 'quis';
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'animi';
    $request->fields = 'enim';
    $request->key = 'odit';
    $request->name = 'Jimmy Wiegand';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'error';

    $requestSecurity = new FactchecktoolsPagesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pages->factchecktoolsPagesUpdate($request, $requestSecurity);

    if ($response->googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
