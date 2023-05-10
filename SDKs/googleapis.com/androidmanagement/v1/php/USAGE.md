<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Enterprise;
use \OpenAPI\OpenAPI\Models\Shared\ContactInfo;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseEnabledNotificationTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExternalData;
use \OpenAPI\OpenAPI\Models\Shared\SigninDetail;
use \OpenAPI\OpenAPI\Models\Shared\SigninDetailAllowPersonalUsageEnum;
use \OpenAPI\OpenAPI\Models\Shared\TermsAndConditions;
use \OpenAPI\OpenAPI\Models\Shared\UserFacingMessage;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidmanagementEnterprisesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->enterprise = new Enterprise();
    $request->enterprise->appAutoApprovalEnabled = false;
    $request->enterprise->contactInfo = new ContactInfo();
    $request->enterprise->contactInfo->contactEmail = 'provident';
    $request->enterprise->contactInfo->dataProtectionOfficerEmail = 'distinctio';
    $request->enterprise->contactInfo->dataProtectionOfficerName = 'quibusdam';
    $request->enterprise->contactInfo->dataProtectionOfficerPhone = 'unde';
    $request->enterprise->contactInfo->euRepresentativeEmail = 'nulla';
    $request->enterprise->contactInfo->euRepresentativeName = 'corrupti';
    $request->enterprise->contactInfo->euRepresentativePhone = 'illum';
    $request->enterprise->enabledNotificationTypes = [
        EnterpriseEnabledNotificationTypesEnum::STATUS_REPORT,
        EnterpriseEnabledNotificationTypesEnum::STATUS_REPORT,
    ];
    $request->enterprise->enterpriseDisplayName = 'suscipit';
    $request->enterprise->logo = new ExternalData();
    $request->enterprise->logo->sha256Hash = 'iure';
    $request->enterprise->logo->url = 'magnam';
    $request->enterprise->name = 'Larry Windler';
    $request->enterprise->primaryColor = 477665;
    $request->enterprise->pubsubTopic = 'minus';
    $request->enterprise->signinDetails = [
        new SigninDetail(),
        new SigninDetail(),
        new SigninDetail(),
        new SigninDetail(),
    ];
    $request->enterprise->termsAndConditions = [
        new TermsAndConditions(),
        new TermsAndConditions(),
        new TermsAndConditions(),
    ];
    $request->accessToken = 'iusto';
    $request->agreementAccepted = false;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->enterpriseToken = 'recusandae';
    $request->fields = 'temporibus';
    $request->key = 'ab';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->projectId = 'veritatis';
    $request->quotaUser = 'deserunt';
    $request->signupUrlName = 'perferendis';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'repellendus';

    $requestSecurity = new AndroidmanagementEnterprisesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidmanagementEnterprisesCreate($request, $requestSecurity);

    if ($response->enterprise !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->