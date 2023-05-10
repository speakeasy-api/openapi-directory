<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Job;
use \OpenAPI\OpenAPI\Models\Shared\ObjectMeta;
use \OpenAPI\OpenAPI\Models\Shared\OwnerReference;
use \OpenAPI\OpenAPI\Models\Shared\JobSpec;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTemplateSpec;
use \OpenAPI\OpenAPI\Models\Shared\InstanceSpec;
use \OpenAPI\OpenAPI\Models\Shared\Container;
use \OpenAPI\OpenAPI\Models\Shared\EnvVar;
use \OpenAPI\OpenAPI\Models\Shared\EnvVarSource;
use \OpenAPI\OpenAPI\Models\Shared\ConfigMapKeySelector;
use \OpenAPI\OpenAPI\Models\Shared\LocalObjectReference;
use \OpenAPI\OpenAPI\Models\Shared\SecretKeySelector;
use \OpenAPI\OpenAPI\Models\Shared\EnvFromSource;
use \OpenAPI\OpenAPI\Models\Shared\ConfigMapEnvSource;
use \OpenAPI\OpenAPI\Models\Shared\SecretEnvSource;
use \OpenAPI\OpenAPI\Models\Shared\Probe;
use \OpenAPI\OpenAPI\Models\Shared\ExecAction;
use \OpenAPI\OpenAPI\Models\Shared\GRPCAction;
use \OpenAPI\OpenAPI\Models\Shared\HTTPGetAction;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHeader;
use \OpenAPI\OpenAPI\Models\Shared\TCPSocketAction;
use \OpenAPI\OpenAPI\Models\Shared\ContainerPort;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\SecurityContext;
use \OpenAPI\OpenAPI\Models\Shared\VolumeMount;
use \OpenAPI\OpenAPI\Models\Shared\Volume;
use \OpenAPI\OpenAPI\Models\Shared\ConfigMapVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\KeyToPath;
use \OpenAPI\OpenAPI\Models\Shared\SecretVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\JobStatus;
use \OpenAPI\OpenAPI\Models\Shared\JobCondition;
use \OpenAPI\OpenAPI\Models\Shared\InstanceStatus;
use \OpenAPI\OpenAPI\Models\Shared\InstanceAttemptResult;
use \OpenAPI\OpenAPI\Models\Shared\GoogleRpcStatus;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesJobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->job = new Job();
    $request->job->apiVersion = 'provident';
    $request->job->kind = 'distinctio';
    $request->job->metadata = new ObjectMeta();
    $request->job->metadata->annotations = [
        'unde' => 'nulla',
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
    ];
    $request->job->metadata->clusterName = 'iure';
    $request->job->metadata->creationTimestamp = 'magnam';
    $request->job->metadata->deletionGracePeriodSeconds = 891773;
    $request->job->metadata->deletionTimestamp = 'ipsa';
    $request->job->metadata->finalizers = [
        'tempora',
        'suscipit',
        'molestiae',
        'minus',
    ];
    $request->job->metadata->generateName = 'placeat';
    $request->job->metadata->generation = 528895;
    $request->job->metadata->labels = [
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
    ];
    $request->job->metadata->name = 'Erica Bogisich III';
    $request->job->metadata->namespace = 'repellendus';
    $request->job->metadata->ownerReferences = [
        new OwnerReference(),
        new OwnerReference(),
        new OwnerReference(),
        new OwnerReference(),
    ];
    $request->job->metadata->resourceVersion = 'quo';
    $request->job->metadata->selfLink = 'odit';
    $request->job->metadata->uid = 'at';
    $request->job->spec = new JobSpec();
    $request->job->spec->activeDeadlineSeconds = 'at';
    $request->job->spec->backoffLimit = 978619;
    $request->job->spec->completions = 473608;
    $request->job->spec->parallelism = 799159;
    $request->job->spec->template = new InstanceTemplateSpec();
    $request->job->spec->template->spec = new InstanceSpec();
    $request->job->spec->template->spec->activeDeadlineSeconds = 'quod';
    $request->job->spec->template->spec->containers = [
        new Container(),
        new Container(),
    ];
    $request->job->spec->template->spec->restartPolicy = 'totam';
    $request->job->spec->template->spec->serviceAccountName = 'porro';
    $request->job->spec->template->spec->terminationGracePeriodSeconds = 'dolorum';
    $request->job->spec->template->spec->volumes = [
        new Volume(),
    ];
    $request->job->spec->ttlSecondsAfterFinished = 720633;
    $request->job->status = new JobStatus();
    $request->job->status->active = 639921;
    $request->job->status->completionTime = 'occaecati';
    $request->job->status->conditions = [
        new JobCondition(),
    ];
    $request->job->status->failed = 537373;
    $request->job->status->imageDigest = 'hic';
    $request->job->status->instances = [
        new InstanceStatus(),
        new InstanceStatus(),
        new InstanceStatus(),
        new InstanceStatus(),
    ];
    $request->job->status->observedGeneration = 521848;
    $request->job->status->startTime = 'beatae';
    $request->job->status->succeeded = 414662;
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

    $requestSecurity = new RunNamespacesJobsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesJobsCreate($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->