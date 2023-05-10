<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebriskHashesSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebriskHashesSearchThreatTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebriskHashesSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebriskHashesSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->hashPrefix = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->threatTypes = [
        WebriskHashesSearchThreatTypesEnum::UNWANTED_SOFTWARE,
        WebriskHashesSearchThreatTypesEnum::MALWARE,
        WebriskHashesSearchThreatTypesEnum::SOCIAL_ENGINEERING,
    ];
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new WebriskHashesSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->hashes->webriskHashesSearch($request, $requestSecurity);

    if ($response->googleCloudWebriskV1SearchHashesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->