# link

### Available Operations

* [postV05LinksLinkAddContextsJson](#postv05linkslinkaddcontextsjson) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkAddContextsRaw](#postv05linkslinkaddcontextsraw) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkConfirmJson](#postv05linkslinkconfirmjson) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkConfirmRaw](#postv05linkslinkconfirmraw) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkInitJson](#postv05linkslinkinitjson) - Link patient's care contexts
* [postV05LinksLinkInitRaw](#postv05linkslinkinitraw) - Link patient's care contexts
* [postV05LinksLinkOnAddContextsJson](#postv05linkslinkonaddcontextsjson) - callback API for HIP initiated patient linking /link/add-context
* [postV05LinksLinkOnAddContextsRaw](#postv05linkslinkonaddcontextsraw) - callback API for HIP initiated patient linking /link/add-context
* [postV05LinksLinkOnConfirmJson](#postv05linkslinkonconfirmjson) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnConfirmRaw](#postv05linkslinkonconfirmraw) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnInitJson](#postv05linkslinkoninitjson) - Response to patient's care context link request
* [postV05LinksLinkOnInitRaw](#postv05linkslinkoninitraw) - Response to patient's care context link request

## postV05LinksLinkAddContextsJson

API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.  
  1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkAddContextsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientCareContextLinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientCareContextLink;
use \OpenAPI\OpenAPI\Models\Shared\PatientCareContextLinkPatient;
use \OpenAPI\OpenAPI\Models\Shared\CareContextRepresentation;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkAddContextsJsonRequest();
    $request->authorization = 'quos';
    $request->patientCareContextLinkRequest = new PatientCareContextLinkRequest();
    $request->patientCareContextLinkRequest->link = new PatientCareContextLink();
    $request->patientCareContextLinkRequest->link->accessToken = 'temporibus';
    $request->patientCareContextLinkRequest->link->patient = new PatientCareContextLinkPatient();
    $request->patientCareContextLinkRequest->link->patient->careContexts = [
        new CareContextRepresentation(),
        new CareContextRepresentation(),
        new CareContextRepresentation(),
    ];
    $request->patientCareContextLinkRequest->link->patient->display = 'iusto';
    $request->patientCareContextLinkRequest->link->patient->referenceNumber = 'TMH-PUID-001';
    $request->patientCareContextLinkRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientCareContextLinkRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T08:47:27.063Z');
    $request->xCmId = 'aperiam';

    $response = $sdk->link->postV05LinksLinkAddContextsJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkAddContextsRaw

API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.  
  1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkAddContextsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkAddContextsRawRequest();
    $request->authorization = 'voluptates';
    $request->requestBody = 'laudantium';
    $request->xCmId = 'tempora';

    $response = $sdk->link->postV05LinksLinkAddContextsRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->authorization = 'quae';
    $request->linkConfirmationRequest = new LinkConfirmationRequest();
    $request->linkConfirmationRequest->confirmation = new LinkConfirmationRequestConfirmation();
    $request->linkConfirmationRequest->confirmation->linkRefNumber = 'omnis';
    $request->linkConfirmationRequest->confirmation->token = 'illum';
    $request->linkConfirmationRequest->requestId = '8f84f144-f3e0-47ed-8c4a-a5f3cabd905a';
    $request->linkConfirmationRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-11T16:51:51.667Z');
    $request->xHipId = 'quia';

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
    $request->authorization = 'necessitatibus';
    $request->requestBody = 'accusantium';
    $request->xHipId = 'ad';

    $response = $sdk->link->postV05LinksLinkConfirmRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkInitJson

Request from CM to links care contexts associated with only one patient
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
    $request->authorization = 'nisi';
    $request->patientLinkReferenceRequest = new PatientLinkReferenceRequest();
    $request->patientLinkReferenceRequest->patient = new PatientLinkReferenceRequestPatient();
    $request->patientLinkReferenceRequest->patient->careContexts = [
        new CareContext(),
        new CareContext(),
    ];
    $request->patientLinkReferenceRequest->patient->id = 'hinapatel79@ndhm';
    $request->patientLinkReferenceRequest->patient->referenceNumber = 'TMH-PUID-001';
    $request->patientLinkReferenceRequest->requestId = '28227b2d-3094-470b-b7a4-fa87cf535a6f';
    $request->patientLinkReferenceRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-24T00:35:46.114Z');
    $request->patientLinkReferenceRequest->transactionId = '54ebf60c-321f-4023-b75d-2367fe1a0cc8';
    $request->xHipId = 'possimus';

    $response = $sdk->link->postV05LinksLinkInitJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkInitRaw

Request from CM to links care contexts associated with only one patient
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
    $request->authorization = 'maiores';
    $request->requestBody = 'odio';
    $request->xHipId = 'provident';

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
    $request->authorization = 'sapiente';
    $request->patientCareContextLinkResponse = new PatientCareContextLinkResponse();
    $request->patientCareContextLinkResponse->acknowledgement = new PatientCareContextLinkResponseAcknowledgement();
    $request->patientCareContextLinkResponse->acknowledgement->status = PatientCareContextLinkResponseAcknowledgementStatusEnum::SUCCESS;
    $request->patientCareContextLinkResponse->error = new Error();
    $request->patientCareContextLinkResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientCareContextLinkResponse->error->message = 'similique';
    $request->patientCareContextLinkResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientCareContextLinkResponse->resp = new RequestReference();
    $request->patientCareContextLinkResponse->resp->requestId = '396d90c3-64b7-4c15-9fba-ce188b1c4ee2';
    $request->patientCareContextLinkResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-29T16:18:41.909Z');
    $request->xHipId = 'impedit';

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
    $request->authorization = 'vel';
    $request->requestBody = 'eligendi';
    $request->xHipId = 'recusandae';

    $response = $sdk->link->postV05LinksLinkOnAddContextsRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkOnConfirmJson

Returns a list of linked care contexts with patient reference number.
  1. **Validated and linked account reference number**
  2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
  3. **Verified that same Consent Manager which made the link request is sending the token**
  4. **Results of unmasked linked care contexts with patient reference number**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkOnConfirmJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientLinkResult;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientLinkResultPatient;
use \OpenAPI\OpenAPI\Models\Shared\CareContextRepresentation;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkOnConfirmJsonRequest();
    $request->authorization = 'ex';
    $request->patientLinkResult = new PatientLinkResult();
    $request->patientLinkResult->error = new Error();
    $request->patientLinkResult->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientLinkResult->error->message = 'veritatis';
    $request->patientLinkResult->patient = new PatientLinkResultPatient();
    $request->patientLinkResult->patient->careContexts = [
        new CareContextRepresentation(),
        new CareContextRepresentation(),
        new CareContextRepresentation(),
        new CareContextRepresentation(),
    ];
    $request->patientLinkResult->patient->display = 'itaque';
    $request->patientLinkResult->patient->referenceNumber = 'vero';
    $request->patientLinkResult->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientLinkResult->resp = new RequestReference();
    $request->patientLinkResult->resp->requestId = 'b1c7cbdb-6eec-4743-b8ba-25317747dc91';
    $request->patientLinkResult->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-01T07:01:55.800Z');
    $request->xCmId = 'illum';

    $response = $sdk->link->postV05LinksLinkOnConfirmJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkOnConfirmRaw

Returns a list of linked care contexts with patient reference number.
  1. **Validated and linked account reference number**
  2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
  3. **Verified that same Consent Manager which made the link request is sending the token**
  4. **Results of unmasked linked care contexts with patient reference number**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkOnConfirmRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkOnConfirmRawRequest();
    $request->authorization = 'fugit';
    $request->requestBody = 'maxime';
    $request->xCmId = 'dolorum';

    $response = $sdk->link->postV05LinksLinkOnConfirmRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkOnInitJson

Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
  1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
  2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
  3. **HIP should communicate the mode of authentication of a successful request**
  4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. **Patient reference number is invalid**
  2. **Care context reference numbers are invalid**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkOnInitJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientLinkReferenceResult;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientLinkReferenceResultLink;
use \OpenAPI\OpenAPI\Models\Shared\PatientLinkReferenceResultLinkAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Meta;
use \OpenAPI\OpenAPI\Models\Shared\MetaCommunicationMediumEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkOnInitJsonRequest();
    $request->authorization = 'repellat';
    $request->patientLinkReferenceResult = new PatientLinkReferenceResult();
    $request->patientLinkReferenceResult->error = new Error();
    $request->patientLinkReferenceResult->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientLinkReferenceResult->error->message = 'illum';
    $request->patientLinkReferenceResult->link = new PatientLinkReferenceResultLink();
    $request->patientLinkReferenceResult->link->authenticationType = PatientLinkReferenceResultLinkAuthenticationTypeEnum::MEDIATED;
    $request->patientLinkReferenceResult->link->meta = new Meta();
    $request->patientLinkReferenceResult->link->meta->communicationExpiry = '2019-12-30T12:01:55Z';
    $request->patientLinkReferenceResult->link->meta->communicationHint = 'commodi';
    $request->patientLinkReferenceResult->link->meta->communicationMedium = MetaCommunicationMediumEnum::MOBILE;
    $request->patientLinkReferenceResult->link->referenceNumber = 'explicabo';
    $request->patientLinkReferenceResult->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientLinkReferenceResult->resp = new RequestReference();
    $request->patientLinkReferenceResult->resp->requestId = '3dc0f5ae-2f3a-46b7-8087-8756143f5a6c';
    $request->patientLinkReferenceResult->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-20T14:46:16.227Z');
    $request->patientLinkReferenceResult->transactionId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->xCmId = 'nam';

    $response = $sdk->link->postV05LinksLinkOnInitJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkOnInitRaw

Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
  1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
  2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
  3. **HIP should communicate the mode of authentication of a successful request**
  4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. **Patient reference number is invalid**
  2. **Care context reference numbers are invalid**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkOnInitRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkOnInitRawRequest();
    $request->authorization = 'nemo';
    $request->requestBody = 'enim';
    $request->xCmId = 'ipsam';

    $response = $sdk->link->postV05LinksLinkOnInitRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
