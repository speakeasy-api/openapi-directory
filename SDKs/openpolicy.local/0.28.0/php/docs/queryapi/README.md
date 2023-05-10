# queryAPI

## Overview

Posting queries to OPA

### Available Operations

* [getQuery](#getquery) - Execute an ad-hoc query (simple)
* [postQuery](#postquery) - Execute an ad-hoc query (complex)
* [postSimpleQuery](#postsimplequery) - Execute a simple query

## getQuery

This API endpoint returns bindings for the variables in the query.

For more complex JSON queries, use `POST /v1/query` instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQueryRequest();
    $request->explain = 'tenetur';
    $request->metrics = false;
    $request->pretty = false;
    $request->q = 'ipsam';

    $response = $sdk->queryAPI->getQuery($request);

    if ($response->getQuery200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postQuery

This API endpoint returns bindings for the variables in the query.

For simpler JSON queries, you may use `GET /v1/query` instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostQueryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostQueryRequest();
    $request->requestBody = 'id';
    $request->explain = 'possimus';
    $request->metrics = false;
    $request->pretty = false;

    $response = $sdk->queryAPI->postQuery($request);

    if ($response->postQuery200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSimpleQuery

This API queries the document at */data/system/main* by default (however, you can [configure OPA](https://www.openpolicyagent.org/docs/latest/configuration/) to use a different path to serve these queries). That document defines the response.
For example, use the following in `PUT /v1/policies/{path}`) to define a rule that will produce a value for the */data/system/main* document:

  ```yaml
  package system
  main = msg {
    msg := sprintf("hello, %v", input.user)
  }
  ```

The server will return a *not found* (404) response if */data/system/main* is undefined.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostSimpleQueryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSimpleQueryRequest();
    $request->requestBody = [
        'quasi' => 'error',
    ];
    $request->pretty = false;

    $response = $sdk->queryAPI->postSimpleQuery($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
