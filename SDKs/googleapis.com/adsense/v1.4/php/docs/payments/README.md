# payments

### Available Operations

* [adsensePaymentsList](#adsensepaymentslist) - List the payments for this AdSense account.

## adsensePaymentsList

List the payments for this AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensePaymentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensePaymentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsensePaymentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsensePaymentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensePaymentsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'accusantium';
    $request->key = 'consequuntur';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->userIp = 'magni';

    $requestSecurity = new AdsensePaymentsListSecurity();
    $requestSecurity->option1 = new AdsensePaymentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payments->adsensePaymentsList($request, $requestSecurity);

    if ($response->payments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
