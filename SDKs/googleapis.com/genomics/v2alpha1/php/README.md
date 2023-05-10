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
use \OpenAPI\OpenAPI\Models\Operations\GenomicsPipelinesRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunPipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\Pipeline;
use \OpenAPI\OpenAPI\Models\Shared\Action;
use \OpenAPI\OpenAPI\Models\Shared\Secret;
use \OpenAPI\OpenAPI\Models\Shared\ActionFlagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Mount;
use \OpenAPI\OpenAPI\Models\Shared\Resources;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachine;
use \OpenAPI\OpenAPI\Models\Shared\Accelerator;
use \OpenAPI\OpenAPI\Models\Shared\Disk;
use \OpenAPI\OpenAPI\Models\Shared\Network;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\Volume;
use \OpenAPI\OpenAPI\Models\Shared\ExistingDisk;
use \OpenAPI\OpenAPI\Models\Shared\NFSMount;
use \OpenAPI\OpenAPI\Models\Shared\PersistentDisk;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsPipelinesRunSecurity;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsPipelinesRunSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\GenomicsPipelinesRunSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenomicsPipelinesRunRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->runPipelineRequest = new RunPipelineRequest();
    $request->runPipelineRequest->labels = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->runPipelineRequest->pipeline = new Pipeline();
    $request->runPipelineRequest->pipeline->actions = [
        new Action(),
        new Action(),
    ];
    $request->runPipelineRequest->pipeline->encryptedEnvironment = new Secret();
    $request->runPipelineRequest->pipeline->encryptedEnvironment->cipherText = 'error';
    $request->runPipelineRequest->pipeline->encryptedEnvironment->keyName = 'deserunt';
    $request->runPipelineRequest->pipeline->environment = [
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->runPipelineRequest->pipeline->resources = new Resources();
    $request->runPipelineRequest->pipeline->resources->projectId = 'delectus';
    $request->runPipelineRequest->pipeline->resources->regions = [
        'suscipit',
        'molestiae',
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine = new VirtualMachine();
    $request->runPipelineRequest->pipeline->resources->virtualMachine->accelerators = [
        new Accelerator(),
        new Accelerator(),
        new Accelerator(),
        new Accelerator(),
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine->bootDiskSizeGb = 812169;
    $request->runPipelineRequest->pipeline->resources->virtualMachine->bootImage = 'voluptatum';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->cpuPlatform = 'iusto';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->disks = [
        new Disk(),
        new Disk(),
        new Disk(),
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine->dockerCacheImages = [
        'recusandae',
        'temporibus',
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine->enableStackdriverMonitoring = false;
    $request->runPipelineRequest->pipeline->resources->virtualMachine->labels = [
        'quis' => 'veritatis',
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine->machineType = 'deserunt';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->network = new Network();
    $request->runPipelineRequest->pipeline->resources->virtualMachine->network->name = 'Roberta Sipes';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->network->subnetwork = 'odit';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->network->usePrivateAddress = false;
    $request->runPipelineRequest->pipeline->resources->virtualMachine->nvidiaDriverVersion = 'at';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->preemptible = false;
    $request->runPipelineRequest->pipeline->resources->virtualMachine->reservation = 'at';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->serviceAccount = new ServiceAccount();
    $request->runPipelineRequest->pipeline->resources->virtualMachine->serviceAccount->email = 'Jaren.Schmidt52@hotmail.com';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->serviceAccount->scopes = [
        'dolorum',
        'dicta',
        'nam',
        'officia',
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine->volumes = [
        new Volume(),
        new Volume(),
        new Volume(),
    ];
    $request->runPipelineRequest->pipeline->resources->zones = [
        'deleniti',
    ];
    $request->runPipelineRequest->pipeline->timeout = 'hic';
    $request->runPipelineRequest->pubSubTopic = 'optio';
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'molestiae';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new GenomicsPipelinesRunSecurity();
    $requestSecurity->option1 = new GenomicsPipelinesRunSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pipelines->genomicsPipelinesRun($request, $requestSecurity);

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


### [pipelines](docs/pipelines/README.md)

* [genomicsPipelinesRun](docs/pipelines/README.md#genomicspipelinesrun) - Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa

### [projects](docs/projects/README.md)

* [genomicsProjectsOperationsCancel](docs/projects/README.md#genomicsprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`
* [genomicsProjectsOperationsList](docs/projects/README.md#genomicsprojectsoperationslist) - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`
* [genomicsProjectsWorkersCheckIn](docs/projects/README.md#genomicsprojectsworkerscheckin) - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

### [workers](docs/workers/README.md)

* [genomicsWorkersCheckIn](docs/workers/README.md#genomicsworkerscheckin) - The worker uses this method to retrieve the assigned operation and provide periodic status updates.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
