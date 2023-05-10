# patientNotification

### Available Operations

* [postV05PatientsSmsOnNotifyJson](#postv05patientssmsonnotifyjson) - Acknowledgment response for SMS notification sent to patient by HIP
* [postV05PatientsSmsOnNotifyRaw](#postv05patientssmsonnotifyraw) - Acknowledgment response for SMS notification sent to patient by HIP

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
    $request->authorization = 'nemo';
    $request->patientSMSNotifcationResponse = new PatientSMSNotifcationResponse();
    $request->patientSMSNotifcationResponse->error = new Error();
    $request->patientSMSNotifcationResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientSMSNotifcationResponse->error->message = 'quaerat';
    $request->patientSMSNotifcationResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientSMSNotifcationResponse->resp = new RequestReference();
    $request->patientSMSNotifcationResponse->resp->requestId = 'cc413aa6-3aae-48d6-b864-dbb675fd5e60';
    $request->patientSMSNotifcationResponse->status = PatientSMSNotifcationResponseStatusEnum::ERRORED;
    $request->patientSMSNotifcationResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-21T02:01:44.496Z');
    $request->xHipId = 'exercitationem';

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
    $request->authorization = 'earum';
    $request->requestBody = 'facere';
    $request->xHipId = 'numquam';

    $response = $sdk->patientNotification->postV05PatientsSmsOnNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
