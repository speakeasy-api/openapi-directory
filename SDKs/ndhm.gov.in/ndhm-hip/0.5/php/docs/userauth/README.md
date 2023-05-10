# userAuth

### Available Operations

* [postV05UsersAuthNotifyJson](#postv05usersauthnotifyjson) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthNotifyRaw](#postv05usersauthnotifyraw) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthOnConfirmJson](#postv05usersauthonconfirmjson) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnConfirmRaw](#postv05usersauthonconfirmraw) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnFetchModesJson](#postv05usersauthonfetchmodesjson) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnFetchModesRaw](#postv05usersauthonfetchmodesraw) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnInitJson](#postv05usersauthoninitjson) - Response to user authentication initialization from HIP
* [postV05UsersAuthOnInitRaw](#postv05usersauthoninitraw) - Response to user authentication initialization from HIP

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
    $request->authorization = 'debitis';
    $request->patientAuthNotification = new PatientAuthNotification();
    $request->patientAuthNotification->auth = new PatientAuthNotificationAuth();
    $request->patientAuthNotification->auth->accessToken = 'consectetur';
    $request->patientAuthNotification->auth->patient = new PatientDemographicResponse();
    $request->patientAuthNotification->auth->patient->address = new PatientAddress();
    $request->patientAuthNotification->auth->patient->address->district = 'corporis';
    $request->patientAuthNotification->auth->patient->address->line = 'harum';
    $request->patientAuthNotification->auth->patient->address->pincode = 'laboriosam';
    $request->patientAuthNotification->auth->patient->address->state = 'ipsa';
    $request->patientAuthNotification->auth->patient->gender = PatientGenderEnum::U;
    $request->patientAuthNotification->auth->patient->id = '<patient-id>@<consent-manager-id>';
    $request->patientAuthNotification->auth->patient->identifiers = [
        new Identifier(),
        new Identifier(),
        new Identifier(),
    ];
    $request->patientAuthNotification->auth->patient->name = 'Hina Patel';
    $request->patientAuthNotification->auth->patient->yearOfBirth = 2000;
    $request->patientAuthNotification->auth->status = PatientAuthNotificationAuthStatusEnum::GRANTED;
    $request->patientAuthNotification->auth->transactionId = 'accusamus';
    $request->patientAuthNotification->auth->validity = new AccessTokenValidity();
    $request->patientAuthNotification->auth->validity->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-16T02:54:19.259Z');
    $request->patientAuthNotification->auth->validity->limit = 1;
    $request->patientAuthNotification->auth->validity->purpose = PatientAuthPurposeEnum::LINK;
    $request->patientAuthNotification->auth->validity->requester = new PatientAuthRequester();
    $request->patientAuthNotification->auth->validity->requester->id = '100005';
    $request->patientAuthNotification->auth->validity->requester->type = PatientAuthRequesterTypeEnum::HIP;
    $request->patientAuthNotification->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-17T09:09:54.947Z');
    $request->xHipId = 'minima';
    $request->xHiuId = 'nobis';

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
    $request->authorization = 'dolorum';
    $request->requestBody = 'adipisci';
    $request->xHipId = 'minus';
    $request->xHiuId = 'dolores';

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
    $request->authorization = 'blanditiis';
    $request->patientAuthConfirmResponse = new PatientAuthConfirmResponse();
    $request->patientAuthConfirmResponse->auth = new PatientAuthConfirmResponseAuth();
    $request->patientAuthConfirmResponse->auth->accessToken = 'in';
    $request->patientAuthConfirmResponse->auth->patient = new PatientDemographicResponse();
    $request->patientAuthConfirmResponse->auth->patient->address = new PatientAddress();
    $request->patientAuthConfirmResponse->auth->patient->address->district = 'dolore';
    $request->patientAuthConfirmResponse->auth->patient->address->line = 'aliquam';
    $request->patientAuthConfirmResponse->auth->patient->address->pincode = 'officiis';
    $request->patientAuthConfirmResponse->auth->patient->address->state = 'temporibus';
    $request->patientAuthConfirmResponse->auth->patient->gender = PatientGenderEnum::F;
    $request->patientAuthConfirmResponse->auth->patient->id = '<patient-id>@<consent-manager-id>';
    $request->patientAuthConfirmResponse->auth->patient->identifiers = [
        new Identifier(),
    ];
    $request->patientAuthConfirmResponse->auth->patient->name = 'Hina Patel';
    $request->patientAuthConfirmResponse->auth->patient->yearOfBirth = 2000;
    $request->patientAuthConfirmResponse->auth->validity = new AccessTokenValidity();
    $request->patientAuthConfirmResponse->auth->validity->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-30T06:08:11.710Z');
    $request->patientAuthConfirmResponse->auth->validity->limit = 1;
    $request->patientAuthConfirmResponse->auth->validity->purpose = PatientAuthPurposeEnum::KYC;
    $request->patientAuthConfirmResponse->auth->validity->requester = new PatientAuthRequester();
    $request->patientAuthConfirmResponse->auth->validity->requester->id = '100005';
    $request->patientAuthConfirmResponse->auth->validity->requester->type = PatientAuthRequesterTypeEnum::HIU;
    $request->patientAuthConfirmResponse->error = new Error();
    $request->patientAuthConfirmResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientAuthConfirmResponse->error->message = 'culpa';
    $request->patientAuthConfirmResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthConfirmResponse->resp = new RequestReference();
    $request->patientAuthConfirmResponse->resp->requestId = '8d8f5c0b-2f2f-4b7b-994a-276b26916fe1';
    $request->patientAuthConfirmResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-10T20:46:47.432Z');
    $request->xHipId = 'corrupti';
    $request->xHiuId = 'maiores';

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
    $request->authorization = 'incidunt';
    $request->requestBody = 'sed';
    $request->xHipId = 'provident';
    $request->xHiuId = 'eius';

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
    $request->authorization = 'necessitatibus';
    $request->patientAuthModeQueryResponse = new PatientAuthModeQueryResponse();
    $request->patientAuthModeQueryResponse->auth = new PatientAuthModeQueryResponseAuth();
    $request->patientAuthModeQueryResponse->auth->modes = [
        AuthenticationModeEnum::DIRECT,
    ];
    $request->patientAuthModeQueryResponse->auth->purpose = PatientAuthPurposeEnum::KYC;
    $request->patientAuthModeQueryResponse->error = new Error();
    $request->patientAuthModeQueryResponse->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->patientAuthModeQueryResponse->error->message = 'voluptatibus';
    $request->patientAuthModeQueryResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthModeQueryResponse->resp = new RequestReference();
    $request->patientAuthModeQueryResponse->resp->requestId = '447f603e-8b44-45e8-8ca5-5efd20e457e1';
    $request->patientAuthModeQueryResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-21T14:42:01.744Z');
    $request->xHipId = 'praesentium';
    $request->xHiuId = 'cum';

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
    $request->authorization = 'laboriosam';
    $request->requestBody = 'dolorum';
    $request->xHipId = 'voluptatum';
    $request->xHiuId = 'error';

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
    $request->authorization = 'hic';
    $request->patientAuthInitResponse = new PatientAuthInitResponse();
    $request->patientAuthInitResponse->auth = new PatientAuthInitResponseAuth();
    $request->patientAuthInitResponse->auth->meta = new AuthMeta();
    $request->patientAuthInitResponse->auth->meta->expiry = '2019-12-30T12:01:55Z';
    $request->patientAuthInitResponse->auth->meta->hint = 'expedita';
    $request->patientAuthInitResponse->auth->mode = AuthenticationModeEnum::AADHAAR_OTP;
    $request->patientAuthInitResponse->auth->transactionId = 'neque';
    $request->patientAuthInitResponse->error = new Error();
    $request->patientAuthInitResponse->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->patientAuthInitResponse->error->message = 'nostrum';
    $request->patientAuthInitResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthInitResponse->resp = new RequestReference();
    $request->patientAuthInitResponse->resp->requestId = 'aa8e4824-d0ab-4407-9088-e51862065e90';
    $request->patientAuthInitResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-12T08:45:01.658Z');
    $request->xHipId = 'dolorem';
    $request->xHiuId = 'harum';

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
    $request->authorization = 'dicta';
    $request->requestBody = 'architecto';
    $request->xHipId = 'occaecati';
    $request->xHiuId = 'labore';

    $response = $sdk->userAuth->postV05UsersAuthOnInitRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
