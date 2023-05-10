# mobiledevices

### Available Operations

* [directoryMobiledevicesAction](#directorymobiledevicesaction) - Takes an action that affects a mobile device. For example, remotely wiping a device.
* [directoryMobiledevicesDelete](#directorymobiledevicesdelete) - Removes a mobile device.
* [directoryMobiledevicesGet](#directorymobiledevicesget) - Retrieves a mobile device's properties.
* [directoryMobiledevicesList](#directorymobiledeviceslist) - Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).

## directoryMobiledevicesAction

Takes an action that affects a mobile device. For example, remotely wiping a device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MobileDeviceAction;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesActionSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesActionSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesActionSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryMobiledevicesActionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->mobileDeviceAction = new MobileDeviceAction();
    $request->mobileDeviceAction->action = 'ex';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minus';
    $request->customerId = 'nemo';
    $request->fields = 'asperiores';
    $request->key = 'ratione';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->resourceId = 'illum';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new DirectoryMobiledevicesActionSecurity();
    $requestSecurity->option1 = new DirectoryMobiledevicesActionSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mobiledevices->directoryMobiledevicesAction($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryMobiledevicesDelete

Removes a mobile device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryMobiledevicesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->customerId = 'dolor';
    $request->fields = 'aliquam';
    $request->key = 'inventore';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->resourceId = 'tempora';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'consequatur';

    $requestSecurity = new DirectoryMobiledevicesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mobiledevices->directoryMobiledevicesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryMobiledevicesGet

Retrieves a mobile device's properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesGetProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryMobiledevicesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->customerId = 'ab';
    $request->fields = 'laudantium';
    $request->key = 'quae';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->projection = DirectoryMobiledevicesGetProjectionEnum::FULL;
    $request->quotaUser = 'ipsam';
    $request->resourceId = 'consequuntur';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'quas';

    $requestSecurity = new DirectoryMobiledevicesGetSecurity();
    $requestSecurity->option1 = new DirectoryMobiledevicesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mobiledevices->directoryMobiledevicesGet($request, $requestSecurity);

    if ($response->mobileDevice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryMobiledevicesList

Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesListOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesListProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryMobiledevicesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryMobiledevicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->customerId = 'necessitatibus';
    $request->fields = 'sed';
    $request->key = 'veniam';
    $request->maxResults = 199596;
    $request->oauthToken = 'expedita';
    $request->orderBy = DirectoryMobiledevicesListOrderByEnum::MODEL;
    $request->pageToken = 'vel';
    $request->prettyPrint = false;
    $request->projection = DirectoryMobiledevicesListProjectionEnum::FULL;
    $request->query = 'magnam';
    $request->quotaUser = 'exercitationem';
    $request->sortOrder = DirectoryMobiledevicesListSortOrderEnum::ASCENDING;
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'autem';

    $requestSecurity = new DirectoryMobiledevicesListSecurity();
    $requestSecurity->option1 = new DirectoryMobiledevicesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mobiledevices->directoryMobiledevicesList($request, $requestSecurity);

    if ($response->mobileDevices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
