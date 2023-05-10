# accounts

### Available Operations

* [travelpartnerAccountsAccountLinksCreate](#travelpartneraccountsaccountlinkscreate) - Creates a new account link between a Hotel Center account and a Google Ads account.
* [travelpartnerAccountsAccountLinksDelete](#travelpartneraccountsaccountlinksdelete) - Deletes an account link.
* [travelpartnerAccountsAccountLinksList](#travelpartneraccountsaccountlinkslist) - Returns the account links for a Hotel Center account.
* [travelpartnerAccountsBrandsCreate](#travelpartneraccountsbrandscreate) - Creates a new brand. Because Google detects brands from your existing properties, you only need this operation when you want to configure a brand before you send its properties to Google. Note that it might take a couple of days after your listing feed first provides a brand for the brand to appear.
* [travelpartnerAccountsBrandsList](#travelpartneraccountsbrandslist) - Returns the brands for a partner account.
* [travelpartnerAccountsBrandsPatch](#travelpartneraccountsbrandspatch) - Updates a brand.
* [travelpartnerAccountsFreeBookingLinksReportViewsQuery](#travelpartneraccountsfreebookinglinksreportviewsquery) - **DEPRECATED:** Use PropertyPerformanceReportService.QueryPropertyPerformanceReport, which also has impression reporting, instead. Provides the ability to query (get, filter, and segment) a free booking links report for a specific account.
* [travelpartnerAccountsHotelViewsList](#travelpartneraccountshotelviewslist) - Returns the list of hotel views.
* [travelpartnerAccountsHotelViewsSummarize](#travelpartneraccountshotelviewssummarize) - Returns summarized information about hotels.
* [travelpartnerAccountsHotelsSetLiveOnGoogle](#travelpartneraccountshotelssetliveongoogle) - Collection-level custom method to update the Live on Google status for multiple properties. Each call can turn on or off multiple hotels. To turn some hotels on and turn some hotels off, you will have to make multiple calls.
* [travelpartnerAccountsIconsCreate](#travelpartneraccountsiconscreate) - Uploads a new icon and starts its review process. Generates an `icon_id` and includes it in the icon's resource name, which is the format `accounts/{account_id}/icons/{icon_id}` Returns HTTP status 400 and doesn't trigger the review process if the icon has any of these conditions: * Image is not in PNG format, or not convertible to PNG format. * Size less than 72 pixels * Size greater than 1200 pixels * Aspect ratio other than 1:1
* [travelpartnerAccountsIconsList](#travelpartneraccountsiconslist) - Returns the `Icon`s for a partner account.
* [travelpartnerAccountsListingsVerify](#travelpartneraccountslistingsverify) - returns verified listings with data issues and serving eligibilities
* [travelpartnerAccountsParticipationReportViewsQuery](#travelpartneraccountsparticipationreportviewsquery) - Provides the ability to query (get, filter, and segment) a participation report for a particular account.
* [travelpartnerAccountsPriceAccuracyViewsList](#travelpartneraccountspriceaccuracyviewslist) - Lists the available price accuracy views.
* [travelpartnerAccountsPriceAccuracyViewsSummarize](#travelpartneraccountspriceaccuracyviewssummarize) - Returns the price accuracy summary.
* [travelpartnerAccountsPriceCoverageViewsGetLatest](#travelpartneraccountspricecoverageviewsgetlatest) - Returns the latest price coverage view in full detail.
* [travelpartnerAccountsPriceCoverageViewsList](#travelpartneraccountspricecoverageviewslist) - Returns the entire price coverage history.
* [travelpartnerAccountsPropertyPerformanceReportViewsQuery](#travelpartneraccountspropertyperformancereportviewsquery) - Provides the ability to query (get, filter, and segment) a property performance links report for a specific account.
* [travelpartnerAccountsReconciliationReportsCreate](#travelpartneraccountsreconciliationreportscreate) - Creates a reconciliation report and uploads it to Google.
* [travelpartnerAccountsReconciliationReportsGet](#travelpartneraccountsreconciliationreportsget) - Returns a reconciliation report.
* [travelpartnerAccountsReconciliationReportsList](#travelpartneraccountsreconciliationreportslist) - Returns a list of the names of created reconciliation reports.
* [travelpartnerAccountsReconciliationReportsValidate](#travelpartneraccountsreconciliationreportsvalidate) - Validates a reconciliation report.

## travelpartnerAccountsAccountLinksCreate

Creates a new account link between a Hotel Center account and a Google Ads account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsAccountLinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountLink;
use \OpenAPI\OpenAPI\Models\Shared\AccountLinkTarget;
use \OpenAPI\OpenAPI\Models\Shared\HotelList;
use \OpenAPI\OpenAPI\Models\Shared\AccountLinkStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsAccountLinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accountLink = new AccountLink();
    $request->accountLink->accountLinkTarget = new AccountLinkTarget();
    $request->accountLink->accountLinkTarget->allHotels = false;
    $request->accountLink->accountLinkTarget->hotelList = new HotelList();
    $request->accountLink->accountLinkTarget->hotelList->partnerHotelIds = [
        'excepturi',
        'nisi',
    ];
    $request->accountLink->googleAdsCustomerName = 'recusandae';
    $request->accountLink->name = 'Miss Raymond Hauck III';
    $request->accountLink->status = AccountLinkStatusEnum::APPROVED;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'at';
    $request->key = 'at';
    $request->oauthToken = 'maiores';
    $request->parent = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'esse';

    $response = $sdk->accounts->travelpartnerAccountsAccountLinksCreate($request);

    if ($response->accountLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsAccountLinksDelete

Deletes an account link.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsAccountLinksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsAccountLinksDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'nam';
    $request->key = 'officia';
    $request->name = 'Wayne Lind';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'molestiae';

    $response = $sdk->accounts->travelpartnerAccountsAccountLinksDelete($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsAccountLinksList

Returns the account links for a Hotel Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsAccountLinksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsAccountLinksListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'esse';
    $request->key = 'ipsum';
    $request->oauthToken = 'excepturi';
    $request->parent = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'natus';

    $response = $sdk->accounts->travelpartnerAccountsAccountLinksList($request);

    if ($response->listAccountLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsBrandsCreate

Creates a new brand. Because Google detects brands from your existing properties, you only need this operation when you want to configure a brand before you send its properties to Google. Note that it might take a couple of days after your listing feed first provides a brand for the brand to appear.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsBrandsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BrandInput;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedText;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsBrandsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->brandInput = new BrandInput();
    $request->brandInput->displayNames = [
        new LocalizedText(),
        new LocalizedText(),
        new LocalizedText(),
    ];
    $request->brandInput->icon = 'dolor';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->brandId = 'hic';
    $request->callback = 'saepe';
    $request->fields = 'fuga';
    $request->key = 'in';
    $request->oauthToken = 'corporis';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quidem';

    $response = $sdk->accounts->travelpartnerAccountsBrandsCreate($request);

    if ($response->brand !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsBrandsList

Returns the brands for a partner account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsBrandsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsBrandsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'mollitia';
    $request->key = 'laborum';
    $request->oauthToken = 'dolores';
    $request->parent = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'nobis';

    $response = $sdk->accounts->travelpartnerAccountsBrandsList($request);

    if ($response->listBrandsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsBrandsPatch

Updates a brand.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsBrandsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BrandInput;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedText;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsBrandsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->brandInput = new BrandInput();
    $request->brandInput->displayNames = [
        new LocalizedText(),
        new LocalizedText(),
        new LocalizedText(),
    ];
    $request->brandInput->icon = 'nemo';
    $request->accessToken = 'minima';
    $request->allowMissing = false;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'iure';
    $request->key = 'culpa';
    $request->name = 'Darrin Brakus';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->updateMask = 'repellat';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'occaecati';

    $response = $sdk->accounts->travelpartnerAccountsBrandsPatch($request);

    if ($response->brand !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsFreeBookingLinksReportViewsQuery

**DEPRECATED:** Use PropertyPerformanceReportService.QueryPropertyPerformanceReport, which also has impression reporting, instead. Provides the ability to query (get, filter, and segment) a free booking links report for a specific account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsFreeBookingLinksReportViewsQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsFreeBookingLinksReportViewsQueryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'commodi';
    $request->aggregateBy = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->fields = 'error';
    $request->filter = 'quia';
    $request->key = 'quis';
    $request->name = 'Kayla O'Kon';
    $request->oauthToken = 'quo';
    $request->pageSize = 196582;
    $request->pageToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'possimus';

    $response = $sdk->accounts->travelpartnerAccountsFreeBookingLinksReportViewsQuery($request);

    if ($response->queryFreeBookingLinksReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsHotelViewsList

Returns the list of hotel views.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsHotelViewsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsHotelViewsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'laborum';
    $request->filter = 'quasi';
    $request->key = 'reiciendis';
    $request->oauthToken = 'voluptatibus';
    $request->pageSize = 878194;
    $request->pageToken = 'nihil';
    $request->parent = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'omnis';

    $response = $sdk->accounts->travelpartnerAccountsHotelViewsList($request);

    if ($response->listHotelViewsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsHotelViewsSummarize

Returns summarized information about hotels.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsHotelViewsSummarizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsHotelViewsSummarizeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloremque';
    $request->fields = 'reprehenderit';
    $request->key = 'ut';
    $request->oauthToken = 'maiores';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'iusto';

    $response = $sdk->accounts->travelpartnerAccountsHotelViewsSummarize($request);

    if ($response->summarizeHotelViewsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsHotelsSetLiveOnGoogle

Collection-level custom method to update the Live on Google status for multiple properties. Each call can turn on or off multiple hotels. To turn some hotels on and turn some hotels off, you will have to make multiple calls.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsHotelsSetLiveOnGoogleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetLiveOnGoogleRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsHotelsSetLiveOnGoogleRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setLiveOnGoogleRequest = new SetLiveOnGoogleRequest();
    $request->setLiveOnGoogleRequest->liveOnGoogle = false;
    $request->setLiveOnGoogleRequest->partnerHotelIds = [
        'enim',
        'accusamus',
        'commodi',
    ];
    $request->accessToken = 'repudiandae';
    $request->account = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->fields = 'molestias';
    $request->key = 'excepturi';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'rem';

    $response = $sdk->accounts->travelpartnerAccountsHotelsSetLiveOnGoogle($request);

    if ($response->setLiveOnGoogleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsIconsCreate

Uploads a new icon and starts its review process. Generates an `icon_id` and includes it in the icon's resource name, which is the format `accounts/{account_id}/icons/{icon_id}` Returns HTTP status 400 and doesn't trigger the review process if the icon has any of these conditions: * Image is not in PNG format, or not convertible to PNG format. * Size less than 72 pixels * Size greater than 1200 pixels * Aspect ratio other than 1:1

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsIconsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\IconInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsIconsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->iconInput = new IconInput();
    $request->iconInput->imageData = 'quasi';
    $request->iconInput->reference = 'repudiandae';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'itaque';
    $request->fields = 'incidunt';
    $request->key = 'enim';
    $request->oauthToken = 'consequatur';
    $request->parent = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'deserunt';

    $response = $sdk->accounts->travelpartnerAccountsIconsCreate($request);

    if ($response->icon !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsIconsList

Returns the `Icon`s for a partner account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsIconsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsIconsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->key = 'aliquid';
    $request->oauthToken = 'cupiditate';
    $request->parent = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'assumenda';

    $response = $sdk->accounts->travelpartnerAccountsIconsList($request);

    if ($response->listIconsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsListingsVerify

returns verified listings with data issues and serving eligibilities

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsListingsVerifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyListingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsListingsVerifyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->verifyListingsRequest = new VerifyListingsRequest();
    $request->verifyListingsRequest->xmlListing = 'alias';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'tempora';
    $request->key = 'facilis';
    $request->oauthToken = 'tempore';
    $request->parent = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'non';

    $response = $sdk->accounts->travelpartnerAccountsListingsVerify($request);

    if ($response->verifyListingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsParticipationReportViewsQuery

Provides the ability to query (get, filter, and segment) a participation report for a particular account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsParticipationReportViewsQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsParticipationReportViewsQueryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sint';
    $request->aggregateBy = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'sint';
    $request->filter = 'officia';
    $request->key = 'dolor';
    $request->name = 'Randal Parisian';
    $request->oauthToken = 'illum';
    $request->pageSize = 978571;
    $request->pageToken = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'cumque';

    $response = $sdk->accounts->travelpartnerAccountsParticipationReportViewsQuery($request);

    if ($response->queryParticipationReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsPriceAccuracyViewsList

Lists the available price accuracy views.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsPriceAccuracyViewsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsPriceAccuracyViewsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'accusamus';
    $request->key = 'non';
    $request->oauthToken = 'occaecati';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quidem';

    $response = $sdk->accounts->travelpartnerAccountsPriceAccuracyViewsList($request);

    if ($response->listPriceAccuracyViewsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsPriceAccuracyViewsSummarize

Returns the price accuracy summary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsPriceAccuracyViewsSummarizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsPriceAccuracyViewsSummarizeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'blanditiis';
    $request->fields = 'deleniti';
    $request->key = 'sapiente';
    $request->oauthToken = 'amet';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'natus';

    $response = $sdk->accounts->travelpartnerAccountsPriceAccuracyViewsSummarize($request);

    if ($response->summarizePriceAccuracyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsPriceCoverageViewsGetLatest

Returns the latest price coverage view in full detail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsPriceCoverageViewsGetLatestRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsPriceCoverageViewsGetLatestRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'magnam';
    $request->key = 'distinctio';
    $request->oauthToken = 'id';
    $request->parent = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'natus';

    $response = $sdk->accounts->travelpartnerAccountsPriceCoverageViewsGetLatest($request);

    if ($response->priceCoverageView !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsPriceCoverageViewsList

Returns the entire price coverage history.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsPriceCoverageViewsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsPriceCoverageViewsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aspernatur';
    $request->fields = 'architecto';
    $request->key = 'magnam';
    $request->oauthToken = 'et';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'quos';

    $response = $sdk->accounts->travelpartnerAccountsPriceCoverageViewsList($request);

    if ($response->listPriceCoverageViewsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsPropertyPerformanceReportViewsQuery

Provides the ability to query (get, filter, and segment) a property performance links report for a specific account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsPropertyPerformanceReportViewsQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsPropertyPerformanceReportViewsQueryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->aggregateBy = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'ad';
    $request->filter = 'eum';
    $request->key = 'dolor';
    $request->name = 'Ms. Fred Hilll';
    $request->oauthToken = 'debitis';
    $request->pageSize = 260341;
    $request->pageToken = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'in';

    $response = $sdk->accounts->travelpartnerAccountsPropertyPerformanceReportViewsQuery($request);

    if ($response->queryPropertyPerformanceReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsReconciliationReportsCreate

Creates a reconciliation report and uploads it to Google.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsReconciliationReportsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReconciliationReport;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsReconciliationReportsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->reconciliationReport = new ReconciliationReport();
    $request->reconciliationReport->contents = 'architecto';
    $request->reconciliationReport->fileName = 'repudiandae';
    $request->reconciliationReport->name = 'Lola Koss';
    $request->accessToken = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'accusantium';
    $request->key = 'consequuntur';
    $request->oauthToken = 'praesentium';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'quo';

    $response = $sdk->accounts->travelpartnerAccountsReconciliationReportsCreate($request);

    if ($response->createReconciliationReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsReconciliationReportsGet

Returns a reconciliation report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsReconciliationReportsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsReconciliationReportsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'excepturi';
    $request->includeMatchedPrices = false;
    $request->includeNonScoring = false;
    $request->includePixels = false;
    $request->key = 'odit';
    $request->name = 'Donna Bernhard';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'nam';

    $response = $sdk->accounts->travelpartnerAccountsReconciliationReportsGet($request);

    if ($response->reconciliationReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsReconciliationReportsList

Returns a list of the names of created reconciliation reports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsReconciliationReportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsReconciliationReportsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->endDate = 'perferendis';
    $request->fields = 'fugiat';
    $request->key = 'amet';
    $request->oauthToken = 'aut';
    $request->parent = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->startDate = 'hic';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'nobis';

    $response = $sdk->accounts->travelpartnerAccountsReconciliationReportsList($request);

    if ($response->listReconciliationReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelpartnerAccountsReconciliationReportsValidate

Validates a reconciliation report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsReconciliationReportsValidateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReconciliationReport;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsReconciliationReportsValidateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->reconciliationReport = new ReconciliationReport();
    $request->reconciliationReport->contents = 'quis';
    $request->reconciliationReport->fileName = 'totam';
    $request->reconciliationReport->name = 'Cynthia Hayes';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minus';
    $request->fields = 'quam';
    $request->key = 'dolor';
    $request->oauthToken = 'vero';
    $request->parent = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'omnis';

    $response = $sdk->accounts->travelpartnerAccountsReconciliationReportsValidate($request);

    if ($response->validateReconciliationReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
