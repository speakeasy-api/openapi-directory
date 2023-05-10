# regionNotificationEndpoints

### Available Operations

* [computeRegionNotificationEndpointsAggregatedList](#computeregionnotificationendpointsaggregatedlist) - Retrieves the list of all NotificationEndpoint resources, regional and global, available to the specified project.
* [computeRegionNotificationEndpointsDelete](#computeregionnotificationendpointsdelete) - Deletes the specified NotificationEndpoint in the given region
* [computeRegionNotificationEndpointsGet](#computeregionnotificationendpointsget) - Returns the specified NotificationEndpoint resource in the given region.
* [computeRegionNotificationEndpointsInsert](#computeregionnotificationendpointsinsert) - Create a NotificationEndpoint in the specified project in the given region using the parameters that are included in the request.
* [computeRegionNotificationEndpointsList](#computeregionnotificationendpointslist) - Lists the NotificationEndpoints for a project in the given region.
* [computeRegionNotificationEndpointsTestIamPermissions](#computeregionnotificationendpointstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionNotificationEndpointsAggregatedList

Retrieves the list of all NotificationEndpoint resources, regional and global, available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNotificationEndpointsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNotificationEndpointsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cupiditate';
    $request->fields = 'necessitatibus';
    $request->filter = 'consequuntur';
    $request->includeAllScopes = false;
    $request->key = 'maiores';
    $request->maxResults = 458115;
    $request->oauthToken = 'sit';
    $request->orderBy = 'adipisci';
    $request->pageToken = 'quaerat';
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'recusandae';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'eaque';
    $request->userIp = 'maiores';

    $requestSecurity = new ComputeRegionNotificationEndpointsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeRegionNotificationEndpointsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNotificationEndpoints->computeRegionNotificationEndpointsAggregatedList($request, $requestSecurity);

    if ($response->notificationEndpointAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'cum';
    $request->key = 'ad';
    $request->notificationEndpoint = 'amet';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'praesentium';
    $request->region = 'sequi';
    $request->requestId = 'maiores';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'dolore';
    $request->userIp = 'blanditiis';

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
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'impedit';
    $request->fields = 'quisquam';
    $request->key = 'distinctio';
    $request->notificationEndpoint = 'vel';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->project = 'repellendus';
    $request->quotaUser = 'minima';
    $request->region = 'numquam';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'eius';

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
    $request->notificationEndpoint->creationTimestamp = 'sequi';
    $request->notificationEndpoint->description = 'sint';
    $request->notificationEndpoint->grpcSettings = new NotificationEndpointGrpcSettings();
    $request->notificationEndpoint->grpcSettings->authority = 'amet';
    $request->notificationEndpoint->grpcSettings->endpoint = 'voluptatibus';
    $request->notificationEndpoint->grpcSettings->payloadName = 'amet';
    $request->notificationEndpoint->grpcSettings->resendInterval = new Duration();
    $request->notificationEndpoint->grpcSettings->resendInterval->nanos = 319406;
    $request->notificationEndpoint->grpcSettings->resendInterval->seconds = 'eum';
    $request->notificationEndpoint->grpcSettings->retryDurationSec = 395036;
    $request->notificationEndpoint->id = 'suscipit';
    $request->notificationEndpoint->kind = 'consequuntur';
    $request->notificationEndpoint->name = 'Mamie Thompson';
    $request->notificationEndpoint->region = 'magni';
    $request->notificationEndpoint->selfLink = 'consequuntur';
    $request->accessToken = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'temporibus';
    $request->fields = 'recusandae';
    $request->key = 'porro';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->project = 'reprehenderit';
    $request->quotaUser = 'sint';
    $request->region = 'optio';
    $request->requestId = 'voluptas';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'quas';
    $request->userIp = 'saepe';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ut';
    $request->fields = 'praesentium';
    $request->filter = 'porro';
    $request->key = 'minima';
    $request->maxResults = 811920;
    $request->oauthToken = 'eos';
    $request->orderBy = 'tenetur';
    $request->pageToken = 'omnis';
    $request->prettyPrint = false;
    $request->project = 'itaque';
    $request->quotaUser = 'aspernatur';
    $request->region = 'et';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'provident';
    $request->userIp = 'voluptatem';

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
        'enim',
        'ipsum',
        'esse',
        'odio',
    ];
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'repellat';
    $request->fields = 'porro';
    $request->key = 'dignissimos';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->project = 'molestiae';
    $request->quotaUser = 'ducimus';
    $request->region = 'voluptatibus';
    $request->resource = 'voluptatem';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'nostrum';
    $request->userIp = 'doloremque';

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
