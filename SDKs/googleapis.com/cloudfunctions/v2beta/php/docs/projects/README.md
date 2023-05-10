# projects

### Available Operations

* [cloudfunctionsProjectsLocationsFunctionsCreate](#cloudfunctionsprojectslocationsfunctionscreate) - Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
* [cloudfunctionsProjectsLocationsFunctionsDelete](#cloudfunctionsprojectslocationsfunctionsdelete) - Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
* [cloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrl](#cloudfunctionsprojectslocationsfunctionsgeneratedownloadurl) - Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
* [cloudfunctionsProjectsLocationsFunctionsGenerateUploadUrl](#cloudfunctionsprojectslocationsfunctionsgenerateuploadurl) - Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
* [cloudfunctionsProjectsLocationsFunctionsGetIamPolicy](#cloudfunctionsprojectslocationsfunctionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [cloudfunctionsProjectsLocationsFunctionsList](#cloudfunctionsprojectslocationsfunctionslist) - Returns a list of functions that belong to the requested project.
* [cloudfunctionsProjectsLocationsFunctionsPatch](#cloudfunctionsprojectslocationsfunctionspatch) - Updates existing function.
* [cloudfunctionsProjectsLocationsFunctionsSetIamPolicy](#cloudfunctionsprojectslocationsfunctionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [cloudfunctionsProjectsLocationsFunctionsTestIamPermissions](#cloudfunctionsprojectslocationsfunctionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [cloudfunctionsProjectsLocationsList](#cloudfunctionsprojectslocationslist) - Lists information about the supported locations for this service.
* [cloudfunctionsProjectsLocationsOperationsGet](#cloudfunctionsprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [cloudfunctionsProjectsLocationsOperationsList](#cloudfunctionsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [cloudfunctionsProjectsLocationsRuntimesList](#cloudfunctionsprojectslocationsruntimeslist) - Returns a list of runtimes that are supported for the requested project.

## cloudfunctionsProjectsLocationsFunctionsCreate

Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->functionInput = new FunctionInput();
    $request->functionInput->buildConfig = new BuildConfigInput();
    $request->functionInput->buildConfig->dockerRegistry = BuildConfigDockerRegistryEnum::ARTIFACT_REGISTRY;
    $request->functionInput->buildConfig->dockerRepository = 'quidem';
    $request->functionInput->buildConfig->entryPoint = 'architecto';
    $request->functionInput->buildConfig->environmentVariables = [
        'reiciendis' => 'est',
    ];
    $request->functionInput->buildConfig->runtime = 'mollitia';
    $request->functionInput->buildConfig->source = new Source();
    $request->functionInput->buildConfig->source->repoSource = new RepoSource();
    $request->functionInput->buildConfig->source->repoSource->branchName = 'laborum';
    $request->functionInput->buildConfig->source->repoSource->commitSha = 'dolores';
    $request->functionInput->buildConfig->source->repoSource->dir = 'dolorem';
    $request->functionInput->buildConfig->source->repoSource->invertRegex = false;
    $request->functionInput->buildConfig->source->repoSource->projectId = 'corporis';
    $request->functionInput->buildConfig->source->repoSource->repoName = 'explicabo';
    $request->functionInput->buildConfig->source->repoSource->tagName = 'nobis';
    $request->functionInput->buildConfig->source->storageSource = new StorageSource();
    $request->functionInput->buildConfig->source->storageSource->bucket = 'enim';
    $request->functionInput->buildConfig->source->storageSource->generation = 'omnis';
    $request->functionInput->buildConfig->source->storageSource->object = 'nemo';
    $request->functionInput->buildConfig->sourceProvenance = new SourceProvenance();
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource = new RepoSource();
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->branchName = 'minima';
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->commitSha = 'excepturi';
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->dir = 'accusantium';
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->invertRegex = false;
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->projectId = 'iure';
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->repoName = 'culpa';
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->tagName = 'doloribus';
    $request->functionInput->buildConfig->sourceProvenance->resolvedStorageSource = new StorageSource();
    $request->functionInput->buildConfig->sourceProvenance->resolvedStorageSource->bucket = 'sapiente';
    $request->functionInput->buildConfig->sourceProvenance->resolvedStorageSource->generation = 'architecto';
    $request->functionInput->buildConfig->sourceProvenance->resolvedStorageSource->object = 'mollitia';
    $request->functionInput->buildConfig->workerPool = 'dolorem';
    $request->functionInput->description = 'culpa';
    $request->functionInput->environment = FunctionEnvironmentEnum::ENVIRONMENT_UNSPECIFIED;
    $request->functionInput->eventTrigger = new EventTriggerInput();
    $request->functionInput->eventTrigger->channel = 'repellat';
    $request->functionInput->eventTrigger->eventFilters = [
        new EventFilter(),
        new EventFilter(),
        new EventFilter(),
    ];
    $request->functionInput->eventTrigger->eventType = 'occaecati';
    $request->functionInput->eventTrigger->pubsubTopic = 'numquam';
    $request->functionInput->eventTrigger->retryPolicy = EventTriggerRetryPolicyEnum::RETRY_POLICY_DO_NOT_RETRY;
    $request->functionInput->eventTrigger->serviceAccountEmail = 'quam';
    $request->functionInput->eventTrigger->triggerRegion = 'molestiae';
    $request->functionInput->kmsKeyName = 'velit';
    $request->functionInput->labels = [
        'quia' => 'quis',
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->functionInput->name = 'Angelica Dietrich';
    $request->functionInput->serviceConfig = new ServiceConfigInput();
    $request->functionInput->serviceConfig->allTrafficOnLatestRevision = false;
    $request->functionInput->serviceConfig->availableCpu = 'id';
    $request->functionInput->serviceConfig->availableMemory = 'possimus';
    $request->functionInput->serviceConfig->environmentVariables = [
        'quasi' => 'error',
    ];
    $request->functionInput->serviceConfig->ingressSettings = ServiceConfigIngressSettingsEnum::ALLOW_INTERNAL_AND_GCLB;
    $request->functionInput->serviceConfig->maxInstanceCount = 673660;
    $request->functionInput->serviceConfig->maxInstanceRequestConcurrency = 96098;
    $request->functionInput->serviceConfig->minInstanceCount = 971945;
    $request->functionInput->serviceConfig->secretEnvironmentVariables = [
        new SecretEnvVar(),
        new SecretEnvVar(),
        new SecretEnvVar(),
        new SecretEnvVar(),
    ];
    $request->functionInput->serviceConfig->secretVolumes = [
        new SecretVolume(),
        new SecretVolume(),
        new SecretVolume(),
        new SecretVolume(),
    ];
    $request->functionInput->serviceConfig->securityLevel = ServiceConfigSecurityLevelEnum::SECURE_ALWAYS;
    $request->functionInput->serviceConfig->serviceAccountEmail = 'praesentium';
    $request->functionInput->serviceConfig->timeoutSeconds = 976762;
    $request->functionInput->serviceConfig->vpcConnector = 'ipsa';
    $request->functionInput->serviceConfig->vpcConnectorEgressSettings = ServiceConfigVpcConnectorEgressSettingsEnum::PRIVATE_RANGES_ONLY;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'doloremque';
    $request->functionId = 'reprehenderit';
    $request->key = 'ut';
    $request->oauthToken = 'maiores';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'iusto';

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

## cloudfunctionsProjectsLocationsFunctionsDelete

Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudfunctionsProjectsLocationsFunctionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'commodi';
    $request->key = 'repudiandae';
    $request->name = 'Edna Pouros';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new CloudfunctionsProjectsLocationsFunctionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudfunctionsProjectsLocationsFunctionsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrl

Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'repudiandae' => 'sint',
    ];
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->fields = 'enim';
    $request->key = 'consequatur';
    $request->name = 'Taylor Cole';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrl($request, $requestSecurity);

    if ($response->generateDownloadUrlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudfunctionsProjectsLocationsFunctionsGenerateUploadUrl

Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenerateUploadUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->generateUploadUrlRequest = new GenerateUploadUrlRequest();
    $request->generateUploadUrlRequest->kmsKeyName = 'cupiditate';
    $request->accessToken = 'quos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'assumenda';
    $request->key = 'ipsam';
    $request->oauthToken = 'alias';
    $request->parent = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudfunctionsProjectsLocationsFunctionsGenerateUploadUrl($request, $requestSecurity);

    if ($response->generateUploadUrlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudfunctionsProjectsLocationsFunctionsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'eum';
    $request->key = 'non';
    $request->oauthToken = 'eligendi';
    $request->optionsRequestedPolicyVersion = 576157;
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->resource = 'provident';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new CloudfunctionsProjectsLocationsFunctionsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudfunctionsProjectsLocationsFunctionsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudfunctionsProjectsLocationsFunctionsList

Returns a list of functions that belong to the requested project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudfunctionsProjectsLocationsFunctionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'dolorum';
    $request->filter = 'in';
    $request->key = 'in';
    $request->oauthToken = 'illum';
    $request->orderBy = 'maiores';
    $request->pageSize = 699479;
    $request->pageToken = 'dicta';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new CloudfunctionsProjectsLocationsFunctionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudfunctionsProjectsLocationsFunctionsList($request, $requestSecurity);

    if ($response->listFunctionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudfunctionsProjectsLocationsFunctionsPatch

Updates existing function.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsPatchRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudfunctionsProjectsLocationsFunctionsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->functionInput = new FunctionInput();
    $request->functionInput->buildConfig = new BuildConfigInput();
    $request->functionInput->buildConfig->dockerRegistry = BuildConfigDockerRegistryEnum::ARTIFACT_REGISTRY;
    $request->functionInput->buildConfig->dockerRepository = 'accusamus';
    $request->functionInput->buildConfig->entryPoint = 'non';
    $request->functionInput->buildConfig->environmentVariables = [
        'enim' => 'accusamus',
        'delectus' => 'quidem',
        'provident' => 'nam',
    ];
    $request->functionInput->buildConfig->runtime = 'id';
    $request->functionInput->buildConfig->source = new Source();
    $request->functionInput->buildConfig->source->repoSource = new RepoSource();
    $request->functionInput->buildConfig->source->repoSource->branchName = 'blanditiis';
    $request->functionInput->buildConfig->source->repoSource->commitSha = 'deleniti';
    $request->functionInput->buildConfig->source->repoSource->dir = 'sapiente';
    $request->functionInput->buildConfig->source->repoSource->invertRegex = false;
    $request->functionInput->buildConfig->source->repoSource->projectId = 'amet';
    $request->functionInput->buildConfig->source->repoSource->repoName = 'deserunt';
    $request->functionInput->buildConfig->source->repoSource->tagName = 'nisi';
    $request->functionInput->buildConfig->source->storageSource = new StorageSource();
    $request->functionInput->buildConfig->source->storageSource->bucket = 'vel';
    $request->functionInput->buildConfig->source->storageSource->generation = 'natus';
    $request->functionInput->buildConfig->source->storageSource->object = 'omnis';
    $request->functionInput->buildConfig->sourceProvenance = new SourceProvenance();
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource = new RepoSource();
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->branchName = 'molestiae';
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->commitSha = 'perferendis';
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->dir = 'nihil';
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->invertRegex = false;
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->projectId = 'magnam';
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->repoName = 'distinctio';
    $request->functionInput->buildConfig->sourceProvenance->resolvedRepoSource->tagName = 'id';
    $request->functionInput->buildConfig->sourceProvenance->resolvedStorageSource = new StorageSource();
    $request->functionInput->buildConfig->sourceProvenance->resolvedStorageSource->bucket = 'labore';
    $request->functionInput->buildConfig->sourceProvenance->resolvedStorageSource->generation = 'labore';
    $request->functionInput->buildConfig->sourceProvenance->resolvedStorageSource->object = 'suscipit';
    $request->functionInput->buildConfig->workerPool = 'natus';
    $request->functionInput->description = 'nobis';
    $request->functionInput->environment = FunctionEnvironmentEnum::GEN1;
    $request->functionInput->eventTrigger = new EventTriggerInput();
    $request->functionInput->eventTrigger->channel = 'vero';
    $request->functionInput->eventTrigger->eventFilters = [
        new EventFilter(),
    ];
    $request->functionInput->eventTrigger->eventType = 'architecto';
    $request->functionInput->eventTrigger->pubsubTopic = 'magnam';
    $request->functionInput->eventTrigger->retryPolicy = EventTriggerRetryPolicyEnum::RETRY_POLICY_UNSPECIFIED;
    $request->functionInput->eventTrigger->serviceAccountEmail = 'excepturi';
    $request->functionInput->eventTrigger->triggerRegion = 'ullam';
    $request->functionInput->kmsKeyName = 'provident';
    $request->functionInput->labels = [
        'sint' => 'accusantium',
        'mollitia' => 'reiciendis',
        'mollitia' => 'ad',
    ];
    $request->functionInput->name = 'Carmen Treutel';
    $request->functionInput->serviceConfig = new ServiceConfigInput();
    $request->functionInput->serviceConfig->allTrafficOnLatestRevision = false;
    $request->functionInput->serviceConfig->availableCpu = 'quasi';
    $request->functionInput->serviceConfig->availableMemory = 'iure';
    $request->functionInput->serviceConfig->environmentVariables = [
        'debitis' => 'eius',
        'maxime' => 'deleniti',
        'facilis' => 'in',
        'architecto' => 'architecto',
    ];
    $request->functionInput->serviceConfig->ingressSettings = ServiceConfigIngressSettingsEnum::ALLOW_INTERNAL_AND_GCLB;
    $request->functionInput->serviceConfig->maxInstanceCount = 352312;
    $request->functionInput->serviceConfig->maxInstanceRequestConcurrency = 714242;
    $request->functionInput->serviceConfig->minInstanceCount = 469249;
    $request->functionInput->serviceConfig->secretEnvironmentVariables = [
        new SecretEnvVar(),
        new SecretEnvVar(),
        new SecretEnvVar(),
        new SecretEnvVar(),
    ];
    $request->functionInput->serviceConfig->secretVolumes = [
        new SecretVolume(),
        new SecretVolume(),
        new SecretVolume(),
        new SecretVolume(),
    ];
    $request->functionInput->serviceConfig->securityLevel = ServiceConfigSecurityLevelEnum::SECURITY_LEVEL_UNSPECIFIED;
    $request->functionInput->serviceConfig->serviceAccountEmail = 'saepe';
    $request->functionInput->serviceConfig->timeoutSeconds = 868126;
    $request->functionInput->serviceConfig->vpcConnector = 'accusantium';
    $request->functionInput->serviceConfig->vpcConnectorEgressSettings = ServiceConfigVpcConnectorEgressSettingsEnum::VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magni';
    $request->fields = 'sunt';
    $request->key = 'quo';
    $request->name = 'Ervin Schoen';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->updateMask = 'accusantium';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new CloudfunctionsProjectsLocationsFunctionsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudfunctionsProjectsLocationsFunctionsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudfunctionsProjectsLocationsFunctionsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'autem';
    $request->setIamPolicyRequest->policy->version = 722056;
    $request->setIamPolicyRequest->updateMask = 'eaque';
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'perferendis';
    $request->key = 'fugiat';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->resource = 'cumque';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudfunctionsProjectsLocationsFunctionsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudfunctionsProjectsLocationsFunctionsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'dolores',
        'quis',
        'totam',
    ];
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'nesciunt';
    $request->key = 'eos';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->resource = 'minus';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudfunctionsProjectsLocationsFunctionsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudfunctionsProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudfunctionsProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'recusandae';
    $request->fields = 'omnis';
    $request->filter = 'facilis';
    $request->key = 'perspiciatis';
    $request->name = 'Robyn Cruickshank';
    $request->oauthToken = 'eaque';
    $request->pageSize = 577229;
    $request->pageToken = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'earum';

    $requestSecurity = new CloudfunctionsProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudfunctionsProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudfunctionsProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudfunctionsProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'pariatur';
    $request->key = 'provident';
    $request->name = 'Randolph Wintheiser';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new CloudfunctionsProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudfunctionsProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudfunctionsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudfunctionsProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'cum';
    $request->filter = 'voluptate';
    $request->key = 'dignissimos';
    $request->name = 'Allen Parisian Jr.';
    $request->oauthToken = 'ipsa';
    $request->pageSize = 434417;
    $request->pageToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new CloudfunctionsProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudfunctionsProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudfunctionsProjectsLocationsRuntimesList

Returns a list of runtimes that are supported for the requested project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsRuntimesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudfunctionsProjectsLocationsRuntimesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudfunctionsProjectsLocationsRuntimesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eos';
    $request->fields = 'atque';
    $request->filter = 'sit';
    $request->key = 'fugiat';
    $request->oauthToken = 'ab';
    $request->parent = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new CloudfunctionsProjectsLocationsRuntimesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudfunctionsProjectsLocationsRuntimesList($request, $requestSecurity);

    if ($response->listRuntimesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
