<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1PolicyTargetKey;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest = new GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest();
    $request->googleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest->requests = [
        new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest(),
        new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest(),
        new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest(),
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->customer = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromepolicyCustomersPoliciesGroupsBatchDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->