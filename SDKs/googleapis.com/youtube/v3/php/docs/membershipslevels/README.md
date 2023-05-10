# membershipsLevels

### Available Operations

* [youtubeMembershipsLevelsList](#youtubemembershipslevelslist) - Retrieves a list of all pricing levels offered by a creator to the fans.

## youtubeMembershipsLevelsList

Retrieves a list of all pricing levels offered by a creator to the fans.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeMembershipsLevelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeMembershipsLevelsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeMembershipsLevelsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'atque';
    $request->fields = 'beatae';
    $request->key = 'at';
    $request->oauthToken = 'labore';
    $request->part = [
        'esse',
        'voluptatem',
        'perferendis',
        'rerum',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new YoutubeMembershipsLevelsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->membershipsLevels->youtubeMembershipsLevelsList($request, $requestSecurity);

    if ($response->membershipsLevelListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
