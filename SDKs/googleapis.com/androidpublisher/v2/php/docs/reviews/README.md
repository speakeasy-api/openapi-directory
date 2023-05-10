# reviews

### Available Operations

* [androidpublisherReviewsGet](#androidpublisherreviewsget) - Returns a single review.
* [androidpublisherReviewsList](#androidpublisherreviewslist) - Returns a list of reviews. Only reviews from last week will be returned.
* [androidpublisherReviewsReply](#androidpublisherreviewsreply) - Reply to a single review, or update an existing reply.

## androidpublisherReviewsGet

Returns a single review.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherReviewsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherReviewsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherReviewsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'impedit';
    $request->key = 'corporis';
    $request->oauthToken = 'veniam';
    $request->packageName = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'inventore';
    $request->reviewId = 'magnam';
    $request->translationLanguage = 'ea';
    $request->userIp = 'quo';

    $requestSecurity = new AndroidpublisherReviewsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reviews->androidpublisherReviewsGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherReviewsList

Returns a list of reviews. Only reviews from last week will be returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherReviewsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherReviewsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherReviewsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'consectetur';
    $request->key = 'recusandae';
    $request->maxResults = 132487;
    $request->oauthToken = 'minima';
    $request->packageName = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->startIndex = 725595;
    $request->token = 'aut';
    $request->translationLanguage = 'aut';
    $request->userIp = 'deleniti';

    $requestSecurity = new AndroidpublisherReviewsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reviews->androidpublisherReviewsList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherReviewsReply

Reply to a single review, or update an existing reply.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherReviewsReplyRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReviewsReplyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherReviewsReplySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherReviewsReplyRequest();
    $request->reviewsReplyRequest = new ReviewsReplyRequest();
    $request->reviewsReplyRequest->replyText = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->fields = 'aliquam';
    $request->key = 'fugit';
    $request->oauthToken = 'accusamus';
    $request->packageName = 'inventore';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->reviewId = 'et';
    $request->userIp = 'dolorum';

    $requestSecurity = new AndroidpublisherReviewsReplySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reviews->androidpublisherReviewsReply($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
