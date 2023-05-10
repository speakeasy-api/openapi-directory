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