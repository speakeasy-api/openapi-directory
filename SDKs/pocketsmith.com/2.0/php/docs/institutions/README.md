# institutions

### Available Operations

* [deleteInstitutionsId](#deleteinstitutionsid) - Delete institution
* [getInstitutionsId](#getinstitutionsid) - Get institution
* [getUsersIdInstitutions](#getusersidinstitutions) - List institutions in user
* [postUsersIdInstitutions](#postusersidinstitutions) - Create institution in user
* [putInstitutionsId](#putinstitutionsid) - Update institution

## deleteInstitutionsId

Deletes an institution and all data within. Alternatively, another institution can be provided to merge the data into to avoid losing it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInstitutionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInstitutionsIdRequest();
    $request->id = 916723;
    $request->mergeIntoInstitutionId = 93940;

    $response = $sdk->institutions->deleteInstitutionsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstitutionsId

Gets an institution by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstitutionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstitutionsIdRequest();
    $request->id = 921158;

    $response = $sdk->institutions->getInstitutionsId($request);

    if ($response->institution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdInstitutions

Lists all the institutions belonging to the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdInstitutionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdInstitutionsRequest();
    $request->id = 575947;

    $response = $sdk->institutions->getUsersIdInstitutions($request);

    if ($response->institutions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdInstitutions

Creates an institution belonging to a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdInstitutionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdInstitutionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdInstitutionsRequest();
    $request->requestBody = new PostUsersIdInstitutionsRequestBody();
    $request->requestBody->currencyCode = 'NZD';
    $request->requestBody->title = 'Bank of Foo';
    $request->id = 83112;

    $response = $sdk->institutions->postUsersIdInstitutions($request);

    if ($response->institution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putInstitutionsId

Updates the title and currency code for an institution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutInstitutionsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutInstitutionsIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutInstitutionsIdRequest();
    $request->requestBody = new PutInstitutionsIdRequestBody();
    $request->requestBody->currencyCode = 'NZD';
    $request->requestBody->title = 'Bank of Foo';
    $request->id = 929297;

    $response = $sdk->institutions->putInstitutionsId($request);

    if ($response->institution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
