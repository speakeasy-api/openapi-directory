# uris

### Available Operations

* [webriskUrisSearch](#webriskurissearch) - This method is used to check whether a URI is on a given threatList. Multiple threatLists may be searched in a single query. The response will list all requested threatLists the URI was found to match. If the URI is not found on any of the requested ThreatList an empty response will be returned.

## webriskUrisSearch

This method is used to check whether a URI is on a given threatList. Multiple threatLists may be searched in a single query. The response will list all requested threatLists the URI was found to match. If the URI is not found on any of the requested ThreatList an empty response will be returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebriskUrisSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebriskUrisSearchThreatTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebriskUrisSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebriskUrisSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'temporibus';
    $request->key = 'laborum';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->threatTypes = [
        WebriskUrisSearchThreatTypesEnum::SOCIAL_ENGINEERING_EXTENDED_COVERAGE,
        WebriskUrisSearchThreatTypesEnum::SOCIAL_ENGINEERING,
        WebriskUrisSearchThreatTypesEnum::SOCIAL_ENGINEERING,
        WebriskUrisSearchThreatTypesEnum::SOCIAL_ENGINEERING_EXTENDED_COVERAGE,
    ];
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'omnis';
    $request->uri = 'http://shadowy-alfalfa.com';

    $requestSecurity = new WebriskUrisSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->uris->webriskUrisSearch($request, $requestSecurity);

    if ($response->googleCloudWebriskV1SearchUrisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
