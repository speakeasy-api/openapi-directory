# gateway

### Available Operations

* [getV05WellKnownOpenidConfiguration](#getv05wellknownopenidconfiguration) - Get openid configuration
* [getV05Certs](#getv05certs) - Get certs for JWT verification
* [postV05ConsentRequestsInitJson](#postv05consentrequestsinitjson) - Create consent request
* [postV05ConsentRequestsInitRaw](#postv05consentrequestsinitraw) - Create consent request
* [postV05ConsentRequestsStatusJson](#postv05consentrequestsstatusjson) - Get consent request status
* [postV05ConsentRequestsStatusRaw](#postv05consentrequestsstatusraw) - Get consent request status
* [postV05ConsentsFetch](#postv05consentsfetch) - Get consent artefact
* [postV05ConsentsHiuOnNotify](#postv05consentshiuonnotify) - Consent notification
* [postV05HealthInformationCmRequestJson](#postv05healthinformationcmrequestjson) - Health information data request
* [postV05HealthInformationCmRequestRaw](#postv05healthinformationcmrequestraw) - Health information data request
* [postV05HealthInformationNotifyJson](#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [postV05HealthInformationNotifyRaw](#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [postV05PatientsFindJson](#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [postV05PatientsFindRaw](#postv05patientsfindraw) - Identify a patient by her consent-manager user-id
* [postV05SessionsJson](#postv05sessionsjson) - Get access token
* [postV05SessionsRaw](#postv05sessionsraw) - Get access token
* [postV05SubscriptionRequestsCmInitJson](#postv05subscriptionrequestscminitjson) - Request for subscription
* [postV05SubscriptionRequestsCmInitRaw](#postv05subscriptionrequestscminitraw) - Request for subscription
* [postV05SubscriptionRequestsHiuOnNotify](#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [postV05SubscriptionsHiuOnNotify](#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
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

## postV05ConsentRequestsInitJson

Creates a consent request to get data about a patient by HIU user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentRequestsInitJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsentRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsentRequestConsent;
use \OpenAPI\OpenAPI\Models\Shared\CareContextDefinition;
use \OpenAPI\OpenAPI\Models\Shared\HITypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConsentRequestConsentHip;
use \OpenAPI\OpenAPI\Models\Shared\ConsentRequestConsentHiu;
use \OpenAPI\OpenAPI\Models\Shared\ConsentRequestConsentPatient;
use \OpenAPI\OpenAPI\Models\Shared\Permission;
use \OpenAPI\OpenAPI\Models\Shared\PermissionAccessModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PermissionDateRange;
use \OpenAPI\OpenAPI\Models\Shared\PermissionFrequency;
use \OpenAPI\OpenAPI\Models\Shared\PermissionFrequencyUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsePurpose;
use \OpenAPI\OpenAPI\Models\Shared\Requester;
use \OpenAPI\OpenAPI\Models\Shared\RequesterIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentRequestsInitJsonRequest();
    $request->authorization = 'corrupti';
    $request->consentRequest = new ConsentRequest();
    $request->consentRequest->consent = new ConsentRequestConsent();
    $request->consentRequest->consent->careContexts = [
        new CareContextDefinition(),
        new CareContextDefinition(),
        new CareContextDefinition(),
    ];
    $request->consentRequest->consent->hiTypes = [
        HITypeEnumEnum::DIAGNOSTIC_REPORT,
        HITypeEnumEnum::DISCHARGE_SUMMARY,
        HITypeEnumEnum::DIAGNOSTIC_REPORT,
    ];
    $request->consentRequest->consent->hip = new ConsentRequestConsentHip();
    $request->consentRequest->consent->hip->id = '8d69a674-e0f4-467c-8879-6ed151a05dfc';
    $request->consentRequest->consent->hiu = new ConsentRequestConsentHiu();
    $request->consentRequest->consent->hiu->id = '2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392';
    $request->consentRequest->consent->patient = new ConsentRequestConsentPatient();
    $request->consentRequest->consent->patient->id = 'hinapatel@ndhm';
    $request->consentRequest->consent->permission = new Permission();
    $request->consentRequest->consent->permission->accessMode = PermissionAccessModeEnum::VIEW;
    $request->consentRequest->consent->permission->dataEraseAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T13:30:46.463Z');
    $request->consentRequest->consent->permission->dateRange = new PermissionDateRange();
    $request->consentRequest->consent->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-22T14:02:28.908Z');
    $request->consentRequest->consent->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T19:39:29.035Z');
    $request->consentRequest->consent->permission->frequency = new PermissionFrequency();
    $request->consentRequest->consent->permission->frequency->repeats = 386489;
    $request->consentRequest->consent->permission->frequency->unit = PermissionFrequencyUnitEnum::YEAR;
    $request->consentRequest->consent->permission->frequency->value = 902599;
    $request->consentRequest->consent->purpose = new UsePurpose();
    $request->consentRequest->consent->purpose->code = 'fuga';
    $request->consentRequest->consent->purpose->refUri = 'http://grown-opposite.info';
    $request->consentRequest->consent->purpose->text = 'saepe';
    $request->consentRequest->consent->requester = new Requester();
    $request->consentRequest->consent->requester->identifier = new RequesterIdentifier();
    $request->consentRequest->consent->requester->identifier->system = 'https://www.mciindia.org';
    $request->consentRequest->consent->requester->identifier->type = 'REGNO';
    $request->consentRequest->consent->requester->identifier->value = 'MH1001';
    $request->consentRequest->consent->requester->name = 'Dr. Manju';
    $request->consentRequest->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->consentRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-20T12:36:28.767Z');
    $request->xCmId = 'ipsa';

    $response = $sdk->gateway->postV05ConsentRequestsInitJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentRequestsInitRaw

Creates a consent request to get data about a patient by HIU user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentRequestsInitRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentRequestsInitRawRequest();
    $request->authorization = 'reiciendis';
    $request->requestBody = 'est';
    $request->xCmId = 'mollitia';

    $response = $sdk->gateway->postV05ConsentRequestsInitRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentRequestsStatusJson

Get status of consent request done previously

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentRequestsStatusJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsentRequestStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentRequestsStatusJsonRequest();
    $request->authorization = 'laborum';
    $request->consentRequestStatusRequest = new ConsentRequestStatusRequest();
    $request->consentRequestStatusRequest->consentRequestId = 'dolores';
    $request->consentRequestStatusRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->consentRequestStatusRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-23T06:35:12.519Z');
    $request->xCmId = 'explicabo';

    $response = $sdk->gateway->postV05ConsentRequestsStatusJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentRequestsStatusRaw

Get status of consent request done previously

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentRequestsStatusRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentRequestsStatusRawRequest();
    $request->authorization = 'nobis';
    $request->requestBody = 'enim';
    $request->xCmId = 'omnis';

    $response = $sdk->gateway->postV05ConsentRequestsStatusRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsFetch

Get consent artefact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentsFetchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsentFetchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentsFetchRequest();
    $request->authorization = 'nemo';
    $request->consentFetchRequest = new ConsentFetchRequest();
    $request->consentFetchRequest->consentId = 'minima';
    $request->consentFetchRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->consentFetchRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-03T22:47:10.600Z');
    $request->xCmId = 'iure';

    $response = $sdk->gateway->postV05ConsentsFetch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsHiuOnNotify

This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentsHiuOnNotifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUConsentNotificationResponse;
use \OpenAPI\OpenAPI\Models\Shared\ConsentAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\ConsentAcknowledgementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentsHiuOnNotifyRequest();
    $request->authorization = 'culpa';
    $request->hiuConsentNotificationResponse = new HIUConsentNotificationResponse();
    $request->hiuConsentNotificationResponse->acknowledgement = [
        new ConsentAcknowledgement(),
        new ConsentAcknowledgement(),
        new ConsentAcknowledgement(),
        new ConsentAcknowledgement(),
    ];
    $request->hiuConsentNotificationResponse->error = new Error();
    $request->hiuConsentNotificationResponse->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->hiuConsentNotificationResponse->error->message = 'architecto';
    $request->hiuConsentNotificationResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuConsentNotificationResponse->resp = new RequestReference();
    $request->hiuConsentNotificationResponse->resp->requestId = 'a3a2fa94-6773-4925-9aa5-2c3f5ad019da';
    $request->hiuConsentNotificationResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-11T05:45:42.485Z');
    $request->xCmId = 'voluptatibus';

    $response = $sdk->gateway->postV05ConsentsHiuOnNotify($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationCmRequestJson

Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationCmRequestJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIRequestHIRequest;
use \OpenAPI\OpenAPI\Models\Shared\Consent;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\KeyMaterial;
use \OpenAPI\OpenAPI\Models\Shared\KeyObject;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationCmRequestJsonRequest();
    $request->authorization = 'vero';
    $request->hiRequest = new HIRequest();
    $request->hiRequest->hiRequest = new HIRequestHIRequest();
    $request->hiRequest->hiRequest->consent = new Consent();
    $request->hiRequest->hiRequest->consent->id = '78f097b0-074f-4154-b1b5-e6e13b99d488';
    $request->hiRequest->hiRequest->dataPushUrl = 'voluptates';
    $request->hiRequest->hiRequest->dateRange = new DateRange();
    $request->hiRequest->hiRequest->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-29T18:39:33.469Z');
    $request->hiRequest->hiRequest->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-01T07:52:08.326Z');
    $request->hiRequest->hiRequest->keyMaterial = new KeyMaterial();
    $request->hiRequest->hiRequest->keyMaterial->cryptoAlg = 'ECDH';
    $request->hiRequest->hiRequest->keyMaterial->curve = 'Curve25519';
    $request->hiRequest->hiRequest->keyMaterial->dhPublicKey = new KeyObject();
    $request->hiRequest->hiRequest->keyMaterial->dhPublicKey->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-02T21:33:21.372Z');
    $request->hiRequest->hiRequest->keyMaterial->dhPublicKey->keyValue = 'enim';
    $request->hiRequest->hiRequest->keyMaterial->dhPublicKey->parameters = 'Curve25519/32byte random key';
    $request->hiRequest->hiRequest->keyMaterial->nonce = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    $request->hiRequest->requestId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->hiRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-02T09:29:06.042Z');
    $request->xCmId = 'quibusdam';

    $response = $sdk->gateway->postV05HealthInformationCmRequestJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationCmRequestRaw

Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationCmRequestRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationCmRequestRawRequest();
    $request->authorization = 'explicabo';
    $request->requestBody = 'deserunt';
    $request->xCmId = 'distinctio';

    $response = $sdk->gateway->postV05HealthInformationCmRequestRaw($request);

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
    $request->authorization = 'quibusdam';
    $request->healthInformationNotification = new HealthInformationNotification();
    $request->healthInformationNotification->notification = new HealthInformationNotificationNotification();
    $request->healthInformationNotification->notification->consentId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->healthInformationNotification->notification->doneAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-26T08:57:48.803Z');
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
    ];
    $request->healthInformationNotification->notification->transactionId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->healthInformationNotification->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->healthInformationNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T07:42:55.593Z');
    $request->xCmId = 'magni';

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
    $request->authorization = 'assumenda';
    $request->requestBody = 'ipsam';
    $request->xCmId = 'alias';

    $response = $sdk->gateway->postV05HealthInformationNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsFindJson

This API is meant for identify to patient given her consent-manager-user-id


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsFindJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentificationRequestQuery;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentificationRequestQueryPatient;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentificationRequestQueryRequester;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentificationRequestQueryRequesterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsFindJsonRequest();
    $request->authorization = 'fugit';
    $request->patientIdentificationRequest = new PatientIdentificationRequest();
    $request->patientIdentificationRequest->query = new PatientIdentificationRequestQuery();
    $request->patientIdentificationRequest->query->patient = new PatientIdentificationRequestQueryPatient();
    $request->patientIdentificationRequest->query->patient->id = 'hinapatel79@ndhm';
    $request->patientIdentificationRequest->query->requester = new PatientIdentificationRequestQueryRequester();
    $request->patientIdentificationRequest->query->requester->id = '100005';
    $request->patientIdentificationRequest->query->requester->type = PatientIdentificationRequestQueryRequesterTypeEnum::HIP;
    $request->patientIdentificationRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientIdentificationRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-17T21:27:36.672Z');
    $request->xCmId = 'facilis';

    $response = $sdk->gateway->postV05PatientsFindJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsFindRaw

This API is meant for identify to patient given her consent-manager-user-id


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsFindRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsFindRawRequest();
    $request->authorization = 'tempore';
    $request->requestBody = 'labore';
    $request->xCmId = 'delectus';

    $response = $sdk->gateway->postV05PatientsFindRaw($request);

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
    $request->clientId = 'eum';
    $request->clientSecret = 'non';

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
'eligendi'

    $response = $sdk->gateway->postV05SessionsRaw($request);

    if ($response->sessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionRequestsCmInitJson

creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionRequestsCmInitJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionRequestSubscription;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationRepresentation;
use \OpenAPI\OpenAPI\Models\Shared\ConsentManagerPatientID;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPeriod;
use \OpenAPI\OpenAPI\Models\Shared\UsePurpose;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionRequestsCmInitJsonRequest();
    $request->authorization = 'sint';
    $request->subscriptionRequest = new SubscriptionRequest();
    $request->subscriptionRequest->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->subscriptionRequest->subscription = new SubscriptionRequestSubscription();
    $request->subscriptionRequest->subscription->categories = [
        SubscriptionCategoryEnum::LINK,
        SubscriptionCategoryEnum::LINK,
    ];
    $request->subscriptionRequest->subscription->hips = [
        new OrganizationRepresentation(),
        new OrganizationRepresentation(),
        new OrganizationRepresentation(),
    ];
    $request->subscriptionRequest->subscription->hiu = new OrganizationRepresentation();
    $request->subscriptionRequest->subscription->hiu->id = 'e9a3efa7-7dfb-414c-966a-e395efb9ba88';
    $request->subscriptionRequest->subscription->patient = new ConsentManagerPatientID();
    $request->subscriptionRequest->subscription->patient->id = 'hinapatel@ndhm';
    $request->subscriptionRequest->subscription->period = new SubscriptionPeriod();
    $request->subscriptionRequest->subscription->period->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-23T13:35:30.978Z');
    $request->subscriptionRequest->subscription->period->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-18T17:53:23.400Z');
    $request->subscriptionRequest->subscription->purpose = new UsePurpose();
    $request->subscriptionRequest->subscription->purpose->code = 'vel';
    $request->subscriptionRequest->subscription->purpose->refUri = 'https://overjoyed-irony.com';
    $request->subscriptionRequest->subscription->purpose->text = 'nihil';
    $request->subscriptionRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-14T15:11:13.227Z');
    $request->xCmId = 'id';

    $response = $sdk->gateway->postV05SubscriptionRequestsCmInitJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionRequestsCmInitRaw

creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionRequestsCmInitRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionRequestsCmInitRawRequest();
    $request->authorization = 'labore';
    $request->requestBody = 'labore';
    $request->xCmId = 'suscipit';

    $response = $sdk->gateway->postV05SubscriptionRequestsCmInitRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionRequestsHiuOnNotify

This API is called by HIU as acknowledgement to subscription request relevant notifications. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionRequestsHiuOnNotifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionRequestNotificationAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionRequestsHiuOnNotifyRequest();
    $request->authorization = 'natus';
    $request->hiuSubscriptionRequestNotificationAcknowledgement = new HIUSubscriptionRequestNotificationAcknowledgement();
    $request->hiuSubscriptionRequestNotificationAcknowledgement->acknowledgement = new HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement();
    $request->hiuSubscriptionRequestNotificationAcknowledgement->acknowledgement->status = HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum::OK;
    $request->hiuSubscriptionRequestNotificationAcknowledgement->acknowledgement->subscriptionRequestId = 'subscription Id';
    $request->hiuSubscriptionRequestNotificationAcknowledgement->error = new Error();
    $request->hiuSubscriptionRequestNotificationAcknowledgement->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->hiuSubscriptionRequestNotificationAcknowledgement->error->message = 'eum';
    $request->hiuSubscriptionRequestNotificationAcknowledgement->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuSubscriptionRequestNotificationAcknowledgement->resp = new RequestReference();
    $request->hiuSubscriptionRequestNotificationAcknowledgement->resp->requestId = 'e2141959-890a-4fa5-a3e2-516fe4c8b711';
    $request->hiuSubscriptionRequestNotificationAcknowledgement->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-11T05:14:57.773Z');
    $request->xCmId = 'expedita';

    $response = $sdk->gateway->postV05SubscriptionRequestsHiuOnNotify($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionsHiuOnNotify

This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionsHiuOnNotifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionNotificationAcknowledgment;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionNotificationAcknowledgmentAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionsHiuOnNotifyRequest();
    $request->authorization = 'nihil';
    $request->hiuSubscriptionNotificationAcknowledgment = new HIUSubscriptionNotificationAcknowledgment();
    $request->hiuSubscriptionNotificationAcknowledgment->acknowledgement = new HIUSubscriptionNotificationAcknowledgmentAcknowledgement();
    $request->hiuSubscriptionNotificationAcknowledgment->acknowledgement->eventId = 'subscription event Id';
    $request->hiuSubscriptionNotificationAcknowledgment->acknowledgement->status = HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum::OK;
    $request->hiuSubscriptionNotificationAcknowledgment->error = new Error();
    $request->hiuSubscriptionNotificationAcknowledgment->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->hiuSubscriptionNotificationAcknowledgment->error->message = 'quibusdam';
    $request->hiuSubscriptionNotificationAcknowledgment->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuSubscriptionNotificationAcknowledgment->resp = new RequestReference();
    $request->hiuSubscriptionNotificationAcknowledgment->resp->requestId = '2ed02892-1cdd-4c69-a601-fb576b0d5f0d';
    $request->hiuSubscriptionNotificationAcknowledgment->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-27T17:23:03.738Z');
    $request->xCmId = 'cumque';

    $response = $sdk->gateway->postV05SubscriptionsHiuOnNotify($request);

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
    $request->authorization = 'corporis';
    $request->patientAuthConfirmRequest = new PatientAuthConfirmRequest();
    $request->patientAuthConfirmRequest->credential = new PatientAuthConfirmRequestCredential();
    $request->patientAuthConfirmRequest->credential->authCode = 'hic';
    $request->patientAuthConfirmRequest->credential->demographic = new PatientDemographic();
    $request->patientAuthConfirmRequest->credential->demographic->dateOfBirth = '1972-02-29';
    $request->patientAuthConfirmRequest->credential->demographic->gender = PatientGenderEnum::O;
    $request->patientAuthConfirmRequest->credential->demographic->identifier = new AuthConfirmIdentifier();
    $request->patientAuthConfirmRequest->credential->demographic->identifier->type = AuthConfirmIdentifierTypeEnum::MOBILE;
    $request->patientAuthConfirmRequest->credential->demographic->identifier->value = '+919800083232';
    $request->patientAuthConfirmRequest->credential->demographic->name = 'janki das';
    $request->patientAuthConfirmRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthConfirmRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-28T17:02:52.151Z');
    $request->patientAuthConfirmRequest->transactionId = 'quis';
    $request->xCmId = 'totam';

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
    $request->authorization = 'dignissimos';
    $request->requestBody = 'eaque';
    $request->xCmId = 'quis';

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
    $request->authorization = 'nesciunt';
    $request->patientAuthModeQueryRequest = new PatientAuthModeQueryRequest();
    $request->patientAuthModeQueryRequest->query = new PatientAuthModeQueryRequestQuery();
    $request->patientAuthModeQueryRequest->query->id = 'hinapatel79@ndhm';
    $request->patientAuthModeQueryRequest->query->purpose = PatientAuthPurposeEnum::LINK;
    $request->patientAuthModeQueryRequest->query->requester = new PatientAuthModeQueryRequestQueryRequester();
    $request->patientAuthModeQueryRequest->query->requester->id = '100005';
    $request->patientAuthModeQueryRequest->query->requester->type = PatientAuthModeQueryRequestQueryRequesterTypeEnum::HIP;
    $request->patientAuthModeQueryRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthModeQueryRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-17T07:12:29.048Z');
    $request->xCmId = 'quam';

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
    $request->authorization = 'dolor';
    $request->requestBody = 'vero';
    $request->xCmId = 'nostrum';

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
  1. **NOTE**, only **KYC** purpose is applicable for HIU. Hence HIU should only sent KYC in **query.authMode** in the request


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
    $request->authorization = 'hic';
    $request->patientAuthInitRequest = new PatientAuthInitRequest();
    $request->patientAuthInitRequest->query = new PatientAuthInitRequestQuery();
    $request->patientAuthInitRequest->query->authMode = AuthenticationModeEnum::AADHAAR_OTP;
    $request->patientAuthInitRequest->query->id = 'hinapatel@ndhm';
    $request->patientAuthInitRequest->query->purpose = PatientAuthPurposeEnum::KYC;
    $request->patientAuthInitRequest->query->requester = new PatientAuthInitRequestQueryRequester();
    $request->patientAuthInitRequest->query->requester->id = '100005';
    $request->patientAuthInitRequest->query->requester->type = PatientAuthInitRequestQueryRequesterTypeEnum::HIU;
    $request->patientAuthInitRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthInitRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-08T18:10:54.422Z');
    $request->xCmId = 'porro';

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
  1. **NOTE**, only **KYC** purpose is applicable for HIU. Hence HIU should only sent KYC in **query.authMode** in the request


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
    $request->authorization = 'consequuntur';
    $request->requestBody = 'blanditiis';
    $request->xCmId = 'error';

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
    $request->authorization = 'eaque';
    $request->patientAuthNotificationAcknowledgement = new PatientAuthNotificationAcknowledgement();
    $request->patientAuthNotificationAcknowledgement->acknowledgement = new PatientAuthNotificationAcknowledgementAcknowledgement();
    $request->patientAuthNotificationAcknowledgement->acknowledgement->status = PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum::OK;
    $request->patientAuthNotificationAcknowledgement->error = new Error();
    $request->patientAuthNotificationAcknowledgement->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->patientAuthNotificationAcknowledgement->error->message = 'rerum';
    $request->patientAuthNotificationAcknowledgement->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthNotificationAcknowledgement->resp = new RequestReference();
    $request->patientAuthNotificationAcknowledgement->resp->requestId = '3fe49a8d-9cbf-4486-b332-3f9b77f3a410';
    $request->patientAuthNotificationAcknowledgement->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-26T10:30:36.625Z');
    $request->xCmId = 'odio';

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
    $request->authorization = 'quaerat';
    $request->requestBody = 'accusamus';
    $request->xCmId = 'quidem';

    $response = $sdk->gateway->postV05UsersAuthOnNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
