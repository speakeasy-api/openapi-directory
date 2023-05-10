# tweetReports

### Available Operations

* [getReportsTweetCreate](#getreportstweetcreate) - Used to create tweet reports
* [postReportsTweetCreate](#postreportstweetcreate) - Used to create tweet reports

## getReportsTweetCreate

This report details the audience of the users who have tweeted content that matches what was provided in the keywords. To create custom or twitter reports other methods must be used.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReportsTweetCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportsTweetCreateRequest();
    $request->endDate = 870013;
    $request->filter = 'at';
    $request->reportName = 'maiores';
    $request->startDate = 473608;
    $request->terms = 'quod';

    $response = $sdk->tweetReports->getReportsTweetCreate($request);

    if ($response->createTweet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postReportsTweetCreate

This report details the audience of the users who have tweeted content that matches what was provided in the keywords. To create custom or twitter reports other methods must be used.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostReportsTweetCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostReportsTweetCreateRequest();
    $request->endDate = 800911;
    $request->filter = 'esse';
    $request->reportName = 'totam';
    $request->startDate = 780529;
    $request->terms = 'dolorum';

    $response = $sdk->tweetReports->postReportsTweetCreate($request);

    if ($response->createTweet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
