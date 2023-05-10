# editorialImages

### Available Operations

* [~~getEditorialCategories~~](#geteditorialcategories) - (Deprecated) List editorial categories :warning: **Deprecated**
* [getEditorialImage](#geteditorialimage) - Get editorial content details
* [getEditorialImageLicenseList](#geteditorialimagelicenselist) - List editorial image licenses
* [getEditorialImageLivefeed](#geteditorialimagelivefeed) - Get editorial livefeed
* [getEditorialImageLivefeedItems](#geteditorialimagelivefeeditems) - Get editorial livefeed items
* [getEditorialImageLivefeedList](#geteditorialimagelivefeedlist) - Get editorial livefeed list
* [~~getEditorialLivefeed~~](#geteditoriallivefeed) - (Deprecated) Get editorial livefeed :warning: **Deprecated**
* [~~getEditorialLivefeedItems~~](#geteditoriallivefeeditems) - (Deprecated) Get editorial livefeed items :warning: **Deprecated**
* [~~getEditorialLivefeedList~~](#geteditoriallivefeedlist) - (Deprecated) Get editorial livefeed list :warning: **Deprecated**
* [~~getUpdatedEditorialImage~~](#getupdatededitorialimage) - (Deprecated) List updated content :warning: **Deprecated**
* [getUpdatedEditorialImages](#getupdatededitorialimages) - List updated content
* [~~getV2EditorialId~~](#getv2editorialid) - (Deprecated) Get editorial content details :warning: **Deprecated**
* [~~licenseEditorialImage~~](#licenseeditorialimage) - (Deprecated) License editorial content :warning: **Deprecated**
* [licenseEditorialImages](#licenseeditorialimages) - License editorial content
* [listEditorialImageCategories](#listeditorialimagecategories) - List editorial categories
* [~~searchEditorial~~](#searcheditorial) - (Deprecated) Search editorial content :warning: **Deprecated**
* [searchEditorialImages](#searcheditorialimages) - Search editorial images

## ~~getEditorialCategories~~

Deprecated; use `GET /v2/editorial/images/categories` instead. This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialCategoriesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetEditorialCategoriesSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialImages->getEditorialCategories($requestSecurity);

    if ($response->editorialCategoryResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEditorialImage

This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialImageSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEditorialImageRequest();
    $request->country = 'porro';
    $request->id = 'f4b92187-9fce-4953-b73e-f7fbc7abd74d';

    $requestSecurity = new GetEditorialImageSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialImages->getEditorialImage($request, $requestSecurity);

    if ($response->editorialContent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEditorialImageLicenseList

This endpoint lists existing editorial image licenses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialImageLicenseListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialImageLicenseListDownloadAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialImageLicenseListSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialImageLicenseListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEditorialImageLicenseListRequest();
    $request->downloadAvailability = GetEditorialImageLicenseListDownloadAvailabilityEnum::NON_DOWNLOADABLE;
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T11:24:00.260Z');
    $request->imageId = 'impedit';
    $request->license = 'aut';
    $request->page = 974259;
    $request->perPage = 347233;
    $request->sort = GetEditorialImageLicenseListSortEnum::OLDEST;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-22T03:27:44.973Z');
    $request->teamHistory = false;
    $request->username = 'Willie_Wyman';

    $requestSecurity = new GetEditorialImageLicenseListSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->editorialImages->getEditorialImageLicenseList($request, $requestSecurity);

    if ($response->downloadHistoryDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEditorialImageLivefeed

Get editorial livefeed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialImageLivefeedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialImageLivefeedSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEditorialImageLivefeedRequest();
    $request->country = 'ducimus';
    $request->id = '0a45626d-4368-413f-96d9-f5fce6c55614';

    $requestSecurity = new GetEditorialImageLivefeedSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialImages->getEditorialImageLivefeed($request, $requestSecurity);

    if ($response->editorialImageLivefeed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEditorialImageLivefeedItems

Get editorial livefeed items

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialImageLivefeedItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialImageLivefeedItemsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEditorialImageLivefeedItemsRequest();
    $request->country = 'ea';
    $request->id = 'c3e250fb-008c-442e-941a-ac366c8dd6b1';

    $requestSecurity = new GetEditorialImageLivefeedItemsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialImages->getEditorialImageLivefeedItems($request, $requestSecurity);

    if ($response->editorialImageContentDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEditorialImageLivefeedList

Get editorial livefeed list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialImageLivefeedListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialImageLivefeedListSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEditorialImageLivefeedListRequest();
    $request->country = 'tempora';
    $request->page = 256139;
    $request->perPage = 131482;

    $requestSecurity = new GetEditorialImageLivefeedListSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialImages->getEditorialImageLivefeedList($request, $requestSecurity);

    if ($response->editorialImageLivefeedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getEditorialLivefeed~~

Deprecated: use `GET /v2/editorial/images/livefeeds/{id}` instead to get an editorial livefeed.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialLivefeedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialLivefeedSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEditorialLivefeedRequest();
    $request->country = 'provident';
    $request->id = '07474778-a7bd-4466-928c-10ab3cdca425';

    $requestSecurity = new GetEditorialLivefeedSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialImages->getEditorialLivefeed($request, $requestSecurity);

    if ($response->editorialLivefeed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getEditorialLivefeedItems~~

Deprecated; use `GET /v2/editorial/images/livefeeds/{id}/items` instead to get editorial livefeed items.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialLivefeedItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialLivefeedItemsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEditorialLivefeedItemsRequest();
    $request->country = 'ab';
    $request->id = '904e523c-7e0b-4c71-b8e4-796f2a70c688';

    $requestSecurity = new GetEditorialLivefeedItemsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialImages->getEditorialLivefeedItems($request, $requestSecurity);

    if ($response->editorialContentDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getEditorialLivefeedList~~

Deprecated; use `GET /v2/editorial/images/livefeeds` instead to get a list of editorial livefeeds.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialLivefeedListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialLivefeedListSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEditorialLivefeedListRequest();
    $request->country = 'consequuntur';
    $request->page = 536178;
    $request->perPage = 143829;

    $requestSecurity = new GetEditorialLivefeedListSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialImages->getEditorialLivefeedList($request, $requestSecurity);

    if ($response->editorialLivefeedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getUpdatedEditorialImage~~

Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatedEditorialImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatedEditorialImageSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatedEditorialImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatedEditorialImageSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUpdatedEditorialImageRequest();
    $request->country = 'fuga';
    $request->cursor = 'mollitia';
    $request->dateTakenEnd = DateTime::createFromFormat('Y-m-d', '2022-06-18');
    $request->dateTakenStart = DateTime::createFromFormat('Y-m-d', '2022-09-04');
    $request->dateUpdatedEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-08T08:09:29.073Z');
    $request->dateUpdatedStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T22:36:51.892Z');
    $request->perPage = 187131;
    $request->sort = GetUpdatedEditorialImageSortEnum::NEWEST;
    $request->supplierCode = [
        'occaecati',
        'atque',
        'et',
        'esse',
    ];
    $request->type = GetUpdatedEditorialImageTypeEnum::ADDITION;

    $requestSecurity = new GetUpdatedEditorialImageSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialImages->getUpdatedEditorialImage($request, $requestSecurity);

    if ($response->editorialUpdatedResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdatedEditorialImages

This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatedEditorialImagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatedEditorialImagesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatedEditorialImagesTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatedEditorialImagesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUpdatedEditorialImagesRequest();
    $request->country = 'accusamus';
    $request->cursor = 'veritatis';
    $request->dateTakenEnd = DateTime::createFromFormat('Y-m-d', '2022-03-14');
    $request->dateTakenStart = DateTime::createFromFormat('Y-m-d', '2021-03-31');
    $request->dateUpdatedEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-27T21:17:41.726Z');
    $request->dateUpdatedStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-21T04:40:52.923Z');
    $request->perPage = 690025;
    $request->sort = GetUpdatedEditorialImagesSortEnum::NEWEST;
    $request->supplierCode = [
        'occaecati',
        'minima',
        'distinctio',
    ];
    $request->type = GetUpdatedEditorialImagesTypeEnum::ADDITION;

    $requestSecurity = new GetUpdatedEditorialImagesSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialImages->getUpdatedEditorialImages($request, $requestSecurity);

    if ($response->editorialUpdatedResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getV2EditorialId~~

Deprecated; use `GET /v2/editorial/images/{id}` instead to show information about an editorial image, including a URL to a preview image and the sizes that it is available in.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2EditorialIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV2EditorialIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2EditorialIdRequest();
    $request->country = 'sit';
    $request->id = 'ab3c20c4-f378-49fd-871f-99dd2efd121a';
    $request->searchId = 'culpa';

    $requestSecurity = new GetV2EditorialIdSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialImages->getV2EditorialId($request, $requestSecurity);

    if ($response->editorialContent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~licenseEditorialImage~~

Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\LicenseEditorialContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseEditorialContent;
use \OpenAPI\OpenAPI\Models\Shared\LicenseEditorialContentSizeEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicenseEditorialImageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicenseEditorialContentRequest();
    $request->country = LicenseEditorialContentRequestCountry1Enum::USA;
    $request->editorial = [
        new LicenseEditorialContent(),
        new LicenseEditorialContent(),
        new LicenseEditorialContent(),
        new LicenseEditorialContent(),
    ];

    $requestSecurity = new LicenseEditorialImageSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->editorialImages->licenseEditorialImage($request, $requestSecurity);

    if ($response->licenseEditorialContentResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## licenseEditorialImages

This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\LicenseEditorialContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseEditorialContent;
use \OpenAPI\OpenAPI\Models\Shared\LicenseEditorialContentSizeEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicenseEditorialImagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicenseEditorialContentRequest();
    $request->country = LicenseEditorialContentRequestCountry1Enum::USA;
    $request->editorial = [
        new LicenseEditorialContent(),
        new LicenseEditorialContent(),
        new LicenseEditorialContent(),
        new LicenseEditorialContent(),
    ];

    $requestSecurity = new LicenseEditorialImagesSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->editorialImages->licenseEditorialImages($request, $requestSecurity);

    if ($response->licenseEditorialContentResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEditorialImageCategories

This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEditorialImageCategoriesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListEditorialImageCategoriesSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialImages->listEditorialImageCategories($requestSecurity);

    if ($response->editorialImageCategoryResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~searchEditorial~~

Deprecated; use `GET /v2/editorial/images/search` instead to search for editorial images.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchEditorialRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchEditorialSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchEditorialSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchEditorialRequest();
    $request->category = 'vel';
    $request->country = 'in';
    $request->cursor = 'eius';
    $request->dateEnd = DateTime::createFromFormat('Y-m-d', '2021-04-21');
    $request->dateStart = DateTime::createFromFormat('Y-m-d', '2022-12-07');
    $request->perPage = 306986;
    $request->query = 'sapiente';
    $request->sort = SearchEditorialSortEnum::RELEVANT;
    $request->supplierCode = [
        'reprehenderit',
        'ullam',
    ];

    $requestSecurity = new SearchEditorialSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialImages->searchEditorial($request, $requestSecurity);

    if ($response->editorialSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchEditorialImages

This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only images that match the query and are in both the Alone and Performing categories. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchEditorialImagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchEditorialImagesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchEditorialImagesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchEditorialImagesRequest();
    $request->category = 'nisi';
    $request->country = 'aut';
    $request->cursor = 'voluptatum';
    $request->dateEnd = DateTime::createFromFormat('Y-m-d', '2022-02-26');
    $request->dateStart = DateTime::createFromFormat('Y-m-d', '2022-06-19');
    $request->perPage = 929292;
    $request->query = 'dolorum';
    $request->sort = SearchEditorialImagesSortEnum::RELEVANT;
    $request->supplierCode = [
        'tenetur',
        'quasi',
        'at',
    ];

    $requestSecurity = new SearchEditorialImagesSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialImages->searchEditorialImages($request, $requestSecurity);

    if ($response->editorialSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
