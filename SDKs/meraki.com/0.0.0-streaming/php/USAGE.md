<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApiRequestsRequest();
    $request->adminId = 'corrupti';
    $request->endingBefore = 'provident';
    $request->method = 'distinctio';
    $request->organizationId = 'quibusdam';
    $request->path = 'unde';
    $request->perPage = 857946;
    $request->responseCode = 544883;
    $request->sourceIp = 'illum';
    $request->startingAfter = 'vel';
    $request->t0 = 'error';
    $request->t1 = 'deserunt';
    $request->timespan = 3843.82;

    $response = $sdk->apiUsage->getOrganizationApiRequests($request);

    if ($response->getOrganizationApiRequests200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->