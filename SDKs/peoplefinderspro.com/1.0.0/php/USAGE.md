<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequestBodyAddress;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRequest();
    $request->requestBody = new SearchRequestBody();
    $request->requestBody->address = new SearchRequestBodyAddress();
    $request->requestBody->address->addressLine1 = 'corrupti';
    $request->requestBody->address->addressLine2 = 'provident';
    $request->requestBody->age = 7151.9;
    $request->requestBody->dob = 'quibusdam';
    $request->requestBody->email = 'Ryan.Little62@yahoo.com';
    $request->requestBody->firstName = 'Luna';
    $request->requestBody->lastName = 'Hoppe';
    $request->requestBody->middleName = 'iure';
    $request->requestBody->phoneNumber = 'magnam';
    $request->galaxyApName = 'debitis';
    $request->galaxyApPassword = 'ipsa';
    $request->galaxySearchType = 'delectus';

    $response = $sdk->search($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->