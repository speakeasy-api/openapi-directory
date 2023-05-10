# reviewsFindAndModifyReviews

### Available Operations

* [deleteReviewsReviewId](#deletereviewsreviewid) - Remove a review
* [getReviews](#getreviews) - Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set
* [getReviewsReviewId](#getreviewsreviewid) - Find a Review within a particular App and marketplace
* [patchReviewsReviewId](#patchreviewsreviewid) - Update a review fields
* [postReviews](#postreviews) - Post a review from a User and returns the new post
* [postReviewsReviewId](#postreviewsreviewid) - Update a review from a User and returns the new post

## deleteReviewsReviewId

- Only the review author is able to remove their review


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReviewsReviewIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReviewsReviewIdRequest();
    $request->reviewId = 'officia';
    $request->userAccountId = 'dolor';
    $request->userId = 'debitis';

    $response = $sdk->reviewsFindAndModifyReviews->deleteReviewsReviewId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReviews

- Results are paginated and the default is value is 100 if no limit is provided


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReviewsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReviewsRequest();
    $request->limit = 952749;
    $request->pageNumber = 680056;
    $request->query = 'in';
    $request->sort = 'in';

    $response = $sdk->reviewsFindAndModifyReviews->getReviews($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReviewsReviewId

Find a Review within a particular App and marketplace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReviewsReviewIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReviewsReviewIdRequest();
    $request->reviewId = 'illum';

    $response = $sdk->reviewsFindAndModifyReviews->getReviewsReviewId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchReviewsReviewId

- Only the review author is able to update their review
- Returns the newly updated review


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchReviewsReviewIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchReviewsReviewIdRequest();
    $request->customData = 'maiores';
    $request->description = 'rerum';
    $request->headline = 'dicta';
    $request->rating = 297437;
    $request->reviewId = 'cumque';
    $request->userAccountId = 'facere';
    $request->userId = 'ea';

    $response = $sdk->reviewsFindAndModifyReviews->patchReviewsReviewId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postReviews

- Only authenticated users are able to post reviews
- Returns the newly created review


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostReviewsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostReviewsRequest();
    $request->appId = 'aliquid';
    $request->autoApprove = false;
    $request->customData = 'laborum';
    $request->description = 'accusamus';
    $request->headline = 'non';
    $request->mustOwnApp = false;
    $request->rating = 581273;
    $request->type = 'enim';
    $request->userAccountId = 'accusamus';
    $request->userId = 'delectus';

    $response = $sdk->reviewsFindAndModifyReviews->postReviews($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postReviewsReviewId

- Only the review author is able to update their review
- Returns the newly updated review


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostReviewsReviewIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostReviewsReviewIdRequest();
    $request->customData = 'quidem';
    $request->description = 'provident';
    $request->headline = 'nam';
    $request->rating = 659669;
    $request->reviewId = 'blanditiis';
    $request->userAccountId = 'deleniti';
    $request->userId = 'sapiente';

    $response = $sdk->reviewsFindAndModifyReviews->postReviewsReviewId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
