# services

### Available Operations

* [deleteSetupV1ServicesAllocationsId](#deletesetupv1servicesallocationsid) - Delete Allocation
* [deleteSetupV1ServicesBlockId](#deletesetupv1servicesblockid) - Delete Block
* [deleteSetupV1ServicesCalendarId](#deletesetupv1servicescalendarid) - Delete Service Links
* [deleteSetupV1ServicesId](#deletesetupv1servicesid) - Delete Service
* [deleteSetupV1ServicesIdDeleteimage](#deletesetupv1servicesiddeleteimage) - Delete Service Image
* [getSetupV1Services](#getsetupv1services) - List Services
* [getSetupV1ServicesAllocationsId](#getsetupv1servicesallocationsid) - Get Allocation
* [getSetupV1ServicesBlocksId](#getsetupv1servicesblocksid) - Get Block
* [getSetupV1ServicesId](#getsetupv1servicesid) - Get Service
* [getSetupV1ServicesIdAllocations](#getsetupv1servicesidallocations) - List Service Allocations
* [getSetupV1ServicesIdAvailability](#getsetupv1servicesidavailability) - Get Weekly Availability
* [getSetupV1ServicesIdBlocks](#getsetupv1servicesidblocks) - List Service Blocks
* [getSetupV1ServicesIdCalendar](#getsetupv1servicesidcalendar) - Get Linked Calendar
* [getSetupV1ServicesIdResources](#getsetupv1servicesidresources) - List Resources for Service
* [postSetupV1Services](#postsetupv1services) - Create Service
* [postSetupV1ServicesCalendar](#postsetupv1servicescalendar) - Link Service to Calendar
* [postSetupV1ServicesIdAllocations](#postsetupv1servicesidallocations) - Create Allocation
* [postSetupV1ServicesIdAllocationsBulk](#postsetupv1servicesidallocationsbulk) - Create Allocations Bulk
* [postSetupV1ServicesIdBlock](#postsetupv1servicesidblock) - Create Block
* [postSetupV1ServicesIdUploadimage](#postsetupv1servicesiduploadimage) - Upload Service Image
* [putSetupV1ServicesAllocationsId](#putsetupv1servicesallocationsid) - Update Allocation
* [putSetupV1ServicesBlockId](#putsetupv1servicesblockid) - Update Block
* [putSetupV1ServicesId](#putsetupv1servicesid) - Update Service
* [putSetupV1ServicesIdAvailability](#putsetupv1servicesidavailability) - Update Weekly Availability
* [putSetupV1ServicesIdRecover](#putsetupv1servicesidrecover) - Recover Service

## deleteSetupV1ServicesAllocationsId

<p>Use this endpoint to permanently <b>Delete</b> a service allocation. A valid <b>serviceAllocation id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1ServicesAllocationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1ServicesAllocationsIdRequest();
    $request->id = 'e56248ff-f639-4a91-8abd-cab62676696e';

    $response = $sdk->services->deleteSetupV1ServicesAllocationsId($request);

    if ($response->serviceAllocationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1ServicesBlockId

<p>Use this endpoint to permanently <b>Delete</b> a Service Block. A valid <b>serviceBlock id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1ServicesBlockIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1ServicesBlockIdRequest();
    $request->id = '1ec00221-b335-4d89-acb3-ecfda8d0c549';

    $response = $sdk->services->deleteSetupV1ServicesBlockId($request);

    if ($response->resourceBlockViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1ServicesCalendarId

<p>Use this endpoint to <b>Delete</b> service links from the calendar specified. A valid <b>calendar id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1ServicesCalendarIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1ServicesCalendarIdRequest();
    $request->id = 'ef030049-78a6-41fa-9cf2-0688f77c1ffc';

    $response = $sdk->services->deleteSetupV1ServicesCalendarId($request);

    if ($response->serviceCalendarViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1ServicesId

<p>Use this endpoint to <b>Delete</b> a service object. A valid <b>service id</b> is required. The service is not permanently deleted and can be recovered by using the <i>PUT /setup​/v1​/services​/{id}​/recover</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1ServicesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1ServicesIdRequest();
    $request->id = '71dca163-f2a3-4c80-a97f-f334cddf857a';

    $response = $sdk->services->deleteSetupV1ServicesId($request);

    if ($response->serviceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1ServicesIdDeleteimage

<p>Use this endpoint to permanently <b>Delete</b> a previously uploaded service image. A valid <b>service id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1ServicesIdDeleteimageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1ServicesIdDeleteimageRequest();
    $request->id = '9e61876c-6ab2-41d2-9dfc-94d6fecd7993';

    $response = $sdk->services->deleteSetupV1ServicesIdDeleteimage($request);

    if ($response->serviceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1Services

<p>Use this endpoint to return a <b>List of Service</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ServicesRequest();
    $request->deleted = false;
    $request->limit = 573247;
    $request->locationId = 'aperiam';
    $request->offset = 49456;
    $request->serviceGroupId = 431258;

    $response = $sdk->services->getSetupV1Services($request);

    if ($response->serviceListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ServicesAllocationsId

<p>Use this endpoint to <b>Get a Service Allocation</b>. A valid <b>serviceAllocation id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ServicesAllocationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ServicesAllocationsIdRequest();
    $request->id = '6a6d2d00-0355-4338-8ec0-86fa21e9152c';

    $response = $sdk->services->getSetupV1ServicesAllocationsId($request);

    if ($response->serviceAllocationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ServicesBlocksId

<p>Use this endpoint to <b>Get a Service Block</b>. A valid <b>serviceBlock id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ServicesBlocksIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ServicesBlocksIdRequest();
    $request->id = 'b3119167-b8e3-4c8d-b034-08d6d364ffd4';

    $response = $sdk->services->getSetupV1ServicesBlocksId($request);

    if ($response->resourceBlockViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ServicesId

<p>Use this endpoint to return a <b>Service</b> object. A valid <b>service id</b> is required. Find service id's by using the <i>GET /setup/v1/services</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ServicesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ServicesIdRequest();
    $request->id = 317374;

    $response = $sdk->services->getSetupV1ServicesId($request);

    if ($response->serviceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ServicesIdAllocations

<p>Use this endpoint to return a <b>List of Service Allocations</b> for a specified service. A valid <b>service id</b> is required. Service allocations are used for <b>Event type services only</b> where the events are offered on specific dates and times. Retrieve all allocations for a location by passing in 0 as the service id.</p>
<p>The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ServicesIdAllocationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ServicesIdAllocationsRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-27T15:50:00.193Z');
    $request->id = '06d1263d-48e9-435c-ac9e-81f30be3e432';
    $request->limit = 45677;
    $request->locationId = 'dolores';
    $request->offset = 848860;
    $request->resourceId = 'iusto';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-21T23:10:34.135Z');

    $response = $sdk->services->getSetupV1ServicesIdAllocations($request);

    if ($response->serviceAllocationListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ServicesIdAvailability

<p>Use this endpoint to return the <b>Weekly Service Availability</b> for an appointment service. A valid <b>service id</b> is required. Weekly availability is returned for services where the Type = 1. For event type services, where service Type = 2, refer to the <i>GET ​/setup​/v1​/services​/{id}​/allocations</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ServicesIdAvailabilityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ServicesIdAvailabilityRequest();
    $request->id = '65765066-4187-40d9-921f-9ad030c4ecc1';

    $response = $sdk->services->getSetupV1ServicesIdAvailability($request);

    if ($response->serviceAvailabilityViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ServicesIdBlocks

<p>Use this endpoint to return a list of <b>Service Blocks</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ServicesIdBlocksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ServicesIdBlocksRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-04T08:17:21.517Z');
    $request->id = '08364290-68b8-4502-a55e-7f73bc845e32';
    $request->limit = 29881;
    $request->offset = 665960;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-01T06:18:32.721Z');

    $response = $sdk->services->getSetupV1ServicesIdBlocks($request);

    if ($response->serviceBlockListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ServicesIdCalendar

<p>Use this endpoint to <b>Get the Linked Calendar</b> for the service requested. A valid <b>service id</b> is required. A service can only be linked to one calendar in a location.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ServicesIdCalendarRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ServicesIdCalendarRequest();
    $request->id = '9f4badf9-47c9-4a86-bbc4-2426665816dd';
    $request->locationId = 'impedit';

    $response = $sdk->services->getSetupV1ServicesIdCalendar($request);

    if ($response->serviceCalendarViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ServicesIdResources

<p>Use this endpoint to return a list of <b>Resources</b> that provide the requested service. A valid <b>service id</b> is required. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ServicesIdResourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ServicesIdResourcesRequest();
    $request->googleAuthReturnUrl = 'culpa';
    $request->id = '8ef51fcb-4c59-43ec-92cd-aad0ec7afedb';
    $request->limit = 869088;
    $request->offset = 561121;
    $request->outlookAuthReturnUrl = 'aut';

    $response = $sdk->services->getSetupV1ServicesIdResources($request);

    if ($response->resourceListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1Services

<p>Use this endpoint to <b>Create</b> a new service. If not specified, the business location defaults to the primary business location. Note: Posting a service to the Primary Business Location will scope as company scoped and make the service available to all locations. If you want a service to only be available from a specific location, include the business location id.</p>
<p>Required fields: <b>Name</b> and <b>Duration</b></p>
<p>The service <b>Type</b> is either, <b>1 = Appointment</b> or <b>2 = Event</b>. Default is 1 if not specified.</p>
<p>For type = 1, Appointments - Create an availability entry for each weekday to provide the service for. <b>All days of the week must be provided when adding service availability.</b> Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. Start and End Times are entered in military format. e.g., 800 is 8:00am, 2230 is 10:30pm. If not provided, it defaults to the primary location business hours.</p>
<p>We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. If you require times in between specified hours to be unavailable, use the service block endpoint at: <i>POST ​/setup​/v1​/services​/{id}​/block</i>.</p>
<p>For type = 2, Events - Create service allocations for their availability. Refer to the: <i>POST /setup​/v1​/services​/{id}​/allocations</i> to set up service allocations for the event.</p>
<p>Options are available for customer selected durations, for details: <a href="https://docs.onsched.com/docs/services-overview#variable-duration">Variable Duration Overview</a></p>
<p>Additional parameters include but are not limited to bookingLimit, maxCapacity and maxGroupSize. For details: <a href="https://docs.onsched.com/docs/service-max-capacity">Service Limits Overview</a></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ServiceInputModel;
use \OpenAPI\OpenAPI\Models\Shared\AvailabilityInputModel;
use \OpenAPI\OpenAPI\Models\Shared\WeekDayInputModel;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldInputModel;
use \OpenAPI\OpenAPI\Models\Shared\ServiceFeesInputModel;
use \OpenAPI\OpenAPI\Models\Shared\ServiceOptionsInputModel;
use \OpenAPI\OpenAPI\Models\Shared\ServiceSettingsInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceInputModel();
    $request->availability = new AvailabilityInputModel();
    $request->availability->fri = new WeekDayInputModel();
    $request->availability->fri->endTime = 836548;
    $request->availability->fri->startTime = 947515;
    $request->availability->mon = new WeekDayInputModel();
    $request->availability->mon->endTime = 278050;
    $request->availability->mon->startTime = 254648;
    $request->availability->sat = new WeekDayInputModel();
    $request->availability->sat->endTime = 546950;
    $request->availability->sat->startTime = 630237;
    $request->availability->sun = new WeekDayInputModel();
    $request->availability->sun->endTime = 293617;
    $request->availability->sun->startTime = 456599;
    $request->availability->thu = new WeekDayInputModel();
    $request->availability->thu->endTime = 968205;
    $request->availability->thu->startTime = 611792;
    $request->availability->tue = new WeekDayInputModel();
    $request->availability->tue->endTime = 226196;
    $request->availability->tue->startTime = 581019;
    $request->availability->wed = new WeekDayInputModel();
    $request->availability->wed->endTime = 15738;
    $request->availability->wed->startTime = 771289;
    $request->bookingInterval = 325855;
    $request->bookingLimit = 551549;
    $request->customFields = new CustomFieldInputModel();
    $request->customFields->field1 = 'blanditiis';
    $request->customFields->field10 = 'quas';
    $request->customFields->field2 = 'voluptatem';
    $request->customFields->field3 = 'provident';
    $request->customFields->field4 = 'quas';
    $request->customFields->field5 = 'ipsum';
    $request->customFields->field6 = 'vero';
    $request->customFields->field7 = 'fuga';
    $request->customFields->field8 = 'facilis';
    $request->customFields->field9 = 'maiores';
    $request->description = 'error';
    $request->duration = 926119;
    $request->fees = new ServiceFeesInputModel();
    $request->fees->cancellationFeeAmount = 9559.62;
    $request->fees->cancellationFeeTaxable = false;
    $request->fees->feeAmount = 2349.64;
    $request->fees->feeTaxable = false;
    $request->fees->nonRefundable = false;
    $request->locationId = 'sapiente';
    $request->maxCapacity = 977641;
    $request->maxGroupSize = 824267;
    $request->mediaPageUrl = 'repellendus';
    $request->name = 'Van Kuhlman IV';
    $request->options = new ServiceOptionsInputModel();
    $request->options->consumerPadding = false;
    $request->options->defaultService = false;
    $request->options->durationInterval = 606262;
    $request->options->durationMax = 626676;
    $request->options->durationMin = 989089;
    $request->options->durationSelect = false;
    $request->options->padding = 266289;
    $request->public = false;
    $request->serviceGroupId = 'facere';
    $request->settings = new ServiceSettingsInputModel();
    $request->settings->bookAheadUnit = 208639;
    $request->settings->bookAheadValue = 340604;
    $request->settings->bookInAdvance = 448407;
    $request->type = 'sed';

    $response = $sdk->services->postSetupV1Services($request);

    if ($response->serviceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1ServicesCalendar

<p>Use this endpoint to <b>Link a Service</b> to a calendar. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ServiceCalendarInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceCalendarInputModel();
    $request->calendarId = 'non';
    $request->locationId = 'porro';
    $request->serviceId = 'fugiat';

    $response = $sdk->services->postSetupV1ServicesCalendar($request);

    if ($response->serviceCalendarViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1ServicesIdAllocations

<p>Use this endpoint to <b>Create</b> a service allocation for a service. A valid <b>service id</b> is required. Service allocations are used for <b>Event type services only</b>. Service allocations allow you to specify the time(s) a service is available as opposed to using weekly availability which represents a weekly schedule, ie: Mon-Fri 9am-5pm.</p>
<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>. Service allocations can be set to specific time ranges or for the whole day by setting startTime=0 and endTime=2400. Service allocations can repeat for a specific date range instance or set to repeat at a specified frequency.</p>
<p>
  <b>Repeat object: (repeats = true)</b>
</p>
<p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>
<p>Use the <b>interval</b> property to specify the interval that the allocation repeats. For example, an interval of 2 for a weekly allocation means that the allocation will repeat every 2nd week beginning at the day specified. A daily allocation with an interval of 10 means the allocation will repeat every 10 days. The interval property applies to all repeat frequencies.  <b>If using the repeat functionality an interval value is required</b>.</p>
<p>
  <b>DAILY ALLOCATIONS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
<p>
  <b>WEEKLY ALLOCATIONS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>. You must specify the <b>“weekdays”</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>.  For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the allocation date range.</p>
<p>
  <b>MONTHLY ALLOCATIONS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly. <b>monthDay</b> is the day of the month you want allocated.  If monthDay=’15’ this means to allocate the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on.  For <b>monthType M</b>, monthDay value contains 2 digits:  day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>
<p>
  <b>Repeats will end on the date specified by the end date.</b>
</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSetupV1ServicesIdAllocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAllocationInputModel;
use \OpenAPI\OpenAPI\Models\Shared\RepeatInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetupV1ServicesIdAllocationsRequest();
    $request->serviceAllocationInputModel = new ServiceAllocationInputModel();
    $request->serviceAllocationInputModel->bookingLimit = 743938;
    $request->serviceAllocationInputModel->endDate = DateTime::createFromFormat('Y-m-d', '2022-01-13');
    $request->serviceAllocationInputModel->endTime = 289153;
    $request->serviceAllocationInputModel->locationId = 'vero';
    $request->serviceAllocationInputModel->reason = 'eos';
    $request->serviceAllocationInputModel->repeat = new RepeatInputModel();
    $request->serviceAllocationInputModel->repeat->frequency = 'quas';
    $request->serviceAllocationInputModel->repeat->interval = 98578;
    $request->serviceAllocationInputModel->repeat->monthDay = 101284;
    $request->serviceAllocationInputModel->repeat->monthType = 'praesentium';
    $request->serviceAllocationInputModel->repeat->weekdays = 'iusto';
    $request->serviceAllocationInputModel->repeats = false;
    $request->serviceAllocationInputModel->resourceId = 'fugiat';
    $request->serviceAllocationInputModel->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-25');
    $request->serviceAllocationInputModel->startTime = 512408;
    $request->id = '44eded85-a906-45e6-a8bd-fc2032b6c879';

    $response = $sdk->services->postSetupV1ServicesIdAllocations($request);

    if ($response->serviceAllocationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1ServicesIdAllocationsBulk

<p>Use this endpoint to <b>Create</b> bulk service allocations. A valid <b>service id</b> is required. Use this endpoint only if you need to POST multiple service allocations in one transaction. For details refer to: <a href="POST ​/setup​/v1​/services​/{id}​/allocations">Post Service Allocation</a></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSetupV1ServicesIdAllocationsBulkRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAllocationsInputModel;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAllocationInputModel;
use \OpenAPI\OpenAPI\Models\Shared\RepeatInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetupV1ServicesIdAllocationsBulkRequest();
    $request->serviceAllocationsInputModel = new ServiceAllocationsInputModel();
    $request->serviceAllocationsInputModel->serviceAllocations = [
        new ServiceAllocationInputModel(),
        new ServiceAllocationInputModel(),
        new ServiceAllocationInputModel(),
    ];
    $request->id = '23b7e135-84f7-4ae1-ac68-91f82ce11571';

    $response = $sdk->services->postSetupV1ServicesIdAllocationsBulk($request);

    if ($response->serviceAllocationViewModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1ServicesIdBlock

<p>Use this endpoint to <b>Create</b> a Service Block. A valid <b>service id</b> is required.</p>
<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>
<p>Service blocks can be set to specific time ranges or for the whole day. To block a whole day set startTime to 0 and endTime to 2400.</p>
<p>Service blocks can be for a specific date range instance or set to repeat at a specified frequency. </p>
<p>
  <b>Repeat object: (repeats = true)</b>
</p>
<p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>
<p>Use the <b>interval</b> property to specify the interval that the block repeats. For example, an interval of 2 for a weekly block means that the block will repeat every 2nd week beginning at the day specified. A daily block with an interval of 10 means the block will repeat every 10 days. The interval property applies to all repeat frequencies. <b>If using the repeat functionality an interval value is required</b>.</p>
<p>
  <b>DAILY BLOCKS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
<p>
  <b>WEEKLY BLOCKS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>.  You must specify the <b>weekdays</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>. For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the block date range.</p>
<p>
  <b>MONTHLY BLOCKS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly, <b>monthDay</b> is the day of the month you want blocked.  If monthDay=’15’ this means to block the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on. For <b>monthType M</b>, monthDay value contains 2 digits: day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>
<p>
  <b>Repeats will end on the date specified by the end date.</b>
</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSetupV1ServicesIdBlockRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceBlockInputModel;
use \OpenAPI\OpenAPI\Models\Shared\RepeatInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetupV1ServicesIdBlockRequest();
    $request->serviceBlockInputModel = new ServiceBlockInputModel();
    $request->serviceBlockInputModel->endDate = DateTime::createFromFormat('Y-m-d', '2022-11-06');
    $request->serviceBlockInputModel->endTime = 209602;
    $request->serviceBlockInputModel->locationId = 'eaque';
    $request->serviceBlockInputModel->reason = 'exercitationem';
    $request->serviceBlockInputModel->repeat = new RepeatInputModel();
    $request->serviceBlockInputModel->repeat->frequency = 'amet';
    $request->serviceBlockInputModel->repeat->interval = 454165;
    $request->serviceBlockInputModel->repeat->monthDay = 454232;
    $request->serviceBlockInputModel->repeat->monthType = 'pariatur';
    $request->serviceBlockInputModel->repeat->weekdays = 'minus';
    $request->serviceBlockInputModel->repeats = false;
    $request->serviceBlockInputModel->startDate = DateTime::createFromFormat('Y-m-d', '2020-12-10');
    $request->serviceBlockInputModel->startTime = 518926;
    $request->id = '9df975e3-5668-4609-ae9c-3ddc5f111dea';

    $response = $sdk->services->postSetupV1ServicesIdBlock($request);

    if ($response->serviceBlockViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1ServicesIdUploadimage

<p>Use this endpoint to <b>Upload</b> an image to the service. A valid <b>service id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSetupV1ServicesIdUploadimageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceImageInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetupV1ServicesIdUploadimageRequest();
    $request->serviceImageInputModel = new ServiceImageInputModel();
    $request->serviceImageInputModel->imageFileData = 'dicta';
    $request->serviceImageInputModel->imageFileName = 'voluptatem';
    $request->id = '26d541a4-d190-4feb-a178-0bccc0dbbddb';

    $response = $sdk->services->postSetupV1ServicesIdUploadimage($request);

    if ($response->serviceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ServicesAllocationsId

<p>Use this endpoint to <b>Update</b> a service allocation. A valid <b>serviceAllocation id</b> is required. Refer to the <i>POST /setup/v1/services/{id}/allocations</i> endpoint for fields names and details.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ServicesAllocationsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAllocationUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\RepeatInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ServicesAllocationsIdRequest();
    $request->serviceAllocationUpdateModel = new ServiceAllocationUpdateModel();
    $request->serviceAllocationUpdateModel->bookingLimit = 297325;
    $request->serviceAllocationUpdateModel->endDate = DateTime::createFromFormat('Y-m-d', '2022-06-15');
    $request->serviceAllocationUpdateModel->endTime = 458021;
    $request->serviceAllocationUpdateModel->locationId = 'doloremque';
    $request->serviceAllocationUpdateModel->reason = 'corrupti';
    $request->serviceAllocationUpdateModel->repeat = new RepeatInputModel();
    $request->serviceAllocationUpdateModel->repeat->frequency = 'reiciendis';
    $request->serviceAllocationUpdateModel->repeat->interval = 704644;
    $request->serviceAllocationUpdateModel->repeat->monthDay = 306023;
    $request->serviceAllocationUpdateModel->repeat->monthType = 'repudiandae';
    $request->serviceAllocationUpdateModel->repeat->weekdays = 'amet';
    $request->serviceAllocationUpdateModel->repeats = false;
    $request->serviceAllocationUpdateModel->resourceId = 'natus';
    $request->serviceAllocationUpdateModel->startDate = DateTime::createFromFormat('Y-m-d', '2022-02-10');
    $request->serviceAllocationUpdateModel->startTime = 429823;
    $request->id = 'bc158c4c-4e54-4599-aa34-2260e9b200ce';

    $response = $sdk->services->putSetupV1ServicesAllocationsId($request);

    if ($response->serviceAllocationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ServicesBlockId

<p>Use this endpoint to <b>Update</b> a Service Block. A valid <b>serviceBlock id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ServicesBlockIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceBlockUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\RepeatUpdateModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ServicesBlockIdRequest();
    $request->serviceBlockUpdateModel = new ServiceBlockUpdateModel();
    $request->serviceBlockUpdateModel->endDate = DateTime::createFromFormat('Y-m-d', '2022-06-18');
    $request->serviceBlockUpdateModel->endTime = 666321;
    $request->serviceBlockUpdateModel->reason = 'et';
    $request->serviceBlockUpdateModel->repeat = new RepeatUpdateModel();
    $request->serviceBlockUpdateModel->repeat->frequency = 'expedita';
    $request->serviceBlockUpdateModel->repeat->interval = 842921;
    $request->serviceBlockUpdateModel->repeat->monthDay = 552984;
    $request->serviceBlockUpdateModel->repeat->monthType = 'maiores';
    $request->serviceBlockUpdateModel->repeat->weekdays = 'quidem';
    $request->serviceBlockUpdateModel->repeats = false;
    $request->serviceBlockUpdateModel->startDate = DateTime::createFromFormat('Y-m-d', '2022-05-14');
    $request->serviceBlockUpdateModel->startTime = 42489;
    $request->id = 'a116ce72-3d40-497f-a30e-9af725b29122';

    $response = $sdk->services->putSetupV1ServicesBlockId($request);

    if ($response->serviceBlockViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ServicesId

<p>Use this endpoint to <b>Update</b> a service object. A valid <b>service id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ServicesIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\AvailabilityInputModel;
use \OpenAPI\OpenAPI\Models\Shared\WeekDayInputModel;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\ServiceFeesUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\ServiceOptionsUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\ServiceSettingsUpdateModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ServicesIdRequest();
    $request->serviceUpdateModel = new ServiceUpdateModel();
    $request->serviceUpdateModel->availability = new AvailabilityInputModel();
    $request->serviceUpdateModel->availability->fri = new WeekDayInputModel();
    $request->serviceUpdateModel->availability->fri->endTime = 6203;
    $request->serviceUpdateModel->availability->fri->startTime = 228133;
    $request->serviceUpdateModel->availability->mon = new WeekDayInputModel();
    $request->serviceUpdateModel->availability->mon->endTime = 9284;
    $request->serviceUpdateModel->availability->mon->startTime = 852634;
    $request->serviceUpdateModel->availability->sat = new WeekDayInputModel();
    $request->serviceUpdateModel->availability->sat->endTime = 532092;
    $request->serviceUpdateModel->availability->sat->startTime = 245116;
    $request->serviceUpdateModel->availability->sun = new WeekDayInputModel();
    $request->serviceUpdateModel->availability->sun->endTime = 942780;
    $request->serviceUpdateModel->availability->sun->startTime = 356485;
    $request->serviceUpdateModel->availability->thu = new WeekDayInputModel();
    $request->serviceUpdateModel->availability->thu->endTime = 644299;
    $request->serviceUpdateModel->availability->thu->startTime = 931953;
    $request->serviceUpdateModel->availability->tue = new WeekDayInputModel();
    $request->serviceUpdateModel->availability->tue->endTime = 714300;
    $request->serviceUpdateModel->availability->tue->startTime = 480295;
    $request->serviceUpdateModel->availability->wed = new WeekDayInputModel();
    $request->serviceUpdateModel->availability->wed->endTime = 493865;
    $request->serviceUpdateModel->availability->wed->startTime = 592088;
    $request->serviceUpdateModel->bookingInterval = 581889;
    $request->serviceUpdateModel->bookingLimit = 828735;
    $request->serviceUpdateModel->customFields = new CustomFieldUpdateModel();
    $request->serviceUpdateModel->customFields->field1 = 'sunt';
    $request->serviceUpdateModel->customFields->field10 = 'odit';
    $request->serviceUpdateModel->customFields->field2 = 'vero';
    $request->serviceUpdateModel->customFields->field3 = 'deleniti';
    $request->serviceUpdateModel->customFields->field4 = 'optio';
    $request->serviceUpdateModel->customFields->field5 = 'quasi';
    $request->serviceUpdateModel->customFields->field6 = 'repellat';
    $request->serviceUpdateModel->customFields->field7 = 'atque';
    $request->serviceUpdateModel->customFields->field8 = 'magnam';
    $request->serviceUpdateModel->customFields->field9 = 'perspiciatis';
    $request->serviceUpdateModel->description = 'amet';
    $request->serviceUpdateModel->duration = 546089;
    $request->serviceUpdateModel->fees = new ServiceFeesUpdateModel();
    $request->serviceUpdateModel->fees->cancellationFeeAmount = 1251.61;
    $request->serviceUpdateModel->fees->cancellationFeeTaxable = false;
    $request->serviceUpdateModel->fees->feeAmount = 3642.84;
    $request->serviceUpdateModel->fees->feeTaxable = false;
    $request->serviceUpdateModel->fees->nonRefundable = false;
    $request->serviceUpdateModel->locationId = 'delectus';
    $request->serviceUpdateModel->maxCapacity = 848439;
    $request->serviceUpdateModel->maxGroupSize = 780885;
    $request->serviceUpdateModel->mediaPageUrl = 'quaerat';
    $request->serviceUpdateModel->name = 'Jacquelyn Lueilwitz';
    $request->serviceUpdateModel->options = new ServiceOptionsUpdateModel();
    $request->serviceUpdateModel->options->consumerPadding = false;
    $request->serviceUpdateModel->options->defaultService = false;
    $request->serviceUpdateModel->options->durationInterval = 805421;
    $request->serviceUpdateModel->options->durationMax = 151486;
    $request->serviceUpdateModel->options->durationMin = 791538;
    $request->serviceUpdateModel->options->durationSelect = false;
    $request->serviceUpdateModel->options->padding = 162073;
    $request->serviceUpdateModel->public = false;
    $request->serviceUpdateModel->serviceGroupId = 'possimus';
    $request->serviceUpdateModel->settings = new ServiceSettingsUpdateModel();
    $request->serviceUpdateModel->settings->bookAheadUnit = 963470;
    $request->serviceUpdateModel->settings->bookAheadValue = 690871;
    $request->serviceUpdateModel->settings->bookInAdvance = 304964;
    $request->serviceUpdateModel->type = 'eligendi';
    $request->id = 'fc1c7623-0f84-41fb-9bd2-3fdb14db6be5';

    $response = $sdk->services->putSetupV1ServicesId($request);

    if ($response->serviceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ServicesIdAvailability

<p>Use this endpoint to <b>Update</b> service weekly availability. A valid <b>service id</b> is required. The availability day entries are created when a service object is created.</p>
<p>To update weekly availability hours, all days of the week must be provided. Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. The <b>startTime</b> and <b>endTime</b> fields are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0.</p>
<p>If you require times in between specified hours to be unavailable, use the resource blocks endpoints. Times entered represent the timezone of the business location.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ServicesIdAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\AvailabilityInputModel;
use \OpenAPI\OpenAPI\Models\Shared\WeekDayInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ServicesIdAvailabilityRequest();
    $request->availabilityInputModel = new AvailabilityInputModel();
    $request->availabilityInputModel->fri = new WeekDayInputModel();
    $request->availabilityInputModel->fri->endTime = 642279;
    $request->availabilityInputModel->fri->startTime = 375588;
    $request->availabilityInputModel->mon = new WeekDayInputModel();
    $request->availabilityInputModel->mon->endTime = 516363;
    $request->availabilityInputModel->mon->startTime = 359106;
    $request->availabilityInputModel->sat = new WeekDayInputModel();
    $request->availabilityInputModel->sat->endTime = 567241;
    $request->availabilityInputModel->sat->startTime = 616619;
    $request->availabilityInputModel->sun = new WeekDayInputModel();
    $request->availabilityInputModel->sun->endTime = 536456;
    $request->availabilityInputModel->sun->startTime = 900411;
    $request->availabilityInputModel->thu = new WeekDayInputModel();
    $request->availabilityInputModel->thu->endTime = 136770;
    $request->availabilityInputModel->thu->startTime = 173193;
    $request->availabilityInputModel->tue = new WeekDayInputModel();
    $request->availabilityInputModel->tue->endTime = 671568;
    $request->availabilityInputModel->tue->startTime = 875200;
    $request->availabilityInputModel->wed = new WeekDayInputModel();
    $request->availabilityInputModel->wed->endTime = 178717;
    $request->availabilityInputModel->wed->startTime = 27653;
    $request->id = 'da16fc2b-271a-4289-857e-854e90439d22';

    $response = $sdk->services->putSetupV1ServicesIdAvailability($request);

    if ($response->serviceAvailabilityViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ServicesIdRecover

<p>Use this endpoint to <b>Recover</b> a deleted service object. A valid <b>service id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ServicesIdRecoverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ServicesIdRecoverRequest();
    $request->id = '24656946-2407-4084-b7ab-37cef0222519';

    $response = $sdk->services->putSetupV1ServicesIdRecover($request);

    if ($response->serviceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
