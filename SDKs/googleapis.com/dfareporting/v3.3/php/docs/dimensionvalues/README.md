# dimensionValues

### Available Operations

* [dfareportingDimensionValuesQuery](#dfareportingdimensionvaluesquery) - Retrieves list of report dimension values for a list of filters.

## dfareportingDimensionValuesQuery

Retrieves list of report dimension values for a list of filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDimensionValuesQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueRequest;
use \OpenAPI\OpenAPI\Models\Shared\DimensionFilter;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDimensionValuesQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingDimensionValuesQueryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->dimensionValueRequest = new DimensionValueRequest();
    $request->dimensionValueRequest->dimensionName = 'maiores';
    $request->dimensionValueRequest->endDate = DateTime::createFromFormat('Y-m-d', '2022-07-28');
    $request->dimensionValueRequest->filters = [
        new DimensionFilter(),
        new DimensionFilter(),
        new DimensionFilter(),
        new DimensionFilter(),
    ];
    $request->dimensionValueRequest->kind = 'accusamus';
    $request->dimensionValueRequest->startDate = DateTime::createFromFormat('Y-m-d', '2022-12-24');
    $request->accessToken = 'sed';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptates';
    $request->fields = 'provident';
    $request->key = 'maiores';
    $request->maxResults = 311449;
    $request->oauthToken = 'numquam';
    $request->pageToken = 'non';
    $request->prettyPrint = false;
    $request->profileId = 'cum';
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new DfareportingDimensionValuesQuerySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->dimensionValues->dfareportingDimensionValuesQuery($request, $requestSecurity);

    if ($response->dimensionValueList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
