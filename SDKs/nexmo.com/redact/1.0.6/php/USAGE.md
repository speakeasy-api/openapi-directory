<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RedactTransaction;
use \OpenAPI\OpenAPI\Models\Shared\RedactTransactionProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\RedactTransactionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\RedactMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedactTransaction();
    $request->id = '209ab3c7536542b91e8b5aef032f6861';
    $request->product = RedactTransactionProductEnum::SMS;
    $request->type = RedactTransactionTypeEnum::OUTBOUND;

    $requestSecurity = new RedactMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->redactMessage($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->