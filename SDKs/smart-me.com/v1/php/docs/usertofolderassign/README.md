# userToFolderAssign

### Available Operations

* [userToFolderAssignDelete](#usertofolderassigndelete) - Deletes a user to folder assignement
* [userToFolderAssignPost](#usertofolderassignpost) - Assign a user to a folder

## userToFolderAssignDelete

Deletes a user to folder assignement

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserToFolderAssignDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserToFolderAssignDeleteRequest();
    $request->source = 'nihil';
    $request->target = 'molestiae';

    $response = $sdk->userToFolderAssign->userToFolderAssignDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userToFolderAssignPost

Assign a user to a folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserToFolderAssignPostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserToFolderAssignPostRequest();
    $request->oldFolder = 'dicta';
    $request->source = 'iusto';
    $request->target = 'esse';

    $response = $sdk->userToFolderAssign->userToFolderAssignPost($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
