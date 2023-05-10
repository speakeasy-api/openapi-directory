# accounts

### Available Operations

* [dfareportingAccountsGet](#dfareportingaccountsget) - Gets one account by ID.
* [dfareportingAccountsList](#dfareportingaccountslist) - Retrieves the list of accounts, possibly filtered. This method supports paging.
* [dfareportingAccountsPatch](#dfareportingaccountspatch) - Updates an existing account. This method supports patch semantics.
* [dfareportingAccountsUpdate](#dfareportingaccountsupdate) - Updates an existing account.

## dfareportingAccountsGet

Gets one account by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAccountsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->fields = 'dignissimos';
    $request->id = 'f3a41006-74eb-4f69-a80d-1ba77a89ebf7';
    $request->key = 'ipsum';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->profileId = 'id';
    $request->quotaUser = 'saepe';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new DfareportingAccountsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->dfareportingAccountsGet($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAccountsList

Retrieves the list of accounts, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAccountsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'amet';
    $request->active = false;
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'ad';
    $request->ids = [
        'suscipit',
        'deserunt',
        'provident',
        'minima',
    ];
    $request->key = 'repellendus';
    $request->maxResults = 519711;
    $request->oauthToken = 'similique';
    $request->pageToken = 'alias';
    $request->prettyPrint = false;
    $request->profileId = 'at';
    $request->quotaUser = 'quaerat';
    $request->searchString = 'tempora';
    $request->sortField = DfareportingAccountsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingAccountsListSortOrderEnum::DESCENDING;
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new DfareportingAccountsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->dfareportingAccountsList($request, $requestSecurity);

    if ($response->accountsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAccountsPatch

Updates an existing account. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Account;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccountProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountActiveAdsLimitTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LookbackConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAccountsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->account = new Account();
    $request->account->accountPermissionIds = [
        'esse',
        'harum',
        'iusto',
        'ipsum',
    ];
    $request->account->accountProfile = AccountAccountProfileEnum::ACCOUNT_PROFILE_STANDARD;
    $request->account->active = false;
    $request->account->activeAdsLimitTier = AccountActiveAdsLimitTierEnum::ACTIVE_ADS_TIER1_M;
    $request->account->activeViewOptOut = false;
    $request->account->availablePermissionIds = [
        'tempore',
    ];
    $request->account->countryId = 'accusamus';
    $request->account->currencyId = 'numquam';
    $request->account->defaultCreativeSizeId = 'enim';
    $request->account->description = 'dolorem';
    $request->account->id = 'sapiente';
    $request->account->kind = 'totam';
    $request->account->locale = 'nihil';
    $request->account->maximumImageSize = 'sit';
    $request->account->name = 'Luis Cremin';
    $request->account->nielsenOcrEnabled = false;
    $request->account->reportsConfiguration = new ReportsConfiguration();
    $request->account->reportsConfiguration->exposureToConversionEnabled = false;
    $request->account->reportsConfiguration->lookbackConfiguration = new LookbackConfiguration();
    $request->account->reportsConfiguration->lookbackConfiguration->clickDuration = 374170;
    $request->account->reportsConfiguration->lookbackConfiguration->postImpressionActivitiesDuration = 646265;
    $request->account->reportsConfiguration->reportGenerationTimeZoneId = 'quam';
    $request->account->shareReportsWithTwitter = false;
    $request->account->teaserSizeLimit = 'ipsum';
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cupiditate';
    $request->fields = 'maxime';
    $request->id = 'db1a8422-bb67-49d2-b227-15bf0cbb1e31';
    $request->key = 'nobis';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->profileId = 'tempore';
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new DfareportingAccountsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->dfareportingAccountsPatch($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAccountsUpdate

Updates an existing account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Account;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccountProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountActiveAdsLimitTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LookbackConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAccountsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->account = new Account();
    $request->account->accountPermissionIds = [
        'labore',
        'adipisci',
    ];
    $request->account->accountProfile = AccountAccountProfileEnum::ACCOUNT_PROFILE_STANDARD;
    $request->account->active = false;
    $request->account->activeAdsLimitTier = AccountActiveAdsLimitTierEnum::ACTIVE_ADS_TIER40_K;
    $request->account->activeViewOptOut = false;
    $request->account->availablePermissionIds = [
        'aut',
    ];
    $request->account->countryId = 'quas';
    $request->account->currencyId = 'itaque';
    $request->account->defaultCreativeSizeId = 'consequatur';
    $request->account->description = 'est';
    $request->account->id = 'repellendus';
    $request->account->kind = 'porro';
    $request->account->locale = 'doloribus';
    $request->account->maximumImageSize = 'ut';
    $request->account->name = 'Ms. Terrance Davis';
    $request->account->nielsenOcrEnabled = false;
    $request->account->reportsConfiguration = new ReportsConfiguration();
    $request->account->reportsConfiguration->exposureToConversionEnabled = false;
    $request->account->reportsConfiguration->lookbackConfiguration = new LookbackConfiguration();
    $request->account->reportsConfiguration->lookbackConfiguration->clickDuration = 580447;
    $request->account->reportsConfiguration->lookbackConfiguration->postImpressionActivitiesDuration = 977496;
    $request->account->reportsConfiguration->reportGenerationTimeZoneId = 'quisquam';
    $request->account->shareReportsWithTwitter = false;
    $request->account->teaserSizeLimit = 'vero';
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'delectus';
    $request->key = 'voluptate';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->profileId = 'vero';
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new DfareportingAccountsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->dfareportingAccountsUpdate($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
