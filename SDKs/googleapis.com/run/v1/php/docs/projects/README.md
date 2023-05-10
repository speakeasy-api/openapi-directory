# projects

### Available Operations

* [runProjectsLocationsAuthorizeddomainsList](#runprojectslocationsauthorizeddomainslist) - List authorized domains.
* [runProjectsLocationsConfigurationsList](#runprojectslocationsconfigurationslist) - List configurations.
* [runProjectsLocationsDomainmappingsCreate](#runprojectslocationsdomainmappingscreate) - Create a new domain mapping.
* [runProjectsLocationsDomainmappingsList](#runprojectslocationsdomainmappingslist) - List all domain mappings.
* [runProjectsLocationsList](#runprojectslocationslist) - Lists information about the supported locations for this service.
* [runProjectsLocationsRevisionsList](#runprojectslocationsrevisionslist) - List revisions.
* [runProjectsLocationsRoutesList](#runprojectslocationsrouteslist) - List routes.
* [runProjectsLocationsServicesCreate](#runprojectslocationsservicescreate) - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* [runProjectsLocationsServicesDelete](#runprojectslocationsservicesdelete) - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* [runProjectsLocationsServicesGet](#runprojectslocationsservicesget) - Gets information about a service.
* [runProjectsLocationsServicesGetIamPolicy](#runprojectslocationsservicesgetiampolicy) - Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
* [runProjectsLocationsServicesList](#runprojectslocationsserviceslist) - Lists services for the given project and region.
* [runProjectsLocationsServicesReplaceService](#runprojectslocationsservicesreplaceservice) - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* [runProjectsLocationsServicesSetIamPolicy](#runprojectslocationsservicessetiampolicy) - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* [runProjectsLocationsServicesTestIamPermissions](#runprojectslocationsservicestestiampermissions) - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

## runProjectsLocationsAuthorizeddomainsList

List authorized domains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsAuthorizeddomainsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsAuthorizeddomainsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsAuthorizeddomainsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'sapiente';
    $request->key = 'consequuntur';
    $request->oauthToken = 'ratione';
    $request->pageSize = 129412;
    $request->pageToken = 'saepe';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'atque';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new RunProjectsLocationsAuthorizeddomainsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsAuthorizeddomainsList($request, $requestSecurity);

    if ($response->listAuthorizedDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsConfigurationsList

List configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsConfigurationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsConfigurationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsConfigurationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->continue = 'quod';
    $request->fieldSelector = 'nam';
    $request->fields = 'vero';
    $request->includeUninitialized = false;
    $request->key = 'aliquid';
    $request->labelSelector = 'quasi';
    $request->limit = 904045;
    $request->oauthToken = 'vel';
    $request->parent = 'harum';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->resourceVersion = 'rerum';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'minima';
    $request->watch = false;

    $requestSecurity = new RunProjectsLocationsConfigurationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsConfigurationsList($request, $requestSecurity);

    if ($response->listConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsDomainmappingsCreate

Create a new domain mapping.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsDomainmappingsCreateRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsDomainmappingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsDomainmappingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->domainMapping = new DomainMapping();
    $request->domainMapping->apiVersion = 'eligendi';
    $request->domainMapping->kind = 'sit';
    $request->domainMapping->metadata = new ObjectMeta();
    $request->domainMapping->metadata->annotations = [
        'tempore' => 'adipisci',
        'cumque' => 'consequuntur',
        'consequatur' => 'minus',
    ];
    $request->domainMapping->metadata->clusterName = 'quaerat';
    $request->domainMapping->metadata->creationTimestamp = 'sapiente';
    $request->domainMapping->metadata->deletionGracePeriodSeconds = 232865;
    $request->domainMapping->metadata->deletionTimestamp = 'esse';
    $request->domainMapping->metadata->finalizers = [
        'provident',
        'a',
        'nulla',
    ];
    $request->domainMapping->metadata->generateName = 'quas';
    $request->domainMapping->metadata->generation = 457223;
    $request->domainMapping->metadata->labels = [
        'a' => 'error',
    ];
    $request->domainMapping->metadata->name = 'Jody Schuster';
    $request->domainMapping->metadata->namespace = 'asperiores';
    $request->domainMapping->metadata->ownerReferences = [
        new OwnerReference(),
        new OwnerReference(),
        new OwnerReference(),
        new OwnerReference(),
    ];
    $request->domainMapping->metadata->resourceVersion = 'veritatis';
    $request->domainMapping->metadata->selfLink = 'consequuntur';
    $request->domainMapping->metadata->uid = 'quasi';
    $request->domainMapping->spec = new DomainMappingSpec();
    $request->domainMapping->spec->certificateMode = DomainMappingSpecCertificateModeEnum::NONE;
    $request->domainMapping->spec->forceOverride = false;
    $request->domainMapping->spec->routeName = 'culpa';
    $request->domainMapping->status = new DomainMappingStatus();
    $request->domainMapping->status->conditions = [
        new GoogleCloudRunV1Condition(),
        new GoogleCloudRunV1Condition(),
    ];
    $request->domainMapping->status->mappedRouteName = 'tenetur';
    $request->domainMapping->status->observedGeneration = 62713;
    $request->domainMapping->status->resourceRecords = [
        new ResourceRecord(),
        new ResourceRecord(),
        new ResourceRecord(),
        new ResourceRecord(),
    ];
    $request->domainMapping->status->url = 'vel';
    $request->accessToken = 'in';
    $request->alt = AltEnum::JSON;
    $request->callback = 'libero';
    $request->dryRun = 'illum';
    $request->fields = 'soluta';
    $request->key = 'accusantium';
    $request->oauthToken = 'aliquam';
    $request->parent = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'reprehenderit';

    $requestSecurity = new RunProjectsLocationsDomainmappingsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsDomainmappingsCreate($request, $requestSecurity);

    if ($response->domainMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsDomainmappingsList

List all domain mappings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsDomainmappingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsDomainmappingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsDomainmappingsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatum';
    $request->continue = 'qui';
    $request->fieldSelector = 'quibusdam';
    $request->fields = 'ex';
    $request->includeUninitialized = false;
    $request->key = 'deleniti';
    $request->labelSelector = 'itaque';
    $request->limit = 680270;
    $request->oauthToken = 'architecto';
    $request->parent = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->resourceVersion = 'quasi';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'et';
    $request->watch = false;

    $requestSecurity = new RunProjectsLocationsDomainmappingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsDomainmappingsList($request, $requestSecurity);

    if ($response->listDomainMappingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veritatis';
    $request->fields = 'consectetur';
    $request->filter = 'adipisci';
    $request->key = 'iste';
    $request->name = 'Ms. Kenneth Ledner';
    $request->oauthToken = 'mollitia';
    $request->pageSize = 68074;
    $request->pageToken = 'corrupti';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new RunProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsRevisionsList

List revisions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsRevisionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsRevisionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsRevisionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->continue = 'voluptas';
    $request->fieldSelector = 'aut';
    $request->fields = 'dignissimos';
    $request->includeUninitialized = false;
    $request->key = 'dicta';
    $request->labelSelector = 'maiores';
    $request->limit = 618480;
    $request->oauthToken = 'velit';
    $request->parent = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->resourceVersion = 'asperiores';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'ea';
    $request->watch = false;

    $requestSecurity = new RunProjectsLocationsRevisionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsRevisionsList($request, $requestSecurity);

    if ($response->listRevisionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsRoutesList

List routes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsRoutesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsRoutesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsRoutesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->continue = 'maxime';
    $request->fieldSelector = 'dignissimos';
    $request->fields = 'officia';
    $request->includeUninitialized = false;
    $request->key = 'asperiores';
    $request->labelSelector = 'nemo';
    $request->limit = 65304;
    $request->oauthToken = 'quaerat';
    $request->parent = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->resourceVersion = 'labore';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'adipisci';
    $request->watch = false;

    $requestSecurity = new RunProjectsLocationsRoutesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsRoutesList($request, $requestSecurity);

    if ($response->listRoutesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesCreate

Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesCreateRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->serviceInput = new ServiceInput();
    $request->serviceInput->apiVersion = 'id';
    $request->serviceInput->kind = 'suscipit';
    $request->serviceInput->metadata = new ObjectMeta();
    $request->serviceInput->metadata->annotations = [
        'culpa' => 'est',
    ];
    $request->serviceInput->metadata->clusterName = 'recusandae';
    $request->serviceInput->metadata->creationTimestamp = 'totam';
    $request->serviceInput->metadata->deletionGracePeriodSeconds = 853940;
    $request->serviceInput->metadata->deletionTimestamp = 'vel';
    $request->serviceInput->metadata->finalizers = [
        'quos',
        'vel',
    ];
    $request->serviceInput->metadata->generateName = 'labore';
    $request->serviceInput->metadata->generation = 822560;
    $request->serviceInput->metadata->labels = [
        'cum' => 'commodi',
        'in' => 'corporis',
        'reiciendis' => 'assumenda',
    ];
    $request->serviceInput->metadata->name = 'Miss Sophie Jacobi';
    $request->serviceInput->metadata->namespace = 'in';
    $request->serviceInput->metadata->ownerReferences = [
        new OwnerReference(),
        new OwnerReference(),
    ];
    $request->serviceInput->metadata->resourceVersion = 'earum';
    $request->serviceInput->metadata->selfLink = 'facere';
    $request->serviceInput->metadata->uid = 'numquam';
    $request->serviceInput->spec = new ServiceSpecInput();
    $request->serviceInput->spec->template = new RevisionTemplate();
    $request->serviceInput->spec->template->metadata = new ObjectMeta();
    $request->serviceInput->spec->template->metadata->annotations = [
        'suscipit' => 'reiciendis',
        'quidem' => 'saepe',
        'necessitatibus' => 'dolore',
        'sunt' => 'asperiores',
    ];
    $request->serviceInput->spec->template->metadata->clusterName = 'adipisci';
    $request->serviceInput->spec->template->metadata->creationTimestamp = 'non';
    $request->serviceInput->spec->template->metadata->deletionGracePeriodSeconds = 228263;
    $request->serviceInput->spec->template->metadata->deletionTimestamp = 'beatae';
    $request->serviceInput->spec->template->metadata->finalizers = [
        'a',
        'debitis',
    ];
    $request->serviceInput->spec->template->metadata->generateName = 'consectetur';
    $request->serviceInput->spec->template->metadata->generation = 358107;
    $request->serviceInput->spec->template->metadata->labels = [
        'laboriosam' => 'ipsa',
        'voluptates' => 'libero',
        'vitae' => 'accusamus',
    ];
    $request->serviceInput->spec->template->metadata->name = 'Ricky Cole';
    $request->serviceInput->spec->template->metadata->namespace = 'voluptas';
    $request->serviceInput->spec->template->metadata->ownerReferences = [
        new OwnerReference(),
        new OwnerReference(),
    ];
    $request->serviceInput->spec->template->metadata->resourceVersion = 'nobis';
    $request->serviceInput->spec->template->metadata->selfLink = 'dolorum';
    $request->serviceInput->spec->template->metadata->uid = 'adipisci';
    $request->serviceInput->spec->template->spec = new RevisionSpec();
    $request->serviceInput->spec->template->spec->containerConcurrency = 795535;
    $request->serviceInput->spec->template->spec->containers = [
        new Container(),
    ];
    $request->serviceInput->spec->template->spec->enableServiceLinks = false;
    $request->serviceInput->spec->template->spec->imagePullSecrets = [
        new LocalObjectReference(),
        new LocalObjectReference(),
        new LocalObjectReference(),
    ];
    $request->serviceInput->spec->template->spec->serviceAccountName = 'in';
    $request->serviceInput->spec->template->spec->timeoutSeconds = 296242;
    $request->serviceInput->spec->template->spec->volumes = [
        new Volume(),
        new Volume(),
    ];
    $request->serviceInput->spec->traffic = [
        new TrafficTargetInput(),
        new TrafficTargetInput(),
        new TrafficTargetInput(),
        new TrafficTargetInput(),
    ];
    $request->serviceInput->status = new ServiceStatusInput();
    $request->serviceInput->status->address = new Addressable();
    $request->serviceInput->status->address->url = 'temporibus';
    $request->serviceInput->status->conditions = [
        new GoogleCloudRunV1Condition(),
        new GoogleCloudRunV1Condition(),
    ];
    $request->serviceInput->status->latestCreatedRevisionName = 'adipisci';
    $request->serviceInput->status->latestReadyRevisionName = 'cum';
    $request->serviceInput->status->observedGeneration = 502389;
    $request->serviceInput->status->traffic = [
        new TrafficTargetInput(),
        new TrafficTargetInput(),
        new TrafficTargetInput(),
    ];
    $request->serviceInput->status->url = 'hic';
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corrupti';
    $request->dryRun = 'pariatur';
    $request->fields = 'totam';
    $request->key = 'hic';
    $request->oauthToken = 'exercitationem';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new RunProjectsLocationsServicesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesCreate($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesDelete

Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->apiVersion = 'facilis';
    $request->callback = 'voluptate';
    $request->dryRun = 'expedita';
    $request->fields = 'ab';
    $request->key = 'iste';
    $request->kind = 'dolore';
    $request->name = 'Aaron King';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->propagationPolicy = 'voluptas';
    $request->quotaUser = 'unde';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new RunProjectsLocationsServicesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesDelete($request, $requestSecurity);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesGet

Gets information about a service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'perferendis';
    $request->key = 'corrupti';
    $request->name = 'Troy Cormier';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new RunProjectsLocationsServicesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesGet($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesGetIamPolicy

Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'voluptate';
    $request->key = 'reiciendis';
    $request->oauthToken = 'ex';
    $request->optionsRequestedPolicyVersion = 25497;
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->resource = 'officiis';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new RunProjectsLocationsServicesGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesList

Lists services for the given project and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'debitis';
    $request->continue = 'rem';
    $request->fieldSelector = 'sit';
    $request->fields = 'nobis';
    $request->includeUninitialized = false;
    $request->key = 'error';
    $request->labelSelector = 'veniam';
    $request->limit = 329543;
    $request->oauthToken = 'recusandae';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nulla';
    $request->resourceVersion = 'magni';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'saepe';
    $request->watch = false;

    $requestSecurity = new RunProjectsLocationsServicesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesList($request, $requestSecurity);

    if ($response->listServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesReplaceService

Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesReplaceServiceRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesReplaceServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesReplaceServiceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->serviceInput = new ServiceInput();
    $request->serviceInput->apiVersion = 'veniam';
    $request->serviceInput->kind = 'in';
    $request->serviceInput->metadata = new ObjectMeta();
    $request->serviceInput->metadata->annotations = [
        'beatae' => 'laudantium',
        'exercitationem' => 'praesentium',
        'cum' => 'laboriosam',
        'dolorum' => 'voluptatum',
    ];
    $request->serviceInput->metadata->clusterName = 'error';
    $request->serviceInput->metadata->creationTimestamp = 'hic';
    $request->serviceInput->metadata->deletionGracePeriodSeconds = 710529;
    $request->serviceInput->metadata->deletionTimestamp = 'debitis';
    $request->serviceInput->metadata->finalizers = [
        'dolorum',
    ];
    $request->serviceInput->metadata->generateName = 'nostrum';
    $request->serviceInput->metadata->generation = 639028;
    $request->serviceInput->metadata->labels = [
        'corrupti' => 'accusamus',
        'tempora' => 'atque',
        'fugit' => 'ut',
    ];
    $request->serviceInput->metadata->name = 'George Nicolas';
    $request->serviceInput->metadata->namespace = 'consequatur';
    $request->serviceInput->metadata->ownerReferences = [
        new OwnerReference(),
        new OwnerReference(),
    ];
    $request->serviceInput->metadata->resourceVersion = 'ipsam';
    $request->serviceInput->metadata->selfLink = 'sit';
    $request->serviceInput->metadata->uid = 'voluptatum';
    $request->serviceInput->spec = new ServiceSpecInput();
    $request->serviceInput->spec->template = new RevisionTemplate();
    $request->serviceInput->spec->template->metadata = new ObjectMeta();
    $request->serviceInput->spec->template->metadata->annotations = [
        'repudiandae' => 'corporis',
        'et' => 'blanditiis',
        'ex' => 'sed',
    ];
    $request->serviceInput->spec->template->metadata->clusterName = 'sit';
    $request->serviceInput->spec->template->metadata->creationTimestamp = 'vel';
    $request->serviceInput->spec->template->metadata->deletionGracePeriodSeconds = 342611;
    $request->serviceInput->spec->template->metadata->deletionTimestamp = 'saepe';
    $request->serviceInput->spec->template->metadata->finalizers = [
        'consequatur',
        'incidunt',
        'reiciendis',
    ];
    $request->serviceInput->spec->template->metadata->generateName = 'dolorem';
    $request->serviceInput->spec->template->metadata->generation = 690894;
    $request->serviceInput->spec->template->metadata->labels = [
        'architecto' => 'occaecati',
    ];
    $request->serviceInput->spec->template->metadata->name = 'Yvette Lind';
    $request->serviceInput->spec->template->metadata->namespace = 'tenetur';
    $request->serviceInput->spec->template->metadata->ownerReferences = [
        new OwnerReference(),
        new OwnerReference(),
    ];
    $request->serviceInput->spec->template->metadata->resourceVersion = 'alias';
    $request->serviceInput->spec->template->metadata->selfLink = 'amet';
    $request->serviceInput->spec->template->metadata->uid = 'deserunt';
    $request->serviceInput->spec->template->spec = new RevisionSpec();
    $request->serviceInput->spec->template->spec->containerConcurrency = 454860;
    $request->serviceInput->spec->template->spec->containers = [
        new Container(),
        new Container(),
        new Container(),
    ];
    $request->serviceInput->spec->template->spec->enableServiceLinks = false;
    $request->serviceInput->spec->template->spec->imagePullSecrets = [
        new LocalObjectReference(),
        new LocalObjectReference(),
        new LocalObjectReference(),
        new LocalObjectReference(),
    ];
    $request->serviceInput->spec->template->spec->serviceAccountName = 'provident';
    $request->serviceInput->spec->template->spec->timeoutSeconds = 833819;
    $request->serviceInput->spec->template->spec->volumes = [
        new Volume(),
        new Volume(),
        new Volume(),
        new Volume(),
    ];
    $request->serviceInput->spec->traffic = [
        new TrafficTargetInput(),
        new TrafficTargetInput(),
        new TrafficTargetInput(),
        new TrafficTargetInput(),
    ];
    $request->serviceInput->status = new ServiceStatusInput();
    $request->serviceInput->status->address = new Addressable();
    $request->serviceInput->status->address->url = 'perferendis';
    $request->serviceInput->status->conditions = [
        new GoogleCloudRunV1Condition(),
        new GoogleCloudRunV1Condition(),
        new GoogleCloudRunV1Condition(),
    ];
    $request->serviceInput->status->latestCreatedRevisionName = 'quidem';
    $request->serviceInput->status->latestReadyRevisionName = 'reprehenderit';
    $request->serviceInput->status->observedGeneration = 813679;
    $request->serviceInput->status->traffic = [
        new TrafficTargetInput(),
        new TrafficTargetInput(),
        new TrafficTargetInput(),
    ];
    $request->serviceInput->status->url = 'praesentium';
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatem';
    $request->dryRun = 'quisquam';
    $request->fields = 'repudiandae';
    $request->key = 'quasi';
    $request->name = 'Mitchell Zboncak';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new RunProjectsLocationsServicesReplaceServiceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesReplaceService($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesSetIamPolicy

Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'atque';
    $request->setIamPolicyRequest->policy->version = 623295;
    $request->setIamPolicyRequest->updateMask = 'officiis';
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'natus';
    $request->fields = 'minima';
    $request->key = 'aspernatur';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->resource = 'corrupti';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'error';

    $requestSecurity = new RunProjectsLocationsServicesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesTestIamPermissions

Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'repudiandae',
        'atque',
    ];
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'recusandae';
    $request->fields = 'dolorum';
    $request->key = 'repellendus';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->resource = 'doloremque';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new RunProjectsLocationsServicesTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
