# routines

### Available Operations

* [bigqueryRoutinesDelete](#bigqueryroutinesdelete) - Deletes the routine specified by routineId from the dataset.
* [bigqueryRoutinesGet](#bigqueryroutinesget) - Gets the specified routine resource by routine ID.
* [bigqueryRoutinesInsert](#bigqueryroutinesinsert) - Creates a new routine in the dataset.
* [bigqueryRoutinesList](#bigqueryroutineslist) - Lists all routines in the specified dataset. Requires the READER dataset role.
* [bigqueryRoutinesUpdate](#bigqueryroutinesupdate) - Updates information in an existing routine. The update method replaces the entire Routine resource.

## bigqueryRoutinesDelete

Deletes the routine specified by routineId from the dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryRoutinesDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'tenetur';
    $request->fields = 'amet';
    $request->key = 'tempore';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->projectId = 'numquam';
    $request->quotaUser = 'enim';
    $request->routineId = 'dolorem';
    $request->userIp = 'sapiente';

    $requestSecurity = new BigqueryRoutinesDeleteSecurity();
    $requestSecurity->option1 = new BigqueryRoutinesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routines->bigqueryRoutinesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryRoutinesGet

Gets the specified routine resource by routine ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryRoutinesGetRequest();
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'totam';
    $request->fields = 'nihil';
    $request->key = 'sit';
    $request->oauthToken = 'expedita';
    $request->prettyPrint = false;
    $request->projectId = 'neque';
    $request->quotaUser = 'sed';
    $request->readMask = 'vel';
    $request->routineId = 'libero';
    $request->userIp = 'voluptas';

    $requestSecurity = new BigqueryRoutinesGetSecurity();
    $requestSecurity->option1 = new BigqueryRoutinesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routines->bigqueryRoutinesGet($request, $requestSecurity);

    if ($response->routine !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryRoutinesInsert

Creates a new routine in the dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\RoutineInput;
use \OpenAPI\OpenAPI\Models\Shared\Argument;
use \OpenAPI\OpenAPI\Models\Shared\ArgumentArgumentKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\StandardSqlDataType;
use \OpenAPI\OpenAPI\Models\Shared\StandardSqlStructType;
use \OpenAPI\OpenAPI\Models\Shared\StandardSqlField;
use \OpenAPI\OpenAPI\Models\Shared\StandardSqlDataTypeTypeKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArgumentModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoutineDeterminismLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoutineLanguageEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoteFunctionOptions;
use \OpenAPI\OpenAPI\Models\Shared\StandardSqlTableType;
use \OpenAPI\OpenAPI\Models\Shared\RoutineReference;
use \OpenAPI\OpenAPI\Models\Shared\RoutineRoutineTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SparkOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryRoutinesInsertRequest();
    $request->routineInput = new RoutineInput();
    $request->routineInput->arguments = [
        new Argument(),
        new Argument(),
        new Argument(),
    ];
    $request->routineInput->definitionBody = 'quam';
    $request->routineInput->description = 'ipsum';
    $request->routineInput->determinismLevel = RoutineDeterminismLevelEnum::DETERMINISM_LEVEL_UNSPECIFIED;
    $request->routineInput->importedLibraries = [
        'cupiditate',
    ];
    $request->routineInput->language = RoutineLanguageEnum::JAVA;
    $request->routineInput->remoteFunctionOptions = new RemoteFunctionOptions();
    $request->routineInput->remoteFunctionOptions->connection = 'pariatur';
    $request->routineInput->remoteFunctionOptions->endpoint = 'soluta';
    $request->routineInput->remoteFunctionOptions->maxBatchingRows = 'dicta';
    $request->routineInput->remoteFunctionOptions->userDefinedContext = [
        'totam' => 'incidunt',
        'aspernatur' => 'dolores',
        'distinctio' => 'facilis',
    ];
    $request->routineInput->returnTableType = new StandardSqlTableType();
    $request->routineInput->returnTableType->columns = [
        new StandardSqlField(),
        new StandardSqlField(),
    ];
    $request->routineInput->returnType = new StandardSqlDataType();
    $request->routineInput->returnType->arrayElementType = new StandardSqlDataType();
    $request->routineInput->returnType->structType = new StandardSqlStructType();
    $request->routineInput->returnType->structType->fields = [
        new StandardSqlField(),
        new StandardSqlField(),
    ];
    $request->routineInput->returnType->typeKind = StandardSqlDataTypeTypeKindEnum::DATETIME;
    $request->routineInput->routineReference = new RoutineReference();
    $request->routineInput->routineReference->datasetId = 'temporibus';
    $request->routineInput->routineReference->projectId = 'qui';
    $request->routineInput->routineReference->routineId = 'neque';
    $request->routineInput->routineType = RoutineRoutineTypeEnum::ROUTINE_TYPE_UNSPECIFIED;
    $request->routineInput->sparkOptions = new SparkOptions();
    $request->routineInput->sparkOptions->archiveUris = [
        'odio',
    ];
    $request->routineInput->sparkOptions->connection = 'sunt';
    $request->routineInput->sparkOptions->containerImage = 'ullam';
    $request->routineInput->sparkOptions->fileUris = [
        'hic',
        'voluptatem',
        'cumque',
    ];
    $request->routineInput->sparkOptions->jarUris = [
        'nobis',
        'et',
        'saepe',
    ];
    $request->routineInput->sparkOptions->mainClass = 'ipsum';
    $request->routineInput->sparkOptions->mainFileUri = 'veritatis';
    $request->routineInput->sparkOptions->properties = [
        'quos' => 'tempore',
        'cupiditate' => 'aperiam',
        'delectus' => 'dolorem',
    ];
    $request->routineInput->sparkOptions->pyFileUris = [
        'labore',
        'adipisci',
    ];
    $request->routineInput->sparkOptions->runtimeVersion = 'dolorum';
    $request->routineInput->strictMode = false;
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'architecto';
    $request->fields = 'quae';
    $request->key = 'aut';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->projectId = 'itaque';
    $request->quotaUser = 'consequatur';
    $request->userIp = 'est';

    $requestSecurity = new BigqueryRoutinesInsertSecurity();
    $requestSecurity->option1 = new BigqueryRoutinesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routines->bigqueryRoutinesInsert($request, $requestSecurity);

    if ($response->routine !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryRoutinesList

Lists all routines in the specified dataset. Requires the READER dataset role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryRoutinesListRequest();
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'repellendus';
    $request->fields = 'porro';
    $request->filter = 'doloribus';
    $request->key = 'ut';
    $request->maxResults = 703495;
    $request->oauthToken = 'cupiditate';
    $request->pageToken = 'qui';
    $request->prettyPrint = false;
    $request->projectId = 'quae';
    $request->quotaUser = 'laudantium';
    $request->readMask = 'odio';
    $request->userIp = 'occaecati';

    $requestSecurity = new BigqueryRoutinesListSecurity();
    $requestSecurity->option1 = new BigqueryRoutinesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routines->bigqueryRoutinesList($request, $requestSecurity);

    if ($response->listRoutinesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryRoutinesUpdate

Updates information in an existing routine. The update method replaces the entire Routine resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\RoutineInput;
use \OpenAPI\OpenAPI\Models\Shared\Argument;
use \OpenAPI\OpenAPI\Models\Shared\ArgumentArgumentKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\StandardSqlDataType;
use \OpenAPI\OpenAPI\Models\Shared\StandardSqlStructType;
use \OpenAPI\OpenAPI\Models\Shared\StandardSqlField;
use \OpenAPI\OpenAPI\Models\Shared\StandardSqlDataTypeTypeKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArgumentModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoutineDeterminismLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoutineLanguageEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoteFunctionOptions;
use \OpenAPI\OpenAPI\Models\Shared\StandardSqlTableType;
use \OpenAPI\OpenAPI\Models\Shared\RoutineReference;
use \OpenAPI\OpenAPI\Models\Shared\RoutineRoutineTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SparkOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRoutinesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryRoutinesUpdateRequest();
    $request->routineInput = new RoutineInput();
    $request->routineInput->arguments = [
        new Argument(),
        new Argument(),
        new Argument(),
        new Argument(),
    ];
    $request->routineInput->definitionBody = 'quisquam';
    $request->routineInput->description = 'vero';
    $request->routineInput->determinismLevel = RoutineDeterminismLevelEnum::DETERMINISTIC;
    $request->routineInput->importedLibraries = [
        'ipsum',
        'delectus',
    ];
    $request->routineInput->language = RoutineLanguageEnum::JAVASCRIPT;
    $request->routineInput->remoteFunctionOptions = new RemoteFunctionOptions();
    $request->routineInput->remoteFunctionOptions->connection = 'consectetur';
    $request->routineInput->remoteFunctionOptions->endpoint = 'vero';
    $request->routineInput->remoteFunctionOptions->maxBatchingRows = 'tenetur';
    $request->routineInput->remoteFunctionOptions->userDefinedContext = [
        'hic' => 'distinctio',
        'quod' => 'odio',
    ];
    $request->routineInput->returnTableType = new StandardSqlTableType();
    $request->routineInput->returnTableType->columns = [
        new StandardSqlField(),
        new StandardSqlField(),
        new StandardSqlField(),
    ];
    $request->routineInput->returnType = new StandardSqlDataType();
    $request->routineInput->returnType->arrayElementType = new StandardSqlDataType();
    $request->routineInput->returnType->structType = new StandardSqlStructType();
    $request->routineInput->returnType->structType->fields = [
        new StandardSqlField(),
        new StandardSqlField(),
        new StandardSqlField(),
    ];
    $request->routineInput->returnType->typeKind = StandardSqlDataTypeTypeKindEnum::JSON;
    $request->routineInput->routineReference = new RoutineReference();
    $request->routineInput->routineReference->datasetId = 'ducimus';
    $request->routineInput->routineReference->projectId = 'dolore';
    $request->routineInput->routineReference->routineId = 'quibusdam';
    $request->routineInput->routineType = RoutineRoutineTypeEnum::TABLE_VALUED_FUNCTION;
    $request->routineInput->sparkOptions = new SparkOptions();
    $request->routineInput->sparkOptions->archiveUris = [
        'natus',
    ];
    $request->routineInput->sparkOptions->connection = 'impedit';
    $request->routineInput->sparkOptions->containerImage = 'aut';
    $request->routineInput->sparkOptions->fileUris = [
        'exercitationem',
        'nulla',
        'fugit',
        'porro',
    ];
    $request->routineInput->sparkOptions->jarUris = [
        'doloribus',
        'iusto',
        'eligendi',
        'ducimus',
    ];
    $request->routineInput->sparkOptions->mainClass = 'alias';
    $request->routineInput->sparkOptions->mainFileUri = 'officia';
    $request->routineInput->sparkOptions->properties = [
        'ipsam' => 'ea',
        'aspernatur' => 'vel',
    ];
    $request->routineInput->sparkOptions->pyFileUris = [
        'magnam',
        'ratione',
        'ex',
        'laudantium',
    ];
    $request->routineInput->sparkOptions->runtimeVersion = 'dicta';
    $request->routineInput->strictMode = false;
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'dolor';
    $request->fields = 'maiores';
    $request->key = 'quasi';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->projectId = 'nulla';
    $request->quotaUser = 'excepturi';
    $request->routineId = 'voluptatibus';
    $request->userIp = 'nostrum';

    $requestSecurity = new BigqueryRoutinesUpdateSecurity();
    $requestSecurity->option1 = new BigqueryRoutinesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routines->bigqueryRoutinesUpdate($request, $requestSecurity);

    if ($response->routine !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
