# reports

### Available Operations

* [reportsCreate](#reportscreate) - Create a new report.
* [reportsList](#reportslist) - Get user report list.
* [reportsRead](#reportsread) - Get report details.

## reportsCreate

This POST-Method creates a new report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReportRequest();
    $request->fileId = 'df7cc78c-a1ba-4928-bc81-6742cb739205';
    $request->process = 'natus';

    $response = $sdk->reports->reportsCreate($request);

    if ($response->reportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reportsList

This GET method lists the user's reports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->reports->reportsList();

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reportsRead

This GET-Method returns the details of a specific report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReportsReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReportsReadRequest();
    $request->reportNumber = 'sed';

    $response = $sdk->reports->reportsRead($request);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
