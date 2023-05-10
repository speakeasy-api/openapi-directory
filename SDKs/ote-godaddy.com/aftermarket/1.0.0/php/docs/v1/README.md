# v1

### Available Operations

* [addExpiryListingsJson](#addexpirylistingsjson) - Add expiry listings into GoDaddy Auction
* [addExpiryListingsRaw](#addexpirylistingsraw) - Add expiry listings into GoDaddy Auction
* [deleteListings](#deletelistings) - Remove listings from GoDaddy Auction

## addExpiryListingsJson

Add expiry listings into GoDaddy Auction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AftermarketListingExpiryCreate;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new AftermarketListingExpiryCreate(),
        new AftermarketListingExpiryCreate(),
        new AftermarketListingExpiryCreate(),
    ]

    $response = $sdk->v1->addExpiryListingsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addExpiryListingsRaw

Add expiry listings into GoDaddy Auction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'distinctio'

    $response = $sdk->v1->addExpiryListingsRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteListings

Remove listings from GoDaddy Auction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteListingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteListingsRequest();
    $request->domains = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];

    $response = $sdk->v1->deleteListings($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
