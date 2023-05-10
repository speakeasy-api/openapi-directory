<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->capability = [
        WebfontsWebfontsListCapabilityEnum::VF,
        WebfontsWebfontsListCapabilityEnum::WOFF2,
        WebfontsWebfontsListCapabilityEnum::VF,
    ];
    $request->family = [
        'error',
        'deserunt',
    ];
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->sort = WebfontsWebfontsListSortEnum::SORT_UNDEFINED;
    $request->subset = 'delectus';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'suscipit';

    $response = $sdk->webfonts->webfontsWebfontsList($request);

    if ($response->webfontList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->