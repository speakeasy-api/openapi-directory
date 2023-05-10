<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContentRequest();
    $request->sid = 'corrupti';

    $requestSecurity = new DeleteContentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->deleteContent($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->