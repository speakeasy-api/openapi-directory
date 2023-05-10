# gateway

### Available Operations

* [getV05WellKnownOpenidConfiguration](#getv05wellknownopenidconfiguration) - Get openid configuration
* [getV05Certs](#getv05certs) - Get certs for JWT verification
* [postV05CareContextsOnDiscoverJson](#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [postV05CareContextsOnDiscoverRaw](#postv05carecontextsondiscoverraw) - Response to patient's account discovery request
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
* [postV05PatientsProfileOnShareJson](#postv05patientsprofileonsharejson) - Response to patient's share profile request
* [postV05PatientsProfileOnShareRaw](#postv05patientsprofileonshareraw) - Response to patient's share profile request
* [postV05PatientsSmsNotifyJson](#postv05patientssmsnotifyjson) - API for HIP to send SMS notifications to patients
* [postV05PatientsSmsNotifyRaw](#postv05patientssmsnotifyraw) - API for HIP to send SMS notifications to patients
* [postV05SessionsJson](#postv05sessionsjson) - Get access token
* [postV05SessionsRaw](#postv05sessionsraw) - Get access token
* [postV05UsersAuthConfirmJson](#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthConfirmRaw](#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthFetchModesJson](#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthFetchModesRaw](#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthInitJson](#postv05usersauthinitjson) - Initialize authentication from HIP
* [postV05UsersAuthInitRaw](#postv05usersauthinitraw) - Initialize authentication from HIP
* [postV05UsersAuthOnNotifyJson](#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [postV05UsersAuthOnNotifyRaw](#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

## getV05WellKnownOpenidConfiguration

Get openid configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->gateway->getV05WellKnownOpenidConfiguration();

    if ($response->openIdConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV05Certs

Get certs for JWT verification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->gateway->getV05Certs();

    if ($response->certs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05CareContextsOnDiscoverJson

Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be 
  1. **more than one definitive match for the given request** 
  2. **no verified identifer was specified**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05CareContextsOnDiscoverJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientDiscoveryResult;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientRepresentation;
use \OpenAPI\OpenAPI\Models\Shared\CareContextRepresentation;
use \OpenAPI\OpenAPI\Models\Shared\IdentifierTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05CareContextsOnDiscoverJsonRequest();
    $request->authorization = 'corrupti';
    $request->patientDiscoveryResult = new PatientDiscoveryResult();
    $request->patientDiscoveryResult->error = new Error();
    $request->patientDiscoveryResult->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->patientDiscoveryResult->error->message = 'distinctio';
    $request->patientDiscoveryResult->patient = new PatientRepresentation();
    $request->patientDiscoveryResult->patient->careContexts = [
        new CareContextRepresentation(),
        new CareContextRepresentation(),
        new CareContextRepresentation(),
        new CareContextRepresentation(),
    ];
    $request->patientDiscoveryResult->patient->display = 'unde';
    $request->patientDiscoveryResult->patient->matchedBy = [
        IdentifierTypeEnum::NDHM_HEALTH_NUMBER,
        IdentifierTypeEnum::HEALTH_ID,
        IdentifierTypeEnum::MR,
        IdentifierTypeEnum::NDHM_HEALTH_NUMBER,
    ];
    $request->patientDiscoveryResult->patient->referenceNumber = 'deserunt';
    $request->patientDiscoveryResult->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientDiscoveryResult->resp = new RequestReference();
    $request->patientDiscoveryResult->resp->requestId = '674e0f46-7cc8-4796-ad15-1a05dfc2ddf7';
    $request->patientDiscoveryResult->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-07T00:03:55.328Z');
    $request->patientDiscoveryResult->transactionId = '78ca1ba9-28fc-4816-b42c-b73920592939';
    $request->xCmId = 'laboriosam';

    $response = $sdk->gateway->postV05CareContextsOnDiscoverJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05CareContextsOnDiscoverRaw

Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be 
  1. **more than one definitive match for the given request** 
  2. **no verified identifer was specified**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05CareContextsOnDiscoverRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05CareContextsOnDiscoverRawRequest();
    $request->authorization = 'hic';
    $request->requestBody = 'saepe';
    $request->xCmId = 'fuga';

    $response = $sdk->gateway->postV05CareContextsOnDiscoverRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->authorization = 'in';
    $request->hipConsentNotificationResponse = new HIPConsentNotificationResponse();
    $request->hipConsentNotificationResponse->acknowledgement = new ConsentAcknowledgement();
    $request->hipConsentNotificationResponse->acknowledgement->consentId = '<consent-artefact-id>';
    $request->hipConsentNotificationResponse->acknowledgement->status = ConsentAcknowledgementStatusEnum::OK;
    $request->hipConsentNotificationResponse->error = new Error();
    $request->hipConsentNotificationResponse->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->hipConsentNotificationResponse->error->message = 'iure';
    $request->hipConsentNotificationResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hipConsentNotificationResponse->resp = new RequestReference();
    $request->hipConsentNotificationResponse->resp->requestId = 'eb10faaa-2352-4c59-9590-7aff1a3a2fa9';
    $request->hipConsentNotificationResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-02T18:07:51.623Z');
    $request->xCmId = 'quam';

    $response = $sdk->gateway->postV05ConsentsHipOnNotifyJson($request);

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
    $request->authorization = 'molestiae';
    $request->requestBody = 'velit';
    $request->xCmId = 'error';

    $response = $sdk->gateway->postV05ConsentsHipOnNotifyRaw($request);

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
    $request->authorization = 'quia';
    $request->hipHealthInformationRequestAcknowledgement = new HIPHealthInformationRequestAcknowledgement();
    $request->hipHealthInformationRequestAcknowledgement->error = new Error();
    $request->hipHealthInformationRequestAcknowledgement->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->hipHealthInformationRequestAcknowledgement->error->message = 'vitae';
    $request->hipHealthInformationRequestAcknowledgement->hiRequest = new HIPHealthInformationRequestAcknowledgementHiRequest();
    $request->hipHealthInformationRequestAcknowledgement->hiRequest->sessionStatus = HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum::ACKNOWLEDGED;
    $request->hipHealthInformationRequestAcknowledgement->hiRequest->transactionId = 'aa52c3f5-ad01-49da-9ffe-78f097b0074f';
    $request->hipHealthInformationRequestAcknowledgement->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hipHealthInformationRequestAcknowledgement->resp = new RequestReference();
    $request->hipHealthInformationRequestAcknowledgement->resp->requestId = '15471b5e-6e13-4b99-9488-e1e91e450ad2';
    $request->hipHealthInformationRequestAcknowledgement->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-27T01:56:50.693Z');
    $request->xCmId = 'quibusdam';

    $response = $sdk->gateway->postV05HealthInformationHipOnRequestJson($request);

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
    $request->authorization = 'labore';
    $request->requestBody = 'modi';
    $request->xCmId = 'qui';

    $response = $sdk->gateway->postV05HealthInformationHipOnRequestRaw($request);

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
    $request->authorization = 'aliquid';
    $request->healthInformationNotification = new HealthInformationNotification();
    $request->healthInformationNotification->notification = new HealthInformationNotificationNotification();
    $request->healthInformationNotification->notification->consentId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->healthInformationNotification->notification->doneAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-23T10:34:02.904Z');
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
    $request->healthInformationNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-30T06:52:02.282Z');
    $request->xCmId = 'fugit';

    $response = $sdk->gateway->postV05HealthInformationNotifyJson($request);

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
    $request->authorization = 'dolorum';
    $request->requestBody = 'excepturi';
    $request->xCmId = 'tempora';

    $response = $sdk->gateway->postV05HealthInformationNotifyRaw($request);

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
    $request->authorization = 'facilis';
    $request->patientCareContextLinkRequest = new PatientCareContextLinkRequest();
    $request->patientCareContextLinkRequest->link = new PatientCareContextLink();
    $request->patientCareContextLinkRequest->link->accessToken = 'tempore';
    $request->patientCareContextLinkRequest->link->patient = new PatientCareContextLinkPatient();
    $request->patientCareContextLinkRequest->link->patient->careContexts = [
        new CareContextRepresentation(),
        new CareContextRepresentation(),
    ];
    $request->patientCareContextLinkRequest->link->patient->display = 'delectus';
    $request->patientCareContextLinkRequest->link->patient->referenceNumber = 'TMH-PUID-001';
    $request->patientCareContextLinkRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientCareContextLinkRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-02T04:55:20.234Z');
    $request->xCmId = 'eligendi';

    $response = $sdk->gateway->postV05LinksLinkAddContextsJson($request);

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
    $request->authorization = 'sint';
    $request->requestBody = 'aliquid';
    $request->xCmId = 'provident';

    $response = $sdk->gateway->postV05LinksLinkAddContextsRaw($request);

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
    $request->authorization = 'necessitatibus';
    $request->patientLinkResult = new PatientLinkResult();
    $request->patientLinkResult->error = new Error();
    $request->patientLinkResult->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->patientLinkResult->error->message = 'officia';
    $request->patientLinkResult->patient = new PatientLinkResultPatient();
    $request->patientLinkResult->patient->careContexts = [
        new CareContextRepresentation(),
    ];
    $request->patientLinkResult->patient->display = 'debitis';
    $request->patientLinkResult->patient->referenceNumber = 'a';
    $request->patientLinkResult->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientLinkResult->resp = new RequestReference();
    $request->patientLinkResult->resp->requestId = 'a77dfb14-cd66-4ae3-95ef-b9ba88f3a669';
    $request->patientLinkResult->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-19T08:19:15.156Z');
    $request->xCmId = 'perferendis';

    $response = $sdk->gateway->postV05LinksLinkOnConfirmJson($request);

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
    $request->authorization = 'nihil';
    $request->requestBody = 'magnam';
    $request->xCmId = 'distinctio';

    $response = $sdk->gateway->postV05LinksLinkOnConfirmRaw($request);

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
    $request->authorization = 'id';
    $request->patientLinkReferenceResult = new PatientLinkReferenceResult();
    $request->patientLinkReferenceResult->error = new Error();
    $request->patientLinkReferenceResult->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientLinkReferenceResult->error->message = 'labore';
    $request->patientLinkReferenceResult->link = new PatientLinkReferenceResultLink();
    $request->patientLinkReferenceResult->link->authenticationType = PatientLinkReferenceResultLinkAuthenticationTypeEnum::DIRECT;
    $request->patientLinkReferenceResult->link->meta = new Meta();
    $request->patientLinkReferenceResult->link->meta->communicationExpiry = '2019-12-30T12:01:55Z';
    $request->patientLinkReferenceResult->link->meta->communicationHint = 'natus';
    $request->patientLinkReferenceResult->link->meta->communicationMedium = MetaCommunicationMediumEnum::EMAIL;
    $request->patientLinkReferenceResult->link->referenceNumber = 'eum';
    $request->patientLinkReferenceResult->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientLinkReferenceResult->resp = new RequestReference();
    $request->patientLinkReferenceResult->resp->requestId = 'e2141959-890a-4fa5-a3e2-516fe4c8b711';
    $request->patientLinkReferenceResult->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-11T05:14:57.773Z');
    $request->patientLinkReferenceResult->transactionId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->xCmId = 'expedita';

    $response = $sdk->gateway->postV05LinksLinkOnInitJson($request);

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
    $request->authorization = 'nihil';
    $request->requestBody = 'repellat';
    $request->xCmId = 'quibusdam';

    $response = $sdk->gateway->postV05LinksLinkOnInitRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsProfileOnShareJson

Result of patient share profile request at HIP end.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsProfileOnShareJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShareProfileResult;
use \OpenAPI\OpenAPI\Models\Shared\ShareProfileAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\ShareProfileAcknowledgementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsProfileOnShareJsonRequest();
    $request->authorization = 'sed';
    $request->shareProfileResult = new ShareProfileResult();
    $request->shareProfileResult->acknowledgement = new ShareProfileAcknowledgement();
    $request->shareProfileResult->acknowledgement->healthId = '<username>@<suffix>';
    $request->shareProfileResult->acknowledgement->status = ShareProfileAcknowledgementStatusEnum::FAILURE;
    $request->shareProfileResult->error = new Error();
    $request->shareProfileResult->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->shareProfileResult->error->message = 'accusantium';
    $request->shareProfileResult->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->shareProfileResult->resp = new RequestReference();
    $request->shareProfileResult->resp->requestId = '28921cdd-c692-4601-bb57-6b0d5f0d30c5';
    $request->shareProfileResult->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-23T15:50:52.666Z');
    $request->xCmId = 'nobis';

    $response = $sdk->gateway->postV05PatientsProfileOnShareJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsProfileOnShareRaw

Result of patient share profile request at HIP end.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsProfileOnShareRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsProfileOnShareRawRequest();
    $request->authorization = 'dolores';
    $request->requestBody = 'quis';
    $request->xCmId = 'totam';

    $response = $sdk->gateway->postV05PatientsProfileOnShareRaw($request);

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
    $request->authorization = 'dignissimos';
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
    $request->patientSMSNotifcationRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-30T06:29:24.707Z');
    $request->xCmId = 'nesciunt';

    $response = $sdk->gateway->postV05PatientsSmsNotifyJson($request);

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
    $request->authorization = 'eos';
    $request->requestBody = 'perferendis';
    $request->xCmId = 'dolores';

    $response = $sdk->gateway->postV05PatientsSmsNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SessionsJson

Get access token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SessionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SessionRequest();
    $request->clientId = 'minus';
    $request->clientSecret = 'quam';

    $response = $sdk->gateway->postV05SessionsJson($request);

    if ($response->sessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SessionsRaw

Get access token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'dolor'

    $response = $sdk->gateway->postV05SessionsRaw($request);

    if ($response->sessionResponse !== null) {
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
    $request->authorization = 'vero';
    $request->patientAuthConfirmRequest = new PatientAuthConfirmRequest();
    $request->patientAuthConfirmRequest->credential = new PatientAuthConfirmRequestCredential();
    $request->patientAuthConfirmRequest->credential->authCode = 'nostrum';
    $request->patientAuthConfirmRequest->credential->demographic = new PatientDemographic();
    $request->patientAuthConfirmRequest->credential->demographic->dateOfBirth = '1972-02-29';
    $request->patientAuthConfirmRequest->credential->demographic->gender = PatientGenderEnum::U;
    $request->patientAuthConfirmRequest->credential->demographic->identifier = new AuthConfirmIdentifier();
    $request->patientAuthConfirmRequest->credential->demographic->identifier->type = AuthConfirmIdentifierTypeEnum::MOBILE;
    $request->patientAuthConfirmRequest->credential->demographic->identifier->value = '+919800083232';
    $request->patientAuthConfirmRequest->credential->demographic->name = 'Janki Das';
    $request->patientAuthConfirmRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthConfirmRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-05T23:06:52.311Z');
    $request->patientAuthConfirmRequest->transactionId = 'facilis';
    $request->xCmId = 'perspiciatis';

    $response = $sdk->gateway->postV05UsersAuthConfirmJson($request);

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
    $request->authorization = 'voluptatem';
    $request->requestBody = 'porro';
    $request->xCmId = 'consequuntur';

    $response = $sdk->gateway->postV05UsersAuthConfirmRaw($request);

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
    $request->authorization = 'blanditiis';
    $request->patientAuthModeQueryRequest = new PatientAuthModeQueryRequest();
    $request->patientAuthModeQueryRequest->query = new PatientAuthModeQueryRequestQuery();
    $request->patientAuthModeQueryRequest->query->id = 'hinapatel79@ndhm';
    $request->patientAuthModeQueryRequest->query->purpose = PatientAuthPurposeEnum::KYC;
    $request->patientAuthModeQueryRequest->query->requester = new PatientAuthModeQueryRequestQueryRequester();
    $request->patientAuthModeQueryRequest->query->requester->id = '100005';
    $request->patientAuthModeQueryRequest->query->requester->type = PatientAuthModeQueryRequestQueryRequesterTypeEnum::HIP;
    $request->patientAuthModeQueryRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthModeQueryRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-08T15:48:05.748Z');
    $request->xCmId = 'adipisci';

    $response = $sdk->gateway->postV05UsersAuthFetchModesJson($request);

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
    $request->authorization = 'asperiores';
    $request->requestBody = 'earum';
    $request->xCmId = 'modi';

    $response = $sdk->gateway->postV05UsersAuthFetchModesRaw($request);

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
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthInitRequestQueryRequester;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthInitRequestQueryRequesterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthInitJsonRequest();
    $request->authorization = 'iste';
    $request->patientAuthInitRequest = new PatientAuthInitRequest();
    $request->patientAuthInitRequest->query = new PatientAuthInitRequestQuery();
    $request->patientAuthInitRequest->query->authMode = AuthenticationModeEnum::DEMOGRAPHICS;
    $request->patientAuthInitRequest->query->id = 'hinapatel@ndhm';
    $request->patientAuthInitRequest->query->purpose = PatientAuthPurposeEnum::KYC;
    $request->patientAuthInitRequest->query->requester = new PatientAuthInitRequestQueryRequester();
    $request->patientAuthInitRequest->query->requester->id = '100005';
    $request->patientAuthInitRequest->query->requester->type = PatientAuthInitRequestQueryRequesterTypeEnum::HIU;
    $request->patientAuthInitRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthInitRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-01T21:12:31.408Z');
    $request->xCmId = 'libero';

    $response = $sdk->gateway->postV05UsersAuthInitJson($request);

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
    $request->authorization = 'delectus';
    $request->requestBody = 'quaerat';
    $request->xCmId = 'quos';

    $response = $sdk->gateway->postV05UsersAuthInitRaw($request);

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
    $request->authorization = 'aliquid';
    $request->patientAuthNotificationAcknowledgement = new PatientAuthNotificationAcknowledgement();
    $request->patientAuthNotificationAcknowledgement->acknowledgement = new PatientAuthNotificationAcknowledgementAcknowledgement();
    $request->patientAuthNotificationAcknowledgement->acknowledgement->status = PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum::OK;
    $request->patientAuthNotificationAcknowledgement->error = new Error();
    $request->patientAuthNotificationAcknowledgement->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientAuthNotificationAcknowledgement->error->message = 'dolorem';
    $request->patientAuthNotificationAcknowledgement->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthNotificationAcknowledgement->resp = new RequestReference();
    $request->patientAuthNotificationAcknowledgement->resp->requestId = '323f9b77-f3a4-4100-a74e-bf69280d1ba7';
    $request->patientAuthNotificationAcknowledgement->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-28T20:45:55.086Z');
    $request->xCmId = 'deleniti';

    $response = $sdk->gateway->postV05UsersAuthOnNotifyJson($request);

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
    $request->authorization = 'omnis';
    $request->requestBody = 'necessitatibus';
    $request->xCmId = 'distinctio';

    $response = $sdk->gateway->postV05UsersAuthOnNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
