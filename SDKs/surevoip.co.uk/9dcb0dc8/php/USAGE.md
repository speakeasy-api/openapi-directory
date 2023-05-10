<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomersAccountAnnouncementsAnnouncementIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomersAccountAnnouncementsAnnouncementIdRequest();
    $request->account = 548814;
    $request->announcementId = 'provident';

    $response = $sdk->announcements->deleteCustomersAccountAnnouncementsAnnouncementId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->