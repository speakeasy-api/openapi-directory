<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddOrReplaceDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddOrReplaceDocumentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddOrReplaceDocumentsRequest();
    $request->requestBody = [
        new AddOrReplaceDocumentsRequestBody(),
        new AddOrReplaceDocumentsRequestBody(),
        new AddOrReplaceDocumentsRequestBody(),
    ];
    $request->csvDelimiter = ';';
    $request->primaryKey = 'id';

    $response = $sdk->documents->addOrReplaceDocuments($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->