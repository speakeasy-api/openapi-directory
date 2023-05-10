# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->accessLevel->basic->combiningFunction = BasicLevelCombiningFunctionEnum::OR;
    $request->accessLevel->basic->conditions = [
        new Condition(),
        new Condition(),
        new Condition(),
    ];
    $request->accessLevel->custom = new CustomLevel();
    $request->accessLevel->custom->expr = new Expr();
    $request->accessLevel->custom->expr->description = 'quibusdam';
    $request->accessLevel->custom->expr->expression = 'unde';
    $request->accessLevel->custom->expr->location = 'nulla';
    $request->accessLevel->custom->expr->title = 'Ms.';
    $request->accessLevel->description = 'illum';
    $request->accessLevel->name = 'Sabrina Oberbrunner';
    $request->accessLevel->title = 'Mrs.';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->parent = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accessPolicies](docs/accesspolicies/README.md)

* [accesscontextmanagerAccessPoliciesAccessLevelsCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesaccesslevelscreate) - Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.
* [accesscontextmanagerAccessPoliciesAccessLevelsList](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesaccesslevelslist) - Lists all access levels for an access policy.
* [accesscontextmanagerAccessPoliciesAccessLevelsReplaceAll](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesaccesslevelsreplaceall) - Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.
* [accesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesauthorizedorgsdescscreate) - Creates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. The name of this `AuthorizedOrgsDesc` will be assigned during creation.
* [accesscontextmanagerAccessPoliciesAuthorizedOrgsDescsList](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesauthorizedorgsdescslist) - Lists all authorized orgs descs for an access policy.
* [accesscontextmanagerAccessPoliciesCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciescreate) - Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.
* [accesscontextmanagerAccessPoliciesGetIamPolicy](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesgetiampolicy) - Gets the IAM policy for the specified Access Context Manager access policy.
* [accesscontextmanagerAccessPoliciesList](docs/accesspolicies/README.md#accesscontextmanageraccesspolicieslist) - Lists all access policies in an organization.
* [accesscontextmanagerAccessPoliciesServicePerimetersCommit](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterscommit) - Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.
* [accesscontextmanagerAccessPoliciesServicePerimetersCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterscreate) - Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.
* [accesscontextmanagerAccessPoliciesServicePerimetersList](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterslist) - Lists all service perimeters for an access policy.
* [accesscontextmanagerAccessPoliciesServicePerimetersReplaceAll](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimetersreplaceall) - Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.
* [accesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterstestiampermissions) - Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.
* [accesscontextmanagerAccessPoliciesSetIamPolicy](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciessetiampolicy) - Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.

### [operations](docs/operations/README.md)

* [accesscontextmanagerOperationsCancel](docs/operations/README.md#accesscontextmanageroperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### [organizations](docs/organizations/README.md)

* [accesscontextmanagerOrganizationsGcpUserAccessBindingsCreate](docs/organizations/README.md#accesscontextmanagerorganizationsgcpuseraccessbindingscreate) - Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.
* [accesscontextmanagerOrganizationsGcpUserAccessBindingsDelete](docs/organizations/README.md#accesscontextmanagerorganizationsgcpuseraccessbindingsdelete) - Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.
* [accesscontextmanagerOrganizationsGcpUserAccessBindingsGet](docs/organizations/README.md#accesscontextmanagerorganizationsgcpuseraccessbindingsget) - Gets the GcpUserAccessBinding with the given name.
* [accesscontextmanagerOrganizationsGcpUserAccessBindingsList](docs/organizations/README.md#accesscontextmanagerorganizationsgcpuseraccessbindingslist) - Lists all GcpUserAccessBindings for a Google Cloud organization.
* [accesscontextmanagerOrganizationsGcpUserAccessBindingsPatch](docs/organizations/README.md#accesscontextmanagerorganizationsgcpuseraccessbindingspatch) - Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
