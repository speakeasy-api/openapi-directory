# cabwise

### Available Operations

* [cabwiseGet](#cabwiseget) - Gets taxis and minicabs contact information

## cabwiseGet

Gets taxis and minicabs contact information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CabwiseGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CabwiseGetRequest();
    $request->forceXml = false;
    $request->lat = 8326.2;
    $request->legacyFormat = false;
    $request->lon = 9571.56;
    $request->maxResults = 778157;
    $request->name = 'Teri Strosin';
    $request->optype = 'quod';
    $request->radius = 8009.11;
    $request->twentyFourSevenOnly = false;
    $request->wc = 'esse';

    $response = $sdk->cabwise->cabwiseGet($request);

    if ($response->systemObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
