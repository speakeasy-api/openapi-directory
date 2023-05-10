# search

### Available Operations

* [getOrganizationClientsSearch](#getorganizationclientssearch) - Return the client details in an organization

## getOrganizationClientsSearch

Return the client details in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationClientsSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationClientsSearchRequest();
    $request->endingBefore = 'vero';
    $request->mac = 'quae';
    $request->organizationId = 'doloremque';
    $request->perPage = 89357;
    $request->startingAfter = 'possimus';

    $response = $sdk->search->getOrganizationClientsSearch($request);

    if ($response->getOrganizationClientsSearch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
