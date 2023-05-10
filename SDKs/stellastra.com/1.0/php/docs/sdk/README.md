# SDK

## Overview

Stellastra makes it easy to get reviews for your cybersecurity solution in real-time with its platform-agnostic REST API.

Stellastra is a simple API which allows you to easily generate star ratings and reviews for your cybersecurity solution.
<https://stellastra.com/docs/api>
### Available Operations

* [postPostReview](#postpostreview) - Posts the user's review to Stellastra

## postPostReview

Posts the user's review to Stellastra

<https://stellastra.com/docs/api>

### Example Usage

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
    $request->userEmail = 'illum';
    $request->userName = 'Henry.Mueller';

    $response = $sdk->sdk->postPostReview($request);

    if ($response->postPostReview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
