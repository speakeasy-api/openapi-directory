# floodlightGroups

### Available Operations

* [displayvideoFloodlightGroupsGet](#displayvideofloodlightgroupsget) - Gets a Floodlight group.

## displayvideoFloodlightGroupsGet

Gets a Floodlight group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoFloodlightGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoFloodlightGroupsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoFloodlightGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'in';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ex';
    $request->fields = 'minus';
    $request->floodlightGroupId = 'ab';
    $request->key = 'beatae';
    $request->oauthToken = 'hic';
    $request->partnerId = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'ducimus';

    $requestSecurity = new DisplayvideoFloodlightGroupsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightGroups->displayvideoFloodlightGroupsGet($request, $requestSecurity);

    if ($response->floodlightGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
