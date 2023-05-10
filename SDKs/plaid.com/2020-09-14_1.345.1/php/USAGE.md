<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AccountsBalanceGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountsBalanceGetRequestOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountsBalanceGetRequest();
    $request->accessToken = 'corrupti';
    $request->clientId = 'provident';
    $request->options = new AccountsBalanceGetRequestOptions();
    $request->options->accountIds = [
        'quibusdam',
        'unde',
        'nulla',
    ];
    $request->options->minLastUpdatedDatetime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-22T12:08:58.275Z');
    $request->secret = 'vel';

    $response = $sdk->plaid->accountsBalanceGet($request);

    if ($response->accountsGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->