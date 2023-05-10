# freelistingsprogram

### Available Operations

* [contentFreelistingsprogramGet](#contentfreelistingsprogramget) - Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
* [contentFreelistingsprogramRequestreview](#contentfreelistingsprogramrequestreview) - Requests a review of free listings in a specific region. This method is only available to selected merchants.

## contentFreelistingsprogramGet

Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentFreelistingsprogramGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentFreelistingsprogramGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentFreelistingsprogramGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quas';
    $request->fields = 'repudiandae';
    $request->key = 'corporis';
    $request->merchantId = 'et';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'sit';

    $requestSecurity = new ContentFreelistingsprogramGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->freelistingsprogram->contentFreelistingsprogramGet($request, $requestSecurity);

    if ($response->freeListingsProgramStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentFreelistingsprogramRequestreview

Requests a review of free listings in a specific region. This method is only available to selected merchants.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentFreelistingsprogramRequestreviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReviewFreeListingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentFreelistingsprogramRequestreviewSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentFreelistingsprogramRequestreviewRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestReviewFreeListingsRequest = new RequestReviewFreeListingsRequest();
    $request->requestReviewFreeListingsRequest->regionCode = 'nostrum';
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequatur';
    $request->fields = 'incidunt';
    $request->key = 'reiciendis';
    $request->merchantId = 'dolorem';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new ContentFreelistingsprogramRequestreviewSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->freelistingsprogram->contentFreelistingsprogramRequestreview($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
