# projectDocument

### Available Operations

* [createProjectDocument](#createprojectdocument) - Upload a new document
* [deleteProjectDocument](#deleteprojectdocument) - Delete the document
* [downloadProjectDocument](#downloadprojectdocument) - Download a project source document
* [downloadTranslatedDocumentForLanguage](#downloadtranslateddocumentforlanguage) - Download translated document
* [getProjectDocument](#getprojectdocument) - View a project source document
* [getProjectDocuments](#getprojectdocuments) - View project source documents
* [updateProjectDocumentJson](#updateprojectdocumentjson) - Update the document.
* [updateProjectDocumentMultipart](#updateprojectdocumentmultipart) - Update the document.

## createProjectDocument

Upload a new document

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentUpdates;
use \OpenAPI\OpenAPI\Models\Shared\LinkedSourceDocument;
use \OpenAPI\OpenAPI\Models\Shared\LinkedSourceDocumentSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectDocumentRequest();
    $request->documentUpdates = new DocumentUpdates();
    $request->documentUpdates->documents = [
        'illum',
        'sequi',
        'natus',
        'impedit',
    ];
    $request->documentUpdates->schemes = 'aut';
    $request->documentUpdates->sourceLinks = [
        new LinkedSourceDocument(),
        new LinkedSourceDocument(),
        new LinkedSourceDocument(),
        new LinkedSourceDocument(),
    ];
    $request->projectId = 347233;

    $response = $sdk->projectDocument->createProjectDocument($request);

    if ($response->documentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProjectDocument

Delete the document

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectDocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectDocumentRequest();
    $request->documentId = 862310;
    $request->projectId = 148141;

    $response = $sdk->projectDocument->deleteProjectDocument($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadProjectDocument

Download an actual source file you uploaded to be translated in your project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DownloadProjectDocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadProjectDocumentRequest();
    $request->documentId = 780427;
    $request->projectId = 981830;

    $response = $sdk->projectDocument->downloadProjectDocument($request);

    if ($response->downloadProjectDocument200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadTranslatedDocumentForLanguage

Download translated document in the given target language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DownloadTranslatedDocumentForLanguageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadTranslatedDocumentForLanguageRequest();
    $request->certified = false;
    $request->documentId = 985033;
    $request->language = 'iusto';
    $request->projectId = 753570;

    $response = $sdk->projectDocument->downloadTranslatedDocumentForLanguage($request);

    if ($response->downloadTranslatedDocumentForLanguage200ApplicationOctetStreamBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectDocument

View the details of a source file you uploaded to be translated in your project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectDocumentWithEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectDocumentRequest();
    $request->documentId = 497391;
    $request->projectId = 4048;
    $request->with = [
        GetProjectDocumentWithEnum::PREVIEW,
        GetProjectDocumentWithEnum::PREVIEW,
        GetProjectDocumentWithEnum::PREVIEW,
    ];

    $response = $sdk->projectDocument->getProjectDocument($request);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectDocuments

Get a list of source files you uploaded to be translated in your project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectDocumentsWithEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectDocumentsRequest();
    $request->projectId = 136900;
    $request->with = [
        GetProjectDocumentsWithEnum::EDITORS,
        GetProjectDocumentsWithEnum::PREVIEW,
    ];

    $response = $sdk->projectDocument->getProjectDocuments($request);

    if ($response->documentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProjectDocumentJson

Update the document. File name and contents will replaced with the new one.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectDocumentJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\LinkedSourceDocument;
use \OpenAPI\OpenAPI\Models\Shared\LinkedSourceDocumentSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectDocumentJsonRequest();
    $request->documentUploadRequest = new DocumentUploadRequest();
    $request->documentUploadRequest->documents = 'ratione';
    $request->documentUploadRequest->schemes = 'ex';
    $request->documentUploadRequest->sourceLink = new LinkedSourceDocument();
    $request->documentUploadRequest->sourceLink->name = 'Willie Fahey III';
    $request->documentUploadRequest->sourceLink->size = 862192;
    $request->documentUploadRequest->sourceLink->source = LinkedSourceDocumentSourceEnum::GOOGLEDRIVE;
    $request->documentUploadRequest->sourceLink->url = 'https://gracious-vista.net';
    $request->documentId = 906556;
    $request->projectId = 411372;

    $response = $sdk->projectDocument->updateProjectDocumentJson($request);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProjectDocumentMultipart

Update the document. File name and contents will replaced with the new one.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectDocumentMultipartRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentUploadRequest1;
use \OpenAPI\OpenAPI\Models\Shared\DocumentUploadRequestDocuments;
use \OpenAPI\OpenAPI\Models\Shared\LinkedSourceDocument;
use \OpenAPI\OpenAPI\Models\Shared\LinkedSourceDocumentSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectDocumentMultipartRequest();
    $request->documentUploadRequest1 = new DocumentUploadRequest1();
    $request->documentUploadRequest1->documents = new DocumentUploadRequestDocuments();
    $request->documentUploadRequest1->documents->content = 'impedit';
    $request->documentUploadRequest1->documents->documents = 'corporis';
    $request->documentUploadRequest1->schemes = 'veniam';
    $request->documentUploadRequest1->sourceLink = new LinkedSourceDocument();
    $request->documentUploadRequest1->sourceLink->name = 'Stephanie Gutkowski';
    $request->documentUploadRequest1->sourceLink->size = 232234;
    $request->documentUploadRequest1->sourceLink->source = LinkedSourceDocumentSourceEnum::ICLOUD;
    $request->documentUploadRequest1->sourceLink->url = 'http://general-authentication.org';
    $request->documentId = 725595;
    $request->projectId = 13948;

    $response = $sdk->projectDocument->updateProjectDocumentMultipart($request);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
