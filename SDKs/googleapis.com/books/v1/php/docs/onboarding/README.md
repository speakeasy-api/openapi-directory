# onboarding

### Available Operations

* [booksOnboardingListCategories](#booksonboardinglistcategories) - List categories for onboarding experience.
* [booksOnboardingListCategoryVolumes](#booksonboardinglistcategoryvolumes) - List available volumes under categories for onboarding experience.

## booksOnboardingListCategories

List categories for onboarding experience.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksOnboardingListCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksOnboardingListCategoriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksOnboardingListCategoriesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'fuga';
    $request->key = 'mollitia';
    $request->locale = 'incidunt';
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new BooksOnboardingListCategoriesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->onboarding->booksOnboardingListCategories($request, $requestSecurity);

    if ($response->category !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksOnboardingListCategoryVolumes

List available volumes under categories for onboarding experience.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksOnboardingListCategoryVolumesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksOnboardingListCategoryVolumesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksOnboardingListCategoryVolumesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ratione';
    $request->categoryId = [
        'saepe',
    ];
    $request->fields = 'occaecati';
    $request->key = 'atque';
    $request->locale = 'et';
    $request->maxAllowedMaturityRating = BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum::MATURE;
    $request->oauthToken = 'eveniet';
    $request->pageSize = 882042;
    $request->pageToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new BooksOnboardingListCategoryVolumesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->onboarding->booksOnboardingListCategoryVolumes($request, $requestSecurity);

    if ($response->volume2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
