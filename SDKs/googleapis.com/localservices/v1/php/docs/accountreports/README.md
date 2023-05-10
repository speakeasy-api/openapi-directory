# accountReports

### Available Operations

* [localservicesAccountReportsSearch](#localservicesaccountreportssearch) - Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

## localservicesAccountReportsSearch

Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LocalservicesAccountReportsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LocalservicesAccountReportsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LocalservicesAccountReportsSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatum';
    $request->endDateDay = 479977;
    $request->endDateMonth = 568045;
    $request->endDateYear = 392785;
    $request->fields = 'recusandae';
    $request->key = 'temporibus';
    $request->oauthToken = 'ab';
    $request->pageSize = 337396;
    $request->pageToken = 'veritatis';
    $request->prettyPrint = false;
    $request->query = 'deserunt';
    $request->quotaUser = 'perferendis';
    $request->startDateDay = 368241;
    $request->startDateMonth = 832620;
    $request->startDateYear = 957156;
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new LocalservicesAccountReportsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountReports->localservicesAccountReportsSearch($request, $requestSecurity);

    if ($response->googleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
