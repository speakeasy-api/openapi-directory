<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsRequest();
    $request->company = 'Medhurst - Rau';
    $request->deal = 'quibusdam';
    $request->nexttoken = 'unde';
    $request->queryexecutionid = 'nulla';
    $request->site = 'corrupti';
    $request->type = GetEventsTypeEnum::CONTACTS;

    $response = $sdk->developers->getEvents($request);

    if ($response->eventRecords !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->