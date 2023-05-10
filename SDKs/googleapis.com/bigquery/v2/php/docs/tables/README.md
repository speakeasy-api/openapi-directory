# tables

### Available Operations

* [bigqueryTablesDelete](#bigquerytablesdelete) - Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
* [bigqueryTablesGet](#bigquerytablesget) - Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
* [bigqueryTablesGetIamPolicy](#bigquerytablesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [bigqueryTablesInsert](#bigquerytablesinsert) - Creates a new, empty table in the dataset.
* [bigqueryTablesList](#bigquerytableslist) - Lists all tables in the specified dataset. Requires the READER dataset role.
* [bigqueryTablesPatch](#bigquerytablespatch) - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
* [bigqueryTablesSetIamPolicy](#bigquerytablessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [bigqueryTablesTestIamPermissions](#bigquerytablestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [bigqueryTablesUpdate](#bigquerytablesupdate) - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.

## bigqueryTablesDelete

Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryTablesDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'eum';
    $request->fields = 'autem';
    $request->key = 'nobis';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->projectId = 'assumenda';
    $request->quotaUser = 'nulla';
    $request->tableId = 'voluptas';
    $request->userIp = 'libero';

    $requestSecurity = new BigqueryTablesDeleteSecurity();
    $requestSecurity->option1 = new BigqueryTablesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->bigqueryTablesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryTablesGet

Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryTablesGetRequest();
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'quasi';
    $request->fields = 'tempora';
    $request->key = 'numquam';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->projectId = 'provident';
    $request->quotaUser = 'ipsa';
    $request->selectedFields = 'molestiae';
    $request->tableId = 'magnam';
    $request->userIp = 'odio';
    $request->view = BigqueryTablesGetViewEnum::FULL;

    $requestSecurity = new BigqueryTablesGetSecurity();
    $requestSecurity->option1 = new BigqueryTablesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->bigqueryTablesGet($request, $requestSecurity);

    if ($response->table !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryTablesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryTablesGetIamPolicyRequest();
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 458515;
    $request->alt = AltEnum::JSON;
    $request->fields = 'esse';
    $request->key = 'rem';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'reprehenderit';
    $request->resource = 'quidem';
    $request->userIp = 'fugiat';

    $requestSecurity = new BigqueryTablesGetIamPolicySecurity();
    $requestSecurity->option1 = new BigqueryTablesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->bigqueryTablesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryTablesInsert

Creates a new, empty table in the dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Table;
use \OpenAPI\OpenAPI\Models\Shared\CloneDefinition;
use \OpenAPI\OpenAPI\Models\Shared\TableReference;
use \OpenAPI\OpenAPI\Models\Shared\Clustering;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ExternalDataConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AvroOptions;
use \OpenAPI\OpenAPI\Models\Shared\BigtableOptions;
use \OpenAPI\OpenAPI\Models\Shared\BigtableColumnFamily;
use \OpenAPI\OpenAPI\Models\Shared\BigtableColumn;
use \OpenAPI\OpenAPI\Models\Shared\CsvOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSheetsOptions;
use \OpenAPI\OpenAPI\Models\Shared\HivePartitioningOptions;
use \OpenAPI\OpenAPI\Models\Shared\ParquetOptions;
use \OpenAPI\OpenAPI\Models\Shared\TableSchema;
use \OpenAPI\OpenAPI\Models\Shared\TableFieldSchema;
use \OpenAPI\OpenAPI\Models\Shared\TableFieldSchemaCategories;
use \OpenAPI\OpenAPI\Models\Shared\TableFieldSchemaPolicyTags;
use \OpenAPI\OpenAPI\Models\Shared\MaterializedViewDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ModelDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ModelDefinitionModelOptions;
use \OpenAPI\OpenAPI\Models\Shared\BqmlTrainingRun;
use \OpenAPI\OpenAPI\Models\Shared\BqmlIterationResult;
use \OpenAPI\OpenAPI\Models\Shared\BqmlTrainingRunTrainingOptions;
use \OpenAPI\OpenAPI\Models\Shared\RangePartitioning;
use \OpenAPI\OpenAPI\Models\Shared\RangePartitioningRange;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotDefinition;
use \OpenAPI\OpenAPI\Models\Shared\Streamingbuffer;
use \OpenAPI\OpenAPI\Models\Shared\TimePartitioning;
use \OpenAPI\OpenAPI\Models\Shared\ViewDefinition;
use \OpenAPI\OpenAPI\Models\Shared\UserDefinedFunctionResource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryTablesInsertRequest();
    $request->table = new Table();
    $request->table->cloneDefinition = new CloneDefinition();
    $request->table->cloneDefinition->baseTableReference = new TableReference();
    $request->table->cloneDefinition->baseTableReference->datasetId = 'ut';
    $request->table->cloneDefinition->baseTableReference->projectId = 'eum';
    $request->table->cloneDefinition->baseTableReference->tableId = 'suscipit';
    $request->table->cloneDefinition->cloneTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-16T15:21:08.890Z');
    $request->table->clustering = new Clustering();
    $request->table->clustering->fields = [
        'quisquam',
        'veritatis',
        'ipsa',
    ];
    $request->table->creationTime = 'id';
    $request->table->defaultCollation = 'quidem';
    $request->table->defaultRoundingMode = 'neque';
    $request->table->description = 'quo';
    $request->table->encryptionConfiguration = new EncryptionConfiguration();
    $request->table->encryptionConfiguration->kmsKeyName = 'illum';
    $request->table->etag = 'quo';
    $request->table->expirationTime = 'fuga';
    $request->table->externalDataConfiguration = new ExternalDataConfiguration();
    $request->table->externalDataConfiguration->autodetect = false;
    $request->table->externalDataConfiguration->avroOptions = new AvroOptions();
    $request->table->externalDataConfiguration->avroOptions->useAvroLogicalTypes = false;
    $request->table->externalDataConfiguration->bigtableOptions = new BigtableOptions();
    $request->table->externalDataConfiguration->bigtableOptions->columnFamilies = [
        new BigtableColumnFamily(),
        new BigtableColumnFamily(),
    ];
    $request->table->externalDataConfiguration->bigtableOptions->ignoreUnspecifiedColumnFamilies = false;
    $request->table->externalDataConfiguration->bigtableOptions->readRowkeyAsString = false;
    $request->table->externalDataConfiguration->compression = 'eos';
    $request->table->externalDataConfiguration->connectionId = 'voluptas';
    $request->table->externalDataConfiguration->csvOptions = new CsvOptions();
    $request->table->externalDataConfiguration->csvOptions->allowJaggedRows = false;
    $request->table->externalDataConfiguration->csvOptions->allowQuotedNewlines = false;
    $request->table->externalDataConfiguration->csvOptions->encoding = 'ab';
    $request->table->externalDataConfiguration->csvOptions->fieldDelimiter = 'cupiditate';
    $request->table->externalDataConfiguration->csvOptions->nullMarker = 'consequatur';
    $request->table->externalDataConfiguration->csvOptions->preserveAsciiControlCharacters = false;
    $request->table->externalDataConfiguration->csvOptions->quote = 'tempora';
    $request->table->externalDataConfiguration->csvOptions->skipLeadingRows = 'debitis';
    $request->table->externalDataConfiguration->decimalTargetTypes = [
        'aspernatur',
        'sequi',
    ];
    $request->table->externalDataConfiguration->googleSheetsOptions = new GoogleSheetsOptions();
    $request->table->externalDataConfiguration->googleSheetsOptions->range = 'quo';
    $request->table->externalDataConfiguration->googleSheetsOptions->skipLeadingRows = 'esse';
    $request->table->externalDataConfiguration->hivePartitioningOptions = new HivePartitioningOptions();
    $request->table->externalDataConfiguration->hivePartitioningOptions->fields = [
        'aperiam',
        'distinctio',
        'quod',
        'dignissimos',
    ];
    $request->table->externalDataConfiguration->hivePartitioningOptions->mode = 'inventore';
    $request->table->externalDataConfiguration->hivePartitioningOptions->requirePartitionFilter = false;
    $request->table->externalDataConfiguration->hivePartitioningOptions->sourceUriPrefix = 'nihil';
    $request->table->externalDataConfiguration->ignoreUnknownValues = false;
    $request->table->externalDataConfiguration->maxBadRecords = 518835;
    $request->table->externalDataConfiguration->metadataCacheMode = 'accusamus';
    $request->table->externalDataConfiguration->objectMetadata = 'aliquam';
    $request->table->externalDataConfiguration->parquetOptions = new ParquetOptions();
    $request->table->externalDataConfiguration->parquetOptions->enableListInference = false;
    $request->table->externalDataConfiguration->parquetOptions->enumAsString = false;
    $request->table->externalDataConfiguration->referenceFileSchemaUri = 'odio';
    $request->table->externalDataConfiguration->schema = new TableSchema();
    $request->table->externalDataConfiguration->schema->fields = [
        new TableFieldSchema(),
        new TableFieldSchema(),
        new TableFieldSchema(),
    ];
    $request->table->externalDataConfiguration->sourceFormat = 'commodi';
    $request->table->externalDataConfiguration->sourceUris = [
        'dolores',
        'deserunt',
        'molestiae',
        'accusantium',
    ];
    $request->table->friendlyName = 'porro';
    $request->table->id = '688282aa-4825-462f-a22e-9817ee17cbe6';
    $request->table->kind = 'quasi';
    $request->table->labels = [
        'vel' => 'harum',
        'molestiae' => 'rerum',
        'occaecati' => 'minima',
        'distinctio' => 'eligendi',
    ];
    $request->table->lastModifiedTime = 'sit';
    $request->table->location = 'culpa';
    $request->table->materializedView = new MaterializedViewDefinition();
    $request->table->materializedView->allowNonIncrementalDefinition = false;
    $request->table->materializedView->enableRefresh = false;
    $request->table->materializedView->lastRefreshTime = 'tempore';
    $request->table->materializedView->maxStaleness = 'adipisci';
    $request->table->materializedView->query = 'cumque';
    $request->table->materializedView->refreshIntervalMs = 'consequuntur';
    $request->table->maxStaleness = 'consequatur';
    $request->table->model = new ModelDefinition();
    $request->table->model->modelOptions = new ModelDefinitionModelOptions();
    $request->table->model->modelOptions->labels = [
        'quaerat',
        'sapiente',
        'consectetur',
        'esse',
    ];
    $request->table->model->modelOptions->lossType = 'blanditiis';
    $request->table->model->modelOptions->modelType = 'provident';
    $request->table->model->trainingRuns = [
        new BqmlTrainingRun(),
        new BqmlTrainingRun(),
        new BqmlTrainingRun(),
        new BqmlTrainingRun(),
    ];
    $request->table->numBytes = 'nulla';
    $request->table->numLongTermBytes = 'quas';
    $request->table->numPhysicalBytes = 'esse';
    $request->table->numRows = 'quasi';
    $request->table->numActiveLogicalBytes = 'a';
    $request->table->numActivePhysicalBytes = 'error';
    $request->table->numLongTermLogicalBytes = 'sint';
    $request->table->numLongTermPhysicalBytes = 'pariatur';
    $request->table->numPartitions = 'possimus';
    $request->table->numTimeTravelPhysicalBytes = 'quia';
    $request->table->numTotalLogicalBytes = 'eveniet';
    $request->table->numTotalPhysicalBytes = 'asperiores';
    $request->table->rangePartitioning = new RangePartitioning();
    $request->table->rangePartitioning->field = 'facere';
    $request->table->rangePartitioning->range = new RangePartitioningRange();
    $request->table->rangePartitioning->range->end = 'veritatis';
    $request->table->rangePartitioning->range->interval = 'consequuntur';
    $request->table->rangePartitioning->range->start = 'quasi';
    $request->table->requirePartitionFilter = false;
    $request->table->schema = new TableSchema();
    $request->table->schema->fields = [
        new TableFieldSchema(),
        new TableFieldSchema(),
        new TableFieldSchema(),
    ];
    $request->table->selfLink = 'culpa';
    $request->table->snapshotDefinition = new SnapshotDefinition();
    $request->table->snapshotDefinition->baseTableReference = new TableReference();
    $request->table->snapshotDefinition->baseTableReference->datasetId = 'aliquid';
    $request->table->snapshotDefinition->baseTableReference->projectId = 'tenetur';
    $request->table->snapshotDefinition->baseTableReference->tableId = 'quae';
    $request->table->snapshotDefinition->snapshotTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-23T16:25:56.144Z');
    $request->table->streamingBuffer = new Streamingbuffer();
    $request->table->streamingBuffer->estimatedBytes = 'in';
    $request->table->streamingBuffer->estimatedRows = 'eius';
    $request->table->streamingBuffer->oldestEntryTime = 'libero';
    $request->table->tableReference = new TableReference();
    $request->table->tableReference->datasetId = 'illum';
    $request->table->tableReference->projectId = 'soluta';
    $request->table->tableReference->tableId = 'accusantium';
    $request->table->timePartitioning = new TimePartitioning();
    $request->table->timePartitioning->expirationMs = 'aliquam';
    $request->table->timePartitioning->field = 'sapiente';
    $request->table->timePartitioning->requirePartitionFilter = false;
    $request->table->timePartitioning->type = 'dicta';
    $request->table->type = 'ullam';
    $request->table->view = new ViewDefinition();
    $request->table->view->query = 'reprehenderit';
    $request->table->view->useExplicitColumnNames = false;
    $request->table->view->useLegacySql = false;
    $request->table->view->userDefinedFunctionResources = [
        new UserDefinedFunctionResource(),
        new UserDefinedFunctionResource(),
    ];
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'nisi';
    $request->fields = 'aut';
    $request->key = 'voluptatum';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->projectId = 'quibusdam';
    $request->quotaUser = 'ex';
    $request->userIp = 'deleniti';

    $requestSecurity = new BigqueryTablesInsertSecurity();
    $requestSecurity->option1 = new BigqueryTablesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->bigqueryTablesInsert($request, $requestSecurity);

    if ($response->table !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryTablesList

Lists all tables in the specified dataset. Requires the READER dataset role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryTablesListRequest();
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'itaque';
    $request->fields = 'dolorum';
    $request->key = 'architecto';
    $request->maxResults = 609178;
    $request->oauthToken = 'tenetur';
    $request->pageToken = 'quasi';
    $request->prettyPrint = false;
    $request->projectId = 'at';
    $request->quotaUser = 'et';
    $request->userIp = 'voluptate';

    $requestSecurity = new BigqueryTablesListSecurity();
    $requestSecurity->option1 = new BigqueryTablesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->bigqueryTablesList($request, $requestSecurity);

    if ($response->tableList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryTablesPatch

Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Table;
use \OpenAPI\OpenAPI\Models\Shared\CloneDefinition;
use \OpenAPI\OpenAPI\Models\Shared\TableReference;
use \OpenAPI\OpenAPI\Models\Shared\Clustering;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ExternalDataConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AvroOptions;
use \OpenAPI\OpenAPI\Models\Shared\BigtableOptions;
use \OpenAPI\OpenAPI\Models\Shared\BigtableColumnFamily;
use \OpenAPI\OpenAPI\Models\Shared\BigtableColumn;
use \OpenAPI\OpenAPI\Models\Shared\CsvOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSheetsOptions;
use \OpenAPI\OpenAPI\Models\Shared\HivePartitioningOptions;
use \OpenAPI\OpenAPI\Models\Shared\ParquetOptions;
use \OpenAPI\OpenAPI\Models\Shared\TableSchema;
use \OpenAPI\OpenAPI\Models\Shared\TableFieldSchema;
use \OpenAPI\OpenAPI\Models\Shared\TableFieldSchemaCategories;
use \OpenAPI\OpenAPI\Models\Shared\TableFieldSchemaPolicyTags;
use \OpenAPI\OpenAPI\Models\Shared\MaterializedViewDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ModelDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ModelDefinitionModelOptions;
use \OpenAPI\OpenAPI\Models\Shared\BqmlTrainingRun;
use \OpenAPI\OpenAPI\Models\Shared\BqmlIterationResult;
use \OpenAPI\OpenAPI\Models\Shared\BqmlTrainingRunTrainingOptions;
use \OpenAPI\OpenAPI\Models\Shared\RangePartitioning;
use \OpenAPI\OpenAPI\Models\Shared\RangePartitioningRange;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotDefinition;
use \OpenAPI\OpenAPI\Models\Shared\Streamingbuffer;
use \OpenAPI\OpenAPI\Models\Shared\TimePartitioning;
use \OpenAPI\OpenAPI\Models\Shared\ViewDefinition;
use \OpenAPI\OpenAPI\Models\Shared\UserDefinedFunctionResource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryTablesPatchRequest();
    $request->table = new Table();
    $request->table->cloneDefinition = new CloneDefinition();
    $request->table->cloneDefinition->baseTableReference = new TableReference();
    $request->table->cloneDefinition->baseTableReference->datasetId = 'ipsa';
    $request->table->cloneDefinition->baseTableReference->projectId = 'minima';
    $request->table->cloneDefinition->baseTableReference->tableId = 'veritatis';
    $request->table->cloneDefinition->cloneTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-06T10:21:42.350Z');
    $request->table->clustering = new Clustering();
    $request->table->clustering->fields = [
        'temporibus',
        'accusantium',
        'rem',
    ];
    $request->table->creationTime = 'aut';
    $request->table->defaultCollation = 'laudantium';
    $request->table->defaultRoundingMode = 'eum';
    $request->table->description = 'mollitia';
    $request->table->encryptionConfiguration = new EncryptionConfiguration();
    $request->table->encryptionConfiguration->kmsKeyName = 'ab';
    $request->table->etag = 'corrupti';
    $request->table->expirationTime = 'non';
    $request->table->externalDataConfiguration = new ExternalDataConfiguration();
    $request->table->externalDataConfiguration->autodetect = false;
    $request->table->externalDataConfiguration->avroOptions = new AvroOptions();
    $request->table->externalDataConfiguration->avroOptions->useAvroLogicalTypes = false;
    $request->table->externalDataConfiguration->bigtableOptions = new BigtableOptions();
    $request->table->externalDataConfiguration->bigtableOptions->columnFamilies = [
        new BigtableColumnFamily(),
    ];
    $request->table->externalDataConfiguration->bigtableOptions->ignoreUnspecifiedColumnFamilies = false;
    $request->table->externalDataConfiguration->bigtableOptions->readRowkeyAsString = false;
    $request->table->externalDataConfiguration->compression = 'dolor';
    $request->table->externalDataConfiguration->connectionId = 'occaecati';
    $request->table->externalDataConfiguration->csvOptions = new CsvOptions();
    $request->table->externalDataConfiguration->csvOptions->allowJaggedRows = false;
    $request->table->externalDataConfiguration->csvOptions->allowQuotedNewlines = false;
    $request->table->externalDataConfiguration->csvOptions->encoding = 'numquam';
    $request->table->externalDataConfiguration->csvOptions->fieldDelimiter = 'impedit';
    $request->table->externalDataConfiguration->csvOptions->nullMarker = 'explicabo';
    $request->table->externalDataConfiguration->csvOptions->preserveAsciiControlCharacters = false;
    $request->table->externalDataConfiguration->csvOptions->quote = 'voluptas';
    $request->table->externalDataConfiguration->csvOptions->skipLeadingRows = 'aut';
    $request->table->externalDataConfiguration->decimalTargetTypes = [
        'dicta',
        'maiores',
    ];
    $request->table->externalDataConfiguration->googleSheetsOptions = new GoogleSheetsOptions();
    $request->table->externalDataConfiguration->googleSheetsOptions->range = 'natus';
    $request->table->externalDataConfiguration->googleSheetsOptions->skipLeadingRows = 'velit';
    $request->table->externalDataConfiguration->hivePartitioningOptions = new HivePartitioningOptions();
    $request->table->externalDataConfiguration->hivePartitioningOptions->fields = [
        'voluptas',
        'asperiores',
        'aperiam',
        'ea',
    ];
    $request->table->externalDataConfiguration->hivePartitioningOptions->mode = 'quaerat';
    $request->table->externalDataConfiguration->hivePartitioningOptions->requirePartitionFilter = false;
    $request->table->externalDataConfiguration->hivePartitioningOptions->sourceUriPrefix = 'consequuntur';
    $request->table->externalDataConfiguration->ignoreUnknownValues = false;
    $request->table->externalDataConfiguration->maxBadRecords = 831520;
    $request->table->externalDataConfiguration->metadataCacheMode = 'officia';
    $request->table->externalDataConfiguration->objectMetadata = 'maxime';
    $request->table->externalDataConfiguration->parquetOptions = new ParquetOptions();
    $request->table->externalDataConfiguration->parquetOptions->enableListInference = false;
    $request->table->externalDataConfiguration->parquetOptions->enumAsString = false;
    $request->table->externalDataConfiguration->referenceFileSchemaUri = 'dignissimos';
    $request->table->externalDataConfiguration->schema = new TableSchema();
    $request->table->externalDataConfiguration->schema->fields = [
        new TableFieldSchema(),
        new TableFieldSchema(),
        new TableFieldSchema(),
    ];
    $request->table->externalDataConfiguration->sourceFormat = 'asperiores';
    $request->table->externalDataConfiguration->sourceUris = [
        'quae',
        'quaerat',
    ];
    $request->table->friendlyName = 'porro';
    $request->table->id = 'c413aa63-aae8-4d67-864d-bb675fd5e60b';
    $request->table->kind = 'consectetur';
    $request->table->labels = [
        'exercitationem' => 'earum',
        'facere' => 'numquam',
    ];
    $request->table->lastModifiedTime = 'doloribus';
    $request->table->location = 'suscipit';
    $request->table->materializedView = new MaterializedViewDefinition();
    $request->table->materializedView->allowNonIncrementalDefinition = false;
    $request->table->materializedView->enableRefresh = false;
    $request->table->materializedView->lastRefreshTime = 'reiciendis';
    $request->table->materializedView->maxStaleness = 'quidem';
    $request->table->materializedView->query = 'saepe';
    $request->table->materializedView->refreshIntervalMs = 'necessitatibus';
    $request->table->maxStaleness = 'dolore';
    $request->table->model = new ModelDefinition();
    $request->table->model->modelOptions = new ModelDefinitionModelOptions();
    $request->table->model->modelOptions->labels = [
        'asperiores',
    ];
    $request->table->model->modelOptions->lossType = 'adipisci';
    $request->table->model->modelOptions->modelType = 'non';
    $request->table->model->trainingRuns = [
        new BqmlTrainingRun(),
    ];
    $request->table->numBytes = 'beatae';
    $request->table->numLongTermBytes = 'dignissimos';
    $request->table->numPhysicalBytes = 'a';
    $request->table->numRows = 'debitis';
    $request->table->numActiveLogicalBytes = 'consectetur';
    $request->table->numActivePhysicalBytes = 'corporis';
    $request->table->numLongTermLogicalBytes = 'harum';
    $request->table->numLongTermPhysicalBytes = 'laboriosam';
    $request->table->numPartitions = 'ipsa';
    $request->table->numTimeTravelPhysicalBytes = 'voluptates';
    $request->table->numTotalLogicalBytes = 'libero';
    $request->table->numTotalPhysicalBytes = 'vitae';
    $request->table->rangePartitioning = new RangePartitioning();
    $request->table->rangePartitioning->field = 'accusamus';
    $request->table->rangePartitioning->range = new RangePartitioningRange();
    $request->table->rangePartitioning->range->end = 'similique';
    $request->table->rangePartitioning->range->interval = 'tempora';
    $request->table->rangePartitioning->range->start = 'aspernatur';
    $request->table->requirePartitionFilter = false;
    $request->table->schema = new TableSchema();
    $request->table->schema->fields = [
        new TableFieldSchema(),
        new TableFieldSchema(),
    ];
    $request->table->selfLink = 'voluptas';
    $request->table->snapshotDefinition = new SnapshotDefinition();
    $request->table->snapshotDefinition->baseTableReference = new TableReference();
    $request->table->snapshotDefinition->baseTableReference->datasetId = 'voluptas';
    $request->table->snapshotDefinition->baseTableReference->projectId = 'minima';
    $request->table->snapshotDefinition->baseTableReference->tableId = 'nobis';
    $request->table->snapshotDefinition->snapshotTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-11T09:37:00.887Z');
    $request->table->streamingBuffer = new Streamingbuffer();
    $request->table->streamingBuffer->estimatedBytes = 'minus';
    $request->table->streamingBuffer->estimatedRows = 'dolores';
    $request->table->streamingBuffer->oldestEntryTime = 'blanditiis';
    $request->table->tableReference = new TableReference();
    $request->table->tableReference->datasetId = 'in';
    $request->table->tableReference->projectId = 'dolore';
    $request->table->tableReference->tableId = 'aliquam';
    $request->table->timePartitioning = new TimePartitioning();
    $request->table->timePartitioning->expirationMs = 'officiis';
    $request->table->timePartitioning->field = 'temporibus';
    $request->table->timePartitioning->requirePartitionFilter = false;
    $request->table->timePartitioning->type = 'ullam';
    $request->table->type = 'adipisci';
    $request->table->view = new ViewDefinition();
    $request->table->view->query = 'cum';
    $request->table->view->useExplicitColumnNames = false;
    $request->table->view->useLegacySql = false;
    $request->table->view->userDefinedFunctionResources = [
        new UserDefinedFunctionResource(),
        new UserDefinedFunctionResource(),
        new UserDefinedFunctionResource(),
    ];
    $request->alt = AltEnum::JSON;
    $request->autodetectSchema = false;
    $request->datasetId = 'quas';
    $request->fields = 'hic';
    $request->key = 'nesciunt';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->projectId = 'corrupti';
    $request->quotaUser = 'pariatur';
    $request->tableId = 'totam';
    $request->userIp = 'hic';

    $requestSecurity = new BigqueryTablesPatchSecurity();
    $requestSecurity->option1 = new BigqueryTablesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->bigqueryTablesPatch($request, $requestSecurity);

    if ($response->table !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryTablesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryTablesSetIamPolicyRequest();
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'sit';
    $request->setIamPolicyRequest->policy->version = 699575;
    $request->setIamPolicyRequest->updateMask = 'sed';
    $request->alt = AltEnum::JSON;
    $request->fields = 'reiciendis';
    $request->key = 'explicabo';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->resource = 'voluptate';
    $request->userIp = 'expedita';

    $requestSecurity = new BigqueryTablesSetIamPolicySecurity();
    $requestSecurity->option1 = new BigqueryTablesSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->bigqueryTablesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryTablesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryTablesTestIamPermissionsRequest();
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'iste',
    ];
    $request->alt = AltEnum::JSON;
    $request->fields = 'dolore';
    $request->key = 'laborum';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->resource = 'commodi';
    $request->userIp = 'quidem';

    $requestSecurity = new BigqueryTablesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new BigqueryTablesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->bigqueryTablesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryTablesUpdate

Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Table;
use \OpenAPI\OpenAPI\Models\Shared\CloneDefinition;
use \OpenAPI\OpenAPI\Models\Shared\TableReference;
use \OpenAPI\OpenAPI\Models\Shared\Clustering;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ExternalDataConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AvroOptions;
use \OpenAPI\OpenAPI\Models\Shared\BigtableOptions;
use \OpenAPI\OpenAPI\Models\Shared\BigtableColumnFamily;
use \OpenAPI\OpenAPI\Models\Shared\BigtableColumn;
use \OpenAPI\OpenAPI\Models\Shared\CsvOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSheetsOptions;
use \OpenAPI\OpenAPI\Models\Shared\HivePartitioningOptions;
use \OpenAPI\OpenAPI\Models\Shared\ParquetOptions;
use \OpenAPI\OpenAPI\Models\Shared\TableSchema;
use \OpenAPI\OpenAPI\Models\Shared\TableFieldSchema;
use \OpenAPI\OpenAPI\Models\Shared\TableFieldSchemaCategories;
use \OpenAPI\OpenAPI\Models\Shared\TableFieldSchemaPolicyTags;
use \OpenAPI\OpenAPI\Models\Shared\MaterializedViewDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ModelDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ModelDefinitionModelOptions;
use \OpenAPI\OpenAPI\Models\Shared\BqmlTrainingRun;
use \OpenAPI\OpenAPI\Models\Shared\BqmlIterationResult;
use \OpenAPI\OpenAPI\Models\Shared\BqmlTrainingRunTrainingOptions;
use \OpenAPI\OpenAPI\Models\Shared\RangePartitioning;
use \OpenAPI\OpenAPI\Models\Shared\RangePartitioningRange;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotDefinition;
use \OpenAPI\OpenAPI\Models\Shared\Streamingbuffer;
use \OpenAPI\OpenAPI\Models\Shared\TimePartitioning;
use \OpenAPI\OpenAPI\Models\Shared\ViewDefinition;
use \OpenAPI\OpenAPI\Models\Shared\UserDefinedFunctionResource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTablesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryTablesUpdateRequest();
    $request->table = new Table();
    $request->table->cloneDefinition = new CloneDefinition();
    $request->table->cloneDefinition->baseTableReference = new TableReference();
    $request->table->cloneDefinition->baseTableReference->datasetId = 'explicabo';
    $request->table->cloneDefinition->baseTableReference->projectId = 'voluptas';
    $request->table->cloneDefinition->baseTableReference->tableId = 'unde';
    $request->table->cloneDefinition->cloneTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-14T06:36:04.449Z');
    $request->table->clustering = new Clustering();
    $request->table->clustering->fields = [
        'debitis',
        'illo',
        'reiciendis',
        'perferendis',
    ];
    $request->table->creationTime = 'corrupti';
    $request->table->defaultCollation = 'maiores';
    $request->table->defaultRoundingMode = 'incidunt';
    $request->table->description = 'sed';
    $request->table->encryptionConfiguration = new EncryptionConfiguration();
    $request->table->encryptionConfiguration->kmsKeyName = 'provident';
    $request->table->etag = 'eius';
    $request->table->expirationTime = 'necessitatibus';
    $request->table->externalDataConfiguration = new ExternalDataConfiguration();
    $request->table->externalDataConfiguration->autodetect = false;
    $request->table->externalDataConfiguration->avroOptions = new AvroOptions();
    $request->table->externalDataConfiguration->avroOptions->useAvroLogicalTypes = false;
    $request->table->externalDataConfiguration->bigtableOptions = new BigtableOptions();
    $request->table->externalDataConfiguration->bigtableOptions->columnFamilies = [
        new BigtableColumnFamily(),
    ];
    $request->table->externalDataConfiguration->bigtableOptions->ignoreUnspecifiedColumnFamilies = false;
    $request->table->externalDataConfiguration->bigtableOptions->readRowkeyAsString = false;
    $request->table->externalDataConfiguration->compression = 'ea';
    $request->table->externalDataConfiguration->connectionId = 'occaecati';
    $request->table->externalDataConfiguration->csvOptions = new CsvOptions();
    $request->table->externalDataConfiguration->csvOptions->allowJaggedRows = false;
    $request->table->externalDataConfiguration->csvOptions->allowQuotedNewlines = false;
    $request->table->externalDataConfiguration->csvOptions->encoding = 'quos';
    $request->table->externalDataConfiguration->csvOptions->fieldDelimiter = 'voluptatibus';
    $request->table->externalDataConfiguration->csvOptions->nullMarker = 'tempora';
    $request->table->externalDataConfiguration->csvOptions->preserveAsciiControlCharacters = false;
    $request->table->externalDataConfiguration->csvOptions->quote = 'tempora';
    $request->table->externalDataConfiguration->csvOptions->skipLeadingRows = 'voluptate';
    $request->table->externalDataConfiguration->decimalTargetTypes = [
        'ex',
        'sit',
        'non',
        'officiis',
    ];
    $request->table->externalDataConfiguration->googleSheetsOptions = new GoogleSheetsOptions();
    $request->table->externalDataConfiguration->googleSheetsOptions->range = 'praesentium';
    $request->table->externalDataConfiguration->googleSheetsOptions->skipLeadingRows = 'facilis';
    $request->table->externalDataConfiguration->hivePartitioningOptions = new HivePartitioningOptions();
    $request->table->externalDataConfiguration->hivePartitioningOptions->fields = [
        'incidunt',
        'ipsam',
    ];
    $request->table->externalDataConfiguration->hivePartitioningOptions->mode = 'debitis';
    $request->table->externalDataConfiguration->hivePartitioningOptions->requirePartitionFilter = false;
    $request->table->externalDataConfiguration->hivePartitioningOptions->sourceUriPrefix = 'rem';
    $request->table->externalDataConfiguration->ignoreUnknownValues = false;
    $request->table->externalDataConfiguration->maxBadRecords = 26522;
    $request->table->externalDataConfiguration->metadataCacheMode = 'nobis';
    $request->table->externalDataConfiguration->objectMetadata = 'error';
    $request->table->externalDataConfiguration->parquetOptions = new ParquetOptions();
    $request->table->externalDataConfiguration->parquetOptions->enableListInference = false;
    $request->table->externalDataConfiguration->parquetOptions->enumAsString = false;
    $request->table->externalDataConfiguration->referenceFileSchemaUri = 'veniam';
    $request->table->externalDataConfiguration->schema = new TableSchema();
    $request->table->externalDataConfiguration->schema->fields = [
        new TableFieldSchema(),
        new TableFieldSchema(),
    ];
    $request->table->externalDataConfiguration->sourceFormat = 'recusandae';
    $request->table->externalDataConfiguration->sourceUris = [
        'nulla',
        'magni',
        'aperiam',
        'saepe',
    ];
    $request->table->friendlyName = 'numquam';
    $request->table->id = '57e1858b-6a89-4fbe-ba5a-a8e4824d0ab4';
    $request->table->kind = 'consequatur';
    $request->table->labels = [
        'ipsam' => 'sit',
        'voluptatum' => 'quas',
    ];
    $request->table->lastModifiedTime = 'repudiandae';
    $request->table->location = 'corporis';
    $request->table->materializedView = new MaterializedViewDefinition();
    $request->table->materializedView->allowNonIncrementalDefinition = false;
    $request->table->materializedView->enableRefresh = false;
    $request->table->materializedView->lastRefreshTime = 'et';
    $request->table->materializedView->maxStaleness = 'blanditiis';
    $request->table->materializedView->query = 'ex';
    $request->table->materializedView->refreshIntervalMs = 'sed';
    $request->table->maxStaleness = 'sit';
    $request->table->model = new ModelDefinition();
    $request->table->model->modelOptions = new ModelDefinitionModelOptions();
    $request->table->model->modelOptions->labels = [
        'nostrum',
        'saepe',
    ];
    $request->table->model->modelOptions->lossType = 'error';
    $request->table->model->modelOptions->modelType = 'consequatur';
    $request->table->model->trainingRuns = [
        new BqmlTrainingRun(),
        new BqmlTrainingRun(),
    ];
    $request->table->numBytes = 'reiciendis';
    $request->table->numLongTermBytes = 'dolorem';
    $request->table->numPhysicalBytes = 'harum';
    $request->table->numRows = 'dicta';
    $request->table->numActiveLogicalBytes = 'architecto';
    $request->table->numActivePhysicalBytes = 'occaecati';
    $request->table->numLongTermLogicalBytes = 'labore';
    $request->table->numLongTermPhysicalBytes = 'quidem';
    $request->table->numPartitions = 'atque';
    $request->table->numTimeTravelPhysicalBytes = 'laborum';
    $request->table->numTotalLogicalBytes = 'nam';
    $request->table->numTotalPhysicalBytes = 'tenetur';
    $request->table->rangePartitioning = new RangePartitioning();
    $request->table->rangePartitioning->field = 'laboriosam';
    $request->table->rangePartitioning->range = new RangePartitioningRange();
    $request->table->rangePartitioning->range->end = 'alias';
    $request->table->rangePartitioning->range->interval = 'amet';
    $request->table->rangePartitioning->range->start = 'deserunt';
    $request->table->requirePartitionFilter = false;
    $request->table->schema = new TableSchema();
    $request->table->schema->fields = [
        new TableFieldSchema(),
        new TableFieldSchema(),
    ];
    $request->table->selfLink = 'unde';
    $request->table->snapshotDefinition = new SnapshotDefinition();
    $request->table->snapshotDefinition->baseTableReference = new TableReference();
    $request->table->snapshotDefinition->baseTableReference->datasetId = 'reiciendis';
    $request->table->snapshotDefinition->baseTableReference->projectId = 'provident';
    $request->table->snapshotDefinition->baseTableReference->tableId = 'repellendus';
    $request->table->snapshotDefinition->snapshotTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-04T07:18:04.809Z');
    $request->table->streamingBuffer = new Streamingbuffer();
    $request->table->streamingBuffer->estimatedBytes = 'perferendis';
    $request->table->streamingBuffer->estimatedRows = 'est';
    $request->table->streamingBuffer->oldestEntryTime = 'quidem';
    $request->table->tableReference = new TableReference();
    $request->table->tableReference->datasetId = 'reprehenderit';
    $request->table->tableReference->projectId = 'facere';
    $request->table->tableReference->tableId = 'fuga';
    $request->table->timePartitioning = new TimePartitioning();
    $request->table->timePartitioning->expirationMs = 'praesentium';
    $request->table->timePartitioning->field = 'mollitia';
    $request->table->timePartitioning->requirePartitionFilter = false;
    $request->table->timePartitioning->type = 'veniam';
    $request->table->type = 'voluptatem';
    $request->table->view = new ViewDefinition();
    $request->table->view->query = 'quisquam';
    $request->table->view->useExplicitColumnNames = false;
    $request->table->view->useLegacySql = false;
    $request->table->view->userDefinedFunctionResources = [
        new UserDefinedFunctionResource(),
        new UserDefinedFunctionResource(),
        new UserDefinedFunctionResource(),
        new UserDefinedFunctionResource(),
    ];
    $request->alt = AltEnum::JSON;
    $request->autodetectSchema = false;
    $request->datasetId = 'quasi';
    $request->fields = 'atque';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->projectId = 'totam';
    $request->quotaUser = 'suscipit';
    $request->tableId = 'quidem';
    $request->userIp = 'maxime';

    $requestSecurity = new BigqueryTablesUpdateSecurity();
    $requestSecurity->option1 = new BigqueryTablesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->bigqueryTablesUpdate($request, $requestSecurity);

    if ($response->table !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
