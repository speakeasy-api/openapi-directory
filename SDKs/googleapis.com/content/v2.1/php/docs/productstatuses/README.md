# productstatuses

### Available Operations

* [contentProductstatusesCustombatch](#contentproductstatusescustombatch) - Gets the statuses of multiple products in a single request.
* [contentProductstatusesGet](#contentproductstatusesget) - Gets the status of a product from your Merchant Center account.
* [contentProductstatusesList](#contentproductstatuseslist) - Lists the statuses of the products in your Merchant Center account.
* [contentProductstatusesRepricingreportsList](#contentproductstatusesrepricingreportslist) - Lists the metrics report for a given Repricing product.

## contentProductstatusesCustombatch

Gets the statuses of multiple products in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductstatusesCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductstatusesCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductstatusesCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductstatusesCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductstatusesCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->productstatusesCustomBatchRequest = new ProductstatusesCustomBatchRequest();
    $request->productstatusesCustomBatchRequest->entries = [
        new ProductstatusesCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'id';
    $request->key = 'laboriosam';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->quotaUser = 'quas';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new ContentProductstatusesCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->productstatuses->contentProductstatusesCustombatch($request, $requestSecurity);

    if ($response->productstatusesCustomBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentProductstatusesGet

Gets the status of a product from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductstatusesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductstatusesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductstatusesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quam';
    $request->destinations = [
        'deserunt',
    ];
    $request->fields = 'delectus';
    $request->key = 'omnis';
    $request->merchantId = 'sed';
    $request->oauthToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->productId = 'maxime';
    $request->quotaUser = 'quis';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'aliquam';

    $requestSecurity = new ContentProductstatusesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->productstatuses->contentProductstatusesGet($request, $requestSecurity);

    if ($response->productStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentProductstatusesList

Lists the statuses of the products in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductstatusesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductstatusesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductstatusesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->destinations = [
        'amet',
        'nemo',
        'ipsa',
        'quisquam',
    ];
    $request->fields = 'tenetur';
    $request->key = 'quas';
    $request->maxResults = 476003;
    $request->merchantId = 'aliquid';
    $request->oauthToken = 'asperiores';
    $request->pageToken = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new ContentProductstatusesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->productstatuses->contentProductstatusesList($request, $requestSecurity);

    if ($response->productstatusesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentProductstatusesRepricingreportsList

Lists the metrics report for a given Repricing product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductstatusesRepricingreportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductstatusesRepricingreportsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductstatusesRepricingreportsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eveniet';
    $request->endDate = 'porro';
    $request->fields = 'tempore';
    $request->key = 'quidem';
    $request->merchantId = 'modi';
    $request->oauthToken = 'voluptates';
    $request->pageSize = 145435;
    $request->pageToken = 'eius';
    $request->prettyPrint = false;
    $request->productId = 'sequi';
    $request->quotaUser = 'eligendi';
    $request->ruleId = 'asperiores';
    $request->startDate = 'esse';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new ContentProductstatusesRepricingreportsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->productstatuses->contentProductstatusesRepricingreportsList($request, $requestSecurity);

    if ($response->listRepricingProductReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
