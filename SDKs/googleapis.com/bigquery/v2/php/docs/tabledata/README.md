# tabledata

### Available Operations

* [bigqueryTabledataInsertAll](#bigquerytabledatainsertall) - Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
* [bigqueryTabledataList](#bigquerytabledatalist) - Retrieves table data from a specified set of rows. Requires the READER dataset role.

## bigqueryTabledataInsertAll

Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTabledataInsertAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\TableDataInsertAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\TableDataInsertAllRequestRows;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTabledataInsertAllSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTabledataInsertAllSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTabledataInsertAllSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTabledataInsertAllSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryTabledataInsertAllRequest();
    $request->tableDataInsertAllRequest = new TableDataInsertAllRequest();
    $request->tableDataInsertAllRequest->ignoreUnknownValues = false;
    $request->tableDataInsertAllRequest->kind = 'ea';
    $request->tableDataInsertAllRequest->rows = [
        new TableDataInsertAllRequestRows(),
        new TableDataInsertAllRequestRows(),
        new TableDataInsertAllRequestRows(),
        new TableDataInsertAllRequestRows(),
    ];
    $request->tableDataInsertAllRequest->skipInvalidRows = false;
    $request->tableDataInsertAllRequest->templateSuffix = 'consectetur';
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'recusandae';
    $request->fields = 'aspernatur';
    $request->key = 'minima';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->projectId = 'a';
    $request->quotaUser = 'libero';
    $request->tableId = 'aut';
    $request->userIp = 'aut';

    $requestSecurity = new BigqueryTabledataInsertAllSecurity();
    $requestSecurity->option1 = new BigqueryTabledataInsertAllSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tabledata->bigqueryTabledataInsertAll($request, $requestSecurity);

    if ($response->tableDataInsertAllResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryTabledataList

Retrieves table data from a specified set of rows. Requires the READER dataset role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTabledataListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTabledataListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTabledataListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTabledataListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryTabledataListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryTabledataListRequest();
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'deleniti';
    $request->fields = 'impedit';
    $request->key = 'aliquam';
    $request->maxResults = 146946;
    $request->oauthToken = 'accusamus';
    $request->pageToken = 'inventore';
    $request->prettyPrint = false;
    $request->projectId = 'non';
    $request->quotaUser = 'et';
    $request->selectedFields = 'dolorum';
    $request->startIndex = 'laborum';
    $request->tableId = 'placeat';
    $request->userIp = 'velit';

    $requestSecurity = new BigqueryTabledataListSecurity();
    $requestSecurity->option1 = new BigqueryTabledataListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tabledata->bigqueryTabledataList($request, $requestSecurity);

    if ($response->tableDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
