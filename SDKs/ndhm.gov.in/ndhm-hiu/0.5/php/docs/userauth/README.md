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
    $request->authorization = 'aspernatur';
    $request->patientAuthNotification = new PatientAuthNotification();
    $request->patientAuthNotification->auth = new PatientAuthNotificationAuth();
    $request->patientAuthNotification->auth->accessToken = 'voluptas';
    $request->patientAuthNotification->auth->patient = new PatientDemographicResponse();
    $request->patientAuthNotification->auth->patient->address = new PatientAddress();
    $request->patientAuthNotification->auth->patient->address->district = 'voluptas';
    $request->patientAuthNotification->auth->patient->address->line = 'voluptas';
    $request->patientAuthNotification->auth->patient->address->pincode = 'minima';
    $request->patientAuthNotification->auth->patient->address->state = 'nobis';
    $request->patientAuthNotification->auth->patient->gender = PatientGenderEnum::O;
    $request->patientAuthNotification->auth->patient->id = '<patient-id>@<consent-manager-id>';
    $request->patientAuthNotification->auth->patient->identifiers = [
        new Identifier(),
    ];
    $request->patientAuthNotification->auth->patient->name = 'Hina Patel';
    $request->patientAuthNotification->auth->patient->yearOfBirth = 2000;
    $request->patientAuthNotification->auth->status = PatientAuthNotificationAuthStatusEnum::DENIED;
    $request->patientAuthNotification->auth->transactionId = 'dolores';
    $request->patientAuthNotification->auth->validity = new AccessTokenValidity();
    $request->patientAuthNotification->auth->validity->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-07T00:24:36.620Z');
    $request->patientAuthNotification->auth->validity->limit = 1;
    $request->patientAuthNotification->auth->validity->purpose = PatientAuthPurposeEnum::LINK;
    $request->patientAuthNotification->auth->validity->requester = new PatientAuthRequester();
    $request->patientAuthNotification->auth->validity->requester->id = '100005';
    $request->patientAuthNotification->auth->validity->requester->type = PatientAuthRequesterTypeEnum::HIP;
    $request->patientAuthNotification->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-26T02:06:35.498Z');
    $request->xHipId = 'ullam';
    $request->xHiuId = 'adipisci';

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
    $request->authorization = 'cum';
    $request->requestBody = 'blanditiis';
    $request->xHipId = 'quas';
    $request->xHiuId = 'hic';

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
    $request->authorization = 'nesciunt';
    $request->patientAuthConfirmResponse = new PatientAuthConfirmResponse();
    $request->patientAuthConfirmResponse->auth = new PatientAuthConfirmResponseAuth();
    $request->patientAuthConfirmResponse->auth->accessToken = 'culpa';
    $request->patientAuthConfirmResponse->auth->patient = new PatientDemographicResponse();
    $request->patientAuthConfirmResponse->auth->patient->address = new PatientAddress();
    $request->patientAuthConfirmResponse->auth->patient->address->district = 'corrupti';
    $request->patientAuthConfirmResponse->auth->patient->address->line = 'pariatur';
    $request->patientAuthConfirmResponse->auth->patient->address->pincode = 'totam';
    $request->patientAuthConfirmResponse->auth->patient->address->state = 'hic';
    $request->patientAuthConfirmResponse->auth->patient->gender = PatientGenderEnum::F;
    $request->patientAuthConfirmResponse->auth->patient->id = '<patient-id>@<consent-manager-id>';
    $request->patientAuthConfirmResponse->auth->patient->identifiers = [
        new Identifier(),
        new Identifier(),
        new Identifier(),
        new Identifier(),
    ];
    $request->patientAuthConfirmResponse->auth->patient->name = 'Hina Patel';
    $request->patientAuthConfirmResponse->auth->patient->yearOfBirth = 2000;
    $request->patientAuthConfirmResponse->auth->validity = new AccessTokenValidity();
    $request->patientAuthConfirmResponse->auth->validity->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-20T15:43:20.562Z');
    $request->patientAuthConfirmResponse->auth->validity->limit = 1;
    $request->patientAuthConfirmResponse->auth->validity->purpose = PatientAuthPurposeEnum::LINK;
    $request->patientAuthConfirmResponse->auth->validity->requester = new PatientAuthRequester();
    $request->patientAuthConfirmResponse->auth->validity->requester->id = '100005';
    $request->patientAuthConfirmResponse->auth->validity->requester->type = PatientAuthRequesterTypeEnum::HIU;
    $request->patientAuthConfirmResponse->error = new Error();
    $request->patientAuthConfirmResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientAuthConfirmResponse->error->message = 'asperiores';
    $request->patientAuthConfirmResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthConfirmResponse->resp = new RequestReference();
    $request->patientAuthConfirmResponse->resp->requestId = 'b7b194a2-76b2-4691-afe1-f08f4294e369';
    $request->patientAuthConfirmResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-18T16:49:49.451Z');
    $request->xHipId = 'tempora';
    $request->xHiuId = 'tempora';

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
    $request->authorization = 'voluptate';
    $request->requestBody = 'reiciendis';
    $request->xHipId = 'ex';
    $request->xHiuId = 'sit';

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
    $request->authorization = 'non';
    $request->patientAuthModeQueryResponse = new PatientAuthModeQueryResponse();
    $request->patientAuthModeQueryResponse->auth = new PatientAuthModeQueryResponseAuth();
    $request->patientAuthModeQueryResponse->auth->modes = [
        AuthenticationModeEnum::DEMOGRAPHICS,
        AuthenticationModeEnum::DEMOGRAPHICS,
        AuthenticationModeEnum::DIRECT,
        AuthenticationModeEnum::DIRECT,
    ];
    $request->patientAuthModeQueryResponse->auth->purpose = PatientAuthPurposeEnum::KYC;
    $request->patientAuthModeQueryResponse->error = new Error();
    $request->patientAuthModeQueryResponse->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->patientAuthModeQueryResponse->error->message = 'rem';
    $request->patientAuthModeQueryResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthModeQueryResponse->resp = new RequestReference();
    $request->patientAuthModeQueryResponse->resp->requestId = '0ca55efd-20e4-457e-9858-b6a89fbe3a5a';
    $request->patientAuthModeQueryResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-26T16:42:33.328Z');
    $request->xHipId = 'accusamus';
    $request->xHiuId = 'tempora';

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
    $request->authorization = 'atque';
    $request->requestBody = 'fugit';
    $request->xHipId = 'ut';
    $request->xHiuId = 'fugiat';

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
  4. **NOTE**, only KYC purpose is applicable for HIU




















  
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
    $request->authorization = 'voluptatem';
    $request->patientAuthInitResponse = new PatientAuthInitResponse();
    $request->patientAuthInitResponse->auth = new PatientAuthInitResponseAuth();
    $request->patientAuthInitResponse->auth->meta = new AuthMeta();
    $request->patientAuthInitResponse->auth->meta->expiry = '2019-12-30T12:01:55Z';
    $request->patientAuthInitResponse->auth->meta->hint = 'culpa';
    $request->patientAuthInitResponse->auth->mode = AuthenticationModeEnum::DEMOGRAPHICS;
    $request->patientAuthInitResponse->auth->transactionId = 'magnam';
    $request->patientAuthInitResponse->error = new Error();
    $request->patientAuthInitResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientAuthInitResponse->error->message = 'esse';
    $request->patientAuthInitResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthInitResponse->resp = new RequestReference();
    $request->patientAuthInitResponse->resp->requestId = '5088e518-6206-45e9-84f3-b1194b8abf60';
    $request->patientAuthInitResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-09T18:33:26.033Z');
    $request->xHipId = 'voluptate';
    $request->xHiuId = 'unde';

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
  4. **NOTE**, only KYC purpose is applicable for HIU




















  
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
    $request->authorization = 'reiciendis';
    $request->requestBody = 'provident';
    $request->xHipId = 'repellendus';
    $request->xHiuId = 'delectus';

    $response = $sdk->userAuth->postV05UsersAuthOnInitRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
