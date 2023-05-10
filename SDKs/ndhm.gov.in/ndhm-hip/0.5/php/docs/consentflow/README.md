# consentFlow

### Available Operations

* [postV05ConsentsHipNotifyJson](#postv05consentshipnotifyjson) - Consent notification
* [postV05ConsentsHipNotifyRaw](#postv05consentshipnotifyraw) - Consent notification

## postV05ConsentsHipNotifyJson

Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED and REVOKED status notifications will be sent to HIP.
  1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available. 
  2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentsHipNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIPConsentNotification;
use \OpenAPI\OpenAPI\Models\Shared\HIPConsentNotificationNotification;
use \OpenAPI\OpenAPI\Models\Shared\HIPConsentNotificationNotificationConsentDetail;
use \OpenAPI\OpenAPI\Models\Shared\HIPConsentNotificationNotificationConsentDetailCareContexts;
use \OpenAPI\OpenAPI\Models\Shared\HIPConsentNotificationNotificationConsentDetailConsentManager;
use \OpenAPI\OpenAPI\Models\Shared\HITypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\HIPConsentNotificationNotificationConsentDetailHIP;
use \OpenAPI\OpenAPI\Models\Shared\ConsentManagerPatientID;
use \OpenAPI\OpenAPI\Models\Shared\Permission;
use \OpenAPI\OpenAPI\Models\Shared\PermissionAccessModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PermissionDateRange;
use \OpenAPI\OpenAPI\Models\Shared\PermissionFrequency;
use \OpenAPI\OpenAPI\Models\Shared\PermissionFrequencyUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsePurpose;
use \OpenAPI\OpenAPI\Models\Shared\ConsentStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentsHipNotifyJsonRequest();
    $request->authorization = 'asperiores';
    $request->hipConsentNotification = new HIPConsentNotification();
    $request->hipConsentNotification->notification = new HIPConsentNotificationNotification();
    $request->hipConsentNotification->notification->consentDetail = new HIPConsentNotificationNotificationConsentDetail();
    $request->hipConsentNotification->notification->consentDetail->careContexts = [
        new HIPConsentNotificationNotificationConsentDetailCareContexts(),
        new HIPConsentNotificationNotificationConsentDetailCareContexts(),
    ];
    $request->hipConsentNotification->notification->consentDetail->consentId = '37ae4203-ce5e-46a9-9d8a-0d446ce2af7a';
    $request->hipConsentNotification->notification->consentDetail->consentManager = new HIPConsentNotificationNotificationConsentDetailConsentManager();
    $request->hipConsentNotification->notification->consentDetail->consentManager->id = '73cf3be4-53f8-470b-b26b-5a73429cdb1a';
    $request->hipConsentNotification->notification->consentDetail->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T20:49:16.541Z');
    $request->hipConsentNotification->notification->consentDetail->hiTypes = [
        HITypeEnumEnum::OP_CONSULTATION,
    ];
    $request->hipConsentNotification->notification->consentDetail->hip = new HIPConsentNotificationNotificationConsentDetailHIP();
    $request->hipConsentNotification->notification->consentDetail->hip->id = 'bb679d23-2271-45bf-8cbb-1e31b8b90f34';
    $request->hipConsentNotification->notification->consentDetail->patient = new ConsentManagerPatientID();
    $request->hipConsentNotification->notification->consentDetail->patient->id = 'hinapatel79@ndhm';
    $request->hipConsentNotification->notification->consentDetail->permission = new Permission();
    $request->hipConsentNotification->notification->consentDetail->permission->accessMode = PermissionAccessModeEnum::STORE;
    $request->hipConsentNotification->notification->consentDetail->permission->dataEraseAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-28T19:10:24.037Z');
    $request->hipConsentNotification->notification->consentDetail->permission->dateRange = new PermissionDateRange();
    $request->hipConsentNotification->notification->consentDetail->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-08T23:47:03.469Z');
    $request->hipConsentNotification->notification->consentDetail->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T04:30:45.210Z');
    $request->hipConsentNotification->notification->consentDetail->permission->frequency = new PermissionFrequency();
    $request->hipConsentNotification->notification->consentDetail->permission->frequency->repeats = 929530;
    $request->hipConsentNotification->notification->consentDetail->permission->frequency->unit = PermissionFrequencyUnitEnum::HOUR;
    $request->hipConsentNotification->notification->consentDetail->permission->frequency->value = 669917;
    $request->hipConsentNotification->notification->consentDetail->purpose = new UsePurpose();
    $request->hipConsentNotification->notification->consentDetail->purpose->code = 'repellendus';
    $request->hipConsentNotification->notification->consentDetail->purpose->refUri = 'https://worse-dragonfly.net';
    $request->hipConsentNotification->notification->consentDetail->purpose->text = 'cupiditate';
    $request->hipConsentNotification->notification->consentDetail->schemaVersion = 'qui';
    $request->hipConsentNotification->notification->consentId = '1879fce9-53f7-43ef-bfbc-7abd74dd39c0';
    $request->hipConsentNotification->notification->signature = 'Signature of CM as defined in W3C standards; Base64 encoded';
    $request->hipConsentNotification->notification->status = ConsentStatusEnum::REVOKED;
    $request->hipConsentNotification->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hipConsentNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-20T06:09:58.619Z');
    $request->xHipId = 'fugit';

    $response = $sdk->consentFlow->postV05ConsentsHipNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsHipNotifyRaw

Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED and REVOKED status notifications will be sent to HIP.
  1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available. 
  2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentsHipNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentsHipNotifyRawRequest();
    $request->authorization = 'porro';
    $request->requestBody = 'maiores';
    $request->xHipId = 'doloribus';

    $response = $sdk->consentFlow->postV05ConsentsHipNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
