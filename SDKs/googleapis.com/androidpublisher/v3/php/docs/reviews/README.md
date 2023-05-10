# reviews

### Available Operations

* [androidpublisherReviewsGet](#androidpublisherreviewsget) - Gets a single review.
* [androidpublisherReviewsList](#androidpublisherreviewslist) - Lists all reviews.
* [androidpublisherReviewsReply](#androidpublisherreviewsreply) - Replies to a single review, or updates an existing reply.

## androidpublisherReviewsGet

Gets a single review.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherReviewsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherReviewsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherReviewsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'id';
    $request->key = 'ab';
    $request->oauthToken = 'error';
    $request->packageName = 'possimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptates';
    $request->reviewId = 'mollitia';
    $request->translationLanguage = 'laborum';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new AndroidpublisherReviewsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reviews->androidpublisherReviewsGet($request, $requestSecurity);

    if ($response->review !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherReviewsList

Lists all reviews.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherReviewsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherReviewsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherReviewsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellendus';
    $request->fields = 'ex';
    $request->key = 'quo';
    $request->maxResults = 405373;
    $request->oauthToken = 'ut';
    $request->packageName = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->startIndex = 29950;
    $request->token = 'molestias';
    $request->translationLanguage = 'cum';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'beatae';

    $requestSecurity = new AndroidpublisherReviewsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reviews->androidpublisherReviewsList($request, $requestSecurity);

    if ($response->reviewsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherReviewsReply

Replies to a single review, or updates an existing reply.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherReviewsReplyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReviewsReplyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherReviewsReplySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherReviewsReplyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->reviewsReplyRequest = new ReviewsReplyRequest();
    $request->reviewsReplyRequest->replyText = 'omnis';
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'culpa';
    $request->key = 'voluptatem';
    $request->oauthToken = 'sapiente';
    $request->packageName = 'officiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->reviewId = 'fuga';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new AndroidpublisherReviewsReplySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reviews->androidpublisherReviewsReply($request, $requestSecurity);

    if ($response->reviewsReplyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
