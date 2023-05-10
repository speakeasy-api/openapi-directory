# webfonts

### Available Operations

* [webfontsWebfontsList](#webfontswebfontslist) - Retrieves the list of fonts currently served by the Google Fonts Developer API.

## webfontsWebfontsList

Retrieves the list of fonts currently served by the Google Fonts Developer API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebfontsWebfontsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebfontsWebfontsListCapabilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebfontsWebfontsListSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebfontsWebfontsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatum';
    $request->capability = [
        WebfontsWebfontsListCapabilityEnum::WOFF2,
        WebfontsWebfontsListCapabilityEnum::WOFF2,
    ];
    $request->family = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->sort = WebfontsWebfontsListSortEnum::TRENDING;
    $request->subset = 'quo';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'at';

    $response = $sdk->webfonts->webfontsWebfontsList($request);

    if ($response->webfontList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
