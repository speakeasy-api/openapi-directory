<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FunctionInput;
use \OpenAPI\OpenAPI\Models\Shared\BuildConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\BuildConfigDockerRegistryEnum;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\RepoSource;
use \OpenAPI\OpenAPI\Models\Shared\StorageSource;
use \OpenAPI\OpenAPI\Models\Shared\SourceProvenance;
use \OpenAPI\OpenAPI\Models\Shared\FunctionEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTriggerInput;
use \OpenAPI\OpenAPI\Models\Shared\EventFilter;
use \OpenAPI\OpenAPI\Models\Shared\EventTriggerRetryPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConfigIngressSettingsEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecretEnvVar;
use \OpenAPI\OpenAPI\Models\Shared\SecretVolume;
use \OpenAPI\OpenAPI\Models\Shared\SecretVersion;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConfigSecurityLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConfigVpcConnectorEgressSettingsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudfunctionsProjectsLocationsFunctionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->functionInput = new FunctionInput();
    $request->functionInput->buildConfig = new BuildConfigInput();
    $request->functionInput->buildConfig->dockerRegistry = BuildConfigDockerRegistryEnum::CONTAINER_REGISTRY;
    $request->functionInput->buildConfig->dockerRepository = 'distinctio';
    $request->functionInput->buildConfig->entryPoint = 'quibusdam';
    $request->functionInput->buildConfig->environmentVariables = [
        'nulla' => 'corrupti',
        'illum' => 'vel',
        'error' => 'deserunt',
    ];
    $request->functionInput->buildConfig->runtime = 'suscipit';
    $request->functionInput->buildConfig->source = new Source();
    $request->functionInput->buildConfig->source->repoSource = new RepoSource();
    $request->functionInput->buildConfig->source->repoSource->branchName = 'iure';
    $request->functionInput->buildConfig->source->repoSource->commitSha = 'magnam';
    $request->functionInput->buildConfig->source->repoSource->dir = 'debitis';
    $request->functionInput->buildConfig->source->repoSource->invertRegex = false;
    $request->functionInput->buildConfig->source->repoSource->projectId = 'ipsa';
    $request->functionInput->buildConfig->source->repoSource->repoName = 'delectus';
    $request->functionInput->buildConfig->source->repoSource->tagName = 'tempora';
    $request->functionInput->buildConfig->source->storageSource = new StorageSource();
    $request->functionInput->buildConfig->source->storageSource->bucket = 'suscipit';
    $request->functionInput->buildConfig->source->storageSource->generation = 'molestiae';
    $request->functionInput->buildConfig->source->storageSource->object = 'minus';
    $request->functionInput->buildConfig->sourceProvenance = new SourceProvenance();
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource = new RepoSource();
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->branchName = 'placeat';
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->commitSha = 'voluptatum';
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->dir = 'iusto';
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->invertRegex = false;
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->projectId = 'excepturi';
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->repoName = 'nisi';
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->tagName = 'recusandae';
    $request->functionInput->buildConfig->sourceProvenance->resolvedStorageSource = new StorageSource();
    $request->functionInput->buildConfig->sourceProvenance->resolvedStorageSource->bucket = 'temporibus';
    $request->functionInput->buildConfig->sourceProvenance->resolvedStorageSource->generation = 'ab';
    $request->functionInput->buildConfig->sourceProvenance->resolvedStorageSource->object = 'quis';
    $request->functionInput->buildConfig->workerPool = 'veritatis';
    $request->functionInput->description = 'deserunt';
    $request->functionInput->environment = FunctionEnvironmentEnum::ENVIRONMENT_UNSPECIFIED;
    $request->functionInput->eventTrigger = new EventTriggerInput();
    $request->functionInput->eventTrigger->channel = 'ipsam';
    $request->functionInput->eventTrigger->eventFilters = [
        new EventFilter(),
        new EventFilter(),
        new EventFilter(),
        new EventFilter(),
    ];
    $request->functionInput->eventTrigger->eventType = 'sapiente';
    $request->functionInput->eventTrigger->pubsubTopic = 'quo';
    $request->functionInput->eventTrigger->retryPolicy = EventTriggerRetryPolicyEnum::RETRY_POLICY_UNSPECIFIED;
    $request->functionInput->eventTrigger->serviceAccountEmail = 'at';
    $request->functionInput->eventTrigger->triggerRegion = 'at';
    $request->functionInput->kmsKeyName = 'maiores';
    $request->functionInput->labels = [
        'quod' => 'quod',
        'esse' => 'totam',
    ];
    $request->functionInput->name = 'Omar Carroll';
    $request->functionInput->serviceConfig = new ServiceConfigInput();
    $request->functionInput->serviceConfig->allTrafficOnLatestRevision = false;
    $request->functionInput->serviceConfig->availableCpu = 'occaecati';
    $request->functionInput->serviceConfig->availableMemory = 'fugit';
    $request->functionInput->serviceConfig->environmentVariables = [
        'hic' => 'optio',
        'totam' => 'beatae',
        'commodi' => 'molestiae',
    ];
    $request->functionInput->serviceConfig->ingressSettings = ServiceConfigIngressSettingsEnum::ALLOW_ALL;
    $request->functionInput->serviceConfig->maxInstanceCount = 186332;
    $request->functionInput->serviceConfig->maxInstanceRequestConcurrency = 774234;
    $request->functionInput->serviceConfig->minInstanceCount = 736918;
    $request->functionInput->serviceConfig->secretEnvironmentVariables = [
        new SecretEnvVar(),
        new SecretEnvVar(),
    ];
    $request->functionInput->serviceConfig->secretVolumes = [
        new SecretVolume(),
    ];
    $request->functionInput->serviceConfig->securityLevel = ServiceConfigSecurityLevelEnum::SECURE_ALWAYS;
    $request->functionInput->serviceConfig->serviceAccountEmail = 'aspernatur';
    $request->functionInput->serviceConfig->timeoutSeconds = 18789;
    $request->functionInput->serviceConfig->vpcConnector = 'ad';
    $request->functionInput->serviceConfig->vpcConnectorEgressSettings = ServiceConfigVpcConnectorEgressSettingsEnum::PRIVATE_RANGES_ONLY;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'natus';
    $request->functionId = 'laboriosam';
    $request->key = 'hic';
    $request->oauthToken = 'saepe';
    $request->parent = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new CloudfunctionsProjectsLocationsFunctionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudfunctionsProjectsLocationsFunctionsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->