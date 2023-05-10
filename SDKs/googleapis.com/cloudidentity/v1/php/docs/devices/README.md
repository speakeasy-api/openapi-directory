# devices

### Available Operations

* [cloudidentityDevicesCreate](#cloudidentitydevicescreate) - Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
* [cloudidentityDevicesDeviceUsersApprove](#cloudidentitydevicesdeviceusersapprove) - Approves device to access user data.
* [cloudidentityDevicesDeviceUsersBlock](#cloudidentitydevicesdeviceusersblock) - Blocks device from accessing user data
* [cloudidentityDevicesDeviceUsersCancelWipe](#cloudidentitydevicesdeviceuserscancelwipe) - Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.
* [cloudidentityDevicesDeviceUsersClientStatesList](#cloudidentitydevicesdeviceusersclientstateslist) - Lists the client states for the given search query.
* [cloudidentityDevicesDeviceUsersList](#cloudidentitydevicesdeviceuserslist) - Lists/Searches DeviceUsers.
* [cloudidentityDevicesDeviceUsersLookup](#cloudidentitydevicesdeviceuserslookup) - Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.
* [cloudidentityDevicesDeviceUsersWipe](#cloudidentitydevicesdeviceuserswipe) - Wipes the user's account on a device. Other data on the device that is not associated with the user's work account is not affected. For example, if a Gmail app is installed on a device that is used for personal and work purposes, and the user is logged in to the Gmail app with their personal account as well as their work account, wiping the "deviceUser" by their work administrator will not affect their personal account within Gmail or other apps such as Photos.
* [cloudidentityDevicesList](#cloudidentitydeviceslist) - Lists/Searches devices.

## cloudidentityDevicesCreate

Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCloudidentityDevicesV1DeviceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCloudidentityDevicesV1AndroidAttributes;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityDevicesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAppsCloudidentityDevicesV1DeviceInput = new GoogleAppsCloudidentityDevicesV1DeviceInput();
    $request->googleAppsCloudidentityDevicesV1DeviceInput->androidSpecificAttributes = new GoogleAppsCloudidentityDevicesV1AndroidAttributes();
    $request->googleAppsCloudidentityDevicesV1DeviceInput->androidSpecificAttributes->enabledUnknownSources = false;
    $request->googleAppsCloudidentityDevicesV1DeviceInput->androidSpecificAttributes->ownerProfileAccount = false;
    $request->googleAppsCloudidentityDevicesV1DeviceInput->androidSpecificAttributes->ownershipPrivilege = GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum::OWNERSHIP_PRIVILEGE_UNSPECIFIED;
    $request->googleAppsCloudidentityDevicesV1DeviceInput->androidSpecificAttributes->supportsWorkProfile = false;
    $request->googleAppsCloudidentityDevicesV1DeviceInput->assetTag = 'corporis';
    $request->googleAppsCloudidentityDevicesV1DeviceInput->deviceId = 'explicabo';
    $request->googleAppsCloudidentityDevicesV1DeviceInput->lastSyncTime = 'nobis';
    $request->googleAppsCloudidentityDevicesV1DeviceInput->serialNumber = 'enim';
    $request->googleAppsCloudidentityDevicesV1DeviceInput->wifiMacAddresses = [
        'nemo',
        'minima',
        'excepturi',
    ];
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->customer = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new CloudidentityDevicesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->cloudidentityDevicesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityDevicesDeviceUsersApprove

Approves device to access user data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersApproveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersApproveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityDevicesDeviceUsersApproveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAppsCloudidentityDevicesV1ApproveDeviceUserRequest = new GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest();
    $request->googleAppsCloudidentityDevicesV1ApproveDeviceUserRequest->customer = 'mollitia';
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'quam';
    $request->key = 'molestiae';
    $request->name = 'Sabrina Cronin MD';
    $request->oauthToken = 'animi';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new CloudidentityDevicesDeviceUsersApproveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->cloudidentityDevicesDeviceUsersApprove($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityDevicesDeviceUsersBlock

Blocks device from accessing user data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersBlockRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersBlockSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityDevicesDeviceUsersBlockRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAppsCloudidentityDevicesV1BlockDeviceUserRequest = new GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest();
    $request->googleAppsCloudidentityDevicesV1BlockDeviceUserRequest->customer = 'tenetur';
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'aut';
    $request->key = 'quasi';
    $request->name = 'Dr. Jake Pacocha';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new CloudidentityDevicesDeviceUsersBlockSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->cloudidentityDevicesDeviceUsersBlock($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityDevicesDeviceUsersCancelWipe

Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersCancelWipeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersCancelWipeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityDevicesDeviceUsersCancelWipeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest = new GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest();
    $request->googleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest->customer = 'omnis';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->name = 'Shawna Carter';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new CloudidentityDevicesDeviceUsersCancelWipeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->cloudidentityDevicesDeviceUsersCancelWipe($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityDevicesDeviceUsersClientStatesList

Lists the client states for the given search query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersClientStatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersClientStatesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersClientStatesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityDevicesDeviceUsersClientStatesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->customer = 'ipsum';
    $request->fields = 'quidem';
    $request->filter = 'molestias';
    $request->key = 'excepturi';
    $request->oauthToken = 'pariatur';
    $request->orderBy = 'modi';
    $request->pageToken = 'praesentium';
    $request->parent = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptates';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new CloudidentityDevicesDeviceUsersClientStatesListSecurity();
    $requestSecurity->option1 = new CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->cloudidentityDevicesDeviceUsersClientStatesList($request, $requestSecurity);

    if ($response->googleAppsCloudidentityDevicesV1ListClientStatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityDevicesDeviceUsersList

Lists/Searches DeviceUsers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityDevicesDeviceUsersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->customer = 'enim';
    $request->fields = 'consequatur';
    $request->filter = 'est';
    $request->key = 'quibusdam';
    $request->oauthToken = 'explicabo';
    $request->orderBy = 'deserunt';
    $request->pageSize = 716327;
    $request->pageToken = 'quibusdam';
    $request->parent = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new CloudidentityDevicesDeviceUsersListSecurity();
    $requestSecurity->option1 = new CloudidentityDevicesDeviceUsersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->cloudidentityDevicesDeviceUsersList($request, $requestSecurity);

    if ($response->googleAppsCloudidentityDevicesV1ListDeviceUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityDevicesDeviceUsersLookup

Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersLookupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersLookupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityDevicesDeviceUsersLookupRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::JSON;
    $request->androidId = 'magni';
    $request->callback = 'assumenda';
    $request->fields = 'ipsam';
    $request->key = 'alias';
    $request->oauthToken = 'fugit';
    $request->pageSize = 677817;
    $request->pageToken = 'excepturi';
    $request->parent = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->rawResourceId = 'tempore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'delectus';
    $request->userId = 'eum';

    $requestSecurity = new CloudidentityDevicesDeviceUsersLookupSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->cloudidentityDevicesDeviceUsersLookup($request, $requestSecurity);

    if ($response->googleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityDevicesDeviceUsersWipe

Wipes the user's account on a device. Other data on the device that is not associated with the user's work account is not affected. For example, if a Gmail app is installed on a device that is used for personal and work purposes, and the user is logged in to the Gmail app with their personal account as well as their work account, wiping the "deviceUser" by their work administrator will not affect their personal account within Gmail or other apps such as Photos.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersWipeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesDeviceUsersWipeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityDevicesDeviceUsersWipeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAppsCloudidentityDevicesV1WipeDeviceUserRequest = new GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest();
    $request->googleAppsCloudidentityDevicesV1WipeDeviceUserRequest->customer = 'eligendi';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'necessitatibus';
    $request->key = 'sint';
    $request->name = 'Curtis Toy';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new CloudidentityDevicesDeviceUsersWipeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->cloudidentityDevicesDeviceUsersWipe($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityDevicesList

Lists/Searches devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityDevicesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityDevicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->customer = 'facere';
    $request->fields = 'ea';
    $request->filter = 'aliquid';
    $request->key = 'laborum';
    $request->oauthToken = 'accusamus';
    $request->orderBy = 'non';
    $request->pageSize = 581273;
    $request->pageToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quidem';
    $request->view = CloudidentityDevicesListViewEnum::COMPANY_INVENTORY;

    $requestSecurity = new CloudidentityDevicesListSecurity();
    $requestSecurity->option1 = new CloudidentityDevicesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->cloudidentityDevicesList($request, $requestSecurity);

    if ($response->googleAppsCloudidentityDevicesV1ListDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
