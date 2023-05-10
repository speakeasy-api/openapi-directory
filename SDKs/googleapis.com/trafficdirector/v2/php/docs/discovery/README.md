# discovery

### Available Operations

* [trafficdirectorDiscoveryClientStatus](#trafficdirectordiscoveryclientstatus)

## trafficdirectorDiscoveryClientStatus

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TrafficdirectorDiscoveryClientStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClientStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\NodeMatcher;
use \OpenAPI\OpenAPI\Models\Shared\StringMatcher;
use \OpenAPI\OpenAPI\Models\Shared\RegexMatcher;
use \OpenAPI\OpenAPI\Models\Shared\GoogleRe2;
use \OpenAPI\OpenAPI\Models\Shared\StructMatcher;
use \OpenAPI\OpenAPI\Models\Shared\PathSegment;
use \OpenAPI\OpenAPI\Models\Shared\ValueMatcher;
use \OpenAPI\OpenAPI\Models\Shared\DoubleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\DoubleRange;
use \OpenAPI\OpenAPI\Models\Shared\ListMatcher;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TrafficdirectorDiscoveryClientStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrafficdirectorDiscoveryClientStatusRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->clientStatusRequest = new ClientStatusRequest();
    $request->clientStatusRequest->nodeMatchers = [
        new NodeMatcher(),
        new NodeMatcher(),
    ];
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'delectus';
    $request->key = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new TrafficdirectorDiscoveryClientStatusSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->discovery->trafficdirectorDiscoveryClientStatus($request, $requestSecurity);

    if ($response->clientStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
