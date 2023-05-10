<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdclientsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdclientsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAccountsAdclientsGetRequest();
    $request->accountId = 'corrupti';
    $request->adClientId = 'provident';
    $request->alt = AltEnum::JSON;
    $request->fields = 'quibusdam';
    $request->key = 'unde';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->quotaUser = 'corrupti';
    $request->userIp = 'illum';

    $requestSecurity = new AdsensehostAccountsAdclientsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsensehostAccountsAdclientsGet($request, $requestSecurity);

    if ($response->adClient !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->