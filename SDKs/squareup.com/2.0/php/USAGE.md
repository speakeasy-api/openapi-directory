<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RegisterDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterDomainSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterDomainRequest();
    $request->domainName = 'corrupti';

    $requestSecurity = new RegisterDomainSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applePay->registerDomain($request, $requestSecurity);

    if ($response->registerDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->