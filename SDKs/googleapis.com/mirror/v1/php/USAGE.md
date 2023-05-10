<!-- Start SDK Example Usage -->
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
        new AuthToken(),
        new AuthToken(),
    ];
    $request->account->features = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->account->password = 'nulla';
    $request->account->userData = [
        new UserData(),
        new UserData(),
        new UserData(),
    ];
    $request->accountName = 'illum';
    $request->accountType = 'vel';
    $request->alt = AltEnum::JSON;
    $request->fields = 'error';
    $request->key = 'deserunt';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->userIp = 'magnam';
    $request->userToken = 'debitis';

    $response = $sdk->accounts->mirrorAccountsInsert($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->