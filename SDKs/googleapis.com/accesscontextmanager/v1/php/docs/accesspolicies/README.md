# accessPolicies

### Available Operations

* [accesscontextmanagerAccessPoliciesAccessLevelsCreate](#accesscontextmanageraccesspoliciesaccesslevelscreate) - Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.
* [accesscontextmanagerAccessPoliciesAccessLevelsList](#accesscontextmanageraccesspoliciesaccesslevelslist) - Lists all access levels for an access policy.
* [accesscontextmanagerAccessPoliciesAccessLevelsReplaceAll](#accesscontextmanageraccesspoliciesaccesslevelsreplaceall) - Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.
* [accesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreate](#accesscontextmanageraccesspoliciesauthorizedorgsdescscreate) - Creates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. The name of this `AuthorizedOrgsDesc` will be assigned during creation.
* [accesscontextmanagerAccessPoliciesAuthorizedOrgsDescsList](#accesscontextmanageraccesspoliciesauthorizedorgsdescslist) - Lists all authorized orgs descs for an access policy.
* [accesscontextmanagerAccessPoliciesCreate](#accesscontextmanageraccesspoliciescreate) - Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.
* [accesscontextmanagerAccessPoliciesGetIamPolicy](#accesscontextmanageraccesspoliciesgetiampolicy) - Gets the IAM policy for the specified Access Context Manager access policy.
* [accesscontextmanagerAccessPoliciesList](#accesscontextmanageraccesspolicieslist) - Lists all access policies in an organization.
* [accesscontextmanagerAccessPoliciesServicePerimetersCommit](#accesscontextmanageraccesspoliciesserviceperimeterscommit) - Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.
* [accesscontextmanagerAccessPoliciesServicePerimetersCreate](#accesscontextmanageraccesspoliciesserviceperimeterscreate) - Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.
* [accesscontextmanagerAccessPoliciesServicePerimetersList](#accesscontextmanageraccesspoliciesserviceperimeterslist) - Lists all service perimeters for an access policy.
* [accesscontextmanagerAccessPoliciesServicePerimetersReplaceAll](#accesscontextmanageraccesspoliciesserviceperimetersreplaceall) - Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.
* [accesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions](#accesscontextmanageraccesspoliciesserviceperimeterstestiampermissions) - Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.
* [accesscontextmanagerAccessPoliciesSetIamPolicy](#accesscontextmanageraccesspoliciessetiampolicy) - Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.

## accesscontextmanagerAccessPoliciesAccessLevelsCreate

Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessLevel;
use \OpenAPI\OpenAPI\Models\Shared\BasicLevel;
use \OpenAPI\OpenAPI\Models\Shared\BasicLevelCombiningFunctionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\DevicePolicy;
use \OpenAPI\OpenAPI\Models\Shared\DevicePolicyAllowedDeviceManagementLevelsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DevicePolicyAllowedEncryptionStatusesEnum;
use \OpenAPI\OpenAPI\Models\Shared\OsConstraint;
use \OpenAPI\OpenAPI\Models\Shared\OsConstraintOsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomLevel;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessLevel = new AccessLevel();
    $request->accessLevel->basic = new BasicLevel();
    $request->accessLevel->basic->combiningFunction = BasicLevelCombiningFunctionEnum::AND;
    $request->accessLevel->basic->conditions = [
        new Condition(),
        new Condition(),
        new Condition(),
        new Condition(),
    ];
    $request->accessLevel->custom = new CustomLevel();
    $request->accessLevel->custom->expr = new Expr();
    $request->accessLevel->custom->expr->description = 'temporibus';
    $request->accessLevel->custom->expr->expression = 'ab';
    $request->accessLevel->custom->expr->location = 'quis';
    $request->accessLevel->custom->expr->title = 'Mr.';
    $request->accessLevel->description = 'deserunt';
    $request->accessLevel->name = 'Roberta Sipes';
    $request->accessLevel->title = 'Mr.';
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'molestiae';
    $request->key = 'quod';
    $request->oauthToken = 'quod';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesAccessLevelsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesAccessLevelsList

Lists all access levels for an access policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAccessLevelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAccessLevelsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesAccessLevelsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessLevelFormat = AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnum::CEL;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'deleniti';
    $request->key = 'hic';
    $request->oauthToken = 'optio';
    $request->pageSize = 521848;
    $request->pageToken = 'beatae';
    $request->parent = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesAccessLevelsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesAccessLevelsList($request, $requestSecurity);

    if ($response->listAccessLevelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesAccessLevelsReplaceAll

Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceAccessLevelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessLevel;
use \OpenAPI\OpenAPI\Models\Shared\BasicLevel;
use \OpenAPI\OpenAPI\Models\Shared\BasicLevelCombiningFunctionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\DevicePolicy;
use \OpenAPI\OpenAPI\Models\Shared\DevicePolicyAllowedDeviceManagementLevelsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DevicePolicyAllowedEncryptionStatusesEnum;
use \OpenAPI\OpenAPI\Models\Shared\OsConstraint;
use \OpenAPI\OpenAPI\Models\Shared\OsConstraintOsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomLevel;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->replaceAccessLevelsRequest = new ReplaceAccessLevelsRequest();
    $request->replaceAccessLevelsRequest->accessLevels = [
        new AccessLevel(),
        new AccessLevel(),
        new AccessLevel(),
    ];
    $request->replaceAccessLevelsRequest->etag = 'esse';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'perferendis';
    $request->key = 'ad';
    $request->oauthToken = 'natus';
    $request->parent = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesAccessLevelsReplaceAll($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreate

Creates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. The name of this `AuthorizedOrgsDesc` will be assigned during creation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedOrgsDesc;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedOrgsDescAssetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedOrgsDescAuthorizationDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedOrgsDescAuthorizationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->authorizedOrgsDesc = new AuthorizedOrgsDesc();
    $request->authorizedOrgsDesc->assetType = AuthorizedOrgsDescAssetTypeEnum::ASSET_TYPE_CREDENTIAL_STRENGTH;
    $request->authorizedOrgsDesc->authorizationDirection = AuthorizedOrgsDescAuthorizationDirectionEnum::AUTHORIZATION_DIRECTION_FROM;
    $request->authorizedOrgsDesc->authorizationType = AuthorizedOrgsDescAuthorizationTypeEnum::AUTHORIZATION_TYPE_TRUST;
    $request->authorizedOrgsDesc->name = 'Stacy Moore';
    $request->authorizedOrgsDesc->orgs = [
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->accessToken = 'est';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'dolores';
    $request->key = 'dolorem';
    $request->oauthToken = 'corporis';
    $request->parent = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesAuthorizedOrgsDescsList

Lists all authorized orgs descs for an access policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'iure';
    $request->key = 'culpa';
    $request->oauthToken = 'doloribus';
    $request->pageSize = 958950;
    $request->pageToken = 'architecto';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesAuthorizedOrgsDescsList($request, $requestSecurity);

    if ($response->listAuthorizedOrgsDescsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesCreate

Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessPolicy = new AccessPolicy();
    $request->accessPolicy->etag = 'mollitia';
    $request->accessPolicy->name = 'Francis Jerde';
    $request->accessPolicy->parent = 'velit';
    $request->accessPolicy->scopes = [
        'quia',
        'quis',
        'vitae',
    ];
    $request->accessPolicy->title = 'Miss';
    $request->accessToken = 'animi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odit';
    $request->fields = 'quo';
    $request->key = 'sequi';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesGetIamPolicy

Gets the IAM policy for the specified Access Context Manager access policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 97101;
    $request->accessToken = 'error';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'quasi';
    $request->key = 'reiciendis';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->resource = 'nihil';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesList

Lists all access policies in an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'perferendis';
    $request->key = 'doloremque';
    $request->oauthToken = 'reprehenderit';
    $request->pageSize = 282807;
    $request->pageToken = 'maiores';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesList($request, $requestSecurity);

    if ($response->listAccessPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesServicePerimetersCommit

Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommitServicePerimetersRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->commitServicePerimetersRequest = new CommitServicePerimetersRequest();
    $request->commitServicePerimetersRequest->etag = 'harum';
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'commodi';
    $request->fields = 'repudiandae';
    $request->key = 'quae';
    $request->oauthToken = 'ipsum';
    $request->parent = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestias';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesServicePerimetersCommit($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesServicePerimetersCreate

Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServicePerimeter;
use \OpenAPI\OpenAPI\Models\Shared\ServicePerimeterPerimeterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServicePerimeterConfig;
use \OpenAPI\OpenAPI\Models\Shared\EgressPolicy;
use \OpenAPI\OpenAPI\Models\Shared\EgressFrom;
use \OpenAPI\OpenAPI\Models\Shared\EgressFromIdentityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EgressTo;
use \OpenAPI\OpenAPI\Models\Shared\ApiOperation;
use \OpenAPI\OpenAPI\Models\Shared\MethodSelector;
use \OpenAPI\OpenAPI\Models\Shared\IngressPolicy;
use \OpenAPI\OpenAPI\Models\Shared\IngressFrom;
use \OpenAPI\OpenAPI\Models\Shared\IngressFromIdentityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IngressSource;
use \OpenAPI\OpenAPI\Models\Shared\IngressTo;
use \OpenAPI\OpenAPI\Models\Shared\VpcAccessibleServices;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->servicePerimeter = new ServicePerimeter();
    $request->servicePerimeter->description = 'praesentium';
    $request->servicePerimeter->name = 'Grady Botsford';
    $request->servicePerimeter->perimeterType = ServicePerimeterPerimeterTypeEnum::PERIMETER_TYPE_REGULAR;
    $request->servicePerimeter->spec = new ServicePerimeterConfig();
    $request->servicePerimeter->spec->accessLevels = [
        'incidunt',
        'enim',
        'consequatur',
        'est',
    ];
    $request->servicePerimeter->spec->egressPolicies = [
        new EgressPolicy(),
        new EgressPolicy(),
        new EgressPolicy(),
        new EgressPolicy(),
    ];
    $request->servicePerimeter->spec->ingressPolicies = [
        new IngressPolicy(),
    ];
    $request->servicePerimeter->spec->resources = [
        'distinctio',
        'quibusdam',
        'labore',
    ];
    $request->servicePerimeter->spec->restrictedServices = [
        'qui',
        'aliquid',
    ];
    $request->servicePerimeter->spec->vpcAccessibleServices = new VpcAccessibleServices();
    $request->servicePerimeter->spec->vpcAccessibleServices->allowedServices = [
        'quos',
        'perferendis',
        'magni',
    ];
    $request->servicePerimeter->spec->vpcAccessibleServices->enableRestriction = false;
    $request->servicePerimeter->status = new ServicePerimeterConfig();
    $request->servicePerimeter->status->accessLevels = [
        'ipsam',
        'alias',
        'fugit',
        'dolorum',
    ];
    $request->servicePerimeter->status->egressPolicies = [
        new EgressPolicy(),
        new EgressPolicy(),
        new EgressPolicy(),
    ];
    $request->servicePerimeter->status->ingressPolicies = [
        new IngressPolicy(),
        new IngressPolicy(),
    ];
    $request->servicePerimeter->status->resources = [
        'tempore',
        'labore',
        'delectus',
    ];
    $request->servicePerimeter->status->restrictedServices = [
        'non',
        'eligendi',
    ];
    $request->servicePerimeter->status->vpcAccessibleServices = new VpcAccessibleServices();
    $request->servicePerimeter->status->vpcAccessibleServices->allowedServices = [
        'aliquid',
        'provident',
        'necessitatibus',
    ];
    $request->servicePerimeter->status->vpcAccessibleServices->enableRestriction = false;
    $request->servicePerimeter->title = 'Ms.';
    $request->servicePerimeter->useExplicitDryRunSpec = false;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'a';
    $request->key = 'dolorum';
    $request->oauthToken = 'in';
    $request->parent = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesServicePerimetersCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesServicePerimetersList

Lists all service perimeters for an access policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesServicePerimetersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facere';
    $request->fields = 'ea';
    $request->key = 'aliquid';
    $request->oauthToken = 'laborum';
    $request->pageSize = 881104;
    $request->pageToken = 'non';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesServicePerimetersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesServicePerimetersList($request, $requestSecurity);

    if ($response->listServicePerimetersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesServicePerimetersReplaceAll

Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceServicePerimetersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServicePerimeter;
use \OpenAPI\OpenAPI\Models\Shared\ServicePerimeterPerimeterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServicePerimeterConfig;
use \OpenAPI\OpenAPI\Models\Shared\EgressPolicy;
use \OpenAPI\OpenAPI\Models\Shared\EgressFrom;
use \OpenAPI\OpenAPI\Models\Shared\EgressFromIdentityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EgressTo;
use \OpenAPI\OpenAPI\Models\Shared\ApiOperation;
use \OpenAPI\OpenAPI\Models\Shared\MethodSelector;
use \OpenAPI\OpenAPI\Models\Shared\IngressPolicy;
use \OpenAPI\OpenAPI\Models\Shared\IngressFrom;
use \OpenAPI\OpenAPI\Models\Shared\IngressFromIdentityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IngressSource;
use \OpenAPI\OpenAPI\Models\Shared\IngressTo;
use \OpenAPI\OpenAPI\Models\Shared\VpcAccessibleServices;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->replaceServicePerimetersRequest = new ReplaceServicePerimetersRequest();
    $request->replaceServicePerimetersRequest->etag = 'provident';
    $request->replaceServicePerimetersRequest->servicePerimeters = [
        new ServicePerimeter(),
        new ServicePerimeter(),
        new ServicePerimeter(),
    ];
    $request->accessToken = 'id';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deleniti';
    $request->fields = 'sapiente';
    $request->key = 'amet';
    $request->oauthToken = 'deserunt';
    $request->parent = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesServicePerimetersReplaceAll($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions

Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'nihil',
    ];
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'labore';
    $request->key = 'labore';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->resource = 'nobis';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesSetIamPolicy

Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'et';
    $request->setIamPolicyRequest->policy->version = 569965;
    $request->setIamPolicyRequest->updateMask = 'ullam';
    $request->accessToken = 'provident';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sint';
    $request->fields = 'accusantium';
    $request->key = 'mollitia';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->resource = 'ad';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
