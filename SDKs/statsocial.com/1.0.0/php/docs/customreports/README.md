# customReports

### Available Operations

* [getReportsCustomCreate](#getreportscustomcreate) - Step 3 of executing custom report
* [getReportsCustomGenerate](#getreportscustomgenerate) - Step 1 of executing custom report
* [getReportsCustomInsert](#getreportscustominsert) - Step 2 of executing custom report
* [postReportsCustomCreate](#postreportscustomcreate) - Step 3 of executing custom report
* [postReportsCustomGenerate](#postreportscustomgenerate) - Step 1 of executing custom report
* [postReportsCustomInsert](#postreportscustominsert) - Step 2 of executing custom report

## getReportsCustomCreate

Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReportsCustomCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportsCustomCreateRequest();
    $request->filter = 'distinctio';
    $request->uploadHash = 'quibusdam';

    $response = $sdk->customReports->getReportsCustomCreate($request);

    if ($response->customCreate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportsCustomGenerate

Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReportsCustomGenerateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportsCustomGenerateRequest();
    $request->reportName = 'unde';

    $response = $sdk->customReports->getReportsCustomGenerate($request);

    if ($response->customGenerate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportsCustomInsert

Inserting twitter ids or handles into a custom report. This is used for custom reports only


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReportsCustomInsertRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportsCustomInsertRequest();
    $request->ids = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->uploadHash = 'deserunt';

    $response = $sdk->customReports->getReportsCustomInsert($request);

    if ($response->customInsert !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postReportsCustomCreate

Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostReportsCustomCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostReportsCustomCreateRequest();
    $request->filter = 'suscipit';
    $request->uploadHash = 'iure';

    $response = $sdk->customReports->postReportsCustomCreate($request);

    if ($response->customCreate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postReportsCustomGenerate

Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostReportsCustomGenerateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostReportsCustomGenerateRequest();
    $request->reportName = 'magnam';

    $response = $sdk->customReports->postReportsCustomGenerate($request);

    if ($response->customGenerate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postReportsCustomInsert

Inserting twitter ids or handles into a custom report. This is used for custom reports only


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostReportsCustomInsertRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostReportsCustomInsertRequest();
    $request->ids = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->uploadHash = 'molestiae';

    $response = $sdk->customReports->postReportsCustomInsert($request);

    if ($response->customInsert !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
