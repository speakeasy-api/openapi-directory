# blobs

## Overview

The `blobs` resource provides a service for storing binary objects on the Brain, e.g. images.
Intended for applications that interact with the Brain but do not or cannot have their own (centralized) persistent storage.

See also the `kvpairs` resource.


### Available Operations

* [addBlob](#addblob) - Create binary large object (blob) metadata
* [deleteBlob](#deleteblob) - Delete binary large object (blob)
* [getBlobById](#getblobbyid) - Download a binary large object (blob)
* [getBlobMetadataById](#getblobmetadatabyid) - Get binary large object (blob)
* [getBlobs](#getblobs) - Get all binary large objects (blob)
* [uploadBlobById](#uploadblobbyid) - Create binary large object (blob)

## addBlob

Create binary large object (blob) metadata

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BlobInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BlobInput();
    $request->blobKey = 'foobar';
    $request->contentType = 'image/png';
    $request->filename = 'Foo bar';

    $response = $sdk->blobs->addBlob($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBlob

Delete binary large object (blob)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBlobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBlobRequest();
    $request->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';

    $response = $sdk->blobs->deleteBlob($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlobById

Download a binary large object (blob)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBlobByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlobByIdRequest();
    $request->filename = 'deserunt';
    $request->id = '05dfc2dd-f7cc-478c-a1ba-928fc816742c';

    $response = $sdk->blobs->getBlobById($request);

    if ($response->getBlobById200ImageWildcardBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlobMetadataById

Get binary large object (blob)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBlobMetadataByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlobMetadataByIdRequest();
    $request->id = 'b7392059-2939-46fe-a759-6eb10faaa235';

    $response = $sdk->blobs->getBlobMetadataById($request);

    if ($response->blob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlobs

Get all binary large objects (blob)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBlobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlobsRequest();
    $request->after = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-01T23:59:21.675Z');
    $request->afterId = 'enim';
    $request->before = 'omnis';
    $request->beforeId = 'nemo';
    $request->blobKey = 'minima';
    $request->contentType = 'excepturi';
    $request->filename = 'accusantium';
    $request->from = 'iure';
    $request->fromId = 'culpa';
    $request->hash = 'doloribus';
    $request->id = '5b7d6cbd7503c445552a1664';
    $request->idOnly = false;
    $request->limit = 958950;
    $request->populate = 'architecto';
    $request->resultsOnly = false;
    $request->select = 'mollitia';
    $request->sort = 'dolorem';
    $request->timeCreated = '2018-08-30T09:51:59.737Z';
    $request->timeLastAccessed = 'culpa';
    $request->timeUpdated = '2018-08-30T09:51:59.737Z';
    $request->timeoutS = 1613.09;
    $request->until = 'repellat';
    $request->untilId = 'mollitia';

    $response = $sdk->blobs->getBlobs($request);

    if ($response->getBlobs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadBlobById

Create binary large object (blob)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UploadBlobByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\UploadBlobByIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UploadBlobByIdRequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadBlobByIdRequest();
    $request->requestBody = new UploadBlobByIdRequestBody();
    $request->requestBody->file = new UploadBlobByIdRequestBodyFile();
    $request->requestBody->file->content = 'occaecati';
    $request->requestBody->file->file = 'numquam';
    $request->id = '67739251-aa52-4c3f-9ad0-19da1ffe78f0';

    $response = $sdk->blobs->uploadBlobById($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
