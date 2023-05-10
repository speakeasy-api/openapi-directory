<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLikesPlaylistsPlaylistIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLikesPlaylistsPlaylistIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLikesPlaylistsPlaylistIdRequest();
    $request->playlistId = 548814;

    $requestSecurity = new DeleteLikesPlaylistsPlaylistIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->likes->deleteLikesPlaylistsPlaylistId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->