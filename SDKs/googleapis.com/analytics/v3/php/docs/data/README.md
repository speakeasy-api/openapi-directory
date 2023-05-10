# data

### Available Operations

* [analyticsDataGaGet](#analyticsdatagaget) - Returns Analytics data for a view (profile).
* [analyticsDataMcfGet](#analyticsdatamcfget) - Returns Analytics Multi-Channel Funnels data for a view (profile).
* [analyticsDataRealtimeGet](#analyticsdatarealtimeget) - Returns real time data for a view (profile).

## analyticsDataGaGet

Returns Analytics data for a view (profile).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetOutputEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetSamplingLevelEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsDataGaGetRequest();
    $request->alt = AltEnum::JSON;
    $request->dimensions = 'tempora';
    $request->endDate = 'suscipit';
    $request->fields = 'molestiae';
    $request->filters = 'minus';
    $request->ids = 'placeat';
    $request->includeEmptyRows = false;
    $request->key = 'voluptatum';
    $request->maxResults = 479977;
    $request->metrics = 'excepturi';
    $request->oauthToken = 'nisi';
    $request->output = AnalyticsDataGaGetOutputEnum::JSON;
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->samplingLevel = AnalyticsDataGaGetSamplingLevelEnum::DEFAULT;
    $request->segment = 'quis';
    $request->sort = 'veritatis';
    $request->startDate = 'deserunt';
    $request->startIndex = 20218;
    $request->userIp = 'ipsam';

    $requestSecurity = new AnalyticsDataGaGetSecurity();
    $requestSecurity->option1 = new AnalyticsDataGaGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->data->analyticsDataGaGet($request, $requestSecurity);

    if ($response->gaData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsDataMcfGet

Returns Analytics Multi-Channel Funnels data for a view (profile).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataMcfGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataMcfGetSamplingLevelEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataMcfGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataMcfGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataMcfGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsDataMcfGetRequest();
    $request->alt = AltEnum::JSON;
    $request->dimensions = 'repellendus';
    $request->endDate = 'sapiente';
    $request->fields = 'quo';
    $request->filters = 'odit';
    $request->ids = 'at';
    $request->key = 'at';
    $request->maxResults = 978619;
    $request->metrics = 'molestiae';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->samplingLevel = AnalyticsDataMcfGetSamplingLevelEnum::FASTER;
    $request->sort = 'totam';
    $request->startDate = 'porro';
    $request->startIndex = 678880;
    $request->userIp = 'dicta';

    $requestSecurity = new AnalyticsDataMcfGetSecurity();
    $requestSecurity->option1 = new AnalyticsDataMcfGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->data->analyticsDataMcfGet($request, $requestSecurity);

    if ($response->mcfData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsDataRealtimeGet

Returns real time data for a view (profile).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataRealtimeGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataRealtimeGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataRealtimeGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataRealtimeGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsDataRealtimeGetRequest();
    $request->alt = AltEnum::JSON;
    $request->dimensions = 'nam';
    $request->fields = 'officia';
    $request->filters = 'occaecati';
    $request->ids = 'fugit';
    $request->key = 'deleniti';
    $request->maxResults = 944669;
    $request->metrics = 'optio';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->sort = 'commodi';
    $request->userIp = 'molestiae';

    $requestSecurity = new AnalyticsDataRealtimeGetSecurity();
    $requestSecurity->option1 = new AnalyticsDataRealtimeGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->data->analyticsDataRealtimeGet($request, $requestSecurity);

    if ($response->realtimeData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
