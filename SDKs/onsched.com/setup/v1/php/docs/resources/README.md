# resources

### Available Operations

* [deleteSetupV1ResourcesAllocationsId](#deletesetupv1resourcesallocationsid) - Delete Allocation
* [deleteSetupV1ResourcesBlockId](#deletesetupv1resourcesblockid) - Delete Block
* [deleteSetupV1ResourcesId](#deletesetupv1resourcesid) - Delete Resource
* [deleteSetupV1ResourcesIdDeleteimage](#deletesetupv1resourcesiddeleteimage) - Delete Resource Image
* [deleteSetupV1ResourcesIdServices](#deletesetupv1resourcesidservices) - Delete Linked Services
* [getSetupV1Resources](#getsetupv1resources) - List Resources
* [getSetupV1ResourcesAllocationsId](#getsetupv1resourcesallocationsid) - Get Allocation
* [getSetupV1ResourcesBlocksId](#getsetupv1resourcesblocksid) - Get Block
* [getSetupV1ResourcesTimezones](#getsetupv1resourcestimezones) - Get Time Zones
* [getSetupV1ResourcesId](#getsetupv1resourcesid) - Get Resource
* [getSetupV1ResourcesIdAllocations](#getsetupv1resourcesidallocations) - List Resource Allocations
* [getSetupV1ResourcesIdAvailability](#getsetupv1resourcesidavailability) - List Weekly Availability
* [getSetupV1ResourcesIdBlocks](#getsetupv1resourcesidblocks) - List Resource Blocks
* [getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress](#getsetupv1resourcesidcalendarauthgooglegoogleemailaddress) - Get Resource Google URL
* [getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress](#getsetupv1resourcesidcalendarauthoutlookoutlookemailaddress) - Get Resource Outlook URL
* [postSetupV1Resources](#postsetupv1resources) - Create Resource
* [postSetupV1ResourcesBulk](#postsetupv1resourcesbulk) - Create Resources Bulk
* [postSetupV1ResourcesIdAllocations](#postsetupv1resourcesidallocations) - Create Allocation
* [postSetupV1ResourcesIdBlock](#postsetupv1resourcesidblock) - Create Block
* [postSetupV1ResourcesIdServices](#postsetupv1resourcesidservices) - Create Linked Services
* [postSetupV1ResourcesIdUploadimage](#postsetupv1resourcesiduploadimage) - Upload Resource Image
* [putSetupV1ResourcesAllocationsId](#putsetupv1resourcesallocationsid) - Update Allocation
* [putSetupV1ResourcesBlockId](#putsetupv1resourcesblockid) - Update Block
* [putSetupV1ResourcesBulk](#putsetupv1resourcesbulk) - Update Resources Bulk
* [putSetupV1ResourcesId](#putsetupv1resourcesid) - Update Resource
* [putSetupV1ResourcesIdAvailability](#putsetupv1resourcesidavailability) - Update Weekly Availability
* [putSetupV1ResourcesIdReassignAppointmentsResourceId](#putsetupv1resourcesidreassignappointmentsresourceid) - Reassign Resource
* [putSetupV1ResourcesIdRecover](#putsetupv1resourcesidrecover) - Recover Resource
* [putSetupV1ResourcesIdServices](#putsetupv1resourcesidservices) - Update Linked Services

## deleteSetupV1ResourcesAllocationsId

<p>Use this endpoint to <b>Delete</b> a Resource Allocation. A valid <b>resourceAllocation id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1ResourcesAllocationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1ResourcesAllocationsIdRequest();
    $request->id = 'f9ab8366-c723-4ffd-a9e0-6bee4825c1fc';

    $response = $sdk->resources->deleteSetupV1ResourcesAllocationsId($request);

    if ($response->resourceBlockViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1ResourcesBlockId

<p>Use this endpoint to <b>Delete</b> a Resource Block. A valid <b>resourceBlock id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1ResourcesBlockIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1ResourcesBlockIdRequest();
    $request->id = '0e115c80-bff9-4185-84ec-42defcce8f19';

    $response = $sdk->resources->deleteSetupV1ResourcesBlockId($request);

    if ($response->resourceBlockViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1ResourcesId

<p>Use this endpoint to <b>Delete</b> a resource. The resource is not permanently deleted and can be recovered. A valid <b>resource id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1ResourcesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1ResourcesIdRequest();
    $request->id = '77773e63-562a-47b4-88f0-5e3d48fdaf31';

    $response = $sdk->resources->deleteSetupV1ResourcesId($request);

    if ($response->resourceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1ResourcesIdDeleteimage

<p>Use this endpoint to permanently <b>Delete</b> a previously uploaded resource image. A valid <b>resource id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1ResourcesIdDeleteimageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1ResourcesIdDeleteimageRequest();
    $request->id = '3a1f5fd9-4259-4c0b-b6f2-5ea944f3b756';

    $response = $sdk->resources->deleteSetupV1ResourcesIdDeleteimage($request);

    if ($response->resourceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1ResourcesIdServices

<p>Use this endpoint to <b>Delete</b> linked services from a Resource, i.e. unlink the services. A valid <b>resource id</b> is required. Once deleted, all services become available to the resource.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1ResourcesIdServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1ResourcesIdServicesRequest();
    $request->id = 'c11f6c37-a512-4624-b835-bbc05a23a45c';

    $response = $sdk->resources->deleteSetupV1ResourcesIdServices($request);

    if ($response->resourceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1Resources

<p>Use this endpoint to return a <b>List of Resources</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ResourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ResourcesRequest();
    $request->deleted = false;
    $request->email = 'Vergie98@hotmail.com';
    $request->googleAuthReturnUrl = 'assumenda';
    $request->limit = 887363;
    $request->locationId = 'architecto';
    $request->name = 'Molly Beier';
    $request->offset = 155978;
    $request->outlookAuthReturnUrl = 'dicta';
    $request->resourceGroupId = 'vel';

    $response = $sdk->resources->getSetupV1Resources($request);

    if ($response->resourceListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ResourcesAllocationsId

<p>Use this endpoint to return a <b>Resource Allocation</b>. A valid <b>resourceAllocation id</b> is required. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ResourcesAllocationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ResourcesAllocationsIdRequest();
    $request->id = '9e510019-c6dc-45e3-8762-799bfbbe6949';

    $response = $sdk->resources->getSetupV1ResourcesAllocationsId($request);

    if ($response->resourceAllocationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ResourcesBlocksId

<p>Use this endpoint to <b>Get</b> a Resource Block. A valid <b>resourceBlock id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ResourcesBlocksIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ResourcesBlocksIdRequest();
    $request->id = 'fb2bb4ec-ae6c-43d5-9b3a-debd5daea4c5';

    $response = $sdk->resources->getSetupV1ResourcesBlocksId($request);

    if ($response->resourceBlockViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ResourcesTimezones

<p>Use this endpoint to return a <b>List of Time Zones</b>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->resources->getSetupV1ResourcesTimezones();

    if ($response->systemTimezoneViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ResourcesId

<p>Use this endpoint to return a <b>Resource</b> object. A valid <b>resource id</b> is required. Find resource id's by using the: <i>GET /setup/v1/resources</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ResourcesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ResourcesIdRequest();
    $request->googleAuthReturnUrl = 'alias';
    $request->id = '6a8aa94c-0264-44cf-9e9d-9a4578adc1ac';
    $request->outlookAuthReturnUrl = 'laboriosam';

    $response = $sdk->resources->getSetupV1ResourcesId($request);

    if ($response->resourceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ResourcesIdAllocations

<p>Use this endpoint to return a list of <b>Resource Allocations</b> for a specified resource. We recommend using allocations if a resource's schedule changes frequently from day to day or week to week. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ResourcesIdAllocationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ResourcesIdAllocationsRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-20T11:24:22.596Z');
    $request->id = 'dec001ac-802e-42ec-89ff-8f0f816ff347';
    $request->limit = 446547;
    $request->offset = 757407;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-18T16:16:49.615Z');

    $response = $sdk->resources->getSetupV1ResourcesIdAllocations($request);

    if ($response->resourceAllocationListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ResourcesIdAvailability

<p>Use this endpoint to view the <b>Weekly Availability</b> for a resource. The displayed available times are represented in the resource's timezone. The resource timezone can be set to any world timezone. If not provided, by default it is set to the Business timezone.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ResourcesIdAvailabilityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ResourcesIdAvailabilityRequest();
    $request->id = 'e902c141-25b0-4960-a668-151a472af923';

    $response = $sdk->resources->getSetupV1ResourcesIdAvailability($request);

    if ($response->resourceAvailabilityViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ResourcesIdBlocks

<p>Use this endpoint to return a list of <b>Resource Blocks</b>. A valid <b>resource id</b> is required. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ResourcesIdBlocksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ResourcesIdBlocksRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-27T01:32:30.329Z');
    $request->id = '949f83f3-50cf-4876-bfb9-01c6ecbb4e24';
    $request->limit = 194058;
    $request->offset = 758194;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-15T10:28:46.191Z');

    $response = $sdk->resources->getSetupV1ResourcesIdBlocks($request);

    if ($response->resourceBlockListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress

<p>Use this endpoint to return the <b>Resources Google Calendar Authorization URL</b>. A valid <b>resource id</b> and <b>Google Email Address</b> are required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRequest();
    $request->googleAuthReturnUrl = 'blanditiis';
    $request->googleEmailAddress = 'sint';
    $request->id = 'ffafeda5-3e5a-4e6e-8ac1-84c2b9c247c8';

    $response = $sdk->resources->getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress($request);

    if ($response->calendarAuthViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress

<p>Use this endpoint to return the <b>Resources Outlook Calendar Authorization URL</b>. A valid <b>resource id</b> and <b>Outlook Email Address</b> are required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest();
    $request->id = '8373a40e-1942-4f32-a550-55756f5d56d0';
    $request->outlookAuthReturnUrl = 'quidem';
    $request->outlookEmailAddress = 'repellendus';

    $response = $sdk->resources->getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress($request);

    if ($response->calendarAuthViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1Resources

<p>Use this endpoint to <b>Create</b> a new resource.</p>
<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSetupV1ResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceInputModel;
use \OpenAPI\OpenAPI\Models\Shared\AddressInputModel;
use \OpenAPI\OpenAPI\Models\Shared\AvailabilityInputModel;
use \OpenAPI\OpenAPI\Models\Shared\WeekDayInputModel;
use \OpenAPI\OpenAPI\Models\Shared\ContactInputModel;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldInputModel;
use \OpenAPI\OpenAPI\Models\Shared\ResourceOptionsInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetupV1ResourcesRequest();
    $request->resourceInputModel = new ResourceInputModel();
    $request->resourceInputModel->address = new AddressInputModel();
    $request->resourceInputModel->address->addressLine1 = 'perferendis';
    $request->resourceInputModel->address->addressLine2 = 'id';
    $request->resourceInputModel->address->city = 'Cathedral City';
    $request->resourceInputModel->address->country = 'Somalia';
    $request->resourceInputModel->address->postalCode = '91286-2941';
    $request->resourceInputModel->address->state = 'minus';
    $request->resourceInputModel->availability = new AvailabilityInputModel();
    $request->resourceInputModel->availability->fri = new WeekDayInputModel();
    $request->resourceInputModel->availability->fri->endTime = 746688;
    $request->resourceInputModel->availability->fri->startTime = 677509;
    $request->resourceInputModel->availability->mon = new WeekDayInputModel();
    $request->resourceInputModel->availability->mon->endTime = 242531;
    $request->resourceInputModel->availability->mon->startTime = 937865;
    $request->resourceInputModel->availability->sat = new WeekDayInputModel();
    $request->resourceInputModel->availability->sat->endTime = 510020;
    $request->resourceInputModel->availability->sat->startTime = 621140;
    $request->resourceInputModel->availability->sun = new WeekDayInputModel();
    $request->resourceInputModel->availability->sun->endTime = 252473;
    $request->resourceInputModel->availability->sun->startTime = 97810;
    $request->resourceInputModel->availability->thu = new WeekDayInputModel();
    $request->resourceInputModel->availability->thu->endTime = 649032;
    $request->resourceInputModel->availability->thu->startTime = 884361;
    $request->resourceInputModel->availability->tue = new WeekDayInputModel();
    $request->resourceInputModel->availability->tue->endTime = 687589;
    $request->resourceInputModel->availability->tue->startTime = 769156;
    $request->resourceInputModel->availability->wed = new WeekDayInputModel();
    $request->resourceInputModel->availability->wed->endTime = 42615;
    $request->resourceInputModel->availability->wed->startTime = 711871;
    $request->resourceInputModel->contact = new ContactInputModel();
    $request->resourceInputModel->contact->businessPhone = 'corrupti';
    $request->resourceInputModel->contact->businessPhoneExt = 'eaque';
    $request->resourceInputModel->contact->conferenceInfo = 'deserunt';
    $request->resourceInputModel->contact->homePhone = 'aliquid';
    $request->resourceInputModel->contact->mobilePhone = 'excepturi';
    $request->resourceInputModel->contact->preferredPhoneType = 'magni';
    $request->resourceInputModel->contact->skypeUsername = 'tempora';
    $request->resourceInputModel->customFields = new CustomFieldInputModel();
    $request->resourceInputModel->customFields->field1 = 'possimus';
    $request->resourceInputModel->customFields->field10 = 'dolor';
    $request->resourceInputModel->customFields->field2 = 'rerum';
    $request->resourceInputModel->customFields->field3 = 'sed';
    $request->resourceInputModel->customFields->field4 = 'accusamus';
    $request->resourceInputModel->customFields->field5 = 'optio';
    $request->resourceInputModel->customFields->field6 = 'delectus';
    $request->resourceInputModel->customFields->field7 = 'minus';
    $request->resourceInputModel->customFields->field8 = 'quo';
    $request->resourceInputModel->customFields->field9 = 'quos';
    $request->resourceInputModel->description = 'asperiores';
    $request->resourceInputModel->email = 'Letha7@yahoo.com';
    $request->resourceInputModel->groupId = 'aut';
    $request->resourceInputModel->locationId = 'doloribus';
    $request->resourceInputModel->name = 'Lynette Senger';
    $request->resourceInputModel->options = new ResourceOptionsInputModel();
    $request->resourceInputModel->options->bioLink = 'vel';
    $request->resourceInputModel->options->bookingNotification = 960813;
    $request->resourceInputModel->options->calendarAvailability = 652515;
    $request->resourceInputModel->options->displayColor = 'quae';
    $request->resourceInputModel->options->effectiveDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-29T11:06:49.831Z');
    $request->resourceInputModel->options->gender = 'female';
    $request->resourceInputModel->options->googleCalendarId = 'voluptates';
    $request->resourceInputModel->options->hourly = 3240.52;
    $request->resourceInputModel->options->ignoreBusinessHours = false;
    $request->resourceInputModel->options->notificationType = 305047;
    $request->resourceInputModel->options->outlookCalendarId = 'quisquam';
    $request->resourceInputModel->options->sortKey = 557987;
    $request->resourceInputModel->recurringAvailability = false;
    $request->resourceInputModel->serviceIds = [
        'maiores',
    ];
    $request->resourceInputModel->timezoneId = 'inventore';
    $request->googleAuthReturnUrl = 'aliquid';
    $request->outlookAuthReturnUrl = 'laudantium';

    $response = $sdk->resources->postSetupV1Resources($request);

    if ($response->resourceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1ResourcesBulk

<p>Use this endpoint to <b>Bulk Create</b> resources. Valid <b>resource ids</b> are required. The posted list of resources cannot exceed 100 resource objects per transaction for performance purposes.</p>
<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSetupV1ResourcesBulkRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourcesInputModel;
use \OpenAPI\OpenAPI\Models\Shared\ResourceInputModel;
use \OpenAPI\OpenAPI\Models\Shared\AddressInputModel;
use \OpenAPI\OpenAPI\Models\Shared\AvailabilityInputModel;
use \OpenAPI\OpenAPI\Models\Shared\WeekDayInputModel;
use \OpenAPI\OpenAPI\Models\Shared\ContactInputModel;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldInputModel;
use \OpenAPI\OpenAPI\Models\Shared\ResourceOptionsInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetupV1ResourcesBulkRequest();
    $request->resourcesInputModel = new ResourcesInputModel();
    $request->resourcesInputModel->resources = [
        new ResourceInputModel(),
        new ResourceInputModel(),
        new ResourceInputModel(),
    ];
    $request->googleAuthReturnUrl = 'dolor';
    $request->outlookAuthReturnUrl = 'aliquid';

    $response = $sdk->resources->postSetupV1ResourcesBulk($request);

    if ($response->resourceViewModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1ResourcesIdAllocations

<p>Use this endpoint to <b>Create</b> a resource allocation for a resource. A valid <b>resource id</b> is required.</p>
<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>. Resource allocations can be set to specific time ranges or for the whole day by setting startTime=0 and endTime=2400. They can repeat for a specific date range instance or set to repeat at a specified frequency.</p>
<p>
  <b>Repeat object: (repeats = true)</b>
</p>
<p>The <b>frequency</b> can be set to a value of <b>D, W or M </b>for <b>Day, Week</b> or <b>Month</b> respectively.</p>
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
use \OpenAPI\OpenAPI\Models\Operations\PostSetupV1ResourcesIdAllocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceAllocationInputModel;
use \OpenAPI\OpenAPI\Models\Shared\RepeatInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetupV1ResourcesIdAllocationsRequest();
    $request->resourceAllocationInputModel = new ResourceAllocationInputModel();
    $request->resourceAllocationInputModel->endDate = DateTime::createFromFormat('Y-m-d', '2022-03-26');
    $request->resourceAllocationInputModel->endTime = 525917;
    $request->resourceAllocationInputModel->reason = 'voluptatum';
    $request->resourceAllocationInputModel->repeat = new RepeatInputModel();
    $request->resourceAllocationInputModel->repeat->frequency = 'ducimus';
    $request->resourceAllocationInputModel->repeat->interval = 237523;
    $request->resourceAllocationInputModel->repeat->monthDay = 927959;
    $request->resourceAllocationInputModel->repeat->monthType = 'tempora';
    $request->resourceAllocationInputModel->repeat->weekdays = 'blanditiis';
    $request->resourceAllocationInputModel->repeats = false;
    $request->resourceAllocationInputModel->startDate = DateTime::createFromFormat('Y-m-d', '2022-10-21');
    $request->resourceAllocationInputModel->startTime = 532320;
    $request->id = '0b1f6b8c-a275-4a60-a04c-495cc699171b';

    $response = $sdk->resources->postSetupV1ResourcesIdAllocations($request);

    if ($response->resourceBlockViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1ResourcesIdBlock

<p>Use this endpoint to <b>Create</b> a Resource Block. A valid <b>resource id</b> is required.</p>
<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>
<p>Resource blocks can be set to specific time ranges or for the whole day. Use the <b>AllDay</b> setting to create an all-day block. <b>AllDay</b> will automatically set startTime to 0 and endTime to 2400.</p>
<p>Resource blocks can be for a specific date range instance or set to repeat at a specified frequency. </p>
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
  <b>MONTHLY BLOCKS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly, <b>monthDay</b> is the day of the month you want blocked.  If monthDay=’15’ this means to block the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on. For <b>monthType M</b>, monthDay value contains 2 digits: day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”. </p>
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
use \OpenAPI\OpenAPI\Models\Operations\PostSetupV1ResourcesIdBlockRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceBlockInputModel;
use \OpenAPI\OpenAPI\Models\Shared\RepeatInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetupV1ResourcesIdBlockRequest();
    $request->resourceBlockInputModel = new ResourceBlockInputModel();
    $request->resourceBlockInputModel->allDay = false;
    $request->resourceBlockInputModel->endDate = DateTime::createFromFormat('Y-m-d', '2022-11-26');
    $request->resourceBlockInputModel->endTime = 766591;
    $request->resourceBlockInputModel->reason = 'dicta';
    $request->resourceBlockInputModel->repeat = new RepeatInputModel();
    $request->resourceBlockInputModel->repeat->frequency = 'harum';
    $request->resourceBlockInputModel->repeat->interval = 813224;
    $request->resourceBlockInputModel->repeat->monthDay = 707983;
    $request->resourceBlockInputModel->repeat->monthType = 'beatae';
    $request->resourceBlockInputModel->repeat->weekdays = 'cumque';
    $request->resourceBlockInputModel->repeats = false;
    $request->resourceBlockInputModel->startDate = DateTime::createFromFormat('Y-m-d', '2022-02-20');
    $request->resourceBlockInputModel->startTime = 712640;
    $request->id = '888ebdfc-4ccc-4a99-bc7f-c0b2dce10873';

    $response = $sdk->resources->postSetupV1ResourcesIdBlock($request);

    if ($response->resourceBlockViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1ResourcesIdServices

<p>Use this endpoint to explicitly <b>Link Services</b> to a Resource. A valid <b>resource id</b> is required.</p>
<p>
  <b>Note:</b> By default, the services array is empty which signifies that all services are provided by the resource. Linking services here will add to the linked service(s) array available to this resource. This will limit the services available to the resource.</p>
<p>You cannot post services that already exist in the array, you can only add new ones. Use the <i>PUT ​/setup​/v1​/resources​/{id}​/services</i> endpoint to update the entire list.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSetupV1ResourcesIdServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetupV1ResourcesIdServicesRequest();
    $request->requestBody = [
        'tempora',
        'magni',
        'rerum',
        'doloremque',
    ];
    $request->id = '06d67887-8ba8-4581-a582-08c54fefa9c9';

    $response = $sdk->resources->postSetupV1ResourcesIdServices($request);

    if ($response->resourceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1ResourcesIdUploadimage

<p>Use this endpoint to <b>Upload</b> a resource image to the resource. A valid <b>resource id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSetupV1ResourcesIdUploadimageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceImageInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetupV1ResourcesIdUploadimageRequest();
    $request->resourceImageInputModel = new ResourceImageInputModel();
    $request->resourceImageInputModel->imageFileData = 'quaerat';
    $request->resourceImageInputModel->imageFileName = 'doloribus';
    $request->id = '2eac5565-d307-4cfe-a812-06e2813fa4a4';

    $response = $sdk->resources->postSetupV1ResourcesIdUploadimage($request);

    if ($response->resourceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ResourcesAllocationsId

<p>Use this endpoint to <b>Update</b> a resource allocation. A valid <b>resourceAllocation id</b> is required. Refer to the <i>POST /setup/v1/resources/{id}/allocations</i> endpoint for details.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ResourcesAllocationsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceAllocationUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\RepeatInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ResourcesAllocationsIdRequest();
    $request->resourceAllocationUpdateModel = new ResourceAllocationUpdateModel();
    $request->resourceAllocationUpdateModel->endDate = DateTime::createFromFormat('Y-m-d', '2022-03-25');
    $request->resourceAllocationUpdateModel->endTime = 259600;
    $request->resourceAllocationUpdateModel->reason = 'voluptatum';
    $request->resourceAllocationUpdateModel->repeat = new RepeatInputModel();
    $request->resourceAllocationUpdateModel->repeat->frequency = 'ipsa';
    $request->resourceAllocationUpdateModel->repeat->interval = 872991;
    $request->resourceAllocationUpdateModel->repeat->monthDay = 209860;
    $request->resourceAllocationUpdateModel->repeat->monthType = 'repellat';
    $request->resourceAllocationUpdateModel->repeat->weekdays = 'aspernatur';
    $request->resourceAllocationUpdateModel->repeats = false;
    $request->resourceAllocationUpdateModel->startDate = DateTime::createFromFormat('Y-m-d', '2022-10-22');
    $request->resourceAllocationUpdateModel->startTime = 143078;
    $request->id = 'af03102d-514f-44cc-af18-bf9621a6a4f7';

    $response = $sdk->resources->putSetupV1ResourcesAllocationsId($request);

    if ($response->resourceBlockViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ResourcesBlockId

<p>Use this endpoint to <b>Update</b> a Resource Block. A valid <b>resourceBlock id</b> is required. Refer to the <i>POST ​/setup​/v1​/resources​/{id}​/block</i> endpoint for fieldnames and details.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ResourcesBlockIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceBlockUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\RepeatInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ResourcesBlockIdRequest();
    $request->resourceBlockUpdateModel = new ResourceBlockUpdateModel();
    $request->resourceBlockUpdateModel->allDay = false;
    $request->resourceBlockUpdateModel->endDate = DateTime::createFromFormat('Y-m-d', '2022-05-06');
    $request->resourceBlockUpdateModel->endTime = 512488;
    $request->resourceBlockUpdateModel->reason = 'esse';
    $request->resourceBlockUpdateModel->repeat = new RepeatInputModel();
    $request->resourceBlockUpdateModel->repeat->frequency = 'eveniet';
    $request->resourceBlockUpdateModel->repeat->interval = 935161;
    $request->resourceBlockUpdateModel->repeat->monthDay = 246402;
    $request->resourceBlockUpdateModel->repeat->monthType = 'officiis';
    $request->resourceBlockUpdateModel->repeat->weekdays = 'eius';
    $request->resourceBlockUpdateModel->repeats = false;
    $request->resourceBlockUpdateModel->startDate = DateTime::createFromFormat('Y-m-d', '2021-02-21');
    $request->resourceBlockUpdateModel->startTime = 489685;
    $request->id = '52c65b34-418e-43bb-91c8-d975e0e8419d';

    $response = $sdk->resources->putSetupV1ResourcesBlockId($request);

    if ($response->resourceBlockViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ResourcesBulk

<p>Use this endpoint to <b>Bulk Update</b> resources. Valid <b>resource id's</b> are required. The list of resources cannot exceed 100 resource objects per transaction for performance purposes.</p>
<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ResourcesBulkRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourcesUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\ResourceBulkUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\AddressUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\AvailabilityInputModel;
use \OpenAPI\OpenAPI\Models\Shared\WeekDayInputModel;
use \OpenAPI\OpenAPI\Models\Shared\ContactUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\ResourceOptionsUpdateModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ResourcesBulkRequest();
    $request->resourcesUpdateModel = new ResourcesUpdateModel();
    $request->resourcesUpdateModel->resources = [
        new ResourceBulkUpdateModel(),
        new ResourceBulkUpdateModel(),
        new ResourceBulkUpdateModel(),
    ];
    $request->googleAuthReturnUrl = 'tenetur';
    $request->outlookAuthReturnUrl = 'deleniti';

    $response = $sdk->resources->putSetupV1ResourcesBulk($request);

    if ($response->resourceViewModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ResourcesId

<p>Use this endpoint to <b>Update</b> a resource. A valid <b>resource id</b> is required.</p>
<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ResourcesIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\AddressUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\AvailabilityInputModel;
use \OpenAPI\OpenAPI\Models\Shared\WeekDayInputModel;
use \OpenAPI\OpenAPI\Models\Shared\ContactUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\ResourceOptionsUpdateModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ResourcesIdRequest();
    $request->resourceUpdateModel = new ResourceUpdateModel();
    $request->resourceUpdateModel->address = new AddressUpdateModel();
    $request->resourceUpdateModel->address->addressLine1 = 'modi';
    $request->resourceUpdateModel->address->addressLine2 = 'earum';
    $request->resourceUpdateModel->address->city = 'West Edmondworth';
    $request->resourceUpdateModel->address->country = 'Comoros';
    $request->resourceUpdateModel->address->postalCode = '04887-7366';
    $request->resourceUpdateModel->address->state = 'ad';
    $request->resourceUpdateModel->availability = new AvailabilityInputModel();
    $request->resourceUpdateModel->availability->fri = new WeekDayInputModel();
    $request->resourceUpdateModel->availability->fri->endTime = 970411;
    $request->resourceUpdateModel->availability->fri->startTime = 196451;
    $request->resourceUpdateModel->availability->mon = new WeekDayInputModel();
    $request->resourceUpdateModel->availability->mon->endTime = 785555;
    $request->resourceUpdateModel->availability->mon->startTime = 671528;
    $request->resourceUpdateModel->availability->sat = new WeekDayInputModel();
    $request->resourceUpdateModel->availability->sat->endTime = 748973;
    $request->resourceUpdateModel->availability->sat->startTime = 842974;
    $request->resourceUpdateModel->availability->sun = new WeekDayInputModel();
    $request->resourceUpdateModel->availability->sun->endTime = 607624;
    $request->resourceUpdateModel->availability->sun->startTime = 16252;
    $request->resourceUpdateModel->availability->thu = new WeekDayInputModel();
    $request->resourceUpdateModel->availability->thu->endTime = 369941;
    $request->resourceUpdateModel->availability->thu->startTime = 642804;
    $request->resourceUpdateModel->availability->tue = new WeekDayInputModel();
    $request->resourceUpdateModel->availability->tue->endTime = 584640;
    $request->resourceUpdateModel->availability->tue->startTime = 442873;
    $request->resourceUpdateModel->availability->wed = new WeekDayInputModel();
    $request->resourceUpdateModel->availability->wed->endTime = 157281;
    $request->resourceUpdateModel->availability->wed->startTime = 898088;
    $request->resourceUpdateModel->contact = new ContactUpdateModel();
    $request->resourceUpdateModel->contact->businessPhone = 'accusantium';
    $request->resourceUpdateModel->contact->businessPhoneExt = 'ad';
    $request->resourceUpdateModel->contact->conferenceInfo = 'nisi';
    $request->resourceUpdateModel->contact->homePhone = 'molestiae';
    $request->resourceUpdateModel->contact->mobilePhone = 'quia';
    $request->resourceUpdateModel->contact->preferredPhoneType = 'laudantium';
    $request->resourceUpdateModel->contact->skypeUsername = 'sed';
    $request->resourceUpdateModel->customFields = new CustomFieldUpdateModel();
    $request->resourceUpdateModel->customFields->field1 = 'odit';
    $request->resourceUpdateModel->customFields->field10 = 'iusto';
    $request->resourceUpdateModel->customFields->field2 = 'expedita';
    $request->resourceUpdateModel->customFields->field3 = 'eos';
    $request->resourceUpdateModel->customFields->field4 = 'repellendus';
    $request->resourceUpdateModel->customFields->field5 = 'nesciunt';
    $request->resourceUpdateModel->customFields->field6 = 'ipsa';
    $request->resourceUpdateModel->customFields->field7 = 'sint';
    $request->resourceUpdateModel->customFields->field8 = 'dolore';
    $request->resourceUpdateModel->customFields->field9 = 'esse';
    $request->resourceUpdateModel->description = 'accusantium';
    $request->resourceUpdateModel->email = 'Vern.Kohler96@hotmail.com';
    $request->resourceUpdateModel->groupId = 'culpa';
    $request->resourceUpdateModel->locationId = 'voluptatum';
    $request->resourceUpdateModel->name = 'Jody Wolff';
    $request->resourceUpdateModel->options = new ResourceOptionsUpdateModel();
    $request->resourceUpdateModel->options->bioLink = 'ullam';
    $request->resourceUpdateModel->options->bookingNotification = 675058;
    $request->resourceUpdateModel->options->calendarAvailability = 378268;
    $request->resourceUpdateModel->options->displayColor = 'doloribus';
    $request->resourceUpdateModel->options->effectiveDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-24T00:35:46.114Z');
    $request->resourceUpdateModel->options->gender = 'female';
    $request->resourceUpdateModel->options->googleCalendarId = 'non';
    $request->resourceUpdateModel->options->hourly = 9003.68;
    $request->resourceUpdateModel->options->ignoreBusinessHours = false;
    $request->resourceUpdateModel->options->notificationType = 719469;
    $request->resourceUpdateModel->options->outlookCalendarId = 'maiores';
    $request->resourceUpdateModel->options->sortKey = 386538;
    $request->resourceUpdateModel->recurringAvailability = false;
    $request->resourceUpdateModel->serviceIds = [
        'optio',
    ];
    $request->resourceUpdateModel->timezoneId = 'sequi';
    $request->googleAuthReturnUrl = 'sunt';
    $request->id = '1f023b75-d236-47fe-9a0c-c8df79f0a396';
    $request->outlookAuthReturnUrl = 'repellendus';

    $response = $sdk->resources->putSetupV1ResourcesId($request);

    if ($response->resourceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ResourcesIdAvailability

<p>Use this endpoint to <b>Update</b> resource weekly availability. A valid <b>resource id</b> is required. The availability day entries are created when a resource object is created.</p>
<p>To update weekly availability hours, all days of the week must be provided. Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. The <b>startTime</b> and <b>endTime</b> fields are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0.</p>
<p>If you require times in between specified hours to be unavailable, use the resource blocks endpoints. Times entered represent the timezone of the resource. Resources can be set to any world timezone. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ResourcesIdAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\AvailabilityInputModel;
use \OpenAPI\OpenAPI\Models\Shared\WeekDayInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ResourcesIdAvailabilityRequest();
    $request->availabilityInputModel = new AvailabilityInputModel();
    $request->availabilityInputModel->fri = new WeekDayInputModel();
    $request->availabilityInputModel->fri->endTime = 601277;
    $request->availabilityInputModel->fri->startTime = 1116;
    $request->availabilityInputModel->mon = new WeekDayInputModel();
    $request->availabilityInputModel->mon->endTime = 771931;
    $request->availabilityInputModel->mon->startTime = 196700;
    $request->availabilityInputModel->sat = new WeekDayInputModel();
    $request->availabilityInputModel->sat->endTime = 413086;
    $request->availabilityInputModel->sat->startTime = 287141;
    $request->availabilityInputModel->sun = new WeekDayInputModel();
    $request->availabilityInputModel->sun->endTime = 710059;
    $request->availabilityInputModel->sun->startTime = 446737;
    $request->availabilityInputModel->thu = new WeekDayInputModel();
    $request->availabilityInputModel->thu->endTime = 789870;
    $request->availabilityInputModel->thu->startTime = 123795;
    $request->availabilityInputModel->tue = new WeekDayInputModel();
    $request->availabilityInputModel->tue->endTime = 317260;
    $request->availabilityInputModel->tue->startTime = 859725;
    $request->availabilityInputModel->wed = new WeekDayInputModel();
    $request->availabilityInputModel->wed->endTime = 979271;
    $request->availabilityInputModel->wed->startTime = 715622;
    $request->id = 'ace188b1-c4ee-42c8-86ce-611feeb1c7cb';

    $response = $sdk->resources->putSetupV1ResourcesIdAvailability($request);

    if ($response->resourceAvailabilityViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ResourcesIdReassignAppointmentsResourceId

<p>Use this endpoint to <b>Reassign</b> appointments from one resource to another. If the startDate is not supplied, the default is today's date + 1 day; If the endDate is not supplied, all future appointments from the start date will be reassigned. If the calendar id is not supplied the default is the primary calendar of the location.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest();
    $request->calendarId = 'possimus';
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-27T21:22:17.518Z');
    $request->id = 'eec74378-ba25-4317-b47d-c915ad2caf5d';
    $request->resourceId = 'quibusdam';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-18T10:11:15.515Z');

    $response = $sdk->resources->putSetupV1ResourcesIdReassignAppointmentsResourceId($request);

    if ($response->appointmentViewModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ResourcesIdRecover

<p>Use this endpoint to <b>Recover</b> a deleted resource. A valid <b>resource id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ResourcesIdRecoverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ResourcesIdRecoverRequest();
    $request->googleAuthReturnUrl = 'explicabo';
    $request->id = '3dc0f5ae-2f3a-46b7-8087-8756143f5a6c';
    $request->outlookAuthReturnUrl = 'provident';

    $response = $sdk->resources->putSetupV1ResourcesIdRecover($request);

    if ($response->resourceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ResourcesIdServices

<p>Use this endpoint to <b>Update</b> the linked services of a Resource. A valid <b>resource id</b> is required.</p>
<p>Updating services with this endpoint will update the linked services available to the resource. Only those services will be available to the resource.</p>
<p>
  <b>Note:</b> This is a destructive process, any existing linked services will be removed and replaced with the list of services supplied here. Provide the resources complete list of services when using this endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ResourcesIdServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ResourcesIdServicesRequest();
    $request->requestBody = [
        'nam',
        'nemo',
        'enim',
    ];
    $request->id = '554080d4-0bca-4cc6-8bd6-b5f3ec909304';

    $response = $sdk->resources->putSetupV1ResourcesIdServices($request);

    if ($response->resourceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
