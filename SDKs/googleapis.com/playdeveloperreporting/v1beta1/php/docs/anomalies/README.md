# anomalies

### Available Operations

* [playdeveloperreportingAnomaliesList](#playdeveloperreportinganomalieslist) - Lists anomalies in any of the datasets.

## playdeveloperreportingAnomaliesList

Lists anomalies in any of the datasets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlaydeveloperreportingAnomaliesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlaydeveloperreportingAnomaliesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaydeveloperreportingAnomaliesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->filter = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->pageSize = 528895;
    $request->pageToken = 'iusto';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new PlaydeveloperreportingAnomaliesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->anomalies->playdeveloperreportingAnomaliesList($request, $requestSecurity);

    if ($response->googlePlayDeveloperReportingV1beta1ListAnomaliesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
