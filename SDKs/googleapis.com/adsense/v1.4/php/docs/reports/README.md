# reports

### Available Operations

* [adsenseReportsGenerate](#adsensereportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* [adsenseReportsSavedGenerate](#adsensereportssavedgenerate) - Generate an AdSense report based on the saved report ID sent in the query parameters.
* [adsenseReportsSavedList](#adsensereportssavedlist) - List all saved reports in this AdSense account.

## adsenseReportsGenerate

Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseReportsGenerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseReportsGenerateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseReportsGenerateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseReportsGenerateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseReportsGenerateRequest();
    $request->accountId = [
        'quo',
    ];
    $request->alt = AltEnum::JSON;
    $request->currency = 'pariatur';
    $request->dimension = [
        'ea',
        'excepturi',
        'odit',
        'ea',
    ];
    $request->endDate = 'accusantium';
    $request->fields = 'ab';
    $request->filter = [
        'quidem',
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->key = 'nam';
    $request->locale = 'eaque';
    $request->maxResults = 866383;
    $request->metric = [
        'voluptatibus',
        'perferendis',
    ];
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->sort = [
        'cumque',
    ];
    $request->startDate = 'corporis';
    $request->startIndex = 944124;
    $request->useTimezoneReporting = false;
    $request->userIp = 'libero';

    $requestSecurity = new AdsenseReportsGenerateSecurity();
    $requestSecurity->option1 = new AdsenseReportsGenerateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->adsenseReportsGenerate($request, $requestSecurity);

    if ($response->adsenseReportsGenerateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseReportsSavedGenerate

Generate an AdSense report based on the saved report ID sent in the query parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseReportsSavedGenerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseReportsSavedGenerateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseReportsSavedGenerateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseReportsSavedGenerateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseReportsSavedGenerateRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'dolores';
    $request->key = 'quis';
    $request->locale = 'totam';
    $request->maxResults = 489549;
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->savedReportId = 'nesciunt';
    $request->startIndex = 179490;
    $request->userIp = 'perferendis';

    $requestSecurity = new AdsenseReportsSavedGenerateSecurity();
    $requestSecurity->option1 = new AdsenseReportsSavedGenerateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->adsenseReportsSavedGenerate($request, $requestSecurity);

    if ($response->adsenseReportsGenerateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseReportsSavedList

List all saved reports in this AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseReportsSavedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseReportsSavedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseReportsSavedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseReportsSavedListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseReportsSavedListRequest();
    $request->alt = AltEnum::CSV;
    $request->fields = 'minus';
    $request->key = 'quam';
    $request->maxResults = 223924;
    $request->oauthToken = 'vero';
    $request->pageToken = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->userIp = 'recusandae';

    $requestSecurity = new AdsenseReportsSavedListSecurity();
    $requestSecurity->option1 = new AdsenseReportsSavedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->adsenseReportsSavedList($request, $requestSecurity);

    if ($response->savedReports !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
