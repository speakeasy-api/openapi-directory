# models

### Available Operations

* [bigqueryModelsDelete](#bigquerymodelsdelete) - Deletes the model specified by modelId from the dataset.
* [bigqueryModelsGet](#bigquerymodelsget) - Gets the specified model resource by model ID.
* [bigqueryModelsList](#bigquerymodelslist) - Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.
* [bigqueryModelsPatch](#bigquerymodelspatch) - Patch specific fields in the specified model.

## bigqueryModelsDelete

Deletes the model specified by modelId from the dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryModelsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'ullam';
    $request->fields = 'expedita';
    $request->key = 'nihil';
    $request->modelId = 'repellat';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->projectId = 'sed';
    $request->quotaUser = 'saepe';
    $request->userIp = 'pariatur';

    $requestSecurity = new BigqueryModelsDeleteSecurity();
    $requestSecurity->option1 = new BigqueryModelsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->models->bigqueryModelsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryModelsGet

Gets the specified model resource by model ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryModelsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'accusantium';
    $request->fields = 'consequuntur';
    $request->key = 'praesentium';
    $request->modelId = 'natus';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->projectId = 'sunt';
    $request->quotaUser = 'quo';
    $request->userIp = 'illum';

    $requestSecurity = new BigqueryModelsGetSecurity();
    $requestSecurity->option1 = new BigqueryModelsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->models->bigqueryModelsGet($request, $requestSecurity);

    if ($response->model !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryModelsList

Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryModelsListRequest();
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'pariatur';
    $request->fields = 'maxime';
    $request->key = 'ea';
    $request->maxResults = 569101;
    $request->oauthToken = 'odit';
    $request->pageToken = 'ea';
    $request->prettyPrint = false;
    $request->projectId = 'accusantium';
    $request->quotaUser = 'ab';
    $request->userIp = 'maiores';

    $requestSecurity = new BigqueryModelsListSecurity();
    $requestSecurity->option1 = new BigqueryModelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->models->bigqueryModelsList($request, $requestSecurity);

    if ($response->listModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryModelsPatch

Patch specific fields in the specified model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModelInput;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HparamSearchSpaces;
use \OpenAPI\OpenAPI\Models\Shared\StringHparamSearchSpace;
use \OpenAPI\OpenAPI\Models\Shared\IntHparamSearchSpace;
use \OpenAPI\OpenAPI\Models\Shared\IntCandidates;
use \OpenAPI\OpenAPI\Models\Shared\IntRange;
use \OpenAPI\OpenAPI\Models\Shared\DoubleHparamSearchSpace;
use \OpenAPI\OpenAPI\Models\Shared\DoubleCandidates;
use \OpenAPI\OpenAPI\Models\Shared\DoubleRange;
use \OpenAPI\OpenAPI\Models\Shared\IntArrayHparamSearchSpace;
use \OpenAPI\OpenAPI\Models\Shared\IntArray;
use \OpenAPI\OpenAPI\Models\Shared\ModelReference;
use \OpenAPI\OpenAPI\Models\Shared\TrainingRunInput;
use \OpenAPI\OpenAPI\Models\Shared\DataSplitResult;
use \OpenAPI\OpenAPI\Models\Shared\TableReference;
use \OpenAPI\OpenAPI\Models\Shared\EvaluationMetrics;
use \OpenAPI\OpenAPI\Models\Shared\ArimaForecastingMetrics;
use \OpenAPI\OpenAPI\Models\Shared\ArimaFittingMetrics;
use \OpenAPI\OpenAPI\Models\Shared\ArimaSingleModelForecastingMetrics;
use \OpenAPI\OpenAPI\Models\Shared\ArimaOrder;
use \OpenAPI\OpenAPI\Models\Shared\ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArimaForecastingMetricsSeasonalPeriodsEnum;
use \OpenAPI\OpenAPI\Models\Shared\BinaryClassificationMetrics;
use \OpenAPI\OpenAPI\Models\Shared\AggregateClassificationMetrics;
use \OpenAPI\OpenAPI\Models\Shared\BinaryConfusionMatrix;
use \OpenAPI\OpenAPI\Models\Shared\ClusteringMetrics;
use \OpenAPI\OpenAPI\Models\Shared\Cluster;
use \OpenAPI\OpenAPI\Models\Shared\FeatureValue;
use \OpenAPI\OpenAPI\Models\Shared\CategoricalValue;
use \OpenAPI\OpenAPI\Models\Shared\CategoryCount;
use \OpenAPI\OpenAPI\Models\Shared\DimensionalityReductionMetrics;
use \OpenAPI\OpenAPI\Models\Shared\MultiClassClassificationMetrics;
use \OpenAPI\OpenAPI\Models\Shared\ConfusionMatrix;
use \OpenAPI\OpenAPI\Models\Shared\Row;
use \OpenAPI\OpenAPI\Models\Shared\Entry;
use \OpenAPI\OpenAPI\Models\Shared\RankingMetrics;
use \OpenAPI\OpenAPI\Models\Shared\RegressionMetrics;
use \OpenAPI\OpenAPI\Models\Shared\GlobalExplanation;
use \OpenAPI\OpenAPI\Models\Shared\Explanation;
use \OpenAPI\OpenAPI\Models\Shared\TrainingOptions;
use \OpenAPI\OpenAPI\Models\Shared\TrainingOptionsBoosterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingOptionsColorSpaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingOptionsDartNormalizeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingOptionsDataFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingOptionsDataSplitMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingOptionsDistanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingOptionsFeedbackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingOptionsHolidayRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingOptionsHparamTuningObjectivesEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingOptionsKmeansInitializationMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingOptionsLearnRateStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingOptionsLossTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingOptionsOptimizationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrainingOptionsTreeMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryModelsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryModelsPatchRequest();
    $request->modelInput = new ModelInput();
    $request->modelInput->bestTrialId = 'quidem';
    $request->modelInput->description = 'ipsam';
    $request->modelInput->encryptionConfiguration = new EncryptionConfiguration();
    $request->modelInput->encryptionConfiguration->kmsKeyName = 'voluptate';
    $request->modelInput->expirationTime = 'autem';
    $request->modelInput->friendlyName = 'nam';
    $request->modelInput->hparamSearchSpaces = new HparamSearchSpaces();
    $request->modelInput->hparamSearchSpaces->activationFn = new StringHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->activationFn->candidates = [
        'pariatur',
    ];
    $request->modelInput->hparamSearchSpaces->batchSize = new IntHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->batchSize->candidates = new IntCandidates();
    $request->modelInput->hparamSearchSpaces->batchSize->candidates->candidates = [
        'voluptatibus',
        'perferendis',
    ];
    $request->modelInput->hparamSearchSpaces->batchSize->range = new IntRange();
    $request->modelInput->hparamSearchSpaces->batchSize->range->max = 'fugiat';
    $request->modelInput->hparamSearchSpaces->batchSize->range->min = 'amet';
    $request->modelInput->hparamSearchSpaces->boosterType = new StringHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->boosterType->candidates = [
        'cumque',
    ];
    $request->modelInput->hparamSearchSpaces->colsampleBylevel = new DoubleHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->colsampleBylevel->candidates = new DoubleCandidates();
    $request->modelInput->hparamSearchSpaces->colsampleBylevel->candidates->candidates = [
        9441.24,
        7299.91,
    ];
    $request->modelInput->hparamSearchSpaces->colsampleBylevel->range = new DoubleRange();
    $request->modelInput->hparamSearchSpaces->colsampleBylevel->range->max = 7499.99;
    $request->modelInput->hparamSearchSpaces->colsampleBylevel->range->min = 1716.29;
    $request->modelInput->hparamSearchSpaces->colsampleBynode = new DoubleHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->colsampleBynode->candidates = new DoubleCandidates();
    $request->modelInput->hparamSearchSpaces->colsampleBynode->candidates->candidates = [
        5210.37,
        4895.49,
    ];
    $request->modelInput->hparamSearchSpaces->colsampleBynode->range = new DoubleRange();
    $request->modelInput->hparamSearchSpaces->colsampleBynode->range->max = 543.38;
    $request->modelInput->hparamSearchSpaces->colsampleBynode->range->min = 3389.85;
    $request->modelInput->hparamSearchSpaces->colsampleBytree = new DoubleHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->colsampleBytree->candidates = new DoubleCandidates();
    $request->modelInput->hparamSearchSpaces->colsampleBytree->candidates->candidates = [
        1794.9,
    ];
    $request->modelInput->hparamSearchSpaces->colsampleBytree->range = new DoubleRange();
    $request->modelInput->hparamSearchSpaces->colsampleBytree->range->max = 185.21;
    $request->modelInput->hparamSearchSpaces->colsampleBytree->range->min = 1709.86;
    $request->modelInput->hparamSearchSpaces->dartNormalizeType = new StringHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->dartNormalizeType->candidates = [
        'quam',
        'dolor',
        'vero',
        'nostrum',
    ];
    $request->modelInput->hparamSearchSpaces->dropout = new DoubleHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->dropout->candidates = new DoubleCandidates();
    $request->modelInput->hparamSearchSpaces->dropout->candidates->candidates = [
        9280.82,
        6082.53,
        7044.15,
        5966.56,
    ];
    $request->modelInput->hparamSearchSpaces->dropout->range = new DoubleRange();
    $request->modelInput->hparamSearchSpaces->dropout->range->max = 318.38;
    $request->modelInput->hparamSearchSpaces->dropout->range->min = 7836.45;
    $request->modelInput->hparamSearchSpaces->hiddenUnits = new IntArrayHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->hiddenUnits->candidates = [
        new IntArray(),
    ];
    $request->modelInput->hparamSearchSpaces->l1Reg = new DoubleHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->l1Reg->candidates = new DoubleCandidates();
    $request->modelInput->hparamSearchSpaces->l1Reg->candidates->candidates = [
        6214.79,
        503.7,
        5772.29,
    ];
    $request->modelInput->hparamSearchSpaces->l1Reg->range = new DoubleRange();
    $request->modelInput->hparamSearchSpaces->l1Reg->range->max = 6990.98;
    $request->modelInput->hparamSearchSpaces->l1Reg->range->min = 2378.93;
    $request->modelInput->hparamSearchSpaces->l2Reg = new DoubleHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->l2Reg->candidates = new DoubleCandidates();
    $request->modelInput->hparamSearchSpaces->l2Reg->candidates->candidates = [
        9342.14,
        2672.62,
        6139.66,
        6790.91,
    ];
    $request->modelInput->hparamSearchSpaces->l2Reg->range = new DoubleRange();
    $request->modelInput->hparamSearchSpaces->l2Reg->range->max = 5356.33;
    $request->modelInput->hparamSearchSpaces->l2Reg->range->min = 8642.82;
    $request->modelInput->hparamSearchSpaces->learnRate = new DoubleHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->learnRate->candidates = new DoubleCandidates();
    $request->modelInput->hparamSearchSpaces->learnRate->candidates->candidates = [
        7508.44,
        7301.22,
        9644.9,
    ];
    $request->modelInput->hparamSearchSpaces->learnRate->range = new DoubleRange();
    $request->modelInput->hparamSearchSpaces->learnRate->range->max = 3119.45;
    $request->modelInput->hparamSearchSpaces->learnRate->range->min = 5542.42;
    $request->modelInput->hparamSearchSpaces->maxTreeDepth = new IntHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->maxTreeDepth->candidates = new IntCandidates();
    $request->modelInput->hparamSearchSpaces->maxTreeDepth->candidates->candidates = [
        'dolorem',
        'dolorem',
    ];
    $request->modelInput->hparamSearchSpaces->maxTreeDepth->range = new IntRange();
    $request->modelInput->hparamSearchSpaces->maxTreeDepth->range->max = 'dolor';
    $request->modelInput->hparamSearchSpaces->maxTreeDepth->range->min = 'qui';
    $request->modelInput->hparamSearchSpaces->minSplitLoss = new DoubleHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->minSplitLoss->candidates = new DoubleCandidates();
    $request->modelInput->hparamSearchSpaces->minSplitLoss->candidates->candidates = [
        9443.73,
    ];
    $request->modelInput->hparamSearchSpaces->minSplitLoss->range = new DoubleRange();
    $request->modelInput->hparamSearchSpaces->minSplitLoss->range->max = 5695.74;
    $request->modelInput->hparamSearchSpaces->minSplitLoss->range->min = 7395.51;
    $request->modelInput->hparamSearchSpaces->minTreeChildWeight = new IntHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->minTreeChildWeight->candidates = new IntCandidates();
    $request->modelInput->hparamSearchSpaces->minTreeChildWeight->candidates->candidates = [
        'dignissimos',
        'reiciendis',
    ];
    $request->modelInput->hparamSearchSpaces->minTreeChildWeight->range = new IntRange();
    $request->modelInput->hparamSearchSpaces->minTreeChildWeight->range->max = 'amet';
    $request->modelInput->hparamSearchSpaces->minTreeChildWeight->range->min = 'dolorum';
    $request->modelInput->hparamSearchSpaces->numClusters = new IntHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->numClusters->candidates = new IntCandidates();
    $request->modelInput->hparamSearchSpaces->numClusters->candidates->candidates = [
        'veritatis',
        'ipsa',
    ];
    $request->modelInput->hparamSearchSpaces->numClusters->range = new IntRange();
    $request->modelInput->hparamSearchSpaces->numClusters->range->max = 'ipsa';
    $request->modelInput->hparamSearchSpaces->numClusters->range->min = 'iure';
    $request->modelInput->hparamSearchSpaces->numFactors = new IntHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->numFactors->candidates = new IntCandidates();
    $request->modelInput->hparamSearchSpaces->numFactors->candidates->candidates = [
        'quaerat',
        'accusamus',
    ];
    $request->modelInput->hparamSearchSpaces->numFactors->range = new IntRange();
    $request->modelInput->hparamSearchSpaces->numFactors->range->max = 'quidem';
    $request->modelInput->hparamSearchSpaces->numFactors->range->min = 'voluptatibus';
    $request->modelInput->hparamSearchSpaces->numParallelTree = new IntHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->numParallelTree->candidates = new IntCandidates();
    $request->modelInput->hparamSearchSpaces->numParallelTree->candidates->candidates = [
        'natus',
        'eos',
    ];
    $request->modelInput->hparamSearchSpaces->numParallelTree->range = new IntRange();
    $request->modelInput->hparamSearchSpaces->numParallelTree->range->max = 'atque';
    $request->modelInput->hparamSearchSpaces->numParallelTree->range->min = 'sit';
    $request->modelInput->hparamSearchSpaces->optimizer = new StringHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->optimizer->candidates = [
        'ab',
        'soluta',
        'dolorum',
        'iusto',
    ];
    $request->modelInput->hparamSearchSpaces->subsample = new DoubleHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->subsample->candidates = new DoubleCandidates();
    $request->modelInput->hparamSearchSpaces->subsample->candidates->candidates = [
        6770.82,
        5365.79,
    ];
    $request->modelInput->hparamSearchSpaces->subsample->range = new DoubleRange();
    $request->modelInput->hparamSearchSpaces->subsample->range->max = 6070.45;
    $request->modelInput->hparamSearchSpaces->subsample->range->min = 8966.72;
    $request->modelInput->hparamSearchSpaces->treeMethod = new StringHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->treeMethod->candidates = [
        'asperiores',
        'nihil',
        'ipsum',
    ];
    $request->modelInput->hparamSearchSpaces->walsAlpha = new DoubleHparamSearchSpace();
    $request->modelInput->hparamSearchSpaces->walsAlpha->candidates = new DoubleCandidates();
    $request->modelInput->hparamSearchSpaces->walsAlpha->candidates->candidates = [
        6630.78,
        9064.18,
    ];
    $request->modelInput->hparamSearchSpaces->walsAlpha->range = new DoubleRange();
    $request->modelInput->hparamSearchSpaces->walsAlpha->range->max = 2633.22;
    $request->modelInput->hparamSearchSpaces->walsAlpha->range->min = 1372.2;
    $request->modelInput->labels = [
        'amet' => 'optio',
    ];
    $request->modelInput->modelReference = new ModelReference();
    $request->modelInput->modelReference->datasetId = 'accusamus';
    $request->modelInput->modelReference->modelId = 'ad';
    $request->modelInput->modelReference->projectId = 'saepe';
    $request->modelInput->trainingRuns = [
        new TrainingRunInput(),
        new TrainingRunInput(),
    ];
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'deserunt';
    $request->fields = 'provident';
    $request->key = 'minima';
    $request->modelId = 'repellendus';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->projectId = 'similique';
    $request->quotaUser = 'alias';
    $request->userIp = 'at';

    $requestSecurity = new BigqueryModelsPatchSecurity();
    $requestSecurity->option1 = new BigqueryModelsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->models->bigqueryModelsPatch($request, $requestSecurity);

    if ($response->model !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
