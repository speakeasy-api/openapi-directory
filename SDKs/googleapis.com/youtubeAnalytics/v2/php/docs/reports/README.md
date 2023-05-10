# reports

### Available Operations

* [youtubeAnalyticsReportsQuery](#youtubeanalyticsreportsquery) - Retrieve your YouTube Analytics reports.

## youtubeAnalyticsReportsQuery

Retrieve your YouTube Analytics reports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsReportsQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsReportsQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsReportsQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsReportsQuerySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsReportsQuerySecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsReportsQuerySecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsReportsQuerySecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeAnalyticsReportsQueryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'adipisci';
    $request->currency = 'asperiores';
    $request->dimensions = 'earum';
    $request->endDate = 'modi';
    $request->fields = 'iste';
    $request->filters = 'dolorum';
    $request->ids = 'deleniti';
    $request->includeHistoricalChannelData = false;
    $request->key = 'pariatur';
    $request->maxResults = 589910;
    $request->metrics = 'nobis';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->sort = 'quaerat';
    $request->startDate = 'quos';
    $request->startIndex = 398221;
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new YoutubeAnalyticsReportsQuerySecurity();
    $requestSecurity->option1 = new YoutubeAnalyticsReportsQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->youtubeAnalyticsReportsQuery($request, $requestSecurity);

    if ($response->queryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
