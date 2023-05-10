# returnpolicy

### Available Operations

* [contentReturnpolicyCustombatch](#contentreturnpolicycustombatch) - Batches multiple return policy related calls in a single request.
* [contentReturnpolicyDelete](#contentreturnpolicydelete) - Deletes a return policy for the given Merchant Center account.
* [contentReturnpolicyGet](#contentreturnpolicyget) - Gets a return policy of the Merchant Center account.
* [contentReturnpolicyInsert](#contentreturnpolicyinsert) - Inserts a return policy for the Merchant Center account.
* [contentReturnpolicyList](#contentreturnpolicylist) - Lists the return policies of the Merchant Center account.

## contentReturnpolicyCustombatch

Batches multiple return policy related calls in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnpolicyCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReturnpolicyCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyPolicy;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicySeasonalOverride;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentReturnpolicyCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->returnpolicyCustomBatchRequest = new ReturnpolicyCustomBatchRequest();
    $request->returnpolicyCustomBatchRequest->entries = [
        new ReturnpolicyCustomBatchRequestEntry(),
        new ReturnpolicyCustomBatchRequestEntry(),
        new ReturnpolicyCustomBatchRequestEntry(),
        new ReturnpolicyCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'dignissimos';
    $request->key = 'minus';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'possimus';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new ContentReturnpolicyCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnpolicy->contentReturnpolicyCustombatch($request, $requestSecurity);

    if ($response->returnpolicyCustomBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentReturnpolicyDelete

Deletes a return policy for the given Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentReturnpolicyDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'earum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'quaerat';
    $request->key = 'ipsum';
    $request->merchantId = 'ducimus';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->returnPolicyId = 'deserunt';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new ContentReturnpolicyDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnpolicy->contentReturnpolicyDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentReturnpolicyGet

Gets a return policy of the Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentReturnpolicyGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'esse';
    $request->fields = 'magnam';
    $request->key = 'odio';
    $request->merchantId = 'nulla';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->returnPolicyId = 'illo';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new ContentReturnpolicyGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnpolicy->contentReturnpolicyGet($request, $requestSecurity);

    if ($response->returnPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentReturnpolicyInsert

Inserts a return policy for the Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyPolicy;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicySeasonalOverride;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentReturnpolicyInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->returnPolicy = new ReturnPolicy();
    $request->returnPolicy->country = 'Cameroon';
    $request->returnPolicy->kind = 'maxime';
    $request->returnPolicy->label = 'dolorum';
    $request->returnPolicy->name = 'Wesley Stamm';
    $request->returnPolicy->nonFreeReturnReasons = [
        'explicabo',
        'consectetur',
    ];
    $request->returnPolicy->policy = new ReturnPolicyPolicy();
    $request->returnPolicy->policy->lastReturnDate = 'temporibus';
    $request->returnPolicy->policy->numberOfDays = 'optio';
    $request->returnPolicy->policy->type = 'ipsa';
    $request->returnPolicy->returnPolicyId = 'maiores';
    $request->returnPolicy->returnShippingFee = new Price();
    $request->returnPolicy->returnShippingFee->currency = 'exercitationem';
    $request->returnPolicy->returnShippingFee->value = 'culpa';
    $request->returnPolicy->seasonalOverrides = [
        new ReturnPolicySeasonalOverride(),
        new ReturnPolicySeasonalOverride(),
        new ReturnPolicySeasonalOverride(),
        new ReturnPolicySeasonalOverride(),
    ];
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'neque';
    $request->fields = 'officia';
    $request->key = 'suscipit';
    $request->merchantId = 'harum';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'laudantium';

    $requestSecurity = new ContentReturnpolicyInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnpolicy->contentReturnpolicyInsert($request, $requestSecurity);

    if ($response->returnPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentReturnpolicyList

Lists the return policies of the Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnpolicyListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentReturnpolicyListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quis';
    $request->fields = 'iure';
    $request->key = 'ab';
    $request->merchantId = 'quaerat';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'est';

    $requestSecurity = new ContentReturnpolicyListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnpolicy->contentReturnpolicyList($request, $requestSecurity);

    if ($response->returnpolicyListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
