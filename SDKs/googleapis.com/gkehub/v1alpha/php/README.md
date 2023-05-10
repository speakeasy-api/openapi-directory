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
        new IdentityServiceAuthMethodInput(),
    ];
    $request->featureInput->labels = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->featureInput->membershipSpecs = [
        'deserunt' => new MembershipFeatureSpecInput(),
        'suscipit' => new MembershipFeatureSpecInput(),
        'iure' => new MembershipFeatureSpecInput(),
    ];
    $request->featureInput->resourceState = new FeatureResourceState();
    $request->featureInput->resourceState->state = FeatureResourceStateStateEnum::ENABLING;
    $request->featureInput->scopeSpecs = [
        'ipsa' => [
            'tempora' => 'suscipit',
            'molestiae' => 'minus',
            'placeat' => 'voluptatum',
            'iusto' => 'excepturi',
        ],
        'nisi' => [
            'temporibus' => 'ab',
            'quis' => 'veritatis',
            'deserunt' => 'perferendis',
            'ipsam' => 'repellendus',
        ],
        'sapiente' => [
            'odit' => 'at',
            'at' => 'maiores',
            'molestiae' => 'quod',
            'quod' => 'esse',
        ],
        'totam' => [
            'dolorum' => 'dicta',
            'nam' => 'officia',
            'occaecati' => 'fugit',
            'deleniti' => 'hic',
        ],
    ];
    $request->featureInput->spec = new CommonFeatureSpec();
    $request->featureInput->spec->anthosobservability = new AnthosObservabilityFeatureSpec();
    $request->featureInput->spec->anthosobservability->defaultMembershipSpec = new AnthosObservabilityMembershipSpec();
    $request->featureInput->spec->anthosobservability->defaultMembershipSpec->doNotOptimizeMetrics = false;
    $request->featureInput->spec->anthosobservability->defaultMembershipSpec->enableStackdriverOnApplications = false;
    $request->featureInput->spec->anthosobservability->defaultMembershipSpec->version = 'optio';
    $request->featureInput->spec->appdevexperience = [
        'beatae' => 'commodi',
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->featureInput->spec->cloudauditlogging = new CloudAuditLoggingFeatureSpec();
    $request->featureInput->spec->cloudauditlogging->allowlistedServiceAccounts = [
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->featureInput->spec->fleetobservability = new FleetObservabilityFeatureSpec();
    $request->featureInput->spec->fleetobservability->loggingConfig = new FleetObservabilityLoggingConfig();
    $request->featureInput->spec->fleetobservability->loggingConfig->defaultConfig = new FleetObservabilityRoutingConfig();
    $request->featureInput->spec->fleetobservability->loggingConfig->defaultConfig->mode = FleetObservabilityRoutingConfigModeEnum::MODE_UNSPECIFIED;
    $request->featureInput->spec->fleetobservability->loggingConfig->fleetScopeLogsConfig = new FleetObservabilityRoutingConfig();
    $request->featureInput->spec->fleetobservability->loggingConfig->fleetScopeLogsConfig->mode = FleetObservabilityRoutingConfigModeEnum::MODE_UNSPECIFIED;
    $request->featureInput->spec->multiclusteringress = new MultiClusterIngressFeatureSpec();
    $request->featureInput->spec->multiclusteringress->billing = MultiClusterIngressFeatureSpecBillingEnum::BILLING_UNSPECIFIED;
    $request->featureInput->spec->multiclusteringress->configMembership = 'natus';
    $request->featureInput->spec->workloadcertificate = new FeatureSpec();
    $request->featureInput->spec->workloadcertificate->defaultConfig = new MembershipSpec();
    $request->featureInput->spec->workloadcertificate->defaultConfig->certificateManagement = MembershipSpecCertificateManagementEnum::CERTIFICATE_MANAGEMENT_UNSPECIFIED;
    $request->featureInput->spec->workloadcertificate->provisionGoogleCa = FeatureSpecProvisionGoogleCaEnum::DISABLED;
    $request->featureInput->state = new CommonFeatureStateInput();
    $request->featureInput->state->appdevexperience = new AppDevExperienceFeatureState();
    $request->featureInput->state->appdevexperience->networkingInstallSucceeded = new Status();
    $request->featureInput->state->appdevexperience->networkingInstallSucceeded->code = StatusCodeEnum::CODE_UNSPECIFIED;
    $request->featureInput->state->appdevexperience->networkingInstallSucceeded->description = 'natus';
    $request->featureInput->state->fleetobservability = [
        'hic' => 'saepe',
        'fuga' => 'in',
    ];
    $request->featureInput->state->state = new FeatureState();
    $request->featureInput->state->state->code = FeatureStateCodeEnum::OK;
    $request->featureInput->state->state->description = 'iste';
    $request->featureInput->state->state->updateTime = 'iure';
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->featureId = 'ipsa';
    $request->fields = 'reiciendis';
    $request->key = 'est';
    $request->oauthToken = 'mollitia';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->requestId = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'explicabo';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [gkehubProjectsLocationsFeaturesCreate](docs/projects/README.md#gkehubprojectslocationsfeaturescreate) - Adds a new Feature.
* [gkehubProjectsLocationsFeaturesList](docs/projects/README.md#gkehubprojectslocationsfeatureslist) - Lists Features in a given project and location.
* [gkehubProjectsLocationsFleetsCreate](docs/projects/README.md#gkehubprojectslocationsfleetscreate) - Creates a fleet.
* [gkehubProjectsLocationsFleetsList](docs/projects/README.md#gkehubprojectslocationsfleetslist) - Returns all fleets within an organization or a project that the caller has access to.
* [gkehubProjectsLocationsList](docs/projects/README.md#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [gkehubProjectsLocationsMembershipsBindingsCreate](docs/projects/README.md#gkehubprojectslocationsmembershipsbindingscreate) - Creates a MembershipBinding.
* [gkehubProjectsLocationsMembershipsBindingsList](docs/projects/README.md#gkehubprojectslocationsmembershipsbindingslist) - Lists MembershipBindings.
* [gkehubProjectsLocationsMembershipsCreate](docs/projects/README.md#gkehubprojectslocationsmembershipscreate) - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* [gkehubProjectsLocationsMembershipsGenerateConnectManifest](docs/projects/README.md#gkehubprojectslocationsmembershipsgenerateconnectmanifest) - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* [gkehubProjectsLocationsMembershipsGetIamPolicy](docs/projects/README.md#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkehubProjectsLocationsMembershipsList](docs/projects/README.md#gkehubprojectslocationsmembershipslist) - Lists Memberships in a given project and location.
* [gkehubProjectsLocationsMembershipsListAdmin](docs/projects/README.md#gkehubprojectslocationsmembershipslistadmin) - Lists Memberships of admin clusters in a given project and location. **This method is only used internally**.
* [gkehubProjectsLocationsMembershipsSetIamPolicy](docs/projects/README.md#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkehubProjectsLocationsMembershipsTestIamPermissions](docs/projects/README.md#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [gkehubProjectsLocationsMembershipsValidateCreate](docs/projects/README.md#gkehubprojectslocationsmembershipsvalidatecreate) - ValidateCreateMembership is a preflight check for CreateMembership. It checks the following: 1. Caller has the required `gkehub.memberships.create` permission. 2. The membership_id is still available.
* [gkehubProjectsLocationsNamespacesCreate](docs/projects/README.md#gkehubprojectslocationsnamespacescreate) - Creates a fleet namespace.
* [gkehubProjectsLocationsNamespacesList](docs/projects/README.md#gkehubprojectslocationsnamespaceslist) - Lists fleet namespaces.
* [gkehubProjectsLocationsNamespacesRbacrolebindingsCreate](docs/projects/README.md#gkehubprojectslocationsnamespacesrbacrolebindingscreate) - Creates a RBACRoleBinding.
* [gkehubProjectsLocationsNamespacesRbacrolebindingsList](docs/projects/README.md#gkehubprojectslocationsnamespacesrbacrolebindingslist) - Lists RBACRoleBinding.
* [gkehubProjectsLocationsOperationsCancel](docs/projects/README.md#gkehubprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [gkehubProjectsLocationsOperationsList](docs/projects/README.md#gkehubprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [gkehubProjectsLocationsScopesCreate](docs/projects/README.md#gkehubprojectslocationsscopescreate) - Creates a Scope.
* [gkehubProjectsLocationsScopesDelete](docs/projects/README.md#gkehubprojectslocationsscopesdelete) - Deletes a Scope.
* [gkehubProjectsLocationsScopesGet](docs/projects/README.md#gkehubprojectslocationsscopesget) - Returns the details of a Scope.
* [gkehubProjectsLocationsScopesList](docs/projects/README.md#gkehubprojectslocationsscopeslist) - Lists Scopes.
* [gkehubProjectsLocationsScopesPatch](docs/projects/README.md#gkehubprojectslocationsscopespatch) - Updates a scopes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
