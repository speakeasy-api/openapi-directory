# source

### Available Operations

* [incrementalRefreshSource](#incrementalrefreshsource) - Incremental Refresh an existing Source
* [listSourceServiceInstances](#listsourceserviceinstances) - List ServiceInstances for Source
* [listSourceServiceInventories](#listsourceserviceinventories) - List ServiceInventories for Source
* [listSourceServiceOfferingNodes](#listsourceserviceofferingnodes) - List ServiceOfferingNodes for Source
* [listSourceServiceOfferings](#listsourceserviceofferings) - List ServiceOfferings for Source
* [listSourceServicePlans](#listsourceserviceplans) - List ServicePlans for Source
* [listSourceTasks](#listsourcetasks) - List Tasks for Source
* [listSources](#listsources) - List Sources
* [refreshSource](#refreshsource) -  Refresh an existing Source
* [showSource](#showsource) - Show an existing Source

## incrementalRefreshSource

Incremental Refresh a source object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\IncrementalRefreshSourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IncrementalRefreshSourceRequest();
    $request->id = '8a7bd466-d28c-410a-b3cd-ca4251904e52';

    $response = $sdk->source->incrementalRefreshSource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSourceServiceInstances

Returns an array of ServiceInstance objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceServiceInstancesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSourceServiceInstancesRequest();
    $request->filter = [
        'quo' => 'esse',
    ];
    $request->id = 'e0bc7178-e479-46f2-a70c-688282aa4825';
    $request->limit = 392676;
    $request->offset = 147014;
    $request->sortBy = [
        'consequuntur' => 'ratione',
        'explicabo' => 'saepe',
        'occaecati' => 'atque',
        'et' => 'esse',
    ];

    $response = $sdk->source->listSourceServiceInstances($request);

    if ($response->serviceInstancesCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSourceServiceInventories

Returns an array of ServiceInventory objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceServiceInventoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSourceServiceInventoriesRequest();
    $request->filter = [
        'accusamus' => 'veritatis',
        'esse' => 'quod',
        'nam' => 'vero',
        'aliquid' => 'quasi',
    ];
    $request->id = 'e6b7b95b-c0ab-43c2-8c4f-3789fd871f99';
    $request->limit = 863023;
    $request->offset = 820767;
    $request->sortBy = [
        'eveniet' => 'asperiores',
    ];

    $response = $sdk->source->listSourceServiceInventories($request);

    if ($response->serviceInventoriesCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSourceServiceOfferingNodes

Returns an array of ServiceOfferingNode objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceServiceOfferingNodesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSourceServiceOfferingNodesRequest();
    $request->filter = [
        'veritatis' => 'consequuntur',
        'quasi' => 'similique',
        'culpa' => 'aliquid',
        'tenetur' => 'quae',
    ];
    $request->id = 'e674bdb0-4f15-4756-882d-68ea19f1d170';
    $request->limit = 326701;
    $request->offset = 86532;
    $request->sortBy = [
        'adipisci' => 'iste',
    ];

    $response = $sdk->source->listSourceServiceOfferingNodes($request);

    if ($response->serviceOfferingNodesCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSourceServiceOfferings

Returns an array of ServiceOffering objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceServiceOfferingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSourceServiceOfferingsRequest();
    $request->filter = [
        'accusantium' => 'rem',
        'aut' => 'laudantium',
        'eum' => 'mollitia',
        'ab' => 'corrupti',
    ];
    $request->id = '40394c26-071f-493f-9f06-42dac7af515c';
    $request->limit = 801836;
    $request->offset = 288398;
    $request->sortBy = [
        'adipisci' => 'fuga',
    ];

    $response = $sdk->source->listSourceServiceOfferings($request);

    if ($response->serviceOfferingsCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSourceServicePlans

Returns an array of ServicePlan objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceServicePlansRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSourceServicePlansRequest();
    $request->filter = [
        'suscipit' => 'velit',
        'culpa' => 'est',
        'recusandae' => 'totam',
    ];
    $request->id = 'd67864db-b675-4fd5-a60b-375ed4f6fbee';
    $request->limit = 296556;
    $request->offset = 121059;
    $request->sortBy = [
        'adipisci' => 'non',
        'amet' => 'beatae',
        'dignissimos' => 'a',
        'debitis' => 'consectetur',
    ];

    $response = $sdk->source->listSourceServicePlans($request);

    if ($response->servicePlansCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSourceTasks

Returns an array of Task objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceTasksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSourceTasksRequest();
    $request->filter = [
        'harum' => 'laboriosam',
        'ipsa' => 'voluptates',
    ];
    $request->id = 'b1ea4265-55ba-43c2-8744-ed53b88f3a8d';
    $request->limit = 519643;
    $request->offset = 940210;
    $request->sortBy = [
        'nobis' => 'sit',
        'rerum' => 'sed',
    ];

    $response = $sdk->source->listSourceTasks($request);

    if ($response->tasksCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSources

Returns an array of Source objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSourcesRequest();
    $request->filter = [
        'explicabo' => 'asperiores',
        'facilis' => 'voluptate',
        'expedita' => 'ab',
        'iste' => 'dolore',
    ];
    $request->limit = 671907;
    $request->offset = 152354;
    $request->sortBy = [
        'commodi' => 'quidem',
        'explicabo' => 'voluptas',
    ];

    $response = $sdk->source->listSources($request);

    if ($response->sourcesCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## refreshSource

Refresh a source object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RefreshSourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RefreshSourceRequest();
    $request->id = '916fe1f0-8f42-494e-b698-f447f603e8b4';

    $response = $sdk->source->refreshSource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## showSource

Returns a Source object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ShowSourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShowSourceRequest();
    $request->id = '45e80ca5-5efd-420e-857e-1858b6a89fbe';

    $response = $sdk->source->showSource($request);

    if ($response->source !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
