# visionDatasets

## Overview

Resources that manage image datasets.

### Available Operations

* [createDataset](#createdataset) - Create a Dataset
* [deleteDataset1](#deletedataset1) - Delete a Dataset
* [getDataset1](#getdataset1) - Get a Dataset
* [get1](#get1) - Get Deletion Status
* [listDatasets1](#listdatasets1) - Get All Datasets
* [uploadDatasetAsync1](#uploaddatasetasync1) - Create a Dataset From a Zip File Asynchronously
* [uploadDatasetSync1](#uploaddatasetsync1) - Create a Dataset From a Zip File Synchronously

## createDataset

Creates a dataset and labels, if they're specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetRequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatasetRequestBody();
    $request->labels = 'beach,mountain';
    $request->name = 'Beach and Mountain';
    $request->type = CreateDatasetRequestBodyTypeEnum::IMAGE_MULTI_LABEL;

    $requestSecurity = new CreateDatasetSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionDatasets->createDataset($request, $requestSecurity);

    if ($response->dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataset1

Deletes the specified dataset and associated labels and examples.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataset1Request;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataset1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDataset1Request();
    $request->datasetId = 'laboriosam';

    $requestSecurity = new DeleteDataset1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionDatasets->deleteDataset1($request, $requestSecurity);

    if ($response->deletionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataset1

Returns a single dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDataset1Request;
use \OpenAPI\OpenAPI\Models\Operations\GetDataset1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataset1Request();
    $request->datasetId = 'hic';

    $requestSecurity = new GetDataset1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionDatasets->getDataset1($request, $requestSecurity);

    if ($response->dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## get1

Returns the status of an image dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Get1Request;
use \OpenAPI\OpenAPI\Models\Operations\Get1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Get1Request();
    $request->id = 'ea7596eb-10fa-4aa2-b52c-5955907aff1a';

    $requestSecurity = new Get1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionDatasets->get1($request, $requestSecurity);

    if ($response->deletionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatasets1

Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasets1Request;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasets1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatasets1Request();
    $request->count = 'dolorem';
    $request->global = false;
    $request->offset = 'culpa';

    $requestSecurity = new ListDatasets1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionDatasets->listDatasets1($request, $requestSecurity);

    if ($response->datasetList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadDatasetAsync1

Creates a dataset, labels, and examples from the specified .zip file. The call returns immediately and continues to upload the images in the background.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UploadDatasetAsync1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UploadDatasetAsync1RequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UploadDatasetAsync1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadDatasetAsync1RequestBody();
    $request->data = 'consequuntur';
    $request->name = 'mountainvsbeach';
    $request->path = 'repellat';
    $request->type = UploadDatasetAsync1RequestBodyTypeEnum::IMAGE_DETECTION;

    $requestSecurity = new UploadDatasetAsync1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionDatasets->uploadDatasetAsync1($request, $requestSecurity);

    if ($response->dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadDatasetSync1

Creates a dataset, labels, and examples from the specified .zip file. The call returns after the dataset is created and all of the images are uploaded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UploadDatasetSync1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UploadDatasetSync1RequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UploadDatasetSync1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadDatasetSync1RequestBody();
    $request->data = 'occaecati';
    $request->name = 'mountainvsbeach';
    $request->path = 'numquam';
    $request->type = UploadDatasetSync1RequestBodyTypeEnum::IMAGE_DETECTION;

    $requestSecurity = new UploadDatasetSync1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionDatasets->uploadDatasetSync1($request, $requestSecurity);

    if ($response->dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
