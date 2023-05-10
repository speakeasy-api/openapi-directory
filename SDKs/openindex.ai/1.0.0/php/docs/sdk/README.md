# SDK

## Overview

A retrieval API for querying and filtering documents based on natural language queries and metadata

### Available Operations

* [queryQueryPost](#queryquerypost) - Query

## queryQueryPost

Accepts search query objects array each with query and optional filter. Break down complex questions into sub-questions. Refine results by criteria, e.g. time / source, don't do this often. Split queries if ResponseTooLargeError occurs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\QueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Shared\DocumentMetadataFilter;
use \OpenAPI\OpenAPI\Models\Shared\SourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryQueryPostSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryRequest();
    $request->namespace = 'distinctio';
    $request->queries = [
        new Query(),
        new Query(),
        new Query(),
        new Query(),
    ];

    $requestSecurity = new QueryQueryPostSecurity();
    $requestSecurity->httpBearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->queryQueryPost($request, $requestSecurity);

    if ($response->queryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
