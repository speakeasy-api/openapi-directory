# userAuth

### Available Operations

* [postV05UsersAuthConfirmJson](#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthConfirmRaw](#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthFetchModesJson](#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthFetchModesRaw](#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthInitJson](#postv05usersauthinitjson) - Initialize authentication from HIP
* [postV05UsersAuthInitRaw](#postv05usersauthinitraw) - Initialize authentication from HIP
* [postV05UsersAuthNotifyJson](#postv05usersauthnotifyjson) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthNotifyRaw](#postv05usersauthnotifyraw) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthOnConfirmJson](#postv05usersauthonconfirmjson) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnConfirmRaw](#postv05usersauthonconfirmraw) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnFetchModesJson](#postv05usersauthonfetchmodesjson) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnFetchModesRaw](#postv05usersauthonfetchmodesraw) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnInitJson](#postv05usersauthoninitjson) - Response to user authentication initialization from HIP
* [postV05UsersAuthOnInitRaw](#postv05usersauthoninitraw) - Response to user authentication initialization from HIP
* [postV05UsersAuthOnNotifyJson](#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [postV05UsersAuthOnNotifyRaw](#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

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
    $request->authorization = 'eos';
    $request->patientAuthConfirmRequest = new PatientAuthConfirmRequest();
    $request->patientAuthConfirmRequest->credential = new PatientAuthConfirmRequestCredential();
    $request->patientAuthConfirmRequest->credential->authCode = 'natus';
    $request->patientAuthConfirmRequest->credential->demographic = new PatientDemographic();
    $request->patientAuthConfirmRequest->credential->demographic->dateOfBirth = '1972-02-29';
    $request->patientAuthConfirmRequest->credential->demographic->gender = PatientGenderEnum::M;
    $request->patientAuthConfirmRequest->credential->demographic->identifier = new AuthConfirmIdentifier();
    $request->patientAuthConfirmRequest->credential->demographic->identifier->type = AuthConfirmIdentifierTypeEnum::MOBILE;
    $request->patientAuthConfirmRequest->credential->demographic->identifier->value = '+919800083232';
    $request->patientAuthConfirmRequest->credential->demographic->name = 'janki das';
    $request->patientAuthConfirmRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthConfirmRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-27T23:38:24.460Z');
    $request->patientAuthConfirmRequest->transactionId = 'facilis';
    $request->xCmId = 'laudantium';

    $response = $sdk->userAuth->postV05UsersAuthConfirmJson($request);

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
    $request->authorization = 'ullam';
    $request->requestBody = 'aut';
    $request->xCmId = 'quia';

    $response = $sdk->userAuth->postV05UsersAuthConfirmRaw($request);

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
    $request->authorization = 'officia';
    $request->patientAuthModeQueryRequest = new PatientAuthModeQueryRequest();
    $request->patientAuthModeQueryRequest->query = new PatientAuthModeQueryRequestQuery();
    $request->patientAuthModeQueryRequest->query->id = 'hinapatel79@ndhm';
    $request->patientAuthModeQueryRequest->query->purpose = PatientAuthPurposeEnum::LINK;
    $request->patientAuthModeQueryRequest->query->requester = new PatientAuthModeQueryRequestQueryRequester();
    $request->patientAuthModeQueryRequest->query->requester->id = '100005';
    $request->patientAuthModeQueryRequest->query->requester->type = PatientAuthModeQueryRequestQueryRequesterTypeEnum::HIP;
    $request->patientAuthModeQueryRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthModeQueryRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-22T23:14:33.263Z');
    $request->xCmId = 'sapiente';

    $response = $sdk->userAuth->postV05UsersAuthFetchModesJson($request);

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
    $request->authorization = 'esse';
    $request->requestBody = 'neque';
    $request->xCmId = 'quidem';

    $response = $sdk->userAuth->postV05UsersAuthFetchModesRaw($request);

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
    $request->authorization = 'quisquam';
    $request->patientAuthInitRequest = new PatientAuthInitRequest();
    $request->patientAuthInitRequest->query = new PatientAuthInitRequestQuery();
    $request->patientAuthInitRequest->query->authMode = AuthenticationModeEnum::DEMOGRAPHICS;
    $request->patientAuthInitRequest->query->id = 'hinapatel@ndhm';
    $request->patientAuthInitRequest->query->purpose = PatientAuthPurposeEnum::LINK;
    $request->patientAuthInitRequest->query->requester = new PatientAuthRequester();
    $request->patientAuthInitRequest->query->requester->id = '100005';
    $request->patientAuthInitRequest->query->requester->type = PatientAuthRequesterTypeEnum::HIP;
    $request->patientAuthInitRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthInitRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-30T20:03:45.488Z');
    $request->xCmId = 'magni';

    $response = $sdk->userAuth->postV05UsersAuthInitJson($request);

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
    $request->authorization = 'voluptatem';
    $request->requestBody = 'est';
    $request->xCmId = 'amet';

    $response = $sdk->userAuth->postV05UsersAuthInitRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthNotifyJson

This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
  3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthNotification;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthNotificationAuth;
use \OpenAPI\OpenAPI\Models\Shared\PatientDemographicResponse;
use \OpenAPI\OpenAPI\Models\Shared\PatientAddress;
use \OpenAPI\OpenAPI\Models\Shared\PatientGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\Identifier;
use \OpenAPI\OpenAPI\Models\Shared\IdentifierTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthNotificationAuthStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessTokenValidity;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthRequester;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthRequesterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthNotifyJsonRequest();
    $request->authorization = 'veritatis';
    $request->patientAuthNotification = new PatientAuthNotification();
    $request->patientAuthNotification->auth = new PatientAuthNotificationAuth();
    $request->patientAuthNotification->auth->accessToken = 'error';
    $request->patientAuthNotification->auth->patient = new PatientDemographicResponse();
    $request->patientAuthNotification->auth->patient->address = new PatientAddress();
    $request->patientAuthNotification->auth->patient->address->district = 'voluptatibus';
    $request->patientAuthNotification->auth->patient->address->line = 'numquam';
    $request->patientAuthNotification->auth->patient->address->pincode = 'rerum';
    $request->patientAuthNotification->auth->patient->address->state = 'dolorum';
    $request->patientAuthNotification->auth->patient->gender = PatientGenderEnum::U;
    $request->patientAuthNotification->auth->patient->id = '<patient-id>@<consent-manager-id>';
    $request->patientAuthNotification->auth->patient->identifiers = [
        new Identifier(),
        new Identifier(),
        new Identifier(),
        new Identifier(),
    ];
    $request->patientAuthNotification->auth->patient->name = 'Hina Patel';
    $request->patientAuthNotification->auth->patient->yearOfBirth = 2000;
    $request->patientAuthNotification->auth->status = PatientAuthNotificationAuthStatusEnum::DENIED;
    $request->patientAuthNotification->auth->transactionId = 'numquam';
    $request->patientAuthNotification->auth->validity = new AccessTokenValidity();
    $request->patientAuthNotification->auth->validity->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-24T13:13:29.419Z');
    $request->patientAuthNotification->auth->validity->limit = 1;
    $request->patientAuthNotification->auth->validity->purpose = PatientAuthPurposeEnum::KYC;
    $request->patientAuthNotification->auth->validity->requester = new PatientAuthRequester();
    $request->patientAuthNotification->auth->validity->requester->id = '100005';
    $request->patientAuthNotification->auth->validity->requester->type = PatientAuthRequesterTypeEnum::HIU;
    $request->patientAuthNotification->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-15T07:15:52.266Z');
    $request->xHipId = 'nihil';
    $request->xHiuId = 'facilis';

    $response = $sdk->userAuth->postV05UsersAuthNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthNotifyRaw

This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
  3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthNotifyRawRequest();
    $request->authorization = 'optio';
    $request->requestBody = 'incidunt';
    $request->xHipId = 'eos';
    $request->xHiuId = 'magnam';

    $response = $sdk->userAuth->postV05UsersAuthNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthOnConfirmJson

This API is called by CM to confirm authentication of users.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.     


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthOnConfirmJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthConfirmResponse;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthConfirmResponseAuth;
use \OpenAPI\OpenAPI\Models\Shared\PatientDemographicResponse;
use \OpenAPI\OpenAPI\Models\Shared\PatientAddress;
use \OpenAPI\OpenAPI\Models\Shared\PatientGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\Identifier;
use \OpenAPI\OpenAPI\Models\Shared\IdentifierTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessTokenValidity;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthRequester;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthRequesterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthOnConfirmJsonRequest();
    $request->authorization = 'dolores';
    $request->patientAuthConfirmResponse = new PatientAuthConfirmResponse();
    $request->patientAuthConfirmResponse->auth = new PatientAuthConfirmResponseAuth();
    $request->patientAuthConfirmResponse->auth->accessToken = 'aliquid';
    $request->patientAuthConfirmResponse->auth->patient = new PatientDemographicResponse();
    $request->patientAuthConfirmResponse->auth->patient->address = new PatientAddress();
    $request->patientAuthConfirmResponse->auth->patient->address->district = 'eum';
    $request->patientAuthConfirmResponse->auth->patient->address->line = 'vel';
    $request->patientAuthConfirmResponse->auth->patient->address->pincode = 'ad';
    $request->patientAuthConfirmResponse->auth->patient->address->state = 'quos';
    $request->patientAuthConfirmResponse->auth->patient->gender = PatientGenderEnum::M;
    $request->patientAuthConfirmResponse->auth->patient->id = '<patient-id>@<consent-manager-id>';
    $request->patientAuthConfirmResponse->auth->patient->identifiers = [
        new Identifier(),
        new Identifier(),
    ];
    $request->patientAuthConfirmResponse->auth->patient->name = 'Hina Patel';
    $request->patientAuthConfirmResponse->auth->patient->yearOfBirth = 2000;
    $request->patientAuthConfirmResponse->auth->validity = new AccessTokenValidity();
    $request->patientAuthConfirmResponse->auth->validity->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-08T05:53:12.101Z');
    $request->patientAuthConfirmResponse->auth->validity->limit = 1;
    $request->patientAuthConfirmResponse->auth->validity->purpose = PatientAuthPurposeEnum::KYC_AND_LINK;
    $request->patientAuthConfirmResponse->auth->validity->requester = new PatientAuthRequester();
    $request->patientAuthConfirmResponse->auth->validity->requester->id = '100005';
    $request->patientAuthConfirmResponse->auth->validity->requester->type = PatientAuthRequesterTypeEnum::HIU;
    $request->patientAuthConfirmResponse->error = new Error();
    $request->patientAuthConfirmResponse->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->patientAuthConfirmResponse->error->message = 'voluptates';
    $request->patientAuthConfirmResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthConfirmResponse->resp = new RequestReference();
    $request->patientAuthConfirmResponse->resp->requestId = 'f51fcb4c-593e-4c12-8daa-d0ec7afedbd8';
    $request->patientAuthConfirmResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-01T15:50:48.097Z');
    $request->xHipId = 'tenetur';
    $request->xHiuId = 'incidunt';

    $response = $sdk->userAuth->postV05UsersAuthOnConfirmJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthOnConfirmRaw

This API is called by CM to confirm authentication of users.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.     


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthOnConfirmRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthOnConfirmRawRequest();
    $request->authorization = 'numquam';
    $request->requestBody = 'corrupti';
    $request->xHipId = 'similique';
    $request->xHiuId = 'dolore';

    $response = $sdk->userAuth->postV05UsersAuthOnConfirmRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthOnFetchModesJson

If a patient is found then **auth** attribute contains the supported modes for the specified purpose. 
Otherwise, error is raised for invalid requests or for non-existent id.
Note in addition to the "Authorization" header, one of the following headers must be specified
1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthOnFetchModesJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthModeQueryResponse;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthModeQueryResponseAuth;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthOnFetchModesJsonRequest();
    $request->authorization = 'esse';
    $request->patientAuthModeQueryResponse = new PatientAuthModeQueryResponse();
    $request->patientAuthModeQueryResponse->auth = new PatientAuthModeQueryResponseAuth();
    $request->patientAuthModeQueryResponse->auth->modes = [
        AuthenticationModeEnum::DEMOGRAPHICS,
        AuthenticationModeEnum::MOBILE_OTP,
        AuthenticationModeEnum::DEMOGRAPHICS,
        AuthenticationModeEnum::MOBILE_OTP,
    ];
    $request->patientAuthModeQueryResponse->auth->purpose = PatientAuthPurposeEnum::KYC_AND_LINK;
    $request->patientAuthModeQueryResponse->error = new Error();
    $request->patientAuthModeQueryResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientAuthModeQueryResponse->error->message = 'quos';
    $request->patientAuthModeQueryResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthModeQueryResponse->resp = new RequestReference();
    $request->patientAuthModeQueryResponse->resp->requestId = '880983da-bf9e-4f3f-bdd9-f7f079af4d35';
    $request->patientAuthModeQueryResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-06T12:04:04.163Z');
    $request->xHipId = 'non';
    $request->xHiuId = 'porro';

    $response = $sdk->userAuth->postV05UsersAuthOnFetchModesJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthOnFetchModesRaw

If a patient is found then **auth** attribute contains the supported modes for the specified purpose. 
Otherwise, error is raised for invalid requests or for non-existent id.
Note in addition to the "Authorization" header, one of the following headers must be specified
1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthOnFetchModesRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthOnFetchModesRawRequest();
    $request->authorization = 'fugiat';
    $request->requestBody = 'soluta';
    $request->xHipId = 'ipsa';
    $request->xHiuId = 'reiciendis';

    $response = $sdk->userAuth->postV05UsersAuthOnFetchModesRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthOnInitJson

If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API. 

  1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values 
      1. MOBILE_OTP - auth via OTP to registered mobile. Mediated. 
      2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated. 
      3. DEMOGRAPHICS - auth initiated with demographic verification
      4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
  2. **meta.expiry** conveys the expiry time of the token and the authentication session
  3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both. 




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. Patient id is invalid


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthOnInitJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthInitResponse;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthInitResponseAuth;
use \OpenAPI\OpenAPI\Models\Shared\AuthMeta;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthOnInitJsonRequest();
    $request->authorization = 'labore';
    $request->patientAuthInitResponse = new PatientAuthInitResponse();
    $request->patientAuthInitResponse->auth = new PatientAuthInitResponseAuth();
    $request->patientAuthInitResponse->auth->meta = new AuthMeta();
    $request->patientAuthInitResponse->auth->meta->expiry = '2019-12-30T12:01:55Z';
    $request->patientAuthInitResponse->auth->meta->hint = 'vero';
    $request->patientAuthInitResponse->auth->mode = AuthenticationModeEnum::MOBILE_OTP;
    $request->patientAuthInitResponse->auth->transactionId = 'quas';
    $request->patientAuthInitResponse->error = new Error();
    $request->patientAuthInitResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientAuthInitResponse->error->message = 'architecto';
    $request->patientAuthInitResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthInitResponse->resp = new RequestReference();
    $request->patientAuthInitResponse->resp->requestId = '87d56844-eded-485a-9065-e628bdfc2032';
    $request->patientAuthInitResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-31T16:08:22.405Z');
    $request->xHipId = 'quo';
    $request->xHiuId = 'laudantium';

    $response = $sdk->userAuth->postV05UsersAuthOnInitJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthOnInitRaw

If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API. 

  1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values 
      1. MOBILE_OTP - auth via OTP to registered mobile. Mediated. 
      2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated. 
      3. DEMOGRAPHICS - auth initiated with demographic verification
      4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
  2. **meta.expiry** conveys the expiry time of the token and the authentication session
  3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both. 




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. Patient id is invalid


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthOnInitRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthOnInitRawRequest();
    $request->authorization = 'dignissimos';
    $request->requestBody = 'omnis';
    $request->xHipId = 'omnis';
    $request->xHiuId = 'fugit';

    $response = $sdk->userAuth->postV05UsersAuthOnInitRaw($request);

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
    $request->authorization = 'dolorem';
    $request->patientAuthNotificationAcknowledgement = new PatientAuthNotificationAcknowledgement();
    $request->patientAuthNotificationAcknowledgement->acknowledgement = new PatientAuthNotificationAcknowledgementAcknowledgement();
    $request->patientAuthNotificationAcknowledgement->acknowledgement->status = PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum::OK;
    $request->patientAuthNotificationAcknowledgement->error = new Error();
    $request->patientAuthNotificationAcknowledgement->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->patientAuthNotificationAcknowledgement->error->message = 'molestiae';
    $request->patientAuthNotificationAcknowledgement->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthNotificationAcknowledgement->resp = new RequestReference();
    $request->patientAuthNotificationAcknowledgement->resp->requestId = 'e13584f7-ae12-4c68-91f8-2ce115717230';
    $request->patientAuthNotificationAcknowledgement->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-10T10:59:10.379Z');
    $request->xCmId = 'voluptate';

    $response = $sdk->userAuth->postV05UsersAuthOnNotifyJson($request);

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
    $request->authorization = 'voluptate';
    $request->requestBody = 'pariatur';
    $request->xCmId = 'minus';

    $response = $sdk->userAuth->postV05UsersAuthOnNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
