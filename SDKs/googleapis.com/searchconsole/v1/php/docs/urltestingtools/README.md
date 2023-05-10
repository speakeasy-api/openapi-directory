# urlTestingTools

### Available Operations

* [searchconsoleUrlTestingToolsMobileFriendlyTestRun](#searchconsoleurltestingtoolsmobilefriendlytestrun) - Runs Mobile-Friendly Test for a given URL.

## searchconsoleUrlTestingToolsMobileFriendlyTestRun

Runs Mobile-Friendly Test for a given URL.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunMobileFriendlyTestRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runMobileFriendlyTestRequest = new RunMobileFriendlyTestRequest();
    $request->runMobileFriendlyTestRequest->requestScreenshot = false;
    $request->runMobileFriendlyTestRequest->url = 'reprehenderit';
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'corporis';
    $request->key = 'dolore';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'enim';

    $response = $sdk->urlTestingTools->searchconsoleUrlTestingToolsMobileFriendlyTestRun($request);

    if ($response->runMobileFriendlyTestResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
