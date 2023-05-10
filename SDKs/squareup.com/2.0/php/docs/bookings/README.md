# bookings

### Available Operations

* [cancelBooking](#cancelbooking) - CancelBooking
* [createBooking](#createbooking) - CreateBooking
* [listTeamMemberBookingProfiles](#listteammemberbookingprofiles) - ListTeamMemberBookingProfiles
* [retrieveBooking](#retrievebooking) - RetrieveBooking
* [retrieveBusinessBookingProfile](#retrievebusinessbookingprofile) - RetrieveBusinessBookingProfile
* [retrieveTeamMemberBookingProfile](#retrieveteammemberbookingprofile) - RetrieveTeamMemberBookingProfile
* [searchAvailability](#searchavailability) - SearchAvailability
* [updateBooking](#updatebooking) - UpdateBooking

## cancelBooking

Cancels an existing booking.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CancelBookingRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelBookingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelBookingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelBookingRequest();
    $request->cancelBookingRequest = new CancelBookingRequest();
    $request->cancelBookingRequest->bookingVersion = 847252;
    $request->cancelBookingRequest->idempotencyKey = 'vel';
    $request->bookingId = 'error';

    $requestSecurity = new CancelBookingSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bookings->cancelBooking($request, $requestSecurity);

    if ($response->cancelBookingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBooking

Creates a booking.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateBookingRequest;
use \OpenAPI\OpenAPI\Models\Shared\Booking;
use \OpenAPI\OpenAPI\Models\Shared\AppointmentSegment;
use \OpenAPI\OpenAPI\Models\Operations\CreateBookingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBookingRequest();
    $request->booking = new Booking();
    $request->booking->appointmentSegments = [
        new AppointmentSegment(),
        new AppointmentSegment(),
        new AppointmentSegment(),
    ];
    $request->booking->createdAt = 'suscipit';
    $request->booking->customerId = 'iure';
    $request->booking->customerNote = 'magnam';
    $request->booking->id = 'e0f467cc-8796-4ed1-91a0-5dfc2ddf7cc7';
    $request->booking->locationId = 'totam';
    $request->booking->sellerNote = 'porro';
    $request->booking->startAt = 'dolorum';
    $request->booking->status = 'dicta';
    $request->booking->updatedAt = 'nam';
    $request->booking->version = 639921;
    $request->idempotencyKey = 'occaecati';

    $requestSecurity = new CreateBookingSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bookings->createBooking($request, $requestSecurity);

    if ($response->createBookingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTeamMemberBookingProfiles

Lists booking profiles for team members.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTeamMemberBookingProfilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTeamMemberBookingProfilesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTeamMemberBookingProfilesRequest();
    $request->bookableOnly = false;
    $request->cursor = 'fugit';
    $request->limit = 537373;
    $request->locationId = 'hic';

    $requestSecurity = new ListTeamMemberBookingProfilesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bookings->listTeamMemberBookingProfiles($request, $requestSecurity);

    if ($response->listTeamMemberBookingProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveBooking

Retrieves a booking.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveBookingRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveBookingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveBookingRequest();
    $request->bookingId = 'optio';

    $requestSecurity = new RetrieveBookingSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bookings->retrieveBooking($request, $requestSecurity);

    if ($response->retrieveBookingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveBusinessBookingProfile

Retrieves a seller's booking profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveBusinessBookingProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new RetrieveBusinessBookingProfileSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bookings->retrieveBusinessBookingProfile($requestSecurity);

    if ($response->retrieveBusinessBookingProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveTeamMemberBookingProfile

Retrieves a team member's booking profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveTeamMemberBookingProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveTeamMemberBookingProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveTeamMemberBookingProfileRequest();
    $request->teamMemberId = 'totam';

    $requestSecurity = new RetrieveTeamMemberBookingProfileSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bookings->retrieveTeamMemberBookingProfile($request, $requestSecurity);

    if ($response->retrieveTeamMemberBookingProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchAvailability

Searches for availabilities for booking.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchAvailabilityQuery;
use \OpenAPI\OpenAPI\Models\Shared\SearchAvailabilityFilter;
use \OpenAPI\OpenAPI\Models\Shared\SegmentFilter;
use \OpenAPI\OpenAPI\Models\Shared\FilterValue;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Operations\SearchAvailabilitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchAvailabilityRequest();
    $request->query = new SearchAvailabilityQuery();
    $request->query->filter = new SearchAvailabilityFilter();
    $request->query->filter->bookingId = 'beatae';
    $request->query->filter->locationId = 'commodi';
    $request->query->filter->segmentFilters = [
        new SegmentFilter(),
        new SegmentFilter(),
    ];
    $request->query->filter->startAtRange = new TimeRange();
    $request->query->filter->startAtRange->endAt = 'modi';
    $request->query->filter->startAtRange->startAt = 'qui';

    $requestSecurity = new SearchAvailabilitySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bookings->searchAvailability($request, $requestSecurity);

    if ($response->searchAvailabilityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBooking

Updates a booking.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBookingRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBookingRequest;
use \OpenAPI\OpenAPI\Models\Shared\Booking;
use \OpenAPI\OpenAPI\Models\Shared\AppointmentSegment;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBookingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBookingRequest();
    $request->updateBookingRequest = new UpdateBookingRequest();
    $request->updateBookingRequest->booking = new Booking();
    $request->updateBookingRequest->booking->appointmentSegments = [
        new AppointmentSegment(),
        new AppointmentSegment(),
        new AppointmentSegment(),
        new AppointmentSegment(),
    ];
    $request->updateBookingRequest->booking->createdAt = 'cum';
    $request->updateBookingRequest->booking->customerId = 'esse';
    $request->updateBookingRequest->booking->customerNote = 'ipsum';
    $request->updateBookingRequest->booking->id = '92059293-96fe-4a75-96eb-10faaa2352c5';
    $request->updateBookingRequest->booking->locationId = 'omnis';
    $request->updateBookingRequest->booking->sellerNote = 'nemo';
    $request->updateBookingRequest->booking->startAt = 'minima';
    $request->updateBookingRequest->booking->status = 'excepturi';
    $request->updateBookingRequest->booking->updatedAt = 'accusantium';
    $request->updateBookingRequest->booking->version = 438601;
    $request->updateBookingRequest->idempotencyKey = 'culpa';
    $request->bookingId = 'doloribus';

    $requestSecurity = new UpdateBookingSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bookings->updateBooking($request, $requestSecurity);

    if ($response->updateBookingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
