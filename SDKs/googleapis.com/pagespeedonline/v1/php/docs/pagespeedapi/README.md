# pagespeedapi

### Available Operations

* [pagespeedonlinePagespeedapiRunpagespeed](#pagespeedonlinepagespeedapirunpagespeed) - Runs PageSpeed analysis on the page at the specified URL, and returns a PageSpeed score, a list of suggestions to make that page faster, and other information.

## pagespeedonlinePagespeedapiRunpagespeed

Runs PageSpeed analysis on the page at the specified URL, and returns a PageSpeed score, a list of suggestions to make that page faster, and other information.

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
    $request->fields = 'magnam';
    $request->filterThirdPartyResources = false;
    $request->key = 'debitis';
    $request->locale = 'ipsa';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->rule = [
        'molestiae',
        'minus',
    ];
    $request->screenshot = false;
    $request->strategy = PagespeedonlinePagespeedapiRunpagespeedStrategyEnum::MOBILE;
    $request->url = 'voluptatum';
    $request->userIp = 'iusto';

    $response = $sdk->pagespeedapi->pagespeedonlinePagespeedapiRunpagespeed($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
