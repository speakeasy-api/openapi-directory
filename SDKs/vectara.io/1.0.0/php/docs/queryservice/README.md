# queryService

## Overview

Query operations, such as performing a standard search

### Available Operations

* [query](#query) - Query
* [streamQuery](#streamquery) - Stream Query

## query

Query

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServingBatchQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServingQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServingCorpusKey;
use \OpenAPI\OpenAPI\Models\Shared\VectaraservingCustomDimension;
use \OpenAPI\OpenAPI\Models\Shared\CorpusKeySemanticsEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryRequestRerankingConfig;
use \OpenAPI\OpenAPI\Models\Operations\QuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryRequest();
    $request->customerId = 944669;
    $request->servingBatchQueryRequest = new ServingBatchQueryRequest();
    $request->servingBatchQueryRequest->query = [
        new ServingQueryRequest(),
        new ServingQueryRequest(),
        new ServingQueryRequest(),
        new ServingQueryRequest(),
    ];

    $requestSecurity = new QuerySecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->queryService->query($request, $requestSecurity);

    if ($response->servingBatchQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## streamQuery

Stream Query

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StreamQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServingBatchQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServingQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServingCorpusKey;
use \OpenAPI\OpenAPI\Models\Shared\VectaraservingCustomDimension;
use \OpenAPI\OpenAPI\Models\Shared\CorpusKeySemanticsEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryRequestRerankingConfig;
use \OpenAPI\OpenAPI\Models\Operations\StreamQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StreamQueryRequest();
    $request->customerId = 521848;
    $request->servingBatchQueryRequest = new ServingBatchQueryRequest();
    $request->servingBatchQueryRequest->query = [
        new ServingQueryRequest(),
    ];

    $requestSecurity = new StreamQuerySecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->queryService->streamQuery($request, $requestSecurity);

    if ($response->streamResultOfServingResponseSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
