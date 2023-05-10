# dependencyGraph

## Overview

Endpoints to access Dependency Graph features.

### Available Operations

* [dependencyGraphDiffRange](#dependencygraphdiffrange) - Get a diff of the dependencies between commits

## dependencyGraphDiffRange

Gets the diff of the dependency changes between two commits of a repository, based on the changes to the dependency manifests made in those commits.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DependencyGraphDiffRangeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DependencyGraphDiffRangeRequest();
    $request->basehead = 'adipisci';
    $request->name = 'Lionel Bartoletti IV';
    $request->owner = 'eum';
    $request->repo = 'mollitia';

    $response = $sdk->dependencyGraph->dependencyGraphDiffRange($request);

    if ($response->dependencyGraphDiff !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
