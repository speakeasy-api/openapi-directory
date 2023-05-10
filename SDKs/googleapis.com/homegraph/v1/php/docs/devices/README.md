# devices

### Available Operations

* [homegraphDevicesQuery](#homegraphdevicesquery) - Gets the current states in Home Graph for the given set of the third-party user's devices. The third-party user's identity is passed in via the `agent_user_id` (see QueryRequest). This request must be authorized using service account credentials from your Actions console project.
* [homegraphDevicesReportStateAndNotification](#homegraphdevicesreportstateandnotification) - Reports device state and optionally sends device notifications. Called by your smart home Action when the state of a third-party device changes or you need to send a notification about the device. See [Implement Report State](https://developers.home.google.com/cloud-to-cloud/integration/report-state) for more information. This method updates the device state according to its declared [traits](https://developers.home.google.com/cloud-to-cloud/primer/device-types-and-traits). Publishing a new state value outside of these traits will result in an `INVALID_ARGUMENT` error response. The third-party user's identity is passed in via the `agent_user_id` (see ReportStateAndNotificationRequest). This request must be authorized using service account credentials from your Actions console project.
* [homegraphDevicesRequestSync](#homegraphdevicesrequestsync) - Requests Google to send an `action.devices.SYNC` [intent](https://developers.home.google.com/cloud-to-cloud/intents/sync) to your smart home Action to update device metadata for the given user. The third-party user's identity is passed via the `agent_user_id` (see RequestSyncDevicesRequest). This request must be authorized using service account credentials from your Actions console project.
* [homegraphDevicesSync](#homegraphdevicessync) - Gets all the devices associated with the given third-party user. The third-party user's identity is passed in via the `agent_user_id` (see SyncRequest). This request must be authorized using service account credentials from your Actions console project.

## homegraphDevicesQuery

Gets the current states in Home Graph for the given set of the third-party user's devices. The third-party user's identity is passed in via the `agent_user_id` (see QueryRequest). This request must be authorized using service account credentials from your Actions console project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HomegraphDevicesQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\QueryRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\QueryRequestPayload;
use \OpenAPI\OpenAPI\Models\Shared\AgentDeviceId;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\HomegraphDevicesQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HomegraphDevicesQueryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queryRequest = new QueryRequest();
    $request->queryRequest->agentUserId = 'nisi';
    $request->queryRequest->inputs = [
        new QueryRequestInput(),
        new QueryRequestInput(),
        new QueryRequestInput(),
        new QueryRequestInput(),
    ];
    $request->queryRequest->requestId = 'temporibus';
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new HomegraphDevicesQuerySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->homegraphDevicesQuery($request, $requestSecurity);

    if ($response->queryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## homegraphDevicesReportStateAndNotification

Reports device state and optionally sends device notifications. Called by your smart home Action when the state of a third-party device changes or you need to send a notification about the device. See [Implement Report State](https://developers.home.google.com/cloud-to-cloud/integration/report-state) for more information. This method updates the device state according to its declared [traits](https://developers.home.google.com/cloud-to-cloud/primer/device-types-and-traits). Publishing a new state value outside of these traits will result in an `INVALID_ARGUMENT` error response. The third-party user's identity is passed in via the `agent_user_id` (see ReportStateAndNotificationRequest). This request must be authorized using service account credentials from your Actions console project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HomegraphDevicesReportStateAndNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportStateAndNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\StateAndNotificationPayload;
use \OpenAPI\OpenAPI\Models\Shared\ReportStateAndNotificationDevice;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\HomegraphDevicesReportStateAndNotificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HomegraphDevicesReportStateAndNotificationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->reportStateAndNotificationRequest = new ReportStateAndNotificationRequest();
    $request->reportStateAndNotificationRequest->agentUserId = 'at';
    $request->reportStateAndNotificationRequest->eventId = 'at';
    $request->reportStateAndNotificationRequest->followUpToken = 'maiores';
    $request->reportStateAndNotificationRequest->payload = new StateAndNotificationPayload();
    $request->reportStateAndNotificationRequest->payload->devices = new ReportStateAndNotificationDevice();
    $request->reportStateAndNotificationRequest->payload->devices->notifications = [
        'quod' => 'quod',
        'esse' => 'totam',
    ];
    $request->reportStateAndNotificationRequest->payload->devices->states = [
        'dolorum' => 'dicta',
        'nam' => 'officia',
        'occaecati' => 'fugit',
        'deleniti' => 'hic',
    ];
    $request->reportStateAndNotificationRequest->requestId = 'optio';
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'molestiae';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new HomegraphDevicesReportStateAndNotificationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->homegraphDevicesReportStateAndNotification($request, $requestSecurity);

    if ($response->reportStateAndNotificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## homegraphDevicesRequestSync

Requests Google to send an `action.devices.SYNC` [intent](https://developers.home.google.com/cloud-to-cloud/intents/sync) to your smart home Action to update device metadata for the given user. The third-party user's identity is passed via the `agent_user_id` (see RequestSyncDevicesRequest). This request must be authorized using service account credentials from your Actions console project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HomegraphDevicesRequestSyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestSyncDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\HomegraphDevicesRequestSyncSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HomegraphDevicesRequestSyncRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestSyncDevicesRequest = new RequestSyncDevicesRequest();
    $request->requestSyncDevicesRequest->agentUserId = 'excepturi';
    $request->requestSyncDevicesRequest->async = false;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'natus';
    $request->key = 'sed';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'laboriosam';

    $requestSecurity = new HomegraphDevicesRequestSyncSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->homegraphDevicesRequestSync($request, $requestSecurity);

    if ($response->requestSyncDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## homegraphDevicesSync

Gets all the devices associated with the given third-party user. The third-party user's identity is passed in via the `agent_user_id` (see SyncRequest). This request must be authorized using service account credentials from your Actions console project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HomegraphDevicesSyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\HomegraphDevicesSyncSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HomegraphDevicesSyncRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->syncRequest = new SyncRequest();
    $request->syncRequest->agentUserId = 'saepe';
    $request->syncRequest->requestId = 'fuga';
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'iure';
    $request->key = 'saepe';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new HomegraphDevicesSyncSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->homegraphDevicesSync($request, $requestSecurity);

    if ($response->syncResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
