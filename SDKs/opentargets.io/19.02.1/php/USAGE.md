<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociationFilterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssociationFilterRequest();
    $request->datasource = 'corrupti';
    $request->datastructure = 'provident';
    $request->datatype = 'distinctio';
    $request->direct = false;
    $request->disease = 'quibusdam';
    $request->facets = false;
    $request->fields = 'unde';
    $request->format = 'nulla';
    $request->from = 5448.83;
    $request->pathway = 'illum';
    $request->scorevalueMax = 4236.55;
    $request->scorevalueMin = 6235.64;
    $request->scorevalueTypes = 'deserunt';
    $request->search = 'suscipit';
    $request->size = 4375.87;
    $request->sort = 'magnam';
    $request->target = 'debitis';
    $request->targetClass = 'ipsa';
    $request->therapeuticArea = 'delectus';
    $request->uniprotkw = 'tempora';

    $response = $sdk->filter->getAssociationFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->