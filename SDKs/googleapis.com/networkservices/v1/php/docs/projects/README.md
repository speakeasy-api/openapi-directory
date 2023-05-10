# projects

### Available Operations

* [networkservicesProjectsLocationsEndpointPoliciesCreate](#networkservicesprojectslocationsendpointpoliciescreate) - Creates a new EndpointPolicy in a given project and location.
* [networkservicesProjectsLocationsEndpointPoliciesList](#networkservicesprojectslocationsendpointpolicieslist) - Lists EndpointPolicies in a given project and location.
* [networkservicesProjectsLocationsGatewaysCreate](#networkservicesprojectslocationsgatewayscreate) - Creates a new Gateway in a given project and location.
* [networkservicesProjectsLocationsGatewaysList](#networkservicesprojectslocationsgatewayslist) - Lists Gateways in a given project and location.
* [networkservicesProjectsLocationsGrpcRoutesCreate](#networkservicesprojectslocationsgrpcroutescreate) - Creates a new GrpcRoute in a given project and location.
* [networkservicesProjectsLocationsGrpcRoutesList](#networkservicesprojectslocationsgrpcrouteslist) - Lists GrpcRoutes in a given project and location.
* [networkservicesProjectsLocationsHttpRoutesCreate](#networkservicesprojectslocationshttproutescreate) - Creates a new HttpRoute in a given project and location.
* [networkservicesProjectsLocationsHttpRoutesList](#networkservicesprojectslocationshttprouteslist) - Lists HttpRoute in a given project and location.
* [networkservicesProjectsLocationsList](#networkservicesprojectslocationslist) - Lists information about the supported locations for this service.
* [networkservicesProjectsLocationsMeshesCreate](#networkservicesprojectslocationsmeshescreate) - Creates a new Mesh in a given project and location.
* [networkservicesProjectsLocationsMeshesList](#networkservicesprojectslocationsmesheslist) - Lists Meshes in a given project and location.
* [networkservicesProjectsLocationsOperationsCancel](#networkservicesprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [networkservicesProjectsLocationsOperationsList](#networkservicesprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [networkservicesProjectsLocationsServiceBindingsCreate](#networkservicesprojectslocationsservicebindingscreate) - Creates a new ServiceBinding in a given project and location.
* [networkservicesProjectsLocationsServiceBindingsGetIamPolicy](#networkservicesprojectslocationsservicebindingsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [networkservicesProjectsLocationsServiceBindingsList](#networkservicesprojectslocationsservicebindingslist) - Lists ServiceBinding in a given project and location.
* [networkservicesProjectsLocationsServiceBindingsSetIamPolicy](#networkservicesprojectslocationsservicebindingssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [networkservicesProjectsLocationsServiceBindingsTestIamPermissions](#networkservicesprojectslocationsservicebindingstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [networkservicesProjectsLocationsTcpRoutesCreate](#networkservicesprojectslocationstcproutescreate) - Creates a new TcpRoute in a given project and location.
* [networkservicesProjectsLocationsTcpRoutesList](#networkservicesprojectslocationstcprouteslist) - Lists TcpRoute in a given project and location.
* [networkservicesProjectsLocationsTlsRoutesCreate](#networkservicesprojectslocationstlsroutescreate) - Creates a new TlsRoute in a given project and location.
* [networkservicesProjectsLocationsTlsRoutesDelete](#networkservicesprojectslocationstlsroutesdelete) - Deletes a single TlsRoute.
* [networkservicesProjectsLocationsTlsRoutesGet](#networkservicesprojectslocationstlsroutesget) - Gets details of a single TlsRoute.
* [networkservicesProjectsLocationsTlsRoutesList](#networkservicesprojectslocationstlsrouteslist) - Lists TlsRoute in a given project and location.
* [networkservicesProjectsLocationsTlsRoutesPatch](#networkservicesprojectslocationstlsroutespatch) - Updates the parameters of a single TlsRoute.

## networkservicesProjectsLocationsEndpointPoliciesCreate

Creates a new EndpointPolicy in a given project and location.

### Example Usage

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
    $request->endpointPolicyInput->authorizationPolicy = 'sapiente';
    $request->endpointPolicyInput->clientTlsPolicy = 'quo';
    $request->endpointPolicyInput->description = 'odit';
    $request->endpointPolicyInput->endpointMatcher = new EndpointMatcher();
    $request->endpointPolicyInput->endpointMatcher->metadataLabelMatcher = new EndpointMatcherMetadataLabelMatcher();
    $request->endpointPolicyInput->endpointMatcher->metadataLabelMatcher->metadataLabelMatchCriteria = EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum::MATCH_ALL;
    $request->endpointPolicyInput->endpointMatcher->metadataLabelMatcher->metadataLabels = [
        new EndpointMatcherMetadataLabelMatcherMetadataLabels(),
        new EndpointMatcherMetadataLabelMatcherMetadataLabels(),
        new EndpointMatcherMetadataLabelMatcherMetadataLabels(),
        new EndpointMatcherMetadataLabelMatcherMetadataLabels(),
    ];
    $request->endpointPolicyInput->labels = [
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
        'dolorum' => 'dicta',
    ];
    $request->endpointPolicyInput->name = 'Luke McCullough';
    $request->endpointPolicyInput->serverTlsPolicy = 'hic';
    $request->endpointPolicyInput->trafficPortSelector = new TrafficPortSelector();
    $request->endpointPolicyInput->trafficPortSelector->ports = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->endpointPolicyInput->type = EndpointPolicyTypeEnum::ENDPOINT_POLICY_TYPE_UNSPECIFIED;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->endpointPolicyId = 'esse';
    $request->fields = 'ipsum';
    $request->key = 'excepturi';
    $request->oauthToken = 'aspernatur';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'sed';

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

## networkservicesProjectsLocationsEndpointPoliciesList

Lists EndpointPolicies in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsEndpointPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsEndpointPoliciesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsEndpointPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'hic';
    $request->key = 'saepe';
    $request->oauthToken = 'fuga';
    $request->pageSize = 449950;
    $request->pageToken = 'corporis';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new NetworkservicesProjectsLocationsEndpointPoliciesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsEndpointPoliciesList($request, $requestSecurity);

    if ($response->listEndpointPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsGatewaysCreate

Creates a new Gateway in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsGatewaysCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GatewayInput;
use \OpenAPI\OpenAPI\Models\Shared\GatewayTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsGatewaysCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsGatewaysCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->gatewayInput = new GatewayInput();
    $request->gatewayInput->addresses = [
        'reiciendis',
    ];
    $request->gatewayInput->certificateUrls = [
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->gatewayInput->description = 'dolorem';
    $request->gatewayInput->gatewaySecurityPolicy = 'corporis';
    $request->gatewayInput->labels = [
        'nobis' => 'enim',
    ];
    $request->gatewayInput->name = 'Corey Hane III';
    $request->gatewayInput->network = 'culpa';
    $request->gatewayInput->ports = [
        958950,
        102044,
        652790,
        208876,
    ];
    $request->gatewayInput->scope = 'culpa';
    $request->gatewayInput->serverTlsPolicy = 'consequuntur';
    $request->gatewayInput->subnetwork = 'repellat';
    $request->gatewayInput->type = GatewayTypeEnum::OPEN_MESH;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'quam';
    $request->gatewayId = 'molestiae';
    $request->key = 'velit';
    $request->oauthToken = 'error';
    $request->parent = 'quia';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new NetworkservicesProjectsLocationsGatewaysCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsGatewaysCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsGatewaysList

Lists Gateways in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsGatewaysListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsGatewaysListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsGatewaysListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'sequi';
    $request->key = 'tenetur';
    $request->oauthToken = 'ipsam';
    $request->pageSize = 662527;
    $request->pageToken = 'possimus';
    $request->parent = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new NetworkservicesProjectsLocationsGatewaysListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsGatewaysList($request, $requestSecurity);

    if ($response->listGatewaysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsGrpcRoutesCreate

Creates a new GrpcRoute in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsGrpcRoutesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteInput;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteRouteRule;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteDestination;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteFaultInjectionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteFaultInjectionPolicyAbort;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteFaultInjectionPolicyDelay;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteRetryPolicy;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteRouteMatch;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteHeaderMatch;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteHeaderMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteMethodMatch;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteMethodMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsGrpcRoutesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->grpcRouteInput = new GrpcRouteInput();
    $request->grpcRouteInput->description = 'quasi';
    $request->grpcRouteInput->gateways = [
        'voluptatibus',
        'vero',
        'nihil',
        'praesentium',
    ];
    $request->grpcRouteInput->hostnames = [
        'ipsa',
        'omnis',
        'voluptate',
        'cum',
    ];
    $request->grpcRouteInput->labels = [
        'doloremque' => 'reprehenderit',
    ];
    $request->grpcRouteInput->meshes = [
        'maiores',
        'dicta',
    ];
    $request->grpcRouteInput->name = 'Miss Valerie Kshlerin';
    $request->grpcRouteInput->rules = [
        new GrpcRouteRouteRule(),
        new GrpcRouteRouteRule(),
        new GrpcRouteRouteRule(),
        new GrpcRouteRouteRule(),
    ];
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'ipsum';
    $request->grpcRouteId = 'quidem';
    $request->key = 'molestias';
    $request->oauthToken = 'excepturi';
    $request->parent = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsGrpcRoutesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsGrpcRoutesList

Lists GrpcRoutes in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsGrpcRoutesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsGrpcRoutesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsGrpcRoutesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'veritatis';
    $request->key = 'itaque';
    $request->oauthToken = 'incidunt';
    $request->pageSize = 318569;
    $request->pageToken = 'consequatur';
    $request->parent = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new NetworkservicesProjectsLocationsGrpcRoutesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsGrpcRoutesList($request, $requestSecurity);

    if ($response->listGrpcRoutesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsHttpRoutesCreate

Creates a new HttpRoute in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsHttpRoutesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteInput;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteRouteRule;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteCorsPolicy;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteDestination;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteFaultInjectionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteFaultInjectionPolicyAbort;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteFaultInjectionPolicyDelay;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteRedirect;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteRedirectResponseCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteHeaderModifier;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteRequestMirrorPolicy;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteRetryPolicy;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteURLRewrite;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteRouteMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteHeaderMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteHeaderMatchIntegerRange;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteQueryParameterMatch;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsHttpRoutesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsHttpRoutesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->httpRouteInput = new HttpRouteInput();
    $request->httpRouteInput->description = 'quibusdam';
    $request->httpRouteInput->gateways = [
        'modi',
        'qui',
    ];
    $request->httpRouteInput->hostnames = [
        'cupiditate',
        'quos',
    ];
    $request->httpRouteInput->labels = [
        'magni' => 'assumenda',
    ];
    $request->httpRouteInput->meshes = [
        'alias',
        'fugit',
    ];
    $request->httpRouteInput->name = 'Marshall Glover';
    $request->httpRouteInput->rules = [
        new HttpRouteRouteRule(),
        new HttpRouteRouteRule(),
    ];
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->fields = 'eligendi';
    $request->httpRouteId = 'sint';
    $request->key = 'aliquid';
    $request->oauthToken = 'provident';
    $request->parent = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new NetworkservicesProjectsLocationsHttpRoutesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsHttpRoutesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsHttpRoutesList

Lists HttpRoute in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsHttpRoutesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsHttpRoutesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsHttpRoutesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'in';
    $request->key = 'illum';
    $request->oauthToken = 'maiores';
    $request->pageSize = 699479;
    $request->pageToken = 'dicta';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new NetworkservicesProjectsLocationsHttpRoutesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsHttpRoutesList($request, $requestSecurity);

    if ($response->listHttpRoutesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'non';
    $request->fields = 'occaecati';
    $request->filter = 'enim';
    $request->key = 'accusamus';
    $request->name = 'Abraham McKenzie';
    $request->oauthToken = 'blanditiis';
    $request->pageSize = 533206;
    $request->pageToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new NetworkservicesProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsMeshesCreate

Creates a new Mesh in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsMeshesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeshInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsMeshesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsMeshesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->meshInput = new MeshInput();
    $request->meshInput->description = 'natus';
    $request->meshInput->interceptionPort = 606393;
    $request->meshInput->labels = [
        'perferendis' => 'nihil',
        'magnam' => 'distinctio',
    ];
    $request->meshInput->name = 'Leroy Greenfelder';
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vero';
    $request->fields = 'aspernatur';
    $request->key = 'architecto';
    $request->meshId = 'magnam';
    $request->oauthToken = 'et';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new NetworkservicesProjectsLocationsMeshesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsMeshesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsMeshesList

Lists Meshes in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsMeshesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsMeshesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsMeshesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'mollitia';
    $request->key = 'ad';
    $request->oauthToken = 'eum';
    $request->pageSize = 221262;
    $request->pageToken = 'necessitatibus';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new NetworkservicesProjectsLocationsMeshesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsMeshesList($request, $requestSecurity);

    if ($response->listMeshesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'eius' => 'maxime',
        'deleniti' => 'facilis',
        'in' => 'architecto',
        'architecto' => 'repudiandae',
    ];
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'repellat';
    $request->key = 'quibusdam';
    $request->name = 'Mr. Jenna Stroman';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new NetworkservicesProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'excepturi';
    $request->filter = 'odit';
    $request->key = 'ea';
    $request->name = 'Virginia Wunsch';
    $request->oauthToken = 'voluptate';
    $request->pageSize = 420075;
    $request->pageToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new NetworkservicesProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsServiceBindingsCreate

Creates a new ServiceBinding in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsServiceBindingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceBindingInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsServiceBindingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsServiceBindingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->serviceBindingInput = new ServiceBindingInput();
    $request->serviceBindingInput->description = 'perferendis';
    $request->serviceBindingInput->labels = [
        'amet' => 'aut',
        'cumque' => 'corporis',
        'hic' => 'libero',
        'nobis' => 'dolores',
    ];
    $request->serviceBindingInput->name = 'Mrs. Deanna Kuhn';
    $request->serviceBindingInput->service = 'eos';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minus';
    $request->fields = 'quam';
    $request->key = 'dolor';
    $request->oauthToken = 'vero';
    $request->parent = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->serviceBindingId = 'recusandae';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new NetworkservicesProjectsLocationsServiceBindingsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsServiceBindingsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsServiceBindingsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsServiceBindingsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequuntur';
    $request->fields = 'blanditiis';
    $request->key = 'error';
    $request->oauthToken = 'eaque';
    $request->optionsRequestedPolicyVersion = 577229;
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->resource = 'adipisci';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'earum';

    $requestSecurity = new NetworkservicesProjectsLocationsServiceBindingsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsServiceBindingsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsServiceBindingsList

Lists ServiceBinding in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsServiceBindingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsServiceBindingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsServiceBindingsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'pariatur';
    $request->key = 'provident';
    $request->oauthToken = 'nobis';
    $request->pageSize = 730122;
    $request->pageToken = 'delectus';
    $request->parent = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new NetworkservicesProjectsLocationsServiceBindingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsServiceBindingsList($request, $requestSecurity);

    if ($response->listServiceBindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsServiceBindingsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsServiceBindingsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'ipsum';
    $request->setIamPolicyRequest->policy->version = 944373;
    $request->setIamPolicyRequest->updateMask = 'excepturi';
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dignissimos';
    $request->fields = 'reiciendis';
    $request->key = 'amet';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->resource = 'veritatis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new NetworkservicesProjectsLocationsServiceBindingsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsServiceBindingsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsServiceBindingsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'quaerat',
        'accusamus',
    ];
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'natus';
    $request->key = 'eos';
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->resource = 'fugiat';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsServiceBindingsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsTcpRoutesCreate

Creates a new TcpRoute in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsTcpRoutesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TcpRouteInput;
use \OpenAPI\OpenAPI\Models\Shared\TcpRouteRouteRule;
use \OpenAPI\OpenAPI\Models\Shared\TcpRouteRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\TcpRouteRouteDestination;
use \OpenAPI\OpenAPI\Models\Shared\TcpRouteRouteMatch;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsTcpRoutesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsTcpRoutesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->tcpRouteInput = new TcpRouteInput();
    $request->tcpRouteInput->description = 'iusto';
    $request->tcpRouteInput->gateways = [
        'dolorum',
        'deleniti',
    ];
    $request->tcpRouteInput->labels = [
        'necessitatibus' => 'distinctio',
        'asperiores' => 'nihil',
        'ipsum' => 'voluptate',
    ];
    $request->tcpRouteInput->meshes = [
        'saepe',
        'eius',
        'aspernatur',
    ];
    $request->tcpRouteInput->name = 'Wendy Rosenbaum';
    $request->tcpRouteInput->rules = [
        new TcpRouteRouteRule(),
        new TcpRouteRouteRule(),
        new TcpRouteRouteRule(),
        new TcpRouteRouteRule(),
    ];
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'minima';
    $request->key = 'repellendus';
    $request->oauthToken = 'totam';
    $request->parent = 'similique';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->tcpRouteId = 'at';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new NetworkservicesProjectsLocationsTcpRoutesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsTcpRoutesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsTcpRoutesList

Lists TcpRoute in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsTcpRoutesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsTcpRoutesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsTcpRoutesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'qui';
    $request->fields = 'dolorum';
    $request->key = 'a';
    $request->oauthToken = 'esse';
    $request->pageSize = 687488;
    $request->pageToken = 'iusto';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new NetworkservicesProjectsLocationsTcpRoutesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsTcpRoutesList($request, $requestSecurity);

    if ($response->listTcpRoutesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsTlsRoutesCreate

Creates a new TlsRoute in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsTlsRoutesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TlsRouteInput;
use \OpenAPI\OpenAPI\Models\Shared\TlsRouteRouteRule;
use \OpenAPI\OpenAPI\Models\Shared\TlsRouteRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\TlsRouteRouteDestination;
use \OpenAPI\OpenAPI\Models\Shared\TlsRouteRouteMatch;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsTlsRoutesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsTlsRoutesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->tlsRouteInput = new TlsRouteInput();
    $request->tlsRouteInput->description = 'accusamus';
    $request->tlsRouteInput->gateways = [
        'enim',
        'dolorem',
    ];
    $request->tlsRouteInput->meshes = [
        'totam',
        'nihil',
        'sit',
        'expedita',
    ];
    $request->tlsRouteInput->name = 'Jane Kassulke';
    $request->tlsRouteInput->rules = [
        new TlsRouteRouteRule(),
        new TlsRouteRouteRule(),
        new TlsRouteRouteRule(),
    ];
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'qui';
    $request->key = 'cupiditate';
    $request->oauthToken = 'maxime';
    $request->parent = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'soluta';
    $request->tlsRouteId = 'dicta';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new NetworkservicesProjectsLocationsTlsRoutesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsTlsRoutesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsTlsRoutesDelete

Deletes a single TlsRoute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsTlsRoutesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsTlsRoutesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsTlsRoutesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'distinctio';
    $request->fields = 'facilis';
    $request->key = 'aliquid';
    $request->name = 'Felicia Spencer';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'sunt';

    $requestSecurity = new NetworkservicesProjectsLocationsTlsRoutesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsTlsRoutesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsTlsRoutesGet

Gets details of a single TlsRoute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsTlsRoutesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsTlsRoutesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsTlsRoutesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatem';
    $request->fields = 'cumque';
    $request->key = 'soluta';
    $request->name = 'Carl Turner DDS';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'aperiam';

    $requestSecurity = new NetworkservicesProjectsLocationsTlsRoutesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsTlsRoutesGet($request, $requestSecurity);

    if ($response->tlsRoute !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsTlsRoutesList

Lists TlsRoute in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsTlsRoutesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsTlsRoutesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsTlsRoutesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'adipisci';
    $request->key = 'dolorum';
    $request->oauthToken = 'architecto';
    $request->pageSize = 63038;
    $request->pageToken = 'aut';
    $request->parent = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'est';

    $requestSecurity = new NetworkservicesProjectsLocationsTlsRoutesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsTlsRoutesList($request, $requestSecurity);

    if ($response->listTlsRoutesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkservicesProjectsLocationsTlsRoutesPatch

Updates the parameters of a single TlsRoute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsTlsRoutesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TlsRouteInput;
use \OpenAPI\OpenAPI\Models\Shared\TlsRouteRouteRule;
use \OpenAPI\OpenAPI\Models\Shared\TlsRouteRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\TlsRouteRouteDestination;
use \OpenAPI\OpenAPI\Models\Shared\TlsRouteRouteMatch;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkservicesProjectsLocationsTlsRoutesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkservicesProjectsLocationsTlsRoutesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->tlsRouteInput = new TlsRouteInput();
    $request->tlsRouteInput->description = 'porro';
    $request->tlsRouteInput->gateways = [
        'ut',
        'facilis',
        'cupiditate',
        'qui',
    ];
    $request->tlsRouteInput->meshes = [
        'laudantium',
    ];
    $request->tlsRouteInput->name = 'Toni Wolff';
    $request->tlsRouteInput->rules = [
        new TlsRouteRouteRule(),
        new TlsRouteRouteRule(),
        new TlsRouteRouteRule(),
    ];
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'voluptate';
    $request->key = 'consectetur';
    $request->name = 'Roman Kulas';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->updateMask = 'similique';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new NetworkservicesProjectsLocationsTlsRoutesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkservicesProjectsLocationsTlsRoutesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
