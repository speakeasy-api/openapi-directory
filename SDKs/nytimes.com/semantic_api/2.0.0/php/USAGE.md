<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNameConceptTypeSpecificConceptJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNameConceptTypeSpecificConceptJsonConceptTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNameConceptTypeSpecificConceptJsonFieldsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNameConceptTypeSpecificConceptJsonRequest();
    $request->conceptType = GetNameConceptTypeSpecificConceptJsonConceptTypeEnum::NYTD_ORG;
    $request->fields = GetNameConceptTypeSpecificConceptJsonFieldsEnum::COMBINATIONS;
    $request->query = 'distinctio';
    $request->specificConcept = 'quibusdam';

    $response = $sdk->getNameConceptTypeSpecificConceptJson($request);

    if ($response->getNameConceptTypeSpecificConceptJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->