<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGlobalwinescoresLatestRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGlobalwinescoresLatestColorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetGlobalwinescoresLatestOrderingEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGlobalwinescoresLatestRequest();
    $request->authorization = 'corrupti';
    $request->color = GetGlobalwinescoresLatestColorEnum::WHITE;
    $request->isPrimeurs = false;
    $request->limit = 715190;
    $request->lwin = 'quibusdam';
    $request->lwin11 = 'unde';
    $request->offset = 857946;
    $request->ordering = GetGlobalwinescoresLatestOrderingEnum::SCORE;
    $request->vintage = 'illum';
    $request->wineId = [
        623564,
        645894,
    ];

    $response = $sdk->globalWineScore->getGlobalwinescoresLatest($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->