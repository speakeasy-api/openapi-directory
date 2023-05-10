# organizations

### Available Operations

* [advisorynotificationsOrganizationsLocationsNotificationsGet](#advisorynotificationsorganizationslocationsnotificationsget) - Gets a notification.
* [advisorynotificationsOrganizationsLocationsNotificationsList](#advisorynotificationsorganizationslocationsnotificationslist) - Lists notifications under a given parent.

## advisorynotificationsOrganizationsLocationsNotificationsGet

Gets a notification.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdvisorynotificationsOrganizationsLocationsNotificationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'minus';
    $request->key = 'placeat';
    $request->languageCode = 'voluptatum';
    $request->name = 'Miriam Huel';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new AdvisorynotificationsOrganizationsLocationsNotificationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->advisorynotificationsOrganizationsLocationsNotificationsGet($request, $requestSecurity);

    if ($response->googleCloudAdvisorynotificationsV1Notification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## advisorynotificationsOrganizationsLocationsNotificationsList

Lists notifications under a given parent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdvisorynotificationsOrganizationsLocationsNotificationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdvisorynotificationsOrganizationsLocationsNotificationsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdvisorynotificationsOrganizationsLocationsNotificationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdvisorynotificationsOrganizationsLocationsNotificationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'quo';
    $request->key = 'odit';
    $request->languageCode = 'at';
    $request->oauthToken = 'at';
    $request->pageSize = 978619;
    $request->pageToken = 'molestiae';
    $request->parent = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'totam';
    $request->view = AdvisorynotificationsOrganizationsLocationsNotificationsListViewEnum::FULL;

    $requestSecurity = new AdvisorynotificationsOrganizationsLocationsNotificationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->advisorynotificationsOrganizationsLocationsNotificationsList($request, $requestSecurity);

    if ($response->googleCloudAdvisorynotificationsV1ListNotificationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
