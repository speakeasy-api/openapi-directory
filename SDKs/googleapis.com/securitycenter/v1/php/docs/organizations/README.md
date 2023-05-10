# organizations

### Available Operations

* [securitycenterOrganizationsAssetsRunDiscovery](#securitycenterorganizationsassetsrundiscovery) - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
* [securitycenterOrganizationsOperationsCancel](#securitycenterorganizationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [securitycenterOrganizationsSourcesCreate](#securitycenterorganizationssourcescreate) - Creates a source.
* [securitycenterOrganizationsSourcesFindingsCreate](#securitycenterorganizationssourcesfindingscreate) - Creates a finding. The corresponding source must exist for finding creation to succeed.
* [securitycenterOrganizationsSourcesGetIamPolicy](#securitycenterorganizationssourcesgetiampolicy) - Gets the access control policy on the specified Source.
* [securitycenterOrganizationsSourcesSetIamPolicy](#securitycenterorganizationssourcessetiampolicy) - Sets the access control policy on the specified Source.
* [securitycenterOrganizationsSourcesTestIamPermissions](#securitycenterorganizationssourcestestiampermissions) - Returns the permissions that a caller has on the specified source.

## securitycenterOrganizationsAssetsRunDiscovery

Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsAssetsRunDiscoveryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsAssetsRunDiscoverySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsAssetsRunDiscoveryRequest();
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
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new SecuritycenterOrganizationsAssetsRunDiscoverySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsAssetsRunDiscovery($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'at';
    $request->key = 'at';
    $request->name = 'Javier Schmidt';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new SecuritycenterOrganizationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsSourcesCreate

Creates a source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsSourcesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->source = new Source();
    $request->source->canonicalName = 'officia';
    $request->source->description = 'occaecati';
    $request->source->displayName = 'fugit';
    $request->source->name = 'Irvin Rosenbaum III';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'impedit';
    $request->key = 'cum';
    $request->oauthToken = 'esse';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new SecuritycenterOrganizationsSourcesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsSourcesCreate($request, $requestSecurity);

    if ($response->source !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsSourcesFindingsCreate

Creates a finding. The corresponding source must exist for finding creation to succeed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesFindingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FindingInput;
use \OpenAPI\OpenAPI\Models\Shared\Access;
use \OpenAPI\OpenAPI\Models\Shared\Geolocation;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccountDelegationInfo;
use \OpenAPI\OpenAPI\Models\Shared\CloudDlpDataProfile;
use \OpenAPI\OpenAPI\Models\Shared\CloudDlpInspection;
use \OpenAPI\OpenAPI\Models\Shared\Compliance;
use \OpenAPI\OpenAPI\Models\Shared\Connection;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\Container;
use \OpenAPI\OpenAPI\Models\Shared\Label;
use \OpenAPI\OpenAPI\Models\Shared\Database;
use \OpenAPI\OpenAPI\Models\Shared\Exfiltration;
use \OpenAPI\OpenAPI\Models\Shared\ExfilResource;
use \OpenAPI\OpenAPI\Models\Shared\File;
use \OpenAPI\OpenAPI\Models\Shared\FindingFindingClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\IamBinding;
use \OpenAPI\OpenAPI\Models\Shared\IamBindingActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Indicator;
use \OpenAPI\OpenAPI\Models\Shared\ProcessSignature;
use \OpenAPI\OpenAPI\Models\Shared\MemoryHashSignature;
use \OpenAPI\OpenAPI\Models\Shared\Detection;
use \OpenAPI\OpenAPI\Models\Shared\YaraRuleSignature;
use \OpenAPI\OpenAPI\Models\Shared\KernelRootkit;
use \OpenAPI\OpenAPI\Models\Shared\Kubernetes;
use \OpenAPI\OpenAPI\Models\Shared\AccessReview;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudSecuritycenterV1Binding;
use \OpenAPI\OpenAPI\Models\Shared\Role;
use \OpenAPI\OpenAPI\Models\Shared\RoleKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subject;
use \OpenAPI\OpenAPI\Models\Shared\SubjectKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodePool;
use \OpenAPI\OpenAPI\Models\Shared\Node;
use \OpenAPI\OpenAPI\Models\Shared\Pod;
use \OpenAPI\OpenAPI\Models\Shared\MitreAttack;
use \OpenAPI\OpenAPI\Models\Shared\MitreAttackAdditionalTacticsEnum;
use \OpenAPI\OpenAPI\Models\Shared\MitreAttackAdditionalTechniquesEnum;
use \OpenAPI\OpenAPI\Models\Shared\MitreAttackPrimaryTacticEnum;
use \OpenAPI\OpenAPI\Models\Shared\MitreAttackPrimaryTechniquesEnum;
use \OpenAPI\OpenAPI\Models\Shared\FindingMuteEnum;
use \OpenAPI\OpenAPI\Models\Shared\Process;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentVariable;
use \OpenAPI\OpenAPI\Models\Shared\SecurityMarks;
use \OpenAPI\OpenAPI\Models\Shared\FindingSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\FindingStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Vulnerability;
use \OpenAPI\OpenAPI\Models\Shared\Cve;
use \OpenAPI\OpenAPI\Models\Shared\Cvssv3;
use \OpenAPI\OpenAPI\Models\Shared\Cvssv3AttackComplexityEnum;
use \OpenAPI\OpenAPI\Models\Shared\Cvssv3AttackVectorEnum;
use \OpenAPI\OpenAPI\Models\Shared\Cvssv3AvailabilityImpactEnum;
use \OpenAPI\OpenAPI\Models\Shared\Cvssv3ConfidentialityImpactEnum;
use \OpenAPI\OpenAPI\Models\Shared\Cvssv3IntegrityImpactEnum;
use \OpenAPI\OpenAPI\Models\Shared\Cvssv3PrivilegesRequiredEnum;
use \OpenAPI\OpenAPI\Models\Shared\Cvssv3ScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Cvssv3UserInteractionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Reference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesFindingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsSourcesFindingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->findingInput = new FindingInput();
    $request->findingInput->access = new Access();
    $request->findingInput->access->callerIp = 'natus';
    $request->findingInput->access->callerIpGeo = new Geolocation();
    $request->findingInput->access->callerIpGeo->regionCode = 'sed';
    $request->findingInput->access->methodName = 'iste';
    $request->findingInput->access->principalEmail = 'dolor';
    $request->findingInput->access->principalSubject = 'natus';
    $request->findingInput->access->serviceAccountDelegationInfo = [
        new ServiceAccountDelegationInfo(),
        new ServiceAccountDelegationInfo(),
    ];
    $request->findingInput->access->serviceAccountKeyName = 'hic';
    $request->findingInput->access->serviceName = 'saepe';
    $request->findingInput->access->userAgentFamily = 'fuga';
    $request->findingInput->access->userName = 'Issac.Hessel';
    $request->findingInput->canonicalName = 'saepe';
    $request->findingInput->category = 'quidem';
    $request->findingInput->cloudDlpDataProfile = new CloudDlpDataProfile();
    $request->findingInput->cloudDlpDataProfile->dataProfile = 'architecto';
    $request->findingInput->cloudDlpInspection = new CloudDlpInspection();
    $request->findingInput->cloudDlpInspection->fullScan = false;
    $request->findingInput->cloudDlpInspection->infoType = 'ipsa';
    $request->findingInput->cloudDlpInspection->infoTypeCount = 'reiciendis';
    $request->findingInput->cloudDlpInspection->inspectJob = 'est';
    $request->findingInput->compliances = [
        new Compliance(),
        new Compliance(),
        new Compliance(),
    ];
    $request->findingInput->connections = [
        new Connection(),
        new Connection(),
        new Connection(),
    ];
    $request->findingInput->containers = [
        new Container(),
    ];
    $request->findingInput->createTime = 'dolorem';
    $request->findingInput->database = new Database();
    $request->findingInput->database->displayName = 'corporis';
    $request->findingInput->database->grantees = [
        'nobis',
    ];
    $request->findingInput->database->name = 'Guadalupe Hickle';
    $request->findingInput->database->query = 'accusantium';
    $request->findingInput->database->userName = 'Ibrahim_Nicolas10';
    $request->findingInput->description = 'mollitia';
    $request->findingInput->eventTime = 'dolorem';
    $request->findingInput->exfiltration = new Exfiltration();
    $request->findingInput->exfiltration->sources = [
        new ExfilResource(),
        new ExfilResource(),
        new ExfilResource(),
    ];
    $request->findingInput->exfiltration->targets = [
        new ExfilResource(),
    ];
    $request->findingInput->externalUri = 'repellat';
    $request->findingInput->files = [
        new File(),
        new File(),
        new File(),
    ];
    $request->findingInput->findingClass = FindingFindingClassEnum::MISCONFIGURATION;
    $request->findingInput->iamBindings = [
        new IamBinding(),
        new IamBinding(),
    ];
    $request->findingInput->indicator = new Indicator();
    $request->findingInput->indicator->domains = [
        'quam',
        'molestiae',
    ];
    $request->findingInput->indicator->ipAddresses = [
        'error',
    ];
    $request->findingInput->indicator->signatures = [
        new ProcessSignature(),
    ];
    $request->findingInput->indicator->uris = [
        'vitae',
        'laborum',
    ];
    $request->findingInput->kernelRootkit = new KernelRootkit();
    $request->findingInput->kernelRootkit->name = 'Bill Conn';
    $request->findingInput->kernelRootkit->unexpectedCodeModification = false;
    $request->findingInput->kernelRootkit->unexpectedFtraceHandler = false;
    $request->findingInput->kernelRootkit->unexpectedInterruptHandler = false;
    $request->findingInput->kernelRootkit->unexpectedKernelCodePages = false;
    $request->findingInput->kernelRootkit->unexpectedKprobeHandler = false;
    $request->findingInput->kernelRootkit->unexpectedProcessesInRunqueue = false;
    $request->findingInput->kernelRootkit->unexpectedReadOnlyDataModification = false;
    $request->findingInput->kernelRootkit->unexpectedSystemCallHandler = false;
    $request->findingInput->kubernetes = new Kubernetes();
    $request->findingInput->kubernetes->accessReviews = [
        new AccessReview(),
        new AccessReview(),
        new AccessReview(),
        new AccessReview(),
    ];
    $request->findingInput->kubernetes->bindings = [
        new GoogleCloudSecuritycenterV1Binding(),
        new GoogleCloudSecuritycenterV1Binding(),
    ];
    $request->findingInput->kubernetes->nodePools = [
        new NodePool(),
        new NodePool(),
        new NodePool(),
    ];
    $request->findingInput->kubernetes->nodes = [
        new Node(),
        new Node(),
        new Node(),
        new Node(),
    ];
    $request->findingInput->kubernetes->pods = [
        new Pod(),
    ];
    $request->findingInput->kubernetes->roles = [
        new Role(),
    ];
    $request->findingInput->mitreAttack = new MitreAttack();
    $request->findingInput->mitreAttack->additionalTactics = [
        MitreAttackAdditionalTacticsEnum::COMMAND_AND_CONTROL,
        MitreAttackAdditionalTacticsEnum::LATERAL_MOVEMENT,
        MitreAttackAdditionalTacticsEnum::RECONNAISSANCE,
    ];
    $request->findingInput->mitreAttack->additionalTechniques = [
        MitreAttackAdditionalTechniquesEnum::DEFAULT_ACCOUNTS,
        MitreAttackAdditionalTechniquesEnum::IMPAIR_DEFENSES,
        MitreAttackAdditionalTechniquesEnum::CLOUD_ACCOUNTS,
        MitreAttackAdditionalTechniquesEnum::PERMISSION_GROUPS_DISCOVERY,
    ];
    $request->findingInput->mitreAttack->primaryTactic = MitreAttackPrimaryTacticEnum::IMPACT;
    $request->findingInput->mitreAttack->primaryTechniques = [
        MitreAttackPrimaryTechniquesEnum::EXFILTRATION_TO_CLOUD_STORAGE,
    ];
    $request->findingInput->mitreAttack->version = 'voluptate';
    $request->findingInput->moduleName = 'cum';
    $request->findingInput->mute = FindingMuteEnum::MUTE_UNSPECIFIED;
    $request->findingInput->muteInitiator = 'doloremque';
    $request->findingInput->name = 'Mrs. April Wuckert';
    $request->findingInput->nextSteps = 'iusto';
    $request->findingInput->parent = 'dicta';
    $request->findingInput->processes = [
        new Process(),
        new Process(),
        new Process(),
    ];
    $request->findingInput->resourceName = 'enim';
    $request->findingInput->securityMarks = new SecurityMarks();
    $request->findingInput->securityMarks->canonicalName = 'accusamus';
    $request->findingInput->securityMarks->marks = [
        'repudiandae' => 'quae',
        'ipsum' => 'quidem',
    ];
    $request->findingInput->securityMarks->name = 'Andy Streich';
    $request->findingInput->severity = FindingSeverityEnum::HIGH;
    $request->findingInput->sourceProperties = [
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
        'itaque' => 'incidunt',
        'enim' => 'consequatur',
    ];
    $request->findingInput->state = FindingStateEnum::INACTIVE;
    $request->findingInput->vulnerability = new Vulnerability();
    $request->findingInput->vulnerability->cve = new Cve();
    $request->findingInput->vulnerability->cve->cvssv3 = new Cvssv3();
    $request->findingInput->vulnerability->cve->cvssv3->attackComplexity = Cvssv3AttackComplexityEnum::ATTACK_COMPLEXITY_HIGH;
    $request->findingInput->vulnerability->cve->cvssv3->attackVector = Cvssv3AttackVectorEnum::ATTACK_VECTOR_UNSPECIFIED;
    $request->findingInput->vulnerability->cve->cvssv3->availabilityImpact = Cvssv3AvailabilityImpactEnum::IMPACT_LOW;
    $request->findingInput->vulnerability->cve->cvssv3->baseScore = 7163.27;
    $request->findingInput->vulnerability->cve->cvssv3->confidentialityImpact = Cvssv3ConfidentialityImpactEnum::IMPACT_NONE;
    $request->findingInput->vulnerability->cve->cvssv3->integrityImpact = Cvssv3IntegrityImpactEnum::IMPACT_HIGH;
    $request->findingInput->vulnerability->cve->cvssv3->privilegesRequired = Cvssv3PrivilegesRequiredEnum::PRIVILEGES_REQUIRED_NONE;
    $request->findingInput->vulnerability->cve->cvssv3->scope = Cvssv3ScopeEnum::SCOPE_UNSPECIFIED;
    $request->findingInput->vulnerability->cve->cvssv3->userInteraction = Cvssv3UserInteractionEnum::USER_INTERACTION_NONE;
    $request->findingInput->vulnerability->cve->id = '9802d502-a94b-4b4f-a3c9-69e9a3efa77d';
    $request->findingInput->vulnerability->cve->references = [
        new Reference(),
        new Reference(),
        new Reference(),
        new Reference(),
    ];
    $request->findingInput->vulnerability->cve->upstreamFixAvailable = false;
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magnam';
    $request->fields = 'cumque';
    $request->findingId = 'facere';
    $request->key = 'ea';
    $request->oauthToken = 'aliquid';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new SecuritycenterOrganizationsSourcesFindingsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsSourcesFindingsCreate($request, $requestSecurity);

    if ($response->finding !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsSourcesGetIamPolicy

Gets the access control policy on the specified Source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsSourcesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 881736;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->fields = 'nam';
    $request->key = 'id';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->resource = 'sapiente';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new SecuritycenterOrganizationsSourcesGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsSourcesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsSourcesSetIamPolicy

Sets the access control policy on the specified Source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsSourcesSetIamPolicyRequest();
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
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'omnis';
    $request->setIamPolicyRequest->policy->version = 474867;
    $request->setIamPolicyRequest->updateMask = 'perferendis';
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'distinctio';
    $request->fields = 'id';
    $request->key = 'labore';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->resource = 'natus';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new SecuritycenterOrganizationsSourcesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsSourcesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsSourcesTestIamPermissions

Returns the permissions that a caller has on the specified source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsSourcesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'architecto',
    ];
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'ullam';
    $request->key = 'provident';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->resource = 'accusantium';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsSourcesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
