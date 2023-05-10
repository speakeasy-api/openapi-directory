<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PolicytroubleshooterIamTroubleshootRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPolicytroubleshooterV1AccessTuple;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PolicytroubleshooterIamTroubleshootSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolicytroubleshooterIamTroubleshootRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest = new GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest();
    $request->googleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest->accessTuple = new GoogleCloudPolicytroubleshooterV1AccessTuple();
    $request->googleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest->accessTuple->fullResourceName = 'provident';
    $request->googleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest->accessTuple->permission = 'distinctio';
    $request->googleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest->accessTuple->principal = 'quibusdam';
    $request->accessToken = 'unde';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corrupti';
    $request->fields = 'illum';
    $request->key = 'vel';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new PolicytroubleshooterIamTroubleshootSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->iam->policytroubleshooterIamTroubleshoot($request, $requestSecurity);

    if ($response->googleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->