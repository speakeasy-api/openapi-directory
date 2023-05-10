# projects

### Available Operations

* [dataplexProjectsLocationsDataAttributeBindingsCreate](#dataplexprojectslocationsdataattributebindingscreate) - Create a DataAttributeBinding resource.
* [dataplexProjectsLocationsDataAttributeBindingsList](#dataplexprojectslocationsdataattributebindingslist) - Lists DataAttributeBinding resources in a project and location.
* [dataplexProjectsLocationsDataScansCreate](#dataplexprojectslocationsdatascanscreate) - Creates a DataScan resource.
* [dataplexProjectsLocationsDataScansList](#dataplexprojectslocationsdatascanslist) - Lists DataScans.
* [dataplexProjectsLocationsDataTaxonomiesAttributesCreate](#dataplexprojectslocationsdatataxonomiesattributescreate) - Create a DataAttribute resource.
* [dataplexProjectsLocationsDataTaxonomiesAttributesList](#dataplexprojectslocationsdatataxonomiesattributeslist) - Lists Data Attribute resources in a DataTaxonomy.
* [dataplexProjectsLocationsDataTaxonomiesCreate](#dataplexprojectslocationsdatataxonomiescreate) - Create a DataTaxonomy resource.
* [dataplexProjectsLocationsDataTaxonomiesList](#dataplexprojectslocationsdatataxonomieslist) - Lists DataTaxonomy resources in a project and location.
* [dataplexProjectsLocationsLakesContentCreate](#dataplexprojectslocationslakescontentcreate) - Create a content.
* [dataplexProjectsLocationsLakesContentList](#dataplexprojectslocationslakescontentlist) - List content.
* [dataplexProjectsLocationsLakesContentitemsCreate](#dataplexprojectslocationslakescontentitemscreate) - Create a content.
* [dataplexProjectsLocationsLakesContentitemsList](#dataplexprojectslocationslakescontentitemslist) - List content.
* [dataplexProjectsLocationsLakesCreate](#dataplexprojectslocationslakescreate) - Creates a lake resource.
* [dataplexProjectsLocationsLakesEnvironmentsCreate](#dataplexprojectslocationslakesenvironmentscreate) - Create an environment resource.
* [dataplexProjectsLocationsLakesEnvironmentsList](#dataplexprojectslocationslakesenvironmentslist) - Lists environments under the given lake.
* [dataplexProjectsLocationsLakesEnvironmentsSessionsList](#dataplexprojectslocationslakesenvironmentssessionslist) - Lists session resources in an environment.
* [dataplexProjectsLocationsLakesList](#dataplexprojectslocationslakeslist) - Lists lake resources in a project and location.
* [dataplexProjectsLocationsLakesTasksCreate](#dataplexprojectslocationslakestaskscreate) - Creates a task resource within a lake.
* [dataplexProjectsLocationsLakesTasksJobsList](#dataplexprojectslocationslakestasksjobslist) - Lists Jobs under the given task.
* [dataplexProjectsLocationsLakesTasksList](#dataplexprojectslocationslakestaskslist) - Lists tasks under the given lake.
* [dataplexProjectsLocationsLakesTasksRun](#dataplexprojectslocationslakestasksrun) - Run an on demand execution of a Task.
* [dataplexProjectsLocationsLakesZonesAssetsActionsList](#dataplexprojectslocationslakeszonesassetsactionslist) - Lists action resources in an asset.
* [dataplexProjectsLocationsLakesZonesAssetsCreate](#dataplexprojectslocationslakeszonesassetscreate) - Creates an asset resource.
* [dataplexProjectsLocationsLakesZonesAssetsGetIamPolicy](#dataplexprojectslocationslakeszonesassetsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [dataplexProjectsLocationsLakesZonesAssetsList](#dataplexprojectslocationslakeszonesassetslist) - Lists asset resources in a zone.
* [dataplexProjectsLocationsLakesZonesAssetsPatch](#dataplexprojectslocationslakeszonesassetspatch) - Updates an asset resource.
* [dataplexProjectsLocationsLakesZonesAssetsSetIamPolicy](#dataplexprojectslocationslakeszonesassetssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [dataplexProjectsLocationsLakesZonesAssetsTestIamPermissions](#dataplexprojectslocationslakeszonesassetstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [dataplexProjectsLocationsLakesZonesCreate](#dataplexprojectslocationslakeszonescreate) - Creates a zone resource within a lake.
* [dataplexProjectsLocationsLakesZonesEntitiesCreate](#dataplexprojectslocationslakeszonesentitiescreate) - Create a metadata entity.
* [dataplexProjectsLocationsLakesZonesEntitiesList](#dataplexprojectslocationslakeszonesentitieslist) - List metadata entities in a zone.
* [dataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate](#dataplexprojectslocationslakeszonesentitiespartitionscreate) - Create a metadata partition.
* [dataplexProjectsLocationsLakesZonesEntitiesPartitionsList](#dataplexprojectslocationslakeszonesentitiespartitionslist) - List metadata partitions of an entity.
* [dataplexProjectsLocationsLakesZonesEntitiesUpdate](#dataplexprojectslocationslakeszonesentitiesupdate) - Update a metadata entity. Only supports full resource update.
* [dataplexProjectsLocationsLakesZonesList](#dataplexprojectslocationslakeszoneslist) - Lists zone resources in a lake.
* [dataplexProjectsLocationsList](#dataplexprojectslocationslist) - Lists information about the supported locations for this service.
* [dataplexProjectsLocationsOperationsCancel](#dataplexprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [dataplexProjectsLocationsOperationsDelete](#dataplexprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
* [dataplexProjectsLocationsOperationsGet](#dataplexprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [dataplexProjectsLocationsOperationsList](#dataplexprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

## dataplexProjectsLocationsDataAttributeBindingsCreate

Create a DataAttributeBinding resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataAttributeBindingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataAttributeBindingInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataAttributeBindingPath;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataAttributeBindingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsDataAttributeBindingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDataplexV1DataAttributeBindingInput = new GoogleCloudDataplexV1DataAttributeBindingInput();
    $request->googleCloudDataplexV1DataAttributeBindingInput->attributes = [
        'ab',
        'quis',
        'veritatis',
        'deserunt',
    ];
    $request->googleCloudDataplexV1DataAttributeBindingInput->description = 'perferendis';
    $request->googleCloudDataplexV1DataAttributeBindingInput->displayName = 'ipsam';
    $request->googleCloudDataplexV1DataAttributeBindingInput->etag = 'repellendus';
    $request->googleCloudDataplexV1DataAttributeBindingInput->labels = [
        'quo' => 'odit',
        'at' => 'at',
        'maiores' => 'molestiae',
        'quod' => 'quod',
    ];
    $request->googleCloudDataplexV1DataAttributeBindingInput->paths = [
        new GoogleCloudDataplexV1DataAttributeBindingPath(),
        new GoogleCloudDataplexV1DataAttributeBindingPath(),
    ];
    $request->googleCloudDataplexV1DataAttributeBindingInput->resource = 'totam';
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->dataAttributeBindingId = 'nam';
    $request->fields = 'officia';
    $request->key = 'occaecati';
    $request->oauthToken = 'fugit';
    $request->parent = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'totam';
    $request->validateOnly = false;

    $requestSecurity = new DataplexProjectsLocationsDataAttributeBindingsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsDataAttributeBindingsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsDataAttributeBindingsList

Lists DataAttributeBinding resources in a project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataAttributeBindingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataAttributeBindingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsDataAttributeBindingsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->filter = 'impedit';
    $request->key = 'cum';
    $request->oauthToken = 'esse';
    $request->orderBy = 'ipsum';
    $request->pageSize = 568434;
    $request->pageToken = 'aspernatur';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new DataplexProjectsLocationsDataAttributeBindingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsDataAttributeBindingsList($request, $requestSecurity);

    if ($response->googleCloudDataplexV1ListDataAttributeBindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsDataScansCreate

Creates a DataScan resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataScansCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataScanInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataProfileResult;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataProfileResultProfile;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataProfileResultProfileField;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ScannedData;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ScannedDataIncrementalField;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataProfileSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataQualityResult;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataQualityDimensionResult;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataQualityRuleResult;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataQualityRule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataQualityRuleRangeExpectation;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataQualityRuleRegexExpectation;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataQualityRuleSetExpectation;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataQualitySpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataScanExecutionSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1Trigger;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1TriggerSchedule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataScanExecutionStatus;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataScansCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsDataScansCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDataplexV1DataScanInput = new GoogleCloudDataplexV1DataScanInput();
    $request->googleCloudDataplexV1DataScanInput->data = new GoogleCloudDataplexV1DataSource();
    $request->googleCloudDataplexV1DataScanInput->data->entity = 'dolor';
    $request->googleCloudDataplexV1DataScanInput->data->resource = 'natus';
    $request->googleCloudDataplexV1DataScanInput->dataProfileResult = new GoogleCloudDataplexV1DataProfileResult();
    $request->googleCloudDataplexV1DataScanInput->dataProfileResult->profile = new GoogleCloudDataplexV1DataProfileResultProfile();
    $request->googleCloudDataplexV1DataScanInput->dataProfileResult->profile->fields = [
        new GoogleCloudDataplexV1DataProfileResultProfileField(),
        new GoogleCloudDataplexV1DataProfileResultProfileField(),
    ];
    $request->googleCloudDataplexV1DataScanInput->dataProfileResult->rowCount = 'hic';
    $request->googleCloudDataplexV1DataScanInput->dataProfileResult->scannedData = new GoogleCloudDataplexV1ScannedData();
    $request->googleCloudDataplexV1DataScanInput->dataProfileResult->scannedData->incrementalField = new GoogleCloudDataplexV1ScannedDataIncrementalField();
    $request->googleCloudDataplexV1DataScanInput->dataProfileResult->scannedData->incrementalField->end = 'saepe';
    $request->googleCloudDataplexV1DataScanInput->dataProfileResult->scannedData->incrementalField->field = 'fuga';
    $request->googleCloudDataplexV1DataScanInput->dataProfileResult->scannedData->incrementalField->start = 'in';
    $request->googleCloudDataplexV1DataScanInput->dataProfileSpec = new GoogleCloudDataplexV1DataProfileSpec();
    $request->googleCloudDataplexV1DataScanInput->dataProfileSpec->rowFilter = 'corporis';
    $request->googleCloudDataplexV1DataScanInput->dataProfileSpec->samplingPercent = 6130.64;
    $request->googleCloudDataplexV1DataScanInput->dataQualityResult = new GoogleCloudDataplexV1DataQualityResult();
    $request->googleCloudDataplexV1DataScanInput->dataQualityResult->dimensions = [
        new GoogleCloudDataplexV1DataQualityDimensionResult(),
        new GoogleCloudDataplexV1DataQualityDimensionResult(),
    ];
    $request->googleCloudDataplexV1DataScanInput->dataQualityResult->passed = false;
    $request->googleCloudDataplexV1DataScanInput->dataQualityResult->rowCount = 'saepe';
    $request->googleCloudDataplexV1DataScanInput->dataQualityResult->rules = [
        new GoogleCloudDataplexV1DataQualityRuleResult(),
        new GoogleCloudDataplexV1DataQualityRuleResult(),
        new GoogleCloudDataplexV1DataQualityRuleResult(),
    ];
    $request->googleCloudDataplexV1DataScanInput->dataQualityResult->scannedData = new GoogleCloudDataplexV1ScannedData();
    $request->googleCloudDataplexV1DataScanInput->dataQualityResult->scannedData->incrementalField = new GoogleCloudDataplexV1ScannedDataIncrementalField();
    $request->googleCloudDataplexV1DataScanInput->dataQualityResult->scannedData->incrementalField->end = 'architecto';
    $request->googleCloudDataplexV1DataScanInput->dataQualityResult->scannedData->incrementalField->field = 'ipsa';
    $request->googleCloudDataplexV1DataScanInput->dataQualityResult->scannedData->incrementalField->start = 'reiciendis';
    $request->googleCloudDataplexV1DataScanInput->dataQualitySpec = new GoogleCloudDataplexV1DataQualitySpec();
    $request->googleCloudDataplexV1DataScanInput->dataQualitySpec->rowFilter = 'est';
    $request->googleCloudDataplexV1DataScanInput->dataQualitySpec->rules = [
        new GoogleCloudDataplexV1DataQualityRule(),
        new GoogleCloudDataplexV1DataQualityRule(),
        new GoogleCloudDataplexV1DataQualityRule(),
    ];
    $request->googleCloudDataplexV1DataScanInput->dataQualitySpec->samplingPercent = 6706.38;
    $request->googleCloudDataplexV1DataScanInput->description = 'dolores';
    $request->googleCloudDataplexV1DataScanInput->displayName = 'dolorem';
    $request->googleCloudDataplexV1DataScanInput->executionSpec = new GoogleCloudDataplexV1DataScanExecutionSpec();
    $request->googleCloudDataplexV1DataScanInput->executionSpec->field = 'corporis';
    $request->googleCloudDataplexV1DataScanInput->executionSpec->trigger = new GoogleCloudDataplexV1Trigger();
    $request->googleCloudDataplexV1DataScanInput->executionSpec->trigger->onDemand = [
        'nobis' => 'enim',
    ];
    $request->googleCloudDataplexV1DataScanInput->executionSpec->trigger->schedule = new GoogleCloudDataplexV1TriggerSchedule();
    $request->googleCloudDataplexV1DataScanInput->executionSpec->trigger->schedule->cron = 'omnis';
    $request->googleCloudDataplexV1DataScanInput->executionStatus = new GoogleCloudDataplexV1DataScanExecutionStatus();
    $request->googleCloudDataplexV1DataScanInput->executionStatus->latestJobEndTime = 'nemo';
    $request->googleCloudDataplexV1DataScanInput->executionStatus->latestJobStartTime = 'minima';
    $request->googleCloudDataplexV1DataScanInput->labels = [
        'accusantium' => 'iure',
        'culpa' => 'doloribus',
        'sapiente' => 'architecto',
    ];
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->dataScanId = 'consequuntur';
    $request->fields = 'repellat';
    $request->key = 'mollitia';
    $request->oauthToken = 'occaecati';
    $request->parent = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';
    $request->validateOnly = false;

    $requestSecurity = new DataplexProjectsLocationsDataScansCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsDataScansCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsDataScansList

Lists DataScans.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataScansListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataScansListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsDataScansListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'vitae';
    $request->filter = 'laborum';
    $request->key = 'animi';
    $request->oauthToken = 'enim';
    $request->orderBy = 'odit';
    $request->pageSize = 778346;
    $request->pageToken = 'sequi';
    $request->parent = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new DataplexProjectsLocationsDataScansListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsDataScansList($request, $requestSecurity);

    if ($response->googleCloudDataplexV1ListDataScansResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsDataTaxonomiesAttributesCreate

Create a DataAttribute resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataTaxonomiesAttributesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataAttributeInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataAccessSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ResourceAccessSpec;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataTaxonomiesAttributesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsDataTaxonomiesAttributesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDataplexV1DataAttributeInput = new GoogleCloudDataplexV1DataAttributeInput();
    $request->googleCloudDataplexV1DataAttributeInput->dataAccessSpec = new GoogleCloudDataplexV1DataAccessSpec();
    $request->googleCloudDataplexV1DataAttributeInput->dataAccessSpec->readers = [
        'error',
    ];
    $request->googleCloudDataplexV1DataAttributeInput->description = 'temporibus';
    $request->googleCloudDataplexV1DataAttributeInput->displayName = 'laborum';
    $request->googleCloudDataplexV1DataAttributeInput->etag = 'quasi';
    $request->googleCloudDataplexV1DataAttributeInput->labels = [
        'voluptatibus' => 'vero',
        'nihil' => 'praesentium',
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
    ];
    $request->googleCloudDataplexV1DataAttributeInput->parentId = 'cum';
    $request->googleCloudDataplexV1DataAttributeInput->resourceAccessSpec = new GoogleCloudDataplexV1ResourceAccessSpec();
    $request->googleCloudDataplexV1DataAttributeInput->resourceAccessSpec->owners = [
        'doloremque',
    ];
    $request->googleCloudDataplexV1DataAttributeInput->resourceAccessSpec->readers = [
        'ut',
        'maiores',
    ];
    $request->googleCloudDataplexV1DataAttributeInput->resourceAccessSpec->writers = [
        'corporis',
    ];
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->dataAttributeId = 'harum';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'commodi';
    $request->parent = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quidem';
    $request->validateOnly = false;

    $requestSecurity = new DataplexProjectsLocationsDataTaxonomiesAttributesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsDataTaxonomiesAttributesCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsDataTaxonomiesAttributesList

Lists Data Attribute resources in a DataTaxonomy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataTaxonomiesAttributesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataTaxonomiesAttributesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsDataTaxonomiesAttributesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'praesentium';
    $request->filter = 'rem';
    $request->key = 'voluptates';
    $request->oauthToken = 'quasi';
    $request->orderBy = 'repudiandae';
    $request->pageSize = 575947;
    $request->pageToken = 'veritatis';
    $request->parent = 'itaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'consequatur';

    $requestSecurity = new DataplexProjectsLocationsDataTaxonomiesAttributesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsDataTaxonomiesAttributesList($request, $requestSecurity);

    if ($response->googleCloudDataplexV1ListDataAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsDataTaxonomiesCreate

Create a DataTaxonomy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataTaxonomiesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataTaxonomyInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataTaxonomiesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsDataTaxonomiesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDataplexV1DataTaxonomyInput = new GoogleCloudDataplexV1DataTaxonomyInput();
    $request->googleCloudDataplexV1DataTaxonomyInput->description = 'quibusdam';
    $request->googleCloudDataplexV1DataTaxonomyInput->displayName = 'explicabo';
    $request->googleCloudDataplexV1DataTaxonomyInput->etag = 'deserunt';
    $request->googleCloudDataplexV1DataTaxonomyInput->labels = [
        'quibusdam' => 'labore',
        'modi' => 'qui',
        'aliquid' => 'cupiditate',
    ];
    $request->accessToken = 'quos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->dataTaxonomyId = 'assumenda';
    $request->fields = 'ipsam';
    $request->key = 'alias';
    $request->oauthToken = 'fugit';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'facilis';
    $request->validateOnly = false;

    $requestSecurity = new DataplexProjectsLocationsDataTaxonomiesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsDataTaxonomiesCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsDataTaxonomiesList

Lists DataTaxonomy resources in a project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataTaxonomiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataTaxonomiesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsDataTaxonomiesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'non';
    $request->filter = 'eligendi';
    $request->key = 'sint';
    $request->oauthToken = 'aliquid';
    $request->orderBy = 'provident';
    $request->pageSize = 896039;
    $request->pageToken = 'sint';
    $request->parent = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'a';

    $requestSecurity = new DataplexProjectsLocationsDataTaxonomiesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsDataTaxonomiesList($request, $requestSecurity);

    if ($response->googleCloudDataplexV1ListDataTaxonomiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesContentCreate

Create a content.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesContentCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ContentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ContentNotebook;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ContentNotebookKernelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ContentSqlScript;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ContentSqlScriptEngineEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesContentCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesContentCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDataplexV1ContentInput = new GoogleCloudDataplexV1ContentInput();
    $request->googleCloudDataplexV1ContentInput->dataText = 'in';
    $request->googleCloudDataplexV1ContentInput->description = 'in';
    $request->googleCloudDataplexV1ContentInput->labels = [
        'maiores' => 'rerum',
        'dicta' => 'magnam',
        'cumque' => 'facere',
        'ea' => 'aliquid',
    ];
    $request->googleCloudDataplexV1ContentInput->notebook = new GoogleCloudDataplexV1ContentNotebook();
    $request->googleCloudDataplexV1ContentInput->notebook->kernelType = GoogleCloudDataplexV1ContentNotebookKernelTypeEnum::PYTHON3;
    $request->googleCloudDataplexV1ContentInput->path = 'accusamus';
    $request->googleCloudDataplexV1ContentInput->sqlScript = new GoogleCloudDataplexV1ContentSqlScript();
    $request->googleCloudDataplexV1ContentInput->sqlScript->engine = GoogleCloudDataplexV1ContentSqlScriptEngineEnum::QUERY_ENGINE_UNSPECIFIED;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'delectus';
    $request->key = 'quidem';
    $request->oauthToken = 'provident';
    $request->parent = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'deleniti';
    $request->validateOnly = false;

    $requestSecurity = new DataplexProjectsLocationsLakesContentCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesContentCreate($request, $requestSecurity);

    if ($response->googleCloudDataplexV1Content !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesContentList

List content.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesContentListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesContentListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesContentListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'vel';
    $request->filter = 'natus';
    $request->key = 'omnis';
    $request->oauthToken = 'molestiae';
    $request->pageSize = 19193;
    $request->pageToken = 'nihil';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new DataplexProjectsLocationsLakesContentListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesContentList($request, $requestSecurity);

    if ($response->googleCloudDataplexV1ListContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesContentitemsCreate

Create a content.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesContentitemsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ContentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ContentNotebook;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ContentNotebookKernelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ContentSqlScript;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ContentSqlScriptEngineEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesContentitemsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesContentitemsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDataplexV1ContentInput = new GoogleCloudDataplexV1ContentInput();
    $request->googleCloudDataplexV1ContentInput->dataText = 'suscipit';
    $request->googleCloudDataplexV1ContentInput->description = 'natus';
    $request->googleCloudDataplexV1ContentInput->labels = [
        'eum' => 'vero',
        'aspernatur' => 'architecto',
        'magnam' => 'et',
    ];
    $request->googleCloudDataplexV1ContentInput->notebook = new GoogleCloudDataplexV1ContentNotebook();
    $request->googleCloudDataplexV1ContentInput->notebook->kernelType = GoogleCloudDataplexV1ContentNotebookKernelTypeEnum::PYTHON3;
    $request->googleCloudDataplexV1ContentInput->path = 'ullam';
    $request->googleCloudDataplexV1ContentInput->sqlScript = new GoogleCloudDataplexV1ContentSqlScript();
    $request->googleCloudDataplexV1ContentInput->sqlScript->engine = GoogleCloudDataplexV1ContentSqlScriptEngineEnum::SPARK;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'mollitia';
    $request->key = 'reiciendis';
    $request->oauthToken = 'mollitia';
    $request->parent = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'necessitatibus';
    $request->validateOnly = false;

    $requestSecurity = new DataplexProjectsLocationsLakesContentitemsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesContentitemsCreate($request, $requestSecurity);

    if ($response->googleCloudDataplexV1Content !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesContentitemsList

List content.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesContentitemsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesContentitemsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesContentitemsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'doloribus';
    $request->filter = 'debitis';
    $request->key = 'eius';
    $request->oauthToken = 'maxime';
    $request->pageSize = 537023;
    $request->pageToken = 'facilis';
    $request->parent = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new DataplexProjectsLocationsLakesContentitemsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesContentitemsList($request, $requestSecurity);

    if ($response->googleCloudDataplexV1ListContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesCreate

Creates a lake resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1LakeInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1LakeMetastore;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1LakeMetastoreStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1LakeMetastoreStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDataplexV1LakeInput = new GoogleCloudDataplexV1LakeInput();
    $request->googleCloudDataplexV1LakeInput->assetStatus = new GoogleCloudDataplexV1AssetStatus();
    $request->googleCloudDataplexV1LakeInput->assetStatus->activeAssets = 714242;
    $request->googleCloudDataplexV1LakeInput->assetStatus->securityPolicyApplyingAssets = 469249;
    $request->googleCloudDataplexV1LakeInput->assetStatus->updateTime = 'repellat';
    $request->googleCloudDataplexV1LakeInput->description = 'quibusdam';
    $request->googleCloudDataplexV1LakeInput->displayName = 'sed';
    $request->googleCloudDataplexV1LakeInput->labels = [
        'pariatur' => 'accusantium',
        'consequuntur' => 'praesentium',
        'natus' => 'magni',
        'sunt' => 'quo',
    ];
    $request->googleCloudDataplexV1LakeInput->metastore = new GoogleCloudDataplexV1LakeMetastore();
    $request->googleCloudDataplexV1LakeInput->metastore->service = 'illum';
    $request->googleCloudDataplexV1LakeInput->metastoreStatus = new GoogleCloudDataplexV1LakeMetastoreStatus();
    $request->googleCloudDataplexV1LakeInput->metastoreStatus->endpoint = 'pariatur';
    $request->googleCloudDataplexV1LakeInput->metastoreStatus->message = 'maxime';
    $request->googleCloudDataplexV1LakeInput->metastoreStatus->state = GoogleCloudDataplexV1LakeMetastoreStatusStateEnum::READY;
    $request->googleCloudDataplexV1LakeInput->metastoreStatus->updateTime = 'excepturi';
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'ab';
    $request->key = 'maiores';
    $request->lakeId = 'quidem';
    $request->oauthToken = 'ipsam';
    $request->parent = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'autem';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'eaque';
    $request->validateOnly = false;

    $requestSecurity = new DataplexProjectsLocationsLakesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesEnvironmentsCreate

Create an environment resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesEnvironmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1EnvironmentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1EnvironmentInfrastructureSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1EnvironmentSessionSpec;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesEnvironmentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesEnvironmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDataplexV1EnvironmentInput = new GoogleCloudDataplexV1EnvironmentInput();
    $request->googleCloudDataplexV1EnvironmentInput->description = 'nemo';
    $request->googleCloudDataplexV1EnvironmentInput->displayName = 'voluptatibus';
    $request->googleCloudDataplexV1EnvironmentInput->infrastructureSpec = new GoogleCloudDataplexV1EnvironmentInfrastructureSpec();
    $request->googleCloudDataplexV1EnvironmentInput->infrastructureSpec->compute = new GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources();
    $request->googleCloudDataplexV1EnvironmentInput->infrastructureSpec->compute->diskSizeGb = 16627;
    $request->googleCloudDataplexV1EnvironmentInput->infrastructureSpec->compute->maxNodeCount = 855804;
    $request->googleCloudDataplexV1EnvironmentInput->infrastructureSpec->compute->nodeCount = 230742;
    $request->googleCloudDataplexV1EnvironmentInput->infrastructureSpec->osImage = new GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime();
    $request->googleCloudDataplexV1EnvironmentInput->infrastructureSpec->osImage->imageVersion = 'aut';
    $request->googleCloudDataplexV1EnvironmentInput->infrastructureSpec->osImage->javaLibraries = [
        'corporis',
        'hic',
        'libero',
        'nobis',
    ];
    $request->googleCloudDataplexV1EnvironmentInput->infrastructureSpec->osImage->properties = [
        'quis' => 'totam',
    ];
    $request->googleCloudDataplexV1EnvironmentInput->infrastructureSpec->osImage->pythonPackages = [
        'eaque',
        'quis',
    ];
    $request->googleCloudDataplexV1EnvironmentInput->labels = [
        'eos' => 'perferendis',
    ];
    $request->googleCloudDataplexV1EnvironmentInput->sessionSpec = new GoogleCloudDataplexV1EnvironmentSessionSpec();
    $request->googleCloudDataplexV1EnvironmentInput->sessionSpec->enableFastStartup = false;
    $request->googleCloudDataplexV1EnvironmentInput->sessionSpec->maxIdleDuration = 'dolores';
    $request->accessToken = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->environmentId = 'vero';
    $request->fields = 'nostrum';
    $request->key = 'hic';
    $request->oauthToken = 'recusandae';
    $request->parent = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'voluptatem';
    $request->validateOnly = false;

    $requestSecurity = new DataplexProjectsLocationsLakesEnvironmentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesEnvironmentsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesEnvironmentsList

Lists environments under the given lake.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesEnvironmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesEnvironmentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesEnvironmentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'eaque';
    $request->filter = 'occaecati';
    $request->key = 'rerum';
    $request->oauthToken = 'adipisci';
    $request->orderBy = 'asperiores';
    $request->pageSize = 934214;
    $request->pageToken = 'modi';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new DataplexProjectsLocationsLakesEnvironmentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesEnvironmentsList($request, $requestSecurity);

    if ($response->googleCloudDataplexV1ListEnvironmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesEnvironmentsSessionsList

Lists session resources in an environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesEnvironmentsSessionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'delectus';
    $request->fields = 'quaerat';
    $request->filter = 'quos';
    $request->key = 'aliquid';
    $request->oauthToken = 'dolorem';
    $request->pageSize = 209843;
    $request->pageToken = 'dolor';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new DataplexProjectsLocationsLakesEnvironmentsSessionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesEnvironmentsSessionsList($request, $requestSecurity);

    if ($response->googleCloudDataplexV1ListSessionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesList

Lists lake resources in a project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'amet';
    $request->filter = 'dolorum';
    $request->key = 'numquam';
    $request->oauthToken = 'veritatis';
    $request->orderBy = 'ipsa';
    $request->pageSize = 56418;
    $request->pageToken = 'iure';
    $request->parent = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new DataplexProjectsLocationsLakesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesList($request, $requestSecurity);

    if ($response->googleCloudDataplexV1ListLakesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesTasksCreate

Creates a task resource within a lake.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesTasksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1TaskInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1TaskExecutionSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1TaskNotebookTaskConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1TaskInfrastructureSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1TaskSparkTaskConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1TaskTriggerSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1TaskTriggerSpecTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesTasksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesTasksCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDataplexV1TaskInput = new GoogleCloudDataplexV1TaskInput();
    $request->googleCloudDataplexV1TaskInput->description = 'voluptas';
    $request->googleCloudDataplexV1TaskInput->displayName = 'natus';
    $request->googleCloudDataplexV1TaskInput->executionSpec = new GoogleCloudDataplexV1TaskExecutionSpec();
    $request->googleCloudDataplexV1TaskInput->executionSpec->args = [
        'atque' => 'sit',
    ];
    $request->googleCloudDataplexV1TaskInput->executionSpec->kmsKey = 'fugiat';
    $request->googleCloudDataplexV1TaskInput->executionSpec->maxJobExecutionLifetime = 'ab';
    $request->googleCloudDataplexV1TaskInput->executionSpec->project = 'soluta';
    $request->googleCloudDataplexV1TaskInput->executionSpec->serviceAccount = 'dolorum';
    $request->googleCloudDataplexV1TaskInput->labels = [
        'voluptate' => 'dolorum',
        'deleniti' => 'omnis',
    ];
    $request->googleCloudDataplexV1TaskInput->notebook = new GoogleCloudDataplexV1TaskNotebookTaskConfig();
    $request->googleCloudDataplexV1TaskInput->notebook->archiveUris = [
        'distinctio',
        'asperiores',
        'nihil',
        'ipsum',
    ];
    $request->googleCloudDataplexV1TaskInput->notebook->fileUris = [
        'id',
        'saepe',
    ];
    $request->googleCloudDataplexV1TaskInput->notebook->infrastructureSpec = new GoogleCloudDataplexV1TaskInfrastructureSpec();
    $request->googleCloudDataplexV1TaskInput->notebook->infrastructureSpec->batch = new GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources();
    $request->googleCloudDataplexV1TaskInput->notebook->infrastructureSpec->batch->executorsCount = 263322;
    $request->googleCloudDataplexV1TaskInput->notebook->infrastructureSpec->batch->maxExecutorsCount = 137220;
    $request->googleCloudDataplexV1TaskInput->notebook->infrastructureSpec->containerImage = new GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime();
    $request->googleCloudDataplexV1TaskInput->notebook->infrastructureSpec->containerImage->image = 'perferendis';
    $request->googleCloudDataplexV1TaskInput->notebook->infrastructureSpec->containerImage->javaJars = [
        'optio',
    ];
    $request->googleCloudDataplexV1TaskInput->notebook->infrastructureSpec->containerImage->properties = [
        'ad' => 'saepe',
        'suscipit' => 'deserunt',
        'provident' => 'minima',
        'repellendus' => 'totam',
    ];
    $request->googleCloudDataplexV1TaskInput->notebook->infrastructureSpec->containerImage->pythonPackages = [
        'alias',
        'at',
        'quaerat',
    ];
    $request->googleCloudDataplexV1TaskInput->notebook->infrastructureSpec->vpcNetwork = new GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork();
    $request->googleCloudDataplexV1TaskInput->notebook->infrastructureSpec->vpcNetwork->network = 'tempora';
    $request->googleCloudDataplexV1TaskInput->notebook->infrastructureSpec->vpcNetwork->networkTags = [
        'quod',
        'officiis',
    ];
    $request->googleCloudDataplexV1TaskInput->notebook->infrastructureSpec->vpcNetwork->subNetwork = 'qui';
    $request->googleCloudDataplexV1TaskInput->notebook->notebook = 'dolorum';
    $request->googleCloudDataplexV1TaskInput->spark = new GoogleCloudDataplexV1TaskSparkTaskConfig();
    $request->googleCloudDataplexV1TaskInput->spark->archiveUris = [
        'esse',
        'harum',
        'iusto',
        'ipsum',
    ];
    $request->googleCloudDataplexV1TaskInput->spark->fileUris = [
        'tenetur',
        'amet',
        'tempore',
        'accusamus',
    ];
    $request->googleCloudDataplexV1TaskInput->spark->infrastructureSpec = new GoogleCloudDataplexV1TaskInfrastructureSpec();
    $request->googleCloudDataplexV1TaskInput->spark->infrastructureSpec->batch = new GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources();
    $request->googleCloudDataplexV1TaskInput->spark->infrastructureSpec->batch->executorsCount = 253941;
    $request->googleCloudDataplexV1TaskInput->spark->infrastructureSpec->batch->maxExecutorsCount = 313692;
    $request->googleCloudDataplexV1TaskInput->spark->infrastructureSpec->containerImage = new GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime();
    $request->googleCloudDataplexV1TaskInput->spark->infrastructureSpec->containerImage->image = 'dolorem';
    $request->googleCloudDataplexV1TaskInput->spark->infrastructureSpec->containerImage->javaJars = [
        'totam',
        'nihil',
        'sit',
        'expedita',
    ];
    $request->googleCloudDataplexV1TaskInput->spark->infrastructureSpec->containerImage->properties = [
        'sed' => 'vel',
    ];
    $request->googleCloudDataplexV1TaskInput->spark->infrastructureSpec->containerImage->pythonPackages = [
        'voluptas',
        'deserunt',
        'quam',
    ];
    $request->googleCloudDataplexV1TaskInput->spark->infrastructureSpec->vpcNetwork = new GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork();
    $request->googleCloudDataplexV1TaskInput->spark->infrastructureSpec->vpcNetwork->network = 'ipsum';
    $request->googleCloudDataplexV1TaskInput->spark->infrastructureSpec->vpcNetwork->networkTags = [
        'qui',
        'cupiditate',
    ];
    $request->googleCloudDataplexV1TaskInput->spark->infrastructureSpec->vpcNetwork->subNetwork = 'maxime';
    $request->googleCloudDataplexV1TaskInput->spark->mainClass = 'pariatur';
    $request->googleCloudDataplexV1TaskInput->spark->mainJarFileUri = 'soluta';
    $request->googleCloudDataplexV1TaskInput->spark->pythonScriptFile = 'dicta';
    $request->googleCloudDataplexV1TaskInput->spark->sqlScript = 'laborum';
    $request->googleCloudDataplexV1TaskInput->spark->sqlScriptFile = 'totam';
    $request->googleCloudDataplexV1TaskInput->triggerSpec = new GoogleCloudDataplexV1TaskTriggerSpec();
    $request->googleCloudDataplexV1TaskInput->triggerSpec->disabled = false;
    $request->googleCloudDataplexV1TaskInput->triggerSpec->maxRetries = 276894;
    $request->googleCloudDataplexV1TaskInput->triggerSpec->schedule = 'aspernatur';
    $request->googleCloudDataplexV1TaskInput->triggerSpec->startTime = 'dolores';
    $request->googleCloudDataplexV1TaskInput->triggerSpec->type = GoogleCloudDataplexV1TaskTriggerSpecTypeEnum::RECURRING;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'molestias';
    $request->key = 'temporibus';
    $request->oauthToken = 'qui';
    $request->parent = 'neque';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->taskId = 'magni';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'sunt';
    $request->validateOnly = false;

    $requestSecurity = new DataplexProjectsLocationsLakesTasksCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesTasksCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesTasksJobsList

Lists Jobs under the given task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesTasksJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesTasksJobsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesTasksJobsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatem';
    $request->fields = 'cumque';
    $request->key = 'soluta';
    $request->oauthToken = 'nobis';
    $request->pageSize = 92596;
    $request->pageToken = 'saepe';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new DataplexProjectsLocationsLakesTasksJobsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesTasksJobsList($request, $requestSecurity);

    if ($response->googleCloudDataplexV1ListJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesTasksList

Lists tasks under the given lake.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesTasksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesTasksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesTasksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'dolorem';
    $request->filter = 'dolore';
    $request->key = 'labore';
    $request->oauthToken = 'adipisci';
    $request->orderBy = 'dolorum';
    $request->pageSize = 100294;
    $request->pageToken = 'quae';
    $request->parent = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quas';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'consequatur';

    $requestSecurity = new DataplexProjectsLocationsLakesTasksListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesTasksList($request, $requestSecurity);

    if ($response->googleCloudDataplexV1ListTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesTasksRun

Run an on demand execution of a Task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesTasksRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesTasksRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesTasksRunRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'porro' => 'doloribus',
        'ut' => 'facilis',
        'cupiditate' => 'qui',
        'quae' => 'laudantium',
    ];
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'quisquam';
    $request->key = 'vero';
    $request->name = 'Tim Erdman';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new DataplexProjectsLocationsLakesTasksRunSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesTasksRun($request, $requestSecurity);

    if ($response->googleCloudDataplexV1RunTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesZonesAssetsActionsList

Lists action resources in an asset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesAssetsActionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesAssetsActionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesZonesAssetsActionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odio';
    $request->fields = 'similique';
    $request->key = 'facilis';
    $request->oauthToken = 'vero';
    $request->pageSize = 498140;
    $request->pageToken = 'dolore';
    $request->parent = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new DataplexProjectsLocationsLakesZonesAssetsActionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesZonesAssetsActionsList($request, $requestSecurity);

    if ($response->googleCloudDataplexV1ListActionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesZonesAssetsCreate

Creates an asset resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesAssetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetDiscoverySpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetDiscoveryStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetDiscoveryStatusStats;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetResourceSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetResourceSpecTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetResourceStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetResourceStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetSecurityStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetSecurityStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesAssetsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesZonesAssetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDataplexV1AssetInput = new GoogleCloudDataplexV1AssetInput();
    $request->googleCloudDataplexV1AssetInput->description = 'aut';
    $request->googleCloudDataplexV1AssetInput->discoverySpec = new GoogleCloudDataplexV1AssetDiscoverySpec();
    $request->googleCloudDataplexV1AssetInput->discoverySpec->csvOptions = new GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions();
    $request->googleCloudDataplexV1AssetInput->discoverySpec->csvOptions->delimiter = 'voluptatibus';
    $request->googleCloudDataplexV1AssetInput->discoverySpec->csvOptions->disableTypeInference = false;
    $request->googleCloudDataplexV1AssetInput->discoverySpec->csvOptions->encoding = 'exercitationem';
    $request->googleCloudDataplexV1AssetInput->discoverySpec->csvOptions->headerRows = 862310;
    $request->googleCloudDataplexV1AssetInput->discoverySpec->enabled = false;
    $request->googleCloudDataplexV1AssetInput->discoverySpec->excludePatterns = [
        'porro',
    ];
    $request->googleCloudDataplexV1AssetInput->discoverySpec->includePatterns = [
        'doloribus',
        'iusto',
        'eligendi',
        'ducimus',
    ];
    $request->googleCloudDataplexV1AssetInput->discoverySpec->jsonOptions = new GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions();
    $request->googleCloudDataplexV1AssetInput->discoverySpec->jsonOptions->disableTypeInference = false;
    $request->googleCloudDataplexV1AssetInput->discoverySpec->jsonOptions->encoding = 'alias';
    $request->googleCloudDataplexV1AssetInput->discoverySpec->schedule = 'officia';
    $request->googleCloudDataplexV1AssetInput->discoveryStatus = new GoogleCloudDataplexV1AssetDiscoveryStatus();
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->lastRunDuration = 'tempora';
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->lastRunTime = 'ipsam';
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->message = 'ea';
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->state = GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum::STATE_UNSPECIFIED;
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->stats = new GoogleCloudDataplexV1AssetDiscoveryStatusStats();
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->stats->dataItems = 'vel';
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->stats->dataSize = 'possimus';
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->stats->filesets = 'magnam';
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->stats->tables = 'ratione';
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->updateTime = 'ex';
    $request->googleCloudDataplexV1AssetInput->displayName = 'laudantium';
    $request->googleCloudDataplexV1AssetInput->labels = [
        'dolor' => 'maiores',
    ];
    $request->googleCloudDataplexV1AssetInput->resourceSpec = new GoogleCloudDataplexV1AssetResourceSpec();
    $request->googleCloudDataplexV1AssetInput->resourceSpec->name = 'Rosemary Stoltenberg';
    $request->googleCloudDataplexV1AssetInput->resourceSpec->readAccessMode = GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnum::DIRECT;
    $request->googleCloudDataplexV1AssetInput->resourceSpec->type = GoogleCloudDataplexV1AssetResourceSpecTypeEnum::BIGQUERY_DATASET;
    $request->googleCloudDataplexV1AssetInput->resourceStatus = new GoogleCloudDataplexV1AssetResourceStatusInput();
    $request->googleCloudDataplexV1AssetInput->resourceStatus->message = 'quisquam';
    $request->googleCloudDataplexV1AssetInput->resourceStatus->state = GoogleCloudDataplexV1AssetResourceStatusStateEnum::ERROR;
    $request->googleCloudDataplexV1AssetInput->resourceStatus->updateTime = 'ea';
    $request->googleCloudDataplexV1AssetInput->securityStatus = new GoogleCloudDataplexV1AssetSecurityStatus();
    $request->googleCloudDataplexV1AssetInput->securityStatus->message = 'impedit';
    $request->googleCloudDataplexV1AssetInput->securityStatus->state = GoogleCloudDataplexV1AssetSecurityStatusStateEnum::READY;
    $request->googleCloudDataplexV1AssetInput->securityStatus->updateTime = 'veniam';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->assetId = 'magnam';
    $request->callback = 'ea';
    $request->fields = 'quo';
    $request->key = 'consectetur';
    $request->oauthToken = 'recusandae';
    $request->parent = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'a';
    $request->validateOnly = false;

    $requestSecurity = new DataplexProjectsLocationsLakesZonesAssetsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesZonesAssetsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesZonesAssetsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesAssetsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'impedit';
    $request->key = 'aliquam';
    $request->oauthToken = 'fugit';
    $request->optionsRequestedPolicyVersion = 882860;
    $request->prettyPrint = false;
    $request->quotaUser = 'inventore';
    $request->resource = 'non';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new DataplexProjectsLocationsLakesZonesAssetsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesZonesAssetsGetIamPolicy($request, $requestSecurity);

    if ($response->googleIamV1Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesZonesAssetsList

Lists asset resources in a zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesAssetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesAssetsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesZonesAssetsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->fields = 'autem';
    $request->filter = 'nobis';
    $request->key = 'quas';
    $request->oauthToken = 'assumenda';
    $request->orderBy = 'nulla';
    $request->pageSize = 379034;
    $request->pageToken = 'libero';
    $request->parent = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new DataplexProjectsLocationsLakesZonesAssetsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesZonesAssetsList($request, $requestSecurity);

    if ($response->googleCloudDataplexV1ListAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesZonesAssetsPatch

Updates an asset resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesAssetsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetDiscoverySpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetDiscoveryStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetDiscoveryStatusStats;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetResourceSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetResourceSpecTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetResourceStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetResourceStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetSecurityStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetSecurityStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesAssetsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesZonesAssetsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDataplexV1AssetInput = new GoogleCloudDataplexV1AssetInput();
    $request->googleCloudDataplexV1AssetInput->description = 'ipsa';
    $request->googleCloudDataplexV1AssetInput->discoverySpec = new GoogleCloudDataplexV1AssetDiscoverySpec();
    $request->googleCloudDataplexV1AssetInput->discoverySpec->csvOptions = new GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions();
    $request->googleCloudDataplexV1AssetInput->discoverySpec->csvOptions->delimiter = 'molestiae';
    $request->googleCloudDataplexV1AssetInput->discoverySpec->csvOptions->disableTypeInference = false;
    $request->googleCloudDataplexV1AssetInput->discoverySpec->csvOptions->encoding = 'magnam';
    $request->googleCloudDataplexV1AssetInput->discoverySpec->csvOptions->headerRows = 487935;
    $request->googleCloudDataplexV1AssetInput->discoverySpec->enabled = false;
    $request->googleCloudDataplexV1AssetInput->discoverySpec->excludePatterns = [
        'esse',
        'esse',
    ];
    $request->googleCloudDataplexV1AssetInput->discoverySpec->includePatterns = [
        'fuga',
        'reprehenderit',
        'quidem',
    ];
    $request->googleCloudDataplexV1AssetInput->discoverySpec->jsonOptions = new GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions();
    $request->googleCloudDataplexV1AssetInput->discoverySpec->jsonOptions->disableTypeInference = false;
    $request->googleCloudDataplexV1AssetInput->discoverySpec->jsonOptions->encoding = 'fugiat';
    $request->googleCloudDataplexV1AssetInput->discoverySpec->schedule = 'ut';
    $request->googleCloudDataplexV1AssetInput->discoveryStatus = new GoogleCloudDataplexV1AssetDiscoveryStatus();
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->lastRunDuration = 'eum';
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->lastRunTime = 'suscipit';
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->message = 'assumenda';
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->state = GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum::STATE_UNSPECIFIED;
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->stats = new GoogleCloudDataplexV1AssetDiscoveryStatusStats();
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->stats->dataItems = 'praesentium';
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->stats->dataSize = 'quisquam';
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->stats->filesets = 'veritatis';
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->stats->tables = 'ipsa';
    $request->googleCloudDataplexV1AssetInput->discoveryStatus->updateTime = 'id';
    $request->googleCloudDataplexV1AssetInput->displayName = 'quidem';
    $request->googleCloudDataplexV1AssetInput->labels = [
        'quo' => 'illum',
    ];
    $request->googleCloudDataplexV1AssetInput->resourceSpec = new GoogleCloudDataplexV1AssetResourceSpec();
    $request->googleCloudDataplexV1AssetInput->resourceSpec->name = 'Wilbur Gerlach';
    $request->googleCloudDataplexV1AssetInput->resourceSpec->readAccessMode = GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnum::ACCESS_MODE_UNSPECIFIED;
    $request->googleCloudDataplexV1AssetInput->resourceSpec->type = GoogleCloudDataplexV1AssetResourceSpecTypeEnum::STORAGE_BUCKET;
    $request->googleCloudDataplexV1AssetInput->resourceStatus = new GoogleCloudDataplexV1AssetResourceStatusInput();
    $request->googleCloudDataplexV1AssetInput->resourceStatus->message = 'consequatur';
    $request->googleCloudDataplexV1AssetInput->resourceStatus->state = GoogleCloudDataplexV1AssetResourceStatusStateEnum::STATE_UNSPECIFIED;
    $request->googleCloudDataplexV1AssetInput->resourceStatus->updateTime = 'debitis';
    $request->googleCloudDataplexV1AssetInput->securityStatus = new GoogleCloudDataplexV1AssetSecurityStatus();
    $request->googleCloudDataplexV1AssetInput->securityStatus->message = 'ipsam';
    $request->googleCloudDataplexV1AssetInput->securityStatus->state = GoogleCloudDataplexV1AssetSecurityStatusStateEnum::STATE_UNSPECIFIED;
    $request->googleCloudDataplexV1AssetInput->securityStatus->updateTime = 'sequi';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'aperiam';
    $request->key = 'distinctio';
    $request->name = 'Cody Blick';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquam';
    $request->updateMask = 'odio';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'commodi';
    $request->validateOnly = false;

    $requestSecurity = new DataplexProjectsLocationsLakesZonesAssetsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesZonesAssetsPatch($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesZonesAssetsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Policy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Binding;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeExpr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesAssetsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest();
    $request->googleIamV1SetIamPolicyRequest->policy = new GoogleIamV1Policy();
    $request->googleIamV1SetIamPolicyRequest->policy->auditConfigs = [
        new GoogleIamV1AuditConfig(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->bindings = [
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->etag = 'molestiae';
    $request->googleIamV1SetIamPolicyRequest->policy->version = 35362;
    $request->googleIamV1SetIamPolicyRequest->updateMask = 'porro';
    $request->accessToken = 'eum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->fields = 'consequuntur';
    $request->key = 'deleniti';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->resource = 'mollitia';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'atque';

    $requestSecurity = new DataplexProjectsLocationsLakesZonesAssetsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesZonesAssetsSetIamPolicy($request, $requestSecurity);

    if ($response->googleIamV1Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesZonesAssetsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest();
    $request->googleIamV1TestIamPermissionsRequest->permissions = [
        'nisi',
        'fugit',
    ];
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ratione';
    $request->fields = 'explicabo';
    $request->key = 'saepe';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'atque';
    $request->resource = 'et';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'eveniet';

    $requestSecurity = new DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesZonesAssetsTestIamPermissions($request, $requestSecurity);

    if ($response->googleIamV1TestIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesZonesCreate

Creates a zone resource within a lake.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ZoneInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1AssetStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ZoneDiscoverySpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ZoneResourceSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1ZoneTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesZonesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDataplexV1ZoneInput = new GoogleCloudDataplexV1ZoneInput();
    $request->googleCloudDataplexV1ZoneInput->assetStatus = new GoogleCloudDataplexV1AssetStatus();
    $request->googleCloudDataplexV1ZoneInput->assetStatus->activeAssets = 82971;
    $request->googleCloudDataplexV1ZoneInput->assetStatus->securityPolicyApplyingAssets = 458604;
    $request->googleCloudDataplexV1ZoneInput->assetStatus->updateTime = 'quod';
    $request->googleCloudDataplexV1ZoneInput->description = 'nam';
    $request->googleCloudDataplexV1ZoneInput->discoverySpec = new GoogleCloudDataplexV1ZoneDiscoverySpec();
    $request->googleCloudDataplexV1ZoneInput->discoverySpec->csvOptions = new GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions();
    $request->googleCloudDataplexV1ZoneInput->discoverySpec->csvOptions->delimiter = 'vero';
    $request->googleCloudDataplexV1ZoneInput->discoverySpec->csvOptions->disableTypeInference = false;
    $request->googleCloudDataplexV1ZoneInput->discoverySpec->csvOptions->encoding = 'aliquid';
    $request->googleCloudDataplexV1ZoneInput->discoverySpec->csvOptions->headerRows = 93459;
    $request->googleCloudDataplexV1ZoneInput->discoverySpec->enabled = false;
    $request->googleCloudDataplexV1ZoneInput->discoverySpec->excludePatterns = [
        'vel',
        'harum',
        'molestiae',
        'rerum',
    ];
    $request->googleCloudDataplexV1ZoneInput->discoverySpec->includePatterns = [
        'minima',
        'distinctio',
        'eligendi',
    ];
    $request->googleCloudDataplexV1ZoneInput->discoverySpec->jsonOptions = new GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions();
    $request->googleCloudDataplexV1ZoneInput->discoverySpec->jsonOptions->disableTypeInference = false;
    $request->googleCloudDataplexV1ZoneInput->discoverySpec->jsonOptions->encoding = 'sit';
    $request->googleCloudDataplexV1ZoneInput->discoverySpec->schedule = 'culpa';
    $request->googleCloudDataplexV1ZoneInput->displayName = 'tempore';
    $request->googleCloudDataplexV1ZoneInput->labels = [
        'cumque' => 'consequuntur',
    ];
    $request->googleCloudDataplexV1ZoneInput->resourceSpec = new GoogleCloudDataplexV1ZoneResourceSpec();
    $request->googleCloudDataplexV1ZoneInput->resourceSpec->locationType = GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum::LOCATION_TYPE_UNSPECIFIED;
    $request->googleCloudDataplexV1ZoneInput->type = GoogleCloudDataplexV1ZoneTypeEnum::CURATED;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consectetur';
    $request->fields = 'esse';
    $request->key = 'blanditiis';
    $request->oauthToken = 'provident';
    $request->parent = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'nulla';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'esse';
    $request->validateOnly = false;
    $request->zoneId = 'quasi';

    $requestSecurity = new DataplexProjectsLocationsLakesZonesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesZonesCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesZonesEntitiesCreate

Create a metadata entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesEntitiesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1EntityInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1StorageFormatInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1StorageFormatCompressionFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1StorageFormatCsvOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1StorageFormatIcebergOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1StorageFormatJsonOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1Schema;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1SchemaSchemaField;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1SchemaSchemaFieldModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1SchemaPartitionField;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1SchemaPartitionStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1EntitySystemEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1EntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesEntitiesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesZonesEntitiesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDataplexV1EntityInput = new GoogleCloudDataplexV1EntityInput();
    $request->googleCloudDataplexV1EntityInput->asset = 'error';
    $request->googleCloudDataplexV1EntityInput->dataPath = 'sint';
    $request->googleCloudDataplexV1EntityInput->dataPathPattern = 'pariatur';
    $request->googleCloudDataplexV1EntityInput->description = 'possimus';
    $request->googleCloudDataplexV1EntityInput->displayName = 'quia';
    $request->googleCloudDataplexV1EntityInput->etag = 'eveniet';
    $request->googleCloudDataplexV1EntityInput->format = new GoogleCloudDataplexV1StorageFormatInput();
    $request->googleCloudDataplexV1EntityInput->format->compressionFormat = GoogleCloudDataplexV1StorageFormatCompressionFormatEnum::BZIP2;
    $request->googleCloudDataplexV1EntityInput->format->csv = new GoogleCloudDataplexV1StorageFormatCsvOptions();
    $request->googleCloudDataplexV1EntityInput->format->csv->delimiter = 'facere';
    $request->googleCloudDataplexV1EntityInput->format->csv->encoding = 'veritatis';
    $request->googleCloudDataplexV1EntityInput->format->csv->headerRows = 159414;
    $request->googleCloudDataplexV1EntityInput->format->csv->quote = 'quasi';
    $request->googleCloudDataplexV1EntityInput->format->iceberg = new GoogleCloudDataplexV1StorageFormatIcebergOptions();
    $request->googleCloudDataplexV1EntityInput->format->iceberg->metadataLocation = 'similique';
    $request->googleCloudDataplexV1EntityInput->format->json = new GoogleCloudDataplexV1StorageFormatJsonOptions();
    $request->googleCloudDataplexV1EntityInput->format->json->encoding = 'culpa';
    $request->googleCloudDataplexV1EntityInput->format->mimeType = 'aliquid';
    $request->googleCloudDataplexV1EntityInput->id = 'f1e674bd-b04f-4157-9608-2d68ea19f1d1';
    $request->googleCloudDataplexV1EntityInput->schema = new GoogleCloudDataplexV1Schema();
    $request->googleCloudDataplexV1EntityInput->schema->fields = [
        new GoogleCloudDataplexV1SchemaSchemaField(),
        new GoogleCloudDataplexV1SchemaSchemaField(),
    ];
    $request->googleCloudDataplexV1EntityInput->schema->partitionFields = [
        new GoogleCloudDataplexV1SchemaPartitionField(),
    ];
    $request->googleCloudDataplexV1EntityInput->schema->partitionStyle = GoogleCloudDataplexV1SchemaPartitionStyleEnum::PARTITION_STYLE_UNSPECIFIED;
    $request->googleCloudDataplexV1EntityInput->schema->userManaged = false;
    $request->googleCloudDataplexV1EntityInput->system = GoogleCloudDataplexV1EntitySystemEnum::STORAGE_SYSTEM_UNSPECIFIED;
    $request->googleCloudDataplexV1EntityInput->type = GoogleCloudDataplexV1EntityTypeEnum::TYPE_UNSPECIFIED;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'accusantium';
    $request->key = 'rem';
    $request->oauthToken = 'aut';
    $request->parent = 'laudantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'ab';
    $request->validateOnly = false;

    $requestSecurity = new DataplexProjectsLocationsLakesZonesEntitiesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesZonesEntitiesCreate($request, $requestSecurity);

    if ($response->googleCloudDataplexV1Entity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesZonesEntitiesList

List metadata entities in a zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesEntitiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesEntitiesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesEntitiesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesZonesEntitiesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'non';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'occaecati';
    $request->filter = 'numquam';
    $request->key = 'impedit';
    $request->oauthToken = 'explicabo';
    $request->pageSize = 376226;
    $request->pageToken = 'aut';
    $request->parent = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'natus';
    $request->view = DataplexProjectsLocationsLakesZonesEntitiesListViewEnum::ENTITY_VIEW_UNSPECIFIED;

    $requestSecurity = new DataplexProjectsLocationsLakesZonesEntitiesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesZonesEntitiesList($request, $requestSecurity);

    if ($response->googleCloudDataplexV1ListEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate

Create a metadata partition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1PartitionInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDataplexV1PartitionInput = new GoogleCloudDataplexV1PartitionInput();
    $request->googleCloudDataplexV1PartitionInput->etag = 'voluptas';
    $request->googleCloudDataplexV1PartitionInput->location = 'asperiores';
    $request->googleCloudDataplexV1PartitionInput->values = [
        'ea',
    ];
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellendus';
    $request->fields = 'officia';
    $request->key = 'maxime';
    $request->oauthToken = 'dignissimos';
    $request->parent = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'quae';
    $request->validateOnly = false;

    $requestSecurity = new DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate($request, $requestSecurity);

    if ($response->googleCloudDataplexV1Partition !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesZonesEntitiesPartitionsList

List metadata partitions of an entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesEntitiesPartitionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesEntitiesPartitionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesZonesEntitiesPartitionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'ab';
    $request->filter = 'adipisci';
    $request->key = 'fuga';
    $request->oauthToken = 'id';
    $request->pageSize = 380729;
    $request->pageToken = 'velit';
    $request->parent = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new DataplexProjectsLocationsLakesZonesEntitiesPartitionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesZonesEntitiesPartitionsList($request, $requestSecurity);

    if ($response->googleCloudDataplexV1ListPartitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesZonesEntitiesUpdate

Update a metadata entity. Only supports full resource update.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1EntityInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1StorageFormatInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1StorageFormatCompressionFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1StorageFormatCsvOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1StorageFormatIcebergOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1StorageFormatJsonOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1Schema;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1SchemaSchemaField;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1SchemaSchemaFieldModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1SchemaPartitionField;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1SchemaPartitionStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1EntitySystemEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1EntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesEntitiesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDataplexV1EntityInput = new GoogleCloudDataplexV1EntityInput();
    $request->googleCloudDataplexV1EntityInput->asset = 'vel';
    $request->googleCloudDataplexV1EntityInput->dataPath = 'ducimus';
    $request->googleCloudDataplexV1EntityInput->dataPathPattern = 'quos';
    $request->googleCloudDataplexV1EntityInput->description = 'vel';
    $request->googleCloudDataplexV1EntityInput->displayName = 'labore';
    $request->googleCloudDataplexV1EntityInput->etag = 'possimus';
    $request->googleCloudDataplexV1EntityInput->format = new GoogleCloudDataplexV1StorageFormatInput();
    $request->googleCloudDataplexV1EntityInput->format->compressionFormat = GoogleCloudDataplexV1StorageFormatCompressionFormatEnum::BZIP2;
    $request->googleCloudDataplexV1EntityInput->format->csv = new GoogleCloudDataplexV1StorageFormatCsvOptions();
    $request->googleCloudDataplexV1EntityInput->format->csv->delimiter = 'cum';
    $request->googleCloudDataplexV1EntityInput->format->csv->encoding = 'commodi';
    $request->googleCloudDataplexV1EntityInput->format->csv->headerRows = 447144;
    $request->googleCloudDataplexV1EntityInput->format->csv->quote = 'corporis';
    $request->googleCloudDataplexV1EntityInput->format->iceberg = new GoogleCloudDataplexV1StorageFormatIcebergOptions();
    $request->googleCloudDataplexV1EntityInput->format->iceberg->metadataLocation = 'reiciendis';
    $request->googleCloudDataplexV1EntityInput->format->json = new GoogleCloudDataplexV1StorageFormatJsonOptions();
    $request->googleCloudDataplexV1EntityInput->format->json->encoding = 'assumenda';
    $request->googleCloudDataplexV1EntityInput->format->mimeType = 'nemo';
    $request->googleCloudDataplexV1EntityInput->id = 'e60b375e-d4f6-4fbe-a41f-33317fe35b60';
    $request->googleCloudDataplexV1EntityInput->schema = new GoogleCloudDataplexV1Schema();
    $request->googleCloudDataplexV1EntityInput->schema->fields = [
        new GoogleCloudDataplexV1SchemaSchemaField(),
        new GoogleCloudDataplexV1SchemaSchemaField(),
        new GoogleCloudDataplexV1SchemaSchemaField(),
        new GoogleCloudDataplexV1SchemaSchemaField(),
    ];
    $request->googleCloudDataplexV1EntityInput->schema->partitionFields = [
        new GoogleCloudDataplexV1SchemaPartitionField(),
        new GoogleCloudDataplexV1SchemaPartitionField(),
        new GoogleCloudDataplexV1SchemaPartitionField(),
    ];
    $request->googleCloudDataplexV1EntityInput->schema->partitionStyle = GoogleCloudDataplexV1SchemaPartitionStyleEnum::PARTITION_STYLE_UNSPECIFIED;
    $request->googleCloudDataplexV1EntityInput->schema->userManaged = false;
    $request->googleCloudDataplexV1EntityInput->system = GoogleCloudDataplexV1EntitySystemEnum::BIGQUERY;
    $request->googleCloudDataplexV1EntityInput->type = GoogleCloudDataplexV1EntityTypeEnum::TABLE;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptas';
    $request->fields = 'voluptas';
    $request->key = 'voluptas';
    $request->name = 'Gayle Parisian';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'dolore';
    $request->validateOnly = false;

    $requestSecurity = new DataplexProjectsLocationsLakesZonesEntitiesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesZonesEntitiesUpdate($request, $requestSecurity);

    if ($response->googleCloudDataplexV1Entity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsLakesZonesList

Lists zone resources in a lake.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsLakesZonesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsLakesZonesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ullam';
    $request->fields = 'adipisci';
    $request->filter = 'cum';
    $request->key = 'blanditiis';
    $request->oauthToken = 'quas';
    $request->orderBy = 'hic';
    $request->pageSize = 201517;
    $request->pageToken = 'culpa';
    $request->parent = 'corrupti';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new DataplexProjectsLocationsLakesZonesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsLakesZonesList($request, $requestSecurity);

    if ($response->googleCloudDataplexV1ListZonesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'rerum';
    $request->fields = 'sed';
    $request->filter = 'reiciendis';
    $request->key = 'explicabo';
    $request->name = 'Johnathan Klein V';
    $request->oauthToken = 'dolore';
    $request->pageSize = 671907;
    $request->pageToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new DataplexProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsList($request, $requestSecurity);

    if ($response->googleCloudLocationListLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'unde' => 'architecto',
        'suscipit' => 'sapiente',
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'perferendis';
    $request->key = 'corrupti';
    $request->name = 'Troy Cormier';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new DataplexProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->etag = 'voluptate';
    $request->fields = 'reiciendis';
    $request->key = 'ex';
    $request->name = 'Ethel Towne';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new DataplexProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsOperationsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'error';
    $request->fields = 'veniam';
    $request->key = 'minima';
    $request->name = 'Van Stoltenberg PhD';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'veniam';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'officiis';
    $request->view = DataplexProjectsLocationsOperationsGetViewEnum::ENTITY_VIEW_UNSPECIFIED;

    $requestSecurity = new DataplexProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataplexProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'laboriosam';
    $request->filter = 'dolorum';
    $request->key = 'voluptatum';
    $request->name = 'Irvin Rath';
    $request->oauthToken = 'dolorum';
    $request->pageSize = 341698;
    $request->pageToken = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new DataplexProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
