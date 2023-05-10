<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccessapprovalProjectsApprovalRequestsApproveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApproveApprovalRequestMessage;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccessapprovalProjectsApprovalRequestsApproveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessapprovalProjectsApprovalRequestsApproveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->approveApprovalRequestMessage = new ApproveApprovalRequestMessage();
    $request->approveApprovalRequestMessage->expireTime = 'provident';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->name = 'Ben Mueller';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new AccessapprovalProjectsApprovalRequestsApproveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->accessapprovalProjectsApprovalRequestsApprove($request, $requestSecurity);

    if ($response->approvalRequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->