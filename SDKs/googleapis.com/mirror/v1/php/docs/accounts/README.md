# accounts

### Available Operations

* [mirrorAccountsInsert](#mirroraccountsinsert) - Inserts a new account for a user

## mirrorAccountsInsert

Inserts a new account for a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorAccountsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Account;
use \OpenAPI\OpenAPI\Models\Shared\AuthToken;
use \OpenAPI\OpenAPI\Models\Shared\UserData;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorAccountsInsertRequest();
    $request->account = new Account();
    $request->account->authTokens = [
        new AuthToken(),
    ];
    $request->account->features = [
        'tempora',
        'suscipit',
        'molestiae',
        'minus',
    ];
    $request->account->password = 'placeat';
    $request->account->userData = [
        new UserData(),
        new UserData(),
        new UserData(),
    ];
    $request->accountName = 'iusto';
    $request->accountType = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->fields = 'nisi';
    $request->key = 'recusandae';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->userIp = 'quis';
    $request->userToken = 'veritatis';

    $response = $sdk->accounts->mirrorAccountsInsert($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
