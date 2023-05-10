# subaccounts

### Available Operations

* [dfareportingSubaccountsGet](#dfareportingsubaccountsget) - Gets one subaccount by ID.
* [dfareportingSubaccountsInsert](#dfareportingsubaccountsinsert) - Inserts a new subaccount.
* [dfareportingSubaccountsList](#dfareportingsubaccountslist) - Gets a list of subaccounts, possibly filtered. This method supports paging.
* [dfareportingSubaccountsPatch](#dfareportingsubaccountspatch) - Updates an existing subaccount. This method supports patch semantics.
* [dfareportingSubaccountsUpdate](#dfareportingsubaccountsupdate) - Updates an existing subaccount.

## dfareportingSubaccountsGet

Gets one subaccount by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingSubaccountsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eos';
    $request->fields = 'quae';
    $request->id = 'a40e7c4a-e640-4642-b265-7b01a07c08fd';
    $request->key = 'sequi';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->profileId = 'magni';
    $request->quotaUser = 'inventore';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new DfareportingSubaccountsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subaccounts->dfareportingSubaccountsGet($request, $requestSecurity);

    if ($response->subaccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingSubaccountsInsert

Inserts a new subaccount.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subaccount;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingSubaccountsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->subaccount = new Subaccount();
    $request->subaccount->accountId = 'reprehenderit';
    $request->subaccount->availablePermissionIds = [
        'ratione',
        'consequatur',
        'pariatur',
    ];
    $request->subaccount->id = 'eum';
    $request->subaccount->kind = 'maiores';
    $request->subaccount->name = 'Ada Ebert';
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'aliquam';
    $request->key = 'laboriosam';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->profileId = 'adipisci';
    $request->quotaUser = 'autem';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new DfareportingSubaccountsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subaccounts->dfareportingSubaccountsInsert($request, $requestSecurity);

    if ($response->subaccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingSubaccountsList

Gets a list of subaccounts, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingSubaccountsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'architecto';
    $request->ids = [
        'id',
    ];
    $request->key = 'voluptatem';
    $request->maxResults = 604011;
    $request->oauthToken = 'et';
    $request->pageToken = 'cum';
    $request->prettyPrint = false;
    $request->profileId = 'dolor';
    $request->quotaUser = 'necessitatibus';
    $request->searchString = 'porro';
    $request->sortField = DfareportingSubaccountsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingSubaccountsListSortOrderEnum::DESCENDING;
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new DfareportingSubaccountsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subaccounts->dfareportingSubaccountsList($request, $requestSecurity);

    if ($response->subaccountsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingSubaccountsPatch

Updates an existing subaccount. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subaccount;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingSubaccountsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->subaccount = new Subaccount();
    $request->subaccount->accountId = 'nisi';
    $request->subaccount->availablePermissionIds = [
        'nulla',
    ];
    $request->subaccount->id = 'necessitatibus';
    $request->subaccount->kind = 'illo';
    $request->subaccount->name = 'Mrs. Virgil Strosin';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'voluptates';
    $request->id = '521f9030-3dfc-4338-b97f-ffa6d1d32090';
    $request->key = 'doloribus';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->profileId = 'quasi';
    $request->quotaUser = 'ullam';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new DfareportingSubaccountsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subaccounts->dfareportingSubaccountsPatch($request, $requestSecurity);

    if ($response->subaccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingSubaccountsUpdate

Updates an existing subaccount.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subaccount;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingSubaccountsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->subaccount = new Subaccount();
    $request->subaccount->accountId = 'molestias';
    $request->subaccount->availablePermissionIds = [
        'accusamus',
        'dicta',
        'sint',
        'ex',
    ];
    $request->subaccount->id = 'vitae';
    $request->subaccount->kind = 'eligendi';
    $request->subaccount->name = 'Enrique Reichert';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'atque';
    $request->fields = 'nisi';
    $request->key = 'omnis';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->profileId = 'facere';
    $request->quotaUser = 'ducimus';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new DfareportingSubaccountsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subaccounts->dfareportingSubaccountsUpdate($request, $requestSecurity);

    if ($response->subaccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
