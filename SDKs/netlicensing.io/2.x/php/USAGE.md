<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLicenseRequestBody();
    $request->active = false;
    $request->currency = 'corrupti';
    $request->hidden = false;
    $request->licenseTemplateNumber = 'provident';
    $request->licenseeNumber = 'distinctio';
    $request->name = 'Stuart Stiedemann';
    $request->number = 'vel';
    $request->parentfeature = 'error';
    $request->price = 6458.94;
    $request->quantity = 'suscipit';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T09:35:47.986Z');
    $request->timeVolume = 'debitis';
    $request->timeVolumePeriod = 'ipsa';
    $request->usedQuantity = 'delectus';

    $requestSecurity = new CreateLicenseSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->license->createLicense($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->