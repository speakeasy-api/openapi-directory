# editorialVideo

### Available Operations

* [getEditorialVideo](#geteditorialvideo) - Get editorial video content details
* [getEditorialVideoLicenseList](#geteditorialvideolicenselist) - List editorial video licenses
* [licenseEditorialVideo](#licenseeditorialvideo) - License editorial video content
* [listEditorialVideoCategories](#listeditorialvideocategories) - List editorial video categories
* [searchEditorialVideos](#searcheditorialvideos) - Search editorial video content

## getEditorialVideo

This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialVideoRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialVideoSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEditorialVideoRequest();
    $request->country = 'et';
    $request->id = '7051339d-0808-46a1-8403-94c26071f93f';
    $request->searchId = 'voluptas';

    $requestSecurity = new GetEditorialVideoSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialVideo->getEditorialVideo($request, $requestSecurity);

    if ($response->editorialVideoContent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEditorialVideoLicenseList

This endpoint lists existing editorial video licenses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialVideoLicenseListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialVideoLicenseListDownloadAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialVideoLicenseListSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorialVideoLicenseListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEditorialVideoLicenseListRequest();
    $request->downloadAvailability = GetEditorialVideoLicenseListDownloadAvailabilityEnum::NON_DOWNLOADABLE;
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-04T16:41:09.494Z');
    $request->license = 'quaerat';
    $request->page = 162954;
    $request->perPage = 831520;
    $request->sort = GetEditorialVideoLicenseListSortEnum::OLDEST;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-13T02:46:31.605Z');
    $request->teamHistory = false;
    $request->username = 'Lucienne.Yundt';
    $request->videoId = 'quaerat';

    $requestSecurity = new GetEditorialVideoLicenseListSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->editorialVideo->getEditorialVideoLicenseList($request, $requestSecurity);

    if ($response->downloadHistoryDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## licenseEditorialVideo

This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license. The download links in the response are valid for 8 hours.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\LicenseEditorialVideoContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseEditorialVideoContent;
use \OpenAPI\OpenAPI\Models\Shared\LicenseEditorialVideoContentLicenseEnum;
use \OpenAPI\OpenAPI\Models\Shared\LicenseEditorialVideoContentSizeEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicenseEditorialVideoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicenseEditorialVideoContentRequest();
    $request->country = LicenseEditorialVideoContentRequestCountry2Enum::SL;
    $request->editorial = [
        new LicenseEditorialVideoContent(),
        new LicenseEditorialVideoContent(),
    ];

    $requestSecurity = new LicenseEditorialVideoSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->editorialVideo->licenseEditorialVideo($request, $requestSecurity);

    if ($response->licenseEditorialContentResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEditorialVideoCategories

This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEditorialVideoCategoriesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListEditorialVideoCategoriesSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialVideo->listEditorialVideoCategories($requestSecurity);

    if ($response->editorialVideoCategoryResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchEditorialVideos

This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only videos that match the query and are in both the Alone and Performing categories.  You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchEditorialVideosRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchEditorialVideosResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchEditorialVideosSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchEditorialVideosSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchEditorialVideosRequest();
    $request->category = 'ab';
    $request->country = 'adipisci';
    $request->cursor = 'fuga';
    $request->dateEnd = DateTime::createFromFormat('Y-m-d', '2022-03-29');
    $request->dateStart = DateTime::createFromFormat('Y-m-d', '2022-05-14');
    $request->fps = 6658.59;
    $request->perPage = 926880;
    $request->query = 'totam';
    $request->resolution = SearchEditorialVideosResolutionEnum::STANDARD_DEFINITION;
    $request->sort = SearchEditorialVideosSortEnum::NEWEST;
    $request->supplierCode = [
        'quos',
        'vel',
    ];

    $requestSecurity = new SearchEditorialVideosSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->editorialVideo->searchEditorialVideos($request, $requestSecurity);

    if ($response->editorialVideoSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
