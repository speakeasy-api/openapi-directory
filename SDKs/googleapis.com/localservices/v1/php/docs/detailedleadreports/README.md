# detailedLeadReports

### Available Operations

* [localservicesDetailedLeadReportsSearch](#localservicesdetailedleadreportssearch) - Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

## localservicesDetailedLeadReportsSearch

Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LocalservicesDetailedLeadReportsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LocalservicesDetailedLeadReportsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LocalservicesDetailedLeadReportsSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->endDateDay = 799159;
    $request->endDateMonth = 800911;
    $request->endDateYear = 461479;
    $request->fields = 'totam';
    $request->key = 'porro';
    $request->oauthToken = 'dolorum';
    $request->pageSize = 118274;
    $request->pageToken = 'nam';
    $request->prettyPrint = false;
    $request->query = 'officia';
    $request->quotaUser = 'occaecati';
    $request->startDateDay = 143353;
    $request->startDateMonth = 537373;
    $request->startDateYear = 944669;
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new LocalservicesDetailedLeadReportsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->detailedLeadReports->localservicesDetailedLeadReportsSearch($request, $requestSecurity);

    if ($response->googleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
