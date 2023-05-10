# businessUnit

## Overview

Get Business Unit information.

### Available Operations

* [getBusinessUnitsV3BusinessUnitsUserUserId](#getbusinessunitsv3businessunitsuseruserid) - Get Business Units for a user

## getBusinessUnitsV3BusinessUnitsUserUserId

Get Business Units identified by `userId`. The `userId` refers to the user’s ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBusinessUnitsV3BusinessUnitsUserUserIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBusinessUnitsV3BusinessUnitsUserUserIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBusinessUnitsV3BusinessUnitsUserUserIdRequest();
    $request->name = [
        'deserunt',
        'suscipit',
        'iure',
    ];
    $request->properties = [
        'debitis',
        'ipsa',
    ];
    $request->userId = 'delectus';

    $requestSecurity = new GetBusinessUnitsV3BusinessUnitsUserUserIdSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->businessUnit->getBusinessUnitsV3BusinessUnitsUserUserId($request, $requestSecurity);

    if ($response->collectionResponsePublicBusinessUnitNoPaging !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
