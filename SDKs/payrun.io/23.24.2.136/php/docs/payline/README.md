# payLine

### Available Operations

* [getAllPayLineTags](#getallpaylinetags) - Get all pay line tags
* [getPayLineFromEmployee](#getpaylinefromemployee) - Gets the specified pay line from the employee
* [getPayLinesFromEmployee](#getpaylinesfromemployee) - Gets the pay lines from the specified employee
* [getPayLinesFromPayRun](#getpaylinesfrompayrun) - Gets the pay lines from the specified pay run
* [getPayLinesWithTag](#getpaylineswithtag) - Get pay lines with tag

## getAllPayLineTags

Gets all the pay line tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllPayLineTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllPayLineTagsRequest();
    $request->apiVersion = 'molestiae';
    $request->authorization = 'provident';
    $request->employeeId = 'accusamus';
    $request->employerId = 'necessitatibus';

    $response = $sdk->payLine->getAllPayLineTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayLineFromEmployee

Returns the specified pay line from employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayLineFromEmployeeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayLineFromEmployeeRequest();
    $request->apiVersion = 'tempore';
    $request->authorization = 'sint';
    $request->employeeId = 'ea';
    $request->employerId = 'autem';
    $request->payLineId = 'ipsam';

    $response = $sdk->payLine->getPayLineFromEmployee($request);

    if ($response->payLine !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayLinesFromEmployee

Get links to all pay lines for the specified employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayLinesFromEmployeeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayLinesFromEmployeeRequest();
    $request->apiVersion = 'rerum';
    $request->authorization = 'laudantium';
    $request->employeeId = 'corporis';
    $request->employerId = 'officiis';

    $response = $sdk->payLine->getPayLinesFromEmployee($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayLinesFromPayRun

Get links to all pay lines for the specified pay run

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayLinesFromPayRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayLinesFromPayRunRequest();
    $request->apiVersion = 'voluptatibus';
    $request->authorization = 'cum';
    $request->employerId = 'at';
    $request->payRunId = 'alias';
    $request->payScheduleId = 'quia';

    $response = $sdk->payLine->getPayLinesFromPayRun($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayLinesWithTag

Gets the pay line with the tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayLinesWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayLinesWithTagRequest();
    $request->apiVersion = 'quidem';
    $request->authorization = 'fuga';
    $request->employeeId = 'repudiandae';
    $request->employerId = 'accusantium';
    $request->tagId = 'expedita';

    $response = $sdk->payLine->getPayLinesWithTag($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
