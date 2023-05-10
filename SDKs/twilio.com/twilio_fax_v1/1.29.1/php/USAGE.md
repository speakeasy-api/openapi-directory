<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFaxRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFaxSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFaxRequest();
    $request->sid = 'corrupti';

    $requestSecurity = new DeleteFaxSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->deleteFax($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->