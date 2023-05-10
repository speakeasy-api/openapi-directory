<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPostReviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostPostReviewRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPostReviewRatingEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPostReviewRequest();
    $request->requestBody = new PostPostReviewRequestBody();
    $request->requestBody->rating = 5;
    $request->requestBody->userEmail = 'johnsmith@usercompanyxyz.com';
    $request->requestBody->userName = 'John';
    $request->rating = PostPostReviewRatingEnum::THREE;
    $request->userEmail = 'provident';
    $request->userName = 'Micheal_Sporer';

    $response = $sdk->postPostReview($request);

    if ($response->postPostReview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->