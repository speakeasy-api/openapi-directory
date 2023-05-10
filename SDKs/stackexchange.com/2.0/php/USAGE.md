<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccessTokensAccessTokensRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccessTokensAccessTokensRequest();
    $request->accessTokens = 'corrupti';
    $request->callback = 'provident';
    $request->filter = 'distinctio';
    $request->page = 844266;
    $request->pagesize = 602763;

    $response = $sdk->getAccessTokensAccessTokens($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->