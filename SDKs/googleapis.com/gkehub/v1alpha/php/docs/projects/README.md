# projects

### Available Operations

* [gkehubProjectsLocationsFeaturesCreate](#gkehubprojectslocationsfeaturescreate) - Adds a new Feature.
* [gkehubProjectsLocationsFeaturesList](#gkehubprojectslocationsfeatureslist) - Lists Features in a given project and location.
* [gkehubProjectsLocationsFleetsCreate](#gkehubprojectslocationsfleetscreate) - Creates a fleet.
* [gkehubProjectsLocationsFleetsList](#gkehubprojectslocationsfleetslist) - Returns all fleets within an organization or a project that the caller has access to.
* [gkehubProjectsLocationsList](#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [gkehubProjectsLocationsMembershipsBindingsCreate](#gkehubprojectslocationsmembershipsbindingscreate) - Creates a MembershipBinding.
* [gkehubProjectsLocationsMembershipsBindingsList](#gkehubprojectslocationsmembershipsbindingslist) - Lists MembershipBindings.
* [gkehubProjectsLocationsMembershipsCreate](#gkehubprojectslocationsmembershipscreate) - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* [gkehubProjectsLocationsMembershipsGenerateConnectManifest](#gkehubprojectslocationsmembershipsgenerateconnectmanifest) - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* [gkehubProjectsLocationsMembershipsGetIamPolicy](#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkehubProjectsLocationsMembershipsList](#gkehubprojectslocationsmembershipslist) - Lists Memberships in a given project and location.
* [gkehubProjectsLocationsMembershipsListAdmin](#gkehubprojectslocationsmembershipslistadmin) - Lists Memberships of admin clusters in a given project and location. **This method is only used internally**.
* [gkehubProjectsLocationsMembershipsSetIamPolicy](#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkehubProjectsLocationsMembershipsTestIamPermissions](#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [gkehubProjectsLocationsMembershipsValidateCreate](#gkehubprojectslocationsmembershipsvalidatecreate) - ValidateCreateMembership is a preflight check for CreateMembership. It checks the following: 1. Caller has the required `gkehub.memberships.create` permission. 2. The membership_id is still available.
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
use \OpenAPI\OpenAPI\Models\Shared\CloudBuildMembershipSpec;
use \OpenAPI\OpenAPI\Models\Shared\CloudBuildMembershipSpecSecurityPolicyEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\ServiceMeshMembershipSpecDefaultChannelEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\MembershipSpec;
use \OpenAPI\OpenAPI\Models\Shared\MembershipSpecCertificateManagementEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureResourceState;
use \OpenAPI\OpenAPI\Models\Shared\FeatureResourceStateStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommonFeatureSpec;
use \OpenAPI\OpenAPI\Models\Shared\AnthosObservabilityFeatureSpec;
use \OpenAPI\OpenAPI\Models\Shared\CloudAuditLoggingFeatureSpec;
use \OpenAPI\OpenAPI\Models\Shared\FleetObservabilityFeatureSpec;
use \OpenAPI\OpenAPI\Models\Shared\FleetObservabilityLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\FleetObservabilityRoutingConfig;
use \OpenAPI\OpenAPI\Models\Shared\FleetObservabilityRoutingConfigModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MultiClusterIngressFeatureSpec;
use \OpenAPI\OpenAPI\Models\Shared\MultiClusterIngressFeatureSpecBillingEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureSpec;
use \OpenAPI\OpenAPI\Models\Shared\FeatureSpecProvisionGoogleCaEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommonFeatureStateInput;
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
    ];
    $request->featureInput->labels = [
        'nemo' => 'minima',
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->featureInput->membershipSpecs = [
        'sapiente' => new MembershipFeatureSpecInput(),
        'architecto' => new MembershipFeatureSpecInput(),
        'mollitia' => new MembershipFeatureSpecInput(),
        'dolorem' => new MembershipFeatureSpecInput(),
    ];
    $request->featureInput->resourceState = new FeatureResourceState();
    $request->featureInput->resourceState->state = FeatureResourceStateStateEnum::DISABLING;
    $request->featureInput->scopeSpecs = [
        'repellat' => [
            'occaecati' => 'numquam',
            'commodi' => 'quam',
            'molestiae' => 'velit',
        ],
    ];
    $request->featureInput->spec = new CommonFeatureSpec();
    $request->featureInput->spec->anthosobservability = new AnthosObservabilityFeatureSpec();
    $request->featureInput->spec->anthosobservability->defaultMembershipSpec = new AnthosObservabilityMembershipSpec();
    $request->featureInput->spec->anthosobservability->defaultMembershipSpec->doNotOptimizeMetrics = false;
    $request->featureInput->spec->anthosobservability->defaultMembershipSpec->enableStackdriverOnApplications = false;
    $request->featureInput->spec->anthosobservability->defaultMembershipSpec->version = 'error';
    $request->featureInput->spec->appdevexperience = [
        'quis' => 'vitae',
    ];
    $request->featureInput->spec->cloudauditlogging = new CloudAuditLoggingFeatureSpec();
    $request->featureInput->spec->cloudauditlogging->allowlistedServiceAccounts = [
        'animi',
        'enim',
        'odit',
    ];
    $request->featureInput->spec->fleetobservability = new FleetObservabilityFeatureSpec();
    $request->featureInput->spec->fleetobservability->loggingConfig = new FleetObservabilityLoggingConfig();
    $request->featureInput->spec->fleetobservability->loggingConfig->defaultConfig = new FleetObservabilityRoutingConfig();
    $request->featureInput->spec->fleetobservability->loggingConfig->defaultConfig->mode = FleetObservabilityRoutingConfigModeEnum::MOVE;
    $request->featureInput->spec->fleetobservability->loggingConfig->fleetScopeLogsConfig = new FleetObservabilityRoutingConfig();
    $request->featureInput->spec->fleetobservability->loggingConfig->fleetScopeLogsConfig->mode = FleetObservabilityRoutingConfigModeEnum::MODE_UNSPECIFIED;
    $request->featureInput->spec->multiclusteringress = new MultiClusterIngressFeatureSpec();
    $request->featureInput->spec->multiclusteringress->billing = MultiClusterIngressFeatureSpecBillingEnum::ANTHOS_LICENSE;
    $request->featureInput->spec->multiclusteringress->configMembership = 'ipsam';
    $request->featureInput->spec->workloadcertificate = new FeatureSpec();
    $request->featureInput->spec->workloadcertificate->defaultConfig = new MembershipSpec();
    $request->featureInput->spec->workloadcertificate->defaultConfig->certificateManagement = MembershipSpecCertificateManagementEnum::DISABLED;
    $request->featureInput->spec->workloadcertificate->provisionGoogleCa = FeatureSpecProvisionGoogleCaEnum::ENABLED;
    $request->featureInput->state = new CommonFeatureStateInput();
    $request->featureInput->state->appdevexperience = new AppDevExperienceFeatureState();
    $request->featureInput->state->appdevexperience->networkingInstallSucceeded = new Status();
    $request->featureInput->state->appdevexperience->networkingInstallSucceeded->code = StatusCodeEnum::CODE_UNSPECIFIED;
    $request->featureInput->state->appdevexperience->networkingInstallSucceeded->description = 'quasi';
    $request->featureInput->state->fleetobservability = [
        'temporibus' => 'laborum',
        'quasi' => 'reiciendis',
        'voluptatibus' => 'vero',
    ];
    $request->featureInput->state->state = new FeatureState();
    $request->featureInput->state->state->code = FeatureStateCodeEnum::OK;
    $request->featureInput->state->state->description = 'praesentium';
    $request->featureInput->state->state->updateTime = 'voluptatibus';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->featureId = 'cum';
    $request->fields = 'perferendis';
    $request->key = 'doloremque';
    $request->oauthToken = 'reprehenderit';
    $request->parent = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->requestId = 'dicta';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolore';

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
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->filter = 'commodi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'quae';
    $request->orderBy = 'ipsum';
    $request->pageSize = 692472;
    $request->pageToken = 'molestias';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'praesentium';

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
    $request->fleetInput->displayName = 'voluptates';
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'veritatis';
    $request->key = 'itaque';
    $request->oauthToken = 'incidunt';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequatur';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'quibusdam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'labore';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->pageSize = 397821;
    $request->pageToken = 'cupiditate';
    $request->parent = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'assumenda';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'excepturi';
    $request->filter = 'tempora';
    $request->key = 'facilis';
    $request->name = 'Francisco Windler';
    $request->oauthToken = 'eligendi';
    $request->pageSize = 576157;
    $request->pageToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'sint';

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
    $request->membershipBindingInput->name = 'Raquel Wilderman';
    $request->membershipBindingInput->scope = 'in';
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'rerum';
    $request->fields = 'dicta';
    $request->key = 'magnam';
    $request->membershipBindingId = 'cumque';
    $request->oauthToken = 'facere';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'accusamus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'delectus';
    $request->key = 'quidem';
    $request->oauthToken = 'provident';
    $request->pageSize = 725255;
    $request->pageToken = 'id';
    $request->parent = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'amet';

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
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsMembershipsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->membershipInput = new MembershipInput();
    $request->membershipInput->authority = new AuthorityInput();
    $request->membershipInput->authority->issuer = 'nisi';
    $request->membershipInput->authority->oidcJwks = 'vel';
    $request->membershipInput->endpoint = new MembershipEndpointInput();
    $request->membershipInput->endpoint->applianceCluster = new ApplianceCluster();
    $request->membershipInput->endpoint->applianceCluster->resourceLink = 'natus';
    $request->membershipInput->endpoint->edgeCluster = new EdgeCluster();
    $request->membershipInput->endpoint->edgeCluster->resourceLink = 'omnis';
    $request->membershipInput->endpoint->gkeCluster = new GkeClusterInput();
    $request->membershipInput->endpoint->gkeCluster->resourceLink = 'molestiae';
    $request->membershipInput->endpoint->kubernetesResource = new KubernetesResourceInput();
    $request->membershipInput->endpoint->kubernetesResource->membershipCrManifest = 'perferendis';
    $request->membershipInput->endpoint->kubernetesResource->resourceOptions = new ResourceOptions();
    $request->membershipInput->endpoint->kubernetesResource->resourceOptions->connectVersion = 'nihil';
    $request->membershipInput->endpoint->kubernetesResource->resourceOptions->k8sVersion = 'magnam';
    $request->membershipInput->endpoint->kubernetesResource->resourceOptions->v1beta1Crd = false;
    $request->membershipInput->endpoint->multiCloudCluster = new MultiCloudClusterInput();
    $request->membershipInput->endpoint->multiCloudCluster->resourceLink = 'distinctio';
    $request->membershipInput->endpoint->onPremCluster = new OnPremClusterInput();
    $request->membershipInput->endpoint->onPremCluster->adminCluster = false;
    $request->membershipInput->endpoint->onPremCluster->clusterType = OnPremClusterClusterTypeEnum::STANDALONE;
    $request->membershipInput->endpoint->onPremCluster->resourceLink = 'labore';
    $request->membershipInput->externalId = 'labore';
    $request->membershipInput->labels = [
        'natus' => 'nobis',
        'eum' => 'vero',
    ];
    $request->membershipInput->monitoringConfig = new MonitoringConfig();
    $request->membershipInput->monitoringConfig->cluster = 'aspernatur';
    $request->membershipInput->monitoringConfig->clusterHash = 'architecto';
    $request->membershipInput->monitoringConfig->kubernetesMetricsPrefix = 'magnam';
    $request->membershipInput->monitoringConfig->location = 'et';
    $request->membershipInput->monitoringConfig->projectId = 'excepturi';
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'sint';
    $request->key = 'accusantium';
    $request->membershipId = 'mollitia';
    $request->oauthToken = 'reiciendis';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->requestId = 'eum';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'necessitatibus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'doloribus';
    $request->imagePullSecretContent = 'debitis';
    $request->isUpgrade = false;
    $request->key = 'eius';
    $request->name = 'Alfredo Prosacco Sr.';
    $request->namespace = 'repudiandae';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->proxy = 'expedita';
    $request->quotaUser = 'nihil';
    $request->registry = 'repellat';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'sed';
    $request->version = 'saepe';

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
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'natus';
    $request->key = 'magni';
    $request->oauthToken = 'sunt';
    $request->optionsRequestedPolicyVersion = 779051;
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->resource = 'pariatur';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'ea';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'ab';
    $request->filter = 'maiores';
    $request->key = 'quidem';
    $request->oauthToken = 'ipsam';
    $request->orderBy = 'voluptate';
    $request->pageSize = 420075;
    $request->pageToken = 'nam';
    $request->parent = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'voluptatibus';

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

## gkehubProjectsLocationsMembershipsListAdmin

Lists Memberships of admin clusters in a given project and location. **This method is only used internally**.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsListAdminRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsListAdminSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsMembershipsListAdminRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->fields = 'cumque';
    $request->filter = 'corporis';
    $request->key = 'hic';
    $request->oauthToken = 'libero';
    $request->orderBy = 'nobis';
    $request->pageSize = 171629;
    $request->pageToken = 'quis';
    $request->parent = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new GkehubProjectsLocationsMembershipsListAdminSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsMembershipsListAdmin($request, $requestSecurity);

    if ($response->listAdminClusterMembershipsResponse !== null) {
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
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'dolores';
    $request->setIamPolicyRequest->policy->version = 793698;
    $request->setIamPolicyRequest->updateMask = 'quam';
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nostrum';
    $request->fields = 'hic';
    $request->key = 'recusandae';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->resource = 'perspiciatis';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'porro';

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
        'error',
        'eaque',
        'occaecati',
    ];
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'asperiores';
    $request->fields = 'earum';
    $request->key = 'modi';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->resource = 'deleniti';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'provident';

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

## gkehubProjectsLocationsMembershipsValidateCreate

ValidateCreateMembership is a preflight check for CreateMembership. It checks the following: 1. Caller has the required `gkehub.memberships.create` permission. 2. The membership_id is still available.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsValidateCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidateCreateMembershipRequestInput;
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
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsMembershipsValidateCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsMembershipsValidateCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->validateCreateMembershipRequestInput = new ValidateCreateMembershipRequestInput();
    $request->validateCreateMembershipRequestInput->membership = new MembershipInput();
    $request->validateCreateMembershipRequestInput->membership->authority = new AuthorityInput();
    $request->validateCreateMembershipRequestInput->membership->authority->issuer = 'libero';
    $request->validateCreateMembershipRequestInput->membership->authority->oidcJwks = 'delectus';
    $request->validateCreateMembershipRequestInput->membership->endpoint = new MembershipEndpointInput();
    $request->validateCreateMembershipRequestInput->membership->endpoint->applianceCluster = new ApplianceCluster();
    $request->validateCreateMembershipRequestInput->membership->endpoint->applianceCluster->resourceLink = 'quaerat';
    $request->validateCreateMembershipRequestInput->membership->endpoint->edgeCluster = new EdgeCluster();
    $request->validateCreateMembershipRequestInput->membership->endpoint->edgeCluster->resourceLink = 'quos';
    $request->validateCreateMembershipRequestInput->membership->endpoint->gkeCluster = new GkeClusterInput();
    $request->validateCreateMembershipRequestInput->membership->endpoint->gkeCluster->resourceLink = 'aliquid';
    $request->validateCreateMembershipRequestInput->membership->endpoint->kubernetesResource = new KubernetesResourceInput();
    $request->validateCreateMembershipRequestInput->membership->endpoint->kubernetesResource->membershipCrManifest = 'dolorem';
    $request->validateCreateMembershipRequestInput->membership->endpoint->kubernetesResource->resourceOptions = new ResourceOptions();
    $request->validateCreateMembershipRequestInput->membership->endpoint->kubernetesResource->resourceOptions->connectVersion = 'dolorem';
    $request->validateCreateMembershipRequestInput->membership->endpoint->kubernetesResource->resourceOptions->k8sVersion = 'dolor';
    $request->validateCreateMembershipRequestInput->membership->endpoint->kubernetesResource->resourceOptions->v1beta1Crd = false;
    $request->validateCreateMembershipRequestInput->membership->endpoint->multiCloudCluster = new MultiCloudClusterInput();
    $request->validateCreateMembershipRequestInput->membership->endpoint->multiCloudCluster->resourceLink = 'qui';
    $request->validateCreateMembershipRequestInput->membership->endpoint->onPremCluster = new OnPremClusterInput();
    $request->validateCreateMembershipRequestInput->membership->endpoint->onPremCluster->adminCluster = false;
    $request->validateCreateMembershipRequestInput->membership->endpoint->onPremCluster->clusterType = OnPremClusterClusterTypeEnum::BOOTSTRAP;
    $request->validateCreateMembershipRequestInput->membership->endpoint->onPremCluster->resourceLink = 'hic';
    $request->validateCreateMembershipRequestInput->membership->externalId = 'excepturi';
    $request->validateCreateMembershipRequestInput->membership->labels = [
        'voluptate' => 'dignissimos',
        'reiciendis' => 'amet',
        'dolorum' => 'numquam',
    ];
    $request->validateCreateMembershipRequestInput->membership->monitoringConfig = new MonitoringConfig();
    $request->validateCreateMembershipRequestInput->membership->monitoringConfig->cluster = 'veritatis';
    $request->validateCreateMembershipRequestInput->membership->monitoringConfig->clusterHash = 'ipsa';
    $request->validateCreateMembershipRequestInput->membership->monitoringConfig->kubernetesMetricsPrefix = 'ipsa';
    $request->validateCreateMembershipRequestInput->membership->monitoringConfig->location = 'iure';
    $request->validateCreateMembershipRequestInput->membership->monitoringConfig->projectId = 'odio';
    $request->validateCreateMembershipRequestInput->membershipId = 'quaerat';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'voluptas';
    $request->key = 'natus';
    $request->oauthToken = 'eos';
    $request->parent = 'atque';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new GkehubProjectsLocationsMembershipsValidateCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsMembershipsValidateCreate($request, $requestSecurity);

    if ($response->validateCreateMembershipResponse !== null) {
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
    $request->namespaceInput->name = 'Ted Kling';
    $request->namespaceInput->scope = 'omnis';
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'asperiores';
    $request->fields = 'nihil';
    $request->key = 'ipsum';
    $request->namespaceId = 'voluptate';
    $request->oauthToken = 'id';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

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
    $request->accessToken = 'optio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ad';
    $request->fields = 'saepe';
    $request->key = 'suscipit';
    $request->oauthToken = 'deserunt';
    $request->pageSize = 588317;
    $request->pageToken = 'minima';
    $request->parent = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'alias';

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
    $request->rbacRoleBindingInput->group = 'quaerat';
    $request->rbacRoleBindingInput->name = 'Gina Schmeler';
    $request->rbacRoleBindingInput->role = new Role();
    $request->rbacRoleBindingInput->role->predefinedRole = RolePredefinedRoleEnum::EDIT;
    $request->rbacRoleBindingInput->user = 'a';
    $request->accessToken = 'esse';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iusto';
    $request->fields = 'ipsum';
    $request->key = 'quisquam';
    $request->oauthToken = 'tenetur';
    $request->parent = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->rbacrolebindingId = 'accusamus';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'enim';

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
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nihil';
    $request->fields = 'sit';
    $request->key = 'expedita';
    $request->oauthToken = 'neque';
    $request->pageSize = 153694;
    $request->pageToken = 'vel';
    $request->parent = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'quam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'qui' => 'cupiditate',
        'maxime' => 'pariatur',
    ];
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'totam';
    $request->key = 'incidunt';
    $request->name = 'Bonnie Raynor';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestias';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'qui';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odio';
    $request->fields = 'sunt';
    $request->filter = 'ullam';
    $request->key = 'nam';
    $request->name = 'George Runolfsdottir';
    $request->oauthToken = 'et';
    $request->pageSize = 903720;
    $request->pageToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'quos';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->scopeInput = new ScopeInput();
    $request->scopeInput->allMemberships = false;
    $request->scopeInput->name = 'Kevin Willms';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'architecto';
    $request->key = 'quae';
    $request->oauthToken = 'aut';
    $request->parent = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->scopeId = 'consequatur';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'repellendus';

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
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facilis';
    $request->fields = 'cupiditate';
    $request->force = false;
    $request->key = 'qui';
    $request->name = 'Marsha Kuhic';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->requestId = 'omnis';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'ipsum';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vero';
    $request->fields = 'tenetur';
    $request->key = 'dignissimos';
    $request->name = 'Kelvin Schmidt';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'dolore';

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
    $request->accessToken = 'illum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'impedit';
    $request->key = 'aut';
    $request->oauthToken = 'voluptatibus';
    $request->pageSize = 347233;
    $request->pageToken = 'nulla';
    $request->parent = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'doloribus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->scopeInput = new ScopeInput();
    $request->scopeInput->allMemberships = false;
    $request->scopeInput->name = 'Kurt Abernathy';
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'vel';
    $request->key = 'possimus';
    $request->name = 'Paula Jacobs I';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->updateMask = 'ex';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'excepturi';

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
