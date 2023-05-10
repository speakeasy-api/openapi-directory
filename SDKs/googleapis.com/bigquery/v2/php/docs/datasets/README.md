# datasets

### Available Operations

* [bigqueryDatasetsDelete](#bigquerydatasetsdelete) - Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
* [bigqueryDatasetsGet](#bigquerydatasetsget) - Returns the dataset specified by datasetID.
* [bigqueryDatasetsInsert](#bigquerydatasetsinsert) - Creates a new empty dataset.
* [bigqueryDatasetsList](#bigquerydatasetslist) - Lists all datasets in the specified project to which you have been granted the READER dataset role.
* [bigqueryDatasetsPatch](#bigquerydatasetspatch) - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
* [bigqueryDatasetsUpdate](#bigquerydatasetsupdate) - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.

## bigqueryDatasetsDelete

Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryDatasetsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'illum';
    $request->deleteContents = false;
    $request->fields = 'vel';
    $request->key = 'error';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->projectId = 'suscipit';
    $request->quotaUser = 'iure';
    $request->userIp = 'magnam';

    $requestSecurity = new BigqueryDatasetsDeleteSecurity();
    $requestSecurity->option1 = new BigqueryDatasetsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datasets->bigqueryDatasetsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryDatasetsGet

Returns the dataset specified by datasetID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryDatasetsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->projectId = 'suscipit';
    $request->quotaUser = 'molestiae';
    $request->userIp = 'minus';

    $requestSecurity = new BigqueryDatasetsGetSecurity();
    $requestSecurity->option1 = new BigqueryDatasetsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datasets->bigqueryDatasetsGet($request, $requestSecurity);

    if ($response->dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryDatasetsInsert

Creates a new empty dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Dataset;
use \OpenAPI\OpenAPI\Models\Shared\DatasetAccess;
use \OpenAPI\OpenAPI\Models\Shared\DatasetAccessEntry;
use \OpenAPI\OpenAPI\Models\Shared\DatasetReference;
use \OpenAPI\OpenAPI\Models\Shared\DatasetAccessEntryTargetTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoutineReference;
use \OpenAPI\OpenAPI\Models\Shared\TableReference;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DatasetTags;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryDatasetsInsertRequest();
    $request->dataset = new Dataset();
    $request->dataset->access = [
        new DatasetAccess(),
        new DatasetAccess(),
        new DatasetAccess(),
        new DatasetAccess(),
    ];
    $request->dataset->creationTime = 'voluptatum';
    $request->dataset->datasetReference = new DatasetReference();
    $request->dataset->datasetReference->datasetId = 'iusto';
    $request->dataset->datasetReference->projectId = 'excepturi';
    $request->dataset->defaultCollation = 'nisi';
    $request->dataset->defaultEncryptionConfiguration = new EncryptionConfiguration();
    $request->dataset->defaultEncryptionConfiguration->kmsKeyName = 'recusandae';
    $request->dataset->defaultPartitionExpirationMs = 'temporibus';
    $request->dataset->defaultRoundingMode = 'ab';
    $request->dataset->defaultTableExpirationMs = 'quis';
    $request->dataset->description = 'veritatis';
    $request->dataset->etag = 'deserunt';
    $request->dataset->friendlyName = 'perferendis';
    $request->dataset->id = '5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb';
    $request->dataset->isCaseInsensitive = false;
    $request->dataset->kind = 'esse';
    $request->dataset->labels = [
        'excepturi' => 'aspernatur',
    ];
    $request->dataset->lastModifiedTime = 'perferendis';
    $request->dataset->location = 'ad';
    $request->dataset->maxTimeTravelHours = 'natus';
    $request->dataset->satisfiesPzs = false;
    $request->dataset->selfLink = 'sed';
    $request->dataset->storageBillingModel = 'iste';
    $request->dataset->tags = [
        new DatasetTags(),
    ];
    $request->alt = AltEnum::JSON;
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->projectId = 'saepe';
    $request->quotaUser = 'fuga';
    $request->userIp = 'in';

    $requestSecurity = new BigqueryDatasetsInsertSecurity();
    $requestSecurity->option1 = new BigqueryDatasetsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datasets->bigqueryDatasetsInsert($request, $requestSecurity);

    if ($response->dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryDatasetsList

Lists all datasets in the specified project to which you have been granted the READER dataset role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryDatasetsListRequest();
    $request->all = false;
    $request->alt = AltEnum::JSON;
    $request->fields = 'corporis';
    $request->filter = 'iste';
    $request->key = 'iure';
    $request->maxResults = 902349;
    $request->oauthToken = 'quidem';
    $request->pageToken = 'architecto';
    $request->prettyPrint = false;
    $request->projectId = 'ipsa';
    $request->quotaUser = 'reiciendis';
    $request->userIp = 'est';

    $requestSecurity = new BigqueryDatasetsListSecurity();
    $requestSecurity->option1 = new BigqueryDatasetsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datasets->bigqueryDatasetsList($request, $requestSecurity);

    if ($response->datasetList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryDatasetsPatch

Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Dataset;
use \OpenAPI\OpenAPI\Models\Shared\DatasetAccess;
use \OpenAPI\OpenAPI\Models\Shared\DatasetAccessEntry;
use \OpenAPI\OpenAPI\Models\Shared\DatasetReference;
use \OpenAPI\OpenAPI\Models\Shared\DatasetAccessEntryTargetTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoutineReference;
use \OpenAPI\OpenAPI\Models\Shared\TableReference;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DatasetTags;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryDatasetsPatchRequest();
    $request->dataset = new Dataset();
    $request->dataset->access = [
        new DatasetAccess(),
        new DatasetAccess(),
        new DatasetAccess(),
    ];
    $request->dataset->creationTime = 'laborum';
    $request->dataset->datasetReference = new DatasetReference();
    $request->dataset->datasetReference->datasetId = 'dolores';
    $request->dataset->datasetReference->projectId = 'dolorem';
    $request->dataset->defaultCollation = 'corporis';
    $request->dataset->defaultEncryptionConfiguration = new EncryptionConfiguration();
    $request->dataset->defaultEncryptionConfiguration->kmsKeyName = 'explicabo';
    $request->dataset->defaultPartitionExpirationMs = 'nobis';
    $request->dataset->defaultRoundingMode = 'enim';
    $request->dataset->defaultTableExpirationMs = 'omnis';
    $request->dataset->description = 'nemo';
    $request->dataset->etag = 'minima';
    $request->dataset->friendlyName = 'excepturi';
    $request->dataset->id = '07aff1a3-a2fa-4946-b739-251aa52c3f5a';
    $request->dataset->isCaseInsensitive = false;
    $request->dataset->kind = 'possimus';
    $request->dataset->labels = [
        'quasi' => 'error',
    ];
    $request->dataset->lastModifiedTime = 'temporibus';
    $request->dataset->location = 'laborum';
    $request->dataset->maxTimeTravelHours = 'quasi';
    $request->dataset->satisfiesPzs = false;
    $request->dataset->selfLink = 'reiciendis';
    $request->dataset->storageBillingModel = 'voluptatibus';
    $request->dataset->tags = [
        new DatasetTags(),
        new DatasetTags(),
        new DatasetTags(),
        new DatasetTags(),
    ];
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'nihil';
    $request->fields = 'praesentium';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->projectId = 'omnis';
    $request->quotaUser = 'voluptate';
    $request->userIp = 'cum';

    $requestSecurity = new BigqueryDatasetsPatchSecurity();
    $requestSecurity->option1 = new BigqueryDatasetsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datasets->bigqueryDatasetsPatch($request, $requestSecurity);

    if ($response->dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryDatasetsUpdate

Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Dataset;
use \OpenAPI\OpenAPI\Models\Shared\DatasetAccess;
use \OpenAPI\OpenAPI\Models\Shared\DatasetAccessEntry;
use \OpenAPI\OpenAPI\Models\Shared\DatasetReference;
use \OpenAPI\OpenAPI\Models\Shared\DatasetAccessEntryTargetTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoutineReference;
use \OpenAPI\OpenAPI\Models\Shared\TableReference;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DatasetTags;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryDatasetsUpdateRequest();
    $request->dataset = new Dataset();
    $request->dataset->access = [
        new DatasetAccess(),
    ];
    $request->dataset->creationTime = 'doloremque';
    $request->dataset->datasetReference = new DatasetReference();
    $request->dataset->datasetReference->datasetId = 'reprehenderit';
    $request->dataset->datasetReference->projectId = 'ut';
    $request->dataset->defaultCollation = 'maiores';
    $request->dataset->defaultEncryptionConfiguration = new EncryptionConfiguration();
    $request->dataset->defaultEncryptionConfiguration->kmsKeyName = 'dicta';
    $request->dataset->defaultPartitionExpirationMs = 'corporis';
    $request->dataset->defaultRoundingMode = 'dolore';
    $request->dataset->defaultTableExpirationMs = 'iusto';
    $request->dataset->description = 'dicta';
    $request->dataset->etag = 'harum';
    $request->dataset->friendlyName = 'enim';
    $request->dataset->id = 'e6e13b99-d488-4e1e-91e4-50ad2abd4426';
    $request->dataset->isCaseInsensitive = false;
    $request->dataset->kind = 'cupiditate';
    $request->dataset->labels = [
        'perferendis' => 'magni',
        'assumenda' => 'ipsam',
        'alias' => 'fugit',
    ];
    $request->dataset->lastModifiedTime = 'dolorum';
    $request->dataset->location = 'excepturi';
    $request->dataset->maxTimeTravelHours = 'tempora';
    $request->dataset->satisfiesPzs = false;
    $request->dataset->selfLink = 'facilis';
    $request->dataset->storageBillingModel = 'tempore';
    $request->dataset->tags = [
        new DatasetTags(),
        new DatasetTags(),
    ];
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'delectus';
    $request->fields = 'eum';
    $request->key = 'non';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->projectId = 'sint';
    $request->quotaUser = 'aliquid';
    $request->userIp = 'provident';

    $requestSecurity = new BigqueryDatasetsUpdateSecurity();
    $requestSecurity->option1 = new BigqueryDatasetsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datasets->bigqueryDatasetsUpdate($request, $requestSecurity);

    if ($response->dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
