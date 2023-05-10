# shelves

### Available Operations

* [libraryagentShelvesBooksBorrow](#libraryagentshelvesbooksborrow) - Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.
* [libraryagentShelvesBooksGet](#libraryagentshelvesbooksget) - Gets a book. Returns NOT_FOUND if the book does not exist.
* [libraryagentShelvesBooksList](#libraryagentshelvesbookslist) - Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.
* [libraryagentShelvesBooksReturn](#libraryagentshelvesbooksreturn) - Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.
* [libraryagentShelvesList](#libraryagentshelveslist) - Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list.

## libraryagentShelvesBooksBorrow

Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LibraryagentShelvesBooksBorrowRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LibraryagentShelvesBooksBorrowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LibraryagentShelvesBooksBorrowRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->name = 'Ken Kshlerin';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new LibraryagentShelvesBooksBorrowSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shelves->libraryagentShelvesBooksBorrow($request, $requestSecurity);

    if ($response->googleExampleLibraryagentV1Book !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## libraryagentShelvesBooksGet

Gets a book. Returns NOT_FOUND if the book does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LibraryagentShelvesBooksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LibraryagentShelvesBooksGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LibraryagentShelvesBooksGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'repellendus';
    $request->key = 'sapiente';
    $request->name = 'Fred Strosin';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new LibraryagentShelvesBooksGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shelves->libraryagentShelvesBooksGet($request, $requestSecurity);

    if ($response->googleExampleLibraryagentV1Book !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## libraryagentShelvesBooksList

Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LibraryagentShelvesBooksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LibraryagentShelvesBooksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LibraryagentShelvesBooksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'nam';
    $request->key = 'officia';
    $request->oauthToken = 'occaecati';
    $request->pageSize = 143353;
    $request->pageToken = 'deleniti';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'beatae';

    $requestSecurity = new LibraryagentShelvesBooksListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shelves->libraryagentShelvesBooksList($request, $requestSecurity);

    if ($response->googleExampleLibraryagentV1ListBooksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## libraryagentShelvesBooksReturn

Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LibraryagentShelvesBooksReturnRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LibraryagentShelvesBooksReturnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LibraryagentShelvesBooksReturnRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'impedit';
    $request->key = 'cum';
    $request->name = 'Edna Mante II';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new LibraryagentShelvesBooksReturnSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shelves->libraryagentShelvesBooksReturn($request, $requestSecurity);

    if ($response->googleExampleLibraryagentV1Book !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## libraryagentShelvesList

Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LibraryagentShelvesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LibraryagentShelvesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LibraryagentShelvesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'fuga';
    $request->key = 'in';
    $request->oauthToken = 'corporis';
    $request->pageSize = 613064;
    $request->pageToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new LibraryagentShelvesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shelves->libraryagentShelvesList($request, $requestSecurity);

    if ($response->googleExampleLibraryagentV1ListShelvesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
