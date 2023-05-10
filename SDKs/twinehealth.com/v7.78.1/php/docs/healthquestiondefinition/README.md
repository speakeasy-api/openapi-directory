# healthQuestionDefinition

## Overview

A health question definition specifies a health question and the corresponding answer choices.

### Available Operations

* [fetchHealthQuestionDefinition](#fetchhealthquestiondefinition) - Get a health question definition
* [fetchHealthQuestionDefinitions](#fetchhealthquestiondefinitions) - List health question definitions

## fetchHealthQuestionDefinition

Get a health question definition by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchHealthQuestionDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchHealthQuestionDefinitionRequest();
    $request->id = 'f94e29e9-73e9-422a-97a1-5be3e060807e';

    $response = $sdk->healthQuestionDefinition->fetchHealthQuestionDefinition($request);

    if ($response->fetchHealthQuestionDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchHealthQuestionDefinitions

Get a list of all health question definitions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->healthQuestionDefinition->fetchHealthQuestionDefinitions();

    if ($response->fetchHealthQuestionDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
