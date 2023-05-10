# resellernotify

### Available Operations

* [resellerResellernotifyGetwatchdetails](#resellerresellernotifygetwatchdetails) - Returns all the details of the watch corresponding to the reseller.
* [resellerResellernotifyRegister](#resellerresellernotifyregister) - Registers a Reseller for receiving notifications.
* [resellerResellernotifyUnregister](#resellerresellernotifyunregister) - Unregisters a Reseller for receiving notifications.

## resellerResellernotifyGetwatchdetails

Returns all the details of the watch corresponding to the reseller.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerResellernotifyGetwatchdetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerResellernotifyGetwatchdetailsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ResellerResellernotifyGetwatchdetailsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ResellerResellernotifyGetwatchdetailsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerResellernotifyGetwatchdetailsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->fields = 'possimus';
    $request->key = 'aut';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new ResellerResellernotifyGetwatchdetailsSecurity();
    $requestSecurity->option1 = new ResellerResellernotifyGetwatchdetailsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resellernotify->resellerResellernotifyGetwatchdetails($request, $requestSecurity);

    if ($response->resellernotifyGetwatchdetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resellerResellernotifyRegister

Registers a Reseller for receiving notifications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerResellernotifyRegisterRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerResellernotifyRegisterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerResellernotifyRegisterRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'nihil';
    $request->key = 'praesentium';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->serviceAccountEmailAddress = 'omnis';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new ResellerResellernotifyRegisterSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resellernotify->resellerResellernotifyRegister($request, $requestSecurity);

    if ($response->resellernotifyResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resellerResellernotifyUnregister

Unregisters a Reseller for receiving notifications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerResellernotifyUnregisterRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerResellernotifyUnregisterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerResellernotifyUnregisterRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ut';
    $request->fields = 'maiores';
    $request->key = 'dicta';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->serviceAccountEmailAddress = 'iusto';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'harum';

    $requestSecurity = new ResellerResellernotifyUnregisterSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resellernotify->resellerResellernotifyUnregister($request, $requestSecurity);

    if ($response->resellernotifyResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
