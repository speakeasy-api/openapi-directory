# returnaddress

### Available Operations

* [contentReturnaddressCustombatch](#contentreturnaddresscustombatch) - Batches multiple return address related calls in a single request.
* [contentReturnaddressDelete](#contentreturnaddressdelete) - Deletes a return address for the given Merchant Center account.
* [contentReturnaddressGet](#contentreturnaddressget) - Gets a return address of the Merchant Center account.
* [contentReturnaddressInsert](#contentreturnaddressinsert) - Inserts a return address for the Merchant Center account.
* [contentReturnaddressList](#contentreturnaddresslist) - Lists the return addresses of the Merchant Center account.

## contentReturnaddressCustombatch

Batches multiple return address related calls in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnaddressCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnaddressCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReturnaddressCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\ReturnAddress;
use \OpenAPI\OpenAPI\Models\Shared\ReturnAddressAddress;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnaddressCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentReturnaddressCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->returnaddressCustomBatchRequest = new ReturnaddressCustomBatchRequest();
    $request->returnaddressCustomBatchRequest->entries = [
        new ReturnaddressCustomBatchRequestEntry(),
        new ReturnaddressCustomBatchRequestEntry(),
        new ReturnaddressCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->fields = 'necessitatibus';
    $request->key = 'distinctio';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'optio';

    $requestSecurity = new ContentReturnaddressCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnaddress->contentReturnaddressCustombatch($request, $requestSecurity);

    if ($response->returnaddressCustomBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentReturnaddressDelete

Deletes a return address for the given Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnaddressDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnaddressDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentReturnaddressDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatibus';
    $request->fields = 'doloremque';
    $request->key = 'sed';
    $request->merchantId = 'amet';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->returnAddressId = 'nostrum';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'ratione';

    $requestSecurity = new ContentReturnaddressDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnaddress->contentReturnaddressDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentReturnaddressGet

Gets a return address of the Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnaddressGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnaddressGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentReturnaddressGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'itaque';
    $request->key = 'vitae';
    $request->merchantId = 'est';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->returnAddressId = 'minus';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new ContentReturnaddressGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnaddress->contentReturnaddressGet($request, $requestSecurity);

    if ($response->returnAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentReturnaddressInsert

Inserts a return address for the Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnaddressInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnAddress;
use \OpenAPI\OpenAPI\Models\Shared\ReturnAddressAddress;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnaddressInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentReturnaddressInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->returnAddress = new ReturnAddress();
    $request->returnAddress->address = new ReturnAddressAddress();
    $request->returnAddress->address->country = 'Latvia';
    $request->returnAddress->address->locality = 'provident';
    $request->returnAddress->address->postalCode = '06154-8607';
    $request->returnAddress->address->recipientName = 'sequi';
    $request->returnAddress->address->region = 'commodi';
    $request->returnAddress->address->streetAddress = [
        'expedita',
        'in',
    ];
    $request->returnAddress->country = 'Senegal';
    $request->returnAddress->kind = 'sunt';
    $request->returnAddress->label = 'enim';
    $request->returnAddress->phoneNumber = 'nulla';
    $request->returnAddress->returnAddressId = 'maiores';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'impedit';
    $request->fields = 'accusamus';
    $request->key = 'et';
    $request->merchantId = 'quas';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new ContentReturnaddressInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnaddress->contentReturnaddressInsert($request, $requestSecurity);

    if ($response->returnAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentReturnaddressList

Lists the return addresses of the Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnaddressListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentReturnaddressListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentReturnaddressListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eveniet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->country = 'Samoa';
    $request->fields = 'quas';
    $request->key = 'impedit';
    $request->maxResults = 428378;
    $request->merchantId = 'eligendi';
    $request->oauthToken = 'recusandae';
    $request->pageToken = 'ex';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new ContentReturnaddressListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnaddress->contentReturnaddressList($request, $requestSecurity);

    if ($response->returnaddressListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
