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
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reprehenderit';
    $request->fields = 'est';
    $request->id = '089fc44d-b274-4530-a5cc-7c6d0cbcfdcd';
    $request->key = 'consectetur';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->profileId = 'modi';
    $request->quotaUser = 'facilis';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'repellat';

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
    $request->subaccount->accountId = 'fugit';
    $request->subaccount->availablePermissionIds = [
        'tempore',
    ];
    $request->subaccount->id = 'minus';
    $request->subaccount->kind = 'repudiandae';
    $request->subaccount->name = 'Angelo Quigley MD';
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quis';
    $request->fields = 'earum';
    $request->key = 'voluptatem';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->profileId = 'officia';
    $request->quotaUser = 'quas';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'sint';

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
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->fields = 'nulla';
    $request->ids = [
        'ullam',
    ];
    $request->key = 'incidunt';
    $request->maxResults = 538258;
    $request->oauthToken = 'nisi';
    $request->pageToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->profileId = 'odio';
    $request->quotaUser = 'libero';
    $request->searchString = 'aliquam';
    $request->sortField = DfareportingSubaccountsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingSubaccountsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'expedita';

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
    $request->subaccount->accountId = 'magni';
    $request->subaccount->availablePermissionIds = [
        'et',
        'molestiae',
        'ea',
        'assumenda',
    ];
    $request->subaccount->id = 'placeat';
    $request->subaccount->kind = 'illo';
    $request->subaccount->name = 'Bradley Feil';
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquid';
    $request->fields = 'illo';
    $request->id = 'd171157c-be5e-4e4f-b211-840772f32e3b';
    $request->key = 'incidunt';
    $request->oauthToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->profileId = 'pariatur';
    $request->quotaUser = 'facilis';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'alias';

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
    $request->subaccount->accountId = 'fugit';
    $request->subaccount->availablePermissionIds = [
        'harum',
    ];
    $request->subaccount->id = 'voluptate';
    $request->subaccount->kind = 'distinctio';
    $request->subaccount->name = 'Hope Mertz';
    $request->accessToken = 'quas';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquid';
    $request->fields = 'saepe';
    $request->key = 'facere';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->profileId = 'fugiat';
    $request->quotaUser = 'eius';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'odio';

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
