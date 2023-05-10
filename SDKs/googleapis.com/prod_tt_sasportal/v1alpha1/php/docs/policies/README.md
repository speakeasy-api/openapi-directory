# policies

### Available Operations

* [prodTtSasportalPoliciesGet](#prodttsasportalpoliciesget) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [prodTtSasportalPoliciesSet](#prodttsasportalpoliciesset) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [prodTtSasportalPoliciesTest](#prodttsasportalpoliciestest) - Returns permissions that a caller has on the specified resource.

## prodTtSasportalPoliciesGet

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalPoliciesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalGetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalPoliciesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalPoliciesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalPoliciesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalPoliciesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sasPortalGetPolicyRequest = new SasPortalGetPolicyRequest();
    $request->sasPortalGetPolicyRequest->resource = 'at';
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'quod';
    $request->key = 'officiis';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new ProdTtSasportalPoliciesGetSecurity();
    $requestSecurity->option1 = new ProdTtSasportalPoliciesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->policies->prodTtSasportalPoliciesGet($request, $requestSecurity);

    if ($response->sasPortalPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prodTtSasportalPoliciesSet

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalPoliciesSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalSetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalPolicy;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalAssignment;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalPoliciesSetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalPoliciesSetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalPoliciesSetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalPoliciesSetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sasPortalSetPolicyRequest = new SasPortalSetPolicyRequest();
    $request->sasPortalSetPolicyRequest->disableNotification = false;
    $request->sasPortalSetPolicyRequest->policy = new SasPortalPolicy();
    $request->sasPortalSetPolicyRequest->policy->assignments = [
        new SasPortalAssignment(),
        new SasPortalAssignment(),
    ];
    $request->sasPortalSetPolicyRequest->policy->etag = 'ipsum';
    $request->sasPortalSetPolicyRequest->resource = 'quisquam';
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempore';
    $request->fields = 'accusamus';
    $request->key = 'numquam';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new ProdTtSasportalPoliciesSetSecurity();
    $requestSecurity->option1 = new ProdTtSasportalPoliciesSetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->policies->prodTtSasportalPoliciesSet($request, $requestSecurity);

    if ($response->sasPortalPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prodTtSasportalPoliciesTest

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalPoliciesTestRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalTestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalPoliciesTestSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalPoliciesTestSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalPoliciesTestSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalPoliciesTestRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sasPortalTestPermissionsRequest = new SasPortalTestPermissionsRequest();
    $request->sasPortalTestPermissionsRequest->permissions = [
        'expedita',
    ];
    $request->sasPortalTestPermissionsRequest->resource = 'neque';
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'libero';
    $request->fields = 'voluptas';
    $request->key = 'deserunt';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new ProdTtSasportalPoliciesTestSecurity();
    $requestSecurity->option1 = new ProdTtSasportalPoliciesTestSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->policies->prodTtSasportalPoliciesTest($request, $requestSecurity);

    if ($response->sasPortalTestPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
