# regionNotificationEndpoints

### Available Operations

* [computeRegionNotificationEndpointsDelete](#computeregionnotificationendpointsdelete) - Deletes the specified NotificationEndpoint in the given region
* [computeRegionNotificationEndpointsGet](#computeregionnotificationendpointsget) - Returns the specified NotificationEndpoint resource in the given region.
* [computeRegionNotificationEndpointsInsert](#computeregionnotificationendpointsinsert) - Create a NotificationEndpoint in the specified project in the given region using the parameters that are included in the request.
* [computeRegionNotificationEndpointsList](#computeregionnotificationendpointslist) - Lists the NotificationEndpoints for a project in the given region.

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
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'minus';
    $request->key = 'nemo';
    $request->notificationEndpoint = 'voluptates';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'nobis';
    $request->region = 'quaerat';
    $request->requestId = 'ullam';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'perspiciatis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'totam';
    $request->key = 'reprehenderit';
    $request->notificationEndpoint = 'inventore';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->project = 'nulla';
    $request->quotaUser = 'soluta';
    $request->region = 'ut';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'voluptas';
    $request->userIp = 'perspiciatis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->notificationEndpoint = new NotificationEndpoint();
    $request->notificationEndpoint->creationTimestamp = 'tempore';
    $request->notificationEndpoint->description = 'facere';
    $request->notificationEndpoint->grpcSettings = new NotificationEndpointGrpcSettings();
    $request->notificationEndpoint->grpcSettings->authority = 'at';
    $request->notificationEndpoint->grpcSettings->endpoint = 'perspiciatis';
    $request->notificationEndpoint->grpcSettings->payloadName = 'quisquam';
    $request->notificationEndpoint->grpcSettings->resendInterval = new Duration();
    $request->notificationEndpoint->grpcSettings->resendInterval->nanos = 563957;
    $request->notificationEndpoint->grpcSettings->resendInterval->seconds = 'corrupti';
    $request->notificationEndpoint->grpcSettings->retryDurationSec = 362377;
    $request->notificationEndpoint->id = 'repudiandae';
    $request->notificationEndpoint->kind = 'incidunt';
    $request->notificationEndpoint->name = 'Marlene Flatley';
    $request->notificationEndpoint->region = 'quis';
    $request->notificationEndpoint->selfLink = 'pariatur';
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quibusdam';
    $request->fields = 'cupiditate';
    $request->key = 'itaque';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->project = 'repellendus';
    $request->quotaUser = 'in';
    $request->region = 'rem';
    $request->requestId = 'nostrum';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'vero';
    $request->userIp = 'quis';

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
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'accusamus';
    $request->filter = 'ullam';
    $request->key = 'minima';
    $request->maxResults = 172985;
    $request->oauthToken = 'occaecati';
    $request->orderBy = 'nihil';
    $request->pageToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'mollitia';
    $request->quotaUser = 'laboriosam';
    $request->region = 'explicabo';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'sunt';
    $request->userIp = 'repellat';

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
