# data

### Available Operations

* [analyticsDataGet](#analyticsdataget) - Returns Analytics report data for a view (profile).

## analyticsDataGet

Returns Analytics report data for a view (profile).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsDataGetRequest();
    $request->alt = AltEnum::ATOM;
    $request->dimensions = 'ipsa';
    $request->endDate = 'delectus';
    $request->fields = 'tempora';
    $request->filters = 'suscipit';
    $request->ids = 'molestiae';
    $request->key = 'minus';
    $request->maxResults = 812169;
    $request->metrics = 'voluptatum';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->segment = 'nisi';
    $request->sort = 'recusandae';
    $request->startDate = 'temporibus';
    $request->startIndex = 71036;
    $request->userIp = 'quis';

    $requestSecurity = new AnalyticsDataGetSecurity();
    $requestSecurity->option1 = new AnalyticsDataGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->data->analyticsDataGet($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
