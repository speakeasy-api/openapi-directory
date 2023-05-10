# systempolicy

### Available Operations

* [binaryauthorizationSystempolicyGetPolicy](#binaryauthorizationsystempolicygetpolicy) - Gets the current system policy in the specified location.

## binaryauthorizationSystempolicyGetPolicy

Gets the current system policy in the specified location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationSystempolicyGetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationSystempolicyGetPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BinaryauthorizationSystempolicyGetPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'dicta';
    $request->key = 'corporis';
    $request->name = 'Heidi Carter';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new BinaryauthorizationSystempolicyGetPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->systempolicy->binaryauthorizationSystempolicyGetPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
