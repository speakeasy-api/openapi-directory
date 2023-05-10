# series

### Available Operations

* [booksSeriesGet](#booksseriesget) - Returns Series metadata for the given series ids.
* [booksSeriesMembershipGet](#booksseriesmembershipget) - Returns Series membership data given the series id.

## booksSeriesGet

Returns Series metadata for the given series ids.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksSeriesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksSeriesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksSeriesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ex';
    $request->fields = 'deleniti';
    $request->key = 'itaque';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->seriesId = [
        'tenetur',
        'quasi',
        'at',
    ];
    $request->uploadType = 'et';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new BooksSeriesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->series->booksSeriesGet($request, $requestSecurity);

    if ($response->series !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksSeriesMembershipGet

Returns Series membership data given the series id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksSeriesMembershipGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksSeriesMembershipGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksSeriesMembershipGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consectetur';
    $request->fields = 'adipisci';
    $request->key = 'iste';
    $request->oauthToken = 'temporibus';
    $request->pageSize = 33074;
    $request->pageToken = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->seriesId = 'laudantium';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new BooksSeriesMembershipGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->series->booksSeriesMembershipGet($request, $requestSecurity);

    if ($response->seriesmembership !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
