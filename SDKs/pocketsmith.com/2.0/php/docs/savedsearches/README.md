# savedSearches

### Available Operations

* [getUsersIdSavedSearches](#getusersidsavedsearches) - List saved searches in user

## getUsersIdSavedSearches

Lists saved searches belonging to a user by their ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdSavedSearchesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdSavedSearchesRequest();
    $request->id = 318569;

    $response = $sdk->savedSearches->getUsersIdSavedSearches($request);

    if ($response->savedSearches !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
