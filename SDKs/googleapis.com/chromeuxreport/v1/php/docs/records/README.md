# records

### Available Operations

* [chromeuxreportRecordsQueryHistoryRecord](#chromeuxreportrecordsqueryhistoryrecord) - Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.
* [chromeuxreportRecordsQueryRecord](#chromeuxreportrecordsqueryrecord) - Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.

## chromeuxreportRecordsQueryHistoryRecord

Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromeuxreportRecordsQueryHistoryRecordRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\QueryHistoryRequestFormFactorEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromeuxreportRecordsQueryHistoryRecordRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->queryHistoryRequest = new QueryHistoryRequest();
    $request->queryHistoryRequest->formFactor = QueryHistoryRequestFormFactorEnum::PHONE;
    $request->queryHistoryRequest->metrics = [
        'minus',
        'placeat',
    ];
    $request->queryHistoryRequest->origin = 'voluptatum';
    $request->queryHistoryRequest->url = 'iusto';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'temporibus';
    $request->key = 'ab';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'perferendis';

    $response = $sdk->records->chromeuxreportRecordsQueryHistoryRecord($request);

    if ($response->queryHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromeuxreportRecordsQueryRecord

Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromeuxreportRecordsQueryRecordRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\QueryRequestFormFactorEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromeuxreportRecordsQueryRecordRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->queryRequest = new QueryRequest();
    $request->queryRequest->effectiveConnectionType = 'repellendus';
    $request->queryRequest->formFactor = QueryRequestFormFactorEnum::TABLET;
    $request->queryRequest->metrics = [
        'odit',
        'at',
        'at',
        'maiores',
    ];
    $request->queryRequest->origin = 'molestiae';
    $request->queryRequest->url = 'quod';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'porro';
    $request->key = 'dolorum';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'occaecati';

    $response = $sdk->records->chromeuxreportRecordsQueryRecord($request);

    if ($response->queryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
