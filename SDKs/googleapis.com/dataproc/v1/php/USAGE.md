<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsLocationsBatchesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchInput;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentConfig;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionConfig;
use \OpenAPI\OpenAPI\Models\Shared\PeripheralsConfig;
use \OpenAPI\OpenAPI\Models\Shared\SparkHistoryServerConfig;
use \OpenAPI\OpenAPI\Models\Shared\PySparkBatch;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeConfig;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\UsageMetrics;
use \OpenAPI\OpenAPI\Models\Shared\UsageSnapshot;
use \OpenAPI\OpenAPI\Models\Shared\SparkBatch;
use \OpenAPI\OpenAPI\Models\Shared\SparkRBatch;
use \OpenAPI\OpenAPI\Models\Shared\SparkSqlBatch;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsLocationsBatchesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsLocationsBatchesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchInput = new BatchInput();
    $request->batchInput->environmentConfig = new EnvironmentConfig();
    $request->batchInput->environmentConfig->executionConfig = new ExecutionConfig();
    $request->batchInput->environmentConfig->executionConfig->idleTtl = 'provident';
    $request->batchInput->environmentConfig->executionConfig->kmsKey = 'distinctio';
    $request->batchInput->environmentConfig->executionConfig->networkTags = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->batchInput->environmentConfig->executionConfig->networkUri = 'vel';
    $request->batchInput->environmentConfig->executionConfig->serviceAccount = 'error';
    $request->batchInput->environmentConfig->executionConfig->stagingBucket = 'deserunt';
    $request->batchInput->environmentConfig->executionConfig->subnetworkUri = 'suscipit';
    $request->batchInput->environmentConfig->executionConfig->ttl = 'iure';
    $request->batchInput->environmentConfig->peripheralsConfig = new PeripheralsConfig();
    $request->batchInput->environmentConfig->peripheralsConfig->metastoreService = 'magnam';
    $request->batchInput->environmentConfig->peripheralsConfig->sparkHistoryServerConfig = new SparkHistoryServerConfig();
    $request->batchInput->environmentConfig->peripheralsConfig->sparkHistoryServerConfig->dataprocCluster = 'debitis';
    $request->batchInput->labels = [
        'delectus' => 'tempora',
    ];
    $request->batchInput->pysparkBatch = new PySparkBatch();
    $request->batchInput->pysparkBatch->archiveUris = [
        'molestiae',
        'minus',
    ];
    $request->batchInput->pysparkBatch->args = [
        'voluptatum',
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->batchInput->pysparkBatch->fileUris = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->batchInput->pysparkBatch->jarFileUris = [
        'perferendis',
        'ipsam',
        'repellendus',
    ];
    $request->batchInput->pysparkBatch->mainPythonFileUri = 'sapiente';
    $request->batchInput->pysparkBatch->pythonFileUris = [
        'odit',
        'at',
        'at',
        'maiores',
    ];
    $request->batchInput->runtimeConfig = new RuntimeConfig();
    $request->batchInput->runtimeConfig->containerImage = 'molestiae';
    $request->batchInput->runtimeConfig->properties = [
        'quod' => 'esse',
        'totam' => 'porro',
        'dolorum' => 'dicta',
        'nam' => 'officia',
    ];
    $request->batchInput->runtimeConfig->version = 'occaecati';
    $request->batchInput->runtimeInfo = new RuntimeInfoInput();
    $request->batchInput->runtimeInfo->approximateUsage = new UsageMetrics();
    $request->batchInput->runtimeInfo->approximateUsage->milliDcuSeconds = 'fugit';
    $request->batchInput->runtimeInfo->approximateUsage->shuffleStorageGbSeconds = 'deleniti';
    $request->batchInput->runtimeInfo->currentUsage = new UsageSnapshot();
    $request->batchInput->runtimeInfo->currentUsage->milliDcu = 'hic';
    $request->batchInput->runtimeInfo->currentUsage->shuffleStorageGb = 'optio';
    $request->batchInput->runtimeInfo->currentUsage->snapshotTime = 'totam';
    $request->batchInput->sparkBatch = new SparkBatch();
    $request->batchInput->sparkBatch->archiveUris = [
        'commodi',
    ];
    $request->batchInput->sparkBatch->args = [
        'modi',
        'qui',
    ];
    $request->batchInput->sparkBatch->fileUris = [
        'cum',
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->batchInput->sparkBatch->jarFileUris = [
        'perferendis',
    ];
    $request->batchInput->sparkBatch->mainClass = 'ad';
    $request->batchInput->sparkBatch->mainJarFileUri = 'natus';
    $request->batchInput->sparkRBatch = new SparkRBatch();
    $request->batchInput->sparkRBatch->archiveUris = [
        'iste',
    ];
    $request->batchInput->sparkRBatch->args = [
        'natus',
    ];
    $request->batchInput->sparkRBatch->fileUris = [
        'hic',
        'saepe',
    ];
    $request->batchInput->sparkRBatch->mainRFileUri = 'fuga';
    $request->batchInput->sparkSqlBatch = new SparkSqlBatch();
    $request->batchInput->sparkSqlBatch->jarFileUris = [
        'corporis',
        'iste',
    ];
    $request->batchInput->sparkSqlBatch->queryFileUri = 'iure';
    $request->batchInput->sparkSqlBatch->queryVariables = [
        'quidem' => 'architecto',
        'ipsa' => 'reiciendis',
        'est' => 'mollitia',
        'laborum' => 'dolores',
    ];
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->batchId = 'explicabo';
    $request->callback = 'nobis';
    $request->fields = 'enim';
    $request->key = 'omnis';
    $request->oauthToken = 'nemo';
    $request->parent = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->requestId = 'accusantium';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new DataprocProjectsLocationsBatchesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsLocationsBatchesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->