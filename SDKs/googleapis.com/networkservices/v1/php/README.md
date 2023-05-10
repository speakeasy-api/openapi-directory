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
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\EndpointMatcher;
use \OpenAPI\OpenAPI\Models\Shared\EndpointMatcherMetadataLabelMatcher;
use \OpenAPI\OpenAPI\Models\Shared\EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointMatcherMetadataLabelMatcherMetadataLabels;
use \OpenAPI\OpenAPI\Models\Shared\TrafficPortSelector;
use \OpenAPI\OpenAPI\Models\Shared\EndpointPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->endpointPolicyInput = new EndpointPolicyInput();
    $request->endpointPolicyInput->authorizationPolicy = 'provident';
    $request->endpointPolicyInput->clientTlsPolicy = 'distinctio';
    $request->endpointPolicyInput->description = 'quibusdam';
    $request->endpointPolicyInput->endpointMatcher = new EndpointMatcher();
    $request->endpointPolicyInput->endpointMatcher->metadataLabelMatcher = new EndpointMatcherMetadataLabelMatcher();
    $request->endpointPolicyInput->endpointMatcher->metadataLabelMatcher->metadataLabelMatchCriteria = EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum::MATCH_ANY;
    $request->endpointPolicyInput->endpointMatcher->metadataLabelMatcher->metadataLabels = [
        new EndpointMatcherMetadataLabelMatcherMetadataLabels(),
        new EndpointMatcherMetadataLabelMatcherMetadataLabels(),
        new EndpointMatcherMetadataLabelMatcherMetadataLabels(),
        new EndpointMatcherMetadataLabelMatcherMetadataLabels(),
    ];
    $request->endpointPolicyInput->labels = [
        'illum' => 'vel',
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->endpointPolicyInput->name = 'Raquel Bednar';
    $request->endpointPolicyInput->serverTlsPolicy = 'suscipit';
    $request->endpointPolicyInput->trafficPortSelector = new TrafficPortSelector();
    $request->endpointPolicyInput->trafficPortSelector->ports = [
        'minus',
        'placeat',
    ];
    $request->endpointPolicyInput->type = EndpointPolicyTypeEnum::SIDECAR_PROXY;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->endpointPolicyId = 'recusandae';
    $request->fields = 'temporibus';
    $request->key = 'ab';
    $request->oauthToken = 'quis';
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsEndpointPoliciesCreate($request, $requestSecurity);

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

* [networkservicesProjectsLocationsEndpointPoliciesCreate](docs/projects/README.md#networkservicesprojectslocationsendpointpoliciescreate) - Creates a new EndpointPolicy in a given project and location.
* [networkservicesProjectsLocationsEndpointPoliciesList](docs/projects/README.md#networkservicesprojectslocationsendpointpolicieslist) - Lists EndpointPolicies in a given project and location.
* [networkservicesProjectsLocationsGatewaysCreate](docs/projects/README.md#networkservicesprojectslocationsgatewayscreate) - Creates a new Gateway in a given project and location.
* [networkservicesProjectsLocationsGatewaysList](docs/projects/README.md#networkservicesprojectslocationsgatewayslist) - Lists Gateways in a given project and location.
* [networkservicesProjectsLocationsGrpcRoutesCreate](docs/projects/README.md#networkservicesprojectslocationsgrpcroutescreate) - Creates a new GrpcRoute in a given project and location.
* [networkservicesProjectsLocationsGrpcRoutesList](docs/projects/README.md#networkservicesprojectslocationsgrpcrouteslist) - Lists GrpcRoutes in a given project and location.
* [networkservicesProjectsLocationsHttpRoutesCreate](docs/projects/README.md#networkservicesprojectslocationshttproutescreate) - Creates a new HttpRoute in a given project and location.
* [networkservicesProjectsLocationsHttpRoutesList](docs/projects/README.md#networkservicesprojectslocationshttprouteslist) - Lists HttpRoute in a given project and location.
* [networkservicesProjectsLocationsList](docs/projects/README.md#networkservicesprojectslocationslist) - Lists information about the supported locations for this service.
* [networkservicesProjectsLocationsMeshesCreate](docs/projects/README.md#networkservicesprojectslocationsmeshescreate) - Creates a new Mesh in a given project and location.
* [networkservicesProjectsLocationsMeshesList](docs/projects/README.md#networkservicesprojectslocationsmesheslist) - Lists Meshes in a given project and location.
* [networkservicesProjectsLocationsOperationsCancel](docs/projects/README.md#networkservicesprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [networkservicesProjectsLocationsOperationsList](docs/projects/README.md#networkservicesprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [networkservicesProjectsLocationsServiceBindingsCreate](docs/projects/README.md#networkservicesprojectslocationsservicebindingscreate) - Creates a new ServiceBinding in a given project and location.
* [networkservicesProjectsLocationsServiceBindingsGetIamPolicy](docs/projects/README.md#networkservicesprojectslocationsservicebindingsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [networkservicesProjectsLocationsServiceBindingsList](docs/projects/README.md#networkservicesprojectslocationsservicebindingslist) - Lists ServiceBinding in a given project and location.
* [networkservicesProjectsLocationsServiceBindingsSetIamPolicy](docs/projects/README.md#networkservicesprojectslocationsservicebindingssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [networkservicesProjectsLocationsServiceBindingsTestIamPermissions](docs/projects/README.md#networkservicesprojectslocationsservicebindingstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [networkservicesProjectsLocationsTcpRoutesCreate](docs/projects/README.md#networkservicesprojectslocationstcproutescreate) - Creates a new TcpRoute in a given project and location.
* [networkservicesProjectsLocationsTcpRoutesList](docs/projects/README.md#networkservicesprojectslocationstcprouteslist) - Lists TcpRoute in a given project and location.
* [networkservicesProjectsLocationsTlsRoutesCreate](docs/projects/README.md#networkservicesprojectslocationstlsroutescreate) - Creates a new TlsRoute in a given project and location.
* [networkservicesProjectsLocationsTlsRoutesDelete](docs/projects/README.md#networkservicesprojectslocationstlsroutesdelete) - Deletes a single TlsRoute.
* [networkservicesProjectsLocationsTlsRoutesGet](docs/projects/README.md#networkservicesprojectslocationstlsroutesget) - Gets details of a single TlsRoute.
* [networkservicesProjectsLocationsTlsRoutesList](docs/projects/README.md#networkservicesprojectslocationstlsrouteslist) - Lists TlsRoute in a given project and location.
* [networkservicesProjectsLocationsTlsRoutesPatch](docs/projects/README.md#networkservicesprojectslocationstlsroutespatch) - Updates the parameters of a single TlsRoute.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
