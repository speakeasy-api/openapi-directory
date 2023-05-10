# reference

### Available Operations

* [getJournalExpressionSchema](#getjournalexpressionschema) - Gets the journal expression data schema

## getJournalExpressionSchema

Gets the data schema for all available journal expression values. Includes table names, column names and data types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJournalExpressionSchemaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJournalExpressionSchemaRequest();
    $request->apiVersion = 'odit';
    $request->authorization = 'deleniti';

    $response = $sdk->reference->getJournalExpressionSchema($request);

    if ($response->journalExpressionDataTable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
