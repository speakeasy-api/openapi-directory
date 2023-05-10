<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest = new GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest();
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->displayName = 'provident';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->idToken = 'distinctio';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->phoneVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo();
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->phoneVerificationInfo->androidVerificationProof = 'quibusdam';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->phoneVerificationInfo->code = 'unde';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->phoneVerificationInfo->phoneNumber = 'nulla';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->phoneVerificationInfo->sessionInfo = 'corrupti';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->tenantId = 'illum';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->totpVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo();
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->totpVerificationInfo->sessionInfo = 'vel';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->totpVerificationInfo->verificationCode = 'error';
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'magnam';
    $request->key = 'debitis';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->identitytoolkitAccountsMfaEnrollmentFinalize($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->