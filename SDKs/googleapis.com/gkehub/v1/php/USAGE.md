<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsFeaturesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureInput;
use \OpenAPI\OpenAPI\Models\Shared\MembershipFeatureSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementMembershipSpec;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementConfigSync;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementGitConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementManaged;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementOciConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementHierarchyControllerConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementPolicyController;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementPolicyControllerMonitoring;
use \OpenAPI\OpenAPI\Models\Shared\ConfigManagementPolicyControllerMonitoringBackendsEnum;
use \OpenAPI\OpenAPI\Models\Shared\IdentityServiceMembershipSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\IdentityServiceAuthMethodInput;
use \OpenAPI\OpenAPI\Models\Shared\IdentityServiceAzureADConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\IdentityServiceGoogleConfig;
use \OpenAPI\OpenAPI\Models\Shared\IdentityServiceOidcConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceMeshMembershipSpec;
use \OpenAPI\OpenAPI\Models\Shared\ServiceMeshMembershipSpecControlPlaneEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceMeshMembershipSpecManagementEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureResourceState;
use \OpenAPI\OpenAPI\Models\Shared\FeatureResourceStateStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommonFeatureSpec;
use \OpenAPI\OpenAPI\Models\Shared\MultiClusterIngressFeatureSpec;
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
    $request->featureInput->fleetDefaultMemberConfig = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->featureInput->labels = [
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->featureInput->membershipSpecs = [
        'debitis' => new MembershipFeatureSpecInput(),
        'ipsa' => new MembershipFeatureSpecInput(),
    ];
    $request->featureInput->resourceState = new FeatureResourceState();
    $request->featureInput->resourceState->state = FeatureResourceStateStateEnum::SERVICE_UPDATING;
    $request->featureInput->scopeSpecs = [
        'suscipit' => [
            'minus' => 'placeat',
            'voluptatum' => 'iusto',
        ],
        'excepturi' => [
            'recusandae' => 'temporibus',
            'ab' => 'quis',
        ],
    ];
    $request->featureInput->spec = new CommonFeatureSpec();
    $request->featureInput->spec->appdevexperience = [
        'deserunt' => 'perferendis',
    ];
    $request->featureInput->spec->fleetobservability = [
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->featureInput->spec->multiclusteringress = new MultiClusterIngressFeatureSpec();
    $request->featureInput->spec->multiclusteringress->configMembership = 'at';
    $request->featureInput->state = new CommonFeatureState();
    $request->featureInput->state->appdevexperience = new AppDevExperienceFeatureState();
    $request->featureInput->state->appdevexperience->networkingInstallSucceeded = new Status();
    $request->featureInput->state->appdevexperience->networkingInstallSucceeded->code = StatusCodeEnum::UNKNOWN;
    $request->featureInput->state->appdevexperience->networkingInstallSucceeded->description = 'maiores';
    $request->featureInput->state->fleetobservability = [
        'quod' => 'quod',
        'esse' => 'totam',
    ];
    $request->featureInput->state->state = new FeatureState();
    $request->featureInput->state->state->code = FeatureStateCodeEnum::ERROR;
    $request->featureInput->state->state->description = 'dolorum';
    $request->featureInput->state->state->updateTime = 'dicta';
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->featureId = 'fugit';
    $request->fields = 'deleniti';
    $request->key = 'hic';
    $request->oauthToken = 'optio';
    $request->parent = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->requestId = 'commodi';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'modi';

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