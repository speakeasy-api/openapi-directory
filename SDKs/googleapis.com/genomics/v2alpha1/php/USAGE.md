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