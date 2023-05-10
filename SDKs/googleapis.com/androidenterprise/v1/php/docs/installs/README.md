# installs

### Available Operations

* [androidenterpriseInstallsDelete](#androidenterpriseinstallsdelete) - Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.
* [androidenterpriseInstallsGet](#androidenterpriseinstallsget) - Retrieves details of an installation of an app on a device.
* [androidenterpriseInstallsList](#androidenterpriseinstallslist) - Retrieves the details of all apps installed on the specified device.
* [androidenterpriseInstallsUpdate](#androidenterpriseinstallsupdate) - Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.

## androidenterpriseInstallsDelete

Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseInstallsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseInstallsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseInstallsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->deviceId = 'necessitatibus';
    $request->enterpriseId = 'distinctio';
    $request->fields = 'asperiores';
    $request->installId = 'nihil';
    $request->key = 'ipsum';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'eius';
    $request->userId = 'aspernatur';

    $requestSecurity = new AndroidenterpriseInstallsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->installs->androidenterpriseInstallsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseInstallsGet

Retrieves details of an installation of an app on a device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseInstallsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseInstallsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseInstallsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->deviceId = 'ad';
    $request->enterpriseId = 'saepe';
    $request->fields = 'suscipit';
    $request->installId = 'deserunt';
    $request->key = 'provident';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'similique';
    $request->userId = 'alias';

    $requestSecurity = new AndroidenterpriseInstallsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->installs->androidenterpriseInstallsGet($request, $requestSecurity);

    if ($response->install !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseInstallsList

Retrieves the details of all apps installed on the specified device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseInstallsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseInstallsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseInstallsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->deviceId = 'quod';
    $request->enterpriseId = 'officiis';
    $request->fields = 'qui';
    $request->key = 'dolorum';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'iusto';
    $request->userId = 'ipsum';

    $requestSecurity = new AndroidenterpriseInstallsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->installs->androidenterpriseInstallsList($request, $requestSecurity);

    if ($response->installsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseInstallsUpdate

Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseInstallsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Install;
use \OpenAPI\OpenAPI\Models\Shared\InstallInstallStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseInstallsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseInstallsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->install = new Install();
    $request->install->installState = InstallInstallStateEnum::INSTALL_PENDING;
    $request->install->productId = 'amet';
    $request->install->versionCode = 730856;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->deviceId = 'dolorem';
    $request->enterpriseId = 'sapiente';
    $request->fields = 'totam';
    $request->installId = 'nihil';
    $request->key = 'sit';
    $request->oauthToken = 'expedita';
    $request->prettyPrint = false;
    $request->quotaUser = 'neque';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'vel';
    $request->userId = 'libero';

    $requestSecurity = new AndroidenterpriseInstallsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->installs->androidenterpriseInstallsUpdate($request, $requestSecurity);

    if ($response->install !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
