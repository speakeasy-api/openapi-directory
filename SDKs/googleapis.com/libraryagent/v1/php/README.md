# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->name = 'Dallas Kassulke';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [shelves](docs/shelves/README.md)

* [libraryagentShelvesBooksBorrow](docs/shelves/README.md#libraryagentshelvesbooksborrow) - Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.
* [libraryagentShelvesBooksGet](docs/shelves/README.md#libraryagentshelvesbooksget) - Gets a book. Returns NOT_FOUND if the book does not exist.
* [libraryagentShelvesBooksList](docs/shelves/README.md#libraryagentshelvesbookslist) - Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.
* [libraryagentShelvesBooksReturn](docs/shelves/README.md#libraryagentshelvesbooksreturn) - Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.
* [libraryagentShelvesList](docs/shelves/README.md#libraryagentshelveslist) - Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
