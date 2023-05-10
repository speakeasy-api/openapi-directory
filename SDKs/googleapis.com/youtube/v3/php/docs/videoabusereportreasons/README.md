# videoAbuseReportReasons

### Available Operations

* [youtubeVideoAbuseReportReasonsList](#youtubevideoabusereportreasonslist) - Retrieves a list of resources, possibly filtered.

## youtubeVideoAbuseReportReasonsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideoAbuseReportReasonsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideoAbuseReportReasonsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideoAbuseReportReasonsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideoAbuseReportReasonsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideoAbuseReportReasonsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeVideoAbuseReportReasonsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'optio';
    $request->hl = 'nobis';
    $request->key = 'ex';
    $request->oauthToken = 'repellat';
    $request->part = [
        'deleniti',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new YoutubeVideoAbuseReportReasonsListSecurity();
    $requestSecurity->option1 = new YoutubeVideoAbuseReportReasonsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videoAbuseReportReasons->youtubeVideoAbuseReportReasonsList($request, $requestSecurity);

    if ($response->videoAbuseReportReasonListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
