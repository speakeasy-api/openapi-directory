# discounts

### Available Operations

* [createDiscount](#creatediscount) - Create a discount
* [deleteDiscount](#deletediscount) - Delete a single discount 
* [getAllDiscounts](#getalldiscounts) - Retrieve all discounts
* [getDiscount](#getdiscount) - Retrieve a single discount
* [updateDiscount](#updatediscount) - Update a single discount

## createDiscount

Creates a single discount entity. The location of the newly created discount will be available in the successful response as a HttpHeaders.LOCATION header

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDiscountRequest;
use \OpenAPI\OpenAPI\Models\Shared\DiscountRequest;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\PriceCurrencyIdEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDiscountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDiscountRequest();
    $request->discountRequest = new DiscountRequest();
    $request->discountRequest->amount = new Price();
    $request->discountRequest->amount->amount = 699479;
    $request->discountRequest->amount->currencyId = PriceCurrencyIdEnum::BRL;
    $request->discountRequest->description = 'magnam';
    $request->discountRequest->externalReference = 'cumque';
    $request->discountRequest->imageLookupKeys = [
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
    ];
    $request->discountRequest->name = 'Toni Haley';
    $request->discountRequest->percentage = 6925.32;
    $request->discountRequest->uuid = '9ba88f3a-6699-4707-8ba4-469b6e214195';
    $request->organizationUuid = '9890afa5-63e2-4516-be4c-8b711e5b7fd2';

    $requestSecurity = new CreateDiscountSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->discounts->createDiscount($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDiscount

Delete a single discount 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDiscountRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDiscountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDiscountRequest();
    $request->discountUuid = 'ed028921-cddc-4692-a01f-b576b0d5f0d3';
    $request->organizationUuid = '0c5fbb25-8705-4320-ac73-d5fe9b90c289';

    $requestSecurity = new DeleteDiscountSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->discounts->deleteDiscount($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllDiscounts

Retrieve all discounts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllDiscountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllDiscountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllDiscountsRequest();
    $request->organizationUuid = '09b3fe49-a8d9-4cbf-8863-3323f9b77f3a';

    $requestSecurity = new GetAllDiscountsSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->discounts->getAllDiscounts($request, $requestSecurity);

    if ($response->discountResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiscount

Get the full discount with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full discount is returned: otherwise a 304 not modified will be returned with an empty body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscountRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiscountRequest();
    $request->ifNoneMatch = 'numquam';
    $request->discountUuid = '100674eb-f692-480d-9ba7-7a89ebf737ae';
    $request->organizationUuid = '4203ce5e-6a95-4d8a-8d44-6ce2af7a73cf';

    $requestSecurity = new GetDiscountSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->discounts->getDiscount($request, $requestSecurity);

    if ($response->discountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDiscount

Updates a discount entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the discount is updated: otherwise a 412 precondition failed will be returned with an empty body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDiscountRequest;
use \OpenAPI\OpenAPI\Models\Shared\DiscountRequest;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\PriceCurrencyIdEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDiscountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDiscountRequest();
    $request->discountRequest = new DiscountRequest();
    $request->discountRequest->amount = new Price();
    $request->discountRequest->amount->amount = 229442;
    $request->discountRequest->amount->currencyId = PriceCurrencyIdEnum::SGD;
    $request->discountRequest->description = 'accusamus';
    $request->discountRequest->externalReference = 'numquam';
    $request->discountRequest->imageLookupKeys = [
        'dolorem',
        'sapiente',
    ];
    $request->discountRequest->name = 'Christian Balistreri';
    $request->discountRequest->percentage = 1536.94;
    $request->discountRequest->uuid = '6b5a7342-9cdb-41a8-822b-b679d2322715';
    $request->ifMatch = 'nam';
    $request->discountUuid = 'f0cbb1e3-1b8b-490f-b443-a1108e0adcf4';
    $request->organizationUuid = 'b921879f-ce95-43f7-bef7-fbc7abd74dd3';

    $requestSecurity = new UpdateDiscountSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->discounts->updateDiscount($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
