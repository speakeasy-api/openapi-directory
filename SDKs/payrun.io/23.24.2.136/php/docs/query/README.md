# query

### Available Operations

* [getQueryResponse](#getqueryresponse) - Get the query result

## getQueryResponse

Get the results for the specified query

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryResponseRequest;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Shared\QueryQuery;
use \OpenAPI\OpenAPI\Models\Shared\QueryQueryGroup;
use \OpenAPI\OpenAPI\Models\Shared\QueryQueryGroupGroup;
use \OpenAPI\OpenAPI\Models\Shared\QueryQueryGroupGroupCondition;
use \OpenAPI\OpenAPI\Models\Shared\QueryQueryGroupGroupFilter;
use \OpenAPI\OpenAPI\Models\Shared\QueryQueryGroupGroupOrder;
use \OpenAPI\OpenAPI\Models\Shared\QueryQueryGroupGroupOutput;
use \OpenAPI\OpenAPI\Models\Shared\QueryQueryGroupGroupOutputAtOutputEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryQueryVariable;
use \OpenAPI\OpenAPI\Models\Shared\QueryQueryVariableVariable;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQueryResponseRequest();
    $request->apiVersion = 'itaque';
    $request->authorization = 'illum';
    $request->query = new Query();
    $request->query->query = new QueryQuery();
    $request->query->query->encoding = 'laborum';
    $request->query->query->excludeNullOrEmptyElements = false;
    $request->query->query->groups = new QueryQueryGroup();
    $request->query->query->groups->group = [
        new QueryQueryGroupGroup(),
        new QueryQueryGroupGroup(),
    ];
    $request->query->query->rootNodeName = 'vero';
    $request->query->query->suppressMetricAttributes = false;
    $request->query->query->variables = new QueryQueryVariable();
    $request->query->query->variables->variable = [
        new QueryQueryVariableVariable(),
    ];

    $response = $sdk->query->getQueryResponse($request);

    if ($response->getQueryResponse200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
