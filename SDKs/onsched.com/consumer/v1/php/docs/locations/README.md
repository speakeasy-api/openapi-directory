# locations

### Available Operations

* [getConsumerV1Locations](#getconsumerv1locations) - List Locations
* [getConsumerV1LocationsId](#getconsumerv1locationsid) - Get Location

## getConsumerV1Locations

<p>Use this endpoint to return a <b>List of Business Locations</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20 and maximum is 100. Use the other query parameters to filter the results further. </p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1LocationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1LocationsRequest();
    $request->friendlyId = 'fugiat';
    $request->ignorePrimary = false;
    $request->limit = 283519;
    $request->name = 'Yolanda Shields';
    $request->nearestTo = 'quisquam';
    $request->offset = 86377;
    $request->proximity = 56848;
    $request->regionId = 'id';
    $request->serviceId = 'quidem';
    $request->units = 'neque';

    $response = $sdk->locations->getConsumerV1Locations($request);

    if ($response->locationListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1LocationsId

<p>Use this endpoint to return a <b>Location</b> object. A valid business <b>location id</b> is required. Find all location id's by using the <i>GET /consumer/v1/locations</i> endpoint.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1LocationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1LocationsIdRequest();
    $request->id = 'cdca4251-904e-4523-87e0-bc7178e4796f';

    $response = $sdk->locations->getConsumerV1LocationsId($request);

    if ($response->locationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
