# rootReports

## Overview

Report.

### Available Operations

* [getComplianceSummarySlav1](#getcompliancesummaryslav1) - Get compliance summary information
* [getComplianceSummaryV1](#getcompliancesummaryv1) - Get compliance summary information
* [setReportConfig](#setreportconfig) - Modify the report config

## getComplianceSummarySlav1

Returns the compliance summary information for all protected objects based on whether the last expected snapshot was successful. This requirement is based on the SLA Domain assigned to the objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetComplianceSummarySlav1Request;
use \OpenAPI\OpenAPI\Models\Operations\GetComplianceSummarySlav1SnapshotRangeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComplianceSummarySlav1Request();
    $request->snapshotRange = GetComplianceSummarySlav1SnapshotRangeEnum::LAST2_SNAPSHOTS;

    $response = $sdk->rootReports->getComplianceSummarySlav1($request);

    if ($response->complianceSummarySlav1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComplianceSummaryV1

Returns the compliance summary information for all protected objects based on a time-based requirement of at least one snapshot in each 24 hour report period. This view ignores the policies assigned to protected objects through SLA Domains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->rootReports->getComplianceSummaryV1();

    if ($response->complianceSummaryV1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setReportConfig

Set the different report config parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\ReportConfigPatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReportConfigPatch();
    $request->cleanupReportJobInstanceForLogJobs = 534175;

    $response = $sdk->rootReports->setReportConfig($request);

    if ($response->reportConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
