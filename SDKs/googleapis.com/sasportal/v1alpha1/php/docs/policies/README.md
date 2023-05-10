# policies

### Available Operations

* [sasportalPoliciesGet](#sasportalpoliciesget) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [sasportalPoliciesSet](#sasportalpoliciesset) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [sasportalPoliciesTest](#sasportalpoliciestest) - Returns permissions that a caller has on the specified resource.

## sasportalPoliciesGet

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SasportalPoliciesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalGetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SasportalPoliciesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SasportalPoliciesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SasportalPoliciesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SasportalPoliciesGetRequest();
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

    $requestSecurity = new SasportalPoliciesGetSecurity();
    $requestSecurity->option1 = new SasportalPoliciesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->policies->sasportalPoliciesGet($request, $requestSecurity);

    if ($response->sasPortalPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sasportalPoliciesSet

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SasportalPoliciesSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalSetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalPolicy;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalAssignment;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SasportalPoliciesSetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SasportalPoliciesSetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SasportalPoliciesSetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SasportalPoliciesSetRequest();
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

    $requestSecurity = new SasportalPoliciesSetSecurity();
    $requestSecurity->option1 = new SasportalPoliciesSetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->policies->sasportalPoliciesSet($request, $requestSecurity);

    if ($response->sasPortalPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sasportalPoliciesTest

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SasportalPoliciesTestRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalTestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SasportalPoliciesTestSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SasportalPoliciesTestSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SasportalPoliciesTestSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SasportalPoliciesTestRequest();
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

    $requestSecurity = new SasportalPoliciesTestSecurity();
    $requestSecurity->option1 = new SasportalPoliciesTestSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->policies->sasportalPoliciesTest($request, $requestSecurity);

    if ($response->sasPortalTestPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
