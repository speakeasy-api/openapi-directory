# patientNotification

### Available Operations

* [postV05PatientsSmsNotifyJson](#postv05patientssmsnotifyjson) - API for HIP to send SMS notifications to patients
* [postV05PatientsSmsNotifyRaw](#postv05patientssmsnotifyraw) - API for HIP to send SMS notifications to patients
* [postV05PatientsSmsOnNotifyJson](#postv05patientssmsonnotifyjson) - Acknowledgment response for SMS notification sent to patient by HIP
* [postV05PatientsSmsOnNotifyRaw](#postv05patientssmsonnotifyraw) - Acknowledgment response for SMS notification sent to patient by HIP

## postV05PatientsSmsNotifyJson

API to send SMS notifications to patient with custom deeplink.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsSmsNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientSMSNotifcationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientSMSNotifcationRequestNotification;
use \OpenAPI\OpenAPI\Models\Shared\PatientSMSNotifcationRequestNotificationHip;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsSmsNotifyJsonRequest();
    $request->authorization = 'minima';
    $request->patientSMSNotifcationRequest = new PatientSMSNotifcationRequest();
    $request->patientSMSNotifcationRequest->notification = new PatientSMSNotifcationRequestNotification();
    $request->patientSMSNotifcationRequest->notification->careContextInfo = 'X-Ray on 22nd Dec';
    $request->patientSMSNotifcationRequest->notification->deeplinkUrl = 'https://link.to.health.records/ (Optional)';
    $request->patientSMSNotifcationRequest->notification->hip = new PatientSMSNotifcationRequestNotificationHip();
    $request->patientSMSNotifcationRequest->notification->hip->id = 'HIP_001';
    $request->patientSMSNotifcationRequest->notification->hip->name = 'Max Healthcare (Optional)';
    $request->patientSMSNotifcationRequest->notification->phoneNo = '+91-9999999999';
    $request->patientSMSNotifcationRequest->notification->receiverName = 'Ramesh Singh (Optional)';
    $request->patientSMSNotifcationRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientSMSNotifcationRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-24T19:30:03.350Z');
    $request->xCmId = 'corrupti';

    $response = $sdk->patientNotification->postV05PatientsSmsNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsSmsNotifyRaw

API to send SMS notifications to patient with custom deeplink.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsSmsNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsSmsNotifyRawRequest();
    $request->authorization = 'doloremque';
    $request->requestBody = 'fugiat';
    $request->xCmId = 'numquam';

    $response = $sdk->patientNotification->postV05PatientsSmsNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsSmsOnNotifyJson

If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
If the SMS notification is failed then "status" will be "ERRORED" with error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsSmsOnNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientSMSNotifcationResponse;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;
use \OpenAPI\OpenAPI\Models\Shared\PatientSMSNotifcationResponseStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsSmsOnNotifyJsonRequest();
    $request->authorization = 'doloremque';
    $request->patientSMSNotifcationResponse = new PatientSMSNotifcationResponse();
    $request->patientSMSNotifcationResponse->error = new Error();
    $request->patientSMSNotifcationResponse->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->patientSMSNotifcationResponse->error->message = 'nobis';
    $request->patientSMSNotifcationResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientSMSNotifcationResponse->resp = new RequestReference();
    $request->patientSMSNotifcationResponse->resp->requestId = 'acc6cbd6-b5f3-4ec9-8930-4f926bad2553';
    $request->patientSMSNotifcationResponse->status = PatientSMSNotifcationResponseStatusEnum::ERRORED;
    $request->patientSMSNotifcationResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-18T18:19:33.332Z');
    $request->xHipId = 'nobis';

    $response = $sdk->patientNotification->postV05PatientsSmsOnNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsSmsOnNotifyRaw

If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
If the SMS notification is failed then "status" will be "ERRORED" with error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsSmsOnNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsSmsOnNotifyRawRequest();
    $request->authorization = 'tempora';
    $request->requestBody = 'voluptate';
    $request->xHipId = 'eius';

    $response = $sdk->patientNotification->postV05PatientsSmsOnNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
