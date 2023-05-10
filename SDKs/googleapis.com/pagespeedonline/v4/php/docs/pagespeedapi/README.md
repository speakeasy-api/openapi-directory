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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PagespeedonlinePagespeedapiRunpagespeedRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'ipsa';
    $request->filterThirdPartyResources = false;
    $request->key = 'delectus';
    $request->locale = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->rule = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];
    $request->screenshot = false;
    $request->snapshots = false;
    $request->strategy = PagespeedonlinePagespeedapiRunpagespeedStrategyEnum::DESKTOP;
    $request->url = 'recusandae';
    $request->userIp = 'temporibus';
    $request->utmCampaign = 'ab';
    $request->utmSource = 'quis';

    $response = $sdk->pagespeedapi->pagespeedonlinePagespeedapiRunpagespeed($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
