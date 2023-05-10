# v1

### Available Operations

* [firebasedynamiclinksGetLinkStats](#firebasedynamiclinksgetlinkstats) - Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
* [firebasedynamiclinksInstallAttribution](#firebasedynamiclinksinstallattribution) - Get iOS strong/weak-match info for post-install attribution.
* [firebasedynamiclinksReopenAttribution](#firebasedynamiclinksreopenattribution) - Get iOS reopen attribution for app universal link open deeplinking.

## firebasedynamiclinksGetLinkStats

Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedynamiclinksGetLinkStatsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedynamiclinksGetLinkStatsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasedynamiclinksGetLinkStatsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->durationDays = 'voluptatibus';
    $request->dynamicLink = 'vero';
    $request->fields = 'nihil';
    $request->key = 'praesentium';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->sdkVersion = 'omnis';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new FirebasedynamiclinksGetLinkStatsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->firebasedynamiclinksGetLinkStats($request, $requestSecurity);

    if ($response->dynamicLinkStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasedynamiclinksInstallAttribution

Get iOS strong/weak-match info for post-install attribution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedynamiclinksInstallAttributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIosPostInstallAttributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GetIosPostInstallAttributionRequestRetrievalMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIosPostInstallAttributionRequestVisualStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedynamiclinksInstallAttributionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasedynamiclinksInstallAttributionRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->getIosPostInstallAttributionRequest = new GetIosPostInstallAttributionRequest();
    $request->getIosPostInstallAttributionRequest->appInstallationTime = 'doloremque';
    $request->getIosPostInstallAttributionRequest->bundleId = 'reprehenderit';
    $request->getIosPostInstallAttributionRequest->device = new DeviceInfo();
    $request->getIosPostInstallAttributionRequest->device->deviceModelName = 'ut';
    $request->getIosPostInstallAttributionRequest->device->languageCode = 'maiores';
    $request->getIosPostInstallAttributionRequest->device->languageCodeFromWebview = 'dicta';
    $request->getIosPostInstallAttributionRequest->device->languageCodeRaw = 'corporis';
    $request->getIosPostInstallAttributionRequest->device->screenResolutionHeight = 'dolore';
    $request->getIosPostInstallAttributionRequest->device->screenResolutionWidth = 'iusto';
    $request->getIosPostInstallAttributionRequest->device->timezone = 'dicta';
    $request->getIosPostInstallAttributionRequest->iosVersion = 'harum';
    $request->getIosPostInstallAttributionRequest->retrievalMethod = GetIosPostInstallAttributionRequestRetrievalMethodEnum::IMPLICIT_WEAK_MATCH;
    $request->getIosPostInstallAttributionRequest->sdkVersion = 'accusamus';
    $request->getIosPostInstallAttributionRequest->uniqueMatchLinkToCheck = 'commodi';
    $request->getIosPostInstallAttributionRequest->visualStyle = GetIosPostInstallAttributionRequestVisualStyleEnum::CUSTOM_STYLE;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->fields = 'molestias';
    $request->key = 'excepturi';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new FirebasedynamiclinksInstallAttributionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->firebasedynamiclinksInstallAttribution($request, $requestSecurity);

    if ($response->getIosPostInstallAttributionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasedynamiclinksReopenAttribution

Get iOS reopen attribution for app universal link open deeplinking.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedynamiclinksReopenAttributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIosReopenAttributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedynamiclinksReopenAttributionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasedynamiclinksReopenAttributionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->getIosReopenAttributionRequest = new GetIosReopenAttributionRequest();
    $request->getIosReopenAttributionRequest->bundleId = 'quasi';
    $request->getIosReopenAttributionRequest->requestedLink = 'repudiandae';
    $request->getIosReopenAttributionRequest->sdkVersion = 'sint';
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->fields = 'enim';
    $request->key = 'consequatur';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new FirebasedynamiclinksReopenAttributionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->firebasedynamiclinksReopenAttribution($request, $requestSecurity);

    if ($response->getIosReopenAttributionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
