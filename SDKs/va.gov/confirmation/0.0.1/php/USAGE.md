<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\VeteranStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\VeteranStatusRequestGenderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVeteranStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VeteranStatusRequest();
    $request->birthDate = '1965-01-01';
    $request->firstName = 'John';
    $request->gender = VeteranStatusRequestGenderEnum::M;
    $request->lastName = 'Doe';
    $request->middleName = 'Theodore';
    $request->ssn = '555-55-5555';

    $requestSecurity = new GetVeteranStatusSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->veteranConfirmationStatus->getVeteranStatus($request, $requestSecurity);

    if ($response->veteranStatusConfirmation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->