# imageFamilyViews

### Available Operations

* [computeImageFamilyViewsGet](#computeimagefamilyviewsget) - Returns the latest image that is part of an image family, is not deprecated and is rolled out in the specified zone.

## computeImageFamilyViewsGet

Returns the latest image that is part of an image family, is not deprecated and is rolled out in the specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImageFamilyViewsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImageFamilyViewsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImageFamilyViewsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImageFamilyViewsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImageFamilyViewsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeImageFamilyViewsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->family = 'fuga';
    $request->fields = 'iure';
    $request->key = 'deleniti';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->quotaUser = 'laborum';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'ad';
    $request->userIp = 'illum';
    $request->zone = 'sit';

    $requestSecurity = new ComputeImageFamilyViewsGetSecurity();
    $requestSecurity->option1 = new ComputeImageFamilyViewsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->imageFamilyViews->computeImageFamilyViewsGet($request, $requestSecurity);

    if ($response->imageFamilyView !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
