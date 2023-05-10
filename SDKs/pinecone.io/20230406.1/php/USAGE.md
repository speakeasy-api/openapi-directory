<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureIndexRequest;
use \OpenAPI\OpenAPI\Models\Shared\IndexConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PodTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureIndexRequest();
    $request->indexConfiguration = new IndexConfiguration();
    $request->indexConfiguration->podType = PodTypeEnum::P1_X4;
    $request->indexConfiguration->replicas = 592845;
    $request->indexName = 'example';

    $response = $sdk->indexOperations->configureIndex($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->