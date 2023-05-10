# projects

### Available Operations

* [gkehubProjectsLocationsGlobalMembershipsInitializeHub](#gkehubprojectslocationsglobalmembershipsinitializehub) - Initializes the Hub in this project, which includes creating the default Hub Service Account and the Hub Workload Identity Pool. Initialization is optional, and happens automatically when the first Membership is created. InitializeHub should be called when the first Membership cannot be registered without these resources. A common example is granting the Hub Service Account access to another project, which requires the account to exist first.
* [gkehubProjectsLocationsList](#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [gkehubProjectsLocationsMembershipsCreate](#gkehubprojectslocationsmembershipscreate) - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* [gkehubProjectsLocationsMembershipsGenerateConnectManifest](#gkehubprojectslocationsmembershipsgenerateconnectmanifest) - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* [gkehubProjectsLocationsMembershipsGetIamPolicy](#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkehubProjectsLocationsMembershipsList](#gkehubprojectslocationsmembershipslist) - Lists Memberships in a given project and location.
* [gkehubProjectsLocationsMembershipsPatch](#gkehubprojectslocationsmembershipspatch) - Updates an existing Membership.
* [gkehubProjectsLocationsMembershipsSetIamPolicy](#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkehubProjectsLocationsMembershipsTestIamPermissions](#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [gkehubProjectsLocationsOperationsCancel](#gkehubprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [gkehubProjectsLocationsOperationsDelete](#gkehubprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [gkehubProjectsLocationsOperationsGet](#gkehubprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [gkehubProjectsLocationsOperationsList](#gkehubprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## gkehubProjectsLocationsGlobalMembershipsInitializeHub

Initializes the Hub in this project, which includes creating the default Hub Service Account and the Hub Workload Identity Pool. Initialization is optional, and happens automatically when the first Membership is created. InitializeHub should be called when the first Membership cannot be registered without these resources. A common example is granting the Hub Service Account access to another project, which requires the account to exist first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'minus' => 'placeat',
        'voluptatum' => 'iusto',
    ];
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'temporibus';
    $request->key = 'ab';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->project = 'veritatis';
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsGlobalMembershipsInitializeHub($request, $requestSecurity);

    if ($response->initializeHubResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'at';
    $request->filter = 'at';
    $request->key = 'maiores';
    $request->name = 'Bernadette Schmidt';
    $request->oauthToken = 'porro';
    $request->pageSize = 678880;
    $request->pageToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new GkehubProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsMembershipsCreate

Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MembershipInput;
use \OpenAPI\OpenAPI\Models\Shared\AuthorityInput;
use \OpenAPI\OpenAPI\Models\Shared\MembershipEndpointInput;
use \OpenAPI\OpenAPI\Models\Shared\ApplianceCluster;
use \OpenAPI\OpenAPI\Models\Shared\EdgeCluster;
use \OpenAPI\OpenAPI\Models\Shared\GkeClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\KubernetesResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\ResourceOptions;
use \OpenAPI\OpenAPI\Models\Shared\MultiCloudClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\OnPremClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\OnPremClusterClusterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MembershipInfrastructureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsMembershipsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->membershipInput = new MembershipInput();
    $request->membershipInput->authority = new AuthorityInput();
    $request->membershipInput->authority->issuer = 'deleniti';
    $request->membershipInput->authority->oidcJwks = 'hic';
    $request->membershipInput->endpoint = new MembershipEndpointInput();
    $request->membershipInput->endpoint->applianceCluster = new ApplianceCluster();
    $request->membershipInput->endpoint->applianceCluster->resourceLink = 'optio';
    $request->membershipInput->endpoint->edgeCluster = new EdgeCluster();
    $request->membershipInput->endpoint->edgeCluster->resourceLink = 'totam';
    $request->membershipInput->endpoint->gkeCluster = new GkeClusterInput();
    $request->membershipInput->endpoint->gkeCluster->resourceLink = 'beatae';
    $request->membershipInput->endpoint->kubernetesResource = new KubernetesResourceInput();
    $request->membershipInput->endpoint->kubernetesResource->membershipCrManifest = 'commodi';
    $request->membershipInput->endpoint->kubernetesResource->resourceOptions = new ResourceOptions();
    $request->membershipInput->endpoint->kubernetesResource->resourceOptions->connectVersion = 'molestiae';
    $request->membershipInput->endpoint->kubernetesResource->resourceOptions->k8sVersion = 'modi';
    $request->membershipInput->endpoint->kubernetesResource->resourceOptions->v1beta1Crd = false;
    $request->membershipInput->endpoint->multiCloudCluster = new MultiCloudClusterInput();
    $request->membershipInput->endpoint->multiCloudCluster->resourceLink = 'qui';
    $request->membershipInput->endpoint->onPremCluster = new OnPremClusterInput();
    $request->membershipInput->endpoint->onPremCluster->adminCluster = false;
    $request->membershipInput->endpoint->onPremCluster->clusterType = OnPremClusterClusterTypeEnum::STANDALONE;
    $request->membershipInput->endpoint->onPremCluster->resourceLink = 'cum';
    $request->membershipInput->externalId = 'esse';
    $request->membershipInput->infrastructureType = MembershipInfrastructureTypeEnum::INFRASTRUCTURE_TYPE_UNSPECIFIED;
    $request->membershipInput->labels = [
        'aspernatur' => 'perferendis',
        'ad' => 'natus',
        'sed' => 'iste',
    ];
    $request->membershipInput->monitoringConfig = new MonitoringConfig();
    $request->membershipInput->monitoringConfig->cluster = 'dolor';
    $request->membershipInput->monitoringConfig->clusterHash = 'natus';
    $request->membershipInput->monitoringConfig->kubernetesMetricsPrefix = 'laboriosam';
    $request->membershipInput->monitoringConfig->location = 'hic';
    $request->membershipInput->monitoringConfig->projectId = 'saepe';
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corporis';
    $request->fields = 'iste';
    $request->key = 'iure';
    $request->membershipId = 'saepe';
    $request->oauthToken = 'quidem';
    $request->parent = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'est';

    $requestSecurity = new GkehubProjectsLocationsMembershipsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsMembershipsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsMembershipsGenerateConnectManifest

Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'corporis';
    $request->imagePullSecretContent = 'explicabo';
    $request->isUpgrade = false;
    $request->key = 'nobis';
    $request->name = 'Guadalupe Hickle';
    $request->namespace = 'accusantium';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->proxy = 'culpa';
    $request->quotaUser = 'doloribus';
    $request->registry = 'sapiente';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'mollitia';
    $request->version = 'dolorem';

    $requestSecurity = new GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsMembershipsGenerateConnectManifest($request, $requestSecurity);

    if ($response->generateConnectManifestResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsMembershipsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsMembershipsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'occaecati';
    $request->key = 'numquam';
    $request->oauthToken = 'commodi';
    $request->optionsRequestedPolicyVersion = 466311;
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->resource = 'velit';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'quia';

    $requestSecurity = new GkehubProjectsLocationsMembershipsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsMembershipsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsMembershipsList

Lists Memberships in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsMembershipsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'animi';
    $request->fields = 'enim';
    $request->filter = 'odit';
    $request->key = 'quo';
    $request->oauthToken = 'sequi';
    $request->orderBy = 'tenetur';
    $request->pageSize = 368725;
    $request->pageToken = 'id';
    $request->parent = 'possimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'error';

    $requestSecurity = new GkehubProjectsLocationsMembershipsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsMembershipsList($request, $requestSecurity);

    if ($response->listMembershipsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsMembershipsPatch

Updates an existing Membership.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MembershipInput;
use \OpenAPI\OpenAPI\Models\Shared\AuthorityInput;
use \OpenAPI\OpenAPI\Models\Shared\MembershipEndpointInput;
use \OpenAPI\OpenAPI\Models\Shared\ApplianceCluster;
use \OpenAPI\OpenAPI\Models\Shared\EdgeCluster;
use \OpenAPI\OpenAPI\Models\Shared\GkeClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\KubernetesResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\ResourceOptions;
use \OpenAPI\OpenAPI\Models\Shared\MultiCloudClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\OnPremClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\OnPremClusterClusterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MembershipInfrastructureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsMembershipsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->membershipInput = new MembershipInput();
    $request->membershipInput->authority = new AuthorityInput();
    $request->membershipInput->authority->issuer = 'laborum';
    $request->membershipInput->authority->oidcJwks = 'quasi';
    $request->membershipInput->endpoint = new MembershipEndpointInput();
    $request->membershipInput->endpoint->applianceCluster = new ApplianceCluster();
    $request->membershipInput->endpoint->applianceCluster->resourceLink = 'reiciendis';
    $request->membershipInput->endpoint->edgeCluster = new EdgeCluster();
    $request->membershipInput->endpoint->edgeCluster->resourceLink = 'voluptatibus';
    $request->membershipInput->endpoint->gkeCluster = new GkeClusterInput();
    $request->membershipInput->endpoint->gkeCluster->resourceLink = 'vero';
    $request->membershipInput->endpoint->kubernetesResource = new KubernetesResourceInput();
    $request->membershipInput->endpoint->kubernetesResource->membershipCrManifest = 'nihil';
    $request->membershipInput->endpoint->kubernetesResource->resourceOptions = new ResourceOptions();
    $request->membershipInput->endpoint->kubernetesResource->resourceOptions->connectVersion = 'praesentium';
    $request->membershipInput->endpoint->kubernetesResource->resourceOptions->k8sVersion = 'voluptatibus';
    $request->membershipInput->endpoint->kubernetesResource->resourceOptions->v1beta1Crd = false;
    $request->membershipInput->endpoint->multiCloudCluster = new MultiCloudClusterInput();
    $request->membershipInput->endpoint->multiCloudCluster->resourceLink = 'ipsa';
    $request->membershipInput->endpoint->onPremCluster = new OnPremClusterInput();
    $request->membershipInput->endpoint->onPremCluster->adminCluster = false;
    $request->membershipInput->endpoint->onPremCluster->clusterType = OnPremClusterClusterTypeEnum::STANDALONE;
    $request->membershipInput->endpoint->onPremCluster->resourceLink = 'voluptate';
    $request->membershipInput->externalId = 'cum';
    $request->membershipInput->infrastructureType = MembershipInfrastructureTypeEnum::INFRASTRUCTURE_TYPE_UNSPECIFIED;
    $request->membershipInput->labels = [
        'reprehenderit' => 'ut',
    ];
    $request->membershipInput->monitoringConfig = new MonitoringConfig();
    $request->membershipInput->monitoringConfig->cluster = 'maiores';
    $request->membershipInput->monitoringConfig->clusterHash = 'dicta';
    $request->membershipInput->monitoringConfig->kubernetesMetricsPrefix = 'corporis';
    $request->membershipInput->monitoringConfig->location = 'dolore';
    $request->membershipInput->monitoringConfig->projectId = 'iusto';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->key = 'commodi';
    $request->name = 'Eric Emmerich';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->updateMask = 'modi';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new GkehubProjectsLocationsMembershipsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsMembershipsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsMembershipsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsMembershipsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'sint';
    $request->setIamPolicyRequest->policy->version = 83112;
    $request->setIamPolicyRequest->updateMask = 'itaque';
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'est';
    $request->key = 'quibusdam';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->resource = 'distinctio';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new GkehubProjectsLocationsMembershipsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsMembershipsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsMembershipsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsMembershipsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'aliquid',
    ];
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'magni';
    $request->key = 'assumenda';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->resource = 'fugit';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new GkehubProjectsLocationsMembershipsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsMembershipsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'tempore' => 'labore',
        'delectus' => 'eum',
        'non' => 'eligendi',
    ];
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'necessitatibus';
    $request->key = 'sint';
    $request->name = 'Curtis Toy';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new GkehubProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'facere';
    $request->force = false;
    $request->key = 'ea';
    $request->name = 'Kayla Thompson';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new GkehubProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'blanditiis';
    $request->fields = 'deleniti';
    $request->key = 'sapiente';
    $request->name = 'Sandy Huels';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new GkehubProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->fields = 'labore';
    $request->filter = 'suscipit';
    $request->key = 'natus';
    $request->name = 'Duane Thiel II';
    $request->oauthToken = 'et';
    $request->pageSize = 569965;
    $request->pageToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new GkehubProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
