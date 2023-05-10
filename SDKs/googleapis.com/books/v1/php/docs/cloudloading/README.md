# cloudloading

### Available Operations

* [booksCloudloadingAddBook](#bookscloudloadingaddbook) - Add a user-upload volume and triggers processing.
* [booksCloudloadingDeleteBook](#bookscloudloadingdeletebook) - Remove the book and its contents
* [booksCloudloadingUpdateBook](#bookscloudloadingupdatebook) - Updates a user-upload volume.

## booksCloudloadingAddBook

Add a user-upload volume and triggers processing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksCloudloadingAddBookRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksCloudloadingAddBookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksCloudloadingAddBookRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->driveDocumentId = 'beatae';
    $request->fields = 'commodi';
    $request->key = 'molestiae';
    $request->mimeType = 'modi';
    $request->name = 'Krista Rippin';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'perferendis';
    $request->uploadClientToken = 'ad';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new BooksCloudloadingAddBookSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cloudloading->booksCloudloadingAddBook($request, $requestSecurity);

    if ($response->booksCloudloadingResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksCloudloadingDeleteBook

Remove the book and its contents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksCloudloadingDeleteBookRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksCloudloadingDeleteBookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksCloudloadingDeleteBookRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'laboriosam';
    $request->key = 'hic';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';
    $request->volumeId = 'iste';

    $requestSecurity = new BooksCloudloadingDeleteBookSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cloudloading->booksCloudloadingDeleteBook($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksCloudloadingUpdateBook

Updates a user-upload volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksCloudloadingUpdateBookRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BooksCloudloadingResource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksCloudloadingUpdateBookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksCloudloadingUpdateBookRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->booksCloudloadingResource = new BooksCloudloadingResource();
    $request->booksCloudloadingResource->author = 'saepe';
    $request->booksCloudloadingResource->processingState = 'quidem';
    $request->booksCloudloadingResource->title = 'Mr.';
    $request->booksCloudloadingResource->volumeId = 'ipsa';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'laborum';
    $request->key = 'dolores';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new BooksCloudloadingUpdateBookSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cloudloading->booksCloudloadingUpdateBook($request, $requestSecurity);

    if ($response->booksCloudloadingResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
