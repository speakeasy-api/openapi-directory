# reports

### Available Operations

* [adsensehostReportsGenerate](#adsensehostreportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

## adsensehostReportsGenerate

Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostReportsGenerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostReportsGenerateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostReportsGenerateRequest();
    $request->alt = AltEnum::CSV;
    $request->dimension = [
        'sunt',
        'ullam',
    ];
    $request->endDate = 'nam';
    $request->fields = 'hic';
    $request->filter = [
        'cumque',
    ];
    $request->key = 'soluta';
    $request->locale = 'nobis';
    $request->maxResults = 92596;
    $request->metric = [
        'ipsum',
        'veritatis',
        'nobis',
        'quos',
    ];
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->sort = [
        'delectus',
    ];
    $request->startDate = 'dolorem';
    $request->startIndex = 292147;
    $request->userIp = 'labore';

    $requestSecurity = new AdsensehostReportsGenerateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->adsensehostReportsGenerate($request, $requestSecurity);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
