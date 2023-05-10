# reports

### Available Operations

* [reportsIndex](#reportsindex) - Gets the daily report.
* [getVVersionReportsStartDateToEndDateReportType](#getvversionreportsstartdatetoenddatereporttype) - Gets the daily report.

## reportsIndex

Get's the report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReportsIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReportsIndexRequest();
    $request->endDate = 'iure';
    $request->page = 297534;
    $request->pageSize = 891773;
    $request->reportSubTypeId = 56713;
    $request->reportType = 'delectus';
    $request->sites = 'tempora';
    $request->startDate = 'suscipit';
    $request->version = 'molestiae';

    $response = $sdk->reports->reportsIndex($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVVersionReportsStartDateToEndDateReportType

Get's the report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVVersionReportsStartDateToEndDateReportTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVVersionReportsStartDateToEndDateReportTypeRequest();
    $request->endDate = 'minus';
    $request->page = 812169;
    $request->pageSize = 528895;
    $request->reportSubTypeId = 479977;
    $request->reportType = 'excepturi';
    $request->sites = 'nisi';
    $request->startDate = 'recusandae';
    $request->version = 'temporibus';

    $response = $sdk->reports->getVVersionReportsStartDateToEndDateReportType($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
