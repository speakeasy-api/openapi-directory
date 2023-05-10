# serviceOfferingNode

### Available Operations

* [listServiceOfferingNodes](#listserviceofferingnodes) - List ServiceOfferingNodes
* [showServiceOfferingNode](#showserviceofferingnode) - Show an existing ServiceOfferingNode

## listServiceOfferingNodes

Returns an array of ServiceOfferingNode objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceOfferingNodesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceOfferingNodesRequest();
    $request->filter = [
        'illum' => 'sequi',
        'natus' => 'impedit',
        'aut' => 'voluptatibus',
        'exercitationem' => 'nulla',
    ];
    $request->limit = 148141;
    $request->offset = 780427;
    $request->sortBy = [
        'doloribus' => 'iusto',
        'eligendi' => 'ducimus',
        'alias' => 'officia',
        'tempora' => 'ipsam',
    ];

    $response = $sdk->serviceOfferingNode->listServiceOfferingNodes($request);

    if ($response->serviceOfferingNodesCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## showServiceOfferingNode

Returns a ServiceOfferingNode object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ShowServiceOfferingNodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShowServiceOfferingNodeRequest();
    $request->id = '626d4368-13f1-46d9-b5fc-e6c556146c3e';

    $response = $sdk->serviceOfferingNode->showServiceOfferingNode($request);

    if ($response->serviceOfferingNode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
