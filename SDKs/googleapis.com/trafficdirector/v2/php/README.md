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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->clientStatusRequest = new ClientStatusRequest();
    $request->clientStatusRequest->nodeMatchers = [
        new NodeMatcher(),
        new NodeMatcher(),
        new NodeMatcher(),
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'deserunt';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [discovery](docs/discovery/README.md)

* [trafficdirectorDiscoveryClientStatus](docs/discovery/README.md#trafficdirectordiscoveryclientstatus)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
