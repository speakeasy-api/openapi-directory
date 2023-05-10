# members

### Available Operations

* [youtubeMembersList](#youtubememberslist) - Retrieves a list of members that match the request criteria for a channel.

## youtubeMembersList

Retrieves a list of members that match the request criteria for a channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeMembersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeMembersListModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeMembersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeMembersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'itaque';
    $request->filterByMemberChannelId = 'facilis';
    $request->hasAccessToLevel = 'corrupti';
    $request->key = 'aperiam';
    $request->maxResults = 574092;
    $request->mode = YoutubeMembersListModeEnum::ALL_CURRENT;
    $request->oauthToken = 'eos';
    $request->pageToken = 'totam';
    $request->part = [
        'voluptatem',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'sunt';

    $requestSecurity = new YoutubeMembersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->members->youtubeMembersList($request, $requestSecurity);

    if ($response->memberListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
