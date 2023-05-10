# bidders

### Available Operations

* [realtimebiddingBiddersBiddingFunctionsActivate](#realtimebiddingbiddersbiddingfunctionsactivate) - Activates an existing bidding function. An activated function is available for invocation for the server-side TURTLEDOVE simulations.
* [realtimebiddingBiddersBiddingFunctionsArchive](#realtimebiddingbiddersbiddingfunctionsarchive) - Archives an existing bidding function. An archived function will not be available for function invocation for the server-side TURTLEDOVE simulations unless it is activated.
* [realtimebiddingBiddersBiddingFunctionsCreate](#realtimebiddingbiddersbiddingfunctionscreate) - Creates a new bidding function.
* [realtimebiddingBiddersBiddingFunctionsList](#realtimebiddingbiddersbiddingfunctionslist) - Lists the bidding functions that a bidder currently has registered.

## realtimebiddingBiddersBiddingFunctionsActivate

Activates an existing bidding function. An activated function is available for invocation for the server-side TURTLEDOVE simulations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersBiddingFunctionsActivateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersBiddingFunctionsActivateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersBiddingFunctionsActivateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
    ];
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->name = 'Estelle Will';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new RealtimebiddingBiddersBiddingFunctionsActivateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersBiddingFunctionsActivate($request, $requestSecurity);

    if ($response->biddingFunction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersBiddingFunctionsArchive

Archives an existing bidding function. An archived function will not be available for function invocation for the server-side TURTLEDOVE simulations unless it is activated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersBiddingFunctionsArchiveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersBiddingFunctionsArchiveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersBiddingFunctionsArchiveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'esse' => 'totam',
        'porro' => 'dolorum',
        'dicta' => 'nam',
        'officia' => 'occaecati',
    ];
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'optio';
    $request->key = 'totam';
    $request->name = 'Lucy Krajcik';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new RealtimebiddingBiddersBiddingFunctionsArchiveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersBiddingFunctionsArchive($request, $requestSecurity);

    if ($response->biddingFunction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersBiddingFunctionsCreate

Creates a new bidding function.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersBiddingFunctionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BiddingFunctionInput;
use \OpenAPI\OpenAPI\Models\Shared\BiddingFunctionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersBiddingFunctionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersBiddingFunctionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->biddingFunctionInput = new BiddingFunctionInput();
    $request->biddingFunctionInput->biddingFunction = 'aspernatur';
    $request->biddingFunctionInput->name = 'Cathy Mosciski';
    $request->biddingFunctionInput->type = BiddingFunctionTypeEnum::FUNCTION_TYPE_UNSPECIFIED;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'saepe';
    $request->key = 'fuga';
    $request->oauthToken = 'in';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new RealtimebiddingBiddersBiddingFunctionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersBiddingFunctionsCreate($request, $requestSecurity);

    if ($response->biddingFunction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersBiddingFunctionsList

Lists the bidding functions that a bidder currently has registered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersBiddingFunctionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersBiddingFunctionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersBiddingFunctionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'est';
    $request->key = 'mollitia';
    $request->oauthToken = 'laborum';
    $request->pageSize = 170909;
    $request->pageToken = 'dolorem';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new RealtimebiddingBiddersBiddingFunctionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersBiddingFunctionsList($request, $requestSecurity);

    if ($response->listBiddingFunctionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
