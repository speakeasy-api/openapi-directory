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
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsInstancesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsInstancesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemotebuildexecutionProjectsInstancesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceInput();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->actionHermeticity = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum::ACTION_HERMETICITY_ENFORCED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->actionIsolation = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum::ACTION_ISOLATION_ENFORCED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->containerImageSources = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->containerImageSources->allowedValues = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->containerImageSources->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::ALLOWED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerAddCapabilities = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerAddCapabilities->allowedValues = [
        'deserunt',
        'suscipit',
        'iure',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerAddCapabilities->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::ALLOWED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerChrootPath = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerChrootPath->allowedValues = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerChrootPath->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::ALLOWED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerNetwork = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerNetwork->allowedValues = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerNetwork->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::ALLOWED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerPrivileged = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerPrivileged->allowedValues = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerPrivileged->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::FORBIDDEN;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRunAsContainerProvidedUser = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRunAsContainerProvidedUser->allowedValues = [
        'ipsam',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRunAsContainerProvidedUser->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::RESTRICTED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRunAsRoot = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRunAsRoot->allowedValues = [
        'quo',
        'odit',
        'at',
        'at',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRunAsRoot->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::RESTRICTED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRuntime = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRuntime->allowedValues = [
        'quod',
        'quod',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRuntime->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::ALLOWED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerSiblingContainers = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerSiblingContainers->allowedValues = [
        'porro',
        'dolorum',
        'dicta',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerSiblingContainers->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::FORBIDDEN;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->linuxExecution = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum::LINUX_EXECUTION_HARDENED_GVISOR;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->linuxIsolation = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum::GVISOR;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->macExecution = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum::MAC_EXECUTION_UNSPECIFIED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->vmVerification = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum::VM_VERIFICATION_GCP_TOKEN;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->windowsExecution = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum::WINDOWS_EXECUTION_TERMINAL;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->location = 'optio';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->schedulerNotificationConfig = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->schedulerNotificationConfig->topic = 'totam';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instanceId = 'beatae';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->parent = 'commodi';
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

    $requestSecurity = new RemotebuildexecutionProjectsInstancesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->remotebuildexecutionProjectsInstancesCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
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

* [remotebuildexecutionProjectsInstancesCreate](docs/projects/README.md#remotebuildexecutionprojectsinstancescreate) - Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.
* [remotebuildexecutionProjectsInstancesList](docs/projects/README.md#remotebuildexecutionprojectsinstanceslist) - Lists instances in a project.
* [remotebuildexecutionProjectsInstancesTestNotify](docs/projects/README.md#remotebuildexecutionprojectsinstancestestnotify) - Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.
* [remotebuildexecutionProjectsInstancesWorkerpoolsCreate](docs/projects/README.md#remotebuildexecutionprojectsinstancesworkerpoolscreate) - Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.
* [remotebuildexecutionProjectsInstancesWorkerpoolsDelete](docs/projects/README.md#remotebuildexecutionprojectsinstancesworkerpoolsdelete) - Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.
* [remotebuildexecutionProjectsInstancesWorkerpoolsList](docs/projects/README.md#remotebuildexecutionprojectsinstancesworkerpoolslist) - Lists worker pools in an instance.
* [remotebuildexecutionProjectsInstancesWorkerpoolsPatch](docs/projects/README.md#remotebuildexecutionprojectsinstancesworkerpoolspatch) - Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.
* [remotebuildexecutionProjectsOperationsGet](docs/projects/README.md#remotebuildexecutionprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
