# appointments

### Available Operations

* [getSetupV1Appointments](#getsetupv1appointments) - List Appointments
* [getSetupV1AppointmentsId](#getsetupv1appointmentsid) - Get Appointment
* [putSetupV1AppointmentsIdReassignResourceResourceId](#putsetupv1appointmentsidreassignresourceresourceid) - Reassign Appointment

## getSetupV1Appointments

<p>Use this endpoint to return a <b>List of Appointments</b>. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

### Example Usage

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
    $request->bookedBy = 'minus';
    $request->calendarId = 'placeat';
    $request->customerId = 'voluptatum';
    $request->email = 'Kenyon_Huel7@yahoo.com';
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T04:44:49.578Z');
    $request->lastname = 'O'Connell';
    $request->limit = 20218;
    $request->locationId = 'ipsam';
    $request->offset = 832620;
    $request->resourceId = 'sapiente';
    $request->serviceAllocationId = 'quo';
    $request->serviceId = 'odit';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-23T06:06:25.221Z');
    $request->status = 'maiores';

    $response = $sdk->appointments->getSetupV1Appointments($request);

    if ($response->appointmentListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1AppointmentsId

<p>Use this endpoint to return an <b>Appointment</b> object. A valid <b>appointment id</b> is required. Find appointment id's by using the <i>GET​/setup​/v1​/appointments</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1AppointmentsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1AppointmentsIdRequest();
    $request->id = '7cc78ca1-ba92-48fc-8167-42cb73920592';

    $response = $sdk->appointments->getSetupV1AppointmentsId($request);

    if ($response->appointmentViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1AppointmentsIdReassignResourceResourceId

<p>Use this endpoint to <b>Reassign</b> an appointment from one resource to another. The result returned is a single appointment that was reassigned to the target resource. A valid <b>appointment id</b> and <b>resource id</b> is required. Find appointment id's by using the <i>GET /setup/v1/appointments</i> endpoint, find resource id's by using the <i>GET ​/setup​/v1​/resources</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1AppointmentsIdReassignResourceResourceIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1AppointmentsIdReassignResourceResourceIdRequest();
    $request->id = '9396fea7-596e-4b10-baaa-2352c5955907';
    $request->resourceId = 'culpa';

    $response = $sdk->appointments->putSetupV1AppointmentsIdReassignResourceResourceId($request);

    if ($response->appointmentViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
