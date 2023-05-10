# calendars

### Available Operations

* [deleteSetupV1CalendarsBlockId](#deletesetupv1calendarsblockid) - Delete Calendar Block
* [deleteSetupV1CalendarsId](#deletesetupv1calendarsid) - Delete Calendar
* [getSetupV1Calendars](#getsetupv1calendars) - List Calendars
* [getSetupV1CalendarsBlocksId](#getsetupv1calendarsblocksid) - Get Calendar Block
* [getSetupV1CalendarsId](#getsetupv1calendarsid) - Get Calendar
* [getSetupV1CalendarsIdBlocks](#getsetupv1calendarsidblocks) - List Calendar Blocks
* [getSetupV1CalendarsIdServices](#getsetupv1calendarsidservices) - List Calendar Services
* [postSetupV1Calendars](#postsetupv1calendars) - DEPRECATING: Create
* [postSetupV1CalendarsIdBlock](#postsetupv1calendarsidblock) - Create Calendar Block
* [putSetupV1CalendarsBlockId](#putsetupv1calendarsblockid) - Update Calendar Block
* [putSetupV1CalendarsId](#putsetupv1calendarsid) - Update Calendar
* [putSetupV1CalendarsIdRecover](#putsetupv1calendarsidrecover) - Recover Calendar

## deleteSetupV1CalendarsBlockId

<p>Use this endpoint to permanently <b>Delete</b> a calendar block. A valid <b>calendarBlock id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1CalendarsBlockIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1CalendarsBlockIdRequest();
    $request->id = '88f3a669-9707-44ba-8469-b6e214195989';

    $response = $sdk->calendars->deleteSetupV1CalendarsBlockId($request);

    if ($response->calendarBlockViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1CalendarsId

<p>Use this endpoint to <b>Delete</b> a calendar object. A valid <b>calendar id</b> is required. The calendar is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/calendars​/{id}​/recover </i>endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1CalendarsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1CalendarsIdRequest();
    $request->id = '0afa563e-2516-4fe4-88b7-11e5b7fd2ed0';

    $response = $sdk->calendars->deleteSetupV1CalendarsId($request);

    if ($response->scheduleViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1Calendars

<p>Use this endpoint to return a <b>List of Calendars</b> from the requested location. If not specified, the business location defaults to the primary business location. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1CalendarsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1CalendarsRequest();
    $request->deleted = false;
    $request->limit = 162493;
    $request->locationId = 'praesentium';
    $request->offset = 615560;

    $response = $sdk->calendars->getSetupV1Calendars($request);

    if ($response->scheduleListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1CalendarsBlocksId

<p>Use this endpoint to return a <b>Calendar Block</b>. A valid <b>calendarBlock id</b> is required. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1CalendarsBlocksIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1CalendarsBlocksIdRequest();
    $request->id = '21cddc69-2601-4fb5-b6b0-d5f0d30c5fbb';

    $response = $sdk->calendars->getSetupV1CalendarsBlocksId($request);

    if ($response->calendarBlockViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1CalendarsId

<p>Use this endpoint to return a <b>Calendar</b> object. A valid <b>calendar id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1CalendarsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1CalendarsIdRequest();
    $request->id = '25870532-02c7-43d5-be9b-90c28909b3fe';

    $response = $sdk->calendars->getSetupV1CalendarsId($request);

    if ($response->scheduleViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1CalendarsIdBlocks

<p>Use this endpoint to return a <b>List of Calendar Blocks</b> for the requested calendar. A valid <b>calendar id</b> is required. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1CalendarsIdBlocksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1CalendarsIdBlocksRequest();
    $request->id = '49a8d9cb-f486-4333-a3f9-b77f3a410067';
    $request->limit = 311796;
    $request->offset = 881005;

    $response = $sdk->calendars->getSetupV1CalendarsIdBlocks($request);

    if ($response->calendarBlockListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1CalendarsIdServices

<p>Use this endpoint to return a <b>List of Linked Services</b> of a calendar object. A valid <b>calendar id</b> is required. Find calendar id's by using the <i>GET /setup/v1/calendars</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1CalendarsIdServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1CalendarsIdServicesRequest();
    $request->id = 'bf69280d-1ba7-47a8-9ebf-737ae4203ce5';
    $request->limit = 904425;
    $request->offset = 383464;

    $response = $sdk->calendars->getSetupV1CalendarsIdServices($request);

    if ($response->serviceListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1Calendars

<p>
  <b>DEPRECATING:</b> Create Calendar</p>
<p>We are no longer supporting Multiple Calendar Functionality as it is part of our Legacy Application and has no relevance in the API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleInputModel;
use \OpenAPI\OpenAPI\Models\Shared\AvailabilityInputModel;
use \OpenAPI\OpenAPI\Models\Shared\WeekDayInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScheduleInputModel();
    $request->availability = new AvailabilityInputModel();
    $request->availability->fri = new WeekDayInputModel();
    $request->availability->fri->endTime = 645785;
    $request->availability->fri->startTime = 588317;
    $request->availability->mon = new WeekDayInputModel();
    $request->availability->mon->endTime = 324683;
    $request->availability->mon->startTime = 831049;
    $request->availability->sat = new WeekDayInputModel();
    $request->availability->sat->endTime = 519711;
    $request->availability->sat->startTime = 628982;
    $request->availability->sun = new WeekDayInputModel();
    $request->availability->sun->endTime = 55;
    $request->availability->sun->startTime = 872651;
    $request->availability->thu = new WeekDayInputModel();
    $request->availability->thu->endTime = 311860;
    $request->availability->thu->startTime = 273542;
    $request->availability->tue = new WeekDayInputModel();
    $request->availability->tue->endTime = 425451;
    $request->availability->tue->startTime = 798047;
    $request->availability->wed = new WeekDayInputModel();
    $request->availability->wed->endTime = 885338;
    $request->availability->wed->startTime = 185636;
    $request->bookingsPerSlot = 679880;
    $request->interval = 952792;
    $request->locationId = 'esse';
    $request->name = 'Tyrone Emard';
    $request->resourceGroupId = 'amet';
    $request->type = 'tempore';

    $response = $sdk->calendars->postSetupV1Calendars($request);

    if ($response->scheduleViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1CalendarsIdBlock

<p>Use this endpoint to <b>Create</b> a Calendar Block. A valid <b>calendar id</b> is required.</p>
<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>
<p>Calendar blocks can be set to specific time ranges or for the whole day. Th block a whole day set the startTime to 0 and endTime to 2400.</p>
<p>Calendar blocks can be for a specific date range instance or set to repeat at a specified frequency.</p>
<p>
  <b>Repeat object: (repeats = true)</b>
</p>
<p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>
<p>Use the <b>interval</b> property to specify the interval that the block repeats. For example, an interval of 2 for a weekly block means that the block will repeat every 2nd week beginning at the day specified. A daily block with an interval of 10 means the block will repeat every 10 days. The interval property applies to all repeat frequencies. <b>If using the repeat functionality an interval value is required</b>.</p>
<p>
  <b>DAILY BLOCKS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
<p>
  <b>WEEKLY BLOCKS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b>  is required and should be set to <b>“W”</b>.  You must specify the <b>weekdays</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>. For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the block date range.</p>
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
use \OpenAPI\OpenAPI\Models\Operations\PostSetupV1CalendarsIdBlockRequest;
use \OpenAPI\OpenAPI\Models\Shared\CalendarBlockInputModel;
use \OpenAPI\OpenAPI\Models\Shared\RepeatInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetupV1CalendarsIdBlockRequest();
    $request->calendarBlockInputModel = new CalendarBlockInputModel();
    $request->calendarBlockInputModel->endDate = DateTime::createFromFormat('Y-m-d', '2022-03-28');
    $request->calendarBlockInputModel->endTime = 313692;
    $request->calendarBlockInputModel->reason = 'dolorem';
    $request->calendarBlockInputModel->repeat = new RepeatInputModel();
    $request->calendarBlockInputModel->repeat->frequency = 'sapiente';
    $request->calendarBlockInputModel->repeat->interval = 518201;
    $request->calendarBlockInputModel->repeat->monthDay = 471752;
    $request->calendarBlockInputModel->repeat->monthType = 'sit';
    $request->calendarBlockInputModel->repeat->weekdays = 'expedita';
    $request->calendarBlockInputModel->repeats = false;
    $request->calendarBlockInputModel->startDate = DateTime::createFromFormat('Y-m-d', '2022-11-05');
    $request->calendarBlockInputModel->startTime = 424685;
    $request->id = 'b5a73429-cdb1-4a84-a2bb-679d2322715b';

    $response = $sdk->calendars->postSetupV1CalendarsIdBlock($request);

    if ($response->resourceBlockViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1CalendarsBlockId

<p>Use this endpoint to <b>Create</b> a Calendar Block. A valid <b>calendarBlock id</b> is required. Refer to the <i>POST ​/setup​/v1​/calendars​/{id}​/block</i> endpoint for fieldnames and details.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1CalendarsBlockIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\CalendarBlockUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\RepeatInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1CalendarsBlockIdRequest();
    $request->calendarBlockUpdateModel = new CalendarBlockUpdateModel();
    $request->calendarBlockUpdateModel->endDate = DateTime::createFromFormat('Y-m-d', '2022-11-28');
    $request->calendarBlockUpdateModel->endTime = 765326;
    $request->calendarBlockUpdateModel->reason = 'soluta';
    $request->calendarBlockUpdateModel->repeat = new RepeatInputModel();
    $request->calendarBlockUpdateModel->repeat->frequency = 'nobis';
    $request->calendarBlockUpdateModel->repeat->interval = 92596;
    $request->calendarBlockUpdateModel->repeat->monthDay = 903720;
    $request->calendarBlockUpdateModel->repeat->monthType = 'ipsum';
    $request->calendarBlockUpdateModel->repeat->weekdays = 'veritatis';
    $request->calendarBlockUpdateModel->repeats = false;
    $request->calendarBlockUpdateModel->startDate = DateTime::createFromFormat('Y-m-d', '2021-11-23');
    $request->calendarBlockUpdateModel->startTime = 731694;
    $request->id = '90f3443a-1108-4e0a-9cf4-b921879fce95';

    $response = $sdk->calendars->putSetupV1CalendarsBlockId($request);

    if ($response->calendarBlockViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1CalendarsId

<p>Use this endpoint to <b>Update</b> a calendar object. A valid <b>calendar id</b> is required. When your company was created a calendar object was automatically created with 24-hour weekly availability. Its <b>name = Main</b>, the <b>type = resource</b> and by default the <b>interval = 30 mins</b>. We are currently supporting resource calendar type. Other types were part of our Legacy Application and has no relevance in the API product.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1CalendarsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\AvailabilityInputModel;
use \OpenAPI\OpenAPI\Models\Shared\WeekDayInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1CalendarsIdRequest();
    $request->scheduleUpdateModel = new ScheduleUpdateModel();
    $request->scheduleUpdateModel->availability = new AvailabilityInputModel();
    $request->scheduleUpdateModel->availability->fri = new WeekDayInputModel();
    $request->scheduleUpdateModel->availability->fri->endTime = 218403;
    $request->scheduleUpdateModel->availability->fri->startTime = 961571;
    $request->scheduleUpdateModel->availability->mon = new WeekDayInputModel();
    $request->scheduleUpdateModel->availability->mon->endTime = 455169;
    $request->scheduleUpdateModel->availability->mon->startTime = 231701;
    $request->scheduleUpdateModel->availability->sat = new WeekDayInputModel();
    $request->scheduleUpdateModel->availability->sat->endTime = 878870;
    $request->scheduleUpdateModel->availability->sat->startTime = 949319;
    $request->scheduleUpdateModel->availability->sun = new WeekDayInputModel();
    $request->scheduleUpdateModel->availability->sun->endTime = 492268;
    $request->scheduleUpdateModel->availability->sun->startTime = 941378;
    $request->scheduleUpdateModel->availability->thu = new WeekDayInputModel();
    $request->scheduleUpdateModel->availability->thu->endTime = 715561;
    $request->scheduleUpdateModel->availability->thu->startTime = 799203;
    $request->scheduleUpdateModel->availability->tue = new WeekDayInputModel();
    $request->scheduleUpdateModel->availability->tue->endTime = 486160;
    $request->scheduleUpdateModel->availability->tue->startTime = 630448;
    $request->scheduleUpdateModel->availability->wed = new WeekDayInputModel();
    $request->scheduleUpdateModel->availability->wed->endTime = 708548;
    $request->scheduleUpdateModel->availability->wed->startTime = 874288;
    $request->scheduleUpdateModel->bookingsPerSlot = 498140;
    $request->scheduleUpdateModel->interval = 293020;
    $request->scheduleUpdateModel->locationId = 'quibusdam';
    $request->scheduleUpdateModel->name = 'Earl Mosciski DVM';
    $request->scheduleUpdateModel->resourceGroupId = 'exercitationem';
    $request->scheduleUpdateModel->type = 'nulla';
    $request->id = '2cff7c70-a456-426d-8368-13f16d9f5fce';

    $response = $sdk->calendars->putSetupV1CalendarsId($request);

    if ($response->scheduleViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1CalendarsIdRecover

<p>Use this endpoint to <b>Recover</b> a previously deleted calendar object. A valid <b>calendar id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1CalendarsIdRecoverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1CalendarsIdRecoverRequest();
    $request->id = '6c556146-c3e2-450f-b008-c42e141aac36';

    $response = $sdk->calendars->putSetupV1CalendarsIdRecover($request);

    if ($response->scheduleViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
