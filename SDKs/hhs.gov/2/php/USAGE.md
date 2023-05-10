<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesCampaignsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesCampaignsJsonRequest();
    $request->max = 548814;
    $request->offset = 592845;
    $request->sort = 'distinctio';

    $response = $sdk->campaigns->getResourcesCampaignsJson($request);

    if ($response->campaignWrapped !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->