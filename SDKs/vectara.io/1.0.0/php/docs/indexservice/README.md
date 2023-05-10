# indexService

## Overview

Indexing operations, such as creating and deleting documents

### Available Operations

* [delete](#delete) - Delete
* [fileUpload](#fileupload) - File Upload
* [index](#index) - Index

## delete

Delete

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\VectaraDeleteDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRequest();
    $request->customerId = 778157;
    $request->vectaraDeleteDocumentRequest = new VectaraDeleteDocumentRequest();
    $request->vectaraDeleteDocumentRequest->corpusId = 'odit';
    $request->vectaraDeleteDocumentRequest->customerId = 'at';
    $request->vectaraDeleteDocumentRequest->documentId = 'at';

    $requestSecurity = new DeleteSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->indexService->delete($request, $requestSecurity);

    if ($response->vectaraDeleteDocumentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileUpload

File Upload

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FileUploadRequest;
use \OpenAPI\OpenAPI\Models\Operations\FileUploadRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\FileUploadRequestBodyFile;
use \OpenAPI\OpenAPI\Models\Operations\FileUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileUploadRequest();
    $request->requestBody = new FileUploadRequestBody();
    $request->requestBody->docMetadata = 'maiores';
    $request->requestBody->file = new FileUploadRequestBodyFile();
    $request->requestBody->file->content = 'molestiae';
    $request->requestBody->file->file = 'quod';
    $request->c = 800911;
    $request->d = false;
    $request->o = 461479;

    $requestSecurity = new FileUploadSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->indexService->fileUpload($request, $requestSecurity);

    if ($response->fileUpload200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## index

Index

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\IndexRequest;
use \OpenAPI\OpenAPI\Models\Shared\VectaraIndexDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\VectaraindexingDocument;
use \OpenAPI\OpenAPI\Models\Shared\VectaraindexingCustomDimension;
use \OpenAPI\OpenAPI\Models\Shared\IndexingSection;
use \OpenAPI\OpenAPI\Models\Operations\IndexSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IndexRequest();
    $request->customerId = 520478;
    $request->vectaraIndexDocumentRequest = new VectaraIndexDocumentRequest();
    $request->vectaraIndexDocumentRequest->corpusId = 'porro';
    $request->vectaraIndexDocumentRequest->customerId = 'dolorum';
    $request->vectaraIndexDocumentRequest->document = new VectaraindexingDocument();
    $request->vectaraIndexDocumentRequest->document->customDims = [
        new VectaraindexingCustomDimension(),
    ];
    $request->vectaraIndexDocumentRequest->document->description = 'nam';
    $request->vectaraIndexDocumentRequest->document->documentId = 'officia';
    $request->vectaraIndexDocumentRequest->document->metadataJson = 'occaecati';
    $request->vectaraIndexDocumentRequest->document->section = [
        new IndexingSection(),
    ];
    $request->vectaraIndexDocumentRequest->document->title = 'Ms.';

    $requestSecurity = new IndexSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->indexService->index($request, $requestSecurity);

    if ($response->vectaraIndexDocumentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
