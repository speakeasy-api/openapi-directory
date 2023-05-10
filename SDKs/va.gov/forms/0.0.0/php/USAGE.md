<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindFormByFormNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindFormByFormNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindFormByFormNameRequest();
    $request->formName = 'corrupti';

    $requestSecurity = new FindFormByFormNameSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->forms->findFormByFormName($request, $requestSecurity);

    if ($response->findFormByFormName200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->