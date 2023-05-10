<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2AccountStagesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2AccountStagesJsonRequest();
    $request->ids = [
        592845,
        715190,
        844266,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 602763;
    $request->perPage = 857946;
    $request->sortBy = 'corrupti';
    $request->sortDirection = 'illum';
    $request->updatedAt = [
        'error',
        'deserunt',
    ];

    $response = $sdk->accountStages->getV2AccountStagesJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->