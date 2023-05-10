<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CommunicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Post;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CommunicationRequest();
    $request->requestBody = [
        new Post(),
        new Post(),
        new Post(),
    ];
    $request->all = false;

    $response = $sdk->textAnalysis->communication($request);

    if ($response->predictionResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->