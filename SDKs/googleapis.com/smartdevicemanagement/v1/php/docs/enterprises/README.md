# enterprises

### Available Operations

* [smartdevicemanagementEnterprisesDevicesExecuteCommand](#smartdevicemanagemententerprisesdevicesexecutecommand) - Executes a command to device managed by the enterprise.
* [smartdevicemanagementEnterprisesDevicesList](#smartdevicemanagemententerprisesdeviceslist) - Lists devices managed by the enterprise.
* [smartdevicemanagementEnterprisesStructuresList](#smartdevicemanagemententerprisesstructureslist) - Lists structures managed by the enterprise.
* [smartdevicemanagementEnterprisesStructuresRoomsGet](#smartdevicemanagemententerprisesstructuresroomsget) - Gets a room managed by the enterprise.
* [smartdevicemanagementEnterprisesStructuresRoomsList](#smartdevicemanagemententerprisesstructuresroomslist) - Lists rooms managed by the enterprise.

## smartdevicemanagementEnterprisesDevicesExecuteCommand

Executes a command to device managed by the enterprise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest = new GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest();
    $request->googleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest->command = 'excepturi';
    $request->googleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest->params = [
        'recusandae' => 'temporibus',
        'ab' => 'quis',
    ];
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'ipsam';
    $request->key = 'repellendus';
    $request->name = 'Cedric Connelly';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->smartdevicemanagementEnterprisesDevicesExecuteCommand($request, $requestSecurity);

    if ($response->googleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## smartdevicemanagementEnterprisesDevicesList

Lists devices managed by the enterprise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SmartdevicemanagementEnterprisesDevicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SmartdevicemanagementEnterprisesDevicesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SmartdevicemanagementEnterprisesDevicesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'dicta';
    $request->filter = 'nam';
    $request->key = 'officia';
    $request->oauthToken = 'occaecati';
    $request->pageSize = 143353;
    $request->pageToken = 'deleniti';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'beatae';

    $requestSecurity = new SmartdevicemanagementEnterprisesDevicesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->smartdevicemanagementEnterprisesDevicesList($request, $requestSecurity);

    if ($response->googleHomeEnterpriseSdmV1ListDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## smartdevicemanagementEnterprisesStructuresList

Lists structures managed by the enterprise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SmartdevicemanagementEnterprisesStructuresListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SmartdevicemanagementEnterprisesStructuresListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SmartdevicemanagementEnterprisesStructuresListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'impedit';
    $request->filter = 'cum';
    $request->key = 'esse';
    $request->oauthToken = 'ipsum';
    $request->pageSize = 568434;
    $request->pageToken = 'aspernatur';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new SmartdevicemanagementEnterprisesStructuresListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->smartdevicemanagementEnterprisesStructuresList($request, $requestSecurity);

    if ($response->googleHomeEnterpriseSdmV1ListStructuresResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## smartdevicemanagementEnterprisesStructuresRoomsGet

Gets a room managed by the enterprise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SmartdevicemanagementEnterprisesStructuresRoomsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SmartdevicemanagementEnterprisesStructuresRoomsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SmartdevicemanagementEnterprisesStructuresRoomsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'hic';
    $request->key = 'saepe';
    $request->name = 'Harvey Hessel';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new SmartdevicemanagementEnterprisesStructuresRoomsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->smartdevicemanagementEnterprisesStructuresRoomsGet($request, $requestSecurity);

    if ($response->googleHomeEnterpriseSdmV1Room !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## smartdevicemanagementEnterprisesStructuresRoomsList

Lists rooms managed by the enterprise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SmartdevicemanagementEnterprisesStructuresRoomsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SmartdevicemanagementEnterprisesStructuresRoomsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SmartdevicemanagementEnterprisesStructuresRoomsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'est';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'dolores';
    $request->key = 'dolorem';
    $request->oauthToken = 'corporis';
    $request->pageSize = 128926;
    $request->pageToken = 'nobis';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new SmartdevicemanagementEnterprisesStructuresRoomsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->smartdevicemanagementEnterprisesStructuresRoomsList($request, $requestSecurity);

    if ($response->googleHomeEnterpriseSdmV1ListRoomsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
