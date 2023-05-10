<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\QueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Shared\DocumentMetadataFilter;
use \OpenAPI\OpenAPI\Models\Shared\SourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryQueryPostSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryRequest();
    $request->namespace = 'corrupti';
    $request->queries = [
        new Query(),
        new Query(),
        new Query(),
    ];

    $requestSecurity = new QueryQueryPostSecurity();
    $requestSecurity->httpBearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->queryQueryPost($request, $requestSecurity);

    if ($response->queryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->