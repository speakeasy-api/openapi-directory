# billingProfiles

### Available Operations

* [dfareportingBillingProfilesGet](#dfareportingbillingprofilesget) - Gets one billing profile by ID.
* [dfareportingBillingProfilesList](#dfareportingbillingprofileslist) - Retrieves a list of billing profiles, possibly filtered. This method supports paging.
* [dfareportingBillingProfilesUpdate](#dfareportingbillingprofilesupdate) - Updates an existing billing profile.

## dfareportingBillingProfilesGet

Gets one billing profile by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBillingProfilesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBillingProfilesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingBillingProfilesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'officia';
    $request->id = '3f2ceda7-e23f-4225-b411-faf4b7544e47';
    $request->key = 'explicabo';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->profileId = 'rem';
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new DfareportingBillingProfilesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingProfiles->dfareportingBillingProfilesGet($request, $requestSecurity);

    if ($response->billingProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingBillingProfilesList

Retrieves a list of billing profiles, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBillingProfilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBillingProfilesListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBillingProfilesListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBillingProfilesListStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBillingProfilesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingBillingProfilesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->currencyCode = 'libero';
    $request->fields = 'magnam';
    $request->ids = [
        'modi',
    ];
    $request->key = 'eum';
    $request->maxResults = 199529;
    $request->name = 'Julio Stehr';
    $request->oauthToken = 'veniam';
    $request->onlySuggestion = false;
    $request->pageToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->profileId = 'ab';
    $request->quotaUser = 'modi';
    $request->sortField = DfareportingBillingProfilesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingBillingProfilesListSortOrderEnum::ASCENDING;
    $request->status = [
        DfareportingBillingProfilesListStatusEnum::ACTIVE,
        DfareportingBillingProfilesListStatusEnum::ACTIVE,
        DfareportingBillingProfilesListStatusEnum::UNDER_REVIEW,
        DfareportingBillingProfilesListStatusEnum::ARCHIVED,
    ];
    $request->subaccountIds = [
        'voluptate',
        'consectetur',
        'nesciunt',
        'quaerat',
    ];
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'minus';

    $requestSecurity = new DfareportingBillingProfilesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingProfiles->dfareportingBillingProfilesList($request, $requestSecurity);

    if ($response->billingProfilesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingBillingProfilesUpdate

Updates an existing billing profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBillingProfilesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillingProfile;
use \OpenAPI\OpenAPI\Models\Shared\BillingProfileInvoiceLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillingProfileStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBillingProfilesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingBillingProfilesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->billingProfile = new BillingProfile();
    $request->billingProfile->consolidatedInvoice = false;
    $request->billingProfile->countryCode = 'PL';
    $request->billingProfile->currencyCode = 'iusto';
    $request->billingProfile->id = 'quas';
    $request->billingProfile->invoiceLevel = BillingProfileInvoiceLevelEnum::ACCOUNT_LEVEL;
    $request->billingProfile->isDefault = false;
    $request->billingProfile->kind = 'facilis';
    $request->billingProfile->name = 'Ms. Ella Pfannerstill V';
    $request->billingProfile->paymentsAccountId = 'laudantium';
    $request->billingProfile->paymentsCustomerId = 'repellendus';
    $request->billingProfile->purchaseOrder = 'veritatis';
    $request->billingProfile->secondaryPaymentsCustomerId = 'quae';
    $request->billingProfile->status = BillingProfileStatusEnum::UNDER_REVIEW;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'nulla';
    $request->key = 'officia';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->profileId = 'voluptatem';
    $request->quotaUser = 'alias';
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new DfareportingBillingProfilesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingProfiles->dfareportingBillingProfilesUpdate($request, $requestSecurity);

    if ($response->billingProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
