# projects

### Available Operations

* [gkehubProjectsLocationsFeaturesCreate](#gkehubprojectslocationsfeaturescreate) - Adds a new Feature.
* [gkehubProjectsLocationsFeaturesList](#gkehubprojectslocationsfeatureslist) - Lists Features in a given project and location.
* [gkehubProjectsLocationsFleetsCreate](#gkehubprojectslocationsfleetscreate) - Creates a fleet.
* [gkehubProjectsLocationsFleetsList](#gkehubprojectslocationsfleetslist) - Returns all fleets within an organization or a project that the caller has access to.
* [gkehubProjectsLocationsList](#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [gkehubProjectsLocationsMembershipsBindingsCreate](#gkehubprojectslocationsmembershipsbindingscreate) - Creates a MembershipBinding.
* [gkehubProjectsLocationsMembershipsBindingsList](#gkehubprojectslocationsmembershipsbindingslist) - Lists MembershipBindings.
* [gkehubProjectsLocationsMembershipsGetIamPolicy](#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkehubProjectsLocationsMembershipsSetIamPolicy](#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkehubProjectsLocationsMembershipsTestIamPermissions](#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [gkehubProjectsLocationsNamespacesCreate](#gkehubprojectslocationsnamespacescreate) - Creates a fleet namespace.
* [gkehubProjectsLocationsNamespacesList](#gkehubprojectslocationsnamespaceslist) - Lists fleet namespaces.
* [gkehubProjectsLocationsNamespacesRbacrolebindingsCreate](#gkehubprojectslocationsnamespacesrbacrolebindingscreate) - Creates a RBACRoleBinding.
* [gkehubProjectsLocationsNamespacesRbacrolebindingsList](#gkehubprojectslocationsnamespacesrbacrolebindingslist) - Lists RBACRoleBinding.
* [gkehubProjectsLocationsOperationsCancel](#gkehubprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [gkehubProjectsLocationsOperationsList](#gkehubprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [gkehubProjectsLocationsScopesCreate](#gkehubprojectslocationsscopescreate) - Creates a Scope.
* [gkehubProjectsLocationsScopesDelete](#gkehubprojectslocationsscopesdelete) - Deletes a Scope.
* [gkehubProjectsLocationsScopesGet](#gkehubprojectslocationsscopesget) - Returns the details of a Scope.
* [gkehubProjectsLocationsScopesList](#gkehubprojectslocationsscopeslist) - Lists Scopes.
* [gkehubProjectsLocationsScopesPatch](#gkehubprojectslocationsscopespatch) - Updates a scopes.

## gkehubProjectsLocationsFeaturesCreate

Adds a new Feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsFeaturesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureInput;
use \OpenAPI\OpenAPI\Models\Shared\CommonFleetDefaultMemberConfigSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\IdentityServiceMembershipSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\IdentityServiceAuthMethodInput;
use \OpenAPI\OpenAPI\Models\Shared\IdentityServiceAzureADConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\IdentityServiceGoogleConfig;
use \OpenAPI\OpenAPI\Models\Shared\IdentityServiceOidcConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\MembershipFeatureSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\AnthosObservabilityMembershipSpec;
use \OpenAPI\OpenAPI\Models\Shared\MembershipSpec;
use \OpenAPI\OpenAPI\Models\Shared\MembershipSpecSecurityPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementMembershipSpec;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementBinauthzConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementConfigSync;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementGitConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementManaged;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementOciConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementHierarchyControllerConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementPolicyController;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementPolicyControllerMonitoring;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementPolicyControllerMonitoringBackendsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceMeshMembershipSpec;
use \OpenAPI\OpenAPI\Models\Shared\ServiceMeshMembershipSpecControlPlaneEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceMeshMembershipSpecManagementEnum;
use \OpenAPI\OpenAPI\Models\Shared\PolicyControllerMembershipSpec;
use \OpenAPI\OpenAPI\Models\Shared\PolicyControllerHubConfig;
use \OpenAPI\OpenAPI\Models\Shared\PolicyControllerPolicyControllerDeploymentConfig;
use \OpenAPI\OpenAPI\Models\Shared\PolicyControllerResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\PolicyControllerResourceList;
use \OpenAPI\OpenAPI\Models\Shared\PolicyControllerToleration;
use \OpenAPI\OpenAPI\Models\Shared\PolicyControllerHubConfigInstallSpecEnum;
use \OpenAPI\OpenAPI\Models\Shared\PolicyControllerMonitoringConfig;
use \OpenAPI\OpenAPI\Models\Shared\PolicyControllerMonitoringConfigBackendsEnum;
use \OpenAPI\OpenAPI\Models\Shared\PolicyControllerPolicyContentSpec;
use \OpenAPI\OpenAPI\Models\Shared\PolicyControllerBundleInstallSpec;
use \OpenAPI\OpenAPI\Models\Shared\PolicyControllerBundleInstallSpecManagementEnum;
use \OpenAPI\OpenAPI\Models\Shared\PolicyControllerTemplateLibraryConfig;
use \OpenAPI\OpenAPI\Models\Shared\PolicyControllerTemplateLibraryConfigInstallationEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureResourceState;
use \OpenAPI\OpenAPI\Models\Shared\FeatureResourceStateStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommonFeatureSpec;
use \OpenAPI\OpenAPI\Models\Shared\AnthosObservabilityFeatureSpec;
use \OpenAPI\OpenAPI\Models\Shared\FleetObservabilityFeatureSpec;
use \OpenAPI\OpenAPI\Models\Shared\FleetObservabilityLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\FleetObservabilityRoutingConfig;
use \OpenAPI\OpenAPI\Models\Shared\FleetObservabilityRoutingConfigModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MultiClusterIngressFeatureSpec;
use \OpenAPI\OpenAPI\Models\Shared\MultiClusterIngressFeatureSpecBillingEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommonFeatureState;
use \OpenAPI\OpenAPI\Models\Shared\AppDevExperienceFeatureState;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\StatusCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureState;
use \OpenAPI\OpenAPI\Models\Shared\FeatureStateCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsFeaturesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsFeaturesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->featureInput = new FeatureInput();
    $request->featureInput->fleetDefaultMemberConfig = new CommonFleetDefaultMemberConfigSpecInput();
    $request->featureInput->fleetDefaultMemberConfig->identityservice = new IdentityServiceMembershipSpecInput();
    $request->featureInput->fleetDefaultMemberConfig->identityservice->authMethods = [
        new IdentityServiceAuthMethodInput(),
        new IdentityServiceAuthMethodInput(),
        new IdentityServiceAuthMethodInput(),
    ];
    $request->featureInput->labels = [
        'dolorem' => 'corporis',
    ];
    $request->featureInput->membershipSpecs = [
        'nobis' => new MembershipFeatureSpecInput(),
    ];
    $request->featureInput->resourceState = new FeatureResourceState();
    $request->featureInput->resourceState->state = FeatureResourceStateStateEnum::ENABLING;
    $request->featureInput->scopeSpecs = [
        'nemo' => [
            'excepturi' => 'accusantium',
            'iure' => 'culpa',
        ],
        'doloribus' => [
            'architecto' => 'mollitia',
            'dolorem' => 'culpa',
            'consequuntur' => 'repellat',
            'mollitia' => 'occaecati',
        ],
        'numquam' => [
            'quam' => 'molestiae',
            'velit' => 'error',
        ],
    ];
    $request->featureInput->spec = new CommonFeatureSpec();
    $request->featureInput->spec->anthosobservability = new AnthosObservabilityFeatureSpec();
    $request->featureInput->spec->anthosobservability->defaultMembershipSpec = new AnthosObservabilityMembershipSpec();
    $request->featureInput->spec->anthosobservability->defaultMembershipSpec->doNotOptimizeMetrics = false;
    $request->featureInput->spec->anthosobservability->defaultMembershipSpec->enableStackdriverOnApplications = false;
    $request->featureInput->spec->anthosobservability->defaultMembershipSpec->version = 'quia';
    $request->featureInput->spec->appdevexperience = [
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->featureInput->spec->fleetobservability = new FleetObservabilityFeatureSpec();
    $request->featureInput->spec->fleetobservability->loggingConfig = new FleetObservabilityLoggingConfig();
    $request->featureInput->spec->fleetobservability->loggingConfig->defaultConfig = new FleetObservabilityRoutingConfig();
    $request->featureInput->spec->fleetobservability->loggingConfig->defaultConfig->mode = FleetObservabilityRoutingConfigModeEnum::MODE_UNSPECIFIED;
    $request->featureInput->spec->fleetobservability->loggingConfig->fleetScopeLogsConfig = new FleetObservabilityRoutingConfig();
    $request->featureInput->spec->fleetobservability->loggingConfig->fleetScopeLogsConfig->mode = FleetObservabilityRoutingConfigModeEnum::MOVE;
    $request->featureInput->spec->multiclusteringress = new MultiClusterIngressFeatureSpec();
    $request->featureInput->spec->multiclusteringress->billing = MultiClusterIngressFeatureSpecBillingEnum::BILLING_UNSPECIFIED;
    $request->featureInput->spec->multiclusteringress->configMembership = 'tenetur';
    $request->featureInput->state = new CommonFeatureState();
    $request->featureInput->state->appdevexperience = new AppDevExperienceFeatureState();
    $request->featureInput->state->appdevexperience->networkingInstallSucceeded = new Status();
    $request->featureInput->state->appdevexperience->networkingInstallSucceeded->code = StatusCodeEnum::OK;
    $request->featureInput->state->appdevexperience->networkingInstallSucceeded->description = 'id';
    $request->featureInput->state->fleetobservability = [
        'aut' => 'quasi',
        'error' => 'temporibus',
        'laborum' => 'quasi',
        'reiciendis' => 'voluptatibus',
    ];
    $request->featureInput->state->state = new FeatureState();
    $request->featureInput->state->state->code = FeatureStateCodeEnum::ERROR;
    $request->featureInput->state->state->description = 'nihil';
    $request->featureInput->state->state->updateTime = 'praesentium';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->featureId = 'voluptate';
    $request->fields = 'cum';
    $request->key = 'perferendis';
    $request->oauthToken = 'doloremque';
    $request->parent = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ut';
    $request->requestId = 'maiores';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new GkehubProjectsLocationsFeaturesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsFeaturesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsFeaturesList

Lists Features in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsFeaturesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsFeaturesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsFeaturesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'enim';
    $request->filter = 'accusamus';
    $request->key = 'commodi';
    $request->oauthToken = 'repudiandae';
    $request->orderBy = 'quae';
    $request->pageSize = 216822;
    $request->pageToken = 'quidem';
    $request->parent = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new GkehubProjectsLocationsFeaturesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsFeaturesList($request, $requestSecurity);

    if ($response->listFeaturesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsFleetsCreate

Creates a fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsFleetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FleetInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsFleetsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsFleetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->fleetInput = new FleetInput();
    $request->fleetInput->displayName = 'rem';
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->fields = 'sint';
    $request->key = 'veritatis';
    $request->oauthToken = 'itaque';
    $request->parent = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'est';

    $requestSecurity = new GkehubProjectsLocationsFleetsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsFleetsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsFleetsList

Returns all fleets within an organization or a project that the caller has access to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsFleetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsFleetsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsFleetsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->fields = 'quibusdam';
    $request->key = 'labore';
    $request->oauthToken = 'modi';
    $request->pageSize = 183191;
    $request->pageToken = 'aliquid';
    $request->parent = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new GkehubProjectsLocationsFleetsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsFleetsList($request, $requestSecurity);

    if ($response->listFleetsResponse !== null) {
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
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'dolorum';
    $request->filter = 'excepturi';
    $request->key = 'tempora';
    $request->name = 'Geoffrey Green';
    $request->oauthToken = 'non';
    $request->pageSize = 756107;
    $request->pageToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'necessitatibus';

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

## gkehubProjectsLocationsMembershipsBindingsCreate

Creates a MembershipBinding.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsBindingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MembershipBindingInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsBindingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsMembershipsBindingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->membershipBindingInput = new MembershipBindingInput();
    $request->membershipBindingInput->fleet = false;
    $request->membershipBindingInput->name = 'Curtis Toy';
    $request->membershipBindingInput->scope = 'in';
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'rerum';
    $request->key = 'dicta';
    $request->membershipBindingId = 'magnam';
    $request->oauthToken = 'cumque';
    $request->parent = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new GkehubProjectsLocationsMembershipsBindingsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsMembershipsBindingsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsMembershipsBindingsList

Lists MembershipBindings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsBindingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsBindingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsMembershipsBindingsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->key = 'delectus';
    $request->oauthToken = 'quidem';
    $request->pageSize = 588465;
    $request->pageToken = 'nam';
    $request->parent = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new GkehubProjectsLocationsMembershipsBindingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsMembershipsBindingsList($request, $requestSecurity);

    if ($response->listMembershipBindingsResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vel';
    $request->fields = 'natus';
    $request->key = 'omnis';
    $request->oauthToken = 'molestiae';
    $request->optionsRequestedPolicyVersion = 19193;
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->resource = 'magnam';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'id';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'natus';
    $request->setIamPolicyRequest->policy->version = 749170;
    $request->setIamPolicyRequest->updateMask = 'eum';
    $request->accessToken = 'vero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->fields = 'magnam';
    $request->key = 'et';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->resource = 'provident';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'sint';

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
        'reiciendis',
        'mollitia',
        'ad',
    ];
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'necessitatibus';
    $request->fields = 'odit';
    $request->key = 'nemo';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->resource = 'doloribus';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'eius';

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

## gkehubProjectsLocationsNamespacesCreate

Creates a fleet namespace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsNamespacesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamespaceInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsNamespacesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsNamespacesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->namespaceInput = new NamespaceInput();
    $request->namespaceInput->name = 'Mr. Andres King';
    $request->namespaceInput->scope = 'ullam';
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellat';
    $request->fields = 'quibusdam';
    $request->key = 'sed';
    $request->namespaceId = 'saepe';
    $request->oauthToken = 'pariatur';
    $request->parent = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new GkehubProjectsLocationsNamespacesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsNamespacesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsNamespacesList

Lists fleet namespaces.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsNamespacesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsNamespacesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsNamespacesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->fields = 'pariatur';
    $request->key = 'maxime';
    $request->oauthToken = 'ea';
    $request->pageSize = 569101;
    $request->pageToken = 'odit';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new GkehubProjectsLocationsNamespacesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsNamespacesList($request, $requestSecurity);

    if ($response->listNamespacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsNamespacesRbacrolebindingsCreate

Creates a RBACRoleBinding.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsNamespacesRbacrolebindingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RBACRoleBindingInput;
use \OpenAPI\OpenAPI\Models\Shared\Role;
use \OpenAPI\OpenAPI\Models\Shared\RolePredefinedRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsNamespacesRbacrolebindingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsNamespacesRbacrolebindingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->rbacRoleBindingInput = new RBACRoleBindingInput();
    $request->rbacRoleBindingInput->group = 'ipsam';
    $request->rbacRoleBindingInput->name = 'Dr. Stacey Reichert';
    $request->rbacRoleBindingInput->role = new Role();
    $request->rbacRoleBindingInput->role->predefinedRole = RolePredefinedRoleEnum::VIEW;
    $request->rbacRoleBindingInput->user = 'perferendis';
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->fields = 'cumque';
    $request->key = 'corporis';
    $request->oauthToken = 'hic';
    $request->parent = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->rbacrolebindingId = 'dolores';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new GkehubProjectsLocationsNamespacesRbacrolebindingsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsNamespacesRbacrolebindingsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsNamespacesRbacrolebindingsList

Lists RBACRoleBinding.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsNamespacesRbacrolebindingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsNamespacesRbacrolebindingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsNamespacesRbacrolebindingsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nesciunt';
    $request->fields = 'eos';
    $request->key = 'perferendis';
    $request->oauthToken = 'dolores';
    $request->pageSize = 793698;
    $request->pageToken = 'quam';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new GkehubProjectsLocationsNamespacesRbacrolebindingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsNamespacesRbacrolebindingsList($request, $requestSecurity);

    if ($response->listRBACRoleBindingsResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'facilis' => 'perspiciatis',
        'voluptatem' => 'porro',
        'consequuntur' => 'blanditiis',
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'rerum';
    $request->key = 'adipisci';
    $request->name = 'Merle Gleichner';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'nobis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quos';
    $request->fields = 'aliquid';
    $request->filter = 'dolorem';
    $request->key = 'dolorem';
    $request->name = 'Norma Erdman';
    $request->oauthToken = 'cum';
    $request->pageSize = 452109;
    $request->pageToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'dolorum';

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

## gkehubProjectsLocationsScopesCreate

Creates a Scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsScopesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScopeInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsScopesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsScopesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->scopeInput = new ScopeInput();
    $request->scopeInput->allMemberships = false;
    $request->scopeInput->name = 'Melissa Bednar';
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'voluptatibus';
    $request->key = 'voluptas';
    $request->oauthToken = 'natus';
    $request->parent = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'atque';
    $request->scopeId = 'sit';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new GkehubProjectsLocationsScopesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsScopesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsScopesDelete

Deletes a Scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsScopesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsScopesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsScopesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'dolorum';
    $request->force = false;
    $request->key = 'deleniti';
    $request->name = 'Terence Rau';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->requestId = 'id';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'eius';

    $requestSecurity = new GkehubProjectsLocationsScopesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsScopesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsScopesGet

Returns the details of a Scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsScopesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsScopesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsScopesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'accusamus';
    $request->key = 'ad';
    $request->name = 'Sam Oberbrunner';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new GkehubProjectsLocationsScopesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsScopesGet($request, $requestSecurity);

    if ($response->scope !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsScopesList

Lists Scopes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsScopesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsScopesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsScopesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'quod';
    $request->key = 'officiis';
    $request->oauthToken = 'qui';
    $request->pageSize = 679880;
    $request->pageToken = 'a';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new GkehubProjectsLocationsScopesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsScopesList($request, $requestSecurity);

    if ($response->listScopesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkehubProjectsLocationsScopesPatch

Updates a scopes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsScopesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScopeInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsScopesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsScopesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->scopeInput = new ScopeInput();
    $request->scopeInput->allMemberships = false;
    $request->scopeInput->name = 'Marvin Renner';
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sapiente';
    $request->fields = 'totam';
    $request->key = 'nihil';
    $request->name = 'Mamie Durgan';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->updateMask = 'deserunt';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new GkehubProjectsLocationsScopesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsScopesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
