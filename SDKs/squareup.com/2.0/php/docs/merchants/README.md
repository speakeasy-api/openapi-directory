# merchants

### Available Operations

* [listMerchants](#listmerchants) - ListMerchants
* [retrieveMerchant](#retrievemerchant) - RetrieveMerchant

## listMerchants

Returns `Merchant` information for a given access token.

If you don't know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token.
You can specify your personal access token to get your own merchant information or specify an OAuth token
to get the information for the  merchant that granted you access.

If you know the merchant ID, you can also use the [RetrieveMerchant](https://developer.squareup.com/reference/square_2021-08-18/merchants-api/retrieve-merchant)
endpoint to get the merchant information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMerchantsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMerchantsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMerchantsRequest();
    $request->cursor = 181476;

    $requestSecurity = new ListMerchantsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->merchants->listMerchants($request, $requestSecurity);

    if ($response->listMerchantsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveMerchant

Retrieve a `Merchant` object for the given `merchant_id`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveMerchantRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveMerchantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveMerchantRequest();
    $request->merchantId = 'aliquid';

    $requestSecurity = new RetrieveMerchantSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->merchants->retrieveMerchant($request, $requestSecurity);

    if ($response->retrieveMerchantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
