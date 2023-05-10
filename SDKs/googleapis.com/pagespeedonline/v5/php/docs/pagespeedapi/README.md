# pagespeedapi

### Available Operations

* [pagespeedonlinePagespeedapiRunpagespeed](#pagespeedonlinepagespeedapirunpagespeed) - Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.

## pagespeedonlinePagespeedapiRunpagespeed

Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.

### Example Usage

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
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->captchaToken = 'nisi';
    $request->category = [
        PagespeedonlinePagespeedapiRunpagespeedCategoryEnum::SEO,
        PagespeedonlinePagespeedapiRunpagespeedCategoryEnum::CATEGORY_UNSPECIFIED,
        PagespeedonlinePagespeedapiRunpagespeedCategoryEnum::BEST_PRACTICES,
        PagespeedonlinePagespeedapiRunpagespeedCategoryEnum::CATEGORY_UNSPECIFIED,
    ];
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->locale = 'ipsam';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->strategy = PagespeedonlinePagespeedapiRunpagespeedStrategyEnum::MOBILE;
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'at';
    $request->url = 'at';
    $request->utmCampaign = 'maiores';
    $request->utmSource = 'molestiae';

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
