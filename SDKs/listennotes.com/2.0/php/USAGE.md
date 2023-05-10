<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBestPodcastsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SafeModeParamEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBestPodcastsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBestPodcastsRequest();
    $request->xListenAPIKey = 'corrupti';
    $request->genreId = 'provident';
    $request->language = 'distinctio';
    $request->page = 844266;
    $request->publisherRegion = 'unde';
    $request->region = 'nulla';
    $request->safeMode = SafeModeParamEnum::ONE;
    $request->sort = GetBestPodcastsSortEnum::LISTEN_SCORE;

    $response = $sdk->directoryAPI->getBestPodcasts($request);

    if ($response->bestPodcastsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->