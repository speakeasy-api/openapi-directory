# registrationSchemaBlocks

## Overview

Registration Schema Blocks are read-only entities, they represent question prompts and form inputs known as "blocks" that make up a Registration Schemas. Each block has a designated `block_type` that determines what type of information that Schema Block's corresponding block in the Schema Response.

### Available Operations

* [getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockId](#getschemaresponsesschemaresponseidschemablocksschemaresponseblockid) - Retrieve a Registration Schema Block
* [schemaResponseBlocksRead](#schemaresponseblocksread) - Retrieve a list of Registration Schema Blocks for a Schema Response

## getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockId

This returns a Registration Schema Block by it's ID.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Registration Schemas, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRequest();
    $request->schemaResponseBlockId = 'perferendis';
    $request->schemaResponseId = 'fugiat';

    $response = $sdk->registrationSchemaBlocks->getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockId($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## schemaResponseBlocksRead

This returns a list of all the Registration Schema Blocks are contained in Registration Schema.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Registration Schemas, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SchemaResponseBlocksReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SchemaResponseBlocksReadRequest();
    $request->schemaResponseId = 'amet';

    $response = $sdk->registrationSchemaBlocks->schemaResponseBlocksRead($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
