# namespaces

### Available Operations

* [runNamespacesJobsCreate](#runnamespacesjobscreate) - Create a job.
* [runNamespacesJobsDelete](#runnamespacesjobsdelete) - Delete a job.
* [runNamespacesJobsGet](#runnamespacesjobsget) - Get information about a job.
* [runNamespacesJobsList](#runnamespacesjobslist) - List jobs.

## runNamespacesJobsCreate

Create a job.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->job = new Job();
    $request->job->apiVersion = 'natus';
    $request->job->kind = 'sed';
    $request->job->metadata = new ObjectMeta();
    $request->job->metadata->annotations = [
        'dolor' => 'natus',
        'laboriosam' => 'hic',
        'saepe' => 'fuga',
    ];
    $request->job->metadata->clusterName = 'in';
    $request->job->metadata->creationTimestamp = 'corporis';
    $request->job->metadata->deletionGracePeriodSeconds = 613064;
    $request->job->metadata->deletionTimestamp = 'iure';
    $request->job->metadata->finalizers = [
        'quidem',
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->job->metadata->generateName = 'est';
    $request->job->metadata->generation = 653140;
    $request->job->metadata->labels = [
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
        'nobis' => 'enim',
    ];
    $request->job->metadata->name = 'Corey Hane III';
    $request->job->metadata->namespace = 'culpa';
    $request->job->metadata->ownerReferences = [
        new OwnerReference(),
        new OwnerReference(),
        new OwnerReference(),
        new OwnerReference(),
    ];
    $request->job->metadata->resourceVersion = 'sapiente';
    $request->job->metadata->selfLink = 'architecto';
    $request->job->metadata->uid = 'mollitia';
    $request->job->spec = new JobSpec();
    $request->job->spec->activeDeadlineSeconds = 'dolorem';
    $request->job->spec->backoffLimit = 635059;
    $request->job->spec->completions = 161309;
    $request->job->spec->parallelism = 995300;
    $request->job->spec->template = new InstanceTemplateSpec();
    $request->job->spec->template->spec = new InstanceSpec();
    $request->job->spec->template->spec->activeDeadlineSeconds = 'mollitia';
    $request->job->spec->template->spec->containers = [
        new Container(),
        new Container(),
        new Container(),
    ];
    $request->job->spec->template->spec->restartPolicy = 'numquam';
    $request->job->spec->template->spec->serviceAccountName = 'commodi';
    $request->job->spec->template->spec->terminationGracePeriodSeconds = 'quam';
    $request->job->spec->template->spec->volumes = [
        new Volume(),
        new Volume(),
    ];
    $request->job->spec->ttlSecondsAfterFinished = 244425;
    $request->job->status = new JobStatus();
    $request->job->status->active = 623510;
    $request->job->status->completionTime = 'quia';
    $request->job->status->conditions = [
        new JobCondition(),
        new JobCondition(),
    ];
    $request->job->status->failed = 110375;
    $request->job->status->imageDigest = 'laborum';
    $request->job->status->instances = [
        new InstanceStatus(),
        new InstanceStatus(),
        new InstanceStatus(),
    ];
    $request->job->status->observedGeneration = 317202;
    $request->job->status->startTime = 'odit';
    $request->job->status->succeeded = 778346;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'id';
    $request->key = 'possimus';
    $request->oauthToken = 'aut';
    $request->parent = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'laborum';

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

## runNamespacesJobsDelete

Delete a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesJobsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesJobsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesJobsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->apiVersion = 'vero';
    $request->callback = 'nihil';
    $request->fields = 'praesentium';
    $request->key = 'voluptatibus';
    $request->kind = 'ipsa';
    $request->name = 'Mr. Jared Ritchie';
    $request->oauthToken = 'ut';
    $request->prettyPrint = false;
    $request->propagationPolicy = 'maiores';
    $request->quotaUser = 'dicta';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new RunNamespacesJobsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesJobsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesJobsGet

Get information about a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesJobsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesJobsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesJobsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->key = 'commodi';
    $request->name = 'Eric Emmerich';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new RunNamespacesJobsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesJobsGet($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesJobsList

List jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesJobsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesJobsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->continue = 'sint';
    $request->fieldSelector = 'veritatis';
    $request->fields = 'itaque';
    $request->includeUninitialized = false;
    $request->key = 'incidunt';
    $request->labelSelector = 'enim';
    $request->limit = 9356;
    $request->oauthToken = 'est';
    $request->parent = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->resourceVersion = 'deserunt';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';
    $request->watch = false;

    $requestSecurity = new RunNamespacesJobsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesJobsList($request, $requestSecurity);

    if ($response->listJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
