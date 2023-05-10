# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [pagespeedapi](docs/pagespeedapi/README.md)

* [pagespeedonlinePagespeedapiRunpagespeed](docs/pagespeedapi/README.md#pagespeedonlinepagespeedapirunpagespeed) - Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
