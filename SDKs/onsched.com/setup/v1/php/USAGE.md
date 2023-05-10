<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1AppointmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1AppointmentsRequest();
    $request->bookedBy = 'corrupti';
    $request->calendarId = 'provident';
    $request->customerId = 'distinctio';
    $request->email = 'Leda_Stiedemann@hotmail.com';
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-18T09:34:54.894Z');
    $request->lastname = 'Oberbrunner';
    $request->limit = 384382;
    $request->locationId = 'iure';
    $request->offset = 297534;
    $request->resourceId = 'debitis';
    $request->serviceAllocationId = 'ipsa';
    $request->serviceId = 'delectus';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-14T01:03:07.567Z');
    $request->status = 'molestiae';

    $response = $sdk->appointments->getSetupV1Appointments($request);

    if ($response->appointmentListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->