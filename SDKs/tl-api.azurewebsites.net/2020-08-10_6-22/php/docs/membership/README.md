# membership

### Available Operations

* [membershipGet](#membershipget) - Get all of the members details
This will return all properties related to member entity
            
* [membershipPost](#membershippost) - Add new Member
            

## membershipGet

Get all of the members details
This will return all properties related to member entity
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MembershipGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new MembershipGetSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->membership->membershipGet($requestSecurity);

    if ($response->memberDTOS !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## membershipPost

Add new Member
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\MemberDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MemberDTO();
    $request->name = 'Della Halvorson';

    $response = $sdk->membership->membershipPost($request);

    if ($response->membershipPost200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
