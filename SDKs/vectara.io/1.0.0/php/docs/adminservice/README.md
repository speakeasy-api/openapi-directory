# adminService

## Overview

Administrative services, such as creating or deleting corpora

### Available Operations

* [createCorpus](#createcorpus) - Create Corpus
* [deleteCorpus](#deletecorpus) - Delete Corpus
* [listCorpora](#listcorpora) - List Corpora
* [resetCorpus](#resetcorpus) - Reset Corpus

## createCorpus

Create Corpus

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCorpusRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminCreateCorpusRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminCorpus;
use \OpenAPI\OpenAPI\Models\Shared\AdminDimension;
use \OpenAPI\OpenAPI\Models\Shared\AdminFilterAttribute;
use \OpenAPI\OpenAPI\Models\Shared\AdminFilterAttributeLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdminFilterAttributeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCorpusRequest();
    $request->adminCreateCorpusRequest = new AdminCreateCorpusRequest();
    $request->adminCreateCorpusRequest->corpus = new AdminCorpus();
    $request->adminCreateCorpusRequest->corpus->customDimensions = [
        new AdminDimension(),
        new AdminDimension(),
    ];
    $request->adminCreateCorpusRequest->corpus->description = 'debitis';
    $request->adminCreateCorpusRequest->corpus->dtProvision = 'ipsa';
    $request->adminCreateCorpusRequest->corpus->enabled = false;
    $request->adminCreateCorpusRequest->corpus->encoderId = 'delectus';
    $request->adminCreateCorpusRequest->corpus->encrypted = false;
    $request->adminCreateCorpusRequest->corpus->filterAttributes = [
        new AdminFilterAttribute(),
        new AdminFilterAttribute(),
    ];
    $request->adminCreateCorpusRequest->corpus->id = 383441;
    $request->adminCreateCorpusRequest->corpus->metadataMaxBytes = 477665;
    $request->adminCreateCorpusRequest->corpus->name = 'Irving Lehner';
    $request->adminCreateCorpusRequest->corpus->swapIenc = false;
    $request->adminCreateCorpusRequest->corpus->swapQenc = false;
    $request->adminCreateCorpusRequest->corpus->textless = false;
    $request->customerId = 392785;

    $response = $sdk->adminService->createCorpus($request);

    if ($response->adminCreateCorpusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCorpus

Delete Corpus

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCorpusRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminDeleteCorpusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCorpusRequest();
    $request->adminDeleteCorpusRequest = new AdminDeleteCorpusRequest();
    $request->adminDeleteCorpusRequest->corpusId = 925597;
    $request->adminDeleteCorpusRequest->customerId = 836079;
    $request->customerId = 71036;

    $response = $sdk->adminService->deleteCorpus($request);

    if ($response->adminDeleteCorpusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCorpora

List Corpora

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCorporaRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminListCorporaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCorporaRequest();
    $request->adminListCorporaRequest = new AdminListCorporaRequest();
    $request->adminListCorporaRequest->filter = 'quis';
    $request->adminListCorporaRequest->numResults = 87129;
    $request->adminListCorporaRequest->pageKey = 'deserunt';
    $request->customerId = 20218;

    $response = $sdk->adminService->listCorpora($request);

    if ($response->adminListCorporaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetCorpus

Reset Corpus

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResetCorpusRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminResetCorpusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetCorpusRequest();
    $request->adminResetCorpusRequest = new AdminResetCorpusRequest();
    $request->adminResetCorpusRequest->corpusId = 368241;
    $request->adminResetCorpusRequest->customerId = 832620;
    $request->customerId = 957156;

    $response = $sdk->adminService->resetCorpus($request);

    if ($response->adminResetCorpusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
