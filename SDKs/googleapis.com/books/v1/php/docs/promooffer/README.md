# promooffer

### Available Operations

* [booksPromoofferAccept](#bookspromoofferaccept) - Accepts the promo offer.
* [booksPromoofferDismiss](#bookspromoofferdismiss) - Marks the promo offer as dismissed.
* [booksPromoofferGet](#bookspromoofferget) - Returns a list of promo offers available to the user

## booksPromoofferAccept

Accepts the promo offer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksPromoofferAcceptRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksPromoofferAcceptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksPromoofferAcceptRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->androidId = 'cumque';
    $request->callback = 'consequuntur';
    $request->device = 'consequatur';
    $request->fields = 'minus';
    $request->key = 'quaerat';
    $request->manufacturer = 'sapiente';
    $request->model = 'consectetur';
    $request->oauthToken = 'esse';
    $request->offerId = 'blanditiis';
    $request->prettyPrint = false;
    $request->product = 'provident';
    $request->quotaUser = 'a';
    $request->serial = 'nulla';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'esse';
    $request->volumeId = 'quasi';

    $requestSecurity = new BooksPromoofferAcceptSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->promooffer->booksPromoofferAccept($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksPromoofferDismiss

Marks the promo offer as dismissed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksPromoofferDismissRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksPromoofferDismissSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksPromoofferDismissRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->androidId = 'pariatur';
    $request->callback = 'possimus';
    $request->device = 'quia';
    $request->fields = 'eveniet';
    $request->key = 'asperiores';
    $request->manufacturer = 'facere';
    $request->model = 'veritatis';
    $request->oauthToken = 'consequuntur';
    $request->offerId = 'quasi';
    $request->prettyPrint = false;
    $request->product = 'similique';
    $request->quotaUser = 'culpa';
    $request->serial = 'aliquid';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new BooksPromoofferDismissSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->promooffer->booksPromoofferDismiss($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksPromoofferGet

Returns a list of promo offers available to the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksPromoofferGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksPromoofferGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksPromoofferGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->androidId = 'eius';
    $request->callback = 'libero';
    $request->device = 'illum';
    $request->fields = 'soluta';
    $request->key = 'accusantium';
    $request->manufacturer = 'aliquam';
    $request->model = 'sapiente';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->product = 'ullam';
    $request->quotaUser = 'reprehenderit';
    $request->serial = 'ullam';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new BooksPromoofferGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->promooffer->booksPromoofferGet($request, $requestSecurity);

    if ($response->offers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
