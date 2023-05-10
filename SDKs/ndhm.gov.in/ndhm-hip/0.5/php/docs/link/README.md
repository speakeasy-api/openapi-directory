# link

### Available Operations

* [postV05LinksLinkConfirmJson](#postv05linkslinkconfirmjson) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkConfirmRaw](#postv05linkslinkconfirmraw) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkInitJson](#postv05linkslinkinitjson) - Link patient's care contexts
* [postV05LinksLinkInitRaw](#postv05linkslinkinitraw) - Link patient's care contexts
* [postV05LinksLinkOnAddContextsJson](#postv05linkslinkonaddcontextsjson) - callback API for HIP initiated patient linking /link/add-context
* [postV05LinksLinkOnAddContextsRaw](#postv05linkslinkonaddcontextsraw) - callback API for HIP initiated patient linking /link/add-context

## postV05LinksLinkConfirmJson

API to submit the token that was sent by HIP during the link request. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkConfirmJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\LinkConfirmationRequest;
use \OpenAPI\OpenAPI\Models\Shared\LinkConfirmationRequestConfirmation;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkConfirmJsonRequest();
    $request->authorization = 'porro';
    $request->linkConfirmationRequest = new LinkConfirmationRequest();
    $request->linkConfirmationRequest->confirmation = new LinkConfirmationRequestConfirmation();
    $request->linkConfirmationRequest->confirmation->linkRefNumber = 'eum';
    $request->linkConfirmationRequest->confirmation->token = 'quas';
    $request->linkConfirmationRequest->requestId = '8282aa48-2562-4f22-ae98-17ee17cbe61e';
    $request->linkConfirmationRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-24T03:22:50.654Z');
    $request->xHipId = 'molestiae';

    $response = $sdk->link->postV05LinksLinkConfirmJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkConfirmRaw

API to submit the token that was sent by HIP during the link request. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkConfirmRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkConfirmRawRequest();
    $request->authorization = 'rerum';
    $request->requestBody = 'occaecati';
    $request->xHipId = 'minima';

    $response = $sdk->link->postV05LinksLinkConfirmRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkInitJson

Request from Gateway to links care contexts associated with only one patient
  1. **Validate account reference number and care context reference number**
  2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
      and were these care contexts discovered or not for a given patient**
  3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
  4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkInitJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientLinkReferenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientLinkReferenceRequestPatient;
use \OpenAPI\OpenAPI\Models\Shared\CareContext;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkInitJsonRequest();
    $request->authorization = 'distinctio';
    $request->patientLinkReferenceRequest = new PatientLinkReferenceRequest();
    $request->patientLinkReferenceRequest->patient = new PatientLinkReferenceRequestPatient();
    $request->patientLinkReferenceRequest->patient->careContexts = [
        new CareContext(),
        new CareContext(),
        new CareContext(),
        new CareContext(),
    ];
    $request->patientLinkReferenceRequest->patient->id = 'hinapatel79@ndhm';
    $request->patientLinkReferenceRequest->patient->referenceNumber = 'TMH-PUID-001';
    $request->patientLinkReferenceRequest->requestId = '0ab3c20c-4f37-489f-9871-f99dd2efd121';
    $request->patientLinkReferenceRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-25T11:11:22.943Z');
    $request->patientLinkReferenceRequest->transactionId = '6f1e674b-db04-4f15-b560-82d68ea19f1d';
    $request->xHipId = 'et';

    $response = $sdk->link->postV05LinksLinkInitJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkInitRaw

Request from Gateway to links care contexts associated with only one patient
  1. **Validate account reference number and care context reference number**
  2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
      and were these care contexts discovered or not for a given patient**
  3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
  4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkInitRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkInitRawRequest();
    $request->authorization = 'voluptate';
    $request->requestBody = 'ipsa';
    $request->xHipId = 'minima';

    $response = $sdk->link->postV05LinksLinkInitRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkOnAddContextsJson

If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so. 
  1. **accessToken must be valid and must be for the purpose of linking**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkOnAddContextsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientCareContextLinkResponse;
use \OpenAPI\OpenAPI\Models\Shared\PatientCareContextLinkResponseAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\PatientCareContextLinkResponseAcknowledgementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkOnAddContextsJsonRequest();
    $request->authorization = 'veritatis';
    $request->patientCareContextLinkResponse = new PatientCareContextLinkResponse();
    $request->patientCareContextLinkResponse->acknowledgement = new PatientCareContextLinkResponseAcknowledgement();
    $request->patientCareContextLinkResponse->acknowledgement->status = PatientCareContextLinkResponseAcknowledgementStatusEnum::SUCCESS;
    $request->patientCareContextLinkResponse->error = new Error();
    $request->patientCareContextLinkResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientCareContextLinkResponse->error->message = 'adipisci';
    $request->patientCareContextLinkResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientCareContextLinkResponse->resp = new RequestReference();
    $request->patientCareContextLinkResponse->resp->requestId = '9d08086a-1840-4394-8260-71f93f5f0642';
    $request->patientCareContextLinkResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-31T13:20:27.558Z');
    $request->xHipId = 'maxime';

    $response = $sdk->link->postV05LinksLinkOnAddContextsJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkOnAddContextsRaw

If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so. 
  1. **accessToken must be valid and must be for the purpose of linking**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkOnAddContextsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkOnAddContextsRawRequest();
    $request->authorization = 'dignissimos';
    $request->requestBody = 'officia';
    $request->xHipId = 'asperiores';

    $response = $sdk->link->postV05LinksLinkOnAddContextsRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
