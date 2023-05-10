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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [cloudfunctionsProjectsLocationsFunctionsCreate](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionscreate) - Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
* [cloudfunctionsProjectsLocationsFunctionsDelete](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionsdelete) - Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
* [cloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrl](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionsgeneratedownloadurl) - Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
* [cloudfunctionsProjectsLocationsFunctionsGenerateUploadUrl](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionsgenerateuploadurl) - Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
* [cloudfunctionsProjectsLocationsFunctionsGetIamPolicy](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [cloudfunctionsProjectsLocationsFunctionsList](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionslist) - Returns a list of functions that belong to the requested project.
* [cloudfunctionsProjectsLocationsFunctionsPatch](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionspatch) - Updates existing function.
* [cloudfunctionsProjectsLocationsFunctionsSetIamPolicy](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [cloudfunctionsProjectsLocationsFunctionsTestIamPermissions](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [cloudfunctionsProjectsLocationsList](docs/projects/README.md#cloudfunctionsprojectslocationslist) - Lists information about the supported locations for this service.
* [cloudfunctionsProjectsLocationsOperationsGet](docs/projects/README.md#cloudfunctionsprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [cloudfunctionsProjectsLocationsOperationsList](docs/projects/README.md#cloudfunctionsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [cloudfunctionsProjectsLocationsRuntimesList](docs/projects/README.md#cloudfunctionsprojectslocationsruntimeslist) - Returns a list of runtimes that are supported for the requested project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
