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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->dimensionValueRequest = new DimensionValueRequest();
    $request->dimensionValueRequest->dimensionName = 'explicabo';
    $request->dimensionValueRequest->endDate = DateTime::createFromFormat('Y-m-d', '2022-06-18');
    $request->dimensionValueRequest->filters = [
        new DimensionFilter(),
        new DimensionFilter(),
        new DimensionFilter(),
        new DimensionFilter(),
    ];
    $request->dimensionValueRequest->kind = 'pariatur';
    $request->dimensionValueRequest->startDate = DateTime::createFromFormat('Y-m-d', '2022-05-15');
    $request->accessToken = 'iste';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nam';
    $request->fields = 'animi';
    $request->key = 'labore';
    $request->maxResults = 455400;
    $request->oauthToken = 'voluptatibus';
    $request->pageToken = 'quam';
    $request->prettyPrint = false;
    $request->profileId = 'nulla';
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'a';

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
