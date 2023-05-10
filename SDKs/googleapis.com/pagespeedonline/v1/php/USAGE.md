<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PagespeedonlinePagespeedapiRunpagespeedRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PagespeedonlinePagespeedapiRunpagespeedRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'corrupti';
    $request->filterThirdPartyResources = false;
    $request->key = 'provident';
    $request->locale = 'distinctio';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'unde';
    $request->rule = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->screenshot = false;
    $request->strategy = PagespeedonlinePagespeedapiRunpagespeedStrategyEnum::MOBILE;
    $request->url = 'suscipit';
    $request->userIp = 'iure';

    $response = $sdk->pagespeedapi->pagespeedonlinePagespeedapiRunpagespeed($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->