<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CurrenciesHistoryGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\CurrenciesHistoryGETFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CurrenciesHistoryGETRequest();
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-25T05:21:43.948Z');
    $request->format = CurrenciesHistoryGETFormatEnum::XML;
    $request->interval = 'quibusdam';
    $request->pairs = 'unde';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-14T08:28:11.899Z');

    $response = $sdk->currencies->currenciesHistoryGET($request);

    if ($response->intervalCollectionResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->