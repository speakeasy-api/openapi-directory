# projects

### Available Operations

* [lifesciencesProjectsLocationsList](#lifesciencesprojectslocationslist) - Lists information about the supported locations for this service.
* [lifesciencesProjectsLocationsOperationsCancel](#lifesciencesprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.cancel`
* [lifesciencesProjectsLocationsOperationsGet](#lifesciencesprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.get`
* [lifesciencesProjectsLocationsOperationsList](#lifesciencesprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.list`
* [lifesciencesProjectsLocationsPipelinesRun](#lifesciencesprojectslocationspipelinesrun) - Runs a pipeline. The returned Operation's metadata field will contain a google.cloud.lifesciences.v2beta.Metadata object describing the status of the pipeline execution. The response field will contain a google.cloud.lifesciences.v2beta.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the *Life Sciences Service Agent* must have access to your project. This is done automatically when the Cloud Life Sciences API is first enabled, but if you delete this permission you must disable and re-enable the API to grant the Life Sciences Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `lifesciences.workflows.run`

## lifesciencesProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LifesciencesProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LifesciencesProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LifesciencesProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'voluptatum';
    $request->filter = 'iusto';
    $request->key = 'excepturi';
    $request->name = 'Mrs. Sophie Smith MD';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 368241;
    $request->pageToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new LifesciencesProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->lifesciencesProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lifesciencesProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.cancel`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LifesciencesProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LifesciencesProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LifesciencesProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'maiores' => 'molestiae',
        'quod' => 'quod',
        'esse' => 'totam',
        'porro' => 'dolorum',
    ];
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'occaecati';
    $request->key = 'fugit';
    $request->name = 'Irvin Rosenbaum III';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new LifesciencesProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->lifesciencesProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lifesciencesProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.get`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LifesciencesProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LifesciencesProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LifesciencesProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'aspernatur';
    $request->key = 'perferendis';
    $request->name = 'Faye Cormier';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new LifesciencesProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->lifesciencesProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lifesciencesProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.list`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LifesciencesProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LifesciencesProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LifesciencesProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'iure';
    $request->filter = 'saepe';
    $request->key = 'quidem';
    $request->name = 'Brenda Wisozk';
    $request->oauthToken = 'laborum';
    $request->pageSize = 170909;
    $request->pageToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new LifesciencesProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->lifesciencesProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lifesciencesProjectsLocationsPipelinesRun

Runs a pipeline. The returned Operation's metadata field will contain a google.cloud.lifesciences.v2beta.Metadata object describing the status of the pipeline execution. The response field will contain a google.cloud.lifesciences.v2beta.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the *Life Sciences Service Agent* must have access to your project. This is done automatically when the Cloud Life Sciences API is first enabled, but if you delete this permission you must disable and re-enable the API to grant the Life Sciences Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `lifesciences.workflows.run`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LifesciencesProjectsLocationsPipelinesRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunPipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\Pipeline;
use \OpenAPI\OpenAPI\Models\Shared\Action;
use \OpenAPI\OpenAPI\Models\Shared\Secret;
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
use \OpenAPI\OpenAPI\Models\Operations\LifesciencesProjectsLocationsPipelinesRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LifesciencesProjectsLocationsPipelinesRunRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runPipelineRequest = new RunPipelineRequest();
    $request->runPipelineRequest->labels = [
        'nemo' => 'minima',
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->runPipelineRequest->pipeline = new Pipeline();
    $request->runPipelineRequest->pipeline->actions = [
        new Action(),
        new Action(),
        new Action(),
        new Action(),
    ];
    $request->runPipelineRequest->pipeline->encryptedEnvironment = new Secret();
    $request->runPipelineRequest->pipeline->encryptedEnvironment->cipherText = 'sapiente';
    $request->runPipelineRequest->pipeline->encryptedEnvironment->keyName = 'architecto';
    $request->runPipelineRequest->pipeline->environment = [
        'dolorem' => 'culpa',
        'consequuntur' => 'repellat',
        'mollitia' => 'occaecati',
    ];
    $request->runPipelineRequest->pipeline->resources = new Resources();
    $request->runPipelineRequest->pipeline->resources->regions = [
        'commodi',
        'quam',
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine = new VirtualMachine();
    $request->runPipelineRequest->pipeline->resources->virtualMachine->accelerators = [
        new Accelerator(),
        new Accelerator(),
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine->bootDiskSizeGb = 244425;
    $request->runPipelineRequest->pipeline->resources->virtualMachine->bootImage = 'error';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->cpuPlatform = 'quia';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->disks = [
        new Disk(),
        new Disk(),
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine->dockerCacheImages = [
        'laborum',
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine->enableStackdriverMonitoring = false;
    $request->runPipelineRequest->pipeline->resources->virtualMachine->labels = [
        'enim' => 'odit',
        'quo' => 'sequi',
        'tenetur' => 'ipsam',
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine->machineType = 'id';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->network = new Network();
    $request->runPipelineRequest->pipeline->resources->virtualMachine->network->network = 'possimus';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->network->subnetwork = 'aut';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->network->usePrivateAddress = false;
    $request->runPipelineRequest->pipeline->resources->virtualMachine->nvidiaDriverVersion = 'quasi';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->preemptible = false;
    $request->runPipelineRequest->pipeline->resources->virtualMachine->reservation = 'error';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->serviceAccount = new ServiceAccount();
    $request->runPipelineRequest->pipeline->resources->virtualMachine->serviceAccount->email = 'Margie_Boyer87@hotmail.com';
    $request->runPipelineRequest->pipeline->resources->virtualMachine->serviceAccount->scopes = [
        'praesentium',
        'voluptatibus',
    ];
    $request->runPipelineRequest->pipeline->resources->virtualMachine->volumes = [
        new Volume(),
    ];
    $request->runPipelineRequest->pipeline->resources->zones = [
        'voluptate',
        'cum',
        'perferendis',
    ];
    $request->runPipelineRequest->pipeline->timeout = 'doloremque';
    $request->runPipelineRequest->pubSubTopic = 'reprehenderit';
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'corporis';
    $request->key = 'dolore';
    $request->oauthToken = 'iusto';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new LifesciencesProjectsLocationsPipelinesRunSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->lifesciencesProjectsLocationsPipelinesRun($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
