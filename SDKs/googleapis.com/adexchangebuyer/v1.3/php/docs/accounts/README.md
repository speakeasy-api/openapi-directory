# accounts

### Available Operations

* [adexchangebuyerAccountsGet](#adexchangebuyeraccountsget) - Gets one account by ID.
* [adexchangebuyerAccountsList](#adexchangebuyeraccountslist) - Retrieves the authenticated user's list of accounts.
* [adexchangebuyerAccountsPatch](#adexchangebuyeraccountspatch) - Updates an existing account. This method supports patch semantics.
* [adexchangebuyerAccountsUpdate](#adexchangebuyeraccountsupdate) - Updates an existing account.

## adexchangebuyerAccountsGet

Gets one account by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerAccountsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerAccountsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerAccountsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'corrupti';
    $request->id = 847252;
    $request->key = 'vel';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->userIp = 'suscipit';

    $requestSecurity = new AdexchangebuyerAccountsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyerAccountsGet($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerAccountsList

Retrieves the authenticated user's list of accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerAccountsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerAccountsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerAccountsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'iure';
    $request->key = 'magnam';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->userIp = 'delectus';

    $requestSecurity = new AdexchangebuyerAccountsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyerAccountsList($request, $requestSecurity);

    if ($response->accountsList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerAccountsPatch

Updates an existing account. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerAccountsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Account;
use \OpenAPI\OpenAPI\Models\Shared\AccountBidderLocation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerAccountsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerAccountsPatchRequest();
    $request->account = new Account();
    $request->account->bidderLocation = [
        new AccountBidderLocation(),
        new AccountBidderLocation(),
    ];
    $request->account->cookieMatchingNid = 'suscipit';
    $request->account->cookieMatchingUrl = 'molestiae';
    $request->account->id = 791725;
    $request->account->kind = 'placeat';
    $request->account->maximumActiveCreatives = 528895;
    $request->account->maximumTotalQps = 479977;
    $request->account->numberActiveCreatives = 568045;
    $request->alt = AltEnum::JSON;
    $request->fields = 'nisi';
    $request->id = 925597;
    $request->key = 'temporibus';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->userIp = 'veritatis';

    $requestSecurity = new AdexchangebuyerAccountsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyerAccountsPatch($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerAccountsUpdate

Updates an existing account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerAccountsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Account;
use \OpenAPI\OpenAPI\Models\Shared\AccountBidderLocation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerAccountsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerAccountsUpdateRequest();
    $request->account = new Account();
    $request->account->bidderLocation = [
        new AccountBidderLocation(),
        new AccountBidderLocation(),
        new AccountBidderLocation(),
    ];
    $request->account->cookieMatchingNid = 'perferendis';
    $request->account->cookieMatchingUrl = 'ipsam';
    $request->account->id = 832620;
    $request->account->kind = 'sapiente';
    $request->account->maximumActiveCreatives = 778157;
    $request->account->maximumTotalQps = 140350;
    $request->account->numberActiveCreatives = 870013;
    $request->alt = AltEnum::JSON;
    $request->fields = 'at';
    $request->id = 978619;
    $request->key = 'molestiae';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->userIp = 'esse';

    $requestSecurity = new AdexchangebuyerAccountsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyerAccountsUpdate($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
