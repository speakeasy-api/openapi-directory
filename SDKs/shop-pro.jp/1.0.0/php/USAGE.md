<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsageChargeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsageChargeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsageChargeRequestBodyUsageCharge;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsageChargeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUsageChargeRequest();
    $request->requestBody = new CreateUsageChargeRequestBody();
    $request->requestBody->usageCharge = new CreateUsageChargeRequestBodyUsageCharge();
    $request->requestBody->usageCharge->description = '2019/4 メール送信分';
    $request->requestBody->usageCharge->point = 100;
    $request->xAppstoreUsageChargeToken = 'corrupti';
    $request->recurringApplicationChargeId = 'provident';

    $requestSecurity = new CreateUsageChargeSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applicationCharge->createUsageCharge($request, $requestSecurity);

    if ($response->createUsageCharge201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->