<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAnalyzeIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAnalyzeIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetAnalyzeIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->analysisQueryAccessSelectorPermissions = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->analysisQueryAccessSelectorRoles = [
        'error',
        'deserunt',
    ];
    $request->analysisQueryIdentitySelectorIdentity = 'suscipit';
    $request->analysisQueryResourceSelectorFullResourceName = 'iure';
    $request->callback = 'magnam';
    $request->fields = 'debitis';
    $request->key = 'ipsa';
    $request->oauthToken = 'delectus';
    $request->optionsAnalyzeServiceAccountImpersonation = false;
    $request->optionsExecutionTimeout = 'tempora';
    $request->optionsExpandGroups = false;
    $request->optionsExpandResources = false;
    $request->optionsExpandRoles = false;
    $request->optionsOutputGroupEdges = false;
    $request->optionsOutputResourceEdges = false;
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new CloudassetAnalyzeIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1p4beta1->cloudassetAnalyzeIamPolicy($request, $requestSecurity);

    if ($response->analyzeIamPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->