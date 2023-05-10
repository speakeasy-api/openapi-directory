# regionNotificationEndpoints

### Available Operations

* [computeRegionNotificationEndpointsDelete](#computeregionnotificationendpointsdelete) - Deletes the specified NotificationEndpoint in the given region
* [computeRegionNotificationEndpointsGet](#computeregionnotificationendpointsget) - Returns the specified NotificationEndpoint resource in the given region.
* [computeRegionNotificationEndpointsInsert](#computeregionnotificationendpointsinsert) - Create a NotificationEndpoint in the specified project in the given region using the parameters that are included in the request.
* [computeRegionNotificationEndpointsList](#computeregionnotificationendpointslist) - Lists the NotificationEndpoints for a project in the given region.
* [computeRegionNotificationEndpointsTestIamPermissions](#computeregionnotificationendpointstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionNotificationEndpointsDelete

Deletes the specified NotificationEndpoint in the given region

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNotificationEndpointsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quibusdam';
    $request->fields = 'doloremque';
    $request->key = 'vero';
    $request->notificationEndpoint = 'voluptatum';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'culpa';
    $request->region = 'magnam';
    $request->requestId = 'facilis';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'laborum';
    $request->userIp = 'exercitationem';

    $requestSecurity = new ComputeRegionNotificationEndpointsDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionNotificationEndpointsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNotificationEndpoints->computeRegionNotificationEndpointsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNotificationEndpointsGet

Returns the specified NotificationEndpoint resource in the given region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNotificationEndpointsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'amet';
    $request->fields = 'veniam';
    $request->key = 'pariatur';
    $request->notificationEndpoint = 'voluptatibus';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->project = 'provident';
    $request->quotaUser = 'iure';
    $request->region = 'incidunt';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'similique';
    $request->userIp = 'ut';

    $requestSecurity = new ComputeRegionNotificationEndpointsGetSecurity();
    $requestSecurity->option1 = new ComputeRegionNotificationEndpointsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNotificationEndpoints->computeRegionNotificationEndpointsGet($request, $requestSecurity);

    if ($response->notificationEndpoint !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNotificationEndpointsInsert

Create a NotificationEndpoint in the specified project in the given region using the parameters that are included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEndpointGrpcSettings;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNotificationEndpointsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->notificationEndpoint = new NotificationEndpoint();
    $request->notificationEndpoint->creationTimestamp = 'et';
    $request->notificationEndpoint->description = 'voluptates';
    $request->notificationEndpoint->grpcSettings = new NotificationEndpointGrpcSettings();
    $request->notificationEndpoint->grpcSettings->authority = 'excepturi';
    $request->notificationEndpoint->grpcSettings->endpoint = 'placeat';
    $request->notificationEndpoint->grpcSettings->payloadName = 'consequatur';
    $request->notificationEndpoint->grpcSettings->resendInterval = new Duration();
    $request->notificationEndpoint->grpcSettings->resendInterval->nanos = 617285;
    $request->notificationEndpoint->grpcSettings->resendInterval->seconds = 'molestiae';
    $request->notificationEndpoint->grpcSettings->retryDurationSec = 881035;
    $request->notificationEndpoint->id = 'temporibus';
    $request->notificationEndpoint->kind = 'animi';
    $request->notificationEndpoint->name = 'Theresa Doyle';
    $request->notificationEndpoint->region = 'fugit';
    $request->notificationEndpoint->selfLink = 'voluptates';
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'unde';
    $request->fields = 'consequuntur';
    $request->key = 'ratione';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'iste';
    $request->region = 'cupiditate';
    $request->requestId = 'blanditiis';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'porro';
    $request->userIp = 'quas';

    $requestSecurity = new ComputeRegionNotificationEndpointsInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionNotificationEndpointsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNotificationEndpoints->computeRegionNotificationEndpointsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNotificationEndpointsList

Lists the NotificationEndpoints for a project in the given region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNotificationEndpointsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'sint';
    $request->filter = 'saepe';
    $request->key = 'atque';
    $request->maxResults = 570783;
    $request->oauthToken = 'architecto';
    $request->orderBy = 'molestias';
    $request->pageToken = 'dolores';
    $request->prettyPrint = false;
    $request->project = 'dolorem';
    $request->quotaUser = 'eligendi';
    $request->region = 'veritatis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'cumque';
    $request->userIp = 'officia';

    $requestSecurity = new ComputeRegionNotificationEndpointsListSecurity();
    $requestSecurity->option1 = new ComputeRegionNotificationEndpointsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNotificationEndpoints->computeRegionNotificationEndpointsList($request, $requestSecurity);

    if ($response->notificationEndpointList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNotificationEndpointsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNotificationEndpointsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'vel',
        'cupiditate',
        'porro',
        'enim',
    ];
    $request->accessToken = 'ex';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cupiditate';
    $request->fields = 'explicabo';
    $request->key = 'vitae';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'doloribus';
    $request->quotaUser = 'animi';
    $request->region = 'consequuntur';
    $request->resource = 'doloremque';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'reprehenderit';

    $requestSecurity = new ComputeRegionNotificationEndpointsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionNotificationEndpointsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNotificationEndpoints->computeRegionNotificationEndpointsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
