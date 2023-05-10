# chromosome

### Available Operations

* [getChromosomeByAssemblyUsingGET](#getchromosomebyassemblyusingget) - Return a list of chromosomes
* [getChromosomesByAssemblyUsingGET](#getchromosomesbyassemblyusingget) - Return a list of chromosomes

## getChromosomeByAssemblyUsingGET

Return a list of chromosomes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETChromosomeByAssemblyUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETChromosomeByAssemblyUsingGETRequest();
    $request->chromosome = 'ipsam';
    $request->mapKey = 832620;

    $response = $sdk->chromosome->getChromosomeByAssemblyUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChromosomesByAssemblyUsingGET

Return a list of chromosomes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETChromosomesByAssemblyUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETChromosomesByAssemblyUsingGETRequest();
    $request->mapKey = 957156;

    $response = $sdk->chromosome->getChromosomesByAssemblyUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
