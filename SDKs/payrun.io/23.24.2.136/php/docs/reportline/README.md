# reportLine

### Available Operations

* [getReportLineFromEmployer](#getreportlinefromemployer) - Gets the specified report line from the employer
* [getReportLinesFromEmployer](#getreportlinesfromemployer) - Gets the report lines from the specified employer
* [getReportLinesFromPayRun](#getreportlinesfrompayrun) - Gets the report lines from the specified pay run

## getReportLineFromEmployer

Returns the specified pay line from employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReportLineFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportLineFromEmployerRequest();
    $request->apiVersion = 'enim';
    $request->authorization = 'voluptate';
    $request->employerId = 'similique';
    $request->reportLineId = 'minima';

    $response = $sdk->reportLine->getReportLineFromEmployer($request);

    if ($response->reportLine !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportLinesFromEmployer

Get links to all report lines for the specified employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReportLinesFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportLinesFromEmployerRequest();
    $request->apiVersion = 'libero';
    $request->authorization = 'magnam';
    $request->employerId = 'sit';

    $response = $sdk->reportLine->getReportLinesFromEmployer($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportLinesFromPayRun

Returns all report lines associated with the specified pay run

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReportLinesFromPayRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportLinesFromPayRunRequest();
    $request->apiVersion = 'modi';
    $request->authorization = 'eum';
    $request->employerId = 'nesciunt';
    $request->payRunId = 'mollitia';
    $request->payScheduleId = 'dignissimos';

    $response = $sdk->reportLine->getReportLinesFromPayRun($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
