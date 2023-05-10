# pipelines

### Available Operations

* [genomicsPipelinesRun](#genomicspipelinesrun) - Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa

## genomicsPipelinesRun

Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runPipelineRequest = new RunPipelineRequest();
    $request->runPipelineRequest->labels = [
        'aspernatur' => 'perferendis',
        'ad' => 'natus',
        'sed' => 'iste',
    ];
    $request->runPipelineRequest->pipeline = new Pipeline();
    $request->runPipelineRequest->pipeline->actions = [
        new Action(),
    ];
    $request->runPipelineRequest->pipeline->encryptedEnvironment = new Secret();
    $request->runPipelineRequest->pipeline->encryptedEnvironment->cipherText = 'natus';
    $request->runPipelineRequest->pipeline->encryptedEnvironment->keyName = 'laboriosam';
    $request->runPipelineRequest->pipeline->environment = [
        'saepe' => 'fuga',
        'in' => 'corporis',
        'iste' => 'iure',
        'saepe' => 'quidem',
    ];
    $request->runPipelineRequest->pipeline->resources = new Resources();
    $request->runPipelineRequest->pipeline->resources->projectId = 'architecto';
    $request->runPipelineRequest->pipeline->resources->regions = [
        'reiciendis',
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine = new VirtualMachine();
    $request->runPipelineRequest->pipeline->resources->virtualMachine->accelerators = [
        new Accelerator(),
        new Accelerator(),
        new Accelerator(),
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine->bootDiskSizeGb = 653140;
    $request->runPipelineRequest->pipeline->resources->virtualMachine->bootImage = 'laborum';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->cpuPlatform = 'dolores';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->disks = [
        new Disk(),
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine->dockerCacheImages = [
        'explicabo',
        'nobis',
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine->enableStackdriverMonitoring = false;
    $request->runPipelineRequest->pipeline->resources->virtualMachine->labels = [
        'omnis' => 'nemo',
        'minima' => 'excepturi',
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine->machineType = 'accusantium';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->network = new Network();
    $request->runPipelineRequest->pipeline->resources->virtualMachine->network->name = 'Cecilia Yundt MD';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->network->subnetwork = 'dolorem';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->network->usePrivateAddress = false;
    $request->runPipelineRequest->pipeline->resources->virtualMachine->nvidiaDriverVersion = 'culpa';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->preemptible = false;
    $request->runPipelineRequest->pipeline->resources->virtualMachine->reservation = 'consequuntur';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->serviceAccount = new ServiceAccount();
    $request->runPipelineRequest->pipeline->resources->virtualMachine->serviceAccount->email = 'Madaline41@hotmail.com';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->serviceAccount->scopes = [
        'molestiae',
        'velit',
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine->volumes = [
        new Volume(),
        new Volume(),
        new Volume(),
    ];
    $request->runPipelineRequest->pipeline->resources->zones = [
        'quis',
    ];
    $request->runPipelineRequest->pipeline->timeout = 'vitae';
    $request->runPipelineRequest->pubSubTopic = 'laborum';
    $request->accessToken = 'animi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odit';
    $request->fields = 'quo';
    $request->key = 'sequi';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'possimus';

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
