# locations

### Available Operations

* [deleteSetupV1LocationsServicesId](#deletesetupv1locationsservicesid) - Unlink Service
* [deleteSetupV1LocationsId](#deletesetupv1locationsid) - Delete Location
* [deleteSetupV1LocationsIdDeleteallimages](#deletesetupv1locationsiddeleteallimages) - Delete All Location Images
* [deleteSetupV1LocationsIdDeleteimage](#deletesetupv1locationsiddeleteimage) - Delete Location Image
* [deleteSetupV1LocationsIdEmailTemplatesMaster](#deletesetupv1locationsidemailtemplatesmaster) - Delete Master Template Settings
* [deleteSetupV1LocationsIdEmailTemplatesTemplateName](#deletesetupv1locationsidemailtemplatestemplatename) - Delete Custom Template
* [deleteSetupV1LocationsIdGoogleServiceAccount](#deletesetupv1locationsidgoogleserviceaccount) - Delete Google Cal Access
* [deleteSetupV1LocationsIdServices](#deletesetupv1locationsidservices) - Delete Linked Services
* [getSetupV1Locations](#getsetupv1locations) - List Locations
* [getSetupV1LocationsServicesId](#getsetupv1locationsservicesid) - Get Linked Service
* [getSetupV1LocationsId](#getsetupv1locationsid) - Get Location
* [getSetupV1LocationsIdAppointmentreminders](#getsetupv1locationsidappointmentreminders) - Get Reminders
* [getSetupV1LocationsIdEmailTemplates](#getsetupv1locationsidemailtemplates) - List Email Templates
* [getSetupV1LocationsIdEmailTemplatesMaster](#getsetupv1locationsidemailtemplatesmaster) - Get Master Template Settings
* [getSetupV1LocationsIdEmailTemplatesTemplateName](#getsetupv1locationsidemailtemplatestemplatename) - Get Email Template
* [getSetupV1LocationsIdServices](#getsetupv1locationsidservices) - List Location Linked Services
* [postSetupV1Locations](#postsetupv1locations) - Create Location
* [postSetupV1LocationsBulk](#postsetupv1locationsbulk) - Create Locations Bulk
* [postSetupV1LocationsIdEmailTemplates](#postsetupv1locationsidemailtemplates) - Create Custom Template
* [postSetupV1LocationsIdEmailTemplatesMaster](#postsetupv1locationsidemailtemplatesmaster) - Create Master Template Settings
* [postSetupV1LocationsIdGoogleServiceAccount](#postsetupv1locationsidgoogleserviceaccount) - Create Google Cal Access
* [postSetupV1LocationsIdServices](#postsetupv1locationsidservices) - Create Linked Service
* [postSetupV1LocationsIdUploadimage](#postsetupv1locationsiduploadimage) - Upload Location Image
* [putSetupV1LocationsId](#putsetupv1locationsid) - Update Location
* [putSetupV1LocationsIdAppointmentreminders](#putsetupv1locationsidappointmentreminders) - Update Reminders
* [putSetupV1LocationsIdHolidaysHolidayIdClosed](#putsetupv1locationsidholidaysholidayidclosed) - Update Location Holidays
* [putSetupV1LocationsIdRecover](#putsetupv1locationsidrecover) - Recover Location
* [putSetupV1LocationsIdSettingsScopeSettingsScope](#putsetupv1locationsidsettingsscopesettingsscope) - Update Location Scope

## deleteSetupV1LocationsServicesId

<p>Use this endpoint to <b>Unlink</b> a location service from a business location. A valid <b>locationService id</b> is required. Find location services by using the <i>GET ​/setup​/v1​/locations​/{id}​/services</i> endpoint. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1LocationsServicesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1LocationsServicesIdRequest();
    $request->id = 'b6a89fbe-3a5a-4a8e-8824-d0ab4075088e';

    $response = $sdk->locations->deleteSetupV1LocationsServicesId($request);

    if ($response->locationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1LocationsId

<p>Use this endpoint to <b>Delete</b> a business location. A valid business <b>location id</b> is required. The location is not permanently deleted and can be recovered by using the <i>PUT /setup​/v1​/locations​/{id}​/recover</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1LocationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1LocationsIdRequest();
    $request->id = '51862065-e904-4f3b-9194-b8abf603a79f';

    $response = $sdk->locations->deleteSetupV1LocationsId($request);

    if ($response->locationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1LocationsIdDeleteallimages

<p>Use this endpoint to <b>Delete All</b> location images from the location blob storage container. An option exists to use upper case for matching the subdirectory name. Legacy apps stored pics using upper case while the API uses lower case names.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1LocationsIdDeleteallimagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1LocationsIdDeleteallimagesRequest();
    $request->id = '9dfe0ab7-da8a-450c-a187-f86bc173d689';
    $request->uppercase = false;

    $response = $sdk->locations->deleteSetupV1LocationsIdDeleteallimages($request);

    if ($response->deleteSetupV1LocationsIdDeleteallimages200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1LocationsIdDeleteimage

<p>Use this endpoint to <b>Delete</b> a previously uploaded location image. A valid business <b>location id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1LocationsIdDeleteimageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1LocationsIdDeleteimageRequest();
    $request->id = 'eee9526f-8d98-46e8-81ea-d4f0e1012563';

    $response = $sdk->locations->deleteSetupV1LocationsIdDeleteimage($request);

    if ($response->locationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1LocationsIdEmailTemplatesMaster

<p>Use this endpoint to <b>Delete Custom Master Email Template Settings</b>. A valid business <b>location id</b> is required. Deleting a custom master email template will reactivate the original default OnSched template settings.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1LocationsIdEmailTemplatesMasterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1LocationsIdEmailTemplatesMasterRequest();
    $request->id = 'f94e29e9-73e9-422a-97a1-5be3e060807e';

    $response = $sdk->locations->deleteSetupV1LocationsIdEmailTemplatesMaster($request);

    if ($response->masterEmailTemplateSettingsViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1LocationsIdEmailTemplatesTemplateName

<p>Use this endpoint to <b>Delete</b> a Custom Email Template that was previously created. A valid business <b>location id</b> and email <b>templateName</b> are required. Deleting a custom email template will revert the template back to its default originally created by OnSched. Changes will be reflected in all business locations associated with this company.</p>
<p>The email template endpoints work a little differently than most. When you delete you are deleting the custom template you created, and the original default Email Template created by OnSched will be reactivated.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1LocationsIdEmailTemplatesTemplateNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1LocationsIdEmailTemplatesTemplateNameRequest();
    $request->id = '2b6e3ab8-845f-4059-ba60-ff2a54a31e94';
    $request->templateName = 'molestiae';

    $response = $sdk->locations->deleteSetupV1LocationsIdEmailTemplatesTemplateName($request);

    if ($response->contentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1LocationsIdGoogleServiceAccount

<p>Use this endpoint to <b>Delete</b> authorized access to all google calendar users in your organization. Upon deletion Google Calendars will no longer be synced for resources.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1LocationsIdGoogleServiceAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1LocationsIdGoogleServiceAccountRequest();
    $request->id = '64a3e865-e795-46f9-a51a-5a9da660ff57';

    $response = $sdk->locations->deleteSetupV1LocationsIdGoogleServiceAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1LocationsIdServices

<p>Use this endpoint to <b>Delete All</b> location linked services from a business location. A valid business <b>location id</b> is required. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1LocationsIdServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1LocationsIdServicesRequest();
    $request->id = 'bfaad4f9-efc1-4b45-92c1-032648dc2f61';

    $response = $sdk->locations->deleteSetupV1LocationsIdServices($request);

    if ($response->locationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1Locations

<p>Use this endpoint to <b>List Business Locations</b> associated with your company. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1LocationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1LocationsRequest();
    $request->deleted = false;
    $request->friendlyId = 'minima';
    $request->limit = 107004;
    $request->name = 'Rene Weber';
    $request->offset = 848151;
    $request->serviceId = 'eaque';

    $response = $sdk->locations->getSetupV1Locations($request);

    if ($response->locationListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1LocationsServicesId

<p>Use this endpoint to <b>Get a Linked Service</b>. A valid <b>locationService id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1LocationsServicesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1LocationsServicesIdRequest();
    $request->id = 'e9fe6c63-2ca3-4aed-8117-996312fde047';

    $response = $sdk->locations->getSetupV1LocationsServicesId($request);

    if ($response->businessServiceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1LocationsId

<p>Use this endpoint to return a <b>Location</b> object. A valid <b>location id</b> is required. If not specified, the business location defaults to the primary business location. Find all business location id's, by using the <i>GET /consumer/v1/locations</i> endpoint.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1LocationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1LocationsIdRequest();
    $request->id = '71778ff6-1d01-4747-a360-a15db6a66065';

    $response = $sdk->locations->getSetupV1LocationsId($request);

    if ($response->locationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1LocationsIdAppointmentreminders

<p>Use this endpoint to <b>Get Email and SMS appointment reminder settings</b> for the requested location. A valid business <b>location id</b> is required. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1LocationsIdAppointmentremindersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1LocationsIdAppointmentremindersRequest();
    $request->id = '9a1adeaa-b585-41d6-8645-b08b61891baa';

    $response = $sdk->locations->getSetupV1LocationsIdAppointmentreminders($request);

    if ($response->appointmentReminderViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1LocationsIdEmailTemplates

<p>Use this endpoint to return a <b>List of Email Templates</b> that are provided and may be customized. If the template has been customized, the customized property is true. The scope parameter indicates if the email template has been customized. This endpoint returns <b>only company level templates</b>, so the scope is always company.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1LocationsIdEmailTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1LocationsIdEmailTemplatesRequest();
    $request->id = '0fe1ade0-08e6-4f8c-9f35-0d8cdb5a3418';

    $response = $sdk->locations->getSetupV1LocationsIdEmailTemplates($request);

    if ($response->emailTemplateListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1LocationsIdEmailTemplatesMaster

<p>Use this endpoint to get <b>Master Email Template Settings</b>. A valid business <b>location id</b> is required. Settings exist for showing or hiding panels and for changing color schemes. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1LocationsIdEmailTemplatesMasterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1LocationsIdEmailTemplatesMasterRequest();
    $request->id = '14301042-1813-4d52-88ec-e7e253b66845';

    $response = $sdk->locations->getSetupV1LocationsIdEmailTemplatesMaster($request);

    if ($response->masterEmailTemplateSettingsViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1LocationsIdEmailTemplatesTemplateName

<p>Use this endpoint to return the requested <b>Email Template</b>. The template is from the primary business location. If it wasn't customized the default template is returned. The response content is in html format. A valid <b>emailTemplate name</b> is required. Find template names by using the <i>GET ​/setup​/v1​/locations​/{id}​/email​/templates</i> endpoint. Note: The master template cannot be accessed here. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1LocationsIdEmailTemplatesTemplateNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1LocationsIdEmailTemplatesTemplateNameRequest();
    $request->id = '1c6c6e20-5e16-4dea-b3fe-c9578a645842';
    $request->templateName = 'ducimus';

    $response = $sdk->locations->getSetupV1LocationsIdEmailTemplatesTemplateName($request);

    if ($response->contentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1LocationsIdServices

<p>Use this endpoint to return a list of <b>Location Linked Services</b>. A valid business <b>location id</b> is required. By default, there are no location linked services attached to a location. Refer to the: <i>POST /setup​/v1​/locations​/{id}​/services</i> for details. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1LocationsIdServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1LocationsIdServicesRequest();
    $request->id = '3a8418d1-6230-49fb-8929-921aefb9f58c';
    $request->limit = 300403;
    $request->offset = 836364;

    $response = $sdk->locations->getSetupV1LocationsIdServices($request);

    if ($response->businessServiceListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1Locations

<p>Use this endpoint to <b>Create</b> a new business location. The result is a business location object with a GUID assigned to the location.</p>
<p>The <b>name</b> and <b>timezoneName</b> fields are required. The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>. Refer to: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone Wiki</a> for a listing of IANA time zones.</p>
<p>
  <b>Business hours</b> are set by defining the <b>startTime</b> and <b>endTime</b> values for each day available/open. All days of the week must be provided when setting availability. Days are defined as <b>sun, mon, tue, wed, thu, fri and sat</b>. Start and End Times are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. If there is no physical location and the business hours are irrelevant, set the hours to open 24 hours by setting startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. </p>
<p>
  <b>Settings</b> can be set here. Booking timer minutes, book ahead restrictions and customer bookings per day are all available here. Please read about the settings scope parameter before setting these values as it may simplify your process.</p>
<p>
  <b>Settings Scope</b> can be set to the company or the business location level. You can have all locations use the same company level settings or individual business locations can define their own, business location scope. If you want to use the company settings throughout all locations, do not pass in <b>settings element</b>. To create business location scoped settings, pass in the <b>settings element</b> with the field values defined in the post body. </p>
<p>
  <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>
<p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>
<p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\LocationInputModel;
use \OpenAPI\OpenAPI\Models\Shared\AddressInputModel;
use \OpenAPI\OpenAPI\Models\Shared\AppointmentRemindersInputModel;
use \OpenAPI\OpenAPI\Models\Shared\BusinessHoursInputModel;
use \OpenAPI\OpenAPI\Models\Shared\BusinessHourInputModel;
use \OpenAPI\OpenAPI\Models\Shared\BusinessDefaultsInputModel;
use \OpenAPI\OpenAPI\Models\Shared\OnlineSettingsInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LocationInputModel();
    $request->address = new AddressInputModel();
    $request->address->addressLine1 = 'quos';
    $request->address->addressLine2 = 'commodi';
    $request->address->city = 'Independence';
    $request->address->country = 'Macedonia';
    $request->address->postalCode = '27803-4002';
    $request->address->state = 'maiores';
    $request->adminEmail = 'enim';
    $request->adminName = 'sint';
    $request->appointmentReminders = new AppointmentRemindersInputModel();
    $request->appointmentReminders->emailFirstReminder = 858778;
    $request->appointmentReminders->emailFirstReminderInterval = 643678;
    $request->appointmentReminders->emailSecondReminder = 458503;
    $request->appointmentReminders->emailSecondReminderInterval = 364463;
    $request->appointmentReminders->smsFirstReminder = 444587;
    $request->appointmentReminders->smsFirstReminderInterval = 667715;
    $request->appointmentReminders->smsSecondReminder = 336102;
    $request->appointmentReminders->smsSecondReminderInterval = 571844;
    $request->businessHours = new BusinessHoursInputModel();
    $request->businessHours->fri = new BusinessHourInputModel();
    $request->businessHours->fri->endTime = 880679;
    $request->businessHours->fri->is24Hours = false;
    $request->businessHours->fri->isOpen = false;
    $request->businessHours->fri->startTime = 774684;
    $request->businessHours->mon = new BusinessHourInputModel();
    $request->businessHours->mon->endTime = 945027;
    $request->businessHours->mon->is24Hours = false;
    $request->businessHours->mon->isOpen = false;
    $request->businessHours->mon->startTime = 900103;
    $request->businessHours->sat = new BusinessHourInputModel();
    $request->businessHours->sat->endTime = 991891;
    $request->businessHours->sat->is24Hours = false;
    $request->businessHours->sat->isOpen = false;
    $request->businessHours->sat->startTime = 404306;
    $request->businessHours->sun = new BusinessHourInputModel();
    $request->businessHours->sun->endTime = 376741;
    $request->businessHours->sun->is24Hours = false;
    $request->businessHours->sun->isOpen = false;
    $request->businessHours->sun->startTime = 895346;
    $request->businessHours->thu = new BusinessHourInputModel();
    $request->businessHours->thu->endTime = 966148;
    $request->businessHours->thu->is24Hours = false;
    $request->businessHours->thu->isOpen = false;
    $request->businessHours->thu->startTime = 65082;
    $request->businessHours->tue = new BusinessHourInputModel();
    $request->businessHours->tue->endTime = 791880;
    $request->businessHours->tue->is24Hours = false;
    $request->businessHours->tue->isOpen = false;
    $request->businessHours->tue->startTime = 685478;
    $request->businessHours->wed = new BusinessHourInputModel();
    $request->businessHours->wed->endTime = 675689;
    $request->businessHours->wed->is24Hours = false;
    $request->businessHours->wed->isOpen = false;
    $request->businessHours->wed->startTime = 231070;
    $request->defaults = new BusinessDefaultsInputModel();
    $request->defaults->autoUpdateCustomer = false;
    $request->defaults->businessNotification = false;
    $request->defaults->customerCity = false;
    $request->defaults->customerState = false;
    $request->defaults->emailInfo = false;
    $request->defaults->enableUtcTimezone = false;
    $request->email = 'Kallie.Emmerich74@gmail.com';
    $request->fax = 'repudiandae';
    $request->friendlyId = 'nam';
    $request->name = 'Glenda Kling';
    $request->phone = '858.519.4380';
    $request->regionId = 'facere';
    $request->settings = new OnlineSettingsInputModel();
    $request->settings->bookAheadUnit = 726878;
    $request->settings->bookAheadValue = 102413;
    $request->settings->bookInAdvance = 975425;
    $request->settings->bookingTimerMins = 156383;
    $request->settings->customerBookingsPerDay = 782090;
    $request->settings->enableWorldTimezones = false;
    $request->timezoneName = 'aliquam';
    $request->website = 'velit';

    $response = $sdk->locations->postSetupV1Locations($request);

    if ($response->locationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1LocationsBulk

<p>Use this endpoint to <b>Create Bulk</b> business locations. The posted list of locations cannot exceed 100 location objects per transaction for performance purposes. The result is a list of new business location objects with a GUID assigned to each location.</p>
<p>The <b>name</b> and <b>timezoneName</b> fields are required. The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>. Refer to: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone Wiki</a> for a listing of IANA time zones.</p>
<p>
  <b>Business hours</b> are set by defining the <b>startTime</b> and <b>endTime</b> values for each day available/open. All days of the week must be provided when setting availability. Days are defined as <b>sun, mon, tue, wed, thu, fri and sat</b>. Start and End Times are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. If there is no physical location and the business hours are irrelevant, set the hours to open 24 hours by setting startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. </p>
<p>
  <b>Settings</b> can be set here. Booking timer minutes, book ahead restrictions and customer bookings per day are all available here. Please read about the settings scope parameter before setting these values as it may simplify your process.</p>
<p>
  <b>Settings Scope</b> can be set to the company or the business location level. You can have all locations use the same company level settings or individual business locations can define their own, business location scope. If you want to use the company settings throughout all locations, do not pass in <b>settings element</b>. To create business location scoped settings, pass in the <b>settings element</b> with the field values defined in the post body. </p>
<p>
  <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>
<p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>
<p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\LocationsInputModel;
use \OpenAPI\OpenAPI\Models\Shared\LocationInputModel;
use \OpenAPI\OpenAPI\Models\Shared\AddressInputModel;
use \OpenAPI\OpenAPI\Models\Shared\AppointmentRemindersInputModel;
use \OpenAPI\OpenAPI\Models\Shared\BusinessHoursInputModel;
use \OpenAPI\OpenAPI\Models\Shared\BusinessHourInputModel;
use \OpenAPI\OpenAPI\Models\Shared\BusinessDefaultsInputModel;
use \OpenAPI\OpenAPI\Models\Shared\OnlineSettingsInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LocationsInputModel();
    $request->locations = [
        new LocationInputModel(),
    ];

    $response = $sdk->locations->postSetupV1LocationsBulk($request);

    if ($response->locationViewModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1LocationsIdEmailTemplates

<p>Use this endpoint to a <b>Create</b> a Custom Email Template. You must convert the content to a base64 encoded string. Updates to the primary business location create company scoped custom templates. Updates to non-primary business locations create business location scoped custom templates. The master template cannot be updated with this endpoint.</p>
<p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new email template that will be used instead. If you delete it, you are deleting the custom template you created and the original default template created by OnSched will be reactivated.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSetupV1LocationsIdEmailTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\EmailTemplateInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetupV1LocationsIdEmailTemplatesRequest();
    $request->emailTemplateInputModel = new EmailTemplateInputModel();
    $request->emailTemplateInputModel->templateContent = 'accusantium';
    $request->emailTemplateInputModel->templateName = 'vel';
    $request->id = '61e96349-e1cf-49e0-ae3a-437000ae6b6b';

    $response = $sdk->locations->postSetupV1LocationsIdEmailTemplates($request);

    if ($response->contentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1LocationsIdEmailTemplatesMaster

<p>Use this endpoint to <b>Create Custom Master Email Template Settings</b>. A valid business <b>location id</b> is required. Settings exist for showing or hiding email panels and for changing color schemes. Use the <i>GET ​/setup​/v1​/locations​/{id}​/email​/templates​/masterSettings</i> endpoint to display the settings offered. Changes to the Master Template Settings will be reflected in all business locations associated with this company. </p>
<p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new custom Master Template Settings file that will be used instead. If you delete it, you are deleting the custom template settings you created and the original default Master Template created by OnSched would be reactivated.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSetupV1LocationsIdEmailTemplatesMasterRequest;
use \OpenAPI\OpenAPI\Models\Shared\MasterTemplateSettingsInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetupV1LocationsIdEmailTemplatesMasterRequest();
    $request->masterTemplateSettingsInputModel = new MasterTemplateSettingsInputModel();
    $request->masterTemplateSettingsInputModel->centerEmailContent = false;
    $request->masterTemplateSettingsInputModel->centerEmailContentPanel = false;
    $request->masterTemplateSettingsInputModel->centerEmailFooter = false;
    $request->masterTemplateSettingsInputModel->contentBackgroundColor = 'placeat';
    $request->masterTemplateSettingsInputModel->contentColor = 'perspiciatis';
    $request->masterTemplateSettingsInputModel->contentLinkColor = 'expedita';
    $request->masterTemplateSettingsInputModel->emailBackgroundColor = 'deleniti';
    $request->masterTemplateSettingsInputModel->emailColor = 'a';
    $request->masterTemplateSettingsInputModel->emailLinkColor = 'voluptate';
    $request->masterTemplateSettingsInputModel->footerFontSize = 'ullam';
    $request->masterTemplateSettingsInputModel->footerLogoHeight = 'unde';
    $request->masterTemplateSettingsInputModel->footerLogoPadding = 'necessitatibus';
    $request->masterTemplateSettingsInputModel->footerPanelEmailContact = false;
    $request->masterTemplateSettingsInputModel->footerPanelPhoneContact = false;
    $request->masterTemplateSettingsInputModel->footerPanelWebsiteContact = false;
    $request->masterTemplateSettingsInputModel->headerLogoHeight = 'animi';
    $request->masterTemplateSettingsInputModel->headerLogoPadding = 'impedit';
    $request->masterTemplateSettingsInputModel->panelBackgroundColor = 'ipsam';
    $request->masterTemplateSettingsInputModel->panelColor = 'corporis';
    $request->masterTemplateSettingsInputModel->panelLinkColor = 'est';
    $request->masterTemplateSettingsInputModel->privacyPolicyLink = 'error';
    $request->masterTemplateSettingsInputModel->showContentPanel = false;
    $request->masterTemplateSettingsInputModel->showFooterLogo = false;
    $request->masterTemplateSettingsInputModel->showFooterPanel = false;
    $request->masterTemplateSettingsInputModel->showHeaderLogo = false;
    $request->masterTemplateSettingsInputModel->showHeaderPanel = false;
    $request->id = '741d3113-5296-45bb-8a72-02611435e139';

    $response = $sdk->locations->postSetupV1LocationsIdEmailTemplatesMaster($request);

    if ($response->masterEmailTemplateSettingsViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1LocationsIdGoogleServiceAccount

<p>Use this endpoint to <b>Authorize Access</b> to google calendar users in your organization. You must create/have a Google Service account as an admin of your GSuite, then save the credentials as a Json Key file. This <b>Json Key</b> and a valid business <b>location id</b> are required. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSetupV1LocationsIdGoogleServiceAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleServiceAccountCreds;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetupV1LocationsIdGoogleServiceAccountRequest();
    $request->googleServiceAccountCreds = new GoogleServiceAccountCreds();
    $request->googleServiceAccountCreds->authProviderX509CertUrl = 'nulla';
    $request->googleServiceAccountCreds->authUri = 'distinctio';
    $request->googleServiceAccountCreds->clientEmail = 'maxime';
    $request->googleServiceAccountCreds->clientId = 'quia';
    $request->googleServiceAccountCreds->clientX509CertUrl = 'quia';
    $request->googleServiceAccountCreds->privateKey = 'nostrum';
    $request->googleServiceAccountCreds->privateKeyId = 'omnis';
    $request->googleServiceAccountCreds->projectId = 'libero';
    $request->googleServiceAccountCreds->tokenUri = 'dicta';
    $request->googleServiceAccountCreds->type = 'id';
    $request->id = 'bda8c070-e108-44cb-8672-d1ad879eeb96';

    $response = $sdk->locations->postSetupV1LocationsIdGoogleServiceAccount($request);

    if ($response->googleServiceAccountCreds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1LocationsIdServices

<p>Use this endpoint to <b>Link Services</b> to a location object. A valid business <b>location id</b> is required. By default, there are <i>no services linked</i> to a location. </p>
<p>Services are definable globally at the Company level and associated with the Primary Business Location, or at a Secondary Business Location. When accessing the Services endpoints, by default, API consumers are provided with a <b>combined</b> list of Services defined from both the Primary and Secondary Business Location.</p>
<p>If necessary, the list of Service(s) provided can be cherry-picked/linked to <b>only include specific Service(s)</b> by using this endpoint. This allows for a subset of defined Services to be provided for a location.</p>
<p>Supplying the list of services ids to cherry-pick/link to the location in the request body will explicitly define which Primary Location Services are offered by the specified business location.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSetupV1LocationsIdServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetupV1LocationsIdServicesRequest();
    $request->requestBody = [
        'ipsam',
        'rerum',
    ];
    $request->id = '85efbd02-bae0-4be2-9782-259e3ea4b519';

    $response = $sdk->locations->postSetupV1LocationsIdServices($request);

    if ($response->locationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1LocationsIdUploadimage

<p>Use this endpoint to <b>Upload</b> an image to a location object. A valid business <b>location id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSetupV1LocationsIdUploadimageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceImageInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetupV1LocationsIdUploadimageRequest();
    $request->resourceImageInputModel = new ResourceImageInputModel();
    $request->resourceImageInputModel->imageFileData = 'molestiae';
    $request->resourceImageInputModel->imageFileName = 'delectus';
    $request->id = '92443da7-ce52-4b89-9c53-7c6454efb0b3';

    $response = $sdk->locations->postSetupV1LocationsIdUploadimage($request);

    if ($response->locationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1LocationsId

<p>Use this endpoint to <b>Update</b> a business location object. A valid business <b>location id</b> is required. The optional removeRegion query parameter can be used to remove the region relationship from the location.</p>
<p>If the settings element is populated the scope will be set to the business location with the settings supplied. If your settings are uniform across all locations, then do not supply the settings element and the location will use the settings defined on the primary business location (company scoped). Company scoped settings cascade down to the locations. You can override any location that needs different settings by providing settings in the update model. Use the <i>PUT /setup/v1/locations/{id}/settings/scope/{settingsScope}</i> endpoint to change the settings scope only. This is typically used when switching from business location scope back to company.</p>
<p>Refer to: <i><b>POST ​/setup​/v1​/locations</b></i> endpoint for details.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1LocationsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\LocationUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\AddressUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\AppointmentRemindersInputModel;
use \OpenAPI\OpenAPI\Models\Shared\BusinessHoursUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\BusinessHourInputModel;
use \OpenAPI\OpenAPI\Models\Shared\BusinessDefaultsUpdateModel;
use \OpenAPI\OpenAPI\Models\Shared\OnlineSettingsUpdateModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1LocationsIdRequest();
    $request->locationUpdateModel = new LocationUpdateModel();
    $request->locationUpdateModel->address = new AddressUpdateModel();
    $request->locationUpdateModel->address->addressLine1 = 'labore';
    $request->locationUpdateModel->address->addressLine2 = 'totam';
    $request->locationUpdateModel->address->city = 'Garrickfort';
    $request->locationUpdateModel->address->country = 'Dominican Republic';
    $request->locationUpdateModel->address->postalCode = '63679-7819';
    $request->locationUpdateModel->address->state = 'pariatur';
    $request->locationUpdateModel->adminEmail = 'nemo';
    $request->locationUpdateModel->adminName = 'reprehenderit';
    $request->locationUpdateModel->appointmentReminders = new AppointmentRemindersInputModel();
    $request->locationUpdateModel->appointmentReminders->emailFirstReminder = 45234;
    $request->locationUpdateModel->appointmentReminders->emailFirstReminderInterval = 486410;
    $request->locationUpdateModel->appointmentReminders->emailSecondReminder = 325297;
    $request->locationUpdateModel->appointmentReminders->emailSecondReminderInterval = 448369;
    $request->locationUpdateModel->appointmentReminders->smsFirstReminder = 496915;
    $request->locationUpdateModel->appointmentReminders->smsFirstReminderInterval = 567846;
    $request->locationUpdateModel->appointmentReminders->smsSecondReminder = 172195;
    $request->locationUpdateModel->appointmentReminders->smsSecondReminderInterval = 621169;
    $request->locationUpdateModel->businessHours = new BusinessHoursUpdateModel();
    $request->locationUpdateModel->businessHours->fri = new BusinessHourInputModel();
    $request->locationUpdateModel->businessHours->fri->endTime = 85076;
    $request->locationUpdateModel->businessHours->fri->is24Hours = false;
    $request->locationUpdateModel->businessHours->fri->isOpen = false;
    $request->locationUpdateModel->businessHours->fri->startTime = 498180;
    $request->locationUpdateModel->businessHours->mon = new BusinessHourInputModel();
    $request->locationUpdateModel->businessHours->mon->endTime = 452729;
    $request->locationUpdateModel->businessHours->mon->is24Hours = false;
    $request->locationUpdateModel->businessHours->mon->isOpen = false;
    $request->locationUpdateModel->businessHours->mon->startTime = 866789;
    $request->locationUpdateModel->businessHours->sat = new BusinessHourInputModel();
    $request->locationUpdateModel->businessHours->sat->endTime = 932666;
    $request->locationUpdateModel->businessHours->sat->is24Hours = false;
    $request->locationUpdateModel->businessHours->sat->isOpen = false;
    $request->locationUpdateModel->businessHours->sat->startTime = 627735;
    $request->locationUpdateModel->businessHours->sun = new BusinessHourInputModel();
    $request->locationUpdateModel->businessHours->sun->endTime = 763165;
    $request->locationUpdateModel->businessHours->sun->is24Hours = false;
    $request->locationUpdateModel->businessHours->sun->isOpen = false;
    $request->locationUpdateModel->businessHours->sun->startTime = 401428;
    $request->locationUpdateModel->businessHours->thu = new BusinessHourInputModel();
    $request->locationUpdateModel->businessHours->thu->endTime = 311486;
    $request->locationUpdateModel->businessHours->thu->is24Hours = false;
    $request->locationUpdateModel->businessHours->thu->isOpen = false;
    $request->locationUpdateModel->businessHours->thu->startTime = 416692;
    $request->locationUpdateModel->businessHours->tue = new BusinessHourInputModel();
    $request->locationUpdateModel->businessHours->tue->endTime = 888616;
    $request->locationUpdateModel->businessHours->tue->is24Hours = false;
    $request->locationUpdateModel->businessHours->tue->isOpen = false;
    $request->locationUpdateModel->businessHours->tue->startTime = 810839;
    $request->locationUpdateModel->businessHours->wed = new BusinessHourInputModel();
    $request->locationUpdateModel->businessHours->wed->endTime = 697274;
    $request->locationUpdateModel->businessHours->wed->is24Hours = false;
    $request->locationUpdateModel->businessHours->wed->isOpen = false;
    $request->locationUpdateModel->businessHours->wed->startTime = 348192;
    $request->locationUpdateModel->defaults = new BusinessDefaultsUpdateModel();
    $request->locationUpdateModel->defaults->autoUpdateCustomer = false;
    $request->locationUpdateModel->defaults->businessNotification = false;
    $request->locationUpdateModel->defaults->customerCity = false;
    $request->locationUpdateModel->defaults->customerState = false;
    $request->locationUpdateModel->defaults->emailInfo = false;
    $request->locationUpdateModel->defaults->enableUtcTimezone = false;
    $request->locationUpdateModel->email = 'Cory57@yahoo.com';
    $request->locationUpdateModel->fax = 'vero';
    $request->locationUpdateModel->friendlyId = 'sequi';
    $request->locationUpdateModel->name = 'Bennie Carter';
    $request->locationUpdateModel->phone = '1-371-387-0490 x0387';
    $request->locationUpdateModel->regionId = 'excepturi';
    $request->locationUpdateModel->settings = new OnlineSettingsUpdateModel();
    $request->locationUpdateModel->settings->bookAheadUnit = 578210;
    $request->locationUpdateModel->settings->bookAheadValue = 367917;
    $request->locationUpdateModel->settings->bookInAdvance = 306382;
    $request->locationUpdateModel->settings->bookingTimerMins = 342342;
    $request->locationUpdateModel->settings->customerBookingsPerDay = 988749;
    $request->locationUpdateModel->settings->enableWorldTimezones = false;
    $request->locationUpdateModel->timezoneName = 'eligendi';
    $request->locationUpdateModel->website = 'sint';
    $request->id = '5fa88970-e189-4dbb-b0fc-b33ea055b197';
    $request->removeRegion = false;

    $response = $sdk->locations->putSetupV1LocationsId($request);

    if ($response->locationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1LocationsIdAppointmentreminders

<p>Use this endpoint to <b>Update</b> Email and SMS appointment reminder settings for the requested location. A valid business <b>location id</b> is required. </p>
<p>
  <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>
<p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>
<p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1LocationsIdAppointmentremindersRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppointmentRemindersInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1LocationsIdAppointmentremindersRequest();
    $request->appointmentRemindersInputModel = new AppointmentRemindersInputModel();
    $request->appointmentRemindersInputModel->emailFirstReminder = 756654;
    $request->appointmentRemindersInputModel->emailFirstReminderInterval = 820023;
    $request->appointmentRemindersInputModel->emailSecondReminder = 251464;
    $request->appointmentRemindersInputModel->emailSecondReminderInterval = 298187;
    $request->appointmentRemindersInputModel->smsFirstReminder = 932296;
    $request->appointmentRemindersInputModel->smsFirstReminderInterval = 150935;
    $request->appointmentRemindersInputModel->smsSecondReminder = 993002;
    $request->appointmentRemindersInputModel->smsSecondReminderInterval = 330267;
    $request->id = '2d82d351-3bb6-4f48-b656-bcdb35ff2e4b';

    $response = $sdk->locations->putSetupV1LocationsIdAppointmentreminders($request);

    if ($response->locationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1LocationsIdHolidaysHolidayIdClosed

<p>Use this endpoint to <b>Update</b> Business Holidays as Opened or Closed. A valid business <b>location id</b> is required. If not specified, the business location defaults to the primary business location.</p>
<p>Holidays are automatically defined with the initial Post Location endpoint and are based on country code. Find your location holiday codes by using the: <i>GET /setup​/v1​/locations​/{id}</i> endpoint. Change your holidays to open or closed by passing in the <b>holidayId</b> along with the <b>closed</b> boolean value to change the status of a specific holiday. Pass in an <b>asterisk *</b> for the holidayId then all business holidays will be set as defined.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest();
    $request->closed = false;
    $request->holidayId = 'eos';
    $request->id = '7537a8cd-9e73-419c-977d-525f77b114ee';

    $response = $sdk->locations->putSetupV1LocationsIdHolidaysHolidayIdClosed($request);

    if ($response->locationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1LocationsIdRecover

<p>Use this endpoint to <b>Recover</b> a deleted business location. A valid business <b>location id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1LocationsIdRecoverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1LocationsIdRecoverRequest();
    $request->id = 'b52ff785-fc37-4814-94c9-8e0c2bb89eb7';

    $response = $sdk->locations->putSetupV1LocationsIdRecover($request);

    if ($response->locationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1LocationsIdSettingsScopeSettingsScope

<p>Use this endpoint to <b>Update</b> a business locations online booking settings scope. A valid business <b>location id</b> is required.</p>
<p>
  <b>settingsScope</b> values are <b>0 = company scope, 1 = business location scope</b>. To inherit the online settings defined in the primary business location, then use value = 0 for company scope. Otherwise, to override the settings for a specific location then use value = 1 for business location scope. <b>Note</b>: You cannot change the settings scope of the Primary Business Location.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1LocationsIdSettingsScopeSettingsScopeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1LocationsIdSettingsScopeSettingsScopeRequest();
    $request->id = '5dad636c-6005-403d-8bb3-1180f739ae9e';
    $request->settingsScope = 'consequatur';

    $response = $sdk->locations->putSetupV1LocationsIdSettingsScopeSettingsScope($request);

    if ($response->locationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
