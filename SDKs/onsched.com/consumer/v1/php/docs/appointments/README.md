# appointments

### Available Operations

* [deleteConsumerV1AppointmentsId](#deleteconsumerv1appointmentsid) - Delete Appointment
* [getConsumerV1Appointments](#getconsumerv1appointments) - Get Appointments
* [getConsumerV1AppointmentsBookingfields](#getconsumerv1appointmentsbookingfields) - Get Custom Fields Labels
* [getConsumerV1AppointmentsCustomfields](#getconsumerv1appointmentscustomfields) - Get Custom Fields List
* [getConsumerV1AppointmentsId](#getconsumerv1appointmentsid) - Get Appointment
* [postConsumerV1Appointments](#postconsumerv1appointments) - Create Appointment
* [putConsumerV1AppointmentsIdBook](#putconsumerv1appointmentsidbook) - Book Appointment
* [putConsumerV1AppointmentsIdCancel](#putconsumerv1appointmentsidcancel) - Cancel Appointment
* [putConsumerV1AppointmentsIdConfirm](#putconsumerv1appointmentsidconfirm) - Confirm Appointment
* [putConsumerV1AppointmentsIdNoshow](#putconsumerv1appointmentsidnoshow) - Set NoShow Status
* [putConsumerV1AppointmentsIdReschedule](#putconsumerv1appointmentsidreschedule) - Reschedule Appointment
* [putConsumerV1AppointmentsIdReserve](#putconsumerv1appointmentsidreserve) - Reserve Appointment

## deleteConsumerV1AppointmentsId

<p>Use this endpoint to permanently <b>Delete</b> an appointment. Only appointments with a of "IN" status, initial, can be deleted. Past dated appointments cannot be deleted. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint.</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConsumerV1AppointmentsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConsumerV1AppointmentsIdRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $response = $sdk->appointments->deleteConsumerV1AppointmentsId($request);

    if ($response->appointmentViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1Appointments

<p>Use this endpoint to return a <b>List of Appointments</b>. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1AppointmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1AppointmentsRequest();
    $request->bookedBy = 'impedit';
    $request->calendarId = 'cum';
    $request->customerId = 'esse';
    $request->email = 'Keshaun32@gmail.com';
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-13T17:41:46.141Z');
    $request->lastname = 'Moore';
    $request->limit = 222321;
    $request->locationId = 'natus';
    $request->offset = 386489;
    $request->phone = '964.464.9600 x96661';
    $request->resourceId = 'dolorem';
    $request->serviceAllocationId = 'corporis';
    $request->serviceId = 'explicabo';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-20T14:32:34.011Z');
    $request->status = 'omnis';

    $response = $sdk->appointments->getConsumerV1Appointments($request);

    if ($response->appointmentListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1AppointmentsBookingfields

<p>Use this endpoint to return a locations <b>Appointment Booking Fields</b>. Appointment booking fields are stored with each Appointment record. They are used when you need additional information collected during your booking process. It is tied to an appointment/visit and will be stored in the appointment record. Use the field name, type, and length to determine how to update these field values when posting an appointment.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1AppointmentsBookingfieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1AppointmentsBookingfieldsRequest();
    $request->locationId = 'nemo';

    $response = $sdk->appointments->getConsumerV1AppointmentsBookingfields($request);

    if ($response->bookingFieldListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1AppointmentsCustomfields

<p>Use this endpoint to return a locations <b>Appointment Custom Field</b> definitions. Appointment custom fields are stored with each appointment. They are used when the information collected during the booking is specific to a particular appointment/visit. The response will list the custom fields used (customField1 - 10), the field type (string, number, date, boolean) and the length of each one.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1AppointmentsCustomfieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1AppointmentsCustomfieldsRequest();
    $request->locationId = 'minima';

    $response = $sdk->appointments->getConsumerV1AppointmentsCustomfields($request);

    if ($response->customFieldDefinitionListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1AppointmentsId

<p>Use this endpoint to return an <b>Appointment</b> object. A valid <b>appointment id</b> is required. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1AppointmentsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1AppointmentsIdRequest();
    $request->id = '907aff1a-3a2f-4a94-a773-9251aa52c3f5';

    $response = $sdk->appointments->getConsumerV1AppointmentsId($request);

    if ($response->appointmentViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConsumerV1Appointments

<p>Use this endpoint to <b>Create</b> a new appointment. The appointment will be created with an "IN", Initial status. Posting an appointment with "IN" status requires minimal information and requires a "PUT book" call to complete the booking transaction, <i>PUT ​/consumer​/v1​/appointments​/{id}​/book</i>. Alternatively, you can post an appointment using the <b>completeBooking</b> option which completes the booking in one transaction, but it will require more data. The method you choose depends on your solutions workflow. </p>
<p>
  <b>StartDateTime</b> and <b>EndDateTime</b> are required. Use the ISO 8601 format for DateTime Timezone, e.g., <b>2016-10-30T09:00:00-5:00</b></p>
<p>A valid <b>serviceId</b> is required. The serviceId provided must be valid for the location being booked. A valid serviceId is one that is scoped to a Primary Company Location or is associated with a Business Location</p>
<p>OPTIONAL FIELDS INCLUDE: </p>
<p>
  <b>locationId</b> - if not supplied, the appointment will be posted to the primary business location. If you support multiple location, we recommend always supplying the locationId. </p>
<p>
  <b>resourceId</b> - not required when posting with an "IN" status but is required when the appointment is booked. Use <i>GET /consumer/v1/resources</i> for a list of resources. </p>
<p>
  <b>customerId</b> - if supplied the name and email will be retrieved from the customer record. </p>
<p>
  <b>BookedBy</b> - if not supplied the email address of the booked appointment is used or the ip address if no email address is provided. BookedBy is used in the Appointment Audit trail which can be viewed in the appointment object.</p>
<p>
  <b>Location</b> - is a string value representing the location of the appointment. It provides no added functionality in OnSched and should not be confused with locationId.</p>
<p>
  <b>TimezoneName</b> - if used timezoneName must be in IANA format, <i>America/New_York</i>. This is the timezone the appointment was booked in. Populating this information can help later in situations where appointments are booked before a Daylight Savings change. If no timezoneName is supplied, the Business Locations timezone will be used.</p>
<p>
  <b>COMPLETE BOOKING:</b> This parameter provides a mechanism for immediate booking with the POST appointment endpoint. To complete the booking in one transaction, populate the <b>completeBooking</b> parameter with a "BK", booked or an "RS", reserved status and provide an (<b>email</b> and <b>name</b>) or a <b>customerId</b> in the post body. Doing so will book the appointment and send notifications all in one transaction. <b>Note:</b> "IN" can also be used as a completeBooking option to support payment flows. With the "IN" option, notifications are NOT sent.</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostConsumerV1AppointmentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppointmentInitialModel;
use \OpenAPI\OpenAPI\Models\Shared\BookingFieldItem;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConsumerV1AppointmentsRequest();
    $request->appointmentInitialModel = new AppointmentInitialModel();
    $request->appointmentInitialModel->appointmentBookingFields = [
        new BookingFieldItem(),
        new BookingFieldItem(),
        new BookingFieldItem(),
    ];
    $request->appointmentInitialModel->bookedBy = 'possimus';
    $request->appointmentInitialModel->bookingWindowId = 'aut';
    $request->appointmentInitialModel->calendarId = 'quasi';
    $request->appointmentInitialModel->customFields = new CustomFieldInputModel();
    $request->appointmentInitialModel->customFields->field1 = 'error';
    $request->appointmentInitialModel->customFields->field10 = 'temporibus';
    $request->appointmentInitialModel->customFields->field2 = 'laborum';
    $request->appointmentInitialModel->customFields->field3 = 'quasi';
    $request->appointmentInitialModel->customFields->field4 = 'reiciendis';
    $request->appointmentInitialModel->customFields->field5 = 'voluptatibus';
    $request->appointmentInitialModel->customFields->field6 = 'vero';
    $request->appointmentInitialModel->customFields->field7 = 'nihil';
    $request->appointmentInitialModel->customFields->field8 = 'praesentium';
    $request->appointmentInitialModel->customFields->field9 = 'voluptatibus';
    $request->appointmentInitialModel->customerBookingFields = [
        new BookingFieldItem(),
    ];
    $request->appointmentInitialModel->customerId = 'omnis';
    $request->appointmentInitialModel->customerMessage = 'voluptate';
    $request->appointmentInitialModel->email = 'Aiyana.Batz@hotmail.com';
    $request->appointmentInitialModel->endDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T09:14:02.538Z');
    $request->appointmentInitialModel->groupSize = 359444;
    $request->appointmentInitialModel->location = 'dolore';
    $request->appointmentInitialModel->locationId = 'iusto';
    $request->appointmentInitialModel->name = 'Maryann Hamill';
    $request->appointmentInitialModel->notes = 'repudiandae';
    $request->appointmentInitialModel->phone = '(365) 682-5590';
    $request->appointmentInitialModel->phoneType = 'repudiandae';
    $request->appointmentInitialModel->resourceGroupId = 'sint';
    $request->appointmentInitialModel->resourceId = 'veritatis';
    $request->appointmentInitialModel->resourceIds = 'itaque';
    $request->appointmentInitialModel->serviceAllocationId = 'incidunt';
    $request->appointmentInitialModel->serviceId = 'enim';
    $request->appointmentInitialModel->startDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-02T09:29:06.042Z');
    $request->appointmentInitialModel->timezoneName = 'quibusdam';
    $request->appointmentInitialModel->travelAppointmentId = 'explicabo';
    $request->appointmentInitialModel->travelTimeMins = 647174;
    $request->completeBooking = 'distinctio';

    $response = $sdk->appointments->postConsumerV1Appointments($request);

    if ($response->appointmentInitialViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConsumerV1AppointmentsIdBook

<p>Use this endpoint to <b>Book</b> an appointment. Only appointments with an "IN" status, Initial, can be booked. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint. Other pertinent fields can also be updated at the time of booking by including them in the post body. <b>Note: If no name or email address was provided in the initial Post Appointment, it will be required in the post body.</b></p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConsumerV1AppointmentsIdBookRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppointmentBookModel;
use \OpenAPI\OpenAPI\Models\Shared\BookingFieldItem;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConsumerV1AppointmentsIdBookRequest();
    $request->appointmentBookModel = new AppointmentBookModel();
    $request->appointmentBookModel->appointmentBookingFields = [
        new BookingFieldItem(),
        new BookingFieldItem(),
        new BookingFieldItem(),
        new BookingFieldItem(),
    ];
    $request->appointmentBookModel->customFields = new CustomFieldInputModel();
    $request->appointmentBookModel->customFields->field1 = 'labore';
    $request->appointmentBookModel->customFields->field10 = 'modi';
    $request->appointmentBookModel->customFields->field2 = 'qui';
    $request->appointmentBookModel->customFields->field3 = 'aliquid';
    $request->appointmentBookModel->customFields->field4 = 'cupiditate';
    $request->appointmentBookModel->customFields->field5 = 'quos';
    $request->appointmentBookModel->customFields->field6 = 'perferendis';
    $request->appointmentBookModel->customFields->field7 = 'magni';
    $request->appointmentBookModel->customFields->field8 = 'assumenda';
    $request->appointmentBookModel->customFields->field9 = 'ipsam';
    $request->appointmentBookModel->customerBookingFields = [
        new BookingFieldItem(),
    ];
    $request->appointmentBookModel->customerMessage = 'fugit';
    $request->appointmentBookModel->email = 'Kevin_Glover28@hotmail.com';
    $request->appointmentBookModel->groupSize = 962189;
    $request->appointmentBookModel->name = 'Ethel Roob';
    $request->appointmentBookModel->notes = 'provident';
    $request->appointmentBookModel->phone = '1-662-996-4489 x61278';
    $request->appointmentBookModel->phoneExt = 'ea';
    $request->appointmentBookModel->phoneType = 'aliquid';
    $request->id = 'ae395efb-9ba8-48f3-a669-97074ba4469b';

    $response = $sdk->appointments->putConsumerV1AppointmentsIdBook($request);

    if ($response->appointmentViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConsumerV1AppointmentsIdCancel

<p>Use this endpoint to <b>Cancel</b> an appointment booking or reservation. Only appointments with a "BK", booked or "RS", reserved status can be cancelled. Past dated appointments cannot be cancelled. A valid <b>appointment id</b> is required. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConsumerV1AppointmentsIdCancelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConsumerV1AppointmentsIdCancelRequest();
    $request->id = '6e214195-9890-4afa-963e-2516fe4c8b71';

    $response = $sdk->appointments->putConsumerV1AppointmentsIdCancel($request);

    if ($response->appointmentViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConsumerV1AppointmentsIdConfirm

<p>Use this endpoint to <b>Confirm</b> an appointment. This updates the boolean confirmed field to TRUE. <b>NOTE:</b> If the appointment status is set to "RS", Reserved, it also updates the status of the appointment to "BK", Booked. </p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConsumerV1AppointmentsIdConfirmRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConsumerV1AppointmentsIdConfirmRequest();
    $request->id = 99569;
    $request->undo = false;

    $response = $sdk->appointments->putConsumerV1AppointmentsIdConfirm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConsumerV1AppointmentsIdNoshow

<p>Use this endpoint to change the status of an appointment from "BK", Booked to <b>"NS", NoShow</b>. This gives API consumers a way to internally track No Show appointments. It provides no added functionality in OnSched.</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConsumerV1AppointmentsIdNoshowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConsumerV1AppointmentsIdNoshowRequest();
    $request->requestBody = [
        'ullam' => 'expedita',
        'nihil' => 'repellat',
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
    ];
    $request->id = 37559;

    $response = $sdk->appointments->putConsumerV1AppointmentsIdNoshow($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConsumerV1AppointmentsIdReschedule

<p>Use this endpoint to <b>Reschedule</b> an appointment booking. Only appointments in "BK", booked status, can be Rescheduled. Past dated appointments cannot be rescheduled. A valid <b>appointment id</b> is required.</p>
<p>The <b>StartDateTime</b> and <b>EndDateTime</b> are required. Use the ISO 8601 format for DateTime Timezone, e.g., <b>2016-10-30T09:00:00-5:00</b>.</p>
<p>The serviceId is optional. If changing the <b>serviceId</b>, the new service id's duration must match the original service's duration.</p>
<p>The resourceId is optional. If changing the <b>resourceId</b>, verify the availability of the new resource prior to rescheduling.</p>
<p>
  <b>IMPORTANT:</b> Always run availability before rescheduling an appointment to verify the timeslot is open and available for the new time, service and/or resource requested. This is the only way to assure the slot is available. You cannot reschedule an appointment to a different location. If necessary, you should cancel and then book an appointment in the other location.</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConsumerV1AppointmentsIdRescheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppointmentRescheduleModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConsumerV1AppointmentsIdRescheduleRequest();
    $request->appointmentRescheduleModel = new AppointmentRescheduleModel();
    $request->appointmentRescheduleModel->endDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T11:09:23.468Z');
    $request->appointmentRescheduleModel->resourceId = 'natus';
    $request->appointmentRescheduleModel->resourceIds = 'magni';
    $request->appointmentRescheduleModel->serviceId = 'sunt';
    $request->appointmentRescheduleModel->startDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-16T10:20:37.479Z');
    $request->appointmentRescheduleModel->travelAppointmentId = 'pariatur';
    $request->appointmentRescheduleModel->travelTimeMins = 807319;
    $request->id = '692601fb-576b-40d5-b0d3-0c5fbb258705';

    $response = $sdk->appointments->putConsumerV1AppointmentsIdReschedule($request);

    if ($response->appointmentViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConsumerV1AppointmentsIdReserve

<p>Use this endpoint to <b>Reserve</b> an appointment. Only appointments with an "IN" status, Initial, can be reserved. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint.</p>
<p>
  <b>NOTE: Reservations are different from Bookings as reservations are a two-step booking process that must be managed by the API consumer.</b> An appointment that is reserved is not completely booked until other business conditions have been met. For example, an appointment may be reserved if it is not yet assigned to a resource or until the customer or resource explicitly confirms it.</p>
<p>With reservations you have the ability to notify the customer of a reservation prior to officially booking and the workflow can be designed to indicate what conditions will need to be met in order to convert the reservation to a complete booking. A reservation converts to a complete booking when it is either Confirmed or Booked. </p>
<p>
  <b>IMPORTANT: A reserved appointment time will not be released, i.e., become available to others, until it is Cancelled. The booking timer is not used with reserved appointments.</b>
</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConsumerV1AppointmentsIdReserveRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppointmentReserveModel;
use \OpenAPI\OpenAPI\Models\Shared\BookingFieldItem;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConsumerV1AppointmentsIdReserveRequest();
    $request->appointmentReserveModel = new AppointmentReserveModel();
    $request->appointmentReserveModel->appointmentBookingFields = [
        new BookingFieldItem(),
    ];
    $request->appointmentReserveModel->customFields = new CustomFieldInputModel();
    $request->appointmentReserveModel->customFields->field1 = 'eos';
    $request->appointmentReserveModel->customFields->field10 = 'perferendis';
    $request->appointmentReserveModel->customFields->field2 = 'dolores';
    $request->appointmentReserveModel->customFields->field3 = 'minus';
    $request->appointmentReserveModel->customFields->field4 = 'quam';
    $request->appointmentReserveModel->customFields->field5 = 'dolor';
    $request->appointmentReserveModel->customFields->field6 = 'vero';
    $request->appointmentReserveModel->customFields->field7 = 'nostrum';
    $request->appointmentReserveModel->customFields->field8 = 'hic';
    $request->appointmentReserveModel->customFields->field9 = 'recusandae';
    $request->appointmentReserveModel->customerBookingFields = [
        new BookingFieldItem(),
        new BookingFieldItem(),
        new BookingFieldItem(),
    ];
    $request->appointmentReserveModel->customerMessage = 'facilis';
    $request->appointmentReserveModel->email = 'Alexandria50@yahoo.com';
    $request->appointmentReserveModel->name = 'Gary Mayert';
    $request->appointmentReserveModel->notes = 'asperiores';
    $request->appointmentReserveModel->phone = '1-466-685-7793 x53222';
    $request->appointmentReserveModel->phoneExt = 'qui';
    $request->appointmentReserveModel->phoneType = 'ipsum';
    $request->id = 'f9b77f3a-4100-4674-abf6-9280d1ba77a8';
    $request->sendNotifications = false;

    $response = $sdk->appointments->putConsumerV1AppointmentsIdReserve($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
