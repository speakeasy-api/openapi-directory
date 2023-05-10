# invitation

### Available Operations

* [getInvitationVendors](#getinvitationvendors) - Get vendor list for compiled invitation needs

## getInvitationVendors

Get vendor list for compiled invitation needs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\FileNeedsVendor;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new FileNeedsVendor(),
        new FileNeedsVendor(),
        new FileNeedsVendor(),
        new FileNeedsVendor(),
    ]

    $response = $sdk->invitation->getInvitationVendors($request);

    if ($response->vendorInvitationList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
