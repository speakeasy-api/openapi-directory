# diaryController

### Available Operations

* [diaryControllerAddFeedbackForm](#diarycontrolleraddfeedbackform) - Submit appointment feedback
* [diaryControllerAddFeedbackJson](#diarycontrolleraddfeedbackjson) - Submit appointment feedback
* [diaryControllerAddFeedbackRaw](#diarycontrolleraddfeedbackraw) - Submit appointment feedback
* [diaryControllerCancelAppointment](#diarycontrollercancelappointment) - Cancel an existing appointment using its unique identifier
* [diaryControllerDeleteAppointment](#diarycontrollerdeleteappointment) - Delete an existing appointment using its unique identifier
* [diaryControllerGetAllocations](#diarycontrollergetallocations) - Get a list of all available allocations for a date + 7 days for a specified appointment type
* [diaryControllerGetAppointment](#diarycontrollergetappointment) - Get an appointment by ID
* [diaryControllerGetAppointmentTypes](#diarycontrollergetappointmenttypes) - A collection of all diary appointment types
* [diaryControllerGetAppointmentsBetweenDates](#diarycontrollergetappointmentsbetweendates) - A collection of diary appointments linked to a company filtered between specific dates and by appointment type
* [diaryControllerGetRecurringAppointments](#diarycontrollergetrecurringappointments) - Retrieves all recurring appointments:-
* [diaryControllerPostAppointmentForm](#diarycontrollerpostappointmentform) - Post an appointment into a valid diary allocation
* [diaryControllerPostAppointmentJson](#diarycontrollerpostappointmentjson) - Post an appointment into a valid diary allocation
* [diaryControllerPostAppointmentRaw](#diarycontrollerpostappointmentraw) - Post an appointment into a valid diary allocation
* [diaryControllerPutAppointmentForm](#diarycontrollerputappointmentform) - Update an existing appointment using its unique identifier
* [diaryControllerPutAppointmentJson](#diarycontrollerputappointmentjson) - Update an existing appointment using its unique identifier
* [diaryControllerPutAppointmentRaw](#diarycontrollerputappointmentraw) - Update an existing appointment using its unique identifier
* [diaryControllerSearchGuest](#diarycontrollersearchguest) - Match Guest Parameters with existing applicants

## diaryControllerAddFeedbackForm

Submit appointment feedback

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerAddFeedbackFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeedbackSubmissionModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerAddFeedbackFormRequest();
    $request->feedbackSubmissionModel = new FeedbackSubmissionModel();
    $request->feedbackSubmissionModel->appointmentID = 'vel';
    $request->feedbackSubmissionModel->feedback = 'error';
    $request->feedbackSubmissionModel->propertyID = 'deserunt';
    $request->shortName = 'suscipit';

    $response = $sdk->diaryController->diaryControllerAddFeedbackForm($request);

    if ($response->diaryControllerAddFeedbackForm200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaryControllerAddFeedbackJson

Submit appointment feedback

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerAddFeedbackJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeedbackSubmissionModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerAddFeedbackJsonRequest();
    $request->feedbackSubmissionModel = new FeedbackSubmissionModel();
    $request->feedbackSubmissionModel->appointmentID = 'iure';
    $request->feedbackSubmissionModel->feedback = 'magnam';
    $request->feedbackSubmissionModel->propertyID = 'debitis';
    $request->shortName = 'ipsa';

    $response = $sdk->diaryController->diaryControllerAddFeedbackJson($request);

    if ($response->diaryControllerAddFeedbackJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaryControllerAddFeedbackRaw

Submit appointment feedback

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerAddFeedbackRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerAddFeedbackRawRequest();
    $request->requestBody = 'delectus';
    $request->shortName = 'tempora';

    $response = $sdk->diaryController->diaryControllerAddFeedbackRaw($request);

    if ($response->diaryControllerAddFeedbackRaw200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaryControllerCancelAppointment

Cancel an existing appointment using its unique identifier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerCancelAppointmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerCancelAppointmentRequest();
    $request->appointmentID = 'suscipit';
    $request->shortName = 'molestiae';

    $response = $sdk->diaryController->diaryControllerCancelAppointment($request);

    if ($response->diaryControllerCancelAppointment200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaryControllerDeleteAppointment

Delete an existing appointment using its unique identifier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerDeleteAppointmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerDeleteAppointmentRequest();
    $request->appointmentID = 'minus';
    $request->shortName = 'placeat';

    $response = $sdk->diaryController->diaryControllerDeleteAppointment($request);

    if ($response->diaryControllerDeleteAppointment200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaryControllerGetAllocations

Get a list of all available allocations for a date + 7 days for a specified appointment type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerGetAllocationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerGetAllocationsRequest();
    $request->appointmentType = 'voluptatum';
    $request->branchID = 'iusto';
    $request->lettings = false;
    $request->preferredDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-20T06:24:36.919Z');
    $request->propertyIdentifier = 'recusandae';
    $request->shortName = 'temporibus';

    $response = $sdk->diaryController->diaryControllerGetAllocations($request);

    if ($response->diaryBookingModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaryControllerGetAppointment

Get an appointment by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerGetAppointmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerGetAppointmentRequest();
    $request->appointmentID = 'ab';
    $request->shortName = 'quis';

    $response = $sdk->diaryController->diaryControllerGetAppointment($request);

    if ($response->diaryAppointmentModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaryControllerGetAppointmentTypes

A collection of all diary appointment types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerGetAppointmentTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerGetAppointmentTypesRequest();
    $request->count = 87129;
    $request->offset = 648172;
    $request->shortName = 'perferendis';

    $response = $sdk->diaryController->diaryControllerGetAppointmentTypes($request);

    if ($response->diaryAppointmentTypeModelResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaryControllerGetAppointmentsBetweenDates

A collection of diary appointments linked to a company filtered between specific dates and by appointment type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerGetAppointmentsBetweenDatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerGetAppointmentsBetweenDatesRequest();
    $request->appointmentTypesToSearch = [
        'repellendus',
        'sapiente',
    ];
    $request->branchID = 'quo';
    $request->count = 140350;
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-23T06:06:25.221Z');
    $request->offset = 978619;
    $request->shortName = 'molestiae';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-07T00:03:55.328Z');

    $response = $sdk->diaryController->diaryControllerGetAppointmentsBetweenDates($request);

    if ($response->diaryAppointmentModelResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaryControllerGetRecurringAppointments

Retrieves all recurring appointments:-

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerGetRecurringAppointmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerGetRecurringAppointmentsRequest();
    $request->appointmentTypesToSearch = [
        'totam',
        'porro',
    ];
    $request->branchID = 'dolorum';
    $request->count = 118274;
    $request->offset = 720633;
    $request->shortName = 'officia';

    $response = $sdk->diaryController->diaryControllerGetRecurringAppointments($request);

    if ($response->diaryAppointmentModelResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaryControllerPostAppointmentForm

Post an appointment into a valid diary allocation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerPostAppointmentFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\DiaryAppointmentDetails;
use \OpenAPI\OpenAPI\Models\Shared\DiaryBookingModel;
use \OpenAPI\OpenAPI\Models\Shared\DiaryGuestDetails;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerPostAppointmentFormRequest();
    $request->diaryAppointmentDetails = new DiaryAppointmentDetails();
    $request->diaryAppointmentDetails->allocationDetails = new DiaryBookingModel();
    $request->diaryAppointmentDetails->allocationDetails->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-18T08:27:00.721Z');
    $request->diaryAppointmentDetails->allocationDetails->staffID = 'deleniti';
    $request->diaryAppointmentDetails->allocationDetails->staffName = 'hic';
    $request->diaryAppointmentDetails->allocationDetails->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-08T13:49:32.889Z');
    $request->diaryAppointmentDetails->appointmentType = 'beatae';
    $request->diaryAppointmentDetails->extraComments = 'commodi';
    $request->diaryAppointmentDetails->guests = [
        new DiaryGuestDetails(),
        new DiaryGuestDetails(),
    ];
    $request->diaryAppointmentDetails->subject = 'modi';
    $request->lettings = false;
    $request->propertyIdentifier = [
        'impedit',
    ];
    $request->shortName = 'cum';

    $response = $sdk->diaryController->diaryControllerPostAppointmentForm($request);

    if ($response->diaryControllerPostAppointmentForm200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaryControllerPostAppointmentJson

Post an appointment into a valid diary allocation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerPostAppointmentJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\DiaryAppointmentDetails;
use \OpenAPI\OpenAPI\Models\Shared\DiaryBookingModel;
use \OpenAPI\OpenAPI\Models\Shared\DiaryGuestDetails;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerPostAppointmentJsonRequest();
    $request->diaryAppointmentDetails = new DiaryAppointmentDetails();
    $request->diaryAppointmentDetails->allocationDetails = new DiaryBookingModel();
    $request->diaryAppointmentDetails->allocationDetails->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-13T23:01:07.168Z');
    $request->diaryAppointmentDetails->allocationDetails->staffID = 'excepturi';
    $request->diaryAppointmentDetails->allocationDetails->staffName = 'aspernatur';
    $request->diaryAppointmentDetails->allocationDetails->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-04T16:31:28.618Z');
    $request->diaryAppointmentDetails->appointmentType = 'natus';
    $request->diaryAppointmentDetails->extraComments = 'sed';
    $request->diaryAppointmentDetails->guests = [
        new DiaryGuestDetails(),
        new DiaryGuestDetails(),
        new DiaryGuestDetails(),
    ];
    $request->diaryAppointmentDetails->subject = 'dolor';
    $request->lettings = false;
    $request->propertyIdentifier = [
        'laboriosam',
        'hic',
        'saepe',
    ];
    $request->shortName = 'fuga';

    $response = $sdk->diaryController->diaryControllerPostAppointmentJson($request);

    if ($response->diaryControllerPostAppointmentJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaryControllerPostAppointmentRaw

Post an appointment into a valid diary allocation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerPostAppointmentRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerPostAppointmentRawRequest();
    $request->requestBody = 'in';
    $request->lettings = false;
    $request->propertyIdentifier = [
        'iste',
        'iure',
    ];
    $request->shortName = 'saepe';

    $response = $sdk->diaryController->diaryControllerPostAppointmentRaw($request);

    if ($response->diaryControllerPostAppointmentRaw200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaryControllerPutAppointmentForm

Update an existing appointment using its unique identifier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerPutAppointmentFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\DiaryAppointmentDetails;
use \OpenAPI\OpenAPI\Models\Shared\DiaryBookingModel;
use \OpenAPI\OpenAPI\Models\Shared\DiaryGuestDetails;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerPutAppointmentFormRequest();
    $request->allowMarketingCorrespondence = false;
    $request->diaryAppointmentDetails = new DiaryAppointmentDetails();
    $request->diaryAppointmentDetails->allocationDetails = new DiaryBookingModel();
    $request->diaryAppointmentDetails->allocationDetails->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-20T12:36:28.767Z');
    $request->diaryAppointmentDetails->allocationDetails->staffID = 'ipsa';
    $request->diaryAppointmentDetails->allocationDetails->staffName = 'reiciendis';
    $request->diaryAppointmentDetails->allocationDetails->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-11T04:59:11.542Z');
    $request->diaryAppointmentDetails->appointmentType = 'laborum';
    $request->diaryAppointmentDetails->extraComments = 'dolores';
    $request->diaryAppointmentDetails->guests = [
        new DiaryGuestDetails(),
    ];
    $request->diaryAppointmentDetails->subject = 'corporis';
    $request->appointmentID = 'explicabo';
    $request->lettings = false;
    $request->shortName = 'nobis';

    $response = $sdk->diaryController->diaryControllerPutAppointmentForm($request);

    if ($response->diaryControllerPutAppointmentForm200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaryControllerPutAppointmentJson

Update an existing appointment using its unique identifier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerPutAppointmentJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\DiaryAppointmentDetails;
use \OpenAPI\OpenAPI\Models\Shared\DiaryBookingModel;
use \OpenAPI\OpenAPI\Models\Shared\DiaryGuestDetails;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerPutAppointmentJsonRequest();
    $request->allowMarketingCorrespondence = false;
    $request->diaryAppointmentDetails = new DiaryAppointmentDetails();
    $request->diaryAppointmentDetails->allocationDetails = new DiaryBookingModel();
    $request->diaryAppointmentDetails->allocationDetails->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-24T03:24:11.703Z');
    $request->diaryAppointmentDetails->allocationDetails->staffID = 'nemo';
    $request->diaryAppointmentDetails->allocationDetails->staffName = 'minima';
    $request->diaryAppointmentDetails->allocationDetails->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-03T22:47:10.600Z');
    $request->diaryAppointmentDetails->appointmentType = 'iure';
    $request->diaryAppointmentDetails->extraComments = 'culpa';
    $request->diaryAppointmentDetails->guests = [
        new DiaryGuestDetails(),
        new DiaryGuestDetails(),
        new DiaryGuestDetails(),
        new DiaryGuestDetails(),
    ];
    $request->diaryAppointmentDetails->subject = 'sapiente';
    $request->appointmentID = 'architecto';
    $request->lettings = false;
    $request->shortName = 'mollitia';

    $response = $sdk->diaryController->diaryControllerPutAppointmentJson($request);

    if ($response->diaryControllerPutAppointmentJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaryControllerPutAppointmentRaw

Update an existing appointment using its unique identifier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerPutAppointmentRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerPutAppointmentRawRequest();
    $request->allowMarketingCorrespondence = false;
    $request->requestBody = 'dolorem';
    $request->appointmentID = 'culpa';
    $request->lettings = false;
    $request->shortName = 'consequuntur';

    $response = $sdk->diaryController->diaryControllerPutAppointmentRaw($request);

    if ($response->diaryControllerPutAppointmentRaw200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## diaryControllerSearchGuest

Match Guest Parameters with existing applicants

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiaryControllerSearchGuestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiaryControllerSearchGuestRequest();
    $request->branchID = 'repellat';
    $request->count = 653108;
    $request->emailaddress = 'occaecati';
    $request->forename = 'numquam';
    $request->offset = 414369;
    $request->shortname = 'quam';
    $request->surname = 'molestiae';

    $response = $sdk->diaryController->diaryControllerSearchGuest($request);

    if ($response->guestDiaryParametersResultsModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
