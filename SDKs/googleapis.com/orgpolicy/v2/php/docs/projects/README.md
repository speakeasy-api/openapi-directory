# projects

### Available Operations

* [orgpolicyProjectsConstraintsList](#orgpolicyprojectsconstraintslist) - Lists constraints that could be applied on the specified resource.
* [orgpolicyProjectsPoliciesCreate](#orgpolicyprojectspoliciescreate) - Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.
* [orgpolicyProjectsPoliciesDelete](#orgpolicyprojectspoliciesdelete) - Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.
* [orgpolicyProjectsPoliciesGet](#orgpolicyprojectspoliciesget) - Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.
* [orgpolicyProjectsPoliciesGetEffectivePolicy](#orgpolicyprojectspoliciesgeteffectivepolicy) - Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
* [orgpolicyProjectsPoliciesList](#orgpolicyprojectspolicieslist) - Retrieves all of the policies that exist on a particular resource.
* [orgpolicyProjectsPoliciesPatch](#orgpolicyprojectspoliciespatch) - Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.

## orgpolicyProjectsConstraintsList

Lists constraints that could be applied on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyProjectsConstraintsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyProjectsConstraintsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgpolicyProjectsConstraintsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'sed';
    $request->key = 'iste';
    $request->oauthToken = 'dolor';
    $request->pageSize = 616934;
    $request->pageToken = 'laboriosam';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'in';

    $requestSecurity = new OrgpolicyProjectsConstraintsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->orgpolicyProjectsConstraintsList($request, $requestSecurity);

    if ($response->googleCloudOrgpolicyV2ListConstraintsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgpolicyProjectsPoliciesCreate

Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyProjectsPoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudOrgpolicyV2PolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudOrgpolicyV2AlternatePolicySpecInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudOrgpolicyV2PolicySpecInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudOrgpolicyV2PolicySpecPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeExpr;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyProjectsPoliciesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgpolicyProjectsPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudOrgpolicyV2PolicyInput = new GoogleCloudOrgpolicyV2PolicyInput();
    $request->googleCloudOrgpolicyV2PolicyInput->alternate = new GoogleCloudOrgpolicyV2AlternatePolicySpecInput();
    $request->googleCloudOrgpolicyV2PolicyInput->alternate->launch = 'iste';
    $request->googleCloudOrgpolicyV2PolicyInput->alternate->spec = new GoogleCloudOrgpolicyV2PolicySpecInput();
    $request->googleCloudOrgpolicyV2PolicyInput->alternate->spec->etag = 'iure';
    $request->googleCloudOrgpolicyV2PolicyInput->alternate->spec->inheritFromParent = false;
    $request->googleCloudOrgpolicyV2PolicyInput->alternate->spec->reset = false;
    $request->googleCloudOrgpolicyV2PolicyInput->alternate->spec->rules = [
        new GoogleCloudOrgpolicyV2PolicySpecPolicyRule(),
        new GoogleCloudOrgpolicyV2PolicySpecPolicyRule(),
        new GoogleCloudOrgpolicyV2PolicySpecPolicyRule(),
        new GoogleCloudOrgpolicyV2PolicySpecPolicyRule(),
    ];
    $request->googleCloudOrgpolicyV2PolicyInput->dryRunSpec = new GoogleCloudOrgpolicyV2PolicySpecInput();
    $request->googleCloudOrgpolicyV2PolicyInput->dryRunSpec->etag = 'quidem';
    $request->googleCloudOrgpolicyV2PolicyInput->dryRunSpec->inheritFromParent = false;
    $request->googleCloudOrgpolicyV2PolicyInput->dryRunSpec->reset = false;
    $request->googleCloudOrgpolicyV2PolicyInput->dryRunSpec->rules = [
        new GoogleCloudOrgpolicyV2PolicySpecPolicyRule(),
    ];
    $request->googleCloudOrgpolicyV2PolicyInput->name = 'Lela Orn';
    $request->googleCloudOrgpolicyV2PolicyInput->spec = new GoogleCloudOrgpolicyV2PolicySpecInput();
    $request->googleCloudOrgpolicyV2PolicyInput->spec->etag = 'dolores';
    $request->googleCloudOrgpolicyV2PolicyInput->spec->inheritFromParent = false;
    $request->googleCloudOrgpolicyV2PolicyInput->spec->reset = false;
    $request->googleCloudOrgpolicyV2PolicyInput->spec->rules = [
        new GoogleCloudOrgpolicyV2PolicySpecPolicyRule(),
    ];
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->fields = 'enim';
    $request->key = 'omnis';
    $request->oauthToken = 'nemo';
    $request->parent = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new OrgpolicyProjectsPoliciesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->orgpolicyProjectsPoliciesCreate($request, $requestSecurity);

    if ($response->googleCloudOrgpolicyV2Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgpolicyProjectsPoliciesDelete

Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyProjectsPoliciesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyProjectsPoliciesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgpolicyProjectsPoliciesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'mollitia';
    $request->key = 'dolorem';
    $request->name = 'Carlos Ziemann';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new OrgpolicyProjectsPoliciesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->orgpolicyProjectsPoliciesDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgpolicyProjectsPoliciesGet

Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyProjectsPoliciesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyProjectsPoliciesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgpolicyProjectsPoliciesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'vitae';
    $request->key = 'laborum';
    $request->name = 'Bill Conn';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new OrgpolicyProjectsPoliciesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->orgpolicyProjectsPoliciesGet($request, $requestSecurity);

    if ($response->googleCloudOrgpolicyV2Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgpolicyProjectsPoliciesGetEffectivePolicy

Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyProjectsPoliciesGetEffectivePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyProjectsPoliciesGetEffectivePolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgpolicyProjectsPoliciesGetEffectivePolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'laborum';
    $request->key = 'quasi';
    $request->name = 'Jan Thiel';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new OrgpolicyProjectsPoliciesGetEffectivePolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->orgpolicyProjectsPoliciesGetEffectivePolicy($request, $requestSecurity);

    if ($response->googleCloudOrgpolicyV2Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgpolicyProjectsPoliciesList

Retrieves all of the policies that exist on a particular resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyProjectsPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyProjectsPoliciesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgpolicyProjectsPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reprehenderit';
    $request->fields = 'ut';
    $request->key = 'maiores';
    $request->oauthToken = 'dicta';
    $request->pageSize = 359444;
    $request->pageToken = 'dolore';
    $request->parent = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new OrgpolicyProjectsPoliciesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->orgpolicyProjectsPoliciesList($request, $requestSecurity);

    if ($response->googleCloudOrgpolicyV2ListPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgpolicyProjectsPoliciesPatch

Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyProjectsPoliciesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudOrgpolicyV2PolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudOrgpolicyV2AlternatePolicySpecInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudOrgpolicyV2PolicySpecInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudOrgpolicyV2PolicySpecPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeExpr;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyProjectsPoliciesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgpolicyProjectsPoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudOrgpolicyV2PolicyInput = new GoogleCloudOrgpolicyV2PolicyInput();
    $request->googleCloudOrgpolicyV2PolicyInput->alternate = new GoogleCloudOrgpolicyV2AlternatePolicySpecInput();
    $request->googleCloudOrgpolicyV2PolicyInput->alternate->launch = 'commodi';
    $request->googleCloudOrgpolicyV2PolicyInput->alternate->spec = new GoogleCloudOrgpolicyV2PolicySpecInput();
    $request->googleCloudOrgpolicyV2PolicyInput->alternate->spec->etag = 'repudiandae';
    $request->googleCloudOrgpolicyV2PolicyInput->alternate->spec->inheritFromParent = false;
    $request->googleCloudOrgpolicyV2PolicyInput->alternate->spec->reset = false;
    $request->googleCloudOrgpolicyV2PolicyInput->alternate->spec->rules = [
        new GoogleCloudOrgpolicyV2PolicySpecPolicyRule(),
    ];
    $request->googleCloudOrgpolicyV2PolicyInput->dryRunSpec = new GoogleCloudOrgpolicyV2PolicySpecInput();
    $request->googleCloudOrgpolicyV2PolicyInput->dryRunSpec->etag = 'ipsum';
    $request->googleCloudOrgpolicyV2PolicyInput->dryRunSpec->inheritFromParent = false;
    $request->googleCloudOrgpolicyV2PolicyInput->dryRunSpec->reset = false;
    $request->googleCloudOrgpolicyV2PolicyInput->dryRunSpec->rules = [
        new GoogleCloudOrgpolicyV2PolicySpecPolicyRule(),
        new GoogleCloudOrgpolicyV2PolicySpecPolicyRule(),
        new GoogleCloudOrgpolicyV2PolicySpecPolicyRule(),
    ];
    $request->googleCloudOrgpolicyV2PolicyInput->name = 'Andy Streich';
    $request->googleCloudOrgpolicyV2PolicyInput->spec = new GoogleCloudOrgpolicyV2PolicySpecInput();
    $request->googleCloudOrgpolicyV2PolicyInput->spec->etag = 'rem';
    $request->googleCloudOrgpolicyV2PolicyInput->spec->inheritFromParent = false;
    $request->googleCloudOrgpolicyV2PolicyInput->spec->reset = false;
    $request->googleCloudOrgpolicyV2PolicyInput->spec->rules = [
        new GoogleCloudOrgpolicyV2PolicySpecPolicyRule(),
        new GoogleCloudOrgpolicyV2PolicySpecPolicyRule(),
        new GoogleCloudOrgpolicyV2PolicySpecPolicyRule(),
        new GoogleCloudOrgpolicyV2PolicySpecPolicyRule(),
    ];
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'veritatis';
    $request->key = 'itaque';
    $request->name = 'Erin Altenwerth';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->updateMask = 'distinctio';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new OrgpolicyProjectsPoliciesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->orgpolicyProjectsPoliciesPatch($request, $requestSecurity);

    if ($response->googleCloudOrgpolicyV2Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
