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
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddAddressGroupItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addAddressGroupItemsRequest = new AddAddressGroupItemsRequest();
    $request->addAddressGroupItemsRequest->items = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->addAddressGroupItemsRequest->requestId = 'nulla';
    $request->accessToken = 'corrupti';
    $request->addressGroup = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'deserunt';
    $request->key = 'suscipit';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsAddressGroupsAddItems($request, $requestSecurity);

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


### [projects](docs/projects/README.md)

* [networksecurityProjectsLocationsAddressGroupsAddItems](docs/projects/README.md#networksecurityprojectslocationsaddressgroupsadditems) - Adds items to an address group.
* [networksecurityProjectsLocationsAddressGroupsCloneItems](docs/projects/README.md#networksecurityprojectslocationsaddressgroupscloneitems) - Clones items from one address group to another.
* [networksecurityProjectsLocationsAddressGroupsCreate](docs/projects/README.md#networksecurityprojectslocationsaddressgroupscreate) - Creates a new address group in a given project and location.
* [networksecurityProjectsLocationsAddressGroupsList](docs/projects/README.md#networksecurityprojectslocationsaddressgroupslist) - Lists address groups in a given project and location.
* [networksecurityProjectsLocationsAddressGroupsListReferences](docs/projects/README.md#networksecurityprojectslocationsaddressgroupslistreferences) - Lists references of an address group.
* [networksecurityProjectsLocationsAddressGroupsRemoveItems](docs/projects/README.md#networksecurityprojectslocationsaddressgroupsremoveitems) - Removes items from an address group.
* [networksecurityProjectsLocationsAuthorizationPoliciesCreate](docs/projects/README.md#networksecurityprojectslocationsauthorizationpoliciescreate) - Creates a new AuthorizationPolicy in a given project and location.
* [networksecurityProjectsLocationsAuthorizationPoliciesList](docs/projects/README.md#networksecurityprojectslocationsauthorizationpolicieslist) - Lists AuthorizationPolicies in a given project and location.
* [networksecurityProjectsLocationsClientTlsPoliciesCreate](docs/projects/README.md#networksecurityprojectslocationsclienttlspoliciescreate) - Creates a new ClientTlsPolicy in a given project and location.
* [networksecurityProjectsLocationsClientTlsPoliciesList](docs/projects/README.md#networksecurityprojectslocationsclienttlspolicieslist) - Lists ClientTlsPolicies in a given project and location.
* [networksecurityProjectsLocationsGatewaySecurityPoliciesCreate](docs/projects/README.md#networksecurityprojectslocationsgatewaysecuritypoliciescreate) - Creates a new GatewaySecurityPolicy in a given project and location.
* [networksecurityProjectsLocationsGatewaySecurityPoliciesList](docs/projects/README.md#networksecurityprojectslocationsgatewaysecuritypolicieslist) - Lists GatewaySecurityPolicies in a given project and location.
* [networksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreate](docs/projects/README.md#networksecurityprojectslocationsgatewaysecuritypoliciesrulescreate) - Creates a new GatewaySecurityPolicy in a given project and location.
* [networksecurityProjectsLocationsGatewaySecurityPoliciesRulesList](docs/projects/README.md#networksecurityprojectslocationsgatewaysecuritypoliciesruleslist) - Lists GatewaySecurityPolicyRules in a given project and location.
* [networksecurityProjectsLocationsList](docs/projects/README.md#networksecurityprojectslocationslist) - Lists information about the supported locations for this service.
* [networksecurityProjectsLocationsOperationsCancel](docs/projects/README.md#networksecurityprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [networksecurityProjectsLocationsOperationsList](docs/projects/README.md#networksecurityprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [networksecurityProjectsLocationsServerTlsPoliciesCreate](docs/projects/README.md#networksecurityprojectslocationsservertlspoliciescreate) - Creates a new ServerTlsPolicy in a given project and location.
* [networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy](docs/projects/README.md#networksecurityprojectslocationsservertlspoliciesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [networksecurityProjectsLocationsServerTlsPoliciesList](docs/projects/README.md#networksecurityprojectslocationsservertlspolicieslist) - Lists ServerTlsPolicies in a given project and location.
* [networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy](docs/projects/README.md#networksecurityprojectslocationsservertlspoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions](docs/projects/README.md#networksecurityprojectslocationsservertlspoliciestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [networksecurityProjectsLocationsTlsInspectionPoliciesCreate](docs/projects/README.md#networksecurityprojectslocationstlsinspectionpoliciescreate) - Creates a new TlsInspectionPolicy in a given project and location.
* [networksecurityProjectsLocationsTlsInspectionPoliciesList](docs/projects/README.md#networksecurityprojectslocationstlsinspectionpolicieslist) - Lists TlsInspectionPolicies in a given project and location.
* [networksecurityProjectsLocationsUrlListsCreate](docs/projects/README.md#networksecurityprojectslocationsurllistscreate) - Creates a new UrlList in a given project and location.
* [networksecurityProjectsLocationsUrlListsDelete](docs/projects/README.md#networksecurityprojectslocationsurllistsdelete) - Deletes a single UrlList.
* [networksecurityProjectsLocationsUrlListsGet](docs/projects/README.md#networksecurityprojectslocationsurllistsget) - Gets details of a single UrlList.
* [networksecurityProjectsLocationsUrlListsList](docs/projects/README.md#networksecurityprojectslocationsurllistslist) - Lists UrlLists in a given project and location.
* [networksecurityProjectsLocationsUrlListsPatch](docs/projects/README.md#networksecurityprojectslocationsurllistspatch) - Updates the parameters of a single UrlList.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
