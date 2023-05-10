# volumes

### Available Operations

* [booksVolumesAssociatedList](#booksvolumesassociatedlist) - Return a list of associated books.
* [booksVolumesGet](#booksvolumesget) - Gets volume information for a single volume.
* [booksVolumesList](#booksvolumeslist) - Performs a book search.
* [booksVolumesMybooksList](#booksvolumesmybookslist) - Return a list of books in My Library.
* [booksVolumesRecommendedList](#booksvolumesrecommendedlist) - Return a list of recommended books for the current user.
* [booksVolumesRecommendedRate](#booksvolumesrecommendedrate) - Rate a recommended book for the current user.
* [booksVolumesUseruploadedList](#booksvolumesuseruploadedlist) - Return a list of books uploaded by the current user.

## booksVolumesAssociatedList

Return a list of associated books.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesAssociatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesAssociatedListAssociationEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesAssociatedListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksVolumesAssociatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::JSON;
    $request->association = BooksVolumesAssociatedListAssociationEnum::ASSOCIATION_UNDEFINED;
    $request->callback = 'dolor';
    $request->fields = 'occaecati';
    $request->key = 'numquam';
    $request->locale = 'impedit';
    $request->maxAllowedMaturityRating = BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum::MAX_ALLOWED_MATURITY_RATING_UNDEFINED;
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->source = 'dignissimos';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'maiores';
    $request->volumeId = 'natus';

    $requestSecurity = new BooksVolumesAssociatedListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->volumes->booksVolumesAssociatedList($request, $requestSecurity);

    if ($response->volumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksVolumesGet

Gets volume information for a single volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesGetProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksVolumesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'asperiores';
    $request->country = 'Aruba';
    $request->fields = 'ea';
    $request->includeNonComicsSeries = false;
    $request->key = 'quaerat';
    $request->oauthToken = 'consequuntur';
    $request->partner = 'repellendus';
    $request->prettyPrint = false;
    $request->projection = BooksVolumesGetProjectionEnum::FULL;
    $request->quotaUser = 'maxime';
    $request->source = 'dignissimos';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'asperiores';
    $request->userLibraryConsistentRead = false;
    $request->volumeId = 'nemo';

    $requestSecurity = new BooksVolumesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->volumes->booksVolumesGet($request, $requestSecurity);

    if ($response->volume !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksVolumesList

Performs a book search.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesListDownloadEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesListFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesListLibraryRestrictEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesListMaxAllowedMaturityRatingEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesListOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesListPrintTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesListProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksVolumesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->download = BooksVolumesListDownloadEnum::DOWNLOAD_UNDEFINED;
    $request->fields = 'ab';
    $request->filter = BooksVolumesListFilterEnum::EBOOKS;
    $request->key = 'fuga';
    $request->langRestrict = 'id';
    $request->libraryRestrict = BooksVolumesListLibraryRestrictEnum::MY_LIBRARY;
    $request->maxAllowedMaturityRating = BooksVolumesListMaxAllowedMaturityRatingEnum::MAX_ALLOWED_MATURITY_RATING_UNDEFINED;
    $request->maxResults = 633931;
    $request->oauthToken = 'est';
    $request->orderBy = BooksVolumesListOrderByEnum::RELEVANCE;
    $request->partner = 'totam';
    $request->prettyPrint = false;
    $request->printType = BooksVolumesListPrintTypeEnum::MAGAZINES;
    $request->projection = BooksVolumesListProjectionEnum::FULL;
    $request->q = 'ducimus';
    $request->quotaUser = 'quos';
    $request->showPreorders = false;
    $request->source = 'vel';
    $request->startIndex = 287051;
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new BooksVolumesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->volumes->booksVolumesList($request, $requestSecurity);

    if ($response->volumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksVolumesMybooksList

Return a list of books in My Library.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesMybooksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesMybooksListAcquireMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesMybooksListProcessingStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesMybooksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksVolumesMybooksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'commodi';
    $request->acquireMethod = [
        BooksVolumesMybooksListAcquireMethodEnum::PREVIOUSLY_RENTED,
        BooksVolumesMybooksListAcquireMethodEnum::UPLOADED,
    ];
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nemo';
    $request->country = 'Tuvalu';
    $request->fields = 'aliquid';
    $request->key = 'aperiam';
    $request->locale = 'cum';
    $request->maxResults = 232627;
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->processingState = [
        BooksVolumesMybooksListProcessingStateEnum::RUNNING,
        BooksVolumesMybooksListProcessingStateEnum::RUNNING,
    ];
    $request->quotaUser = 'numquam';
    $request->source = 'doloribus';
    $request->startIndex = 381760;
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new BooksVolumesMybooksListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->volumes->booksVolumesMybooksList($request, $requestSecurity);

    if ($response->volumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksVolumesRecommendedList

Return a list of recommended books for the current user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesRecommendedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesRecommendedListMaxAllowedMaturityRatingEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesRecommendedListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksVolumesRecommendedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'asperiores';
    $request->key = 'adipisci';
    $request->locale = 'non';
    $request->maxAllowedMaturityRating = BooksVolumesRecommendedListMaxAllowedMaturityRatingEnum::MAX_ALLOWED_MATURITY_RATING_UNDEFINED;
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->source = 'a';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'consectetur';

    $requestSecurity = new BooksVolumesRecommendedListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->volumes->booksVolumesRecommendedList($request, $requestSecurity);

    if ($response->volumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksVolumesRecommendedRate

Rate a recommended book for the current user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesRecommendedRateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesRecommendedRateRatingEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesRecommendedRateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksVolumesRecommendedRateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsa';
    $request->fields = 'voluptates';
    $request->key = 'libero';
    $request->locale = 'vitae';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'similique';
    $request->rating = BooksVolumesRecommendedRateRatingEnum::RATING_UNDEFINED;
    $request->source = 'aspernatur';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'voluptas';
    $request->volumeId = 'voluptas';

    $requestSecurity = new BooksVolumesRecommendedRateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->volumes->booksVolumesRecommendedRate($request, $requestSecurity);

    if ($response->booksVolumesRecommendedRateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksVolumesUseruploadedList

Return a list of books uploaded by the current user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesUseruploadedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesUseruploadedListProcessingStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksVolumesUseruploadedListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksVolumesUseruploadedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'adipisci';
    $request->fields = 'minus';
    $request->key = 'dolores';
    $request->locale = 'blanditiis';
    $request->maxResults = 449292;
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->processingState = [
        BooksVolumesUseruploadedListProcessingStateEnum::RUNNING,
        BooksVolumesUseruploadedListProcessingStateEnum::RUNNING,
    ];
    $request->quotaUser = 'ullam';
    $request->source = 'adipisci';
    $request->startIndex = 738391;
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'quas';
    $request->volumeId = [
        'nesciunt',
        'culpa',
        'corrupti',
        'pariatur',
    ];

    $requestSecurity = new BooksVolumesUseruploadedListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->volumes->booksVolumesUseruploadedList($request, $requestSecurity);

    if ($response->volumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
