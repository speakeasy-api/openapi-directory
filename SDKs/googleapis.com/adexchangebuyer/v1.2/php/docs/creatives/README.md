# creatives

### Available Operations

* [adexchangebuyerCreativesGet](#adexchangebuyercreativesget) - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* [adexchangebuyerCreativesInsert](#adexchangebuyercreativesinsert) - Submit a new creative.
* [adexchangebuyerCreativesList](#adexchangebuyercreativeslist) - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.

## adexchangebuyerCreativesGet

Gets the status for a single creative. A creative will be available 30-40 minutes after submission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerCreativesGetRequest();
    $request->accountId = 520478;
    $request->alt = AltEnum::JSON;
    $request->buyerCreativeId = 'porro';
    $request->fields = 'dolorum';
    $request->key = 'dicta';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->userIp = 'occaecati';

    $requestSecurity = new AdexchangebuyerCreativesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creatives->adexchangebuyerCreativesGet($request, $requestSecurity);

    if ($response->creative !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerCreativesInsert

Submit a new creative.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Creative;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCorrections;
use \OpenAPI\OpenAPI\Models\Shared\CreativeDisapprovalReasons;
use \OpenAPI\OpenAPI\Models\Shared\CreativeFilteringReasons;
use \OpenAPI\OpenAPI\Models\Shared\CreativeFilteringReasonsReasons;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerCreativesInsertRequest();
    $request->creative = new Creative();
    $request->creative->htmlSnippet = 'fugit';
    $request->creative->accountId = 537373;
    $request->creative->advertiserId = [
        'optio',
        'totam',
        'beatae',
        'commodi',
    ];
    $request->creative->advertiserName = 'molestiae';
    $request->creative->agencyId = 'modi';
    $request->creative->apiUploadTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-24T09:42:46.236Z');
    $request->creative->attribute = [
        456150,
        216550,
        568434,
    ];
    $request->creative->buyerCreativeId = 'aspernatur';
    $request->creative->clickThroughUrl = [
        'ad',
    ];
    $request->creative->corrections = [
        new CreativeCorrections(),
        new CreativeCorrections(),
        new CreativeCorrections(),
    ];
    $request->creative->disapprovalReasons = [
        new CreativeDisapprovalReasons(),
    ];
    $request->creative->filteringReasons = new CreativeFilteringReasons();
    $request->creative->filteringReasons->date = 'iste';
    $request->creative->filteringReasons->reasons = [
        new CreativeFilteringReasonsReasons(),
    ];
    $request->creative->height = 616934;
    $request->creative->impressionTrackingUrl = [
        'hic',
        'saepe',
    ];
    $request->creative->kind = 'fuga';
    $request->creative->productCategories = [
        359508,
        613064,
    ];
    $request->creative->restrictedCategories = [
        902349,
        697631,
    ];
    $request->creative->sensitiveCategories = [
        60225,
    ];
    $request->creative->status = 'reiciendis';
    $request->creative->vendorType = [
        653140,
        670638,
        170909,
    ];
    $request->creative->version = 210382;
    $request->creative->videoURL = 'corporis';
    $request->creative->width = 128926;
    $request->alt = AltEnum::JSON;
    $request->fields = 'nobis';
    $request->key = 'enim';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->userIp = 'minima';

    $requestSecurity = new AdexchangebuyerCreativesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creatives->adexchangebuyerCreativesInsert($request, $requestSecurity);

    if ($response->creative !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerCreativesList

Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesListStatusFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerCreativesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerCreativesListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'excepturi';
    $request->key = 'accusantium';
    $request->maxResults = 438601;
    $request->oauthToken = 'culpa';
    $request->pageToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->statusFilter = AdexchangebuyerCreativesListStatusFilterEnum::APPROVED;
    $request->userIp = 'mollitia';

    $requestSecurity = new AdexchangebuyerCreativesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creatives->adexchangebuyerCreativesList($request, $requestSecurity);

    if ($response->creativesList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
