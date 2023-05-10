<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCorpusRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminCreateCorpusRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminCorpus;
use \OpenAPI\OpenAPI\Models\Shared\AdminDimension;
use \OpenAPI\OpenAPI\Models\Shared\AdminFilterAttribute;
use \OpenAPI\OpenAPI\Models\Shared\AdminFilterAttributeLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdminFilterAttributeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCorpusRequest();
    $request->adminCreateCorpusRequest = new AdminCreateCorpusRequest();
    $request->adminCreateCorpusRequest->corpus = new AdminCorpus();
    $request->adminCreateCorpusRequest->corpus->customDimensions = [
        new AdminDimension(),
        new AdminDimension(),
        new AdminDimension(),
    ];
    $request->adminCreateCorpusRequest->corpus->description = 'provident';
    $request->adminCreateCorpusRequest->corpus->dtProvision = 'distinctio';
    $request->adminCreateCorpusRequest->corpus->enabled = false;
    $request->adminCreateCorpusRequest->corpus->encoderId = 'quibusdam';
    $request->adminCreateCorpusRequest->corpus->encrypted = false;
    $request->adminCreateCorpusRequest->corpus->filterAttributes = [
        new AdminFilterAttribute(),
        new AdminFilterAttribute(),
        new AdminFilterAttribute(),
    ];
    $request->adminCreateCorpusRequest->corpus->id = 857946;
    $request->adminCreateCorpusRequest->corpus->metadataMaxBytes = 544883;
    $request->adminCreateCorpusRequest->corpus->name = 'Ben Mueller';
    $request->adminCreateCorpusRequest->corpus->swapIenc = false;
    $request->adminCreateCorpusRequest->corpus->swapQenc = false;
    $request->adminCreateCorpusRequest->corpus->textless = false;
    $request->customerId = 437587;

    $response = $sdk->adminService->createCorpus($request);

    if ($response->adminCreateCorpusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->