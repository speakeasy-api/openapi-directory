# marketplacenotes

### Available Operations

* [adexchangebuyerMarketplacenotesInsert](#adexchangebuyermarketplacenotesinsert) - Add notes to the proposal
* [adexchangebuyerMarketplacenotesList](#adexchangebuyermarketplacenoteslist) - Get all the notes associated with a proposal

## adexchangebuyerMarketplacenotesInsert

Add notes to the proposal

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerMarketplacenotesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOrderNotesRequest;
use \OpenAPI\OpenAPI\Models\Shared\MarketplaceNote;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerMarketplacenotesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerMarketplacenotesInsertRequest();
    $request->addOrderNotesRequest = new AddOrderNotesRequest();
    $request->addOrderNotesRequest->notes = [
        new MarketplaceNote(),
        new MarketplaceNote(),
        new MarketplaceNote(),
        new MarketplaceNote(),
    ];
    $request->alt = AltEnum::JSON;
    $request->fields = 'recusandae';
    $request->key = 'omnis';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->proposalId = 'perspiciatis';
    $request->quotaUser = 'voluptatem';
    $request->userIp = 'porro';

    $requestSecurity = new AdexchangebuyerMarketplacenotesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketplacenotes->adexchangebuyerMarketplacenotesInsert($request, $requestSecurity);

    if ($response->addOrderNotesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerMarketplacenotesList

Get all the notes associated with a proposal

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerMarketplacenotesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerMarketplacenotesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerMarketplacenotesListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'consequuntur';
    $request->key = 'blanditiis';
    $request->oauthToken = 'error';
    $request->pqlQuery = 'eaque';
    $request->prettyPrint = false;
    $request->proposalId = 'occaecati';
    $request->quotaUser = 'rerum';
    $request->userIp = 'adipisci';

    $requestSecurity = new AdexchangebuyerMarketplacenotesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketplacenotes->adexchangebuyerMarketplacenotesList($request, $requestSecurity);

    if ($response->getOrderNotesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
