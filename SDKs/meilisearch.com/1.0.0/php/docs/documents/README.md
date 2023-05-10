# documents

### Available Operations

* [addOrReplaceDocuments](#addorreplacedocuments) - Add or replace documents
* [addOrUpdateDocuments](#addorupdatedocuments) - Add or update documents
* [deleteAllDocuments](#deletealldocuments) - Delete all documents
* [deleteDocuments](#deletedocuments) - Delete documents
* [deleteOneDocument](#deleteonedocument) - Delete one document
* [getDocuments](#getdocuments) - Get documents
* [getOneDocument](#getonedocument) - Get one document

## addOrReplaceDocuments

Add or replace documents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddOrReplaceDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddOrReplaceDocumentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddOrReplaceDocumentsRequest();
    $request->requestBody = [
        new AddOrReplaceDocumentsRequestBody(),
        new AddOrReplaceDocumentsRequestBody(),
        new AddOrReplaceDocumentsRequestBody(),
    ];
    $request->csvDelimiter = ';';
    $request->primaryKey = 'id';

    $response = $sdk->documents->addOrReplaceDocuments($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addOrUpdateDocuments

Add or update documents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddOrUpdateDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddOrUpdateDocumentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddOrUpdateDocumentsRequest();
    $request->requestBody = [
        new AddOrUpdateDocumentsRequestBody(),
        new AddOrUpdateDocumentsRequestBody(),
        new AddOrUpdateDocumentsRequestBody(),
    ];
    $request->csvDelimiter = ';';
    $request->primaryKey = 'id';

    $response = $sdk->documents->addOrUpdateDocuments($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAllDocuments

Delete all documents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->documents->deleteAllDocuments();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDocuments

Delete documents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        1,
        1,
        1,
        1,
    ]

    $response = $sdk->documents->deleteDocuments($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOneDocument

Delete one document

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'unde'

    $response = $sdk->documents->deleteOneDocument($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocuments

Get documents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentsRequest();
    $request->fields = 'id';
    $request->limit = '1';
    $request->offset = '10';

    $response = $sdk->documents->getDocuments($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOneDocument

Get one document

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOneDocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOneDocumentRequest();
    $request->fields = 'id';

    $response = $sdk->documents->getOneDocument($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
