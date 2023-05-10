# labels

### Available Operations

* [getUsersIdLabels](#getusersidlabels) - List labels in user

## getUsersIdLabels

Lists labels belonging to a user by their ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdLabelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdLabelsRequest();
    $request->id = 277718;

    $response = $sdk->labels->getUsersIdLabels($request);

    if ($response->getUsersIdLabels200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
