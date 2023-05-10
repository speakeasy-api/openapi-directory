# dataAPI

## Overview

Exposes endpoints for reading and writing documents in OPA. For an explanation of the different types of documents, see [the OPA document model](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)

### Available Operations

* [deleteDocument](#deletedocument) - Delete a document
* [getDocument](#getdocument) - Get a document
* [getDocumentWithPath](#getdocumentwithpath) - Get a document (with input)
* [getDocumentWithWebHook](#getdocumentwithwebhook) - Get a document (with webhook)
* [patchDocument](#patchdocument) - Update a document
* [putDocument](#putdocument) - Create or overwrite a document

## deleteDocument

This API endpoint deletes an existing document from the server

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDocumentRequest();
    $request->path = 'debitis';

    $response = $sdk->dataAPI->deleteDocument($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocument

This API endpoint returns the document specified by `path`.

The server will return a *bad request* (400) response if either:
- The query requires an input document and you do not provide it
- You provide the input document but the query has already defined it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentRequest();
    $request->explain = 'ipsa';
    $request->input = [
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
        'iusto' => 'excepturi',
    ];
    $request->instrument = false;
    $request->metrics = false;
    $request->path = 'nisi';
    $request->pretty = false;
    $request->provenance = false;

    $response = $sdk->dataAPI->getDocument($request);

    if ($response->getDocument200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocumentWithPath

The server will return a *bad request* (400) response if either:
- The query requires an input document and you do not provide it
- You provided an input document but the query has already defined it.

If `path` indexes into an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, a *not found* response (404) will be returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentWithPathRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentWithPathRequest();
    $request->requestBody = 'recusandae';
    $request->explain = 'temporibus';
    $request->instrument = false;
    $request->metrics = false;
    $request->path = 'ab';
    $request->pretty = false;
    $request->provenance = false;

    $response = $sdk->dataAPI->getDocumentWithPath($request);

    if ($response->getDocumentWithPath200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocumentWithWebHook

The example given here assumes you have created a policy (with `PUT /v1/policies/{path}`), such as:

  ```yaml
  package opa.examples
  import input.example.flag
  allow_request { flag == true }
  ```

The server will return a *not found* (404) response if the requested document is missing or undefined.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentWithWebHookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentWithWebHookRequest();
    $request->requestBody = 'quis';
    $request->path = 'veritatis';
    $request->pretty = false;

    $response = $sdk->dataAPI->getDocumentWithWebHook($request);

    if ($response->getDocumentWithWebHook200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchDocument

This API endpoint updates an existing document on the server by describing the changes required (using [JSON patch operations](http://jsonpatch.com/))

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatchesSchema;
use \OpenAPI\OpenAPI\Models\Shared\PatchesSchemaOpEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchDocumentRequest();
    $request->requestBody = [
        new PatchesSchema(),
        new PatchesSchema(),
        new PatchesSchema(),
    ];
    $request->path = 'perferendis';

    $response = $sdk->dataAPI->patchDocument($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDocument

If the path does not refer to an existing document (for example *us-west/servers*), the server will attempt to create all the necessary containing documents.

This behavior is similar to the Unix command [mkdir -p](https://en.wikipedia.org/wiki/Mkdir#Options).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutDocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDocumentRequest();
    $request->ifNoneMatch = 'ipsam';
    $request->requestBody = 'repellendus';
    $request->path = 'sapiente';

    $response = $sdk->dataAPI->putDocument($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
