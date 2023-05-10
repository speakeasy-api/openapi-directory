# reports

## Overview

The reports API let you group checks into a single report and download the result as a PDF or CSV file.
It is also possible to upload a group of backgrounds check to be performed in batch and get a report about them later.

### Available Operations

* [batchUpload](#batchupload) - Batch Upload
* [createReport](#createreport) - Create Report
* [getReport](#getreport) - Get Report
* [listReports](#listreports) - List Reports

## batchUpload

Upload multiple checks and associate them to the report. The inputs for these checks must be sent in an xlsx file, please use the following templates:

**Person:** [Chile](https://app.truora.com/files/person/person-input-cl.xlsx), [Colombia](https://app.truora.com/files/person/person-input-co.xlsx), [Mexico](https://app.truora.com/files/person/person-input-mx.xlsx), [Peru](https://app.truora.com/files/person/person-input-pe.xlsx), [Costa Rica](https://app.truora.com/files/person/person-input-cr.xlsx), [Brazil](https://app.truora.com/files/person/person-input-br.xlsx)

**Vehicle:** [Chile](https://app.truora.com/files/vehicle/vehicle-input-cl.xlsx), [Colombia](https://app.truora.com/files/vehicle/vehicle-input-co.xlsx), [Mexico](https://app.truora.com/files/vehicle/vehicle-input-mx.xlsx), [Peru](https://app.truora.com/files/vehicle/vehicle-input-pe.xlsx)

**Company** [Colombia](https://app.truora.com/files/company/company-input-co.xlsx), [Mexico](https://app.truora.com/files/company/company-input-mx.xlsx), [Brazil](https://app.truora.com/files/company/company-input-br.xlsx)

Keep in mind that we currently do not support batch uploads for custom check types. Background checks created by batch upload are processed with low priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchUploadInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchUploadRequest();
    $request->batchUploadInput = new BatchUploadInput();
    $request->batchUploadInput->file = [
        'voluptatibus',
        'ipsa',
        'omnis',
    ];
    $request->reportId = 'voluptate';

    $requestSecurity = new BatchUploadSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->reports->batchUpload($request, $requestSecurity);

    if ($response->reportOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createReport

Creates a Report to which it is possible to associate multiple Checks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateReportInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateReportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReportInput();
    $request->name = 'Thomas Batz';

    $requestSecurity = new CreateReportSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->reports->createReport($request, $requestSecurity);

    if ($response->reportOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReport

Returns a report with the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetReportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportRequest();
    $request->reportId = 'maiores';

    $requestSecurity = new GetReportSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->reports->getReport($request, $requestSecurity);

    if ($response->reportOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReports

Lists all reports asociated with the client or user requesting.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReportsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReportsRequest();
    $request->startKey = 'dicta';
    $request->username = 'Floy.Gulgowski';

    $response = $sdk->reports->listReports($request);

    if ($response->reportsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
