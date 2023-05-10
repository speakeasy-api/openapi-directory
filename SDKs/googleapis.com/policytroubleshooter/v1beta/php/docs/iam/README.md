# iam

### Available Operations

* [policytroubleshooterIamTroubleshoot](#policytroubleshooteriamtroubleshoot) - Checks whether a member has a specific permission for a specific resource, and explains why the member does or does not have that permission.

## policytroubleshooterIamTroubleshoot

Checks whether a member has a specific permission for a specific resource, and explains why the member does or does not have that permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PolicytroubleshooterIamTroubleshootRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPolicytroubleshooterV1betaAccessTuple;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PolicytroubleshooterIamTroubleshootSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolicytroubleshooterIamTroubleshootRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest = new GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest();
    $request->googleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest->accessTuple = new GoogleCloudPolicytroubleshooterV1betaAccessTuple();
    $request->googleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest->accessTuple->fullResourceName = 'debitis';
    $request->googleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest->accessTuple->permission = 'ipsa';
    $request->googleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest->accessTuple->principal = 'delectus';
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'minus';
    $request->key = 'placeat';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new PolicytroubleshooterIamTroubleshootSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->iam->policytroubleshooterIamTroubleshoot($request, $requestSecurity);

    if ($response->googleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
