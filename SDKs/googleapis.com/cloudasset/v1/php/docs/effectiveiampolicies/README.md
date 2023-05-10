# effectiveIamPolicies

### Available Operations

* [cloudassetEffectiveIamPoliciesBatchGet](#cloudasseteffectiveiampoliciesbatchget) - Gets effective IAM policies for a batch of resources.

## cloudassetEffectiveIamPoliciesBatchGet

Gets effective IAM policies for a batch of resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetEffectiveIamPoliciesBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetEffectiveIamPoliciesBatchGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetEffectiveIamPoliciesBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nam';
    $request->fields = 'officia';
    $request->key = 'occaecati';
    $request->names = [
        'deleniti',
    ];
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->scope = 'totam';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new CloudassetEffectiveIamPoliciesBatchGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->effectiveIamPolicies->cloudassetEffectiveIamPoliciesBatchGet($request, $requestSecurity);

    if ($response->batchGetEffectiveIamPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
