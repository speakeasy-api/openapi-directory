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
    $request->accessToken = 'eos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eligendi';
    $request->fields = 'facere';
    $request->id = '9c5afdd0-4c37-4525-92be-ae1d87ecc5fd';
    $request->key = 'quod';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->profileId = 'animi';
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'molestiae';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->subaccount = new Subaccount();
    $request->subaccount->accountId = 'voluptatum';
    $request->subaccount->availablePermissionIds = [
        'adipisci',
        'et',
        'et',
    ];
    $request->subaccount->id = 'commodi';
    $request->subaccount->kind = 'laboriosam';
    $request->subaccount->name = 'Francis Swaniawski';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'cumque';
    $request->key = 'sunt';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->profileId = 'rem';
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'nisi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'quibusdam';
    $request->ids = [
        'explicabo',
        'magni',
    ];
    $request->key = 'molestiae';
    $request->maxResults = 500133;
    $request->oauthToken = 'laboriosam';
    $request->pageToken = 'aliquid';
    $request->prettyPrint = false;
    $request->profileId = 'quibusdam';
    $request->quotaUser = 'quidem';
    $request->searchString = 'molestias';
    $request->sortField = DfareportingSubaccountsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingSubaccountsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'perspiciatis';

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
    $request->subaccount->accountId = 'consectetur';
    $request->subaccount->availablePermissionIds = [
        'totam',
        'incidunt',
        'exercitationem',
    ];
    $request->subaccount->id = 'quasi';
    $request->subaccount->kind = 'beatae';
    $request->subaccount->name = 'Sylvester King';
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'alias';
    $request->fields = 'eligendi';
    $request->id = '004b5bb7-58cc-4945-a2f0-069685fcd1a1';
    $request->key = 'nihil';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->profileId = 'illum';
    $request->quotaUser = 'laudantium';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'libero';

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
    $request->subaccount->accountId = 'saepe';
    $request->subaccount->availablePermissionIds = [
        'modi',
    ];
    $request->subaccount->id = 'tenetur';
    $request->subaccount->kind = 'explicabo';
    $request->subaccount->name = 'Max Dietrich';
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloremque';
    $request->fields = 'odio';
    $request->key = 'ratione';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->profileId = 'eligendi';
    $request->quotaUser = 'expedita';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'magni';

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
