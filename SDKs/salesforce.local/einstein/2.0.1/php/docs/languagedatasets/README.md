# languageDatasets

## Overview

Resources that manage text datasets.

### Available Operations

* [deleteDataset](#deletedataset) - Delete a Dataset
* [get](#get) - Get Deletion Status
* [getDataset](#getdataset) - Get a Dataset
* [listDatasets](#listdatasets) - Get All Datasets
* [uploadDatasetAsync](#uploaddatasetasync) - Create a Dataset From a File Asynchronously
* [uploadDatasetSync](#uploaddatasetsync) - Create a Dataset From a File Synchronously

## deleteDataset

Deletes the specified dataset and associated labels and examples.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatasetRequest();
    $request->datasetId = 'provident';

    $requestSecurity = new DeleteDatasetSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageDatasets->deleteDataset($request, $requestSecurity);

    if ($response->deletionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## get

Returns the status of a language dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->id = 'bd9d8d69-a674-4e0f-867c-c8796ed151a0';

    $requestSecurity = new GetSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageDatasets->get($request, $requestSecurity);

    if ($response->deletionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataset

Returns a single dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDatasetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDatasetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatasetRequest();
    $request->datasetId = 'ipsam';

    $requestSecurity = new GetDatasetSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageDatasets->getDataset($request, $requestSecurity);

    if ($response->dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatasets

Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatasetsRequest();
    $request->count = 'repellendus';
    $request->global = false;
    $request->offset = 'sapiente';

    $requestSecurity = new ListDatasetsSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageDatasets->listDatasets($request, $requestSecurity);

    if ($response->datasetList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadDatasetAsync

Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns immediately and continues to upload data in the background.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UploadDatasetAsyncRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UploadDatasetAsyncRequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UploadDatasetAsyncSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadDatasetAsyncRequestBody();
    $request->data = 'quo';
    $request->name = 'weather';
    $request->path = 'odit';
    $request->type = UploadDatasetAsyncRequestBodyTypeEnum::TEXT_SENTIMENT;

    $requestSecurity = new UploadDatasetAsyncSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageDatasets->uploadDatasetAsync($request, $requestSecurity);

    if ($response->dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadDatasetSync

Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns after the dataset is created and all of the data is uploaded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UploadDatasetSyncRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UploadDatasetSyncRequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UploadDatasetSyncSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadDatasetSyncRequestBody();
    $request->data = 'at';
    $request->name = 'weather';
    $request->path = 'maiores';
    $request->type = UploadDatasetSyncRequestBodyTypeEnum::TEXT_INTENT;

    $requestSecurity = new UploadDatasetSyncSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageDatasets->uploadDatasetSync($request, $requestSecurity);

    if ($response->dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
