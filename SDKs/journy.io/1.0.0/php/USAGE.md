<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddUserToAccountRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AddUserToAccountRequestBodyAccount;
use \OpenAPI\OpenAPI\Models\Operations\AddUserToAccountRequestBodyUsers;
use \OpenAPI\OpenAPI\Models\Operations\AddUserToAccountRequestBodyUsersIdentification;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddUserToAccountRequestBody();
    $request->account = new AddUserToAccountRequestBodyAccount();
    $request->account->accountId = 'corrupti';
    $request->account->domain = 'provident';
    $request->users = [
        new AddUserToAccountRequestBodyUsers(),
        new AddUserToAccountRequestBodyUsers(),
        new AddUserToAccountRequestBodyUsers(),
    ];

    $response = $sdk->accounts->addUserToAccount($request);

    if ($response->addUserToAccount201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->