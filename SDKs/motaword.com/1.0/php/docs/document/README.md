# document

### Available Operations

* [getAllDocumentSubjects](#getalldocumentsubjects) - Get a list of subjects of projects
* [getDocument](#getdocument) - View a single document
* [getDocumentProgress](#getdocumentprogress) - View a document translation progress
* [getDocuments](#getdocuments) - View your documents
* [getSimilarDocuments](#getsimilardocuments) - Find documents similar to this document.
* [getUserDocuments](#getuserdocuments) - Get a list of your documents
* [regeneratePreview](#regeneratepreview) - Regenerate preview and return preview URL for given file
* [useAsDraft](#useasdraft) - Use the translation of given source manual document as manual draft source for the given target document.
* [useAsRegular](#useasregular) - Use the translation of the given manual document as a regular file.

## getAllDocumentSubjects

Get a list of subjects of projects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->document->getAllDocumentSubjects();

    if ($response->documentSubjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocument

View a single document from your MotaWord account with its translation info.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentRequest();
    $request->documentId = 'amet';

    $response = $sdk->document->getDocument($request);

    if ($response->continuousProjectDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocumentProgress

View the translation or proofreading progress of a document in your account. You can also track the progress of a document under the project that it was ordered with.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentProgressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentProgressRequest();
    $request->documentId = 6805.45;

    $response = $sdk->document->getDocumentProgress($request);

    if ($response->progress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocuments

View a list of files and documents that you have translations for. This endpoint lets you view your MotaWord account as a multilingual translated file repository, without needing to go through your projects to interact with files in them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentsOrderByEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentsTypeFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentsWithEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentsRequest();
    $request->languageCode = 'numquam';
    $request->orderBy = GetDocumentsOrderByEnum::ID;
    $request->orderType = ListOrderTypeEnum::ASC;
    $request->page = 56418;
    $request->perPage = 434417;
    $request->recent = false;
    $request->search = 'odio';
    $request->typeFilter = GetDocumentsTypeFilterEnum::SPREADSHEETS;
    $request->with = [
        GetDocumentsWithEnum::EDITORS,
        GetDocumentsWithEnum::EDITORS,
        GetDocumentsWithEnum::PREVIEW,
        GetDocumentsWithEnum::EDITORS,
    ];

    $response = $sdk->document->getDocuments($request);

    if ($response->documentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSimilarDocuments

Find documents similar to this document. Optionally, include translation information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSimilarDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSimilarDocumentsWithEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSimilarDocumentsRequest();
    $request->documentId = 179603;
    $request->perPage = 542499;
    $request->with = [
        GetSimilarDocumentsWithEnum::EDITORS,
    ];

    $response = $sdk->document->getSimilarDocuments($request);

    if ($response->documentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserDocuments

Get a list of your documents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserDocumentsOrderByEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUserDocumentsTypeFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserDocumentsRequest();
    $request->languageCode = 'ab';
    $request->orderBy = GetUserDocumentsOrderByEnum::CREATED_AT;
    $request->orderType = ListOrderTypeEnum::DESC;
    $request->page = 478596;
    $request->perPage = 453697;
    $request->recent = false;
    $request->search = 'dolorum';
    $request->typeFilter = GetUserDocumentsTypeFilterEnum::SUBTITLES;
    $request->userId = 607045;

    $response = $sdk->document->getUserDocuments($request);

    if ($response->documentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## regeneratePreview

Regenerate preview and return preview URL for given file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegeneratePreviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegeneratePreviewRequest();
    $request->documentId = 896672;

    $response = $sdk->document->regeneratePreview($request);

    if ($response->regeneratePreviewResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## useAsDraft

Use the translation of given source manual document as manual draft source for the given target document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UseAsDraftRequest;
use \OpenAPI\OpenAPI\Models\Shared\UseAsDraftPayload;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UseAsDraftRequest();
    $request->useAsDraftPayload = new UseAsDraftPayload();
    $request->useAsDraftPayload->fromFileId = 7146.97;
    $request->useAsDraftPayload->fromManualTranslationFileId = 9903.39;
    $request->useAsDraftPayload->toManualTranslationFileId = 4694.97;
    $request->documentId = 216897;

    $response = $sdk->document->useAsDraft($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## useAsRegular

Use the translation of the given manual document as a regular file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UseAsRegularRequest;
use \OpenAPI\OpenAPI\Models\Shared\UseAsRegularPayload;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UseAsRegularRequest();
    $request->useAsRegularPayload = new UseAsRegularPayload();
    $request->useAsRegularPayload->allowOriginalFilePreview = false;
    $request->useAsRegularPayload->allowReviewInManualEditor = false;
    $request->useAsRegularPayload->disableInvitations = false;
    $request->useAsRegularPayload->fromManualTranslationFileId = 4560.15;
    $request->useAsRegularPayload->hideNumbers = false;
    $request->useAsRegularPayload->recreate = false;
    $request->documentId = 663078;

    $response = $sdk->document->useAsRegular($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
