# bookshelves

### Available Operations

* [booksBookshelvesGet](#booksbookshelvesget) - Retrieves metadata for a specific bookshelf for the specified user.
* [booksBookshelvesList](#booksbookshelveslist) - Retrieves a list of public bookshelves for the specified user.
* [booksBookshelvesVolumesList](#booksbookshelvesvolumeslist) - Retrieves volumes in a specific bookshelf for the specified user.

## booksBookshelvesGet

Retrieves metadata for a specific bookshelf for the specified user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksBookshelvesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksBookshelvesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksBookshelvesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->shelf = 'placeat';
    $request->source = 'voluptatum';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'excepturi';
    $request->userId = 'nisi';

    $requestSecurity = new BooksBookshelvesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bookshelves->booksBookshelvesGet($request, $requestSecurity);

    if ($response->bookshelf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksBookshelvesList

Retrieves a list of public bookshelves for the specified user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksBookshelvesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksBookshelvesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksBookshelvesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->source = 'repellendus';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'quo';
    $request->userId = 'odit';

    $requestSecurity = new BooksBookshelvesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bookshelves->booksBookshelvesList($request, $requestSecurity);

    if ($response->bookshelves !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksBookshelvesVolumesList

Retrieves volumes in a specific bookshelf for the specified user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksBookshelvesVolumesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksBookshelvesVolumesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksBookshelvesVolumesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'quod';
    $request->key = 'quod';
    $request->maxResults = 461479;
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->shelf = 'dolorum';
    $request->showPreorders = false;
    $request->source = 'dicta';
    $request->startIndex = 720633;
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'occaecati';
    $request->userId = 'fugit';

    $requestSecurity = new BooksBookshelvesVolumesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bookshelves->booksBookshelvesVolumesList($request, $requestSecurity);

    if ($response->volumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
