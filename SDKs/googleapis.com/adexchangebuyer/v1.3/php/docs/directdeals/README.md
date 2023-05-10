# directDeals

### Available Operations

* [adexchangebuyerDirectDealsGet](#adexchangebuyerdirectdealsget) - Gets one direct deal by ID.
* [adexchangebuyerDirectDealsList](#adexchangebuyerdirectdealslist) - Retrieves the authenticated user's list of direct deals.

## adexchangebuyerDirectDealsGet

Gets one direct deal by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerDirectDealsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerDirectDealsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerDirectDealsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'nam';
    $request->id = 'a88f3a66-9970-474b-a446-9b6e21419598';
    $request->key = 'sint';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->userIp = 'reiciendis';

    $requestSecurity = new AdexchangebuyerDirectDealsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->directDeals->adexchangebuyerDirectDealsGet($request, $requestSecurity);

    if ($response->directDeal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerDirectDealsList

Retrieves the authenticated user's list of direct deals.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerDirectDealsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerDirectDealsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerDirectDealsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'mollitia';
    $request->key = 'ad';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->userIp = 'necessitatibus';

    $requestSecurity = new AdexchangebuyerDirectDealsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->directDeals->adexchangebuyerDirectDealsList($request, $requestSecurity);

    if ($response->directDealsList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
