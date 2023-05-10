# soundEffects

### Available Operations

* [downloadSfx](#downloadsfx) - Download sound effects
* [getSfxDetails](#getsfxdetails) - Get details about sound effects
* [getSfxLicenseList](#getsfxlicenselist) - List sound effects licenses
* [getSfxListDetails](#getsfxlistdetails) - List details about sound effects
* [licensesSFX](#licensessfx) - License sound effects
* [searchSFX](#searchsfx) - Search for sound effects

## downloadSfx

This endpoint redownloads sound effects that you have already received a license for. The download links in the response are valid for 8 hours.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DownloadSfxRequest;
use \OpenAPI\OpenAPI\Models\Operations\DownloadSfxSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadSfxRequest();
    $request->id = '21813d52-08ec-4e7e-a53b-668451c6c6e2';

    $requestSecurity = new DownloadSfxSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->soundEffects->downloadSfx($request, $requestSecurity);

    if ($response->sfxUrl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSfxDetails

This endpoint shows information about a sound effect.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSfxDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSfxDetailsLibraryEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSfxDetailsViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSfxDetailsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSfxDetailsRequest();
    $request->id = 28952;
    $request->language = LanguageEnum::CS;
    $request->library = GetSfxDetailsLibraryEnum::PREMIER;
    $request->searchId = 'necessitatibus';
    $request->view = GetSfxDetailsViewEnum::MINIMAL;

    $requestSecurity = new GetSfxDetailsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->soundEffects->getSfxDetails($request, $requestSecurity);

    if ($response->sfx !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSfxLicenseList

This endpoint lists existing licenses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSfxLicenseListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSfxLicenseListDownloadAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSfxLicenseListSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSfxLicenseListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSfxLicenseListRequest();
    $request->downloadAvailability = GetSfxLicenseListDownloadAvailabilityEnum::DOWNLOADABLE;
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-14T04:22:15.063Z');
    $request->license = 'est';
    $request->licenseId = 'harum';
    $request->page = 192718;
    $request->perPage = 987349;
    $request->sfxId = 'repudiandae';
    $request->sort = GetSfxLicenseListSortEnum::OLDEST;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-09T21:10:40.487Z');
    $request->teamHistory = false;
    $request->username = 'Jackson.Kuvalis';

    $requestSecurity = new GetSfxLicenseListSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->soundEffects->getSfxLicenseList($request, $requestSecurity);

    if ($response->downloadHistoryDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSfxListDetails

This endpoint shows information about sound effects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSfxListDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSfxListDetailsLibraryEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSfxListDetailsViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSfxListDetailsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSfxListDetailsRequest();
    $request->id = [
        'nemo',
        'quos',
    ];
    $request->language = LanguageEnum::CS;
    $request->library = GetSfxListDetailsLibraryEnum::SHUTTERSTOCK;
    $request->searchId = 'aspernatur';
    $request->view = GetSfxListDetailsViewEnum::MINIMAL;

    $requestSecurity = new GetSfxListDetailsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->soundEffects->getSfxListDetails($request, $requestSecurity);

    if ($response->sfxDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## licensesSFX

This endpoint licenses sounds effect assets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\LicenseSFXRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseSFX;
use \OpenAPI\OpenAPI\Models\Shared\LicenseSFXAudioLayoutEnum;
use \OpenAPI\OpenAPI\Models\Shared\LicenseSFXFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicensesSFXSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicenseSFXRequest();
    $request->soundEffects = [
        new LicenseSFX(),
    ];

    $requestSecurity = new LicensesSFXSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->soundEffects->licensesSFX($request, $requestSecurity);

    if ($response->licenseSFXResultDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchSFX

This endpoint searches for sound effects. If you specify more than one search parameter, the API uses an AND condition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchSFXRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchSFXSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchSFXViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchSFXSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchSFXRequest();
    $request->addedDate = DateTime::createFromFormat('Y-m-d', '2021-12-21');
    $request->addedDateEnd = DateTime::createFromFormat('Y-m-d', '2022-11-26');
    $request->addedDateStart = DateTime::createFromFormat('Y-m-d', '2021-04-19');
    $request->duration = 117380;
    $request->durationFrom = 395544;
    $request->durationTo = 159845;
    $request->language = LanguageEnum::CS;
    $request->page = 233078;
    $request->perPage = 46806;
    $request->query = 'cupiditate';
    $request->safe = false;
    $request->sort = SearchSFXSortEnum::OLDEST;
    $request->view = SearchSFXViewEnum::FULL;

    $requestSecurity = new SearchSFXSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->soundEffects->searchSFX($request, $requestSecurity);

    if ($response->sfxSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
