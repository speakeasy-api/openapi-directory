# query

### Available Operations

* [getQuery](#getquery) - Search results
* [getQueryExtension](#getqueryextension) - Search results

## getQuery

Search results

OpenSearch github repository
<https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements>

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
    $request->count = 5488.14;
    $request->inUrlPrefixes = 'provident';
    $request->q = 'distinctio';
    $request->start = 8442.66;
    $request->subdomains = 'unde';

    $response = $sdk->query->getQuery($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQueryExtension

Search results

OpenSearch github repository
<https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryExtensionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryExtensionExtensionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQueryExtensionRequest();
    $request->count = 8579.46;
    $request->extension = GetQueryExtensionExtensionEnum::HTML;
    $request->inUrlPrefixes = 'illum';
    $request->q = 'vel';
    $request->start = 6235.64;
    $request->subdomains = 'deserunt';

    $response = $sdk->query->getQueryExtension($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
