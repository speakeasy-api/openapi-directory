<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\Destination;
use \OpenAPI\OpenAPI\Models\Shared\HttpHeaderMatch;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->authorizationPolicyInput = new AuthorizationPolicyInput();
    $request->authorizationPolicyInput->action = AuthorizationPolicyActionEnum::ALLOW;
    $request->authorizationPolicyInput->description = 'distinctio';
    $request->authorizationPolicyInput->labels = [
        'unde' => 'nulla',
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
    ];
    $request->authorizationPolicyInput->name = 'Dr. Valerie Toy';
    $request->authorizationPolicyInput->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->authorizationPolicyId = 'placeat';
    $request->callback = 'voluptatum';
    $request->fields = 'iusto';
    $request->key = 'excepturi';
    $request->oauthToken = 'nisi';
    $request->parent = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsAuthorizationPoliciesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->