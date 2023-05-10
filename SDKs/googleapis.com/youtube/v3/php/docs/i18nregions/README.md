# i18nRegions

### Available Operations

* [youtubeI18nRegionsList](#youtubei18nregionslist) - Retrieves a list of resources, possibly filtered.

## youtubeI18nRegionsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeI18nRegionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeI18nRegionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeI18nRegionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeI18nRegionsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeI18nRegionsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeI18nRegionsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeI18nRegionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veniam';
    $request->fields = 'in';
    $request->hl = 'officiis';
    $request->key = 'beatae';
    $request->oauthToken = 'laudantium';
    $request->part = [
        'praesentium',
        'cum',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new YoutubeI18nRegionsListSecurity();
    $requestSecurity->option1 = new YoutubeI18nRegionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->i18nRegions->youtubeI18nRegionsList($request, $requestSecurity);

    if ($response->i18nRegionListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
