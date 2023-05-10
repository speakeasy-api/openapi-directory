# v2

### Available Operations

* [getDiscoveryV2Suggest](#getdiscoveryv2suggest) - Find Suggest

## getDiscoveryV2Suggest

Find search suggestions and filter your suggestions by location, source, etc.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2SuggestRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2SuggestIncludeFuzzyEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2SuggestIncludeLicensedContentEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2SuggestIncludeSpellcheckEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2SuggestIncludeTbaEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2SuggestIncludeTbdEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2SuggestSourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2SuggestUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiscoveryV2SuggestRequest();
    $request->clientVisibility = 'quae';
    $request->countryCode = 'AI';
    $request->geoPoint = 'quas';
    $request->includeFuzzy = GetDiscoveryV2SuggestIncludeFuzzyEnum::NO;
    $request->includeLicensedContent = GetDiscoveryV2SuggestIncludeLicensedContentEnum::YES;
    $request->includeSpellcheck = GetDiscoveryV2SuggestIncludeSpellcheckEnum::NO;
    $request->includeTBA = GetDiscoveryV2SuggestIncludeTbaEnum::ONLY;
    $request->includeTBD = GetDiscoveryV2SuggestIncludeTbdEnum::ONLY;
    $request->keyword = 'doloribus';
    $request->latlong = 'ut';
    $request->locale = 'facilis';
    $request->radius = 'cupiditate';
    $request->segmentId = 'qui';
    $request->size = 'quae';
    $request->source = GetDiscoveryV2SuggestSourceEnum::FRONTGATE;
    $request->unit = GetDiscoveryV2SuggestUnitEnum::MILES;

    $response = $sdk->v2->getDiscoveryV2Suggest($request);

    if ($response->getDiscoveryV2Suggest200ApplicationHalPlusJsonString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
