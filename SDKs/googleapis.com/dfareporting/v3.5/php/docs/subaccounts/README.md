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
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'pariatur';
    $request->id = '6f093a3e-fa46-4d36-adfa-1011a091b3ec';
    $request->key = 'laudantium';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->profileId = 'exercitationem';
    $request->quotaUser = 'velit';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'nisi';

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
    $request->subaccount->accountId = 'nulla';
    $request->subaccount->availablePermissionIds = [
        'illo',
        'fuga',
        'molestias',
        'at',
    ];
    $request->subaccount->id = 'vitae';
    $request->subaccount->kind = 'aliquam';
    $request->subaccount->name = 'Darrel Kiehn';
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'illo';
    $request->fields = 'asperiores';
    $request->key = 'iste';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->profileId = 'velit';
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'possimus';

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
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'non';
    $request->fields = 'laudantium';
    $request->ids = [
        'natus',
    ];
    $request->key = 'molestiae';
    $request->maxResults = 968768;
    $request->oauthToken = 'hic';
    $request->pageToken = 'hic';
    $request->prettyPrint = false;
    $request->profileId = 'error';
    $request->quotaUser = 'ea';
    $request->searchString = 'repellendus';
    $request->sortField = DfareportingSubaccountsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingSubaccountsListSortOrderEnum::DESCENDING;
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'aspernatur';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->subaccount = new Subaccount();
    $request->subaccount->accountId = 'occaecati';
    $request->subaccount->availablePermissionIds = [
        'doloribus',
    ];
    $request->subaccount->id = 'quo';
    $request->subaccount->kind = 'quasi';
    $request->subaccount->name = 'Delores O'Connell';
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'sint';
    $request->id = '61ce9be4-1c86-49dd-bd97-19d07b200a58';
    $request->key = 'delectus';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->profileId = 'temporibus';
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'suscipit';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->subaccount = new Subaccount();
    $request->subaccount->accountId = 'nulla';
    $request->subaccount->availablePermissionIds = [
        'laudantium',
        'sapiente',
        'facere',
        'laudantium',
    ];
    $request->subaccount->id = 'praesentium';
    $request->subaccount->kind = 'sed';
    $request->subaccount->name = 'Jaime Thompson DDS';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eos';
    $request->fields = 'perferendis';
    $request->key = 'eligendi';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->profileId = 'molestias';
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'officia';

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
