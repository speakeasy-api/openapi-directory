# shoppingadsprogram

### Available Operations

* [contentShoppingadsprogramGet](#contentshoppingadsprogramget) - Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
* [contentShoppingadsprogramRequestreview](#contentshoppingadsprogramrequestreview) - Requests a review of Shopping ads in a specific region. This method is only available to selected merchants.

## contentShoppingadsprogramGet

Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentShoppingadsprogramGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentShoppingadsprogramGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentShoppingadsprogramGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'totam';
    $request->fields = 'iure';
    $request->key = 'maiores';
    $request->merchantId = 'est';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new ContentShoppingadsprogramGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shoppingadsprogram->contentShoppingadsprogramGet($request, $requestSecurity);

    if ($response->shoppingAdsProgramStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentShoppingadsprogramRequestreview

Requests a review of Shopping ads in a specific region. This method is only available to selected merchants.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentShoppingadsprogramRequestreviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReviewShoppingAdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentShoppingadsprogramRequestreviewSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentShoppingadsprogramRequestreviewRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestReviewShoppingAdsRequest = new RequestReviewShoppingAdsRequest();
    $request->requestReviewShoppingAdsRequest->regionCode = 'ipsam';
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'non';
    $request->key = 'beatae';
    $request->merchantId = 'sunt';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'ducimus';

    $requestSecurity = new ContentShoppingadsprogramRequestreviewSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shoppingadsprogram->contentShoppingadsprogramRequestreview($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
