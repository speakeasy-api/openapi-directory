# namespaces

### Available Operations

* [runNamespacesAuthorizeddomainsList](#runnamespacesauthorizeddomainslist) - List authorized domains.
* [runNamespacesConfigurationsList](#runnamespacesconfigurationslist) - List configurations.
* [runNamespacesDomainmappingsCreate](#runnamespacesdomainmappingscreate) - Create a new domain mapping.
* [runNamespacesDomainmappingsDelete](#runnamespacesdomainmappingsdelete) - Delete a domain mapping.
* [runNamespacesDomainmappingsGet](#runnamespacesdomainmappingsget) - Get information about a domain mapping.
* [runNamespacesDomainmappingsList](#runnamespacesdomainmappingslist) - List all domain mappings.
* [runNamespacesExecutionsCancel](#runnamespacesexecutionscancel) - Cancel an execution.
* [runNamespacesExecutionsList](#runnamespacesexecutionslist) - List executions.
* [runNamespacesJobsCreate](#runnamespacesjobscreate) - Create a job.
* [runNamespacesJobsDelete](#runnamespacesjobsdelete) - Delete a job.
* [runNamespacesJobsList](#runnamespacesjobslist) - List jobs.
* [runNamespacesJobsReplaceJob](#runnamespacesjobsreplacejob) - Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* [runNamespacesJobsRun](#runnamespacesjobsrun) - Trigger creation of a new execution of this job.
* [runNamespacesRevisionsList](#runnamespacesrevisionslist) - List revisions.
* [runNamespacesRoutesList](#runnamespacesrouteslist) - List routes.
* [runNamespacesServicesCreate](#runnamespacesservicescreate) - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* [runNamespacesServicesDelete](#runnamespacesservicesdelete) - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* [runNamespacesServicesGet](#runnamespacesservicesget) - Gets information about a service.
* [runNamespacesServicesList](#runnamespacesserviceslist) - Lists services for the given project and region.
* [runNamespacesServicesReplaceService](#runnamespacesservicesreplaceservice) - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* [runNamespacesTasksGet](#runnamespacestasksget) - Get information about a task.
* [runNamespacesTasksList](#runnamespacestaskslist) - List tasks.

## runNamespacesAuthorizeddomainsList

List authorized domains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesAuthorizeddomainsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesAuthorizeddomainsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesAuthorizeddomainsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->pageSize = 791725;
    $request->pageToken = 'placeat';
    $request->parent = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new RunNamespacesAuthorizeddomainsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesAuthorizeddomainsList($request, $requestSecurity);

    if ($response->listAuthorizedDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesConfigurationsList

List configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesConfigurationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesConfigurationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesConfigurationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->continue = 'veritatis';
    $request->fieldSelector = 'deserunt';
    $request->fields = 'perferendis';
    $request->includeUninitialized = false;
    $request->key = 'ipsam';
    $request->labelSelector = 'repellendus';
    $request->limit = 957156;
    $request->oauthToken = 'quo';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->resourceVersion = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';
    $request->watch = false;

    $requestSecurity = new RunNamespacesConfigurationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesConfigurationsList($request, $requestSecurity);

    if ($response->listConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesDomainmappingsCreate

Create a new domain mapping.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesDomainmappingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainMapping;
use \OpenAPI\OpenAPI\Models\Shared\ObjectMeta;
use \OpenAPI\OpenAPI\Models\Shared\OwnerReference;
use \OpenAPI\OpenAPI\Models\Shared\DomainMappingSpec;
use \OpenAPI\OpenAPI\Models\Shared\DomainMappingSpecCertificateModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainMappingStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV1Condition;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecord;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecordTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesDomainmappingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesDomainmappingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->domainMapping = new DomainMapping();
    $request->domainMapping->apiVersion = 'quod';
    $request->domainMapping->kind = 'esse';
    $request->domainMapping->metadata = new ObjectMeta();
    $request->domainMapping->metadata->annotations = [
        'porro' => 'dolorum',
        'dicta' => 'nam',
        'officia' => 'occaecati',
    ];
    $request->domainMapping->metadata->clusterName = 'fugit';
    $request->domainMapping->metadata->creationTimestamp = 'deleniti';
    $request->domainMapping->metadata->deletionGracePeriodSeconds = 944669;
    $request->domainMapping->metadata->deletionTimestamp = 'optio';
    $request->domainMapping->metadata->finalizers = [
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->domainMapping->metadata->generateName = 'modi';
    $request->domainMapping->metadata->generation = 186332;
    $request->domainMapping->metadata->labels = [
        'cum' => 'esse',
        'ipsum' => 'excepturi',
        'aspernatur' => 'perferendis',
        'ad' => 'natus',
    ];
    $request->domainMapping->metadata->name = 'Sheryl Fadel';
    $request->domainMapping->metadata->namespace = 'hic';
    $request->domainMapping->metadata->ownerReferences = [
        new OwnerReference(),
        new OwnerReference(),
        new OwnerReference(),
        new OwnerReference(),
    ];
    $request->domainMapping->metadata->resourceVersion = 'fuga';
    $request->domainMapping->metadata->selfLink = 'in';
    $request->domainMapping->metadata->uid = 'corporis';
    $request->domainMapping->spec = new DomainMappingSpec();
    $request->domainMapping->spec->certificateMode = DomainMappingSpecCertificateModeEnum::NONE;
    $request->domainMapping->spec->forceOverride = false;
    $request->domainMapping->spec->routeName = 'iure';
    $request->domainMapping->status = new DomainMappingStatus();
    $request->domainMapping->status->conditions = [
        new GoogleCloudRunV1Condition(),
        new GoogleCloudRunV1Condition(),
        new GoogleCloudRunV1Condition(),
        new GoogleCloudRunV1Condition(),
    ];
    $request->domainMapping->status->mappedRouteName = 'quidem';
    $request->domainMapping->status->observedGeneration = 99280;
    $request->domainMapping->status->resourceRecords = [
        new ResourceRecord(),
    ];
    $request->domainMapping->status->url = 'reiciendis';
    $request->accessToken = 'est';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->dryRun = 'dolores';
    $request->fields = 'dolorem';
    $request->key = 'corporis';
    $request->oauthToken = 'explicabo';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new RunNamespacesDomainmappingsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesDomainmappingsCreate($request, $requestSecurity);

    if ($response->domainMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesDomainmappingsDelete

Delete a domain mapping.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesDomainmappingsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesDomainmappingsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesDomainmappingsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->apiVersion = 'iure';
    $request->callback = 'culpa';
    $request->dryRun = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->kind = 'mollitia';
    $request->name = 'Cecilia Crooks';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->propagationPolicy = 'numquam';
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new RunNamespacesDomainmappingsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesDomainmappingsDelete($request, $requestSecurity);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesDomainmappingsGet

Get information about a domain mapping.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesDomainmappingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesDomainmappingsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesDomainmappingsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'vitae';
    $request->key = 'laborum';
    $request->name = 'Bill Conn';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new RunNamespacesDomainmappingsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesDomainmappingsGet($request, $requestSecurity);

    if ($response->domainMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesDomainmappingsList

List all domain mappings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesDomainmappingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesDomainmappingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesDomainmappingsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->continue = 'laborum';
    $request->fieldSelector = 'quasi';
    $request->fields = 'reiciendis';
    $request->includeUninitialized = false;
    $request->key = 'voluptatibus';
    $request->labelSelector = 'vero';
    $request->limit = 468651;
    $request->oauthToken = 'praesentium';
    $request->parent = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->resourceVersion = 'omnis';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'cum';
    $request->watch = false;

    $requestSecurity = new RunNamespacesDomainmappingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesDomainmappingsList($request, $requestSecurity);

    if ($response->listDomainMappingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesExecutionsCancel

Cancel an execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesExecutionsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesExecutionsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesExecutionsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'reprehenderit' => 'ut',
    ];
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'dolore';
    $request->key = 'iusto';
    $request->name = 'Maryann Hamill';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new RunNamespacesExecutionsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesExecutionsCancel($request, $requestSecurity);

    if ($response->execution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesExecutionsList

List executions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesExecutionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesExecutionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesExecutionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->continue = 'praesentium';
    $request->fieldSelector = 'rem';
    $request->fields = 'voluptates';
    $request->includeUninitialized = false;
    $request->key = 'quasi';
    $request->labelSelector = 'repudiandae';
    $request->limit = 575947;
    $request->oauthToken = 'veritatis';
    $request->parent = 'itaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->resourceVersion = 'enim';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'est';
    $request->watch = false;

    $requestSecurity = new RunNamespacesExecutionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesExecutionsList($request, $requestSecurity);

    if ($response->listExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
use \OpenAPI\OpenAPI\Models\Shared\ExecutionTemplateSpec;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionSpec;
use \OpenAPI\OpenAPI\Models\Shared\TaskTemplateSpec;
use \OpenAPI\OpenAPI\Models\Shared\TaskSpec;
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
use \OpenAPI\OpenAPI\Models\Shared\EmptyDirVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\SecretVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\JobStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV1Condition;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesJobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->job = new Job();
    $request->job->apiVersion = 'explicabo';
    $request->job->kind = 'deserunt';
    $request->job->metadata = new ObjectMeta();
    $request->job->metadata->annotations = [
        'quibusdam' => 'labore',
        'modi' => 'qui',
        'aliquid' => 'cupiditate',
    ];
    $request->job->metadata->clusterName = 'quos';
    $request->job->metadata->creationTimestamp = 'perferendis';
    $request->job->metadata->deletionGracePeriodSeconds = 164940;
    $request->job->metadata->deletionTimestamp = 'assumenda';
    $request->job->metadata->finalizers = [
        'alias',
        'fugit',
    ];
    $request->job->metadata->generateName = 'dolorum';
    $request->job->metadata->generation = 569618;
    $request->job->metadata->labels = [
        'facilis' => 'tempore',
        'labore' => 'delectus',
    ];
    $request->job->metadata->name = 'Ethel Roob';
    $request->job->metadata->namespace = 'provident';
    $request->job->metadata->ownerReferences = [
        new OwnerReference(),
        new OwnerReference(),
        new OwnerReference(),
        new OwnerReference(),
    ];
    $request->job->metadata->resourceVersion = 'sint';
    $request->job->metadata->selfLink = 'officia';
    $request->job->metadata->uid = 'dolor';
    $request->job->spec = new JobSpec();
    $request->job->spec->template = new ExecutionTemplateSpec();
    $request->job->spec->template->metadata = new ObjectMeta();
    $request->job->spec->template->metadata->annotations = [
        'a' => 'dolorum',
        'in' => 'in',
        'illum' => 'maiores',
        'rerum' => 'dicta',
    ];
    $request->job->spec->template->metadata->clusterName = 'magnam';
    $request->job->spec->template->metadata->creationTimestamp = 'cumque';
    $request->job->spec->template->metadata->deletionGracePeriodSeconds = 813798;
    $request->job->spec->template->metadata->deletionTimestamp = 'ea';
    $request->job->spec->template->metadata->finalizers = [
        'laborum',
        'accusamus',
    ];
    $request->job->spec->template->metadata->generateName = 'non';
    $request->job->spec->template->metadata->generation = 581273;
    $request->job->spec->template->metadata->labels = [
        'accusamus' => 'delectus',
        'quidem' => 'provident',
    ];
    $request->job->spec->template->metadata->name = 'Lynn Kuvalis';
    $request->job->spec->template->metadata->namespace = 'amet';
    $request->job->spec->template->metadata->ownerReferences = [
        new OwnerReference(),
        new OwnerReference(),
        new OwnerReference(),
    ];
    $request->job->spec->template->metadata->resourceVersion = 'nisi';
    $request->job->spec->template->metadata->selfLink = 'vel';
    $request->job->spec->template->metadata->uid = 'natus';
    $request->job->spec->template->spec = new ExecutionSpec();
    $request->job->spec->template->spec->parallelism = 606393;
    $request->job->spec->template->spec->taskCount = 474867;
    $request->job->spec->template->spec->template = new TaskTemplateSpec();
    $request->job->spec->template->spec->template->spec = new TaskSpec();
    $request->job->spec->template->spec->template->spec->containers = [
        new Container(),
    ];
    $request->job->spec->template->spec->template->spec->maxRetries = 470132;
    $request->job->spec->template->spec->template->spec->serviceAccountName = 'magnam';
    $request->job->spec->template->spec->template->spec->timeoutSeconds = 'distinctio';
    $request->job->spec->template->spec->template->spec->volumes = [
        new Volume(),
        new Volume(),
        new Volume(),
    ];
    $request->job->status = new JobStatus();
    $request->job->status->conditions = [
        new GoogleCloudRunV1Condition(),
        new GoogleCloudRunV1Condition(),
    ];
    $request->job->status->executionCount = 290077;
    $request->job->status->latestCreatedExecution = new ExecutionReference();
    $request->job->status->latestCreatedExecution->completionTimestamp = 'suscipit';
    $request->job->status->latestCreatedExecution->creationTimestamp = 'natus';
    $request->job->status->latestCreatedExecution->name = 'Duane Thiel II';
    $request->job->status->observedGeneration = 92373;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'quos';
    $request->key = 'sint';
    $request->oauthToken = 'accusantium';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'ad';

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
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->apiVersion = 'odit';
    $request->callback = 'nemo';
    $request->fields = 'quasi';
    $request->key = 'iure';
    $request->kind = 'doloribus';
    $request->name = 'Frederick Schoen';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->propagationPolicy = 'architecto';
    $request->quotaUser = 'architecto';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new RunNamespacesJobsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesJobsDelete($request, $requestSecurity);

    if ($response->status !== null) {
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
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->continue = 'sed';
    $request->fieldSelector = 'saepe';
    $request->fields = 'pariatur';
    $request->includeUninitialized = false;
    $request->key = 'accusantium';
    $request->labelSelector = 'consequuntur';
    $request->limit = 508315;
    $request->oauthToken = 'natus';
    $request->parent = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'sunt';
    $request->resourceVersion = 'quo';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'pariatur';
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

## runNamespacesJobsReplaceJob

Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesJobsReplaceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Job;
use \OpenAPI\OpenAPI\Models\Shared\ObjectMeta;
use \OpenAPI\OpenAPI\Models\Shared\OwnerReference;
use \OpenAPI\OpenAPI\Models\Shared\JobSpec;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionTemplateSpec;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionSpec;
use \OpenAPI\OpenAPI\Models\Shared\TaskTemplateSpec;
use \OpenAPI\OpenAPI\Models\Shared\TaskSpec;
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
use \OpenAPI\OpenAPI\Models\Shared\EmptyDirVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\SecretVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\JobStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV1Condition;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesJobsReplaceJobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesJobsReplaceJobRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->job = new Job();
    $request->job->apiVersion = 'ea';
    $request->job->kind = 'excepturi';
    $request->job->metadata = new ObjectMeta();
    $request->job->metadata->annotations = [
        'ea' => 'accusantium',
    ];
    $request->job->metadata->clusterName = 'ab';
    $request->job->metadata->creationTimestamp = 'maiores';
    $request->job->metadata->deletionGracePeriodSeconds = 697429;
    $request->job->metadata->deletionTimestamp = 'ipsam';
    $request->job->metadata->finalizers = [
        'autem',
        'nam',
    ];
    $request->job->metadata->generateName = 'eaque';
    $request->job->metadata->generation = 866383;
    $request->job->metadata->labels = [
        'voluptatibus' => 'perferendis',
        'fugiat' => 'amet',
    ];
    $request->job->metadata->name = 'Erma Hessel';
    $request->job->metadata->namespace = 'nobis';
    $request->job->metadata->ownerReferences = [
        new OwnerReference(),
    ];
    $request->job->metadata->resourceVersion = 'quis';
    $request->job->metadata->selfLink = 'totam';
    $request->job->metadata->uid = 'dignissimos';
    $request->job->spec = new JobSpec();
    $request->job->spec->template = new ExecutionTemplateSpec();
    $request->job->spec->template->metadata = new ObjectMeta();
    $request->job->spec->template->metadata->annotations = [
        'quis' => 'nesciunt',
    ];
    $request->job->spec->template->metadata->clusterName = 'eos';
    $request->job->spec->template->metadata->creationTimestamp = 'perferendis';
    $request->job->spec->template->metadata->deletionGracePeriodSeconds = 170986;
    $request->job->spec->template->metadata->deletionTimestamp = 'minus';
    $request->job->spec->template->metadata->finalizers = [
        'dolor',
        'vero',
    ];
    $request->job->spec->template->metadata->generateName = 'nostrum';
    $request->job->spec->template->metadata->generation = 944120;
    $request->job->spec->template->metadata->labels = [
        'omnis' => 'facilis',
        'perspiciatis' => 'voluptatem',
        'porro' => 'consequuntur',
        'blanditiis' => 'error',
    ];
    $request->job->spec->template->metadata->name = 'Violet Price';
    $request->job->spec->template->metadata->namespace = 'earum';
    $request->job->spec->template->metadata->ownerReferences = [
        new OwnerReference(),
        new OwnerReference(),
    ];
    $request->job->spec->template->metadata->resourceVersion = 'iste';
    $request->job->spec->template->metadata->selfLink = 'dolorum';
    $request->job->spec->template->metadata->uid = 'deleniti';
    $request->job->spec->template->spec = new ExecutionSpec();
    $request->job->spec->template->spec->parallelism = 864282;
    $request->job->spec->template->spec->taskCount = 589910;
    $request->job->spec->template->spec->template = new TaskTemplateSpec();
    $request->job->spec->template->spec->template->spec = new TaskSpec();
    $request->job->spec->template->spec->template->spec->containers = [
        new Container(),
        new Container(),
        new Container(),
        new Container(),
    ];
    $request->job->spec->template->spec->template->spec->maxRetries = 730122;
    $request->job->spec->template->spec->template->spec->serviceAccountName = 'delectus';
    $request->job->spec->template->spec->template->spec->timeoutSeconds = 'quaerat';
    $request->job->spec->template->spec->template->spec->volumes = [
        new Volume(),
        new Volume(),
        new Volume(),
    ];
    $request->job->status = new JobStatus();
    $request->job->status->conditions = [
        new GoogleCloudRunV1Condition(),
        new GoogleCloudRunV1Condition(),
    ];
    $request->job->status->executionCount = 212390;
    $request->job->status->latestCreatedExecution = new ExecutionReference();
    $request->job->status->latestCreatedExecution->completionTimestamp = 'dolorem';
    $request->job->status->latestCreatedExecution->creationTimestamp = 'dolor';
    $request->job->status->latestCreatedExecution->name = 'Tiffany Welch';
    $request->job->status->observedGeneration = 452109;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'dolorum';
    $request->key = 'numquam';
    $request->name = 'Melissa Bednar';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new RunNamespacesJobsReplaceJobSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesJobsReplaceJob($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesJobsRun

Trigger creation of a new execution of this job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesJobsRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\Overrides;
use \OpenAPI\OpenAPI\Models\Shared\ContainerOverride;
use \OpenAPI\OpenAPI\Models\Shared\EnvVar;
use \OpenAPI\OpenAPI\Models\Shared\EnvVarSource;
use \OpenAPI\OpenAPI\Models\Shared\ConfigMapKeySelector;
use \OpenAPI\OpenAPI\Models\Shared\LocalObjectReference;
use \OpenAPI\OpenAPI\Models\Shared\SecretKeySelector;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesJobsRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesJobsRunRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runJobRequest = new RunJobRequest();
    $request->runJobRequest->overrides = new Overrides();
    $request->runJobRequest->overrides->containerOverrides = [
        new ContainerOverride(),
        new ContainerOverride(),
        new ContainerOverride(),
    ];
    $request->runJobRequest->overrides->taskCount = 179603;
    $request->runJobRequest->overrides->timeoutSeconds = 542499;
    $request->accessToken = 'sit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->fields = 'soluta';
    $request->key = 'dolorum';
    $request->name = 'Colleen Pagac';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new RunNamespacesJobsRunSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesJobsRun($request, $requestSecurity);

    if ($response->execution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesRevisionsList

List revisions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesRevisionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesRevisionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesRevisionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->continue = 'eius';
    $request->fieldSelector = 'aspernatur';
    $request->fields = 'perferendis';
    $request->includeUninitialized = false;
    $request->key = 'amet';
    $request->labelSelector = 'optio';
    $request->limit = 881586;
    $request->oauthToken = 'ad';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->resourceVersion = 'deserunt';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'minima';
    $request->watch = false;

    $requestSecurity = new RunNamespacesRevisionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesRevisionsList($request, $requestSecurity);

    if ($response->listRevisionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesRoutesList

List routes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesRoutesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesRoutesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesRoutesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->continue = 'at';
    $request->fieldSelector = 'quaerat';
    $request->fields = 'tempora';
    $request->includeUninitialized = false;
    $request->key = 'vel';
    $request->labelSelector = 'quod';
    $request->limit = 885338;
    $request->oauthToken = 'qui';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->resourceVersion = 'esse';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'iusto';
    $request->watch = false;

    $requestSecurity = new RunNamespacesRoutesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesRoutesList($request, $requestSecurity);

    if ($response->listRoutesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesServicesCreate

Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesServicesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceInput;
use \OpenAPI\OpenAPI\Models\Shared\ObjectMeta;
use \OpenAPI\OpenAPI\Models\Shared\OwnerReference;
use \OpenAPI\OpenAPI\Models\Shared\ServiceSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\RevisionTemplate;
use \OpenAPI\OpenAPI\Models\Shared\RevisionSpec;
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
use \OpenAPI\OpenAPI\Models\Shared\EmptyDirVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\SecretVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\TrafficTargetInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\Addressable;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV1Condition;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesServicesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesServicesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->serviceInput = new ServiceInput();
    $request->serviceInput->apiVersion = 'quisquam';
    $request->serviceInput->kind = 'tenetur';
    $request->serviceInput->metadata = new ObjectMeta();
    $request->serviceInput->metadata->annotations = [
        'tempore' => 'accusamus',
    ];
    $request->serviceInput->metadata->clusterName = 'numquam';
    $request->serviceInput->metadata->creationTimestamp = 'enim';
    $request->serviceInput->metadata->deletionGracePeriodSeconds = 213312;
    $request->serviceInput->metadata->deletionTimestamp = 'sapiente';
    $request->serviceInput->metadata->finalizers = [
        'nihil',
        'sit',
        'expedita',
    ];
    $request->serviceInput->metadata->generateName = 'neque';
    $request->serviceInput->metadata->generation = 153694;
    $request->serviceInput->metadata->labels = [
        'libero' => 'voluptas',
        'deserunt' => 'quam',
    ];
    $request->serviceInput->metadata->name = 'Amber Dibbert';
    $request->serviceInput->metadata->namespace = 'pariatur';
    $request->serviceInput->metadata->ownerReferences = [
        new OwnerReference(),
        new OwnerReference(),
        new OwnerReference(),
    ];
    $request->serviceInput->metadata->resourceVersion = 'dicta';
    $request->serviceInput->metadata->selfLink = 'laborum';
    $request->serviceInput->metadata->uid = 'totam';
    $request->serviceInput->spec = new ServiceSpecInput();
    $request->serviceInput->spec->template = new RevisionTemplate();
    $request->serviceInput->spec->template->metadata = new ObjectMeta();
    $request->serviceInput->spec->template->metadata->annotations = [
        'aspernatur' => 'dolores',
        'distinctio' => 'facilis',
    ];
    $request->serviceInput->spec->template->metadata->clusterName = 'aliquid';
    $request->serviceInput->spec->template->metadata->creationTimestamp = 'quam';
    $request->serviceInput->spec->template->metadata->deletionGracePeriodSeconds = 565421;
    $request->serviceInput->spec->template->metadata->deletionTimestamp = 'temporibus';
    $request->serviceInput->spec->template->metadata->finalizers = [
        'neque',
    ];
    $request->serviceInput->spec->template->metadata->generateName = 'fugit';
    $request->serviceInput->spec->template->metadata->generation = 164959;
    $request->serviceInput->spec->template->metadata->labels = [
        'sunt' => 'ullam',
        'nam' => 'hic',
    ];
    $request->serviceInput->spec->template->metadata->name = 'Erma Rogahn PhD';
    $request->serviceInput->spec->template->metadata->namespace = 'ipsum';
    $request->serviceInput->spec->template->metadata->ownerReferences = [
        new OwnerReference(),
    ];
    $request->serviceInput->spec->template->metadata->resourceVersion = 'nobis';
    $request->serviceInput->spec->template->metadata->selfLink = 'quos';
    $request->serviceInput->spec->template->metadata->uid = 'tempore';
    $request->serviceInput->spec->template->spec = new RevisionSpec();
    $request->serviceInput->spec->template->spec->containerConcurrency = 584476;
    $request->serviceInput->spec->template->spec->containers = [
        new Container(),
    ];
    $request->serviceInput->spec->template->spec->enableServiceLinks = false;
    $request->serviceInput->spec->template->spec->imagePullSecrets = [
        new LocalObjectReference(),
        new LocalObjectReference(),
        new LocalObjectReference(),
        new LocalObjectReference(),
    ];
    $request->serviceInput->spec->template->spec->serviceAccountName = 'dolorem';
    $request->serviceInput->spec->template->spec->timeoutSeconds = 292147;
    $request->serviceInput->spec->template->spec->volumes = [
        new Volume(),
        new Volume(),
    ];
    $request->serviceInput->spec->traffic = [
        new TrafficTargetInput(),
    ];
    $request->serviceInput->status = new ServiceStatusInput();
    $request->serviceInput->status->address = new Addressable();
    $request->serviceInput->status->address->url = 'dolorum';
    $request->serviceInput->status->conditions = [
        new GoogleCloudRunV1Condition(),
    ];
    $request->serviceInput->status->latestCreatedRevisionName = 'quae';
    $request->serviceInput->status->latestReadyRevisionName = 'aut';
    $request->serviceInput->status->observedGeneration = 555649;
    $request->serviceInput->status->traffic = [
        new TrafficTargetInput(),
        new TrafficTargetInput(),
        new TrafficTargetInput(),
        new TrafficTargetInput(),
    ];
    $request->serviceInput->status->url = 'consequatur';
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'porro';
    $request->dryRun = 'doloribus';
    $request->fields = 'ut';
    $request->key = 'facilis';
    $request->oauthToken = 'cupiditate';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new RunNamespacesServicesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesServicesCreate($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesServicesDelete

Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesServicesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesServicesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesServicesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->apiVersion = 'vero';
    $request->callback = 'omnis';
    $request->dryRun = 'quis';
    $request->fields = 'ipsum';
    $request->key = 'delectus';
    $request->kind = 'voluptate';
    $request->name = 'Meghan Wiegand';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->propagationPolicy = 'quod';
    $request->quotaUser = 'odio';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new RunNamespacesServicesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesServicesDelete($request, $requestSecurity);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesServicesGet

Gets information about a service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesServicesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesServicesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesServicesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quibusdam';
    $request->fields = 'illum';
    $request->key = 'sequi';
    $request->name = 'Edmund Ankunding';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new RunNamespacesServicesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesServicesGet($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesServicesList

Lists services for the given project and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesServicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesServicesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesServicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ducimus';
    $request->continue = 'alias';
    $request->fieldSelector = 'officia';
    $request->fields = 'tempora';
    $request->includeUninitialized = false;
    $request->key = 'ipsam';
    $request->labelSelector = 'ea';
    $request->limit = 136900;
    $request->oauthToken = 'vel';
    $request->parent = 'possimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->resourceVersion = 'ratione';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'laudantium';
    $request->watch = false;

    $requestSecurity = new RunNamespacesServicesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesServicesList($request, $requestSecurity);

    if ($response->listServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesServicesReplaceService

Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesServicesReplaceServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceInput;
use \OpenAPI\OpenAPI\Models\Shared\ObjectMeta;
use \OpenAPI\OpenAPI\Models\Shared\OwnerReference;
use \OpenAPI\OpenAPI\Models\Shared\ServiceSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\RevisionTemplate;
use \OpenAPI\OpenAPI\Models\Shared\RevisionSpec;
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
use \OpenAPI\OpenAPI\Models\Shared\EmptyDirVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\SecretVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\TrafficTargetInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\Addressable;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV1Condition;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesServicesReplaceServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesServicesReplaceServiceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->serviceInput = new ServiceInput();
    $request->serviceInput->apiVersion = 'dolor';
    $request->serviceInput->kind = 'maiores';
    $request->serviceInput->metadata = new ObjectMeta();
    $request->serviceInput->metadata->annotations = [
        'ex' => 'nulla',
    ];
    $request->serviceInput->metadata->clusterName = 'excepturi';
    $request->serviceInput->metadata->creationTimestamp = 'voluptatibus';
    $request->serviceInput->metadata->deletionGracePeriodSeconds = 343605;
    $request->serviceInput->metadata->deletionTimestamp = 'sapiente';
    $request->serviceInput->metadata->finalizers = [
        'saepe',
        'ea',
        'impedit',
        'corporis',
    ];
    $request->serviceInput->metadata->generateName = 'veniam';
    $request->serviceInput->metadata->generation = 399499;
    $request->serviceInput->metadata->labels = [
        'magnam' => 'ea',
    ];
    $request->serviceInput->metadata->name = 'Glenn Walter';
    $request->serviceInput->metadata->namespace = 'eaque';
    $request->serviceInput->metadata->ownerReferences = [
        new OwnerReference(),
        new OwnerReference(),
        new OwnerReference(),
        new OwnerReference(),
    ];
    $request->serviceInput->metadata->resourceVersion = 'libero';
    $request->serviceInput->metadata->selfLink = 'aut';
    $request->serviceInput->metadata->uid = 'aut';
    $request->serviceInput->spec = new ServiceSpecInput();
    $request->serviceInput->spec->template = new RevisionTemplate();
    $request->serviceInput->spec->template->metadata = new ObjectMeta();
    $request->serviceInput->spec->template->metadata->annotations = [
        'impedit' => 'aliquam',
        'fugit' => 'accusamus',
        'inventore' => 'non',
    ];
    $request->serviceInput->spec->template->metadata->clusterName = 'et';
    $request->serviceInput->spec->template->metadata->creationTimestamp = 'dolorum';
    $request->serviceInput->spec->template->metadata->deletionGracePeriodSeconds = 672048;
    $request->serviceInput->spec->template->metadata->deletionTimestamp = 'placeat';
    $request->serviceInput->spec->template->metadata->finalizers = [
        'eum',
    ];
    $request->serviceInput->spec->template->metadata->generateName = 'autem';
    $request->serviceInput->spec->template->metadata->generation = 752135;
    $request->serviceInput->spec->template->metadata->labels = [
        'assumenda' => 'nulla',
        'voluptas' => 'libero',
        'quasi' => 'tempora',
    ];
    $request->serviceInput->spec->template->metadata->name = 'Ms. Janice McLaughlin';
    $request->serviceInput->spec->template->metadata->namespace = 'odio';
    $request->serviceInput->spec->template->metadata->ownerReferences = [
        new OwnerReference(),
        new OwnerReference(),
    ];
    $request->serviceInput->spec->template->metadata->resourceVersion = 'esse';
    $request->serviceInput->spec->template->metadata->selfLink = 'esse';
    $request->serviceInput->spec->template->metadata->uid = 'rem';
    $request->serviceInput->spec->template->spec = new RevisionSpec();
    $request->serviceInput->spec->template->spec->containerConcurrency = 683282;
    $request->serviceInput->spec->template->spec->containers = [
        new Container(),
        new Container(),
    ];
    $request->serviceInput->spec->template->spec->enableServiceLinks = false;
    $request->serviceInput->spec->template->spec->imagePullSecrets = [
        new LocalObjectReference(),
        new LocalObjectReference(),
        new LocalObjectReference(),
    ];
    $request->serviceInput->spec->template->spec->serviceAccountName = 'fugiat';
    $request->serviceInput->spec->template->spec->timeoutSeconds = 283519;
    $request->serviceInput->spec->template->spec->volumes = [
        new Volume(),
        new Volume(),
    ];
    $request->serviceInput->spec->traffic = [
        new TrafficTargetInput(),
        new TrafficTargetInput(),
    ];
    $request->serviceInput->status = new ServiceStatusInput();
    $request->serviceInput->status->address = new Addressable();
    $request->serviceInput->status->address->url = 'assumenda';
    $request->serviceInput->status->conditions = [
        new GoogleCloudRunV1Condition(),
    ];
    $request->serviceInput->status->latestCreatedRevisionName = 'praesentium';
    $request->serviceInput->status->latestReadyRevisionName = 'quisquam';
    $request->serviceInput->status->observedGeneration = 86377;
    $request->serviceInput->status->traffic = [
        new TrafficTargetInput(),
    ];
    $request->serviceInput->status->url = 'id';
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->dryRun = 'illum';
    $request->fields = 'quo';
    $request->key = 'fuga';
    $request->name = 'Ms. Ruby Hintz II';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'sequi';

    $requestSecurity = new RunNamespacesServicesReplaceServiceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesServicesReplaceService($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesTasksGet

Get information about a task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesTasksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesTasksGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesTasksGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aperiam';
    $request->fields = 'distinctio';
    $request->key = 'quod';
    $request->name = 'Debra Kovacek';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new RunNamespacesTasksGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesTasksGet($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runNamespacesTasksList

List tasks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesTasksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesTasksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesTasksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->continue = 'accusantium';
    $request->fieldSelector = 'porro';
    $request->fields = 'eum';
    $request->includeUninitialized = false;
    $request->key = 'quas';
    $request->labelSelector = 'praesentium';
    $request->limit = 159867;
    $request->oauthToken = 'deleniti';
    $request->parent = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->resourceVersion = 'mollitia';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'atque';
    $request->watch = false;

    $requestSecurity = new RunNamespacesTasksListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesTasksList($request, $requestSecurity);

    if ($response->listTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
