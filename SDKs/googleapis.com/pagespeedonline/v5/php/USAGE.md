<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PagespeedonlinePagespeedapiRunpagespeedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PagespeedonlinePagespeedapiRunpagespeedCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;
use \OpenAPI\OpenAPI\Models\Operations\PagespeedonlinePagespeedapiRunpagespeedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PagespeedonlinePagespeedapiRunpagespeedRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->captchaToken = 'unde';
    $request->category = [
        PagespeedonlinePagespeedapiRunpagespeedCategoryEnum::PERFORMANCE,
        PagespeedonlinePagespeedapiRunpagespeedCategoryEnum::SEO,
        PagespeedonlinePagespeedapiRunpagespeedCategoryEnum::BEST_PRACTICES,
        PagespeedonlinePagespeedapiRunpagespeedCategoryEnum::PERFORMANCE,
    ];
    $request->fields = 'deserunt';
    $request->key = 'suscipit';
    $request->locale = 'iure';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->strategy = PagespeedonlinePagespeedapiRunpagespeedStrategyEnum::STRATEGY_UNSPECIFIED;
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'tempora';
    $request->url = 'suscipit';
    $request->utmCampaign = 'molestiae';
    $request->utmSource = 'minus';

    $requestSecurity = new PagespeedonlinePagespeedapiRunpagespeedSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pagespeedapi->pagespeedonlinePagespeedapiRunpagespeed($request, $requestSecurity);

    if ($response->pagespeedApiPagespeedResponseV5 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->