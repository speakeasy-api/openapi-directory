# hipFacing

### Available Operations

* [postV05ConsentsHipOnNotifyJson](#postv05consentshiponnotifyjson) - Consent notification
* [postV05ConsentsHipOnNotifyRaw](#postv05consentshiponnotifyraw) - Consent notification
* [postV05HealthInformationHipOnRequestJson](#postv05healthinformationhiponrequestjson) - Health information data request
* [postV05HealthInformationHipOnRequestRaw](#postv05healthinformationhiponrequestraw) - Health information data request
* [postV05HealthInformationNotifyJson](#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [postV05HealthInformationNotifyRaw](#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [postV05LinksLinkAddContextsJson](#postv05linkslinkaddcontextsjson) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkAddContextsRaw](#postv05linkslinkaddcontextsraw) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkOnConfirmJson](#postv05linkslinkonconfirmjson) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnConfirmRaw](#postv05linkslinkonconfirmraw) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnInitJson](#postv05linkslinkoninitjson) - Response to patient's care context link request
* [postV05LinksLinkOnInitRaw](#postv05linkslinkoninitraw) - Response to patient's care context link request
* [postV05PatientsSmsNotifyJson](#postv05patientssmsnotifyjson) - API for HIP to send SMS notifications to patients
* [postV05PatientsSmsNotifyRaw](#postv05patientssmsnotifyraw) - API for HIP to send SMS notifications to patients
* [postV05UsersAuthConfirmJson](#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthConfirmRaw](#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthFetchModesJson](#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthFetchModesRaw](#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthInitJson](#postv05usersauthinitjson) - Initialize authentication from HIP
* [postV05UsersAuthInitRaw](#postv05usersauthinitraw) - Initialize authentication from HIP
* [postV05UsersAuthOnNotifyJson](#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [postV05UsersAuthOnNotifyRaw](#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

## postV05ConsentsHipOnNotifyJson

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentsHipOnNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIPConsentNotificationResponse;
use \OpenAPI\OpenAPI\Models\Shared\ConsentAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\ConsentAcknowledgementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentsHipOnNotifyJsonRequest();
    $request->authorization = 'molestias';
    $request->hipConsentNotificationResponse = new HIPConsentNotificationResponse();
    $request->hipConsentNotificationResponse->acknowledgement = new ConsentAcknowledgement();
    $request->hipConsentNotificationResponse->acknowledgement->consentId = '<consent-artefact-id>';
    $request->hipConsentNotificationResponse->acknowledgement->status = ConsentAcknowledgementStatusEnum::UNKNOWN;
    $request->hipConsentNotificationResponse->error = new Error();
    $request->hipConsentNotificationResponse->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->hipConsentNotificationResponse->error->message = 'totam';
    $request->hipConsentNotificationResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hipConsentNotificationResponse->resp = new RequestReference();
    $request->hipConsentNotificationResponse->resp->requestId = '366c723f-fda9-4e06-bee4-825c1fc0e115';
    $request->hipConsentNotificationResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-04T02:00:32.457Z');
    $request->xCmId = 'perferendis';

    $response = $sdk->hipFacing->postV05ConsentsHipOnNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsHipOnNotifyRaw

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentsHipOnNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentsHipOnNotifyRawRequest();
    $request->authorization = 'facilis';
    $request->requestBody = 'reiciendis';
    $request->xCmId = 'a';

    $response = $sdk->hipFacing->postV05ConsentsHipOnNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationHipOnRequestJson

API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationHipOnRequestJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIPHealthInformationRequestAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HIPHealthInformationRequestAcknowledgementHiRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationHipOnRequestJsonRequest();
    $request->authorization = 'iste';
    $request->hipHealthInformationRequestAcknowledgement = new HIPHealthInformationRequestAcknowledgement();
    $request->hipHealthInformationRequestAcknowledgement->error = new Error();
    $request->hipHealthInformationRequestAcknowledgement->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->hipHealthInformationRequestAcknowledgement->error->message = 'quos';
    $request->hipHealthInformationRequestAcknowledgement->hiRequest = new HIPHealthInformationRequestAcknowledgementHiRequest();
    $request->hipHealthInformationRequestAcknowledgement->hiRequest->sessionStatus = HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum::ACKNOWLEDGED;
    $request->hipHealthInformationRequestAcknowledgement->hiRequest->transactionId = '544ec42d-efcc-4e8f-9977-773e63562a7b';
    $request->hipHealthInformationRequestAcknowledgement->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hipHealthInformationRequestAcknowledgement->resp = new RequestReference();
    $request->hipHealthInformationRequestAcknowledgement->resp->requestId = '408f05e3-d48f-4daf-b13a-1f5fd94259c0';
    $request->hipHealthInformationRequestAcknowledgement->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-08T19:04:23.267Z');
    $request->xCmId = 'commodi';

    $response = $sdk->hipFacing->postV05HealthInformationHipOnRequestJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationHipOnRequestRaw

API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationHipOnRequestRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationHipOnRequestRawRequest();
    $request->authorization = 'sapiente';
    $request->requestBody = 'consequuntur';
    $request->xCmId = 'veniam';

    $response = $sdk->hipFacing->postV05HealthInformationHipOnRequestRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationNotifyJson

API called by HIU and HIP during data-transfer. 
1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED] 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotification;
use \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotification;
use \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotificationNotifier;
use \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotificationNotifierTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotificationStatusNotification;
use \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotificationStatusNotificationStatusResponses;
use \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationNotifyJsonRequest();
    $request->authorization = 'debitis';
    $request->healthInformationNotification = new HealthInformationNotification();
    $request->healthInformationNotification->notification = new HealthInformationNotificationNotification();
    $request->healthInformationNotification->notification->consentId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->healthInformationNotification->notification->doneAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-07T04:55:07.411Z');
    $request->healthInformationNotification->notification->notifier = new HealthInformationNotificationNotificationNotifier();
    $request->healthInformationNotification->notification->notifier->id = 'tmh';
    $request->healthInformationNotification->notification->notifier->type = HealthInformationNotificationNotificationNotifierTypeEnum::HIU;
    $request->healthInformationNotification->notification->statusNotification = new HealthInformationNotificationNotificationStatusNotification();
    $request->healthInformationNotification->notification->statusNotification->hipId = 'max';
    $request->healthInformationNotification->notification->statusNotification->sessionStatus = HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum::TRANSFERRED;
    $request->healthInformationNotification->notification->statusNotification->statusResponses = [
        new HealthInformationNotificationNotificationStatusNotificationStatusResponses(),
        new HealthInformationNotificationNotificationStatusNotificationStatusResponses(),
        new HealthInformationNotificationNotificationStatusNotificationStatusResponses(),
        new HealthInformationNotificationNotificationStatusNotificationStatusResponses(),
    ];
    $request->healthInformationNotification->notification->transactionId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->healthInformationNotification->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->healthInformationNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-10T01:49:31.506Z');
    $request->xCmId = 'in';

    $response = $sdk->hipFacing->postV05HealthInformationNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationNotifyRaw

API called by HIU and HIP during data-transfer. 
1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED] 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationNotifyRawRequest();
    $request->authorization = 'minima';
    $request->requestBody = 'ex';
    $request->xCmId = 'minus';

    $response = $sdk->hipFacing->postV05HealthInformationNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->authorization = 'ab';
    $request->patientCareContextLinkRequest = new PatientCareContextLinkRequest();
    $request->patientCareContextLinkRequest->link = new PatientCareContextLink();
    $request->patientCareContextLinkRequest->link->accessToken = 'beatae';
    $request->patientCareContextLinkRequest->link->patient = new PatientCareContextLinkPatient();
    $request->patientCareContextLinkRequest->link->patient->careContexts = [
        new CareContextRepresentation(),
        new CareContextRepresentation(),
        new CareContextRepresentation(),
        new CareContextRepresentation(),
    ];
    $request->patientCareContextLinkRequest->link->patient->display = 'nisi';
    $request->patientCareContextLinkRequest->link->patient->referenceNumber = 'TMH-PUID-001';
    $request->patientCareContextLinkRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientCareContextLinkRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-03T18:23:14.348Z');
    $request->xCmId = 'ducimus';

    $response = $sdk->hipFacing->postV05LinksLinkAddContextsJson($request);

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
    $request->authorization = 'fuga';
    $request->requestBody = 'minima';
    $request->xCmId = 'architecto';

    $response = $sdk->hipFacing->postV05LinksLinkAddContextsRaw($request);

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
    $request->authorization = 'qui';
    $request->patientLinkResult = new PatientLinkResult();
    $request->patientLinkResult->error = new Error();
    $request->patientLinkResult->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientLinkResult->error->message = 'magni';
    $request->patientLinkResult->patient = new PatientLinkResultPatient();
    $request->patientLinkResult->patient->careContexts = [
        new CareContextRepresentation(),
        new CareContextRepresentation(),
    ];
    $request->patientLinkResult->patient->display = 'adipisci';
    $request->patientLinkResult->patient->referenceNumber = 'praesentium';
    $request->patientLinkResult->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientLinkResult->resp = new RequestReference();
    $request->patientLinkResult->resp->requestId = '35bbc05a-23a4-45ce-bc5f-de10a0ce2169';
    $request->patientLinkResult->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-08T11:18:01.432Z');
    $request->xCmId = 'architecto';

    $response = $sdk->hipFacing->postV05LinksLinkOnConfirmJson($request);

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
    $request->authorization = 'accusantium';
    $request->requestBody = 'perferendis';
    $request->xCmId = 'veritatis';

    $response = $sdk->hipFacing->postV05LinksLinkOnConfirmRaw($request);

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
    $request->authorization = 'provident';
    $request->patientLinkReferenceResult = new PatientLinkReferenceResult();
    $request->patientLinkReferenceResult->error = new Error();
    $request->patientLinkReferenceResult->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->patientLinkReferenceResult->error->message = 'iure';
    $request->patientLinkReferenceResult->link = new PatientLinkReferenceResultLink();
    $request->patientLinkReferenceResult->link->authenticationType = PatientLinkReferenceResultLinkAuthenticationTypeEnum::MEDIATED;
    $request->patientLinkReferenceResult->link->meta = new Meta();
    $request->patientLinkReferenceResult->link->meta->communicationExpiry = '2019-12-30T12:01:55Z';
    $request->patientLinkReferenceResult->link->meta->communicationHint = 'quod';
    $request->patientLinkReferenceResult->link->meta->communicationMedium = MetaCommunicationMediumEnum::MOBILE;
    $request->patientLinkReferenceResult->link->referenceNumber = 'recusandae';
    $request->patientLinkReferenceResult->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientLinkReferenceResult->resp = new RequestReference();
    $request->patientLinkReferenceResult->resp->requestId = '34762799-bfbb-4e69-89fb-2bb4ecae6c3d';
    $request->patientLinkReferenceResult->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-25T05:11:57.735Z');
    $request->patientLinkReferenceResult->transactionId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->xCmId = 'facilis';

    $response = $sdk->hipFacing->postV05LinksLinkOnInitJson($request);

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
    $request->authorization = 'non';
    $request->requestBody = 'mollitia';
    $request->xCmId = 'assumenda';

    $response = $sdk->hipFacing->postV05LinksLinkOnInitRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->authorization = 'recusandae';
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
    $request->patientSMSNotifcationRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-08T04:35:48.457Z');
    $request->xCmId = 'ad';

    $response = $sdk->hipFacing->postV05PatientsSmsNotifyJson($request);

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
    $request->authorization = 'facere';
    $request->requestBody = 'laborum';
    $request->xCmId = 'eveniet';

    $response = $sdk->hipFacing->postV05PatientsSmsNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthConfirmJson

This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
  1. demographic details are only required for  demographic auth as of now. 
  2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
  3. demographic.identifier is optional, however maybe required if authentication so mandates. 
  4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthConfirmJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthConfirmRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthConfirmRequestCredential;
use \OpenAPI\OpenAPI\Models\Shared\PatientDemographic;
use \OpenAPI\OpenAPI\Models\Shared\PatientGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthConfirmIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\AuthConfirmIdentifierTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthConfirmJsonRequest();
    $request->authorization = 'laborum';
    $request->patientAuthConfirmRequest = new PatientAuthConfirmRequest();
    $request->patientAuthConfirmRequest->credential = new PatientAuthConfirmRequestCredential();
    $request->patientAuthConfirmRequest->credential->authCode = 'incidunt';
    $request->patientAuthConfirmRequest->credential->demographic = new PatientDemographic();
    $request->patientAuthConfirmRequest->credential->demographic->dateOfBirth = '1972-02-29';
    $request->patientAuthConfirmRequest->credential->demographic->gender = PatientGenderEnum::U;
    $request->patientAuthConfirmRequest->credential->demographic->identifier = new AuthConfirmIdentifier();
    $request->patientAuthConfirmRequest->credential->demographic->identifier->type = AuthConfirmIdentifierTypeEnum::MOBILE;
    $request->patientAuthConfirmRequest->credential->demographic->identifier->value = '+919800083232';
    $request->patientAuthConfirmRequest->credential->demographic->name = 'janki das';
    $request->patientAuthConfirmRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthConfirmRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-31T23:28:08.866Z');
    $request->patientAuthConfirmRequest->transactionId = 'suscipit';
    $request->xCmId = 'deserunt';

    $response = $sdk->hipFacing->postV05UsersAuthConfirmJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthConfirmRaw

This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
  1. demographic details are only required for  demographic auth as of now. 
  2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
  3. demographic.identifier is optional, however maybe required if authentication so mandates. 
  4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthConfirmRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthConfirmRawRequest();
    $request->authorization = 'molestias';
    $request->requestBody = 'laborum';
    $request->xCmId = 'est';

    $response = $sdk->hipFacing->postV05UsersAuthConfirmRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthFetchModesJson

This API is meant for identify supported authentication modes for a patient given a specific purpose


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthFetchModesJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthModeQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthModeQueryRequestQuery;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthModeQueryRequestQueryRequester;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthModeQueryRequestQueryRequesterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthFetchModesJsonRequest();
    $request->authorization = 'occaecati';
    $request->patientAuthModeQueryRequest = new PatientAuthModeQueryRequest();
    $request->patientAuthModeQueryRequest->query = new PatientAuthModeQueryRequestQuery();
    $request->patientAuthModeQueryRequest->query->id = 'hinapatel79@ndhm';
    $request->patientAuthModeQueryRequest->query->purpose = PatientAuthPurposeEnum::LINK;
    $request->patientAuthModeQueryRequest->query->requester = new PatientAuthModeQueryRequestQueryRequester();
    $request->patientAuthModeQueryRequest->query->requester->id = '100005';
    $request->patientAuthModeQueryRequest->query->requester->type = PatientAuthModeQueryRequestQueryRequesterTypeEnum::HIU;
    $request->patientAuthModeQueryRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthModeQueryRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-09T14:41:22.235Z');
    $request->xCmId = 'aliquid';

    $response = $sdk->hipFacing->postV05UsersAuthFetchModesJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthFetchModesRaw

This API is meant for identify supported authentication modes for a patient given a specific purpose


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthFetchModesRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthFetchModesRawRequest();
    $request->authorization = 'magnam';
    $request->requestBody = 'quaerat';
    $request->xCmId = 'eligendi';

    $response = $sdk->hipFacing->postV05UsersAuthFetchModesRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthInitJson

This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthInitJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthInitRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthInitRequestQuery;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthRequester;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthRequesterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthInitJsonRequest();
    $request->authorization = 'hic';
    $request->patientAuthInitRequest = new PatientAuthInitRequest();
    $request->patientAuthInitRequest->query = new PatientAuthInitRequestQuery();
    $request->patientAuthInitRequest->query->authMode = AuthenticationModeEnum::DIRECT;
    $request->patientAuthInitRequest->query->id = 'hinapatel@ndhm';
    $request->patientAuthInitRequest->query->purpose = PatientAuthPurposeEnum::KYC_AND_LINK;
    $request->patientAuthInitRequest->query->requester = new PatientAuthRequester();
    $request->patientAuthInitRequest->query->requester->id = '100005';
    $request->patientAuthInitRequest->query->requester->type = PatientAuthRequesterTypeEnum::HIU;
    $request->patientAuthInitRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthInitRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-19T13:48:09.621Z');
    $request->xCmId = 'mollitia';

    $response = $sdk->hipFacing->postV05UsersAuthInitJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthInitRaw

This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthInitRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthInitRawRequest();
    $request->authorization = 'magnam';
    $request->requestBody = 'nostrum';
    $request->xCmId = 'esse';

    $response = $sdk->hipFacing->postV05UsersAuthInitRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthOnNotifyJson

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthOnNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthNotificationAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthNotificationAcknowledgementAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthOnNotifyJsonRequest();
    $request->authorization = 'corrupti';
    $request->patientAuthNotificationAcknowledgement = new PatientAuthNotificationAcknowledgement();
    $request->patientAuthNotificationAcknowledgement->acknowledgement = new PatientAuthNotificationAcknowledgementAcknowledgement();
    $request->patientAuthNotificationAcknowledgement->acknowledgement->status = PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum::OK;
    $request->patientAuthNotificationAcknowledgement->error = new Error();
    $request->patientAuthNotificationAcknowledgement->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->patientAuthNotificationAcknowledgement->error->message = 'facere';
    $request->patientAuthNotificationAcknowledgement->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthNotificationAcknowledgement->resp = new RequestReference();
    $request->patientAuthNotificationAcknowledgement->resp->requestId = 'c1ac600d-ec00-41ac-802e-2ec09ff8f0f8';
    $request->patientAuthNotificationAcknowledgement->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-15T01:59:03.683Z');
    $request->xCmId = 'earum';

    $response = $sdk->hipFacing->postV05UsersAuthOnNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthOnNotifyRaw

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthOnNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthOnNotifyRawRequest();
    $request->authorization = 'doloribus';
    $request->requestBody = 'velit';
    $request->xCmId = 'eius';

    $response = $sdk->hipFacing->postV05UsersAuthOnNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
