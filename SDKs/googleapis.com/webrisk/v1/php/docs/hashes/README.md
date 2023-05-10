# hashes

### Available Operations

* [webriskHashesSearch](#webriskhashessearch) - Gets the full hashes that match the requested hash prefix. This is used after a hash prefix is looked up in a threatList and there is a match. The client side threatList only holds partial hashes so the client must query this method to determine if there is a full hash match of a threat.

## webriskHashesSearch

Gets the full hashes that match the requested hash prefix. This is used after a hash prefix is looked up in a threatList and there is a match. The client side threatList only holds partial hashes so the client must query this method to determine if there is a full hash match of a threat.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebriskHashesSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebriskHashesSearchThreatTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebriskHashesSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebriskHashesSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->hashPrefix = 'minus';
    $request->key = 'placeat';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->threatTypes = [
        WebriskHashesSearchThreatTypesEnum::MALWARE,
        WebriskHashesSearchThreatTypesEnum::SOCIAL_ENGINEERING_EXTENDED_COVERAGE,
        WebriskHashesSearchThreatTypesEnum::SOCIAL_ENGINEERING_EXTENDED_COVERAGE,
    ];
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new WebriskHashesSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->hashes->webriskHashesSearch($request, $requestSecurity);

    if ($response->googleCloudWebriskV1SearchHashesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
